import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddEditCustomerComponent } from './add-edit-customer/add-edit-customer.component';
import { ListCustomerComponent } from './list-customer/list-customer.component';
import { ViewCustomerComponent } from './view-customer/view-customer.component';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared-module/shared.module';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        component: ListCustomerComponent,
      },
      {
        path: 'create',
        component: AddEditCustomerComponent,
      },
      {
        path: ':id/edit',
        component: AddEditCustomerComponent,
      },
      {
        path: ':id/view',
        component: ViewCustomerComponent,
      },
    ],
  },
];


@NgModule({
  declarations: [
    AddEditCustomerComponent,
    ListCustomerComponent,
    ViewCustomerComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    SharedModule
  ],
})
export class CustomerModule { }
