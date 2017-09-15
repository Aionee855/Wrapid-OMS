import { Component, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { OrdersComponent } from '../orders-table/orders.component';
import { OrdersService } from '../orders-service/orders.service';

@Component({
  selector: 'app-orders-navigation',
  templateUrl: './orders-navigation.component.html',
  styleUrls: ['./orders-navigation.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class OrdersNavigationComponent implements OnInit {


  constructor(private ordersService:OrdersService) {

   }

  ngOnInit() {

  }

  @ViewChild('tabSet') tabSet;

  ngAfterViewInit() {

    setTimeout(() => {

    switch(this.ordersService.title) {
   case 'All Orders': {
      this.tabSet.select('all-tab');
      break;
   }
   case 'New Orders': {
      this.tabSet.select('new-tab');
      break;
   }
   case 'Confirmed Orders': {
      this.tabSet.select('confirmed-tab');
      break;
   }
   case 'Ready To Ship': {
      this.tabSet.select('rts-tab');
      break;
   }
   case 'Shipped Orders': {
      this.tabSet.select('shipped-tab');
      break;
   }
   case 'Pending Invoice': {
      this.tabSet.select('pending-tab');
      break;
   }
   case 'Cancelled Orders': {
      this.tabSet.select('cancelled-tab');
      break;
   }
   default: {
      //statements;
      break;
   }
}
},)


  }

  navbarChoiceClick(value, title){
    console.log("choice CLICK");
     this.ordersService.tabsChoice = value;
     this.ordersService.title = title;
  }



}
