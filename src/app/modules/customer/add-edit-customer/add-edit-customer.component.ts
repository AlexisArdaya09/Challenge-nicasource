import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { MessageService } from 'primeng/api';
import { Subject, takeUntil } from 'rxjs';
import { AppState } from 'src/app/state/app.state';
import { selectCustomerLoading, selectSaveCustomerStatus } from 'src/app/state/selectors/customer.selectors';
import { Customer, StatusList } from '../../../shared/models/customer.interface';
import { invokeSaveNewCustomer } from '../../../state/actions/customer.actions';

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
  public statusList = StatusList;
  public isLoading = false;

  private unsubscribe: Subject<boolean> = new Subject<boolean>();

  constructor(
      private fb: FormBuilder,
      private store: Store<AppState>,
      private messageService: MessageService,
      private router: Router) { }

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
          console.log(status)
          if(status.loaded){
            this.router.navigate(['/customer']);
          }
          if(status.error){
            this.messageService.add({severity:'error', summary:'Save Customer', detail:status.error});
          }
        }
      });
  }

  ngOnDestroy() {
    this.unsubscribe.next(true);
    this.unsubscribe.unsubscribe();
  }

  save(){
    const newCustomer : Customer = this.customerForm.value;
    this.store.dispatch(invokeSaveNewCustomer({newCustomer}));
  }
}
