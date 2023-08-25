import axios from 'axios';
import { TestAsyncThunk } from 'shared/lib/tests/TestAsyncThunk/TestAsyncThunk';
import { fetchProfileData, Profile, profileActions } from 'entities/Profile';
import { Country } from 'entities/Country';
import { Currency } from 'entities/Currency';

jest.mock('axios');

const mockedAxios = jest.mocked(axios, true);

describe('fetchProfileData.test', () => {
    test('', async () => {
        const profileData: Profile = {
            username: '123',
            age: 22,
            city: 'Minsk',
            first: 'Vik',
            country: Country.America,
            currency: Currency.USD,
            avatar: '',
        };

        const thunk = new TestAsyncThunk(fetchProfileData);
        thunk.api.get.mockReturnValue(Promise.resolve({ data: profileData }));
        const result = await thunk.callThunk('1');

        expect(mockedAxios.get).toHaveBeenCalled();
        expect(result.meta.requestStatus).toBe('fulfilled');
        expect(result.payload).toEqual(profileData);
    });

    test('error login', async () => {
        const thunk = new TestAsyncThunk(fetchProfileData);
        thunk.api.get.mockReturnValue(Promise.resolve({ status: 403 }));
        const result = await thunk.callThunk('1');

        expect(mockedAxios.get).toHaveBeenCalled();
        expect(result.meta.requestStatus).toBe('rejected');
        // expect(result.payload).toBe('error');
    });
});
