import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { ButtonComponent } from './components/button/button.component';
import { ChipsComponent } from './components/chips/chips.component';
import { AudioComponent } from './components/audio/audio.component';

@NgModule({ declarations: [ButtonComponent, ChipsComponent, AudioComponent],
    exports: [ButtonComponent, ChipsComponent, AudioComponent], imports: [CommonModule], providers: [provideHttpClient(withInterceptorsFromDi())] })
export class SharedModule {}
