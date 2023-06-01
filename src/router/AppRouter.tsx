import React from 'react';
import {Route, Routes} from "react-router-dom";
import {Login} from "../pages/Login/Login";
import {MainLayout} from "../pages/MainLayout/MainLayout";



export const AppRouter = ()=>{
    const token = true
    const routeResult = token ? [{
        element: <MainLayout />,
        path: '/',
        title: 'Главная',
        showInMenu: false,
    }] : [
        {
            element: <Login />,
            path: '/',
            title: 'Логин',
            showInMenu: false,
        },
        {
            element: <Login />,
            path: '*',
            title: 'Логин',
            showInMenu: false,
        }
    ]
    return <Routes>
        {routeResult.map((route, index) => <Route key={`${route.path}-${index}`} path={route.path} element={route.element} />)}
    </Routes>
}