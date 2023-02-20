import { Button, Card, Col, Image, Rate, Row } from "antd";
import cageyTableData from "../../utility/utility";
import all_image from "../../Assets/image/2.png";
import map_icon from "../../Assets/image/map pin.png";
import { useNavigate } from "react-router-dom";
import Footer from "../../common/commonComponet/footer/Footer";
import { useEffect, useState } from "react";
import Header from "../../common/Header";
import { useDispatch, useSelector } from "react-redux";
import { setCard } from "../../store/card.store";

const ShopsDefault = () => {
  const { dataShop, cardData } = cageyTableData();

  const [search, setSearch] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const produceDeteils = () => {
    navigate("/shopsdetails-all");
  };

  const shopingpage = () => {
    navigate("/");
  };

  const onchangeSearch = (e) => {
    const values = e.target.value;
    setSearch(values);
  };
  useEffect(() => {
    dispatch(setCard(cardData));
  }, []);
  const tags  = useSelector((state) => state.card.card);

  return (
    <>
      <Header />
      <div className="landing-page ">
        <div className="landing-banner">
          <div className="header-center">
            <div className="header-title">
              <h1 className="heading">Shop from your favourite</h1>
              <h1 className="heading-sub-title">grocery stores!</h1>
            </div>
          </div>
          <div className="search-box">
            <div className="search-box-border">
              <input
                className="search-input"
                placeholder="I am shopping for..."
                onChange={(e) => onchangeSearch(e)}
              />
              <button className="search-button" onClick={() => shopingpage()}>
                SEARCH{" "}
              </button>
            </div>
          </div>

          {search.length > 0 ? (
            <div className="container">
              <div className="card-shop-item">
                <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
                  {dataShop.map((item, key) => {
                    return (
                      <Col key={key} className="gutter-row">
                        <div className="card-wrapper">
                          <Card className="card-title">
                            <h4 className="title-card">{item.title}</h4>
                          </Card>
                        </div>
                      </Col>
                    );
                  })}
                </Row>{" "}
              </div>
              <div className="landing-page-shop-found">
                <div className="shop-found-title-wrapper">
                  <h3 className="shop-found-sub-title">16 shops found</h3>
                </div>

                <div className="card-deteils">
                  <Row gutter={16}>
                    {tags.map((item, key) => {
                      return (
                        <Col key={key} className="gutter-row">
                          <Card className="card">
                            <Image
                              preview={false}
                              className="card-image"
                              src={all_image}
                            />
                            <h5 className="item-name">Chemist Warehouse</h5>
                            <Row className="location">
                              <Image
                                preview={false}
                                className="item-map-icon"
                                src={map_icon}
                              />
                              <p className="location-address">
                                Castle Hill, NSW AU 2154
                              </p>
                            </Row>
                            <Row className="rating-review">
                              <Rate
                                className="star"
                                allowHalf
                                value={item.star}
                              />
                              <p className="rete-reviewa">56 reviews</p>
                            </Row>
                            <Button
                              className="view-button"
                              onClick={() => produceDeteils()}
                            >
                              VIEW ALL 134 ITEMS
                            </Button>
                          </Card>
                        </Col>
                      );
                    })}
                  </Row>
                </div>
              </div>
            </div>
          ) : null}
        </div>
      </div>
      {search.length > 0 ? <Footer /> : null}
    </>
  );
};

export default ShopsDefault;
