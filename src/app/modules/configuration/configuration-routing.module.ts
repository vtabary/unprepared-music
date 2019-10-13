import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GeneralComponent } from './pages/general/general.component';

const routes: Routes = [
  {
    path: '',
    component: GeneralComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ConfigurationRoutingModule { }
