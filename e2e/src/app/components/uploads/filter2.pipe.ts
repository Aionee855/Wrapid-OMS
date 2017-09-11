import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter2'
})
export class Filter2Pipe implements PipeTransform {

  transform(value, args?) {
      // ES6 array destructuring
      let maxAge = args;
      return value.filter(ninjas => {

        return ninjas.number <= +maxAge;

      });
    }
  }
