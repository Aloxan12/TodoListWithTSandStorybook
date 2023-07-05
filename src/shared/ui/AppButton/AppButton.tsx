import {classNames} from "helpers/classNames/classNames";
import cls from './AppButton.module.scss'
import {ButtonHTMLAttributes, FC} from "react";

export enum ThemeButton{
    clear = 'clear',
}

interface AppButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>{
    className?: string
    theme?: ThemeButton
}

export const AppButton: FC<AppButtonProps> = ({className,theme,  children , ...otherProps}) => {
    return (
        <button className={classNames(cls.appButton, {}, [className, cls[theme]])} {...otherProps}>
            {children}
        </button>
    );
};