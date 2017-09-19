import { Component, OnInit } from '@angular/core';
import { OrderService} from '../../../services/order.service';

@Component({
  selector: 'app-products-stock',
  templateUrl: './products-stock.component.html',
  styleUrls: ['./products-stock.component.scss']
})
export class ProductsStockComponent implements OnInit {

  private marketplacesList;
  private inventory;

  private searchSkuValue;




  constructor(private orderService: OrderService) {

    setTimeout(() => {
        this.getMarketplaces();
     }, 200);

     setTimeout(() => {
          this.getInventory();
      }, 200);
  }

  ngOnInit() {

  }


  getMarketplaces(){
    this.orderService.getMarketplaces().then(
      (results) => (this.marketplacesList = results, console.log(this.marketplacesList))
    )

  }

  getInventory(){
    this.orderService.getAllInventory().then(
      (results) => (this.inventory = results, console.log(this.inventory))
    )

  }

  setSearchSkuValue(sku){
    this.searchSkuValue = sku;
  }


}
