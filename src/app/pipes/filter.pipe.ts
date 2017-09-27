import { Pipe, PipeTransform } from '@angular/core';
import { NavbarComOrdersService } from '../services/navbar-com-orders.service';
import { InventoryComponent } from '../components/inventory/inventory-sku-mapping/inventory.component';

var counter;

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

              transform(arrayList: any, term: any, arg1: any): any {

                if( term === undefined || term === "Channels" || term === "All") return arrayList;

                if(arg1 === 'marketplace'){

                     return arrayList.filter(function(result){
                       return result.marketplace.toLowerCase().includes(term.toLowerCase());
                     });

                }
              return arrayList.filter(function(order){
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
                  name: 'filterSku',
              })

            export class FilterStockSkuPipe implements PipeTransform {


                      transform(arrayList: any, term: any, arg1: any): any {
                        let array;
                        let counter=0;

                        if( term === undefined || term === '') return arrayList;
                        if(arg1 === 'inventory'){
                                                  return arrayList.filter(function(result){
                                                    array = result.sku.toLowerCase().includes(term.toLowerCase());
                                                    if(array === true){
                                                      counter++;
                                                      console.log(counter);

                                                    }
                                                  return result.sku.toLowerCase().includes(term.toLowerCase());
                                                });
                                              };
                        if(arg1 === 'marketplace'){
                                                  return arrayList.filter(function(result){
                                                    array = result.sku.toLowerCase().includes(term.toLowerCase());
                                                    if(array === true){
                                                    //  this.orderService.counter++;
                                                    //  console.log(orderService.counter);
                                                    }
                                                  return result.mpsku.toLowerCase().includes(term.toLowerCase());
                                                });
                                              };
                }
            }
