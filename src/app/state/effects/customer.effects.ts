import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Injectable } from '@angular/core';
import { CustomerService } from 'src/app/shared/services/customer.service';
import { EMPTY } from 'rxjs';
import { map, mergeMap, catchError, tap } from 'rxjs/operators';
import { ActionsEnum } from '../actions/customer.actions';

@Injectable()
export class CustomerEffects {

    loadInitialCustomerData$ = createEffect(() => this.actions$.pipe(
        ofType(ActionsEnum.LOAD_INITIAL_CUSTOMER_DATA),
        tap(() => {
            this.customerService.generateInitData();
        })
    ), { dispatch: false });

    loadCustomers$ = createEffect(() => this.actions$.pipe(
        ofType(ActionsEnum.LOAD_CUSTOMERS),
        mergeMap(() => this.customerService.getCustomers()
            .pipe(
                map(customers => ({ type: ActionsEnum.LOADED_CUSTOMERS, customers })),
                catchError(() => EMPTY)
            )
        ),
    ));

    constructor(
        private actions$: Actions,
        private customerService: CustomerService) {
    }
}