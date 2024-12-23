import { ChangeDetectionStrategy, Component } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import {
  DirectoryInputComponent,
  FileInputComponent,
  LayoutColumnComponent,
} from '@local/ui-components';
import { map, NEVER, Observable, Subject, switchMap, takeUntil } from 'rxjs';
import { LibraryService } from '../../../shared/index';
import { ProjectsHistoryService } from '../../services/project-history/project-history.service';

@Component({
  selector: 'unprepared-music-project-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    LayoutColumnComponent,
    FileInputComponent,
    DirectoryInputComponent,
    ReactiveFormsModule,
  ],
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
  public formCreate = new FormGroup({
    directory: new FormControl<string | null>(null, [Validators.required]),
    projectName: new FormControl<string | null>(null, [
      Validators.required,
      Validators.pattern(/^[a-zA-Z0-9-_]+$/),
    ]),
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
    this.previousFiles = this.projectHistory.listEntries().reverse();
  }

  /**
   * @internal
   */
  public onLoadProject() {
    const filePath = this.form.get('file')?.value;
    this.loadFile(filePath ?? undefined).subscribe();
  }

  /**
   * @internal
   */
  public onLoadFile(filePath: string | undefined): void {
    this.loadFile(filePath).subscribe();
  }

  /**
   * @internal
   */
  public onCreateProject(): void {
    if (
      !this.formCreate.value.directory ||
      !this.formCreate.value.projectName
    ) {
      return;
    }
    this.library
      .create(
        this.formCreate.value.directory,
        this.formCreate.value.projectName
      )
      .pipe(switchMap((projectPath) => this.loadFile(projectPath)))
      .subscribe();
  }

  private loadFile(filePath: string | undefined): Observable<void> {
    if (!filePath) {
      return NEVER;
    }

    return this.library.load(filePath).pipe(
      takeUntil(this.onDestroy$),
      map(() => {
        this.projectHistory.addEntry(filePath);
        this.router.navigateByUrl('/library');
      })
    );
  }
}
