import { Component, OnInit, ViewContainerRef, Pipe  } from '@angular/core';
import { OrderService} from '../../services/order.service';
import { Router} from '@angular/router';
import { DataTableDirective } from 'angular-datatables';
import { Subject } from 'rxjs/Rx';
import { DatePipe } from '@angular/common';
import { FilterService } from 'ng-filter';
import { environment } from '../../../environments/environment';
import {IMyDrpOptions} from 'mydaterangepicker';
import { NavbarComOrdersService } from '../../services/navbar-com-orders.service';
import { RouterModule, Routes} from '@angular/router';


@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.scss'],

})
export class OrdersComponent implements OnInit {

  title;

  somevalue;
  filterSKUvalue;
  checkBoxId;
  orders;
  startDate;
  endDate;


  //rows on page by default
  rowsOnPage= 10;

  //orderBy Sorting
  reverse: boolean = false;
  order: string = 'name';

  //filterBy
  userFilter: any = { from: '' };

  constructor(private orderService:OrderService, private router: Router, private navbarComOrdersService:NavbarComOrdersService) {
  this.ngOnInit();
  }

  //Date Picker
  private myDateRangePickerOptions: IMyDrpOptions = {
        // other options...
        dateFormat: 'dd.mm.yyyy',
    };

  setOrder(value: string) {
    if (this.order === value) {
      this.reverse = !this.reverse;
    }
    this.order = value;
  }

  refresh(): void {
    window.location.reload();
  };

  ngOnInit() {
    console.log("ngOnInit");

    this.orderService.getOrders().subscribe(orders => {
      this.orders = orders;
      console.log(this.orderService.getOrders());
    });

    $('table_orders').DataTable().ajax.reload();

  ;

  }

onDeleteClick(){
  console.log(this.orders);

}
}
@Component({
  selector: 'demo-dropdown-split',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.scss'],
})
export class DemoDropdownSplitComponent {

}
