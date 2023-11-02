import { Component, OnDestroy, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormControl, FormGroup } from '@angular/forms';
import {
  Observable,
  Subject,
  combineLatest,
  debounceTime,
  map,
  startWith,
  takeUntil,
} from 'rxjs';
import Fuse, { FuseResult } from 'fuse.js';

interface ISound {
  path: string;
  tags: string[];
}

@Component({
  selector: 'unprepared-music-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent implements OnInit, OnDestroy {
  /**
   * @internal
   */
  public list$: Observable<ISound[]>;

  /**
   * @internal
   */
  public form = new FormGroup({
    terms: new FormControl<string>(''),
  });

  private onSearch$ = new Subject<string>();
  private onDestroy$ = new Subject<void>();
  // private fuse?: Fuse<ISound>;

  constructor(private http: HttpClient) {
    this.list$ = combineLatest([
      this.http.get<ISound[]>('./assets/sounds/list.json').pipe(
        map((list) => {
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

          return { list, fuse };
        })
      ),

      this.onSearch$.pipe(startWith('')),
    ]).pipe(
      map(([{ fuse, list }, terms]) => {
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
  public onSearch() {
    this.onSearch$.next(this.form.value.terms ?? '');
  }
}
