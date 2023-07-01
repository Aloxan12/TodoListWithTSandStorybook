import {RouteProps} from "react-router-dom";
import {Main} from "pages/Main";
import {About} from "pages/About";

export enum AppRoutes{
    'Main' = 'main',
    'About' = 'about'
}

export const RoutePath: Record<AppRoutes, string> = {
    [AppRoutes.Main]: '/',
    [AppRoutes.About]: '/about'
}

export const routeConfig: Record<AppRoutes, RouteProps> = {
    [AppRoutes.Main]: {
        path: RoutePath.main,
        element: <Main />
    },
    [AppRoutes.About]: {
        path: RoutePath.about,
        element: <About />
    }
}