import {
    User, userActions, userReducer, UserSchema,
} from 'entities/User';

const authData: User = {
    id: '1',
    username: 'test',
};

describe('userSlice.test', () => {
    test('inited state', () => {
        const state: DeepPartial<UserSchema> = { _inited: false };
        expect(userReducer(state as UserSchema, userActions.initAuthData)).toEqual({ _inited: true });
    });
    test('logout state', () => {
        const state: DeepPartial<UserSchema> = { _inited: true, authData };
        expect(userReducer(state as UserSchema, userActions.logout)).toEqual({ _inited: true });
    });
});
