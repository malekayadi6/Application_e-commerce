import { createSelector } from 'reselect';
import {AppState} from "../../reducers/root-reducers";
import {UserState} from "./user.state";
import {User} from "../../core/models/user";

// Base product state function
function getUserState(state: AppState): UserState {
  return state.user;
}

// ******************** Individual selectors ***************************
const fetchUserStatus = function(state: UserState) {
  return state.userState.toJS();
}

// *************************** PUBLIC API's ****************************
export const getUser = createSelector(getUserState, fetchUserStatus);
