import { Component, Output, EventEmitter } from '@angular/core';
import { ElectronService } from 'ngx-electron';

@Component({
  selector: 'app-browse-folder',
  templateUrl: './browse-folder.component.html',
  styleUrls: ['./browse-folder.component.scss']
})
export class BrowseFolderComponent {
  @Output()
  public folder = new EventEmitter<string>();

  constructor(
    private electron: ElectronService
  ) { }

  public onBrowse() {
    if (!this.electron.isElectronApp) {
      return;
    }

    this.electron.remote.dialog.showOpenDialog({
      properties: ['openDirectory'],
    }).then(result => {
      if (result.canceled) {
        return;
      }

      this.folder.emit(result.filePaths[0]);
    });
  }

}
