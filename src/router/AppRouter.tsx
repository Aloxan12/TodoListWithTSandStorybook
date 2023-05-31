import React from 'react';
import {BrowserRouter as Router, Navigate, Route, Routes, useLocation, useMatch} from "react-router-dom";
import {MainLayout} from "../pages/MainLayout/MainLayout";
import {Logout} from "../pages/Logout/Logout";
import {Login} from "../pages/Login/Login";

const user1 = {
    id: 1,
    roles: ['ADMIN', 'MANAGER']
}

interface IRedirect {
    path?: string
}

export const AppRedirect = ({ path = '/' }: IRedirect) => {
    const location = useLocation()
    return <Navigate to={path} state={{ from: location }} replace />
}

export const AppRouter = () => {
    const token = true
    return (
        <Router>

        </Router>
    );
}



export const NotAuthRoutes = () => {
    return (
        <Routes>
            <Route path={'/'} element={<Login />} />
        </Routes>
    )
}