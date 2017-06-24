
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'city',
  pure: true
})
export class CityPipe implements PipeTransform {

  transform(value: string, fmt: string, lang: string): string {

    let short;
    let long;

    switch(value) {
      case 'Graz':
        short = 'GRZ';
        long = 'Flughafen Graz Thalerhof';
        break;
      case 'Hamburg':
        short = 'HAM';
        long = 'Aiport Hamburg Fulsbüttel - Helmut Schmidt';
        break;
      default:
        short = long = 'ROM';
    }

    if (fmt == 'short') {
      return short;
    }
    return long;

  }

}
