import { useState, useEffect } from "react";
import { API } from "../../api/API";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import headImg from "../../lottefiles/head.json";
import Lottie from "lottie-react";
import Footer from "../../components/Footer";

function Upload() {
  const [videoAnimationURL, setVideoAnimationURL] = useState({});
  const [hairDescriptionURL, setHairDescriptionURL] = useState({});
  const [hairDensityURL, setHairDensityURL] = useState({});
  const navigate = useNavigate();

  const onNextClick = () => {
    setTimeout(() => {
      navigate("/qna");
    }, 3000);
  };

  function onClickDownload() {
    window.open(
      "https://pillai-karthik.github.io/Hairdays-Hair-Assist-Demo/",
      "_blank"
    );
  }

  const handleSubmission = (event) => {
    let selectedImage = event.target.files[0];
    console.log(
      "===> ~ file: Upload.js ~ line 23 ~ handleSubmission ~ selectedImage",
      selectedImage
    );
    const formData = new FormData();
    formData.append("image", selectedImage, selectedImage.name);
    console.log(formData);
    const token = localStorage.getItem('access')
    axios
      .post(`https://hair-animation.myhairdays.com/create-animation-video`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
          "Authorization": 'Bearer ' + token,
        },
      })
      .then((result) => setVideoAnimationURL(result.data))
      .catch((error) => {
        throw new Error(error);
      });

    axios
      .post(`https://ai-models.myhairdays.com/upload-file-async`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
          "Authorization": 'Bearer ' + token,
        },
      })
      .then((result) => setHairDescriptionURL(result.data))
      .catch((error) => {
        throw new Error(error);
      });
    axios
      .post(`https://hair-density.myhairdays.com/v1/hair-density`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
          "Authorization": 'Bearer ' + token,
        },
      })
      .then((result) => {
        setHairDensityURL(result.data);
        onNextClick();
      })
      .catch((error) => {
        throw new Error(error);
      });
  };

  useEffect(() => {
    const HairAnimationjsonURL = JSON.stringify(videoAnimationURL);
    const HairDescriptionjsonURL = JSON.stringify(hairDescriptionURL);
    const HairDensityjsonURL = JSON.stringify(hairDensityURL);

    localStorage.setItem("hairDescription", HairDescriptionjsonURL);
    localStorage.setItem("animatedVideo", HairAnimationjsonURL);
    localStorage.setItem("hairDensity", HairDensityjsonURL);
  }, [hairDensityURL, hairDescriptionURL, videoAnimationURL]);

  return (
    <div className="upload">
      {/*=================Start Main Body Section==============*/}
      <section id="main-body-section">
        <div className="container-fluid">
          <div className="row">
            {/*Logo Area*/}
            <div className="logo-area col-lg-4 col-12">
              <div className="logo">
                <img src="assets/images/logo.svg" alt="logo" />
              </div>
              <div className="user-profile-area">
                <div className="user-profile">
                  {/* <img src="assets/images/logo-two.svg" alt="logo" /> */}
                  <Lottie animationData={headImg} loop={false} />
                </div>
                {/*img upload*/}
                <div className="profile-img-link">
                  <a href="/">
                    <img src="assets/images/arrow-up.svg" alt="" />
                  </a>
                </div>
                {/*img upload*/}
              </div>
            </div>
            {/*/// End Logo Area*/}
            {/*Upload HairStyle*/}
            <div className="hairstyle-upload-area-start customPaddingPageOne col-lg-8 col-12">
              <div className="hairstyle-upload-area">
                {/*Hair Style Heading*/}
                <div className="hairrstyle-heading">
                  <h1>Upload Your Hair Selfie</h1>
                  <p>
                    Let Layla AI analyze your strands and provide you with
                    personalized recommendations to reach your goals
                  </p>
                </div>
                {/*/// End Hair Style Heading*/}
                {/*Upload Hair Style Form Area*/}
                <div className="upload-hairstyle-form-area">
                  {/*use camera upload for image*/}
                  <div onClick={onClickDownload} className="camera-upload">
                    <a className="camera" href="/">
                      <img src="assets/images/camera.svg" alt="camera" />
                      <p>Use Camera</p>
                    </a>
                  </div>
                  {/*/// End use camera upload for image*/}
                  <div className="or-section">
                    <hr />
                    <p>or</p>
                    <hr />
                  </div>
                  {/*Upload Image in Local Drive*/}
                  <form action="" onChange={handleSubmission}>
                    <div className="hairstyle-upload-local-dirve">
                      <div className="form-group">
                        <input type="file" />
                        <div className="hairstyle-upload-here">
                          <div className="hair-img">
                            <img src="assets/images/img.svg" alt="icon" />
                          </div>
                          <div className="upload-text">
                            <h2>Select a photo from gallery</h2>
                            <p>PNG, JPG or JPEG</p>
                          </div>
                        </div>
                      </div>
                      {/* <button type="submit" className="camera-upload">
                        Submit
                      </button> */}
                    </div>
                  </form>

                  {/*/// End Upload Image in Local Drive*/}
                </div>
                {/*/// End Upload Hair Style Form Area*/}
              </div>
              {/*Login and Create area*/}
              <div className="login-crteate-area">
                {/* <div className="account-yet">
                  <p>Don't have an account yet?</p>
                </div>
                <div className="login-create">
                  <a className="login-here" href="/">
                    Create account
                  </a>
                  <p className="or-class">or</p>
                  <a className="crteate-account-here" href="/">
                    Login
                  </a>
                </div> */}
                {/* <div
                  style={{ paddingTop: "20px", color: "white" }}
                  className="camera-upload"
                  onClick={onClickDownload}>
                  <p
                    style={{
                      width: "30%",
                      paddingLeft: "20px",
                      paddingRight: "20px",
                    }}
                    className="camera">
                    Open Hair Assist
                  </p>
                </div> */}
              </div>
              {/*/// End Login and Create area*/}
              {/*Body Effect*/}
              <div className="body-effect-area">
                <div className="body-effect-left-up"></div>
                <div className="body-effect-left"></div>
                <div className="body-effect-up">
                  <img src="assets/images/up-effect.png" alt="img" />
                </div>
              </div>
              {/*/// End Body Effect*/}
            </div>
            {/*/// End Upload HairStyle*/}
          </div>
        </div>
      </section>
      {/*=================End Main Body Section==============*/}
      {/*====================strart Footer Section====================*/}
      <Footer isHomePage={false} />
      {/*====================End Footer Section====================*/}
    </div>
  );
}

export default Upload;
