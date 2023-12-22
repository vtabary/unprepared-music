import { inject } from '@angular/core';
import { CanActivateFn } from '@angular/router';
import { LibraryRequiredService } from '../../services/library-required/library-required.service';

export const libraryRequiredGuard: CanActivateFn = () => {
  return inject(LibraryRequiredService).canActivate();
};
