import React, { memo, Suspense, useCallback } from 'react';
import { Route, Routes } from 'react-router-dom';
import { PageLoader } from 'shared/ui/PageLoader/PageLoader';
import { AppRouteProps, routeConfig } from 'shared/config/routeConfig/routeConfig';
import { RequireAuth } from 'app/providers/router/ui/RequireAuth';

const AppRouter = () => {
    const renderWithWrapper = useCallback(({ element: elementRoute, path, authOnly }: AppRouteProps) => {
        const element = (
            <Suspense fallback={<PageLoader />}>
                {elementRoute}
            </Suspense>
        );
        return (
            <Route
                key={path}
                path={path}
                element={authOnly ? <RequireAuth>{element}</RequireAuth> : element}
            />
        );
    }, []);
    return (
        <Routes>
            {Object.values(routeConfig).map(renderWithWrapper)}
        </Routes>
    );
};
export default memo(AppRouter);
