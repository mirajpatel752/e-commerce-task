import { Button, Image, Row } from "antd";
import { useState } from "react";
import { Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

const SliderCard = ({sliderData,name}) => {
 
  const [picksForYouTopic, setPicksForYouTopic] = useState(sliderData);
  return (
    <>
      <div className="slider-card-context">
        <div className="slider-title-wrapper">
          <div className="slider-title-border">
            <h3 className="slide-title">
              {name}<div className="slider-title-border-bold"></div>
            </h3>
            <div className="view-all">
              <p className="view-all-text">View all</p>
            </div>
          </div>
          <div className="tournaments-card-wrapper">
            <Swiper
              spaceBetween={1}
              freeMode={true}
              className="mySwiper"
              pagination={{
                type: "progressbar",
              }}
              navigation={true}
              modules={[Navigation]}
              breakpoints={{
                300: {
                  width: 300,
                  slidesPerView: 3.5,
                },
                500: {
                  width: 500,
                  slidesPerView: 3.5,
                },
                900: {
                  width: 900,
                  slidesPerView: 6,
                },
                1200: {
                  width: 1200,
                  slidesPerView: 5.5,
                },
              }}
            >
              {picksForYouTopic.map((d, i) => {
                return (
                  <SwiperSlide>
                    <div className="card-wrapper" key={i}>
                      <div className="tournaments-card">
                        <div className="product-image">
                          <Image
                            className="image-product"
                            src={d.image}
                            preview={false}
                          />
                        </div>
                        <h3 className="product-name">Lemon</h3>
                        <Row className="product-price">
                          <p className="price">$2.47</p>
                          <p className="product-discount">($10.29/KG)</p>
                        </Row>
                        <Row className="product-button-wrapper">
                          <Button className="butoon-add">ADD TO CART</Button>
                        </Row>
                      </div>
                    </div>
                  </SwiperSlide>
                );
              })}
            </Swiper>
          </div>
        </div>
      </div>
    </>
  );
};

export default SliderCard;
