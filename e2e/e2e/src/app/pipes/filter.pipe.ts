import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'filterSKU',
    pure: false
})
export class FilterPipe implements PipeTransform {
        transform(orders: any, term: any): any {
          if( term === undefined) return orders;
        return orders.filter(function(order){
          return order.salesChannelOrderId.toLowerCase().includes(term.toLowerCase());
        })
      }
    }

@Pipe({
        name: 'filterStatus',

    })
  export class FilterStatusPipe implements PipeTransform {
            transform(orders: any, term: any): any {
              if( term === undefined) return orders;
            return orders.filter(function(order){
              return order.orderStatus.toLowerCase().includes(term.toLowerCase());
        })
      }
  }
