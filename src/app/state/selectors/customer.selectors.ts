import { createSelector } from '@ngrx/store';
import { CustomerState } from 'src/app/shared/models/customer.state';
import { AppState } from '../app.state';

export const selectCustomersFeature = (state: AppState) => state.customerData;

export const selectCustomerList = createSelector(
    selectCustomersFeature,
    (state: CustomerState) => state.customers
)

export const selectCustomerLoading = createSelector(
    selectCustomersFeature,
    (state: CustomerState) => state.loading
)

export const selectSaveCustomerStatus = createSelector(
    selectCustomersFeature,
    (state: CustomerState) => {
        return {
            error: state.error,
            loaded: state.loaded
        }
    }
)

export const selectGetCustomerByIdStatus = createSelector(
    selectCustomersFeature,
    (state: CustomerState) => {
        return {
            error: state.error,
            loaded: state.loaded,
            customerSelected: state.customerSelected
        }
    }
)

export const selectDeleteCustomerStatus = createSelector(
    selectCustomersFeature,
    (state: CustomerState) => {
        return {
            error: state.error,
            loaded: state.loaded,
        }
    }
)