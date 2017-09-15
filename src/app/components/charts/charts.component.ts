import { Component, OnInit } from '@angular/core';
import { CommonModule, DatePipe  } from '@angular/common';
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

public displayOnPageCounter;

public todaysDate: number;
public monthAgoDate: number;

  constructor(private orderService: OrderService) {

    this.pieChartData= [100, 100, 100];
    this.getNumberOfCustomers("Amazon.in");
    this.getNumberOfCustomers("Amazon.co.uk");
    this.getNumberOfCustomers("eBay");

    this.getColumnsChartData("Amazon.in");
    this.getColumnsChartData("Amazon.co.uk");
    this.getColumnsChartData("eBay");

    this.countTwelveMonths()
    this.getAllOrdersDate("Amazon.in",0);
    this.getAllOrdersDate("Amazon.co.uk",1);
    this.getAllOrdersDate("eBay",2);


    setTimeout(function(){
      document.getElementById('columnsChart').classList.remove('hide');
    }, 100);

    setTimeout(function(){
      document.getElementById('lineChart').classList.remove('hide');
      }, 100);

//Counts 12 months back to the line chart
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
      this.customers.push(this.orders);
      this.pushDataNumberOfCustomers();
      return this.customers;
    });
  }

  public pushDataNumberOfCustomers(){
    this.pieChartData= [];
    this.pieChartData = this.pieChartData.concat(this.customers);
  }

  // events
  public chartClicked(e:any):void {

  }
 
  public chartHovered(e:any):void {

  }

////////////////////
//BAR CHART
///////////////////////

public totalNumber: number;
public testChart:any[] = [
  {data: [], label: 'New Orders'},
  {data: [], label: 'Ready To Ship'},
  {data: [], label: 'Shipped'},
  {data: [], label: 'Pending For Invoice'},
];
public barChartOptions:any = {
  scaleShowVerticalLines: false,
  responsive: true,
  scales: {
        yAxes: [{
            display: true,
            ticks: {
                beginAtZero: true   // minimum value will be 0.
            }
        }]
    }

};
public barChartLabels:string[] = ['Amazon.in', 'Amazon.co.uk', 'eBay'];
public barChartType:string = 'bar';
public barChartLegend:boolean = true;
 
public barChartData:any[] = [
  {data: [], label: 'New Orders'},
  {data: [], label: 'Ready To Ship'},
  {data: [], label: 'Shipped'},
  {data: [], label: 'Pending For Invoice'},
];


getColumnsChartData(channel){

  var counter:number = 0;
  var createdCounter:number = 0;
  var rtsCounter:number = 0;
  var piCounter:number = 0;
  var shippedCounter:number = 0;

  this.orderService.getOrders().subscribe(orders => {
    this.allOrdersToSort = orders;

    for(counter; counter<this.allOrdersToSort.length; counter++){
      if(this.allOrdersToSort[counter].salesChannel === channel && this.allOrdersToSort[counter].orderStatus === "Created"){
        createdCounter++;
      }
      if(this.allOrdersToSort[counter].salesChannel === channel && this.allOrdersToSort[counter].orderStatus === "ReadyToShip"){
        rtsCounter++;
      }
      if(this.allOrdersToSort[counter].salesChannel === channel && this.allOrdersToSort[counter].orderStatus === "Shipped"){
        shippedCounter++;
      }
      if(this.allOrdersToSort[counter].salesChannel === channel && this.allOrdersToSort[counter].orderStatus === "PendingInvoice"){
        piCounter++;
      }
    }

    this.barChartData = [
      {data: [], label: 'New Orders'},
      {data: [], label: 'Ready To Ship'},
      {data: [], label: 'Shipped'},
      {data: [], label: 'Pending For Invoice'},
    ];

     this.testChart[0].data.push(createdCounter);
     this.testChart[1].data.push(rtsCounter);
     this.testChart[2].data.push(shippedCounter);
     this.testChart[3].data.push(piCounter);

     this.barChartData = this.testChart;
     console.log(this.barChartData);
  });

}
///////////////////////////////////////////////////////////////
// lineChart
///////////////////////////////////////////////////////////////

public lineChartData:any[] = [
  {data: [], label: 'Series A'},
  {data: [], label: 'Series B'},
  {data: [], label: 'Series C'}
];
  public _lineChartData:any[] = [
    {data: [], label: 'Amazon.in'},
    {data: [], label: 'Amazon.co.uk'},
    {data: [], label: 'eBay'}
  ];
  public lineChartLabels:Array<any> = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
  public lineChartOptions:any = {
    responsive: true,
    scales:
        {
                xAxes: [{
                display: true,
                ticks: {
                    autoSkip: false
                }
            }]
        }

  };
  public lineChartColors:Array<any> = [
    { // grey
      backgroundColor: 'rgba(148,159,177,0.2)',
      borderColor: 'rgba(148,159,177,1)',
      pointBackgroundColor: 'rgba(148,159,177,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(148,159,177,0.8)'
    },
    { // dark grey
      backgroundColor: 'rgba(77,83,96,0.2)',
      borderColor: 'rgba(77,83,96,1)',
      pointBackgroundColor: 'rgba(77,83,96,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(77,83,96,1)'
    },
    { // grey
      backgroundColor: 'rgba(148,159,177,0.2)',
      borderColor: 'rgba(148,159,177,1)',
      pointBackgroundColor: 'rgba(148,159,177,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(148,159,177,0.8)'
    }
  ];
  public lineChartLegend:boolean = true;
  public lineChartType:string = 'line';
  /////////////////////////
  public _orders;
  public allOrdersDate;
  public dateAugust;
  public dateSeptember;

  sixMonths;
  fiveMonths;
  fourMonths;
  threeMonths;
  twoMonths;
  oneMonth;
  thisMonth;




