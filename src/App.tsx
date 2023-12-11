import React, { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import NestedRoutes, { RouteComponentProps } from "./Routes";
import LazyLoadingNode from "./components/LazyLoadingNode";

function App() {

  const GetNestedAllRoutes = (route: RouteComponentProps) => {
    if (route === undefined) return null;
    let children = null;

    if (route.childRoutes !== undefined) {
      children = route.childRoutes.map((subroute, _index) => (GetNestedAllRoutes(subroute)));
    }

    return (
      <Route
        key={window.location.pathname}
        path={route.path}
        element={route.component &&
          <>
            <Suspense fallback={<LazyLoadingNode />}>
              {React.createElement(route.component, {
                ...route.props
              }, children)}
            </Suspense>
          </>
        }
      >
        {children}
      </Route>
    )
  }


  return (
    <>
      <Routes>
        {NestedRoutes.map((route) => (
          GetNestedAllRoutes(route)
        ))}
      </Routes>
    </>
  )
}

export default App
