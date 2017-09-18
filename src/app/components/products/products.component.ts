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

   constructor(private orderService: OrderService) {

     setTimeout(() => {
          this.getInventory();
      }, 200);
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

}
