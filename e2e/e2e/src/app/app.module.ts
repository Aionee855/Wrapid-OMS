import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {RouterModule, Routes} from '@angular/router';
import { CommonModule } from '@angular/common';
import { ChartsModule } from 'ng2-charts';
import {NgxPaginationModule} from 'ngx-pagination';
import { OrderModule } from 'ngx-order-pipe';
import { FilterPipeModule } from 'ngx-filter-pipe';
import { MyDateRangePickerModule } from 'mydaterangepicker';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import {DropdownModule} from "ng2-dropdown";

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ChartsComponent } from './components/charts/charts.component';
import { OrdersComponent } from './components/orders/orders.component';
import { AddOrderComponent } from './components/add-order/add-order.component';
import { EditOrderComponent } from './components/edit-order/edit-order.component';
//import { OrderDetailsComponent } from './components/order-details/order-details.component';
import { AddInvoiceComponent } from './components/add-invoice/add-invoice.component';
import {DashboardComponent} from './components/dashboard/dashboard.component';
import {UploadsComponent} from './components/uploads/uploads.component';
import { OrderDetailsComponent } from  './components/orders/order-details/order-details.component';

import {OrderService} from './services/order.service';
import { NavbarComOrdersService } from './services/navbar-com-orders.service';

import { Filter2Pipe } from './components/uploads/filter2.pipe';
import { FilterMinPipe } from './pipes/filter_value_min.pipe';
import { FilterMaxPipe } from './pipes/filter_value_max.pipe';
import { FilterShipMinPipe } from './pipes/filter_shipping_min.pipe';
import { FilterShipMaxPipe } from './pipes/filter_shipping_max.pipe';
import { FilterDateMinPipe } from './pipes/filter_date_min.pipe';
import { FilterDateMaxPipe } from './pipes/filter_date_max.pipe';
import { FilterPipe, FilterStatusPipe } from './pipes/filter.pipe';


const appRoutes: Routes = [
  {path:'orders', component:OrdersComponent},
  {path:'dashboard', component: DashboardComponent},
  {path:'charts', component: ChartsComponent},
  {path:'uploads', component: UploadsComponent},
  {path: 'order/add', component: AddOrderComponent},
  {path: 'orders/orderDetails', component: OrderDetailsComponent},
  //{path: 'order/:id', component: OrderDetailsComponent},
  {path: 'order/edit/:id', component: EditOrderComponent},
  {path: 'invoice/add/:order_id', component: AddInvoiceComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    OrdersComponent,
    AddOrderComponent,
    EditOrderComponent,
    OrderDetailsComponent,
    AddInvoiceComponent,
    DashboardComponent,
    ChartsComponent,
    UploadsComponent,
    FilterPipe,
    FilterStatusPipe,
    Filter2Pipe,
    FilterMinPipe,
    FilterMaxPipe,
    FilterShipMinPipe,
    FilterShipMaxPipe,
    FilterDateMinPipe,
    FilterDateMaxPipe,



  ],
  imports: [
    BsDropdownModule.forRoot(),
    RouterModule.forRoot(appRoutes),
    BrowserModule,
    DropdownModule,
    FormsModule,
    HttpModule,
    ChartsModule,
    NgxPaginationModule,
    OrderModule,
    FilterPipeModule,
    MyDateRangePickerModule,
    FormsModule



  ],
  providers: [OrderService, NavbarComOrdersService],
  bootstrap: [AppComponent],


})
export class AppModule {
}
