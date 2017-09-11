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

    return this.http.get(this.apiUrl)
    .map(res => res.json());
  }

  getOrder(id){
        return this.http.get('http://localhost:8080/orderItems')
        .map(res => res.json());
      }

/*getOrder(id){
    return this.http.get('http://localhost:3100/api/orders/'+id)
    .map(res => res.json());
  }
  */

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
