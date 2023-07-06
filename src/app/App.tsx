import React, {Suspense} from 'react';
import './styles/index.scss'
import {useTheme} from "app/providers/ThemeProvider";
import {classNames} from "helpers/classNames/classNames";
import {AppRouter} from "app/providers/router";
import {Navbar} from "widgets/Navbar";
import {Sidebar} from "widgets/Sidebar/ui/Sidebar";
import { useTranslation } from 'react-i18next';

const Component = ()=>{
    const { t, i18n } = useTranslation();
    const onToggle = ()=>{
        i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru')
    }
    return <div>
        <button onClick={onToggle}> {t('Перевод')}</button>
        <span>
            {t('Текстовый перевод')}
        </span>
    </div>
}

export const App = () => {
    const {theme} = useTheme()
    return (
        <div className={classNames('app', {}, [theme])}>
            <Suspense fallback=''>
                <Component />
                <Navbar />
                <div className='content-page'>
                    <Sidebar />
                    <AppRouter />
                </div>
            </Suspense>
        </div>
    );
}