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



  navbarChoiceClick(value, title){
    console.log("choice CLICK");
     this.ordersService.tabsChoice = value;
     this.ordersService.title = title;
  }



}
