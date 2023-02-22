import { createSelector } from '@ngrx/store';
import { customerState } from 'src/app/shared/models/customer.state';
import { AppState } from '../app.state';

export const selectCustomersFeature= (state: AppState) => state.customerData;

export const selectCustomerList = createSelector(
    selectCustomersFeature,
    (state: customerState) => state.customers
)

export const selectCustomerLoading = createSelector(
    selectCustomersFeature,
    (state: customerState) => state.loading
)
