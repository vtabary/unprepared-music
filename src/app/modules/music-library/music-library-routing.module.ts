import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FileListComponent } from './pages/file-list/file-list.component';

const routes: Routes = [
  {
    path: '',
    component: FileListComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MusicLibraryRoutingModule { }
