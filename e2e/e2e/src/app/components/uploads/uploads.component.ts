import { Component, OnInit } from '@angular/core';
import { FilterService } from 'ng-filter';
import { Pipe } from '@angular/core';




@Component({
  selector: 'app-uploads',
  templateUrl: './uploads.component.html',
  styleUrls: ['./uploads.component.css'],




})
export class UploadsComponent implements OnInit {


  choice;
  ninjas = [
    {number: "1", name: "Dawid"},
    {number: "2", name: "Sophia"},
    {number: "3", name: "Dawid"},
    {number: "4", name: "Sophia"},
    {number: "5", name: "Dawid"},
    {number: "6", name: "Sophia"},
    {number: "7", name: "Sophia"},
    {number: "8", name: "Sophia"},
    {number: "9", name: "Sophia"},
  ];


    constructor() { }

    ngOnInit() {
    }

  }
