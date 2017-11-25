import { Component, OnInit } from '@angular/core';
import {CatalogActions} from "../actions/catalog-actions";
import {Store} from "@ngrx/store";
import {AppState} from "../../reducers/root-reducers";
import {ActivatedRoute} from "@angular/router";
import {Subscription} from "rxjs/Subscription";

@Component({
  selector: 'app-catalog-page',
  templateUrl: './catalog-page.component.html',
  styleUrls: ['./catalog-page.component.css']
})
export class CatalogPageComponent implements OnInit {
  actionsSubscription: Subscription;
  id:any;

  constructor(
    private store:Store<AppState>,
    private catalogActions:CatalogActions,
    private route: ActivatedRoute,


  ) { }

  ngOnInit() {
    this.actionsSubscription = this.route.params.subscribe(
      (params: any) => {
        this.id = params['id'];
        this.store.dispatch(this.catalogActions.getListProducts(this.id));

      });


  }

}
