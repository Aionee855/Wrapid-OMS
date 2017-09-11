import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrderService} from '../../services/order.service';



@Component({
  selector: 'app-charts',
  templateUrl: './charts.component.html',
  styleUrls: ['./charts.component.scss']
})
export class ChartsComponent implements OnInit {

public allOrdersToSort;
public selectChannelFilter;
public selectStatusFilter;

public amazonIn_New;
public amazonIn_ReadyToShip;
public amazonIn_Shipped;
public amazonIn_PendingOnInvoice;

public amazonUK_New;
public amazonUK_ReadyToShip;
public amazonUK_Shipped;
public amazonUK_PendingOnInvoice;

public ebay_New;
public ebay_ReadyToShip;
public ebay_Shipped;
public ebay_PendingOnInvoice;

public displayOnPageCounter;


  constructor(private orderService: OrderService) {
    this.pieChartData= [100, 100, 100];
    this.getNumberOfCustomers("Amazon.in");
    this.getNumberOfCustomers("Amazon.co.uk");
    this.getNumberOfCustomers("eBay");

    this.orderService.getOrders().subscribe(orders => {
      this.allOrdersToSort = orders;
      return this.allOrdersToSort;
    });

  }

  ngOnInit() {
  }
// Pie
  public pieChartLabels:string[] = ['Amazon.in', 'Amazon.co.uk', 'eBay'];
  public pieChartData:number[] = []
  public pieChartType:string = 'pie';
  public orders:number[] = [];
  public customers = [];

  getNumberOfCustomers(channel){
    this.orderService.getNumberOfOrders(channel).subscribe(orders => {
      this.orders = orders;
      console.log(this.customers);
      this.customers.push(this.orders);
      this.pushDataNumberOfCustomers();
      return this.customers;
    });
  }

  public pushDataNumberOfCustomers(){
    this.pieChartData= [];
    this.pieChartData = this.pieChartData.concat(this.customers);
    console.log(this.pieChartData);
  }

  // events
  public chartClicked(e:any):void {
    console.log(e);
  }
 
  public chartHovered(e:any):void {
    console.log(e);
  }

////////////////////
//COLUMNS
///////////////////////

people = [
  {name: 'Dawid', gender: 'man'},
  {name: 'Sophia', gender: 'woman'},
  {name: 'Oskar', gender: 'man'}
];

totalNumber:number;

testClick(){
  var counter:number = 0;
  var n:number = 0;

  console.log(this.allOrdersToSort);

for(counter; counter<this.allOrdersToSort.length; counter++){
  if(this.allOrdersToSort[counter].salesChannel === "Amazon.co.uk" || this.allOrdersToSort[counter].salesChannel === "Amazon.co.uk"){
    n= n+1;
  }
}

this.totalNumber = n;
console.log(this.totalNumber);

}


  public barChartOptions:any = {
    scaleShowVerticalLines: false,
    responsive: true
  };

  public barChartLabels:string[] = ['Amazon.in', 'Amazon.co.uk', 'eBay'];
  public barChartType:string = 'bar';
  public barChartLegend:boolean = true;
 
  public barChartData:any[] = [
    {data: [65, 59, 80], label: 'New Orders'},
    {data: [28, 48, 40], label: 'Ready To Ship'},
    {data: [28, 48, 40], label: 'Shipped'},
    {data: [28, 48, 40], label: 'Pending For Invoice'},
  ];
 

}
