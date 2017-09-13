import { Component, OnInit, ViewContainerRef, Pipe, OnDestroy, Input } from '@angular/core';
import { Router} from '@angular/router';
import { DataTableDirective } from 'angular-datatables';
import { Subject } from 'rxjs/Rx';
import { DatePipe } from '@angular/common';
import { FilterService } from 'ng-filter';
import { environment } from '../../../../environments/environment';
import { IMyDrpOptions} from 'mydaterangepicker';
import { RouterModule, Routes} from '@angular/router';
import { Subscription } from 'rxjs/Subscription';

import { NavbarComOrdersService } from '../../../services/navbar-com-orders.service';
import { OrderDetailsService } from '../../../services/order-details.service';
import { OrderService} from '../../../services/order.service';
import { OrdersService } from '../orders-service/orders.service';

import { OrdersNavigationComponent } from '../orders-navigation/orders-navigation.component';



@Component({
  selector: 'app-orders-table',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.scss']

})
export class OrdersComponent implements OnInit, OnDestroy {


  displayOnPageCounter;
  selectChannelFilter;

  filterSKUvalue;
  checkBoxId;
  orders;
  startDate;
  endDate;

  private subscription: Subscription;

  //rows on page by default
  rowsOnPage= 10;

  //orderBy Sorting
  reverse: boolean = false;
  order: string = 'name';

  //filterBy
  userFilter: any = { from: '' };

  numberOfRows: number = 0;

  constructor(private orderService:OrderService,
              private orderDetailsService:OrderDetailsService,
              private router: Router,
              private navbarComOrdersService:NavbarComOrdersService,
              private ordersService:OrdersService,
            )
              {
               if(ordersService.tabsChoice == "ALL"){
                 setTimeout(() => {
                      this.getAllOrders();
                  }, 200);
              }

              if(ordersService.tabsChoice != "ALL"){
                setTimeout(()=> {
               this.getOrdersByStatus(ordersService.tabsChoice);
               },200);

             }
           }

private getAllOrders(){
  this.orderService.getAllOrders().then(
    (results) => { this.orders = results }
  )
}

private getOrdersByStatus(status){
  this.orderService.getOrdersByStatus(status).then(
    (results) => { this.orders = results }
  )
}

  //Date Picker
  private myDateRangePickerOptions: IMyDrpOptions = {
        // other options...
        dateFormat: 'dd.mm.yyyy',
    };

//Managing ▼ ▲ when sorted
  setOrder(value: string) {
    if (this.order === value) {
      this.reverse = !this.reverse;
    }
    this.order = value;
  }


//Life cycle hook called by Angular2
  ngOnInit() {


//Communicating with the Navbar Component through the navbar-com-orders service
//Get order list depends of the navbar header choice

  /*  this.subscription = this.navbarComOrdersService.notifyObservable$.subscribe((res) => {

      if (res.hasOwnProperty('option') && res.option === 'Created') {
        this.getOrdersByStatus('Created');
      }
      if (res.hasOwnProperty('option') && res.option === 'ReadyToShip') {
        this.getOrdersByStatus('ReadyToShip');
      }
      if (res.hasOwnProperty('option') && res.option === 'Shipped') {
        this.getOrdersByStatus('Shipped');
      }
      if (res.hasOwnProperty('option') && res.option === 'PendingInvoice') {
        this.getOrdersByStatus('PendingInvoice');
      }

      if (res.hasOwnProperty('option') && res.option === 'All') {
        this.orderService.getOrders().subscribe(orders => {
          this.orders = orders;
          this.numberOfRows=orders.length;
          this.navbarComOrdersService.choiceService = 'All Orders';
          this.getDropdownChannelsList();
        });
      }

    });


    if(this.navbarComOrdersService.choiceService === undefined){
    this.orderService.getOrders().subscribe(orders => {
      this.orders = orders;
      this.numberOfRows=orders.length;
      this.getDropdownChannelsList();
    });
  }

    if(this.navbarComOrdersService.choiceService){
      if(this.navbarComOrdersService.choiceService === 'All Orders'){
        this.orderService.getOrders().subscribe(orders => {
          this.orders = orders;
          this.numberOfRows=orders.length;
        });
      }else
        { this.getOrdersByStatus(this.navbarComOrdersService.choiceService);
        };

    }
*/
  }


ngOnDestroy(){
  //  console.log("DESTROY");
  //  this.subscription.unsubscribe();
}

//GetOrdersByStatus



//DROPDOWN channels
dropdownSelection  = "Channels";
  selectChannel(channel){
      this.selectChannelFilter = channel;
      this.dropdownSelection = channel;
 }

 selectAll(){

     this.selectChannelFilter = '';
     this.dropdownSelection = 'Channels';
 }

 passValuesToService(chosenOrderId: String, salesChannelOrderId: String, salesChannel: String, orderStatus: String, orderType: String, buyerEmail: String,
                     name: String, addressLine1: String, city: String, stateOrRegion: String, postalCode: String, countryCode: String )
                     {
                       this.orderDetailsService.chosenOrderId = chosenOrderId;
                       this.orderDetailsService.salesChannelOrderId = salesChannelOrderId;
                       this.orderDetailsService.salesChannel = salesChannel;
                       this.orderDetailsService.orderStatus = orderStatus;
                       this.orderDetailsService.orderType = orderType;
                       this.orderDetailsService.buyerEmail = buyerEmail;
                       this.orderDetailsService.name = name;
                       this.orderDetailsService.addressLine1 = addressLine1;
                       this.orderDetailsService.city = city;
                       this.orderDetailsService.stateOrRegion = stateOrRegion;
                       this.orderDetailsService.postalCode = postalCode;
                       this.orderDetailsService.countryCode = countryCode;
                      }

//Counts how many rows display on page
 DisplayOnPageCounter(value){
    this.displayOnPageCounter = value;
 }

 //Get list for the DROPDOWN CHANNEL
 dropChannelsList = [];

  getDropdownChannelsList(){
    var counter: number = 0;
    var testArrayCounter = 0;
    var check:boolean;

    this.dropChannelsList = [];

  if(this.orders === undefined){console.log("!! Undefined orders object")};

      if(this.orders != undefined){
        console.log("Dropdown runned successfully!!");
        if(this.orders.salesChannel != undefined){
        this.dropChannelsList[0]=this.orders[0].salesChannel;
        }
        for(counter; counter<this.orders.length ; counter++){
          testArrayCounter = 0;

          for(testArrayCounter; testArrayCounter<=this.dropChannelsList.length; testArrayCounter++){
              if(this.orders[counter].salesChannel === this.dropChannelsList[testArrayCounter]){
                check = true;
                break;
              }
              if(this.orders[counter].salesChannel !== this.dropChannelsList[testArrayCounter]){
                check = false;
              }
        }
        if(check === false){
          this.dropChannelsList[this.dropChannelsList.length] = this.orders[counter].salesChannel ;
        }

        }
      }
        console.log(this.dropChannelsList);
  }
}
