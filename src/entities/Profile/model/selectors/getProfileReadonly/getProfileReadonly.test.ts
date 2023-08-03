import { StateSchema } from 'app/providers/StoreProvider';
import { getProfileReadonly } from './getProfileReadonly';

describe('getProfileReadonly.test', () => {
    test('readonly', () => {
        const state: DeepPartial<StateSchema> = {
            profile: {
                readonly: true,
            },
        };
        expect(getProfileReadonly(state as StateSchema)).toBe(true);
    });
    test('empty', () => {
        const state: DeepPartial<StateSchema> = {
            profile: {},
        };
        expect(getProfileReadonly(state as StateSchema)).toBe(false);
    });
});
