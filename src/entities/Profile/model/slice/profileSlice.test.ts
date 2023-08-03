import { loginActions, loginReducer, LoginSchema } from 'features/AuthByUsername';
import {
    Profile, profileActions, profileReducer, ProfileSchema,
} from 'entities/Profile';
import { Country } from 'entities/Country';
import { Currency } from 'entities/Currency';

const profileData: Profile = {
    username: '123',
    age: 22,
    city: 'Minsk',
    first: 'Vik',
    lastName: 'HHH',
    country: Country.America,
    currency: Currency.USD,
    avatar: '',
};

describe('profileSlice.test', () => {
    test('test set readonly', () => {
        const state: DeepPartial<ProfileSchema> = { readonly: false };
        expect(profileReducer(
            state as ProfileSchema,
            profileActions.setReadonly(true),
        )).toEqual({ readonly: true });
    });
    test('test set profile data', () => {
        const state: DeepPartial<ProfileSchema> = { form: { ...profileData, lastName: 'qwe' } };
        expect(profileReducer(
            state as ProfileSchema,
            profileActions.updateProfile({ lastName: 'ewq' }),
        )).toEqual({ form: { ...profileData, lastName: 'ewq' } });
    });
});
