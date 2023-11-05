import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from './components/button/button.component';
import { LabelComponent } from './components/label/label.component';

@NgModule({
  declarations: [ButtonComponent, LabelComponent],
  imports: [CommonModule],
  exports: [ButtonComponent, LabelComponent],
})
export class SharedComponentsModule {}
