import {
  ChangeDetectionStrategy,
  Component,
  OnDestroy,
  OnInit,
} from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { first, of, Subject, switchMap, takeUntil } from 'rxjs';
import { AudioService, LibraryService } from '../../../shared';

@Component({
  selector: 'unprepared-music-add-library',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AddLibraryComponent implements OnInit, OnDestroy {
  /**
   * @internal
   */
  public form = new FormGroup({
    file: new FormControl<string>('', [Validators.required]),
    label: new FormControl<string>(''),
    tags: new FormControl<string>(''),
  });

  private onDestroy$ = new Subject<void>();
  private currentDuration = -1;

  constructor(
    private library: LibraryService,
    private audio: AudioService,
    private router: Router
  ) {}

  public ngOnInit(): void {
    this.form.controls.file.valueChanges
      .pipe(
        takeUntil(this.onDestroy$),
        switchMap((value) => {
          if (value) {
            return this.audio.getMetadata(value);
          }

          return of(undefined);
        })
      )
      .subscribe((value) => {
        this.form.patchValue({
          label: value?.label,
          tags: value?.tags.join(', '),
        });
        this.currentDuration =
          value?.duration === undefined ? -1 : value?.duration;
      });
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
  public onAdd(): void {
    if (!this.form.value.file) {
      return;
    }

    this.library
      .add({
        path: 'local://' + this.form.value.file,
        label: this.form.value.label ?? 'test',
        tags: this.form.value.tags?.split(',') ?? [],
        type: 'music',
      })
      .pipe(first())
      .subscribe(() => {
        void this.router.navigateByUrl('/library');
      });
  }
}
