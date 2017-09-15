import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterDateMax'
})
export class FilterDateMaxPipe implements PipeTransform {

  transform(value, args?) {
    let max = args;

    if( args === undefined){
      return value;
    }

    if( args < 1 ) {
      return value.filter(orders => {
        return orders.date >= max;
      });
    }
      return value.filter(orders => {
        return orders.date<= max;
    });
  }
}

@Pipe({
  name: 'filterDateMin'
})
export class FilterDateMinPipe implements PipeTransform {

  transform(value, args?) {

    console.log("filter date pipe run!!");
      if( args === undefined) return value;

      //let min = args;
      return value.filter(orders => {
        return orders.date == args;
      });


    }


}
