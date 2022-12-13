import React, { Fragment } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import "swiper/css";
import styles from "./styles.module.css";

const PageSixScroll3 = ({ videoArray }) => {
  console.log(videoArray);
  const datas = [
    {
      image: "assets/images/blog/01.png",
      title: "THIS SILK PRESS PROCESS WILL PUT YOU TO SLEEP #13...",
      name: "Jennifer Cynthia",
      verify: "assets/images/verify.svg",
      time: "2 weeks ago",
    },
    {
      image: "assets/images/blog/02.png",
      title: "THIS SILK PRESS PROCESS WILL PUT YOU TO SLEEP #13...",
      name: "Jennifer Cynthia",
      verify: "assets/images/verify.svg",
      time: "2 weeks ago",
    },
    {
      image: "assets/images/blog/03.png",
      title: "THIS SILK PRESS PROCESS WILL PUT YOU TO SLEEP #13...",
      name: "Jennifer Cynthia",
      verify: "assets/images/verify.svg",
      time: "2 weeks ago",
    },
    {
      image: "assets/images/blog/01.png",
      title: "THIS SILK PRESS PROCESS WILL PUT YOU TO SLEEP #13...",
      name: "Jennifer Cynthia",
      verify: "assets/images/verify.svg",
      time: "2 weeks ago",
    },
    {
      image: "assets/images/blog/02.png",
      title: "THIS SILK PRESS PROCESS WILL PUT YOU TO SLEEP #13...",
      name: "Jennifer Cynthia",
      verify: "assets/images/verify.svg",
      time: "2 weeks ago",
    },
    {
      image: "assets/images/blog/03.png",
      title: "THIS SILK PRESS PROCESS WILL PUT YOU TO SLEEP #13...",
      name: "Jennifer Cynthia",
      verify: "assets/images/verify.svg",
      time: "2 weeks ago",
    },
    {
      image: "assets/images/blog/01.png",
      title: "THIS SILK PRESS PROCESS WILL PUT YOU TO SLEEP #13...",
      name: "Jennifer Cynthia",
      verify: "assets/images/verify.svg",
      time: "2 weeks ago",
    },
  ];
  return (
    <div>
      <div className={styles.videoHeading}>
        <h1 className={styles.videoTitle}>Videos</h1>
        <div className={styles.videoArrows}>
          <img
            className={styles.arrow}
            id="videoLeft"
            src="assets/images/product-page/arrow-left-regimen.svg"
            alt=""
          />
          <img
            className={styles.arrow}
            id="videoRight"
            src="assets/images/product-page/arrow-right-regimen.svg"
            alt=""
          />
        </div>
      </div>
      <Swiper
        slidesPerView={3}
        spaceBetween={50}
        // loop={true}
        navigation={{
          nextEl: "#videoRight",
          prevEl: "#videoLeft",
        }}
        modules={[Navigation]}
        breakpoints={{
          240: {
            slidesPerView: 1.2,
            spaceBetween: 20,
          },
          640: {
            slidesPerView: 2,
            spaceBetween: 10,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 20,
          },
        }}>
        {videoArray &&
          videoArray.map((data) => {
            return (
              <SwiperSlide>
                <Fragment id={data["id"]} target="_blank">
                  <a href={data["video_url"]}>
                    <img
                      className={`${styles.videoImage} img-fluid`}
                      src={data["thumbnail_img_url"]}
                      alt=""
                      // onClick={}
                    />
                    <p className={styles.videoTitle}>{data["video_title"]}</p>
                    <span className={styles.authorName}>
                      {data["author"]} <img src={data.verify} alt="" />
                    </span>
                    <p className={styles.videoTime}>{data["video_views"]}</p>
                  </a>
                </Fragment>
              </SwiperSlide>
            );
          })}
      </Swiper>
    </div>
  );
};

export default PageSixScroll3;
