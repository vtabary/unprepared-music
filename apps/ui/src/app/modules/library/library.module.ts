import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { SharedPlayerModule } from '../shared-player/shared-player.module';
import { SharedModule } from '../shared/shared.module';
import { ListComponent } from './components/list/list.component';
import { SoundCardComponent } from './components/sound-card/sound-card.component';
import { SoundControlsComponent } from './components/sound-controls/sound-controls.component';
import { LibraryRoutingModule } from './library-routing.module';
import { AddLibraryComponent } from './pages/add/add.component';
import { MainComponent } from './pages/main/main.component';

@NgModule({
  declarations: [
    SoundControlsComponent,
    MainComponent,
    ListComponent,
    SoundCardComponent,
    AddLibraryComponent,
  ],
  imports: [
    CommonModule,
    LibraryRoutingModule,
    ReactiveFormsModule,
    SharedModule,
    SharedPlayerModule,
    FontAwesomeModule,
  ],
})
export class LibraryModule {}
