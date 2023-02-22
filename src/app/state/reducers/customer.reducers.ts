import { Statement } from '@angular/compiler';
import { createReducer, on } from '@ngrx/store';
import { CustomerState } from 'src/app/shared/models/customer.state';
import { loadCustomers, loadedCustomers} from '../actions/customer.actions';

export const initialState: CustomerState = { 
    loading: false, 
    customers: [],
}

export const customerReducer = createReducer(
    initialState,
    on(loadCustomers, (state) => {
        return { ...state, loading: true};
    }),
    on(loadedCustomers, (state, { customers }) => {
        return { ...state, loading: false, customers };
    })
)