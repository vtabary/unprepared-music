import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SoundCardComponent } from './SoundCard.component';

describe('SoundCardComponent', () => {
  let component: SoundCardComponent;
  let fixture: ComponentFixture<SoundCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SoundCardComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(SoundCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
