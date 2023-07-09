import { classNames } from 'shared/lib/classNames/classNames';
import { ButtonHTMLAttributes, FC } from 'react';
import cls from './AppButton.module.scss';

export enum ThemeButton {
    clear = 'clear',
}

interface AppButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    className?: string
    theme?: ThemeButton
}

export const AppButton: FC<AppButtonProps> = ({
    className, theme, children, ...otherProps
}) => (
    <button className={classNames(cls.appButton, {}, [className, cls[theme]])} {...otherProps}>
        {children}
    </button>
);
