import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./common/Header/header.scss";
import "./Pages/ShopsDefault/shopsDefault.scss";
import "./Pages/shopAdetailsAll/shopAdetailsAll.scss";
import "./common/commonComponet/common.scss";
import ShopsDefault from "./Pages/ShopsDefault";
import ShopAdetailsAll from "./Pages/shopAdetailsAll";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ShopsDefault />} />
        <Route path="/shopsdetails-all" element={<ShopAdetailsAll />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
