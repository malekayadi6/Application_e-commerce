import { Injectable } from '@angular/core';
import {Observable} from "rxjs/Observable";
import {Http, RequestOptions,Headers} from "@angular/http";
import {environment} from "../../../environments/environment";

@Injectable()
export class CheckoutServiceService {

  constructor(
    private http: Http
  ) { }
  getShopingCart():Observable<any>{
    //("getShopingCart service ");
    let url = environment.urlApi+"cart";
    let headers = new Headers();
    let options = new RequestOptions({headers: headers, withCredentials: true});
    return this.http.get(url, options)
      .map((res) => {
        if(res){
         return res.json().cart;

        }

      });
  }

  updateQt(id:string,quantity:string):Observable<any>{
    //("getShopingCart service ");
    let url = environment.urlApi+"cart/update/"+id+"/"+quantity;
    let headers = new Headers();
    let options = new RequestOptions({headers: headers, withCredentials: true});
    return this.http.get(url, options)
      .map((res) => {
        if(res){
          return res.json();

        }

      });
  }


  removeItem(id:string):Observable<any>{
    //("getShopingCart service ");
    let url = environment.urlApi+"cart/remove/"+id;
    let headers = new Headers();
    let options = new RequestOptions({headers: headers, withCredentials: true});
    return this.http.get(url, options)
      .map((res) => {
        if(res){

          return res.json();

        }

      });
  }

  showOrder(hash:string):Observable<any>{
    //("test appel service");

    let url = environment.urlApi+"order/"+hash;
    let headers = new Headers();
    let options = new RequestOptions({headers: headers, withCredentials: true});
    return this.http.get(url, options)
      .map((res) => {
        if(res){
          if(res.json().erreur){
            //("erreur")
          }
          return res.json().order;


        }

      });
  }


}
