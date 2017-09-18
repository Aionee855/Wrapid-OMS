import { Component, OnInit } from '@angular/core';
import { RouterModule, Routes} from '@angular/router';
import { Subscription } from 'rxjs/Subscription';

import { OrderService} from '../../services/order.service';
import { NavbarComOrdersService } from '../../services/navbar-com-orders.service';



@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {



  choiceNavbarHeader;

//Navbar header - variables - count how many orders by status
  numberOfOrdersByCreated;
  numberOfOrdersByRTS;
  numberOfOrdersByShipped;
  numberOfOrdersByPI;
  numberOfAllOrders;



//Make Navbar header buttons active
    reverse: boolean = false;
    activeButton: string = 'name';

    setActiveButton(value: string) {
      if (this.activeButton === value) {
        this.reverse = !this.reverse;
      }
      this.activeButton = value;
    }

  constructor(private navbarComOrdersService:NavbarComOrdersService, private orderService:OrderService) {

//Runs all GETS number functions for the navbar header
  this.getNumberOfAllOrders();
  this.getNumberOfOrdersByStatus('Created');
  this.getNumberOfOrdersByStatus('ReadyToShip');
  this.getNumberOfOrdersByStatus('Shipped');
  this.getNumberOfOrdersByStatus('PendingInvoice');
  }

  toogle(){
    $(function () {
  $('#dash').on('click', function (e) {
    $('#wrapper').toggleClass('toggled');
    e.stopPropagation();
    return false;
  });
  });
  }

  setChoiceNavbar(choiceNavbarHeader: string){
    this.navbarComOrdersService.choiceService = choiceNavbarHeader;
  }

//Communication between navbar.component->navbar-co-orders.service->orders.component
  navbarHeadingChoiceStatus(value){
    this.navbarComOrdersService.notifyOther({option: value, value: 'From header'});
  }

//NG constructor - toggle side navbar
  ngOnInit() {
    $(function () {
  $('#menu-toggle').on('click', function (e) {
    $('#wrapper').toggleClass('toggled');
    e.stopPropagation();
    return false;
  });
  $('*:not(#menu-toggle)').on('click', function () {
    $('#wrapper').removeClass('toggled');
  });
});

  }

//Navbar header - counts how many orders and shows in 'badge'
getNumberOfAllOrders(){
      var numberOfAllOrders;
      this.orderService.getOrders().subscribe(number => {
      numberOfAllOrders = number;
      this.numberOfAllOrders = numberOfAllOrders.length;
    });

}

getNumberOfOrdersByStatus(status){
      var numberOfOrders;
      this.orderService.getNumberOfOrdersByStatus(status).subscribe(number => {
      numberOfOrders = number;

      console.log(numberOfOrders);

      if(status==='Created'){
        this.numberOfOrdersByCreated = number;
      }
      if(status==='ReadyToShip'){
        this.numberOfOrdersByRTS= number;
      }
      if(status==='Shipped'){
        this.numberOfOrdersByShipped= number;
      }
      if(status==='PendingInvoice'){
        this.numberOfOrdersByPI = number;
      }
  });
}


}
