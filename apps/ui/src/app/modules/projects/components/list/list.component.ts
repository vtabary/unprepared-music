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
import { ProjectsHistoryService } from '../../services/project-history/project-history.service';

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
  /**
   * @internal
   */
  public previousFiles: string[];

  private readonly onDestroy$ = new Subject<void>();

  constructor(
    private readonly library: LibraryService,
    private readonly projectHistory: ProjectsHistoryService,
    private readonly router: Router
  ) {
    this.previousFiles = this.projectHistory.listEntries();
  }

  /**
   * @internal
   */
  public onLoadProject() {
    const filePath = this.form.get('file')?.value;
    this.onLoadFile(filePath ?? undefined);
  }

  /**
   * @internal
   */
  public onLoadFile(filePath: string | undefined): void {
    if (!filePath) {
      return;
    }

    this.library
      .load(filePath)
      .pipe(takeUntil(this.onDestroy$))
      .subscribe(() => {
        this.projectHistory.addEntry(filePath);
        this.router.navigateByUrl('/library');
      });
  }
}
