import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { ListComponent } from './components/list/list.component';
import { ProjectsRoutingModule } from './projects-routing.module';

@NgModule({
  imports: [CommonModule, ProjectsRoutingModule, SharedModule, ListComponent],
})
export class ProjectsModule {}
