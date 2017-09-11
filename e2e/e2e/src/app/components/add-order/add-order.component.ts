import { Component, OnInit } from '@angular/core';
import {OrderService} from '../../services/order.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-add-order',
  templateUrl: './add-order.component.html',
  styleUrls: ['./add-order.component.css']
})
export class AddOrderComponent implements OnInit {
  channel;
  invoice_number;
  customer_name;
  description;
  status;
  constructor(private orderService:OrderService, private router:Router) { }

  ngOnInit() {
  }

  onAddSubmit(){
    let order = {
      channel: this.channel,
      invoice_number: this.invoice_number,
      customer_name: this.customer_name,
      description: this.description,
      status: this.status
    }

    this.orderService.saveOrder(order).subscribe(order => {
      this.router.navigate(['/']);
    });
  }

}
