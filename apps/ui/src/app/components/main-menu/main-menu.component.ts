import { AsyncPipe, NgClass } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { IconComponent } from '@local/ui-components';
import { LibraryService } from '../../modules/shared';

@Component({
  selector: 'unprepared-music-main-menu',
  templateUrl: './main-menu.component.html',
  styleUrls: ['./main-menu.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [RouterLink, IconComponent, RouterLinkActive, NgClass, AsyncPipe],
})
export class MainMenuComponent {
  @Input()
  public collapseMenu = false;

  /**
   * @internal
   */
  public isLibraryLoaded$ = this.library.loaded;

  constructor(private readonly library: LibraryService) {}
}
