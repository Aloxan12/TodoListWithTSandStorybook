import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { Select } from 'shared/ui/Select/Select';
import { Currency } from 'entities/Currency';
import { useCallback } from 'react';

interface CurrencySelectProps {
    readonly?: boolean
    className?: string
    value?: Currency
    onChange?: (value: Currency) => void
}

const options = [
    { value: Currency.BYN, content: Currency.BYN },
    { value: Currency.EUR, content: Currency.EUR },
    { value: Currency.RUB, content: Currency.RUB },
    { value: Currency.USD, content: Currency.USD },
];

export const CurrencySelect = ({
    className, value, onChange, readonly,
}: CurrencySelectProps) => {
    const { t } = useTranslation();
    const onChangeHandler = useCallback((value: string) => {
        onChange?.(value as Currency);
    }, [onChange]);
    return (
        <Select
            value={value}
            onChange={onChangeHandler}
            className={classNames('', {}, [className])}
            label={t('Укажите валюту')}
            options={options}
            readonly={readonly}
        />
    );
};
