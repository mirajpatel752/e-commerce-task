import { Button, Image, Row } from "antd";
import brand_logo from "../../Assets/image/LOGO.png";
import stars from "../../Assets/image/stars.png";
import Shopping from "../../Assets/image/0Shopping.png";
import Shoppingone from "../../Assets/image/Page2.png";
import Shoppingtwo from "../../Assets/image/Page.png";
import SliderCard from "../../common/commonComponet/SliderCard";
import cageyTableData from "../../utility/utility";
import Footer from "../../common/commonComponet/footer/Footer";
import { useNavigate } from "react-router-dom";
import Header from "../../common/Header";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setActiveTag } from "../../store/tags-view.store";
const ShopAdetailsAll = () => {
  const { sliderData } = cageyTableData();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  
  useEffect(()=>{
    dispatch(setActiveTag(sliderData));
  },[])
  const  {tags}  = useSelector(state => state.tagsView);

  return (
    <>
     <Header />
      <div className="landing-page-shop-details">
        <div className="landing-banner-details">
          <div className="container">
            <div className="shop-details">
              <p className="shop-path" onClick={()=>navigate("/")}>
                Home &nbsp; >&nbsp; Shops&nbsp; > &nbsp; Harris Farm Markets
              </p>
            </div>
            <div className="shop-product-header">
              <div className="product-wrapper">
                <Image
                  className="product-logo"
                  src={brand_logo}
                  preview={false}
                />
                <h1 className="product-title-name">Harris Farm Markets</h1>
                <Row className="product-reting-view">
                  <Image
                    className="product-reting-image"
                    src={stars}
                    preview={false}
                  />
                  <p className="reting-text">No rating found yet</p>
                </Row>
                <Row className="product-button-wrapper">
                  <Button className="button-more">More Info</Button>
                  <Button className="button-review">Give a review</Button>
                </Row>
                <div className="product-search-box">
                  <div className="product-search-box-border">
                    <input
                      className="product-search-input"
                      placeholder="Search Harris Farm Products"
                    />
                    <button className="product-search-button">SEARCH </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="step-fillter-wrapper">
              <div className="step-wrapper">
                <div className="button-fillter-active">
                  <Image preview={false} src={Shopping} className="image" />
                  <p className="text">All</p>
                </div>
                <div className="button-fillter">
                  <Image preview={false} src={Shoppingone} className="image" />
                  <p className="text">Fruits</p>
                </div>
                <div className="button-fillter">
                  <Image preview={false} src={Shoppingtwo} className="image" />
                  <p className="text">Vegetables</p>
                </div>
              </div>
            </div>
            <SliderCard sliderData={tags} name={"Fruits"} />
            <SliderCard sliderData={tags} name={"Vegetables"} />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ShopAdetailsAll;
