


import {UserState,UserStateRecord} from "./user.state";
import {Action, ActionReducer} from "@ngrx/store";
import {UserActions} from "../actions/user.actions";

export const initialState: UserState = new UserStateRecord() as UserState;

export const UserReducer: ActionReducer<UserState> =
  (state: UserState = initialState, { type, payload }: Action): UserState => {


    switch (type) {
      case UserActions.LOAD_USER_SUCCESS:
        let  _user = payload;
        //("teeeeeeeeesst paypload user "+JSON.stringify(_user))
        //("teeeeeeeeesst paypload user id  "+ _user.id)
        return state.merge({
          userState: payload,
        }) as UserState;


      default:
        //("defaullllllllttttttttttmmmmmmmmm");

        return state;
    }
  }

