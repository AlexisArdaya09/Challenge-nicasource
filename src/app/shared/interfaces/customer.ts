export interface Customer {
    id: number,
    firstName: string,
    lastName: string,
    status: string,
    email: string,
    phone: string
}

export enum StatusEnum {
    ACTIVE = 'active',
    PENDING = 'pending',
    INACTIVE = 'inactive'
}

