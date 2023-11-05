import { Route } from '@angular/router';

export const appRoutes: Route[] = [
  {
    path: 'player',
    loadChildren: () =>
      import('./modules/player/player.module').then((m) => m.PlayerModule),
  },
  {
    path: 'devices',
    loadChildren: () =>
      import('./modules/devices/devices.module').then((m) => m.DevicesModule),
  },
  {
    path: '**',
    redirectTo: 'player',
    pathMatch: 'full',
  },
];
