import { Observable, of, from, EMPTY } from 'rxjs';
import { map } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { ElectronService } from 'ngx-electron';

@Injectable({
  providedIn: 'root'
})
export class FileHelperService {
  private fs: any;
  private path: any;
  private util: any;
  private recursive: any;

  constructor(
    private electron: ElectronService
  ) {
    if (!((window as any) as any).require) {
      return;
    }

    this.fs = (window as any).require('fs');
    this.path = (window as any).require('path');
    this.util = (window as any).require('util');
    this.recursive = (window as any).require('recursive-readdir');
  }

  public open(filePath: string): Observable<any> {
    if (!this.electron.isElectronApp) {
      return EMPTY;
    }

    if (!this.fs.existsSync(this.getFullPath(filePath))) {
      return of(null);
    }

    const readFile = this.util.promisify(this.fs.readFile);
    return from(readFile(this.getFullPath(filePath), { encoding: 'utf-8' }))
      .pipe(map((data: string) => JSON.parse(data)));
  }

  public save(filePath: string, json: any): Observable<void> {
    if (!this.electron.isElectronApp) {
      return EMPTY;
    }

    const writeFile = this.util.promisify(this.fs.writeFile);
    return from(writeFile(this.getFullPath(filePath), json, { encoding: 'utf-8' }) as Observable<void>);
  }

  public list(folderPath: string, excluding = [ '.*' ]): Observable<string[]> {
    return from(this.util.promisify(this.recursive)(folderPath, excluding) as Promise<string[]>);
  }

  private getFullPath(filePath: string): string {
    return this.path.join(this.getAppPath(), filePath);
  }

  private getAppPath(): string {
    return this.electron.remote.app.getAppPath();
  }
}
