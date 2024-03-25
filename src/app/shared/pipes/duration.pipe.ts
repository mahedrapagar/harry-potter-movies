import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'duration'
})
export class DurationPipe implements PipeTransform {
  transform(minutes?: number): string {
    let result = '';
    if(minutes){
      const hours = Math.floor(minutes / 60);
      const remainingMinutes = minutes % 60;


      if (hours > 0) {
        result += `${hours} ${hours === 1 ? 'hour' : 'hours'}`;
      }

      if (remainingMinutes > 0) {
        if (result !== '') {
          result += ' and ';
        }
        result += `${remainingMinutes} ${remainingMinutes === 1 ? 'minute' : 'minutes'}`;
      }
    }
    return result !== '' ? result : '0 minutes';
  }
}
