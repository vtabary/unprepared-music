import {
  ChangeDetectionStrategy,
  Component,
  forwardRef,
  Input,
  ViewChild,
} from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { first } from 'rxjs';
import { FileService } from '../../services/file/file.service';
import { ButtonComponent } from '../button/button.component';

@Component({
  selector: 'unprepared-components-file-input',
  templateUrl: './file-input.component.html',
  styleUrls: ['./file-input.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      multi: true,
      useExisting: forwardRef(() => FileInputComponent),
    },
  ],
  standalone: true,
  imports: [ButtonComponent],
})
export class FileInputComponent implements ControlValueAccessor {
  @Input()
  public accept = 'audio/*';

  @ViewChild('fileInput', { read: HTMLInputElement })
  public fileInput!: HTMLInputElement;

  /**
   * @internal
   */
  public disabled = false;

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  private onChange = (_: string) => {
    // Method will be replaced by Angular
  };
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  private onTouched = (_: string) => {
    // Method will be replaced by Angular
  };

  constructor(private file: FileService) {}

  public registerOnChange(fn: (_: string) => void): void {
    this.onChange = fn;
  }

  public registerOnTouched(fn: (_: string) => void): void {
    this.onTouched = fn;
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  public writeValue(_: string): void {
    // Browser does not allow to set value of file input
  }

  /**
   * @internal
   */
  public onSelect(): void {
    // We have to use the window.file API (custom electron API)
    // since Electron does not allow to set full path in a file input
    this.file
      .open('')
      .pipe(first())
      .subscribe((result) => {
        this.onTouched(result[0]);
        this.onChange(result[0]);
      });
  }

  /**
   * @internal
   */
  public setDisabledState(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }
}
