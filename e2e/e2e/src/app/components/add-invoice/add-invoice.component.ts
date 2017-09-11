import { Component, OnInit } from '@angular/core';
import {OrderService} from '../../services/order.service';
import {Router, ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-add-invoice',
  templateUrl: './add-invoice.component.html',
  styleUrls: ['./add-invoice.component.css']
})
export class AddInvoiceComponent implements OnInit {
  order;
  item_number;
  description;
  price;
  quantity;
  total;
  constructor(private orderService:OrderService, private router:Router, private route: ActivatedRoute) { }

  ngOnInit() {
  }

onAddSubmit(){
  this.order = this.route.snapshot.params['order_id'];

  let invoice = {
    order: this.order,
    item_number: this.item_number,
    description: this.description,
    price: this.price,
    quantity: this.quantity,
    total: this.total
  }

  this.orderService.saveInvoice(invoice).subscribe(invoice => {
    this.router.navigate(['/'])
  })
}
}
