import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListComponent } from './pages/list/list.component';
import { DevicesComponent } from './components/devices/devices.component';
import { SharedModule } from '../shared/shared.module';
import { DevicesRoutingModule } from './devices-routing.module';

@NgModule({
  declarations: [ListComponent, DevicesComponent],
  imports: [CommonModule, DevicesRoutingModule, SharedModule],
})
export class DevicesModule {}
