import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { MessageService } from 'primeng/api';
import { Subject, takeUntil } from 'rxjs';
import { AppState } from 'src/app/state/app.state';
import { selectCustomerLoading, selectGetCustomerByIdStatus, selectSaveCustomerStatus } from 'src/app/state/selectors/customer.selectors';
import { Customer, StatusList } from '../../../shared/models/customer.interface';
import { invokeSaveNewCustomer, invokeGetCustomerById, invokeUpdateCustomer } from '../../../state/actions/customer.actions';

@Component({
  selector: 'cns-add-edit-customer',
  templateUrl: './add-edit-customer.component.pug',
  styleUrls: ['./add-edit-customer.component.scss']
})
export class AddEditCustomerComponent implements OnInit, OnDestroy {

  public customerForm: FormGroup = this.fb.group({
    id: [''],
    firstName: ['', Validators.required],
    lastName: ['', Validators.required],
    email: ['', Validators.required],
    phone: [''],
    status: ['', Validators.required],
  });
  public customerId: string;
  public isEdit = false;
  public statusList = StatusList;
  public isLoading = false;

  private unsubscribe: Subject<boolean> = new Subject<boolean>();

  constructor(
    private fb: FormBuilder,
    private store: Store<AppState>,
    private messageService: MessageService,
    private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.store.select(selectCustomerLoading).pipe(takeUntil(this.unsubscribe))
      .subscribe({
        next: (isLoading: boolean) => {
          this.isLoading = isLoading;
        }
      });

    this.store.select(selectSaveCustomerStatus).pipe(takeUntil(this.unsubscribe))
      .subscribe({
        next: (status) => {
          if (status.loaded) {
            this.router.navigate(['/customer']);
          }
          if (status.error) {
            this.messageService.add({ severity: 'error', summary: 'Save Customer', detail: status.error });
          }
        }
      });

    this.store.select(selectGetCustomerByIdStatus).pipe(takeUntil(this.unsubscribe))
      .subscribe({
        next: (status) => {
          if (status.customerSelected) {
            this.customerForm.patchValue(status.customerSelected);
          }
          if (status.error) {
            this.messageService.add({ severity: 'error', summary: 'Get Customer Detail', detail: status.error });
          }
        }
      });

    this.route.params
      .pipe(takeUntil(this.unsubscribe))
      .subscribe(async params => {
        this.customerId = params['id'];
        if (this.customerId) {
          this.isEdit = true;
          this.store.dispatch(invokeGetCustomerById({ customerId: this.customerId }))
        }
      });
  }

  ngOnDestroy() {
    this.unsubscribe.next(true);
    this.unsubscribe.unsubscribe();
  }

  save() {
    if (this.customerId) {
      this.store.dispatch(invokeUpdateCustomer({ customer: this.customerForm.value }));
    } else {
      this.store.dispatch(invokeSaveNewCustomer({ newCustomer: this.customerForm.value }));
    }
  }
}
