import { Routes, Route } from "react-router-dom";
import routes, { IRoute } from "./utils/routes";


function App() {

  function GetRoutes(route:IRoute, index:number) {
    if(route === undefined) return null;
    return (
      <Route 
          path={route.path} 
          element={route.element} 
          key={route.path + "_" + index.toString()}
          >
            {route.childRoutes !== undefined && route.childRoutes.map((route, _index) => {
              return GetRoutes(route, _index);
            })}
      </Route>
    )
  }
 
  
  return (
    <>
    <Routes>
      {routes.map((route, index) => {
        return GetRoutes(route, index);
      })}
    </Routes>
    </>
  )
}

export default App
