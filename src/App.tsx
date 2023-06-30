import React, {Suspense, useState} from 'react';
import { Routes, Route, Link } from 'react-router-dom'
import {Counter} from "./components/Counter";
import './styles/index.scss'
import {AboutAsync} from "./pages/About/About.async";
import {MainAsync} from "./pages/Main/Main.async";

export enum Theme {
    light = 'light',
    dark = 'dark'
}

export const App = () => {
    const [theme, setTheme] = useState<Theme>(Theme.light)

    const toggleTheme = () =>{
        setTheme(theme === Theme.dark ? Theme.light : Theme.dark)
    }

    return (
        <div className={`app ${theme}`}>
            <button onClick={toggleTheme}>Поменять тему</button>
            <Link to={'/'}>Главная</Link>
            <Link to={'/about'}>О сайте</Link>
            <Suspense fallback={<div>...Loading</div>}>
                <Routes>
                    <Route path='/about' element={<AboutAsync />}/>
                    <Route path='/' element={<MainAsync />}/>
                </Routes>
            </Suspense>
            <Counter />
        </div>
    );
}