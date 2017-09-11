import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterMin'
})
export class FilterMinPipe implements PipeTransform {

  transform(value, args?) {

      let min = args;

      if( args === undefined) return value;
      return value.filter(orders => {
        return orders.value_at >= +min;
      });
    }
}
