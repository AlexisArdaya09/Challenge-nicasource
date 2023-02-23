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
      delay(1000)
    )
  }

  create(customer: Customer): Observable<Customer> {
    const customers = JSON.parse(localStorage.getItem('customers'));
    customers.push({...customer, id : uuid.v4()});
    localStorage.setItem('customers', JSON.stringify(customers));

    return of(customer).pipe(
      delay(1000)
    )
  }

  getCustomerById(customerId: string): Observable<Customer> {
    let response;
    const customers = JSON.parse(localStorage.getItem('customers'));
    const customerById = customers.filter(customer => customer.id === customerId);
    
    if (customerById.length > 0){
      response = customerById[0]
    }else{
      response = null;
      throw new Error('Customer do not exists.');
    }
    return of(response).pipe(
      delay(1000)
    )
  }

  updateCustomer(customer: Customer): Observable<Customer> {
    try {
      const customers = JSON.parse(localStorage.getItem('customers'));
      const newCustomers = customers.filter(item => item.id !== customer.id);

      newCustomers.unshift(customer);
      localStorage.setItem('customers', JSON.stringify(newCustomers));

      return of(customer).pipe(
        delay(1000)
      )
    }catch(err) {
      throw new Error(err);
    }
  }
}
