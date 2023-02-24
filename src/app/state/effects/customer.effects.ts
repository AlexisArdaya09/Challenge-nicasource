import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Injectable } from '@angular/core';
import { CustomerService } from 'src/app/shared/services/customer.service';
import { EMPTY } from 'rxjs';
import { map, mergeMap, catchError, tap, switchMap } from 'rxjs/operators';
import { invokeSaveNewCustomer, loadCustomers, loadedCustomers, loadInitialCustomerData, saveCustomerSuccess, saveCustomerError, invokeGetCustomerById, getCustomerByIdSuccess, getCustomerByIdError, invokeUpdateCustomer, updateCustomerSuccess, updateCustomerError, deleteCustomerSuccess, deleteCustomerError, invokeDeleteCustomer } from '../actions/customer.actions';
import { Customer } from 'src/app/shared/models/customer.interface';

@Injectable()
export class CustomerEffects {

    loadInitialCustomerData$ = createEffect(() => this.actions$.pipe(
        ofType(loadInitialCustomerData),
        tap(() => {
            this.customerService.generateInitData();
        })
    ), { dispatch: false });

    loadCustomers$ = createEffect(() => this.actions$.pipe(
        ofType(loadCustomers),
        mergeMap(() => this.customerService.getCustomers()
            .pipe(
                map((customers: Customer[]) => loadedCustomers({ customers })),
                catchError(() => EMPTY)
            )
        ),
    ));

    saveNewCustomer$ = createEffect(() => this.actions$.pipe(
        ofType(invokeSaveNewCustomer),
        switchMap((action) => this.customerService.create(action.newCustomer)
            .pipe(
                map((data) => saveCustomerSuccess({ response: data }),
                    catchError(async (error) => saveCustomerError({ error: 'Customer error on save.' }))
                ))),
    ));

    getCustomerById$ = createEffect(() => this.actions$.pipe(
        ofType(invokeGetCustomerById),
        switchMap((action) => this.customerService.getCustomerById(action.customerId)
            .pipe(
                map((data) => getCustomerByIdSuccess({ response: data }),
                    catchError(async (error) => getCustomerByIdError({ error }))
                )))
    ));

    updateCustomer$ = createEffect(()=> this.actions$.pipe(
        ofType(invokeUpdateCustomer),
        switchMap((action) => this.customerService.updateCustomer(action.customer)
            .pipe(
                map((data) => updateCustomerSuccess({response: data}),
                catchError(async (error) => updateCustomerError({ error})))
            )
        )
    ));

    deleteCustomer$ = createEffect(()=> this.actions$.pipe(
        ofType(invokeDeleteCustomer),
        switchMap((action) => this.customerService.deleteCustomer(action.customerId)
            .pipe(
                map((data:any) => deleteCustomerSuccess({response: data.message, customerId: data.customerId}),
                catchError(async (error) => deleteCustomerError({ error })))
            )
        )
    ));

    constructor(
        private actions$: Actions,
        private customerService: CustomerService) {
    }
}