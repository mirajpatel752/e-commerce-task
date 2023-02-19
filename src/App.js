import { BrowserRouter } from "react-router-dom";
import "./common/Header/header.scss";
import Router from "./Routers/router";
import "./Pages/LandingPage/LandingPage.scss";
import "./Pages/ShopsDefault/shopsDefault.scss";

function App() {
  return (
    <BrowserRouter>
      <Router />
    </BrowserRouter>
  );
}

export default App;
