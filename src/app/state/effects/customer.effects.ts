import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Injectable } from '@angular/core';
import { CustomerService } from 'src/app/shared/services/customer.service';
import { EMPTY } from 'rxjs';
import { map, mergeMap, catchError, tap, switchMap } from 'rxjs/operators';
import { invokeSaveNewCustomer, loadCustomers, loadedCustomers, loadInitialCustomerData, saveCustomerSuccess, saveCustomerError } from '../actions/customer.actions';
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
                map((customers: Customer[]) => loadedCustomers({customers})),
                catchError(() => EMPTY)
            )
        ),
    ));

    saveNewCustomer$ = createEffect(() => this.actions$.pipe(
        ofType(invokeSaveNewCustomer),
        switchMap((action) => this.customerService.create(action.newCustomer)
            .pipe(
                map((data) => saveCustomerSuccess({response: data}),
                catchError(async (error) => saveCustomerError({ error: 'Customer error on save.' }))
            ))),
    ));

    constructor(
        private actions$: Actions,
        private customerService: CustomerService) {
    }
}