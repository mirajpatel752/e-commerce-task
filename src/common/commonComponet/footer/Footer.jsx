import { Col, Row, Space } from "antd";
import { FacebookOutlined, InstagramOutlined } from "@ant-design/icons";

const Footer = () => {
  return (
    <>
      <div className="footer-back">
        <div className="footer-wrapper">
          <Row>
            <Col xs={{ span: 5, offset: 1 }} lg={{ span: 4, offset: 2 }}>
              <div className="footer-sec">
                <h5 className="footer-title">POPULAR SUBURBS</h5>
                <p className="footer-subtitle">Castle Hill</p>
                <p className="footer-subtitle">Kellyville</p>
                <p className="footer-subtitle">Cherrybrook</p>
                <p className="footer-subtitle">Baulkham Hills</p>
                <p className="footer-subtitle">Pennant Hills</p>
              </div>
            </Col>
            <Col xs={{ span: 11, offset: 1 }} lg={{ span: 4, offset: 2 }}>
              <div className="footer-sec">
                <h5 className="footer-title">PAGES</h5>
                <p className="footer-subtitle">About Us</p>
                <p className="footer-subtitle">Shop Registration</p>
                <p className="footer-subtitle">Shop & Drive for Us</p>
                <p className="footer-subtitle">Terms & Conditions</p>
              </div>
            </Col>
            <Col xs={{ span: 5, offset: 1 }} lg={{ span: 4, offset: 2 }}>
              <div className="footer-sec">
                <h5 className="footer-title">KEEP IN TOUCH</h5>
                <p className="footer-subtitle">Contact Us</p>
                <p className="footer-subtitle">Help Centre</p>
                <Space size={"large"}>
                  <FacebookOutlined className="facebook" />
                  <InstagramOutlined className="facebook" />
                </Space>
              </div>
            </Col>
          </Row>
        </div>
      </div>
    </>
  );
};

export default Footer;
