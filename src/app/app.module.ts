import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { SharedModule } from './modules/shared/shared.module';
import { RootComponent } from './pages/root/root.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { MainLayoutComponent } from './components/main-layout/main-layout.component';
import { AppRoutingModule } from './app-routing.module';
import { NgxElectronModule } from 'ngx-electron';

@NgModule({
  declarations: [
    RootComponent,
    DashboardComponent,
    MainLayoutComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    BrowserAnimationsModule,
    NgxElectronModule,
  ],
  providers: [],
  bootstrap: [RootComponent]
})
export class AppModule { }
