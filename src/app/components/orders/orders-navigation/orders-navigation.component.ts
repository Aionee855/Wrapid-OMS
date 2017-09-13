import { Component, OnInit, ViewChild } from '@angular/core';
import { OrdersComponent } from '../orders-table/orders.component';
import { OrdersService } from '../orders-service/orders.service';

@Component({
  selector: 'app-orders-navigation',
  templateUrl: './orders-navigation.component.html',
  styleUrls: ['./orders-navigation.component.css']
})
export class OrdersNavigationComponent implements OnInit {


  constructor(private ordersService:OrdersService) {

   }

  ngOnInit() {
  }



  navbarChoiceClick(value){
    console.log("choice CLICK");
     this.ordersService.tabsChoice = value;
  }

}
