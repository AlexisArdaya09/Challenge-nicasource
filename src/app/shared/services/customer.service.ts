import * as uuid from 'uuid';

import { Injectable } from '@angular/core';
import { delay, Observable, of } from 'rxjs';
import { Customer } from '../models/customer.interface';


@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  private numberInitData = 20;
  private customers: Customer[] = [];

  constructor() { }

  getRamdomStatus() {
    const status = ['active', 'pending', 'inactive'];
    const randomIndex = Math.floor(Math.random() * status.length);;
    return status[randomIndex];
  }

  generateInitData() {
    for (let index = 1; index <= this.numberInitData; index++) {
      const customer: Customer = {
        id: uuid.v4(),
        firstName: `Alexis ${index}`,
        lastName: `Ardaya ${index}`,
        status: this.getRamdomStatus(),
        email: 'alexisardaya@gmail.com',
        phone: '76646695'
      }

      this.customers.push(customer);
    }

    localStorage.setItem('customers', JSON.stringify(this.customers));
  }


  getCustomers(): Observable<Customer[]> {
    this.customers = JSON.parse(localStorage.getItem('customers'));

    return of(this.customers).pipe(
      delay(1500)
    )
  }
}
