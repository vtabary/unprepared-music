import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { SharedModule } from '../shared/shared.module';
import { PlayerRoutingModule } from './player-routing.module';
import { PlaylistComponent } from './components/playlist/playlist.component';
import { PlayerComponent } from './components/player/player.component';
import { MainComponent } from './pages/main/main.component';

@NgModule({
  declarations: [PlaylistComponent, PlayerComponent, MainComponent],
  imports: [CommonModule, PlayerRoutingModule, SharedModule, FontAwesomeModule],
})
export class PlayerModule {}
