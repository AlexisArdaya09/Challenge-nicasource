import { ActionReducerMap, MetaReducer } from '@ngrx/store';
import { environment } from '../../environments/environment.prod';
import { customerState } from '../shared/models/customer.state';
import { customerReducer } from './reducers/customer.reducers';

export interface AppState {
    customerData: customerState
}

export const ROOT_REDUCERS: ActionReducerMap<AppState> = {
    customerData: customerReducer
}

export const metaReducers: MetaReducer<AppState>[] = !environment.production? []: [];