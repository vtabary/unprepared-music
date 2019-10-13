import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BrowseFolderComponent } from './browse-folder.component';
import { NgxElectronModule } from 'ngx-electron';

describe('BrowseFolderComponent', () => {
  let component: BrowseFolderComponent;
  let fixture: ComponentFixture<BrowseFolderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BrowseFolderComponent ],
      imports: [ NgxElectronModule ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BrowseFolderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
