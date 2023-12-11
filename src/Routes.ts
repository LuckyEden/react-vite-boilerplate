import React, { lazy } from 'react';
import NotFound from './views/404';

export interface IRoute {
    path: string;
    element: React.ReactNode;
    childRoutes?: IRoute[];
}

export interface RouteComponentProps {
    path: string;
    component: React.ComponentType<any> | null;
    props?: any;
    childRoutes?: RouteComponentProps[]
}

const NestedRoutes: RouteComponentProps[] = [
    {
        path: "*",
        component: NotFound
    },

    {
        path: "/",
        component: lazy(() => import("./components/Layout"))
    },
]


export default NestedRoutes;