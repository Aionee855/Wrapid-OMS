import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterDateMax'
})
export class FilterDateMaxPipe implements PipeTransform {

  dateMaxValue;
  transform(value, args?) {
      console.log("FILTER MAX DATE is running");
      console.log(args);

    if(args == undefined || args == '' || args == 'Thu Nov 30 1899 00:00:00 GMT+0000 (GMT Standard Time)'){ return value};

    return value.filter(orders => {
      this.dateMaxValue = new Date(orders.date);
      if(this.dateMaxValue <= args){
      return orders.date;
    }
    });
  }
}

@Pipe({
  name: 'filterDateMin'
})
export class FilterDateMinPipe implements PipeTransform {

  dateMinValue;
  transform(value, args?) {
      console.log("FILTER MIN DATE is running");

    if(args == undefined || args == '' || args == 'Thu Nov 30 1899 00:00:00 GMT+0000 (GMT Standard Time)'){ return value};

    return value.filter(orders => {
      this.dateMinValue = new Date(orders.date);
      if(this.dateMinValue >= args){
      return orders.date;
    }
    });
  }

}
