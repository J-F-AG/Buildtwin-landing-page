import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'doubleDigit'
})
export class DoubleDigitPipe implements PipeTransform {

  transform(value: number): string {
    return value < 10 ? '0' + value : value.toString();
  }

}
