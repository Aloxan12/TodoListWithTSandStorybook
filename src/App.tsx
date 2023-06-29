import React, {Suspense} from 'react';
import { Routes, Route, Link } from 'react-router-dom'
import {Counter} from "./components/Counter";
import './index.scss'
import {AboutAsync} from "./pages/About/About.async";
import {MainAsync} from "./pages/Main/Main.async";

export const App = () => {
    return (
        <div className='app'>
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