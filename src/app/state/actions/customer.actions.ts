import { createAction, props } from '@ngrx/store';
import { Customer } from 'src/app/shared/models/customer.interface';

export enum ActionsEnum {
    LOAD_INITIAL_CUSTOMER_DATA = '[Customer List] Load Initial Customer Data',
    LOAD_CUSTOMERS = '[Customer List] Load Customers',
    LOADED_CUSTOMERS = '[Customer List] Loaded success',
}

export const loadInitialCustomerData = createAction(
    ActionsEnum.LOAD_INITIAL_CUSTOMER_DATA
)

export const loadCustomers = createAction(
    ActionsEnum.LOAD_CUSTOMERS
)

export const loadedCustomers = createAction(
    ActionsEnum.LOADED_CUSTOMERS,
    props<{ customers: Customer[] }>()
)