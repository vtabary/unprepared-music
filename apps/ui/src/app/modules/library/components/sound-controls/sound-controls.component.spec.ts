import { provideHttpClient } from '@angular/common/http';
import { provideHttpClientTesting } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { SharedModule } from '../../../shared/shared.module';
import { SoundControlsComponent } from './sound-controls.component';

describe('SoundControlsComponent', () => {
  let component: SoundControlsComponent;
  let fixture: ComponentFixture<SoundControlsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SoundControlsComponent],
      imports: [SharedModule, FontAwesomeModule],
      providers: [provideHttpClient(), provideHttpClientTesting()],
    }).compileComponents();

    fixture = TestBed.createComponent(SoundControlsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
