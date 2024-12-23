import { ChangeDetectionStrategy, Component } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import {
  FileInputComponent,
  LayoutColumnComponent,
} from '@local/ui-components';
import { Subject, takeUntil } from 'rxjs';
import { LibraryService } from '../../../shared/index';

@Component({
  selector: 'unprepared-music-project-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [LayoutColumnComponent, FileInputComponent, ReactiveFormsModule],
})
export class ListComponent {
  /**
   * @internal
   */
  public form = new FormGroup({
    file: new FormControl<string | null>(null, [Validators.required]),
  });
  private onDestroy$ = new Subject<void>();

  constructor(private library: LibraryService, private router: Router) {}

  /**
   * @internal
   */
  public onLoadProject() {
    const filePath = this.form.get('file')?.value;
    if (!filePath) {
      return;
    }

    this.library
      .load(filePath)
      .pipe(takeUntil(this.onDestroy$))
      .subscribe(() => {
        this.router.navigateByUrl('/library');
      });
  }
}
