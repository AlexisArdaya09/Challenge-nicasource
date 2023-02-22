import { createReducer, on } from '@ngrx/store';
import { customerState } from 'src/app/shared/models/customer.state';
import { loadCustomers, loadedCustomers } from '../actions/customer.action';

export const initialState: customerState = { loading: false, customers: [] }

export const customerReducer = createReducer(
    initialState,
    on(loadCustomers, (state) => {
        return { ...state, loading: true};
    }),
    on(loadedCustomers, (state, { customers }) => {
        return { ...state, loading: false, customers };
    })
)