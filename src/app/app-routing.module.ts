import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainLayoutComponent } from './components/main-layout/main-layout.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';


const routes: Routes = [
  {
    path: '',
    component: MainLayoutComponent,
    children: [
      {
        path: '',
        component: DashboardComponent,
      },
      {
        path: 'music-library',
        loadChildren: () => import('./modules/music-library/music-library.module').then(m => m.MusicLibraryModule),
      },
      {
        path: 'configuration',
        loadChildren: () => import('./modules/configuration/configuration.module').then(m => m.ConfigurationModule),
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
