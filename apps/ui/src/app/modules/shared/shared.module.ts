import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ButtonComponent } from './components/button/button.component';
import { ChipsComponent } from './components/chips/chips.component';
import { FileInputComponent } from './components/file-input/file-input.component';
import { LinkComponent } from './components/link/link.component';
import { DurationPipe } from './pipes/duration/duration.pipe';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    RouterModule,
    ButtonComponent,
    ChipsComponent,
    LinkComponent,
    FileInputComponent,
    DurationPipe,
  ],
  exports: [
    ButtonComponent,
    ChipsComponent,
    LinkComponent,
    FileInputComponent,
    DurationPipe,
  ],
})
export class SharedModule {}
