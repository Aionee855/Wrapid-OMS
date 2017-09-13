import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes} from '@angular/router';
import { CommonModule } from '@angular/common';
import { ChartsModule } from 'ng2-charts';
import { NgxPaginationModule} from 'ngx-pagination';
import { OrderModule } from 'ngx-order-pipe';
import { FilterPipeModule } from 'ngx-filter-pipe';
import { MyDateRangePickerModule } from 'mydaterangepicker';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { DropdownModule} from "ng2-dropdown";
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';


import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ChartsComponent } from './components/charts/charts.component';
import { OrdersComponent } from './components/orders/orders-table/orders.component';
import { DashboardComponent} from './components/dashboard/dashboard.component';
import { UploadsComponent} from './components/uploads/uploads.component';
import { OrderDetailsComponent } from  './components/orders/order-details/order-details.component';

//Services
import { OrdersService} from './components/orders/orders-service/orders.service';
import { OrderService} from './services/order.service';
import { OrderDetailsService} from './services/order-details.service';
import { NavbarComOrdersService } from './services/navbar-com-orders.service';
import { CsvfileService} from './components/uploads/services/csvfile.service';

import { FilterDateMinPipe, FilterDateMaxPipe } from './pipes/filter_date.pipe';
import { FilterPipe, FilterStatusPipe, FilterChannelPipe } from './pipes/filter.pipe';
import { OrdersNavigationComponent } from './components/orders/orders-navigation/orders-navigation.component';




const appRoutes: Routes = [
  {path:'', component: DashboardComponent},
  {path:'dashboard', component: DashboardComponent},
  {path:'orders', component:OrdersNavigationComponent},
  {path:'charts', component: ChartsComponent},
  {path:'uploads', component: UploadsComponent},
  {path: 'orders/orderDetails', component: OrderDetailsComponent},
]

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    OrdersComponent,
    OrderDetailsComponent,
    DashboardComponent,
    ChartsComponent,
    UploadsComponent,
    FilterPipe,
    FilterStatusPipe,
    FilterChannelPipe,
    FilterDateMinPipe,
    OrdersNavigationComponent,



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
    FormsModule,
    NgbModule.forRoot (),
  ],


  providers: [OrderService, OrderDetailsService, NavbarComOrdersService, OrdersService, CsvfileService],
  bootstrap: [AppComponent],


})
export class AppModule {
}