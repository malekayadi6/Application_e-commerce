import { Map, Record, List, fromJS } from 'immutable';


export interface CatalogState extends Map<string, any> {
  productState: any,
  categoriesState:any,
  listProudctsState:any,
}

export const CatalogStateRecord = Record({
  productState:fromJS({}),
  categoriesState:fromJS({}),
  listProudctsState:fromJS({}),

});
