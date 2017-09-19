import { Pipe, PipeTransform } from '@angular/core';
import { NavbarComOrdersService } from '../services/navbar-com-orders.service';


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

  @Pipe({
          name: 'filterChannel',
      })

    export class FilterChannelPipe implements PipeTransform {
              transform(orders: any, term: any): any {
                if( term === undefined || term === "Channels" || term === "All") return orders;
              return orders.filter(function(order){
                return order.salesChannel.toLowerCase().includes(term.toLowerCase());
          })
        }
    }

    @Pipe({
            name: 'filterProductCode',
        })

      export class FilterProductCodePipe implements PipeTransform {
                transform(value: any, term: any): any {
                  if( term === undefined ) return value;
                return value.filter(function(data){
                        if(!data.productCode.toLowerCase().includes(term.toLowerCase())){
                          return data.productName.toLowerCase().includes(term.toLowerCase());
                        }
                        else{
                  return data.productCode.toLowerCase().includes(term.toLowerCase());
                }
            })
          }
      }

      @Pipe({
              name: 'filterProductCategory',
          })

        export class FilterProductCategoriesPipe implements PipeTransform {
                  transform(value: any, term: any): any {
                    if( term === undefined || term === '') return value;
                  return value.filter(function(data){

                    return data.category.toLowerCase() == term.toLowerCase();

              })
            }
        }

        @Pipe({
                name: 'filterProductSubCategory',
            })

          export class FilterProductSubCategoriesPipe implements PipeTransform {
                    transform(value: any, term: any): any {
                      if( term === undefined || term === '') return value;
                    return value.filter(function(data){

                      return data.subCategory.toLowerCase() == term.toLowerCase();

                })
              }
          }

          @Pipe({
                  name: 'filterStockSku',
              })

            export class FilterStockSkuPipe implements PipeTransform {
                      transform(value: any, term: any): any {
                        if( term === undefined || term === '') return value;
                      return value.filter(function(inv){

                        return inv.sku.toLowerCase().includes(term.toLowerCase());

                  })
                }
            }
