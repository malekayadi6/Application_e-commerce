import { Injectable } from '@angular/core';
import {Http, RequestOptions,Headers} from "@angular/http";
import {Observable} from "rxjs/Observable";
import {AuthActions} from "../../auth/actions/auth.actions";
import {Store} from "@ngrx/store";
import {AppState} from "../../reducers/root-reducers";
import {environment} from "../../../environments/environment";

@Injectable()
export class AuthService {

  constructor(
    private http: Http,
    private authActions:AuthActions,
    private store:Store<AppState>,


  ) { }

  login(data): Observable<any> {
    //(JSON.stringify("teeeestté+"+data))
    let url = environment.urlApi+"auth/login";
    let headers = new Headers({
      'Content-Type': 'application/json'});
    let options = new RequestOptions({headers: headers, withCredentials: true});
    return this.http.post(url, JSON.stringify(data), options)
      .map((res) => {
        return res.json();
      });
  }

  logout(): Observable<any> {
    let url = environment.urlApi+"logout";
    let headers = new Headers({
      'Content-Type': 'application/json'
    });
    let options = new RequestOptions({headers: headers, withCredentials: true});
    return this.http.get(url, options)
      .map((res) => {
        return res.json();
      });
  }

  signUp(data): Observable<any> {
    let url = environment.urlApi+"auth/signup";
    let headers = new Headers({
      'Content-Type': 'application/json'
    });
    let options = new RequestOptions({headers: headers, withCredentials: true});
    return this.http.post(url, JSON.stringify(data), options)
      .map((res) => {
        return res.json();
      });
  }





}
