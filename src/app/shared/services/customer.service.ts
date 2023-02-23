import * as uuid from 'uuid';

import { Injectable } from '@angular/core';
import { delay, Observable, of } from 'rxjs';
import { Customer } from '../models/customer.interface';


@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  private numberInitData = 20;

  constructor() { }

  getRamdomStatus() {
    const status = ['active', 'pending', 'inactive'];
    const randomIndex = Math.floor(Math.random() * status.length);;
    return status[randomIndex];
  }

  generateInitData() {
    const customers = JSON.parse(localStorage.getItem('customers')) || [];
    if (customers && customers.length > 0) return;

    for (let index = 1; index <= this.numberInitData; index++) {
      const customer: Customer = {
        id: uuid.v4(),
        firstName: `Alexis${index}`,
        lastName: `Ardaya${index}`,
        status: this.getRamdomStatus(),
        email: 'alexisardaya@gmail.com',
        phone: '76646695'
      }

      customers.push(customer);
    }

    localStorage.setItem('customers', JSON.stringify(customers));
  }


  getCustomers(): Observable<Customer[]> {
    const customers = JSON.parse(localStorage.getItem('customers'));

    return of(customers).pipe(
      delay(1500)
    )
  }

  create(customer: Customer): Observable<Customer> {
    const customers = JSON.parse(localStorage.getItem('customers'));
    customers.push({...customer, id : uuid.v4()});
    console.log(customers)
    localStorage.setItem('customers', JSON.stringify(customers));

    return of(customer).pipe(
      delay(1500)
    )
  }
}
