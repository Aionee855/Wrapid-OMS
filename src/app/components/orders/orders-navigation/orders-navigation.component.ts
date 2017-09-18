import { Component, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { OrdersComponent } from '../orders-table/orders.component';
import { OrdersService } from '../orders-service/orders.service';
import { OrderService} from '../../../services/order.service';

@Component({
  selector: 'app-orders-navigation',
  templateUrl: './orders-navigation.component.html',
  styleUrls: ['./orders-navigation.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class OrdersNavigationComponent implements OnInit {

  private numberOfAll;
  private numberOfNew;
  private numberOfConfirmed;
  private numberOfRTS;
  private numberOfShipped;
  private numberOfPendingInvoice;
  private numberOfCancelled;



  constructor(private ordersService:OrdersService, private orderService: OrderService) {
  this.getNumberOfStatus();
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

  getNumberOfStatus(){

    this.orderService.getCountByStatus('Created').then(
      (results) => { this.numberOfNew = results}
    )
    this.orderService.getCountByStatus('Confirmed').then(
      (results) => { this.numberOfConfirmed = results}
    )
    this.orderService.getCountByStatus('ReadyToShip').then(
      (results) => { this.numberOfRTS = results}
    )
    this.orderService.getCountByStatus('Shipped').then(
      (results) => { this.numberOfShipped = results}
    )
    this.orderService.getCountByStatus('PendingInvoice').then(
      (results) => { this.numberOfPendingInvoice = results}
    )
    this.orderService.getCountByStatus('Cancelled').then(
      (results) => { this.numberOfCancelled = results}
    )
  }

  navbarChoiceClick(value, title){
    console.log("choice CLICK");
     this.ordersService.tabsChoice = value;
     this.ordersService.title = title;
  }



}
