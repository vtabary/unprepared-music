import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { FileListComponent } from './pages/file-list/file-list.component';
import { MusicLibraryRoutingModule } from './music-library-routing.module';

@NgModule({
  declarations: [ FileListComponent ],
  imports: [
    CommonModule,
    SharedModule,
    MusicLibraryRoutingModule,
  ]
})
export class MusicLibraryModule { }
