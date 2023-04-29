import React from "react";
import Layout from "../components/Layout";
import Pokemon from "../views/Pokemon";

export interface IRoute {
    path: string;
    element: React.ReactNode;
    childRoutes?: IRoute[];
}

const routes:IRoute[] = [
    {
        path: "/",
        element: <Layout />,
        childRoutes: [
            {
                path: "pokemon",
                element: <Pokemon />
            }
        ]
    }
]

export default routes;