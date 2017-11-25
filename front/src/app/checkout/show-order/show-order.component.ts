import { Component, OnInit } from '@angular/core';
import {Subscription} from "rxjs/Subscription";
import {ActivatedRoute} from "@angular/router";
import {CheckoutServiceService} from "../../core/services/checkout-service.service";

@Component({
  selector: 'app-show-order',
  templateUrl: './show-order.component.html',
  styleUrls: ['./show-order.component.css']
})
export class ShowOrderComponent implements OnInit {
  actionsSubscription: Subscription;
  hash:any;
  order:any;

  constructor(
    private route: ActivatedRoute,
    private chekoutService:CheckoutServiceService

  ) { }

  ngOnInit() {
    this.actionsSubscription = this.route.params.subscribe(
      (params: any) => {
        this.hash = params['hash'];
        //("idd"+ this.hash);

        this.chekoutService.showOrder(this.hash)
          .subscribe(order=>{
            //("idddd"+order.id);
            //("ok");
            this.order=order;
          })

      });
  }

}
