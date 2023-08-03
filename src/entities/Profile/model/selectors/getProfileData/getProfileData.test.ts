import { StateSchema } from 'app/providers/StoreProvider';
import { Country } from 'entities/Country';
import { Currency } from 'entities/Currency';
import { getProfileData } from './getProfileData';

describe('getProfileData.test', () => {
    test('get data', () => {
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
                data,
            },
        };
        expect(getProfileData(state as StateSchema)).toEqual(data);
    });
    test('empty data', () => {
        const data = {};
        const state: DeepPartial<StateSchema> = {
            profile: {
                data,
            },
        };
        expect(getProfileData(state as StateSchema)).toEqual(undefined);
    });
});
