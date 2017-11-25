import { Action } from '@ngrx/store';
import {User} from "../../core/models/user";

export class UserActions {
  static LOAD_USER = 'LOAD_USER';
  static LOAD_USER_SUCCESS = 'LOAD_USER_SUCCESS';

  getUser(id:any){
    return {
      type: UserActions.LOAD_USER,
      payload: id
    };

  }

  getUserSuccess(user:any) {
    //("test user load suucces !!! "+ user.id)
    return {
      type: UserActions.LOAD_USER_SUCCESS,
      payload: user
    };
  }


}
