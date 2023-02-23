import { createAction, props } from '@ngrx/store';
import { Customer } from 'src/app/shared/models/customer.interface';

enum ActionsEnum {
    LOAD_INITIAL_CUSTOMER_DATA = '[Customer List] Load Initial Customer Data',
    LOAD_CUSTOMERS = '[Customer List] Load Customers',
    LOADED_CUSTOMERS = '[Customer List] Loaded success',
    INVOKE_SAVE_NEW_CUSTOMER = '[Customer List] Invoke save new customer',
    SAVE_CUSTOMER_SUCCESS = '[Customer List] Save new customer succes',
    SAVE_CUSTOMER_ERROR = '[Customer List] Save new customer error'
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

export const invokeSaveNewCustomer = createAction(
    ActionsEnum.INVOKE_SAVE_NEW_CUSTOMER,
    props<{ newCustomer: Customer }>()
)

export const saveCustomerSuccess = createAction(
    ActionsEnum.SAVE_CUSTOMER_SUCCESS,
    props<{ response: Customer }>()
)

export const saveCustomerError = createAction(
    ActionsEnum.SAVE_CUSTOMER_ERROR,
    props<{ error: string }>()
)