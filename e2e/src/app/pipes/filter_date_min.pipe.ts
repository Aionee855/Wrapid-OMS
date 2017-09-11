import { Pipe, PipeTransform } from '@angular/core';
import { DatePipe } from '@angular/common';

@Pipe({
  name: 'filterDateMin'
})
export class FilterDateMinPipe implements PipeTransform {



  transform(value, args?) {

      if( args === undefined) return value;

      let min = args;
      return value.filter(orders => {

        return orders.date >= min;

      });
    }
}
