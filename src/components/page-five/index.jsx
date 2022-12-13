import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import "swiper/css";
import styles from "./styles.module.css";
const PageFiveScroll1 = ({ goalsArray }) => {
  const datas = [
    { name: "Wash & Go" },
    { name: "Defined Hair" },
    { name: "Fav Product" },
    { name: "Fav Product" },
  ];
  const [answeredGoalState, setAnsweredGoalState] = useState({});
  useEffect(() => {
    setAnsweredGoalState(goalsArray);
  }, [goalsArray]);
  console.log(
    "===> ~ file: index.jsx ~ line 38 ~ PageFiveScroll1 ~ answeredGoalState",
    answeredGoalState
  );

  const modifiedGoalArray = (data) => {
    const array = [];
    const modifiedArray = data && data.map((data) => {
      for (let i = 1; i < 6; i++) {
        if (data[`hair_goal_${i}`] !== null) {
          array.push(data[`hair_goal_${i}`]);
        }
      }
      return array;
    });

    console.log(modifiedArray);
    return modifiedArray;
  };

  return (
    <div>
      <div className={styles.goalHeading}>
        <h1 className={styles.goalTitle}>Goals</h1>
        <div className={styles.goalArrows}>
          <img
            className={styles.arrow}
            id="arrowLeft"
            src="assets/images/profile-page/arrow-left-goal.svg"
            alt=""
          />
          <img
            className={styles.arrow}
            id="arrowRight"
            src="assets/images/profile-page/arrow-right-goal.svg"
            alt=""
          />
        </div>
      </div>
      <Swiper
        slidesPerView={4}
        spaceBetween={20}
        navigation={{
          nextEl: "#arrowRight",
          prevEl: "#arrowLeft",
        }}
        // loop={true}
        modules={[Navigation]}
        breakpoints={{
          240: {
            slidesPerView: 3,
            spaceBetween: 5,
            grabCursor: true,
          },
          640: {
            slidesPerView: 2,
            spaceBetween: 5,
            grabCursor: true,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 5,
            grabCursor: true,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 5,
          },
        }}>
        {/* <SwiperSlide>
          <img src="assets/images/profile-page/slider-01.png" alt="" />
        </SwiperSlide> */}
        {answeredGoalState &&
          answeredGoalState.data &&
          modifiedGoalArray(answeredGoalState.data)[0]?.map((data) => {
            return (
              <SwiperSlide>
                <div className={styles.card}>
                  <p className={styles.cardName}>{data}</p>
                </div>
              </SwiperSlide>
            );
          })}
      </Swiper>
    </div>
  );
};

export default PageFiveScroll1;
