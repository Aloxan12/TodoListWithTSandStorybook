import { Theme, useTheme } from 'app/providers/ThemeProvider';
import { classNames } from 'helpers/classNames/classNames';
import LightIcon from 'shared/assets/icons/theme-light.svg';
import DarkIcon from 'shared/assets/icons/theme-dark.svg';
import { AppButton, ThemeButton } from 'shared/ui/AppButton/AppButton';

interface ThemeSwitcherProps {
    className?: string
}

export const ThemeSwitcher = ({ className }: ThemeSwitcherProps) => {
    const { theme, toggleTheme } = useTheme();
    return (
        <AppButton
            theme={ThemeButton.clear}
            className={classNames('', {}, [className])}
            onClick={toggleTheme}
        >
            {theme === Theme.dark ? <DarkIcon /> : <LightIcon />}
        </AppButton>
    );
};
