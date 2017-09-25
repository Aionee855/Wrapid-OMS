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

  constructor(private orderService: OrderService) {

    setTimeout(() => {
         this.getSkuMapping();
     }, 200);
   }

  ngOnInit() {

  }

  getSkuMapping(){
    this.orderService.getMarketplaceMappings().then(
      (results) => (this.inventory = results, console.log(this.inventory))
    )

  }

  toggle(){
     this.hideToggle = !this.hideToggle;
  }




}
