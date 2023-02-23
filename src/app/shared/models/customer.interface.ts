export interface Customer {
    id: number,
    firstName: string,
    lastName: string,
    status: string,
    email: string,
    phone?: string
}

export const StatusList = [
    {
        id: 'active',
        name: 'Active'
    },
    {
        id: 'pending',
        name: 'Pending'
    },
    {
        id: 'inactive',
        name: 'Inactive'
    }
]