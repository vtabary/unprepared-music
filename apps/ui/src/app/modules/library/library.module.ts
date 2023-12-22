import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { SharedModule } from '../shared/shared.module';
import { LibraryRoutingModule } from './library-routing.module';
import { SoundControlsComponent } from './components/sound-controls/sound-controls.component';
import { MainComponent } from './pages/main/main.component';
import { ListComponent } from './components/list/list.component';
import { SoundCardComponent } from './components/sound-card/sound-card.component';

@NgModule({
  declarations: [
    SoundControlsComponent,
    MainComponent,
    ListComponent,
    SoundCardComponent,
  ],
  imports: [
    CommonModule,
    LibraryRoutingModule,
    ReactiveFormsModule,
    SharedModule,
    FontAwesomeModule,
  ],
})
export class LibraryModule {}
