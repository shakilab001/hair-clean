import axios from "axios";
import { useEffect, useState } from "react";
import { API } from "../../api/API";
import Footer from "../../components/Footer";
import PageFiveScroll1 from "../../components/page-five";
import PageFiveScroll2 from "../../components/page-five2";
import PageFiveScroll3 from "../../components/page-five3";
import jwt_decode from "jwt-decode";
import "./effect.css";
import styles from './profile.module.css'


const Profile = () => {

  const videoURL = JSON.parse(localStorage.getItem("hairDescription"));
  const questionierId = localStorage.getItem("questionierId");
  const [data, setdata] = useState({});
  const [recommendationImage, setRecommendationImage] = useState({});
  const [recommendedProducts, setRecommendedProducts] = useState();
  const [questionID, setQuestionID] = useState();
  const [hairDensity, setHairDensity] = useState();
  const [firstName, setName] = useState('')
  const [maskedImage, setMaskedImage] = useState(true)
  const [originalImageLink, setOriginalImageLink] = useState(localStorage.getItem('originalImageLink'))

  useEffect(() => {
    const token = localStorage.getItem('access')
    setName(jwt_decode(token).firstName)
    console.log(jwt_decode(token))
    const favProductList = JSON.parse(localStorage.getItem("favProductList"));
    const hairDensity = JSON.parse(localStorage.getItem("hairDensity"));
    axios
      .get(videoURL["task-response-status-url"], {
        headers: {
          'Authorization': 'Bearer ' + token
        }
      })
      .then((response) => setdata(response.data));
    axios
      .get(`${API}/question-and-answer?id=${questionierId}`, {
        headers: {
          "Authorization": 'Bearer ' + token,
        },
      })
      .then((response) => setQuestionID(response.data));

    axios({
      method: 'get',
      url: `${API}/get-recommendations?top-k=5&favourites=${favProductList}`,
      headers: { "Authorization": `Bearer ${token}` }
    }).then((response) =>
      setRecommendedProducts(response.data["recommended-products"])
    );

    axios
      .get(`${hairDensity["task-response-status-url"]}`, {
        headers: {
          'Authorization': 'Bearer ' + token
        }
      })
      .then((response) => setHairDensity(response.data));
  }, []);

  useEffect(() => {
    if (data) {
      let hairType = data["hair-type"];
      // let hairType = "karthik";
      const token = localStorage.getItem('access')
      axios
        .get(`${API}/detail-page-image?q=${hairType}`, {
          headers: {
            "Authorization": 'Bearer ' + token,
          },
        })
        .then((response) => setRecommendationImage(response.data));
      localStorage.setItem("hairType", hairType);
      localStorage.setItem("originalImageLink", data["input-image"]);
    }
    setOriginalImageLink(localStorage.getItem('originalImageLink'))
  }, [data]);

  console.log(data && data["masked-image"]);
  const toggleMaskedImage = async () => {
    setMaskedImage(!maskedImage)
  }

  return (
    <div className="page5">
      {/*=================Start Main Body Section==============*/}
      <section id="main-body-section" style={{ paddingBottom: 8 }}>
        <div className="container">
          <div className="row">
            {/*Logo Area*/}
            <div
              className="logo-area col-lg-4 col-12 custom-padding customPaddingTwo"
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
                <div className="profile-img-details">
                  <h1>
                    Helloooo, <span style={{ color: "#00C9C9" }}>{firstName}!</span>
                  </h1>
                  <p>Layla AI put this together just for you</p>
                  <div className="thank-you-notice">
                    <div className="icon-here">
                      <img
                        src="assets/images/profile-page/t-logo.svg"
                        alt="logo"
                      />
                    </div>
                    <div className="thank-you-text">
                      <p>
                        Thank you cosmetologist{" "}
                        <a
                          href="https://hersbychantell.com/pages/her-story"
                          style={{ color: "#00C9C9" }}>
                          Chantell
                        </a>
                        for your expert lessons.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              {/*/// End Responsive Logo*/}
              {/*Left Side Profile Area*/}
              <div className="user-profie-details-area customPaddingTwo">
                <div className="main-profile-img">
                  {data && data["masked-image"] ? (
                    <div className="main-profile-group">
                      <img src={maskedImage ? data["masked-image"] : originalImageLink} alt="img" />
                      <div
                        style={{
                          top: "20px",
                          left: "20px",
                        }}
                        className="profile-box">
                        <span className="profile-box-title">Hair Color</span>
                        <span className="profile-box-button">
                          {data["hair-color"]}
                        </span>
                      </div>
                      <div
                        style={{
                          top: "100px",
                          right: "20px",
                        }}
                        className="profile-box">
                        <span className="profile-box-title">Hair Style</span>
                        <span className="profile-box-button">
                          {data["hair-style"]}
                        </span>
                      </div>
                      <div
                        style={{
                          bottom: "100px",
                          left: "20px",
                        }}
                        className="profile-box">
                        <span className="profile-box-title">Hair Density</span>
                        <span className="profile-box-button">
                          {hairDensity && hairDensity["hair_density"]
                            ? hairDensity["hair_density"]
                            : "loading"}
                        </span>
                      </div>
                      <div
                        style={{
                          bottom: "40px",
                          right: "20px",
                        }}
                        className="profile-box">
                        <span className="profile-box-title">Hair Type</span>
                        <span className="profile-box-button">
                          {data["hair-type"]}
                        </span>
                      </div>
                    </div>
                  ) : (
                    <img alt="img" />
                  )}
                </div>
                <div className={styles.toggleWrapperBox}>
                  <div className={maskedImage ? styles.toggleDeactive : styles.toggleActive} onClick={toggleMaskedImage}>
                    <div className={styles.ellipse}>
                    </div>
                  </div>
                  <div>Filter</div>
                </div>

                <div className="profile-img-details dis-none">
                  <h1>
                    Hello, <span style={{ color: "#00C9C9" }}>{firstName}!</span>
                  </h1>
                  <p>Layla AI put this together just for you</p>
                  <div className="thank-you-notice">
                    <div className="icon-here">
                      <img
                        src="assets/images/profile-page/t-logo.svg"
                        alt="logo"
                      />
                    </div>
                    <div className="thank-you-text">
                      <p>
                        Thank you cosmetologist{" "}
                        <a
                          href="https://hersbychantell.com/pages/her-story"
                          style={{ color: "#00C9C9" }}>
                          Chantell
                        </a>{" "}
                        for your expert lessons.
                      </p>
                    </div>
                  </div>
                </div>
                {/*Analysis Area*/}
                <div className="analysis-area">
                  {recommendedProducts && (
                    <PageFiveScroll3
                      recommendedProArray={recommendedProducts}
                    />
                  )}

                  {/*Analysis item*/}
                </div>
                {/*/// End Analysis Area*/}
              </div>
              {/*/// End Left Side Profile Area*/}
            </div>
            {/*/// End Logo Area*/}
            {/*Right Side Area*/}
            <div className="right-side-slider-area col-lg-8 col-12 customPaddingTwo">
              {/*Main Logo*/}
              <div className="logoArea">
                <img src="assets/images/main-logo.svg" alt="logo" />
              </div>
              {/*/// End Main Logo*/}
              {/*Goal & Preferences Area*/}
              <div className="goal-perferences-tip-area row">
                {/*Goal Preferences Slider*/}
                <div className="goal-slider-area col-lg-7">
                  <PageFiveScroll1 goalsArray={questionID} />
                </div>
                {/*/// End Goal Preferences Slider*/}
                {/*Tip Area*/}
                <div className="tip-area col-lg-3">
                  <h3>Pro Tip</h3>
                  {data && <p>{data["hair-type-description"]}</p>}
                </div>
                {/*/// End Tip Area*/}
              </div>
              {/*/// End Goal & Perferences Area*/}
              {/*Start Recommendation Slider*/}
              <div className="recommendation-slider-area">
                {/*Heading*/}
                {recommendationImage && (
                  <PageFiveScroll2 imageArray={recommendationImage} />
                )}
                {/* {recommendationImage &&
                  recommendationImage.data(
                  )} */}

                {/*/// End Heading*/}
                {/*Slider*/}

                {/*/// End Slider*/}
              </div>
              {/*/// End Recommendation Slider*/}
            </div>
            {/*/// End Right Side Area*/}
          </div>
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
  );
};

export default Profile;
