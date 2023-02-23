import { Customer } from "./customer.interface"

export interface CustomerState {
    loading: boolean,
    customers: ReadonlyArray<Customer>,
    error : string,
    loaded: boolean,
    customerSelected: Customer
}