///////////////////////////
  public getAllOrdersDate(salesChannel, rowNumber){

    var dateFormat = require('dateformat');
    var now = new Date();
    dateFormat(now, "mmm");

    let n=0; let k=0;
    let __orders;
    let __allOrdersDate: Array<any>= [];
    let _ordersCounter = 0;
    let _ordersCounterArray: Array<any>=[];


    let arrayMonthsBack: Array<any> = [ this.sixMonths, this.fiveMonths, this.fourMonths, this.threeMonths, this.twoMonths, this.oneMonth, this.thisMonth];
    let totalAllMonths:Array<number>=[0,0,0,0,0,0,0];

    this.orderService.getOrders().subscribe(orders => {
      this._orders = orders;
      __orders = this._orders;

    console.log(__orders);

    for(n; n<__orders.length; n++){
       let formatDate = new Date(__orders[n].date);
         if(__orders[n].salesChannel === salesChannel && formatDate >= arrayMonthsBack[0] && formatDate < arrayMonthsBack[1]){
           totalAllMonths[0]++;

         }
         if(__orders[n].salesChannel === salesChannel && formatDate >= arrayMonthsBack[1] && formatDate < arrayMonthsBack[2]){
           totalAllMonths[1]++;
         }
         if(__orders[n].salesChannel === salesChannel && formatDate >= arrayMonthsBack[2] && formatDate < arrayMonthsBack[3]){
           totalAllMonths[2]++;
         }
         if(__orders[n].salesChannel === salesChannel && formatDate >= arrayMonthsBack[3] && formatDate < arrayMonthsBack[4]){
           totalAllMonths[3]++;
         }
         if(__orders[n].salesChannel === salesChannel && formatDate >= arrayMonthsBack[4] && formatDate < arrayMonthsBack[5]){
           totalAllMonths[4]++;
         }
         if(__orders[n].salesChannel === salesChannel && formatDate >= arrayMonthsBack[5] && formatDate < arrayMonthsBack[6]){
           totalAllMonths[5]++;
         }
         if(__orders[n].salesChannel === salesChannel && formatDate >= arrayMonthsBack[6]){
           totalAllMonths[6]++;
         }
       }

       for(k; k<=6; k++){
         this._lineChartData[rowNumber].data[k]= totalAllMonths[k];
       }
       this.lineChartData =  this._lineChartData;
       console.log(this._lineChartData);
    });
  }



  public countTwelveMonths(){

    let _sixMonths = new Date();
    _sixMonths.setMonth(_sixMonths.getMonth()-6);
    _sixMonths.setDate(1);
    this.sixMonths = _sixMonths;
    _sixMonths.setHours(0,0,0,0);

    let _fiveMonths = new Date();
    _fiveMonths.setMonth(_fiveMonths.getMonth()-5);
    _fiveMonths.setDate(1);
    this.fiveMonths = _fiveMonths;
    _fiveMonths.setHours(0,0,0,0);

    let _fourMonths = new Date();
    _fourMonths.setMonth(_fourMonths.getMonth()-4);
    _fourMonths.setDate(1);
    this.fourMonths = _fourMonths;
    _fourMonths.setHours(0,0,0,0);

    let _threeMonths = new Date();
    _threeMonths.setMonth(_threeMonths.getMonth()-3);
    _threeMonths.setDate(1);
    this.threeMonths = _threeMonths;
    _threeMonths.setHours(0,0,0,0);

    let _twoMonths = new Date();
    _twoMonths.setMonth(_twoMonths.getMonth()-2);
    _twoMonths.setDate(1);
    _twoMonths.setHours(0,0,0,0);
    this.twoMonths = _twoMonths;

    let _oneMonth = new Date();
    _oneMonth.setMonth(_oneMonth.getMonth()-1);
    _oneMonth.setDate(1);
    _oneMonth.setHours(0,0,0,0);
    this.oneMonth = _oneMonth;

    let _thisMonth = new Date();
    _thisMonth.setDate(1);
    this.thisMonth = _thisMonth;

    var dateFormat = require('dateformat');
    var now = new Date();
    dateFormat(now, "mmm");

    this.lineChartLabels = [dateFormat(_sixMonths, "mmm"), dateFormat(_fiveMonths, "mmm"), dateFormat(_fourMonths, "mmm"), dateFormat(_threeMonths, "mmm"), dateFormat(_twoMonths, "mmm") , dateFormat(_oneMonth, "mmm"), dateFormat(_thisMonth, "mmm")];
 }
 
  public randomize():void {
    let _lineChartData:Array<any> = new Array(this.lineChartData.length);
    for (let i = 0; i < this.lineChartData.length; i++) {
      _lineChartData[i] = {data: new Array(this.lineChartData[i].data.length), label: this.lineChartData[i].label};
      for (let j = 0; j < this.lineChartData[i].data.length; j++) {
        _lineChartData[i].data[j] = Math.floor((Math.random() * 100) + 1);
      }
    }
    this.lineChartData = _lineChartData;
  }
 

}
