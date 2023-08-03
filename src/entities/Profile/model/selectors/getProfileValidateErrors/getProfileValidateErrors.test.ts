import { getProfileValidateErrors, ValidateProfileError } from 'entities/Profile';
import { StateSchema } from 'app/providers/StoreProvider';

describe('getProfileValidateErrors.test', () => {
    test('get validate errors', () => {
        const errors = [ValidateProfileError.SERVER_ERROR, ValidateProfileError.NO_DATA];
        const state: DeepPartial<StateSchema> = {
            profile: {
                validateErrors: errors,
            },
        };
        expect(getProfileValidateErrors(state as StateSchema)).toEqual(errors);
    });
    test('empty', () => {
        const state: DeepPartial<StateSchema> = {
            profile: {},
        };
        expect(getProfileValidateErrors(state as StateSchema)).toEqual(undefined);
    });
});
