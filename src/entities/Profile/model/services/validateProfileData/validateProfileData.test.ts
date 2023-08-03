import { Profile, ValidateProfileError } from 'entities/Profile';
import { Country } from 'entities/Country';
import { Currency } from 'entities/Currency';
import { validateProfileData } from './validateProfileData';

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

describe('validateProfileData.test', () => {
    test('success', async () => {
        const result = validateProfileData(profileData);
        expect(result).toEqual([]);
    });

    test('without first and last name', async () => {
        const result = validateProfileData({ ...profileData, lastName: '', first: '' });
        expect(result).toEqual([ValidateProfileError.INCORRECT_USER_DATA]);
    });

    test('incorrect age', async () => {
        const result = validateProfileData({ ...profileData, age: undefined });
        expect(result).toEqual([ValidateProfileError.INCORRECT_AGE]);
    });

    test('incorrect country', async () => {
        const result = validateProfileData({ ...profileData, country: undefined });
        expect(result).toEqual([ValidateProfileError.INCORRECT_COUNTRY]);
    });
    test('incorrect all field', async () => {
        const result = validateProfileData({});
        expect(result).toEqual([
            ValidateProfileError.INCORRECT_USER_DATA,
            ValidateProfileError.INCORRECT_AGE,
            ValidateProfileError.INCORRECT_COUNTRY]);
    });
});
