import { Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Subject, takeUntil } from 'rxjs';
import { selectCustomerLoading, selectCustomerList, selectDeleteCustomerStatus } from '../../../state/selectors/customer.selectors';
import { AppState } from '../../../state/app.state';
import { Customer } from 'src/app/shared/models/customer.interface';
import { loadCustomers, invokeDeleteCustomer } from '../../../state/actions/customer.actions';
import { ConfirmationService, MessageService } from 'primeng/api';

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

  constructor(
    private store: Store<AppState>,
    private confirmationService: ConfirmationService,
    private messageService: MessageService
    ) {}

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

    this.store.select(selectDeleteCustomerStatus)
      .pipe(takeUntil(this.unsubscribe))
      .subscribe({
        next: (status) => {
          if (status.loaded) {
            this.messageService.add({ severity: 'success', summary: 'Delete Customer', detail: 'Customer successfully deleted.' });
          }
          if (status.error) {
            this.messageService.add({ severity: 'error', summary: 'Delete Customer', detail: status.error });
          }
        }
      });
  }

  ngOnDestroy() {
    this.unsubscribe.next(true);
    this.unsubscribe.unsubscribe();
  }

  trackByFunc(index, customer) {
    return customer.id;
  }

  onDelete(customer: Customer) {
    this.confirmationService.confirm({
      key: 'confirmDelete',
      message: `Are you sure to delete "${customer.firstName} ${customer.lastName}"?`,
      accept: () => {
        this.isLoading = true;
        this.delete(customer.id);
      },
    });
  }

  delete(customerId: string) {
    this.store.dispatch(invokeDeleteCustomer({ customerId }));
  }
}
