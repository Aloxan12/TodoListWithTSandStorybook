import React, { Suspense } from 'react';
import { Routes, Route, Link } from 'react-router-dom'
import {useTheme} from "app/providers/ThemeProvider";
import {classNames} from "helpers/classNames/classNames";
import {AboutAsync} from "pages/About/About.async";
import {MainAsync} from "pages/Main/Main.async";

export const App = () => {
    const {theme, toggleTheme} = useTheme()
    return (
        <div className={classNames('app', {}, [theme])}{`app ${theme}`}>
            <button onClick={toggleTheme}>Поменять тему</button>
            <Link to={'/'}>Главная</Link>
            <Link to={'/about'}>О сайте</Link>
            <Suspense fallback={<div>...Loading</div>}>
                <Routes>
                    <Route path='/about' element={<AboutAsync />}/>
                    <Route path='/' element={<MainAsync />}/>
                </Routes>
            </Suspense>
        </div>
    );
}