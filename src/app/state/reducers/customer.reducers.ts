import { createReducer, on } from '@ngrx/store';
import { CustomerState } from 'src/app/shared/models/customer.state';
import { invokeSaveNewCustomer, loadCustomers, loadedCustomers, saveCustomerSuccess, saveCustomerError } from '../actions/customer.actions';

export const initialState: CustomerState = {
    loading: false,
    customers: [],
    error: null,
    loaded: false
}

export const customerReducer = createReducer(
    initialState,
    on(loadCustomers, (state) => {
        return { ...state, loading: true };
    }),
    on(loadedCustomers, (state, { customers }) => {
        return {
            ...state,
            loading: false,
            loaded: false,
            customers
        };
    }),
    on(invokeSaveNewCustomer, (state) => {
        return {
            ...state,
            loading: true,
            loaded: false
        }
    }),
    on(saveCustomerSuccess, (state, { response }) => {
        return {
            ...state,
            loading: false,
            loaded: true,
            customers: [response, ...state.customers]
        }
    }),
    on(saveCustomerError, (state, { error }) => {
        return {
            ...state,
            loading: false,
            loaded: false,
            error
        }
    })
)
