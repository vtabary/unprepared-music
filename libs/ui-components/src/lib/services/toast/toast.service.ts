import { EventEmitter, Injectable } from '@angular/core';
import { IFileFunctions } from '@local/shared-interfaces';
import { Observable, Subject } from 'rxjs';

declare global {
  interface Window {
    file: IFileFunctions;
  }
}

@Injectable({
  providedIn: 'root',
})
export class ToastService {
  /**
   * @internal
   */
  public notification = new EventEmitter<{
    message: string;
    title?: string;
    action?: string;
    actionOutput?: Subject<void>;
  }>();

  /**
   * Display a toast notification
   */
  public show(options: {
    message: string;
    title?: string;
  }): Record<string, never>;
  public show(options: { message: string; title?: string; action: string }): {
    action: Observable<void>;
  };
  public show(options: { message: string; title?: string; action?: string }): {
    action?: Observable<void>;
  } {
    const action = options.action ? new Subject<void>() : undefined;
    this.notification.emit({
      ...options,
      actionOutput: action,
    });
    return { action: action?.asObservable() };
  }
}
