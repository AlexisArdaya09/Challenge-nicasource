import { Customer } from "./customer.interface"

export interface customerState {
    loading: boolean,
    customers: ReadonlyArray<Customer>
}