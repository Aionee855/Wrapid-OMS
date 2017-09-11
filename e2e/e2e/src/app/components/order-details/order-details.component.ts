import { Component, OnInit } from '@angular/core';
import {OrderService} from '../../services/order.service';
import {Router, ActivatedRoute, Params} from '@angular/router';

@Component({
  selector: 'app-order-details',
  templateUrl: './order-details.component.html',
  styleUrls: ['./order-details.component.css']
})
export class OrderDetailsComponent implements OnInit {
  id: string;
  order: Order;
  invoices: Invoice[];
  constructor(private orderService:OrderService, private router:Router, private route: ActivatedRoute) { }

  ngOnInit() {

    this.id = this.route.snapshot.params['id'];

    this.orderService.getOrder(this.id).subscribe(order => {
      this.order = order;
    });

    this.orderService.getInvoices(this.id).subscribe(invoices => {
      this.invoices = invoices;
    });
  }

    onDeleteClick(id){
      this.orderService.deleteInvoice(id).subscribe(invoice => {
        this.router.navigate(['/order/'+this.id]);
      });
}

}

export interface Order {
  id: string;
  channel: string;
  invoice_number: string;
  customer_name: string;
  description: string;
  status: string;
}

export interface Invoice {
  id: string,
  item_number: string,
  description: string,
  price: string,
  quantity: string,
  total: string
}
