import { Component, OnInit } from '@angular/core';
import { RouterModule, Routes} from '@angular/router';
import { NavbarComOrdersService } from '../../services/navbar-com-orders.service';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  choice;
  choiceNavbarHeader;

  constructor(private navbarComOrdersService:NavbarComOrdersService) { }

  setChoiceNavbar(choiceNavbarHeader: string, choiceStatusHeader: string){
    this.navbarComOrdersService.choiceService = choiceNavbarHeader;
    this.navbarComOrdersService.choiceStatus = choiceStatusHeader;
    console.log(this.navbarComOrdersService.choiceService);
    console.log(this.navbarComOrdersService.choiceStatus);
  }

  ngOnInit() {

    console.log(this.choiceNavbarHeader);

   $("#menu-toggle").click(function(e) {
        e.preventDefault();
       $("#wrapper").toggleClass("toggled");
    });
  }

}
