import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { DevicesComponent } from './components/devices/devices.component';
import { DevicesRoutingModule } from './devices-routing.module';
import { ListComponent } from './pages/list/list.component';

@NgModule({
  imports: [
    CommonModule,
    DevicesRoutingModule,
    SharedModule,
    ListComponent,
    DevicesComponent,
  ],
})
export class DevicesModule {}
