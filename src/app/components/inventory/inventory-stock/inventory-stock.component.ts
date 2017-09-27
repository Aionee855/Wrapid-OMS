import { Component, OnInit } from '@angular/core';
import { Angular2Csv } from 'angular2-csv/Angular2-csv';
import { OrderService} from '../../../services/order.service';


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
  marketplacesList;


testData=["Testa","Testb","&"];

  constructor(private orderService: OrderService) {
    let i = 1;
    for(i;i<20;i++){
      let str = String(i);
      this.header = "Header"+str;

      this.template.push(this.header);
    }
    console.log(this.template);

    this.getMarketplaces();


  }

  ngOnInit() {
  }

  createCsvTemplate(){
    new Angular2Csv(this.data, 'templateCSV', { headers: this.template });
    //new Angular2Csv(this.data, 'myCsv', { headers: Object.keys(this.data[0]) });
  }

  getMarketplaces(){
  //  console.log("Marketplaces List");
    this.orderService.getMarketplaces().then(
      (results) => (this.marketplacesList = results, console.log(this.marketplacesList))
    )
  }

}
