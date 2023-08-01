import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { Select } from 'shared/ui/Select/Select';
import { Country } from 'entities/Country';
import { Currency } from 'entities/Currency';
import { useCallback } from 'react';
import cls from './CountrySelect.module.scss';

interface CountrySelectProps {
    className?: string
    readonly?: boolean
    value?: Country
    onChange?: (value: Country) => void
}

const options = [
    { value: Country.Belarus, content: Country.Belarus },
    { value: Country.America, content: Country.America },
    { value: Country.Ukraine, content: Country.Ukraine },
    { value: Country.Russia, content: Country.Russia },
];

export const CountrySelect = ({
    className, value, readonly, onChange,
}: CountrySelectProps) => {
    const { t } = useTranslation();

    const onChangeHandler = useCallback((value: string) => {
        onChange?.(value as Country);
    }, [onChange]);
    return (
        <Select
            value={value}
            onChange={onChangeHandler}
            className={classNames('', {}, [className])}
            label={t('Укажите страну')}
            options={options}
            readonly={readonly}
        />
    );
};
