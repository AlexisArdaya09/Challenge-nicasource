import { createAction, props } from '@ngrx/store';
import { Customer } from 'src/app/shared/models/customer.interface';

export const loadInitialCustomerData = createAction(
    '[Customer List] Load Initial Customer Data'
)

export const loadCustomers = createAction(
    '[Customer List] Load Customers'
)

export const loadedCustomers = createAction(
    '[Customer List] Loaded success',
    props<{ customers: Customer[] }>()
)