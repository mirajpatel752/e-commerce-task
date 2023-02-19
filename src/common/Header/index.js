import React from "react";
import { useLocation } from "react-router-dom";
import "./header.scss";
import { Image, Row } from "antd";
import menu from "../../Assets/image/menu.png";
import search from "../../Assets/image/send.svg";
const Header = () => {
  const location = useLocation();
  return (
    <>
      <header className="container">
        <div clasName="header">
          <Row clasName="header-sec">
            <div clasName="headrer-menu">
              <Image className="menu-image" src={menu} preview={false} />
            </div>
            <div className="search-item">
              <div className="search-box">
                <Image
                  preview={false}
                  className="search-image-shere"
                  src={search}
                />
                <p>Delivery Address / Post Code</p>
              </div>
            </div>
          </Row>
        </div>
      </header>
    </>
  );
};

export default Header;
