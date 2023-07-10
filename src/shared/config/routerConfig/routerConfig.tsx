import {RouteProps} from "react-router-dom";
import {Main} from "pages/Main";
import {About} from "pages/About";
import {NotFound} from "pages/NotFound";

export enum AppRoutes {
    'Main' = 'main',
    'About' = 'about',
    'NotFound' = 'notFound'
}

export const RoutePath: Record<AppRoutes, string> = {
    [AppRoutes.Main]: '/',
    [AppRoutes.About]: '/about',
    [AppRoutes.NotFound]: '*'
}

export const routeConfig: Record<AppRoutes, RouteProps> = {
    [AppRoutes.Main]: {
        path: RoutePath.main,
        element: <Main/>
    },
    [AppRoutes.About]: {
        path: RoutePath.about,
        element: <About/>
    },
    [AppRoutes.NotFound]: {
        path: RoutePath.notFound,
        element: <NotFound/>
    }
}