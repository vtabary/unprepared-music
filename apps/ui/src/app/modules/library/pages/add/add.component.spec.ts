import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { provideRouter } from '@angular/router';
import { SharedModule } from '../../../shared/shared.module';
import { AddLibraryComponent } from './add.component';

describe('AddLibraryComponent', () => {
  let component: AddLibraryComponent;
  let fixture: ComponentFixture<AddLibraryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AddLibraryComponent],
      imports: [SharedModule, ReactiveFormsModule],
      providers: [provideRouter([])],
    }).compileComponents();

    fixture = TestBed.createComponent(AddLibraryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
