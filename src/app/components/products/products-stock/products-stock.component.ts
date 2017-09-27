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

  private arrayOfUnAllocated: number[];
  private arrayOfAllocated: number[];



  constructor(private orderService: OrderService) {

    this.arrayOfUnAllocated = [];
    this.arrayOfAllocated = [];


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

  getQuantity(){
    let counter = 0;

    for(counter; counter < this.inventory.length; counter++){
      this.arrayOfUnAllocated[counter] = this.inventory[counter].quantity;
      this.arrayOfAllocated[counter] = 0;
    }

  }

  getMarketplaceMappings(){
    console.log("Marketplace Mapping");
    this.orderService.getMarketplaceMappings().then(
      (results) => (this.marketplacesMapping = results, console.log(this.marketplacesMapping))
    )
  }


  getMarketplaces(){
  //  console.log("Marketplaces List");
    this.orderService.getMarketplaces().then(
      (results) => (this.marketplacesList = results, console.log(this.marketplacesList))
    )

  }

  getInventory(){
    console.log("Inventory");
    this.orderService.getProducts('inventory').then(
      (results) => (this.inventory = results, console.log(this.inventory), this.getQuantity())
    )
  }

  setSearchSkuValue(sku){
    this.searchSkuValue = sku;
  }

  checkTrueFalse(sku, marketplace){
  //  console.log(sku, marketplace);
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

    findQuantity(skuInv, mp, i){
      let counter=0;
      for(counter; counter < this.marketplacesMapping.length; counter++){
        if(skuInv === this.marketplacesMapping[counter].sku && mp === this.marketplacesMapping[counter].marketplace){
          if(this.arrayOfUnAllocated[i] != undefined && this.arrayOfAllocated[i] != undefined){
          this.arrayOfUnAllocated[i] -= this.marketplacesMapping[counter].quantity;
          this.arrayOfAllocated[i] += +this.marketplacesMapping[counter].quantity;
          }
          return this.marketplacesMapping[counter].quantity;
        }
      }
    }
  }
