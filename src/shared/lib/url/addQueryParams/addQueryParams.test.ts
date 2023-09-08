import { getQueryParams } from './addQueryParams';

describe('addQueryParams.test', () => {
    test('test with one params', () => {
        const param = getQueryParams({ test: 'value' });
        expect(param).toEqual('?test=value');
    });
    test('test with two params', () => {
        const param = getQueryParams({
            test: 'value',
            second: '2',
        });
        expect(param).toEqual('?test=value&second=2');
    });
    test('test with undefined', () => {
        const param = getQueryParams({
            test: 'value',
            second: undefined,
        });
        expect(param).toEqual('?test=value');
    });
});
