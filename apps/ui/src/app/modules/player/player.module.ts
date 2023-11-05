import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { SharedComponentsModule } from '../shared-components/shared-components.module';
import { PlayerRoutingModule } from './player-routing.module';
import { SoundComponent } from './components/sound/sound.component';
import { MainComponent } from './pages/main/main.component';
import { ListComponent } from './components/list/list.component';

@NgModule({
  declarations: [SoundComponent, MainComponent, ListComponent],
  imports: [
    CommonModule,
    PlayerRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    SharedComponentsModule,
    FontAwesomeModule,
  ],
})
export class PlayerModule {}
