import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'numberToTime',
})
export class NumberToTimePipe implements PipeTransform {
  transform(value: number): string {
    let sign = value < 0 ? '-' : '';
    let wholeHours = Math.floor(Math.abs(value));
    let minutes = Math.floor((Math.abs(value) * 60) % 60);
    return sign + wholeHours + ':' + (minutes < 10 ? '0' : '') + minutes;
  }
}
