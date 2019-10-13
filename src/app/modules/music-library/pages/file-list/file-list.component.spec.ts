import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ClarityModule } from '@clr/angular';
import { NgxElectronModule } from 'ngx-electron';

import { FileListComponent } from './file-list.component';

describe('FileListComponent', () => {
  let component: FileListComponent;
  let fixture: ComponentFixture<FileListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FileListComponent ],
      imports: [
        ClarityModule,
        NgxElectronModule,
      ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FileListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
