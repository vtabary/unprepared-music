import { ChangeDetectionStrategy, Component, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { first } from 'rxjs';
import { FileService } from '../../services/file/file.service';

@Component({
  selector: 'uc-directory-input',
  templateUrl: './directory-input.component.html',
  styleUrls: ['./directory-input.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      multi: true,
      useExisting: forwardRef(() => DirectoryInputComponent),
    },
  ],
  imports: [],
})
export class DirectoryInputComponent implements ControlValueAccessor {
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

  constructor(private readonly file: FileService) {}

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
      .openDirectory()
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
