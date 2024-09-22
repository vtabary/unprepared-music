import {
  ChangeDetectionStrategy,
  Component,
  forwardRef,
  Input,
} from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { first } from 'rxjs';
import { FileService } from '../../services/file/file.service';

@Component({
  selector: 'unprepared-music-file-input',
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
})
export class FileInputComponent implements ControlValueAccessor {
  @Input()
  public accept = 'audio/*';

  /**
   * @internal
   */
  public disabled = false;

  private onChange = (value: string) => {};
  private onTouched = (value: string) => {};

  constructor(private file: FileService) {}

  public registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  public registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  public writeValue(path: string): void {}

  /**
   * @internal
   */
  public onSelect(): void {
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
