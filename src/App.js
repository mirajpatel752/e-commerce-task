import { BrowserRouter } from "react-router-dom";
import "./common/Header/header.scss";
import Router from "./Routers/router";
import "./Pages/ShopsDefault/shopsDefault.scss";
import "./Pages/shopAdetailsAll/shopAdetailsAll.scss";
import "./common/commonComponet/common.scss"

function App() {
  return (
    <BrowserRouter>
      <Router />
    </BrowserRouter>
  );
}

export default App;
