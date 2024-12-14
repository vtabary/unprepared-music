import { Route } from '@angular/router';
import { libraryRequiredGuard } from './guards/library-required/library-required.guard';

export const appRoutes: Route[] = [
  {
    path: '',
    canActivate: [libraryRequiredGuard],
    children: [
      {
        path: 'library',
        loadChildren: () =>
          import('./modules/library/library.module').then(
            (m) => m.LibraryModule
          ),
      },
      {
        path: 'devices',
        loadChildren: () =>
          import('./modules/devices/devices.module').then(
            (m) => m.DevicesModule
          ),
      },
      {
        path: '',
        outlet: 'sidebar',
        loadChildren: () =>
          import('./modules/player/player.module').then((m) => m.PlayerModule),
      },
    ],
  },
  {
    path: 'projects',
    loadChildren: () =>
      import('./modules/projects/projects.module').then(
        (m) => m.ProjectsModule
      ),
  },
  {
    path: '**',
    redirectTo: 'library',
    pathMatch: 'full',
  },
];
