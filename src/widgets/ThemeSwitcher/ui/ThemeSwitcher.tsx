import React from "react";
import {useTheme} from "app/providers/ThemeProvider";
import {classNames} from "helpers/classNames/classNames";
import cls from './ThemeSwitcher.module.scss'

interface ThemeSwitcherProps {
    className?: string
}

export const ThemeSwitcher = ({className}: ThemeSwitcherProps) => {
    const {theme, toggleTheme} = useTheme()
    return (
        <button className={classNames(cls.themeSwitcher, {}, [className])} onClick={toggleTheme}>Поменять тему</button>
    );
};