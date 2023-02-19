import { Navigate, Route, Routes, useNavigate } from "react-router-dom";

import { RoutesPaths } from "./routes/index";
import { useLocation } from "react-router-dom";
import { isUserLoggedIn } from "./IsAuthed";

const Router = () => {
  const location = useLocation();
  const FinalRoute = (props) => {
    const route = props?.route;
    if (route?.meta.authRoute && isUserLoggedIn() === null) {
      return (
        <Navigate to="/" replace={true} state={{ path: location?.pathname }} />
      );
    } else {
      return <route.component {...props} />;
    }
  };

  return (
    <>
      <Routes>
        {RoutesPaths.map((route, index) => {
          return (
            <Route
              exact
              key={index}
              path={route?.path}
              element={<FinalRoute route={route} />}
            />
          );
        })}
      </Routes>
    </>
  );
};

export default Router;
