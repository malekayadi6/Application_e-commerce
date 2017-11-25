import { Injectable } from '@angular/core';
import {Observable} from "rxjs/Observable";
import {Http, RequestOptions,Headers} from "@angular/http";
import {environment} from "../../environments/environment";

@Injectable()
export class CatalogService {

  constructor(private http: Http) {
  }



  getAllCategories(): Observable<any> {
    let url = environment.urlApi+"cat";
    let headers = new Headers();
    let options = new RequestOptions({headers: headers, withCredentials: true});
    return this.http.get(url, options)
      .map((res) => {
        if(res){
          return res.json();
        }

      });
  }

  getListProducts(id: string): Observable<any> {

    let url = environment.urlApi+"listproducts/"+id;
    let headers = new Headers();
    let options = new RequestOptions({headers: headers, withCredentials: true});
    return this.http.get(url, options)
      .map((res) => {
      if(res){
        return res.json();
      }

      });
  }

  getDetailProduct(idProduct:any):Observable<any> {
    let url = environment.urlApi+"products/"+idProduct;
    let headers = new Headers();
    let options = new RequestOptions({headers: headers, withCredentials: true});
    return this.http.get(url, options)
      .map((res) => {
          return res.json();
      });


  }
  addToCart(idProduct:any,qt:any):Observable<any> {
    let url = environment.urlApi+"cart/add/" + idProduct + "/" + qt;
    let headers = new Headers();
    let options = new RequestOptions({headers: headers, withCredentials: true});
    return this.http.get(url, options)
      .map((res) => {
      return res.json();
      });
  }
}
