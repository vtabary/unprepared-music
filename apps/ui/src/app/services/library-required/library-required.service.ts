import { Injectable } from '@angular/core';
import { LibraryService } from '../../modules/shared';
import { Router, UrlTree } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class LibraryRequiredService {
  constructor(private library: LibraryService, private router: Router) {}

  public canActivate(): true | UrlTree {
    return this.library.isLoaded()
      ? true
      : this.router.createUrlTree(['projects']);
  }
}
