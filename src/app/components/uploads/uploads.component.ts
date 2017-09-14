import { Component, OnInit } from '@angular/core';
import { OrderService} from '../../services/order.service';
import { HttpModule, Http } from '@angular/http';





@Component({
  selector: 'app-uploads',
  templateUrl: './uploads.component.html',
  styleUrls: ['./uploads.component.css'],




})
export class UploadsComponent implements OnInit {

fileName: string;
fileContent;
headers;

testValue= "name";

myString: string;
myStringfy: string;
myJSONstring: string;
myJsonObcjects: object[];

 constructor(private http: Http){

 };

 ngOnInit(){

 };

 changeListener($event) : void {
    this.readThis($event.target);
  }
  readThis(inputValue: any) : void {
    var file:File = inputValue.files[0];
    var myReader:FileReader = new FileReader();
    this.fileName = file.name;
    console.log(file);


    myReader.onloadend = (e) => {
      //result as text
      this.myString = myReader.result;
      console.log(this.myString);

      //result as a stringify
      this.myStringfy = JSON.stringify(this.myString);
      console.log(this.myStringfy);

      //result as JSON object string
      this.myJSONstring = this.csvJSON(this.myString);
      console.log(this.myJSONstring);

      //result as JSON objects
      this.myJsonObcjects = JSON.parse(this.csvJSON(this.myString));
      console.log(this.myJsonObcjects);
    }
    myReader.readAsText(file);
  }

  /////JSON

  public csvJSON(csv) {
    var lines = csv.split("\n");
    var result = [];
    var headers = lines[0].split(",");

    for (var i = 1; i < lines.length; i++) {
        var obj = {};
        var currentline = lines[i].split(",");

        for (var j = 0; j < headers.length; j++) {
            obj[headers[j]] = currentline[j];
        }

        result.push(obj);
    }
    this.headers = headers;
    return JSON.stringify(result); //JSON
}

//Saving to database


saveData(){
  console.log(JSON.stringify(this.myString));
  var url = 'https://localhost:8080/order';
  this.http.post(url, JSON.stringify(this.myString));

}

//File uploader




}
