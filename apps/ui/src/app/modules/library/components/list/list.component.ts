import {
  ChangeDetectionStrategy,
  Component,
  HostListener,
  OnDestroy,
  OnInit,
} from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import {
  Observable,
  Subject,
  debounceTime,
  map,
  startWith,
  takeUntil,
} from 'rxjs';
import Fuse from 'fuse.js';
import { ISound, LibraryService } from '../../../shared';

@Component({
  selector: 'unprepared-music-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ListComponent implements OnInit, OnDestroy {
  /**
   * @internal
   */
  public results$: Observable<ISound[]>;

  /**
   * @internal
   */
  public form = new FormGroup({
    terms: new FormControl<string>(''),
  });

  private onSearch$ = new Subject<string>();
  private onDestroy$ = new Subject<void>();

  constructor(private library: LibraryService) {
    const list = this.library.list();
    const fuse = new Fuse(list, {
      isCaseSensitive: false,
      keys: ['tags'],
      includeMatches: false,
      findAllMatches: false,
      minMatchCharLength: 2,
      distance: 100,
      useExtendedSearch: false,
      shouldSort: true,
    });

    this.results$ = this.onSearch$.pipe(startWith('')).pipe(
      map((terms) => {
        if (terms.length < 2) {
          return list;
        }
        return fuse.search(terms).map((results) => results.item);
      })
    );
  }

  public ngOnInit(): void {
    this.form.valueChanges
      .pipe(takeUntil(this.onDestroy$), debounceTime(100))
      .subscribe(() => this.onSearch());
  }

  /**
   * @internal
   */
  public ngOnDestroy(): void {
    this.onDestroy$.next(undefined);
  }

  /**
   * @internal
   */
  public onSearch(): void {
    this.onSearch$.next(this.form.value.terms ?? '');
  }

  /**
   * @internal
   */
  @HostListener('window:')
  public onQueryFill(): void {}
}