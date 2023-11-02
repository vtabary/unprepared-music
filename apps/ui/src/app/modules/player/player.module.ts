import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { PlayerRoutingModule } from './player-routing.module';
import { SoundComponent } from './components/sound/sound.component';
import { MainComponent } from './pages/main/main.component';
import { ListComponent } from './components/list/list.component';
import { DevicesComponent } from './components/devices/devices.component';

@NgModule({
  declarations: [
    SoundComponent,
    MainComponent,
    ListComponent,
    DevicesComponent,
  ],
  imports: [
    CommonModule,
    PlayerRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
  ],
})
export class PlayerModule {}
