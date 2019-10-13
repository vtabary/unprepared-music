import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-add-folder',
  templateUrl: './add-folder.component.html',
  styleUrls: ['./add-folder.component.scss']
})
export class AddFolderComponent {
  @Input()
  public addFolderModal = false;

  @Output()
  public folder = new EventEmitter<string>();

  public group: FormGroup;

  constructor(
    formBuilder: FormBuilder
  ) {
    this.group = formBuilder.group({
      folder: '',
    });
  }

  public onAdd() {
    this.addFolderModal = false;
    if (!this.group.value.folder) {
      return;
    }

    this.folder.emit(this.group.value.folder);
  }

  public onSelect(path: string) {
    if (!path) {
      return;
    }

    this.group.setValue({
      folder: path,
    });
  }
}
