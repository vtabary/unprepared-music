import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { SharedModule } from '../../../shared/shared.module';
import { PlaylistItemComponent } from './playlist-item.component';

describe('PlaylistItemComponent', () => {
  let component: PlaylistItemComponent;
  let fixture: ComponentFixture<PlaylistItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PlaylistItemComponent],
      imports: [SharedModule, FontAwesomeModule],
    }).compileComponents();

    fixture = TestBed.createComponent(PlaylistItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
