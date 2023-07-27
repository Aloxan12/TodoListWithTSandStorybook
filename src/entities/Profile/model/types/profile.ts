import { Country, Currency } from 'shared/const/common';

export interface Profile {
    first: 'Alexey',
    lastName: 'Shavel',
    age: 28,
    currency: Currency,
    country: Country,
    city: string,
    username: 'admin',
    avatar: string
}

export interface ProfileSchema {
    data?: Profile
    isLoading: boolean
    error?: string
    readonly: boolean
}
