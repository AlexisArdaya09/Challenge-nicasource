import { createReducer, on } from '@ngrx/store';
import { CustomerState } from 'src/app/shared/models/customer.state';
import * as customerActions from '../actions/customer.actions';
import { getCustomerByIdError } from '../actions/customer.actions';

export const initialState: CustomerState = {
    loading: false,
    error: null,
    loaded: false,
    customers: [],
    customerSelected: null,
}

export const customerReducer = createReducer(
    initialState,
    on(customerActions.loadCustomers, (state) => {
        return { ...state, loading: true };
    }),
    on(customerActions.loadedCustomers, (state, { customers }) => {
        return {
            ...state,
            loading: false,
            loaded: false,
            customers
        };
    }),
    on(customerActions.invokeSaveNewCustomer, (state) => {
        return {
            ...state,
            loading: true,
            loaded: false
        }
    }),
    on(customerActions.saveCustomerSuccess, (state, { response }) => {
        const newCustomers = [...state.customers]
        newCustomers.unshift(response);
        return {
            ...state,
            loading: false,
            loaded: true,
            customers:newCustomers
        }
    }),
    on(customerActions.saveCustomerError, (state, { error }) => {
        return {
            ...state,
            loading: false,
            loaded: false,
            error
        }
    }),
    on(customerActions.invokeGetCustomerById, (state) => {
        return {
            ...state,
            loading: true,
        }
    }),
    on(customerActions.getCustomerByIdSuccess, (state, { response }) => {
        return {
            ...state,
            loading: false,
            customerSelected: response
        }
    }),
    on(customerActions.getCustomerByIdError, (state, {error}) => {
        return {
            ...state,
            loading: false,
            loaded: false,
            error
        }
    }),
    on(customerActions.invokeUpdateCustomer, (state) => {
        return {
            ...state,
            loading: true,
            loaded: false
        }
    }),
    on(customerActions.updateCustomerSuccess, (state, { response }) => {
        const newCustomers = state.customers.filter(customer => customer.id !== response.id);
        newCustomers.unshift(response);
        return {
            ...state,
            loading: false,
            loaded: true,
            customers: newCustomers
        }
    }),
    on(customerActions.updateCustomerError, (state, { error }) => {
        return {
            ...state,
            loading: false,
            loaded: false,
            error
        }
    })
)
