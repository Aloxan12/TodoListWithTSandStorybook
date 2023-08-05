import { StateSchema } from 'app/providers/StoreProvider';
import { getUserAuthData } from './getUserAuthData';

const authData = {
    id: '1',
    username: 'alex',
};

describe('getUserAuthData.test', () => {
    test('get data', () => {
        const state: DeepPartial<StateSchema> = {
            user: {
                authData,
            },
        };
        expect(getUserAuthData(state as StateSchema)).toEqual(authData);
    });
});
