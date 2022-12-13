import axios from "axios";
import { useEffect, useState } from "react";
import Footer from "../../components/Footer";
import PageSixScroll1 from "../../components/page-six1";
import PageSixScroll2 from "../../components/page-six2";
import PageSixScroll3 from "../../components/page-six3";
import "./effect.css";
import styles from './details.module.css';

const Page6 = () => {
  const hairType = localStorage.getItem("hairType");
  // const hairType = "karthik";
  const [videoRecommendation, setVideoRecommendation] = useState();
  const originalImageUrl = localStorage.getItem("originalImageLink");
  const token = localStorage.getItem('access')
  useEffect(() => {
    axios
      .get(`https://api.myhairdays.com/detail-page-video?q=${hairType}`, {
        headers: {
          "Authorization": 'Bearer ' + token,
        },
      })
      .then((response) => setVideoRecommendation(response.data.videos));
  }, []);

  return (
    <>
      <div className="page6">
        {/*=================Start Main Body Section==============*/}
        <section id="main-body-section" style={{ paddingBottom: 8 }}>
          <div className="container">
            <div className="row align-items-center">
              {/*Logo Area*/}
              <div
                className="logo-area custom-padding col-lg-4 col-12 custom-padding customPaddingTwo"
                style={{ background: "none" }}>
                {/*Responsive Logo*/}
                <div className="responsive-logo-new">
                  <img src="assets/images/main-logo.svg" alt="logo" />
                  <div className="responsiveBodyEffect responsiveBodyEffectProfile">
                    <img
                      src="assets/images/all-effect/body-left-effect.png"
                      alt="img"
                    />
                  </div>
                  <div className="bodyBlueEffect" />
                </div>
                {/*/// End Responsive Logo*/}
                {/*Left Side Summary Area*/}
                <div className="summary-profile-area">
                  <div className="summay-profile">
                    <div className={styles.detailImageWrapper}>
                      <img src={originalImageUrl} alt="img" />
                    </div>
                    <div className="wash-go-details">
                      <div className="wahs-go-heading">
                        <h1>Regimen</h1>
                      </div>
                      <div className="flexBox">
                        {/* <div className="wash">
                          <h1>4</h1>
                          <p>Product</p>
                          <h6>Product Used</h6>
                        </div>
                        <div className="wash">
                          <h1>1</h1>
                          <p>hours</p>
                          <h6>Style Time</h6>
                        </div> */}
                      </div>
                    </div>
                  </div>
                  {/*Summary Text*/}
                  <div className="summary-text">
                    <h1>
                      <img
                        src="assets/images/product-page/verify.svg"
                        alt="verify"
                      />{" "}
                      Summary
                    </h1>
                    <p>
                      Loncus est nibh, eu sagittis nisi dignissim ut. Ut
                      porttitor dui nec purus interdum, non luctus lorem
                      sollicitudin. Suspendisse sed risus vitae lacus pulvinar
                      ornare at quis mi?
                    </p>
                  </div>
                  {/*/// End Summary Text*/}
                </div>
                {/*/// End Left Side Summary Area*/}
              </div>
              {/*/// End Logo Area*/}
              {/*Right Side Area*/}
              <div className="right-side-slider-area col-lg-8 col-12">
                {/*Main Logo*/}
                <div className="logoArea">
                  <img src="assets/images/main-logo.svg" alt="logo" />
                </div>
                {/*/// End Main Logo*/}
                {/*Product Area*/}
                <div className="product-area">
                  <PageSixScroll1 />
                </div>
                {/*/// End Product Area*/}
                {/*Start Regimen Slider*/}
                <div className="regimen-slider-area dis-none-slider">
                  <PageSixScroll2 />
                </div>
                {/*/// End Regimen Slider*/}
                {/*Start Regimen Responsive*/}
                <div className="regimen-slider-area">
                  {/*Heading*/}
                  {/* <div className="recommendation-heading">
                    <h1>Regimen</h1>
                  </div> */}
                  <div class="responsive-regimen">
                    <div class="regimen-slider-item">
                      <h1>Step 1</h1>
                      <p>
                        Nunc rhoncus est nibh, eu sagittis nisi dignissim ut. Ut
                        porttitor dui nec purus interdum, non luctus lorem
                        sollicitudin. Suspendisse sed risus vitae lacus pulvinar
                        ornare at quis mi. Donec pharetra neque in tortor
                        faucibus euismod. Aenean ex dui, rhoncus eu elit vitae,
                        gravida congue odio. Fusce sed porta nisl. Fusce congue
                        ultrices pharetra.
                      </p>
                    </div>
                    <div class="regimen-slider-item">
                      <h1>Step 2</h1>
                      <p>
                        Nunc rhoncus est nibh, eu sagittis nisi dignissim ut. Ut
                        porttitor dui nec purus interdum, non luctus lorem
                        sollicitudin. Suspendisse sed risus vitae lacus pulvinar
                        ornare at quis mi. Donec pharetra neque in tortor
                        faucibus euismod. Aenean ex dui, rhoncus eu elit vitae,
                        gravida congue odio. Fusce sed porta nisl. Fusce congue
                        ultrices pharetra.
                      </p>
                    </div>
                    <div class="regimen-slider-item">
                      <h1>Step 3</h1>
                      <p>
                        Nunc rhoncus est nibh, eu sagittis nisi dignissim ut. Ut
                        porttitor dui nec purus interdum, non luctus lorem
                        sollicitudin. Suspendisse sed risus vitae lacus pulvinar
                        ornare at quis mi. Donec pharetra neque in tortor
                        faucibus euismod. Aenean ex dui, rhoncus eu elit vitae,
                        gravida congue odio. Fusce sed porta nisl. Fusce congue
                        ultrices pharetra.
                      </p>
                    </div>
                  </div>
                </div>
                {/*/// End Regimen Responsive*/}
                {/*Expectations Area*/}
                <div className="expectations-area">
                  <h1>Expectations</h1>
                  <p>
                    Loncus est nibh, eu sagittis nisi dignissim ut. Ut porttitor
                    dui nec purus interdum, non luctus lorem sollicitudin.
                    Suspendisse sed risus vitae lacus pulvinar ornare at quis
                    mi?
                  </p>
                </div>
                {/*/// End Expectations Area*/}
              </div>
              {/*/// End Right Side Area*/}
            </div>
          </div>
        </section>
        <section id="main-video-area">
          <div className="container">
            {/*Video Area*/}
            <div className="video-area">
              {/*Heading*/}
              <PageSixScroll3 videoArray={videoRecommendation} />
            </div>
            {/*/// End Video Area*/}
          </div>
          {/*Body Effect*/}
          <div className="mainBodyEffect">
            <div className="profileBodyLeftEffect">
              <img
                src="assets/images/all-effect/body-left-effect.png"
                alt="img"
              />
            </div>
            <div className="bodyEffectBlueHere" />
            <div className="bodyEffectRedHere" />
          </div>
          {/*/// End Body Effect*/}
        </section>
        {/*=================End Main Body Section==============*/}
        {/*====================strart Footer Section====================*/}
        <Footer isHomePage={false} />
        {/*====================End Footer Section====================*/}
      </div>
    </>
  );
};
export default Page6;
