import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import "swiper/css";
import styles from "./styles.module.css";
const PageFiveScroll3 = ({ recommendedProArray }) => {
  console.log(recommendedProArray);
  const datas = [
    {
      image: "assets/images/profile-page/Analysis-slider/01.png",
      name: "Fizzy",
      title: "Hair",
    },
    {
      image: "assets/images/profile-page/Analysis-slider/02.png",
      name: "Fizzy",
      title: "Hair",
    },
    {
      image: "assets/images/profile-page/Analysis-slider/01.png",
      name: "Fizzy",
      title: "Hair",
    },
    {
      image: "assets/images/profile-page/Analysis-slider/02.png",
      name: "Fizzy",
      title: "Hair",
    },
    {
      image: "assets/images/profile-page/Analysis-slider/01.png",
      name: "Fizzy",
      title: "Hair",
    },
  ];
  return (
    <div>
      <div className={styles.yourAnalysisHeading}>
        <h1 className={styles.yourAnalysisTitle}>Product Preferences</h1>
        <div className={styles.yourAnalysisArrows}>
          <img
            className={styles.arrow}
            id="yourAnalysisLeft"
            src="assets/images/profile-page/left-arrwo-01.svg"
            alt=""
          />
          <img
            className={styles.arrow}
            id="yourAnalysisRight"
            src="assets/images/profile-page/right-arrow-01.svg"
            alt=""
          />
        </div>
      </div>
      <Swiper
        slidesPerView={2.3}
        spaceBetween={20}
        loop={false}
        navigation={{
          nextEl: "#yourAnalysisRight",
          prevEl: "#yourAnalysisLeft",
        }}
        modules={[Navigation]}
        breakpoints={{
          240: {
            slidesPerView: 2.5,
            spaceBetween: 10,
          },
          470: {
            slidesPerView: 3,
            spaceBetween: 10,
          },
          640: {
            slidesPerView: 3,
            spaceBetween: 10,
          },
          768: {
            slidesPerView: 3.7,
            spaceBetween: 20,
          },
          990: {
            slidesPerView: 2.5,
            spaceBetween: 20,
          },
          1024: {
            slidesPerView: 2.5,
            spaceBetween: 40,
          },
          1224: {
            slidesPerView: 2.5,
            spaceBetween: 20,
          },
        }}>
        {/* {recommendedProArray && */}
        {recommendedProArray.map((data) => {
          console.log(data.front_img);
          let slicedTitle = data.product_brand;
          slicedTitle = slicedTitle.substring(0, 20);
          slicedTitle = slicedTitle.substring(0, slicedTitle.lastIndexOf(" "));
          return (
            <SwiperSlide>
              <div className={styles.card}>
                <img
                  className={styles.cardImage}
                  src={`https://s3.amazonaws.com/hdproductimage/${data.front_img}`}
                  alt=""
                />
                <div
                  style={{
                    // color: "black",
                    borderRadius: "10px",
                  }}
                  className={styles.names}>
                  <p className={styles.cardName}>{slicedTitle}</p>
                </div>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default PageFiveScroll3;
