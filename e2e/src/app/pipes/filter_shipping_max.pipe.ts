import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterShipMax'
})
export class FilterShipMaxPipe implements PipeTransform {

  transform(value, args?) {

    let max = args;

    if( args === undefined){
      return value;
    }

    if( args < 1 ) {
      return value.filter(orders => {
        return orders.shipping_fee >= max;
      });
    }

      return value.filter(orders => {
        return orders.shipping_fee <= max;
    });
    

  }
}
