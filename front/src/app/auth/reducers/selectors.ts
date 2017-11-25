import { createSelector } from 'reselect';
import { AuthState } from './auth.state';
import {AppState} from "../../reducers/root-reducers";

// Base product state function
function getAuthState(state: AppState): AuthState {
    return state.auth;
}

// ******************** Individual selectors ***************************
const fetchAuthStatus = function(state: AuthState): boolean {
    return state.isAuthenticated;
}

// *************************** PUBLIC API's ****************************
export const getAuthStatus = createSelector(getAuthState, fetchAuthStatus);
