import { Component, OnInit, ViewContainerRef, Pipe, OnDestroy, Input } from '@angular/core';
import { Router} from '@angular/router';
import { DataTableDirective } from 'angular-datatables';
import { Subject } from 'rxjs/Rx';
import { FilterService } from 'ng-filter';
import { environment } from '../../../../environments/environment';
import { IMyDrpOptions,IMyDateRangeModel} from 'mydaterangepicker';
import { RouterModule, Routes} from '@angular/router';
import { Subscription } from 'rxjs/Subscription';

import { NavbarComOrdersService } from '../../../services/navbar-com-orders.service';
import { OrderDetailsService } from '../../../services/order-details.service';
import { OrderService} from '../../../services/order.service';
import { OrdersService } from '../orders-service/orders.service';

import { OrdersNavigationComponent } from '../orders-navigation/orders-navigation.component';

const moment = require('../../../../../node_modules/moment/moment.js');



@Component({
  selector: 'app-orders-table',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.scss']

})
export class OrdersComponent implements OnInit, OnDestroy {

  public dropChannelsList: any[] = [];
  public dropSelected: string = "Channels";

  //pagination
  p:number = 1;
  ordersNumberDisplayed: number;

  //date-picker
  beginDate;
  endDate;


  displayOnPageCounter;
  selectChannelFilter;

  filterSKUvalue;
  checkBoxId;
  orders;




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

               if(ordersService.tabsChoice == "ALL" || ordersService.tabsChoice == undefined){
                 ordersService.title = "All Orders";
                 setTimeout(() => {
                      this.getAllOrders();
                  }, 200);
              }

              if(ordersService.tabsChoice != "ALL" && ordersService.tabsChoice != undefined ){
                setTimeout(()=> {
                     this.getOrdersByStatus(ordersService.tabsChoice);
                 },200);

             }
           }

private getAllOrders(){
  this.orderService.getAllOrders().then(
    (results) => { this.orders = results,
                   this.getDropdownChannelsList(),
                   this.ordersNumberDisplayed = this.orders.length }
  )
}

private getOrdersByStatus(status){
  this.orderService.getOrdersByStatus(status).then(
    (results) => { this.orders = results,
                   this.getDropdownChannelsList(),
                   this.ordersNumberDisplayed = this.orders.length  }
  )
}

//Get list for the DROPDOWN CHANNEL

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

//PAGINATION
//Counts how many rows display on page
  DisplayOnPageCounter(value){
     this.displayOnPageCounter = value;
  }



/////////////////////////**********************************************

  //Date Picker


  private myDateRangePickerOptions: IMyDrpOptions = {
        // other options...
        dateFormat: 'yyyy-mm-dd',
    };

  onDateRangeChanged(event: IMyDateRangeModel) {
        // event properties are: event.beginDate, event.endDate, event.formatted,
        // event.beginEpoc and event.endEpoc

        console.log(event.beginDate.month);


        this.beginDate = new Date (event.beginDate.year, event.beginDate.month-1, event.beginDate.day,0,0,0,0 );
        this.endDate = new Date (event.endDate.year, event.endDate.month-1, event.endDate.day,0,0,0,0 );

        console.log(this.beginDate);
        console.log(this.endDate);

        /*
        console.log(this.orders[1].date);

        var b = moment(this.beginDate).format('DD/MM/YYYY');
        moment('01/12/2016', 'DD/MM/YYYY', true).format()

        console.log(b);
        */
    }


//Managing ▼ ▲ when sorted
  setOrder(value: string) {
    if (this.order === value) {
      this.reverse = !this.reverse;
    }
    this.order = value;
  }


//Life cycle hook called by Angular2
  ngOnInit() {


  }


ngOnDestroy(){
  //  console.log("DESTROY");
  //  this.subscription.unsubscribe();
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

}
