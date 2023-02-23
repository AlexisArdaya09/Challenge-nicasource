import { createAction, props } from '@ngrx/store';
import { Customer } from 'src/app/shared/models/customer.interface';

enum ActionsEnum {
    LOAD_INITIAL_CUSTOMER_DATA = '[Customer List] Load Initial Customer Data',
    LOAD_CUSTOMERS = '[Customer List] Load Customers',
    LOADED_CUSTOMERS = '[Customer List] Loaded success',

    INVOKE_SAVE_NEW_CUSTOMER = '[Customer List] Invoke save new customer',
    SAVE_CUSTOMER_SUCCESS = '[Customer List] Save new customer succes',
    SAVE_CUSTOMER_ERROR = '[Customer List] Save new customer error',

    INVOKE_GET_CUSTOMER_BY_ID = '[Customer List] Invoke get customer by id',
    GET_CUSTOMER_BY_ID_SUCCESS = '[Customer List] Get customer by id succes',
    GET_CUSTOMER_BY_ID_ERROR = '[Customer List] Get customer by id error',

    INVOKE_UPDATE_CUSTOMER = '[Customer List] Invoke update customer',
    UPDATE_CUSTOMER_SUCCESS = '[Customer List] Update customer succes',
    UPDATE_CUSTOMER_ERROR = '[Customer List] Update customer error'
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

export const invokeGetCustomerById = createAction(
    ActionsEnum.INVOKE_GET_CUSTOMER_BY_ID,
    props<{ customerId: string }>(
    )
)

export const getCustomerByIdSuccess = createAction(
    ActionsEnum.GET_CUSTOMER_BY_ID_SUCCESS,
    props<{ response: Customer }>()
)

export const getCustomerByIdError = createAction(
    ActionsEnum.GET_CUSTOMER_BY_ID_ERROR,
    props<{ error: string }>()
)

export const invokeUpdateCustomer = createAction(
    ActionsEnum.INVOKE_UPDATE_CUSTOMER,
    props<{ customer: Customer }>(
    )
)

export const updateCustomerSuccess = createAction(
    ActionsEnum.UPDATE_CUSTOMER_SUCCESS,
    props<{ response: Customer }>()
)

export const updateCustomerError = createAction(
    ActionsEnum.UPDATE_CUSTOMER_ERROR,
    props<{ error: string }>()
)