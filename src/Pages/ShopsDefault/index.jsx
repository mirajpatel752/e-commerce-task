import { Card, Col, Row } from "antd";
import HeaderSearch from "../../common/commonComponet/headerSearch";
import cageyTableData from "../../utility/utility";

const ShopsDefault = () => {
  const { dataShop } = cageyTableData();

  console.log(dataShop, "datashop*");
  return (
    <>
      <div className="landing-page ">
        <div className="landing-banner">
          <HeaderSearch />
          <div className="container">
            <div className="card-shop-item">
              <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
                {dataShop.map((item, key) => {
                  return (
                    <>
                      <Col key={key} className="gutter-row">
                        <div className="card-wrapper">
                          <Card className="card-title">
                            <h4 className="title-card">{item.title}</h4>
                          </Card>
                        </div>
                      </Col>
                    </>
                  );
                })}
              </Row>{" "}
            </div>
            <div className="">

            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ShopsDefault;
