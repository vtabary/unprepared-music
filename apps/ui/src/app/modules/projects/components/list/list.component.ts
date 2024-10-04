import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
} from '@angular/core';
import { Router } from '@angular/router';
import { Subject, takeUntil } from 'rxjs';
import { LibraryService } from '../../../shared';

@Component({
  selector: 'unprepared-music-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ListComponent implements AfterViewInit {
  private onDestroy$ = new Subject<void>();

  constructor(private library: LibraryService, private router: Router) {}

  public ngAfterViewInit(): void {
    this.onLoadProject();
  }

  /**
   * @internal
   */
  public onLoadProject() {
    this.library
      .load()
      .pipe(takeUntil(this.onDestroy$))
      .subscribe(() => {
        this.router.navigateByUrl('/library');
      });
  }
}
