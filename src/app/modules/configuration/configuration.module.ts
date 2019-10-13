import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { NgxElectronModule } from 'ngx-electron';
import { SharedModule } from '../shared/shared.module';
import { GeneralComponent } from './pages/general/general.component';
import { ConfigurationRoutingModule } from './configuration-routing.module';
import { AddFolderComponent } from './components/add-folder/add-folder.component';
import { BrowseFolderComponent } from './components/browse-folder/browse-folder.component';

@NgModule({
  declarations: [GeneralComponent, AddFolderComponent, BrowseFolderComponent],
  imports: [
    CommonModule,
    SharedModule,
    ConfigurationRoutingModule,
    ReactiveFormsModule,
    NgxElectronModule,
  ]
})
export class ConfigurationModule { }
