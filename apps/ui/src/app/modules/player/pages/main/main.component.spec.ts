import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { SharedModule } from '../../../shared/shared.module';
import { PlayerComponent } from '../../components/player/player.component';
import { PlaylistItemComponent } from '../../components/playlist-item/playlist-item.component';
import { PlaylistComponent } from '../../components/playlist/playlist.component';
import { MainComponent } from './main.component';

describe('MainComponent', () => {
  let component: MainComponent;
  let fixture: ComponentFixture<MainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        MainComponent,
        PlayerComponent,
        PlaylistComponent,
        PlaylistItemComponent,
      ],
      imports: [SharedModule, FontAwesomeModule],
    }).compileComponents();

    fixture = TestBed.createComponent(MainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
