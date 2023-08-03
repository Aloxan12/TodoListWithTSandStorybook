import { Country } from 'entities/Country';
import { Currency } from 'entities/Currency';
import { StateSchema } from 'app/providers/StoreProvider';
import { getProfileForm } from './getProfileForm';

describe('getProfileForm.test', () => {
    test('get from data', () => {
        const data = {
            username: 'alex',
            age: 22,
            country: Country.America,
            lastName: 'shav',
            first: 'alex',
            city: 'minsk',
            currency: Currency.USD,
        };
        const state: DeepPartial<StateSchema> = {
            profile: {
                form: data,
            },
        };
        expect(getProfileForm(state as StateSchema)).toEqual(data);
    });
    test('empty from data', () => {
        const state: DeepPartial<StateSchema> = {
            profile: {},
        };
        expect(getProfileForm(state as StateSchema)).toEqual(undefined);
    });
});
