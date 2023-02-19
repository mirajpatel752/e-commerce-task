import React, { useEffect } from "react";
import Header from "../../common/Header/index";
import { Input, Space } from "antd";
import { useNavigate } from "react-router-dom";
import HeaderSearch from "../../common/commonComponet/headerSearch";
const { Search } = Input;
const LandingPage = () => {
  const navigate = useNavigate();

  return (
    <>
      <Header />
      <div className="landing-page ">
        <div className="landing-banner">
          <HeaderSearch />
        </div>
      </div>
    </>
  );
};

export default LandingPage;
