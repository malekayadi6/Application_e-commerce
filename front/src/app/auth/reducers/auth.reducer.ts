import { Action, ActionReducer } from '@ngrx/store';
import { AuthActions } from '../actions/auth.actions';
import { AuthState, AuthStateRecord } from './auth.state';

export const initialState: AuthState = new AuthStateRecord() as AuthState;

export const authReducer: ActionReducer<AuthState> =
  (state: AuthState = initialState, { type, payload }: Action): AuthState => {
    switch (type) {
      case AuthActions.LOGIN_SUCCESS:
        //("auth success");
        return state.merge({ isAuthenticated: true }) as AuthState;

      case AuthActions.LOGOUT_SUCCESS:
        return state.merge({ isAuthenticated: false }) as AuthState;

      default:
        //("default");
        return state;
    }
  };
