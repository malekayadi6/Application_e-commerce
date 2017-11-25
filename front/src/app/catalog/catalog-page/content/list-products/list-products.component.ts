import {Component, OnInit} from '@angular/core';

import {Store} from "@ngrx/store";
import {AppState} from "../../../../reducers/root-reducers";
import {getListProducts} from "../../../reducers/selectores";

@Component({
  selector: 'app-list-products',
  templateUrl: './list-products.component.html',
  styleUrls: ['./list-products.component.css'],
})
export class ListProductsComponent implements OnInit {
   products:any;

  constructor(
    private store:Store<AppState>,

  ) { }

  ngOnInit() {

    this.store.select(getListProducts)
      .subscribe(products=>{
        this.products=products;


      });

  }
}
