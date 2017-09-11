import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterMax'
})
export class FilterMaxPipe implements PipeTransform {

  transform(value, args?) {

    let max = args;

    if( args === undefined){
      return value;
    }

    if( args < 1 ) {
      return value.filter(orders => {
        return orders.value_at >= max;
      });
    }

      return value.filter(orders => {
        return orders.value_at <= max;
    });
  }
}
