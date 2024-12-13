import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'duration',
  standalone: true,
})
export class DurationPipe implements PipeTransform {
  public transform(value: number): string {
    const hundredths = Math.round((value - Math.floor(value)) * 100);
    const seconds = Math.floor(value) % 60;
    const hours = Math.floor(value / 3600);
    const minutes = Math.floor((value - hours * 3600) / 60);

    const result: string[] = [];
    if (hours > 0) {
      result.push(hours.toString().padStart(2, '0'));
    }

    result.push(
      minutes.toString().padStart(2, '0'),
      seconds.toString().padStart(2, '0')
    );
    return `${result.join(':')}.${hundredths.toString().padStart(2, '0')}`;
  }
}
