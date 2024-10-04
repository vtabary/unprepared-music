import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { SoundCardComponent } from './sound-card.component';

describe('SoundCardComponent', () => {
  let component: SoundCardComponent;
  let fixture: ComponentFixture<SoundCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SoundCardComponent],
      providers: [provideRouter([])],
    }).compileComponents();

    fixture = TestBed.createComponent(SoundCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
