import { ActionReducerMap, MetaReducer } from '@ngrx/store';
import { environment } from '../../environments/environment.prod';
import { CustomerState } from '../shared/models/customer.state';
import { customerReducer } from './reducers/customer.reducers';

export interface AppState {
    customerData: CustomerState
}

export const ROOT_REDUCERS: ActionReducerMap<AppState> = {
    customerData: customerReducer
}

export const metaReducers: MetaReducer<AppState>[] = !environment.production? []: [];