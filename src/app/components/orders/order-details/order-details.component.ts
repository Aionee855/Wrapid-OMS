import { Component, OnInit, Pipe  } from '@angular/core';
import {Router, ActivatedRoute, Params} from '@angular/router';
import { OrderService} from '../../../services/order.service';
import { FilterService } from 'ng-filter';
import { Subject } from 'rxjs/Rx';
import { RouterModule, Routes} from '@angular/router';

import { OrderDetailsService } from '../../../services/order-details.service';
import { NavbarComOrdersService } from '../../../services/navbar-com-orders.service';


@Component({
  selector: 'app-order-details',
  templateUrl: './order-details.component.html',
  styleUrls: ['./order-details.component.scss']
})
export class OrderDetailsComponent implements OnInit {

ordersDetailsArray = [];
ordersDetails;
orderId;

  constructor(private orderService:OrderService,
              private navbarComOrdersService:NavbarComOrdersService,
              private orderDetailsService:OrderDetailsService
              ) { }

  ngOnInit() {

  // Loading data from 'orders' collection
    this.orderService.getOrderId(this.orderDetailsService.chosenOrderId ).subscribe(ordersDetails => {
      this.ordersDetailsArray = ordersDetails;
      this.ordersDetails = this.ordersDetailsArray[0];
      this.orderId = this.ordersDetails.orderId;
    });
  }

}
