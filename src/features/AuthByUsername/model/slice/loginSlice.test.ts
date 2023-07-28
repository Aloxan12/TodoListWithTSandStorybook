import { loginActions, loginReducer, LoginSchema } from 'features/AuthByUsername';

describe('loginSlice.test', () => {
    test('test set username', () => {
        const state: DeepPartial<LoginSchema> = { username: '123' };
        expect(loginReducer(
            state as LoginSchema,
            loginActions.setUsername('321'),
        )).toEqual({ username: '321' });
    });
    test('test set password', () => {
        const state: DeepPartial<LoginSchema> = { password: '123' };
        expect(loginReducer(
            state as LoginSchema,
            loginActions.setPassword('321'),
        )).toEqual({ password: '321' });
    });
});
