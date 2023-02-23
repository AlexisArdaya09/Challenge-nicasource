import { Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, Subject, takeUntil } from 'rxjs';
import { selectCustomerLoading, selectCustomerList } from '../../../state/selectors/customer.selectors';
import { AppState } from '../../../state/app.state';
import { Customer } from 'src/app/shared/models/customer.interface';
import { loadCustomers } from '../../../state/actions/customer.actions';

@Component({
  selector: 'cns-list-customer',
  templateUrl: './list-customer.component.pug',
  styleUrls: ['./list-customer.component.scss']
})
export class ListCustomerComponent implements OnInit, OnDestroy {

  public isLoading: boolean = false;
  public customers: Customer[] = [];
  public rowsPerPageOptions = [5, 10, 20];

  private unsubscribe: Subject<boolean> = new Subject<boolean>();

  constructor(private store: Store<AppState>,) {

  }

  ngOnInit(): void {
    this.store.dispatch(loadCustomers());

    this.store.select(selectCustomerLoading).pipe(takeUntil(this.unsubscribe))
      .subscribe({
        next: (isLoading: boolean) => {
          this.isLoading = isLoading;
        }
      });

    this.store.select(selectCustomerList)
      .pipe(takeUntil(this.unsubscribe))
      .subscribe({
        next: (customers: Customer[]) => {
            this.customers = customers;
        }
      })
  }

  ngOnDestroy() {
    this.unsubscribe.next(true);
    this.unsubscribe.unsubscribe();
  }

  trackByFunc(index, customer) {
    return customer.id;
  }
}
