import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { SharedModule } from '../shared/shared.module';
import { PlayerComponent } from './components/player/player.component';
import { PlaylistItemComponent } from './components/playlist-item/playlist-item.component';
import { PlaylistComponent } from './components/playlist/playlist.component';
import { MainComponent } from './pages/main/main.component';
import { PlayerRoutingModule } from './player-routing.module';

@NgModule({
  imports: [
    CommonModule,
    PlayerRoutingModule,
    SharedModule,
    FontAwesomeModule,
    PlaylistComponent,
    PlayerComponent,
    MainComponent,
    PlaylistItemComponent,
  ],
})
export class PlayerModule {}
