import {classNames} from "helpers/classNames/classNames";
import cls from './LangSwitcher.module.scss'
import {AppButton} from "shared/ui/AppButton/AppButton";
import {useTranslation} from "react-i18next";
interface LangSwitcherProps {
    className?: string
}

export const LangSwitcher = ({className}: LangSwitcherProps) => {
    const { t } = useTranslation();
    return (
        <AppButton className={classNames(cls.langSwitcher, {}, [className])}>
            {t('Язык')}
        </AppButton>
    );
};