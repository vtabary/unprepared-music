import { Route } from '@angular/router';

export const appRoutes: Route[] = [
  {
    path: 'player',
    loadChildren: () =>
      import('./modules/player/player.module').then((m) => m.PlayerModule),
  },
  {
    path: '**',
    redirectTo: 'player',
    pathMatch: 'full',
  },
];
