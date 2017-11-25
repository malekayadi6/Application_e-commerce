import { Injectable } from '@angular/core';
import {Http, RequestOptions,Headers} from "@angular/http";
import {Observable} from "rxjs/Observable";
import {environment} from "../../../environments/environment";

@Injectable()
export class UserService {

  constructor(
    private http:Http,
  ) { }



  getUser(id): Observable<any> {
    let url = environment.urlApi+"user/"+id;
    let headers = new Headers({
      'Content-Type': 'application/json'
    });
    let options = new RequestOptions({headers: headers, withCredentials: true});
    return this.http.get(url, options)
      .map((res) => {

      });
  }

  addProduct(values): Observable<any> {
    let url = environment.urlApi+"product/add";
    let headers = new Headers({
      'Content-Type': 'application/json'
    });
    let options = new RequestOptions({headers: headers, withCredentials: true});
    return this.http.post(url, JSON.stringify(values), options)
      .map((res) => {
        return res.json();
      });
  }
  addSubCategorie(values): Observable<any> {
    let url = environment.urlApi+"subcategorie/add";
    let headers = new Headers({
      'Content-Type': 'application/json'
    });
    let options = new RequestOptions({headers: headers, withCredentials: true});
    return this.http.post(url, JSON.stringify(values), options)
      .map((res) => {
        return res.json();
      });
  }
  addCategorie(values): Observable<any> {
    //("service data " + JSON.stringify(values))
    let url = environment.urlApi+"categorie/add";
    let headers = new Headers({
      'Content-Type': 'application/json'
    });
    let options = new RequestOptions({headers: headers, withCredentials: true});
    return this.http.post(url, JSON.stringify(values), options)
      .map((res) => {
        return res.json();

      });
  }
    updateTitle(id,title): Observable<any> {
    //("service data " + JSON.stringify(values))
    let url = environment.urlApi+'user/uptitle/'+id+'/'+title;
    let headers = new Headers({
    });
    let options = new RequestOptions({headers: headers, withCredentials: true});
    return this.http.get(url, options)
      .map((res) => {
        return res.json();

      });
  }

  updateStock(id,title): Observable<any> {
    //("service data " + JSON.stringify(values))
    let url = environment.urlApi+'user/upstock/'+id+'/'+title;
    let headers = new Headers({
    });
    let options = new RequestOptions({headers: headers, withCredentials: true});
    return this.http.get(url, options)
      .map((res) => {
        return res.json();

      });
  }

  updatePrice(id,title): Observable<any> {
    //("service data " + JSON.stringify(values))
    let url = environment.urlApi+'user/upprice/'+id+'/'+title;
    let headers = new Headers({
    });
    let options = new RequestOptions({headers: headers, withCredentials: true});
    return this.http.get(url, options)
      .map((res) => {
        return res.json();

      });
  }

  remove(id): Observable<any> {
    //("service data " + JSON.stringify(values))
    let url =environment.urlApi+'user/remove/'+id;
    let headers = new Headers({
    });
    let options = new RequestOptions({headers: headers, withCredentials: true});
    return this.http.get(url, options)
      .map((res) => {
        return res.json();

      });
  }


}
