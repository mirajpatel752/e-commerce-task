import React from "react";
import { useLocation } from "react-router-dom";
import "./header.scss";
import { Badge, Dropdown, Image, Row, Space } from "antd";
import menu from "../../Assets/image/menu.png";
import search from "../../Assets/image/send.svg";
import clock from "../../Assets/image/shopping bag.svg";
import HomeShop from "../../Assets/image/Vector.png";
import user from "../../Assets/image/user.svg";
import hart from "../../Assets/image/heart.svg";
import shopping from "../../Assets/image/shopping bag.svg";
import { DownOutlined } from "@ant-design/icons";
const Header = () => {
  const location = useLocation();
  const items = [
    {
      key: "1",
      label: <div>Delivery ASAP</div>,
    },
  ];
  
  return (
    <>
      <header className="container">
        <div className="header">
          <Row className="header-sec">
            <div className="headrer-menu">
              <Image className="menu-image" src={menu} preview={false} />
            </div>
            <div className="search-item">
              <div className="search-box">
                <Image
                  preview={false}
                  className="search-image-shere"
                  src={search}
                />
                <p className="delivery-address">Delivery Address / Post Code</p>
              </div>
            </div>
            <div className="delivery-wrapper">
              <div className="delivery-sec">
                <Image preview={false} className="time-clock" src={clock} />
                <Dropdown menu={{ items }}>
                  <Space className="space">
                    Deliver ASAP
                    <DownOutlined className="outline" />
                  </Space>
                </Dropdown>
              </div>
            </div>
            <div className="home-shop">
              <div className="home-shop-wrapper-block">
                <Image preview={false} className="shop-image" src={HomeShop} />
                <p className="home-shop-text">Shops</p>
              </div>
            </div>
            <div className="delivery-wrapper">
              <div className="delivery-sec">
                <Image preview={false} className="time-clock" src={user} />
                <Dropdown menu={{ items }}>
                  <Space className="space">
                    Sign In
                    <DownOutlined className="outline" />
                  </Space>
                </Dropdown>
              </div>
            </div>
            <div className="like-store">
              <Row>
                <div className="like">
                  <Badge count={1}>
                    <Image preview={false} src={hart} />
                  </Badge>
                </div>
                <div className="store">
                  <Badge count={2}>
                    <Image preview={false} src={shopping} />
                  </Badge>
                </div>
              </Row>
            </div>
          </Row>
        </div>
      </header>
    </>
  );
};

export default Header;
