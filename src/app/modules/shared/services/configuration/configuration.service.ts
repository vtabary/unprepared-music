import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { FileHelperService } from '../file-helper/file-helper.service';

export interface IConfiguration {
}

@Injectable({
  providedIn: 'root'
})
export class ConfigurationService {
  private defaultFilePath = './config.json';

  constructor(
    public fileHelper: FileHelperService
  ) { }

  public open(): Observable<IConfiguration> {
    return this.fileHelper.open(this.defaultFilePath)
      .pipe(map(data => data ? data : {}));
  }

  public save(configuration: IConfiguration): Observable<void> {
    return this.fileHelper.save(this.defaultFilePath, JSON.stringify(configuration));
  }
}
