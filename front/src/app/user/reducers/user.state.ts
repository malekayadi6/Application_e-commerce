import { Map, Record, List, fromJS } from 'immutable';
import {User} from "../../core/models/user";


export interface UserState extends Map<string, any> {
  userState: any,

}

export const UserStateRecord = Record({
  userState :fromJS({}),



});
