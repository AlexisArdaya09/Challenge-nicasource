import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Injectable } from '@angular/core';
import { CustomerService } from 'src/app/shared/services/customer.service';
import { EMPTY } from 'rxjs';
import { map, mergeMap, catchError, tap } from 'rxjs/operators';

@Injectable()
export class CustomerEffects {

    loadInitialCustomerData$ = createEffect(() => this.actions$.pipe(
        ofType('[Customer List] Load Initial Customer Data'),
        tap(() => {
            this.customerService.generateInitData();
        })
    ), { dispatch: false });

    loadCustomers$ = createEffect(() => this.actions$.pipe(
        ofType('[Customer List] Load Customers'),
        mergeMap(() => this.customerService.getCustomers()
            .pipe(
                map(customers => ({ type: '[Customer List] Loaded success', customers })),
                catchError(() => EMPTY)
            )
        ),
    ));

    constructor(
        private actions$: Actions,
        private customerService: CustomerService) {

    }
}