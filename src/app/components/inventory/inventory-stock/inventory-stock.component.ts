import { Component, OnInit } from '@angular/core';
import { Angular2Csv } from 'angular2-csv/Angular2-csv';


@Component({
  selector: 'app-inventory-stock',
  templateUrl: './inventory-stock.component.html',
  styleUrls: ['./inventory-stock.component.scss']
})
export class InventoryStockComponent implements OnInit {

  private csvTemplateData;

  private tableHeaders=[];
  template=[];
  header: string;
  data:any[]=[];


testData=["Testa","Testb","&"];

  constructor() {
    let i = 1;
    for(i;i<20;i++){
      let str = String(i);
      this.header = "Header"+str;

      this.template.push(this.header);
    }
    console.log(this.template);
  }

  ngOnInit() {
  }

  createCsvTemplate(){
    new Angular2Csv(this.data, 'templateCSV', { headers: this.template });
    //new Angular2Csv(this.data, 'myCsv', { headers: Object.keys(this.data[0]) });
  }

}
