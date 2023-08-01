import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { ChangeEvent, memo, useMemo } from 'react';
import cls from './Select.module.scss';

interface SelectOptions {
    value: string
    content: string
}

interface SelectProps {
    className?: string
    label?: string
    value?: string
    options?: SelectOptions[]
    onChange?: (value: string) => void
}

export const Select = memo(({
    className, label, options, onChange, value,
}: SelectProps) => {
    const { t } = useTranslation();

    const onChangeHandler = (e: ChangeEvent<HTMLSelectElement>) => {
        onChange?.(e.target.value);
    };

    const optionsList = useMemo(() => options?.map((option) => (
        <option
            className={cls.option}
            key={option.value}
            value={option.value}
        >
            {option.content}
        </option>
    )), [options]);
    return (
        <div className={classNames(cls.Wrapper, {}, [className])}>
            {label && <span className={cls.label}>{label}</span>}
            <select className={cls.select} onChange={onChangeHandler}>
                {optionsList}
            </select>
        </div>
    );
});
