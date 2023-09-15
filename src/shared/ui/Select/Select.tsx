import { classNames } from 'shared/lib/classNames/classNames';
import { ChangeEvent, useMemo } from 'react';
import cls from './Select.module.scss';

export interface SelectOption<T extends string> {
    value: T
    content: string
}

interface SelectProps<T extends string> {
    className?: string
    label?: string
    value?: T
    readonly?: boolean
    options?: SelectOption<T>[]
    onChange?: (value: T) => void
}

export const Select = <T extends string>({
    className, label, options, onChange, value, readonly,
}: SelectProps<T>) => {
    const onChangeHandler = (e: ChangeEvent<HTMLSelectElement>) => {
        onChange?.(e.target.value as T);
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
            <select className={cls.select} value={value} onChange={onChangeHandler} disabled={readonly}>
                {optionsList}
            </select>
        </div>
    );
};
