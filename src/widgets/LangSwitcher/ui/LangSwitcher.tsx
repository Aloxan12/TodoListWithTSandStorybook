import {classNames} from "helpers/classNames/classNames";
import cls from './LangSwitcher.module.scss'
import {AppButton, ThemeButton} from "shared/ui/AppButton/AppButton";
import {useTranslation} from "react-i18next";

interface LangSwitcherProps {
    className?: string
}

export const LangSwitcher = ({className}: LangSwitcherProps) => {
    const { t, i18n } = useTranslation();

    const onToggle = ()=>{
        i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru')
    }

    return (
        <AppButton className={classNames(cls.langSwitcher, {}, [className])} onClick={onToggle} theme={ThemeButton.clear}>
            {t('Язык')}
        </AppButton>
    );
};