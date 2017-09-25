import { Component, OnInit } from '@angular/core';
import { OrderService} from '../../../services/order.service';

@Component({
  selector: 'app-products-stock',
  templateUrl: './products-stock.component.html',
  styleUrls: ['./products-stock.component.scss']
})
export class ProductsStockComponent implements OnInit {

  private marketplacesList;
  private marketplacesMapping;
  private inventory;

  private searchSkuValue;

  private test;




  constructor(private orderService: OrderService) {

    setTimeout(() => {
        this.getMarketplaces();
     }, 200);

     setTimeout(() => {
          this.getInventory();
      }, 200);

      setTimeout(() => {
           this.getMarketplaceMappings();
       }, 200);

  }

  ngOnInit() {

  }

  getMarketplaceMappings(){
    console.log("Marketplace Mapping");
    this.orderService.getMarketplaceMappings().then(
      (results) => (this.marketplacesMapping = results, console.log(this.marketplacesMapping))
    )
  }


  getMarketplaces(){
    console.log("Marketplaces List");
    this.orderService.getMarketplaces().then(
      (results) => (this.marketplacesList = results, console.log(this.marketplacesList))
    )

  }

  getInventory(){
    console.log("Inventory");
    this.orderService.getProducts('inventory').then(
      (results) => (this.inventory = results, console.log(this.inventory))
    )

  }

  setSearchSkuValue(sku){
    this.searchSkuValue = sku;
  }

  checkTrueFalse(sku, marketplace){
    console.log(sku, marketplace);
    let counter=0;

    if(this.marketplacesMapping === undefined){ return;};

    for(counter; counter < this.marketplacesMapping.length; counter++){
            if(sku === this.marketplacesMapping[counter].sku && marketplace === this.marketplacesMapping[counter].marketplace ){
              this.test = sku;
        return true;
      }
    }
    return false;
    }
  }
