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
  trigger;

  private knob: boolean[];

  private productValue:String;
  private productValueToSearch:String;

  private categorySearchValue: String;
  private subcategorySearchValue: String;
  private categoryName: String;

  private MENSCLOTHES: string[];
  private MENSSHOES: string[];
  private WOMENSCLOTHES: string[];
  private WOMENSSHOES: string[];
  private PRODUCTACTIVATION: string[];

  private CATEGORY: Object[];
  private _valueSearchProductActivation_default:string;




  arrayOfSortedInventory;

   constructor(private orderService: OrderService) {

     this.knob =[];
     this.trigger=true;
     this._valueSearchProductActivation_default = 'All';

     this.categoryName = "All Categories";

     this.MENSCLOTHES = ["T-Shirts", "Sweatshirts/Hoodies", "Jackets", "Pants"];
     this.MENSSHOES = ["Sneakers", "Running Shoes", "Football", "Sandals/Flipflops"];
     this.WOMENSCLOTHES = ["T-Shirts", "Sweatshirts/Hoodies", "Jackets", "Pants"];
     this.WOMENSSHOES = ["Sneakers", "Running Shoes", "Football", "Sandals/Flipflops"];

     this.CATEGORY = [{category: "Mens Clothing", subcategory: this.MENSCLOTHES},
                         {category: "Mens Shoes", subcategory: this.MENSSHOES},
                         {category: "Womens Clothing", subcategory: this.WOMENSCLOTHES},
                         {category: "Womens Shoes", subcategory: this.WOMENSSHOES}];
    this.PRODUCTACTIVATION = ["All", "Enabled", "Disabled"];



     setTimeout(() => {
          this.getItems();
      }, 200);

      setTimeout(() => {
           this.getAllInventorySorted();
       }, 800);

    }

   ngOnInit() {

   }

   getItems(){
     this.orderService.getProducts('items').then(
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
      console.log("Inventory Length");
      console.log(this.inventory.length);


      for(counterInput; counterInput < this.inventory.length; counterInput++ ){


         arrayOfSortedInventory.push({'productCode':this.inventory[counterInput].id,
                                      'productName':this.inventory[counterInput].description,
                                      'category':this.inventory[counterInput].category,
                                      'subCategory':this.inventory[counterInput].subcategory,
                                      'productActivation':this.inventory[counterInput].productActivation,
                                      //'variants':this.inventory[counterInput].variants,
                                      //'size1':this.inventory[counterInput].size,
                                      //'size2':this.inventory[counterInput+1].size,
                                      //'size3':this.inventory[counterInput+2].size,
                                      //'size4':this.inventory[counterInput+3].size,
                                      'sellingPrice':this.inventory[counterInput].price,
                                      //'stockQuantity1':this.inventory[counterInput].stockQuantity,
                                      //'stockQuantity2':this.inventory[counterInput+1].stockQuantity,
                                      //'stockQuantity3':this.inventory[counterInput+2].stockQuantity,
                                      //'stockQuantity4':this.inventory[counterInput+3].stockQuantity,
                                      'sku':this.inventory[counterInput].sku,
                                      //'sku2':this.inventory[counterInput+1].sku,
                                      //'sku3':this.inventory[counterInput+2].sku,
                                      //'sku4':this.inventory[counterInput+3].sku
                                    });
       }

      this.arrayOfSortedInventory = arrayOfSortedInventory;
      console.log('SORTED INVENTORY');
      console.log(arrayOfSortedInventory);
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

   setValueSearchProductActivation(value){
     if(value === 'All'){
       return '';
     }
     if(value === 'Enabled'){
       return true;
     }
     if(value === 'Disabled'){
       return false;
     }
   }

}
