import { Injectable } from '@angular/core';

@Injectable()

export class OrderDetailsService {

  chosenOrderId;

  salesChannelOrderId;
  salesChannel;
  orderStatus;
  orderType;
  buyerEmail;

  //shipping Address
  name;
  addressLine1;
  city;
  stateOrRegion;
  postalCode;
  countryCode;


  constructor() { }

}
