

import { Injectable } from '@angular/core';
import {Actions, Effect} from "@ngrx/effects";
import {Action} from "@ngrx/store";
import {Observable} from "rxjs/Observable";
import 'rxjs/add/operator/switchMap';
import {UserService} from "../../core/services/user.service";
import {UserActions} from "../actions/user.actions";


@Injectable()
export class UserEffects {

  constructor(
    private userService: UserService,
    private  actions$: Actions,
    private userActions: UserActions,
    )
  {}


  @Effect()
  GetUser: Observable<Action> = this.actions$
    .ofType(UserActions.LOAD_USER)
    .switchMap((action: Action) => this.userService.getUser(action.payload))
    .map(user => this.userActions.getUserSuccess(user));



}
