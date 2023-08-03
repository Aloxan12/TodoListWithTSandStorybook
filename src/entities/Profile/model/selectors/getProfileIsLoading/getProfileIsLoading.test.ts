import { StateSchema } from 'app/providers/StoreProvider';
import { getProfileIsLoading } from 'entities/Profile';

describe('getProfileIsLoading.test', () => {
    test('loading', () => {
        const state: DeepPartial<StateSchema> = {
            profile: {
                isLoading: true,
            },
        };
        expect(getProfileIsLoading(state as StateSchema)).toBe(true);
    });
    test('empty', () => {
        const state: DeepPartial<StateSchema> = {
            profile: {},
        };
        expect(getProfileIsLoading(state as StateSchema)).toBe(false);
    });
});
