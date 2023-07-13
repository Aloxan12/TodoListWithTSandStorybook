import {classNames} from 'shared/lib/classNames/classNames';
import {useState} from 'react';
import {ThemeSwitcher} from 'widgets/ThemeSwitcher';
import {LangSwitcher} from 'widgets/LangSwitcher';
import {useTranslation} from 'react-i18next';
import cls from './Sidebar.module.scss';
import {AppButton} from 'shared/ui/AppButton/AppButton';

interface SidebarProps {
    className?: string
}

export const Sidebar = ({className}: SidebarProps) => {
    const {t} = useTranslation();
    const [collapsed, setCollapsed] = useState(false);

    const onToggle = () => {
        setCollapsed((prevState) => !prevState);
    };

    return (
        <div
            data-testid="sidebar"
            className={
                classNames(cls.sidebar, {[cls.collapsed]: collapsed}, [className])
            }
        >
            <AppButton data-testid="sidebar-toggle" onClick={onToggle}>{t('Переключатель')}</AppButton>

            <div className={cls.switchers}>
                <ThemeSwitcher/>
                <LangSwitcher className={cls.lang}/>
            </div>
        </div>
    );
};
