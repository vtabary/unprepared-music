import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ButtonComponent } from './components/button/button.component';
import { ChipsComponent } from './components/chips/chips.component';
import { AudioComponent } from './components/audio/audio.component';

@NgModule({
  declarations: [ButtonComponent, ChipsComponent, AudioComponent],
  imports: [CommonModule, HttpClientModule],
  exports: [ButtonComponent, ChipsComponent, AudioComponent],
})
export class SharedModule {}
