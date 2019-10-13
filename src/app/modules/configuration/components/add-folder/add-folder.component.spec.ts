import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { ClarityModule } from '@clr/angular';

import { AddFolderComponent } from './add-folder.component';

describe('AddFolderComponent', () => {
  let component: AddFolderComponent;
  let fixture: ComponentFixture<AddFolderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddFolderComponent ],
      imports: [
        ReactiveFormsModule,
        ClarityModule,
      ],
      schemas: [ NO_ERRORS_SCHEMA ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddFolderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
