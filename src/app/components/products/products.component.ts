import { Component, OnInit, ViewEncapsulation, Input } from '@angular/core';

import { OrderService} from '../../services/order.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  inventory;
  hideToggle = true;
  hideme = [];

  private productValue:String;
  private productValueToSearch:String;

  private categorySearchValue: String;
  private subcategorySearchValue: String;
  private categoryName: String;

  private MENSCLOTHES: string[];
  private MENSSHOES: string[];
  private WOMENSCLOTHES: string[];
  private WOMENSSHOES: string[];

  private CATEGORY: Object[];




  arrayOfSortedInventory;

   constructor(private orderService: OrderService) {

     this.categoryName = "All Categories";

     this.MENSCLOTHES = ["T-Shirts/Tops", "Sweatshirts/Hoodies", "Jackets", "Pants"];
     this.MENSSHOES = ["Sneakers", "Running", "Football", "Sandals/Flipflops"];
     this.WOMENSCLOTHES = ["T-Shirts/Tops", "Sweatshirts/Hoodies", "Jackets", "Pants"];
     this.WOMENSSHOES = ["Sneakers", "Running", "Football", "Sandals/Flipflops"];

     this.CATEGORY = [{category: "Mens Clothing", subcategory: this.MENSCLOTHES},
                         {category: "Mens Shoes", subcategory: this.MENSSHOES},
                         {category: "Womens Clothing", subcategory: this.WOMENSCLOTHES},
                         {category: "Womens Shoes", subcategory: this.WOMENSSHOES}];



     setTimeout(() => {
          this.getInventory();
      }, 200);

      setTimeout(() => {
           this.getAllInventorySorted();
       }, 800);

    }

   ngOnInit() {
   }

   getInventory(){
     this.orderService.getAllInventory().then(
       (results) => (this.inventory = results, console.log(this.inventory))
     )

   }

   toggle(){
      this.hideToggle = !this.hideToggle;
   }

///////////////////////////////

   getAllInventorySorted(){

      let counterInput: number=0;
      var arrayOfSortedInventory=[];
      console.log(this.inventory);

      for(counterInput; counterInput < this.inventory.length; counterInput++ ){

        if(counterInput == 0 || this.inventory[counterInput].productCode != this.inventory[counterInput-1].productCode){
         arrayOfSortedInventory.push({'productCode':this.inventory[counterInput].productCode,
                                      'productName':this.inventory[counterInput].productName,
                                      'category':this.inventory[counterInput].category,
                                      'subCategory':this.inventory[counterInput].subCategory,
                                      'variants':this.inventory[counterInput].variants,
                                      'size1':this.inventory[counterInput].size,
                                      'size2':this.inventory[counterInput+1].size,
                                      'size3':this.inventory[counterInput+2].size,
                                      'size4':this.inventory[counterInput+3].size,
                                      'sellingPrice':this.inventory[counterInput].sellingPrice,
                                      'stockQuantity1':this.inventory[counterInput].stockQuantity,
                                      'stockQuantity2':this.inventory[counterInput+1].stockQuantity,
                                      'stockQuantity3':this.inventory[counterInput+2].stockQuantity,
                                      'stockQuantity4':this.inventory[counterInput+3].stockQuantity,
                                      'sku1':this.inventory[counterInput].sku,
                                      'sku2':this.inventory[counterInput+1].sku,
                                      'sku3':this.inventory[counterInput+2].sku,
                                      'sku4':this.inventory[counterInput+3].sku
                                     },
                                   );
        console.log(arrayOfSortedInventory);
       }

      }
      this.arrayOfSortedInventory = arrayOfSortedInventory;
   }

   searchProduct(value){
     this.productValueToSearch = value;
   }

   setCategoryName(category,subcategory){
     if(subcategory == ''){
       this.categoryName = category;
     }
     else{
     this.categoryName = category + '/' + subcategory;
   }
   }

   setSearchCategories(value){
     this.categorySearchValue = value;
   }

   setSearchSubCategories(category, subcategory){
     this.subcategorySearchValue = subcategory;
     this.categorySearchValue = category;
   }

}
