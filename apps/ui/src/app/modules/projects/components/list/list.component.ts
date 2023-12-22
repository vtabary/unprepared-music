import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
} from '@angular/core';
import { LibraryService } from '../../../shared';
import { Router } from '@angular/router';

@Component({
  selector: 'unprepared-music-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ListComponent implements AfterViewInit {
  constructor(private library: LibraryService, private router: Router) {}

  public ngAfterViewInit(): void {
    this.onLoadProject();
  }

  public onLoadProject() {
    this.library.load().subscribe(() => {
      this.router.navigateByUrl('/library');
    });
  }
}
