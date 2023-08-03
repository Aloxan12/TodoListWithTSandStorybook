import { StateSchema } from 'app/providers/StoreProvider';
import { getProfileError } from 'entities/Profile';

describe('getProfileError.test', () => {
    test('get error', () => {
        const error = '123';
        const state: DeepPartial<StateSchema> = {
            profile: {
                error,
            },
        };
        expect(getProfileError(state as StateSchema)).toEqual(error);
    });
    test('empty error data', () => {
        const data = {};
        const state: DeepPartial<StateSchema> = {
            profile: {
                data,
            },
        };
        expect(getProfileError(state as StateSchema)).toEqual('');
    });
});
