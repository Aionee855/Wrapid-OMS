import { Injectable, Inject } from '@angular/core';
import { Subject }    from 'rxjs/Subject';


@Injectable()

export class NavbarComOrdersService {

  choiceFromNavbar;

  //For Navbars
  choiceService;
  choiceStatus;

  //For order details
  chosenOrderId;

  private notify = new Subject<any>();
    /**
     * Observable string streams
     */
    notifyObservable$ = this.notify.asObservable();

    constructor(){}

    public notifyOther(data: any) {
      if (data) {
        this.notify.next(data);
      }
    }

}
