import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterShipMin'
})
export class FilterShipMinPipe implements PipeTransform {

  transform(value, args?) {

      if( args === undefined) return value;

      let min = args;
      return value.filter(orders => {

        return orders.shipping_fee >= +min;

      });
    }
}
