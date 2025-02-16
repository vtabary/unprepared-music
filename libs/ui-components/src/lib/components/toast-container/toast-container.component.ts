import { AsyncPipe, NgClass } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { delay, map, merge, Observable, Subject } from 'rxjs';
import { ToastService } from '../../services/toast/toast.service';

@Component({
  selector: 'uc-toast-container',
  templateUrl: './toast-container.component.html',
  styleUrls: ['./toast-container.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [AsyncPipe, NgClass],
})
export class ToastContainerComponent {
  @Input()
  public delay = 5000;

  /**
   * @internal
   */
  public toasts$: Observable<
    {
      index: number;
      message: string;
      title?: string;
      action?: string;
      actionOutput?: Subject<void>;
    }[]
  >;

  private readonly clearToasts = new Subject<null>();

  constructor(private readonly toast: ToastService) {
    let toasts: {
      index: number;
      message: string;
      title?: string;
      action?: string;
      actionOutput?: Subject<void>;
    }[] = [];

    this.toasts$ = merge(
      this.toast.notification.pipe(
        map((toast, index) => {
          console.log('add toasts', index);
          toasts.push({ ...toast, index });
          if (toasts.length > 2) {
            toasts = toasts.slice(-2);
          }

          return toasts;
        })
      ),
      this.toast.notification.pipe(delay(this.delay)).pipe(
        map((_, index) => {
          console.log('remove toasts');
          toasts = toasts.filter((item) => index !== item.index);
          return toasts;
        })
      ),
      this.clearToasts.pipe(
        map(() => {
          toasts = [];
          return toasts;
        })
      )
    );
  }

  /**
   * @internal
   */
  public onHide(): void {
    this.clearToasts.next(null);
  }
}
