import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import "swiper/css";
import styles from "./styles.module.css";
import { useNavigate } from "react-router-dom";

const PageFiveScroll2 = ({ imageArray }) => {
  const navigate = useNavigate();

  const [showDialog, setDialog] = useState(false)
  const onClickImage = (index) => {
    if (index === 0) {
      navigate("/detail");
    } else {
      setDialog(true)
    }
  };
  const [imageArrayState, setImageArrayState] = useState();
  useEffect(() => {
    if (imageArray.images) {
      setImageArrayState(imageArray.images);
    }
  }, [imageArray]);

  const datas = [
    {
      image: "assets/images/profile-page/Recommedation-slider/01.png",
      title: "Styling",
    },
    {
      image: "assets/images/profile-page/Recommedation-slider/02.png",
      title: "Styling",
    },
    {
      image: "assets/images/profile-page/Recommedation-slider/03.png",
      title: "Styling",
    },
    {
      image: "assets/images/profile-page/Recommedation-slider/01.png",
      title: "Styling",
    },
    {
      image: "assets/images/profile-page/Recommedation-slider/02.png",
      title: "Styling",
    },
    {
      image: "assets/images/profile-page/Recommedation-slider/03.png",
      title: "Styling",
    },
  ];
  return (
    <div>
      {/* Backdrop and Alert */}
      {showDialog && (
        <>
          <div className={styles.backdrop} style={{ width: '100%', height: '100%', position: 'fixed', backgroundColor: 'rgba(0, 0, 0, 0.5)', zIndex: 5, top: 0, right: 0 }}>
          </div>
          <div className={"modal-dialog " + styles.modal} style={{ zIndex: 10, position: 'fixed', top: '200px', display: 'block', margin: 'auto' }}>
            <div className="modal-content" style={{ marginLeft: '10px' }}>
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">Coming Soon...</h5>
                <button type="button" className="btn-close" data-bs-dismiss="modal" onClick={() => setDialog(false)} aria-label="Close"></button>
              </div>
            </div>
          </div>
        </>
      )}

      <div className={styles.recommendationsHeading}>
        <h1 className={styles.recommendationsTitle}>Recommendations</h1>
        <div className={styles.recommendationsArrows}>
          <img
            className={styles.arrow}
            id="recommedationLeft"
            src="assets/images/profile-page/arrow-left-recommedation.svg"
            alt=""
          />
          <img
            className={styles.arrow}
            id="recommedationRight"
            src="assets/images/profile-page/arrow-right-recommedation.svg"
            alt=""
          />
        </div>
      </div>
      {imageArrayState && (
        <Swiper
          slidesPerView={2}
          loop={imageArray.lenght > 3}
          spaceBetween={20}
          navigation={{
            nextEl: "#recommedationRight",
            prevEl: "#recommedationLeft",
          }}
          modules={[Navigation]}
          breakpoints={{
            240: {
              slidesPerView: 1.5,
              spaceBetween: 20,
              grabCursor: true,
            },
            640: {
              slidesPerView: 2,
              spaceBetween: 20,
              grabCursor: true,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 40,
            },
            1024: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            1224: {
              slidesPerView: 3,
              spaceBetween: 20,
            },
          }}>
          {imageArrayState.map((data, index) => {
            return (
              <SwiperSlide key={"0229-" + index}>
                <div className={styles.card} onClick={() => onClickImage(index)}>
                  <img
                    className={`${styles.cardImage} img-fluid`}
                    src={data["image_url"]}
                    alt=""
                  />
                  <p className={styles.cardName}>{data["image_title"]}</p>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      )}
    </div>
  );
};

export default PageFiveScroll2;
