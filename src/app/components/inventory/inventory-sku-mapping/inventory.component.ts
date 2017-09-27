import { Component, OnInit, ViewEncapsulation, Input } from '@angular/core';

import { OrderService} from '../../../services/order.service';

@Component({
  selector: 'app-inventory',
  templateUrl: './inventory.component.html',
  styleUrls: ['./inventory.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class InventoryComponent implements OnInit {

 inventory;
 hideToggle = true;
 hideme = [];
 totalRows:number;
 mpChoice;
 private dropSelection:String;

//PAGINATION - variables//
 rowsOnPage = 10;
 private p: number;
 private numberOfRowsOnPage:number;
 private lastIndexOnPage:number;
 private firstIndexOnPage:number;



 //Marketplaces dropdown//
 private mpList: Object;


  constructor(private orderService: OrderService) {
    this.p = 1;
    this.dropSelection = 'All Marketplaces';

    setTimeout(() => {
         this.getSkuMapping();
     }, 200);

     this.getMarketplaces();
   }

  ngOnInit() {

  }

  getSkuMapping(){
    this.orderService.getMarketplaceMappings().then(
      (results) => (this.inventory = results,
                    console.log(this.inventory,
                    this.totalRows = this.inventory.length))
    )
  }

  getMarketplaces(){
    this.orderService.getMarketplaces().then(
      (results) => { this.mpList = results});
  }

  toggle(){
     this.hideToggle = !this.hideToggle;
  }

  //PAGINATION//

  getNumberOfRowsOnPage(i){
    this.numberOfRowsOnPage = i + 1;
  }
  getIndexNumber(i){
    this.lastIndexOnPage = (i+1)+(this.p*this.rowsOnPage)-this.rowsOnPage;
    return (i+1)+(this.p*this.rowsOnPage)-this.rowsOnPage;
  }
  getFirstIndexOnPage(i){
    this.firstIndexOnPage = this.lastIndexOnPage - i + 2;
    if(this.firstIndexOnPage <= 0){
      this.firstIndexOnPage = 1;
      }
    if(this.firstIndexOnPage >= this.lastIndexOnPage ){
        this.firstIndexOnPage = this.lastIndexOnPage;
      }
  }


}
