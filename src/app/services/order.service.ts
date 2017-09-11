import { Injectable } from '@angular/core';
import {Http, Headers} from '@angular/http';
import 'rxjs/add/operator/map';

import { environment } from '../../environments/environment';


@Injectable()
export class OrderService {

  apiUrl = environment.apiUrl;


  constructor(private http: Http) {

   }

  getOrders(){
    return this.http.get(this.apiUrl + 'orders/')
    .map(res => res.json());
  }

  getOrderId(id){
      return this.http.get(this.apiUrl + 'orderItems/order/'+ id)
      .map(res => res.json());
  }

  getSalesChannel(salesChannelId){
        return this.http.get(this.apiUrl + 'orders/salesChannel/' + salesChannelId)
        .map(res => res.json());
  }

  getOrdersStatus(ordersStatus){
        return this.http.get(this.apiUrl + 'orders/orderStatus/' + ordersStatus)
        .map(res => res.json());
  }

  getNumberOfOrders(channel){
        return this.http.get(this.apiUrl + 'orders/salesChannel/count/' + channel)
        .map(res => res.json());
  }

  getNumberOfOrdersByStatus(status){
        return this.http.get(this.apiUrl + 'orders/orderStatus/count/' + status)
        .map(res => res.json());
  }


/// OLD ROUTES

  saveOrder(order){
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.post('http://localhost:3100/api/orders', order, {headers: headers})
    .map(res => res.json());
  }

  updateOrder(id, order){
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.put('http://localhost:3100/api/orders/'+id, order, {headers: headers})
    .map(res => res.json());
  }

  deleteOrder(id){
    return this.http.delete('http://localhost:3100/api/orders/'+id)
    .map(res => res.json());
  }

  getInvoices(order_id){
    return this.http.get('http://localhost:3100/api/invoices/order/'+order_id)
    .map(res => res.json());
  }

  deleteInvoice(id){
    return this.http.delete('http://localhost:3100/api/invoices/'+id)
    .map(res => res.json());
  }

  saveInvoice(invoice){
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.post('http://localhost:3100/api/invoices', invoice, {headers: headers})
    .map(res => res.json());
  }


}
