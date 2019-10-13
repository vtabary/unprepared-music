import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { Component } from '@angular/core';
import { IConfiguration, ConfigurationService, MusicLibraryService, IMusicLibrary } from 'src/app/modules/shared/public-api';

@Component({
  selector: 'app-general',
  templateUrl: './general.component.html',
  styleUrls: ['./general.component.scss']
})
export class GeneralComponent {
  public configuration: IConfiguration = {};
  public musicLibrary: IMusicLibrary = [];
  public configuration$: Observable<IConfiguration>;
  public musicLibrary$: Observable<IMusicLibrary>;

  constructor(
    private configurationService: ConfigurationService,
    private musicLibraryService: MusicLibraryService
  ) {
    this.configuration$ = this.configurationService.open()
      .pipe(tap(configuration => this.configuration = configuration));
    this.musicLibrary$ = this.musicLibraryService.open()
      .pipe(tap(library => this.musicLibrary = library));
  }

  public onAddFolder(folderPath: string) {
    if (!folderPath) {
      return;
    }

    this.musicLibrary.push({ path: folderPath, items: [] });
    this.saveMusicLibrary();
  }

  public onRemove(folderPath: string) {
    if (!folderPath) {
      return;
    }

    this.musicLibrary = this.musicLibrary.filter(folder => folder.path === folderPath);
    this.saveConfiguration();
  }

  private saveConfiguration() {
    this.configurationService.save(this.configuration)
      .subscribe();
  }

  private saveMusicLibrary() {
    this.musicLibraryService.save(this.musicLibrary)
      .subscribe();
  }
}
