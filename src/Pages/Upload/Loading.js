import axios from "axios";
import { useEffect, useState } from "react";
import ReactPlayer from "react-player";
import { useGetHairAnimation } from "../../context";
import { useNavigate } from "react-router-dom";
import Footer from "../../components/Footer";

const Loading = ({ initialValues }) => {
  const navigate = useNavigate();

  // console.log(
  //   "===> ~ file: Loading.js ~ line 5 ~ Loading ~ initialValues",
  //   initialValues
  // );
  const [videoUrl, setVideoUrl] = useState();
  const [loadingVideo, setLoadingVideo] = useState(true);
  // console.log(
  //   "===> ~ file: Loading.js ~ line 12 ~ Loading ~ videoUrl",
  //   videoUrl
  // );
  useEffect(() => {
    if (initialValues) {
      setVideoUrl(initialValues);
    }
  }, [initialValues]);

  useEffect(() => {
    if (videoUrl) {
      axios
        .get(videoUrl)
        .then((result) => {
          setLoadingVideo(false);
        })
        .catch((error) => {
          throw new Error(error);
        });
    }
  }, [videoUrl]);

  useEffect(() => {
    if (!loadingVideo) {
      setTimeout(() => {
        navigate("/profile");
      }, 6000);
    }
  }, [loadingVideo]);

  return (
    <div id="bg-for-bd" className="page_4_bg">
      {/*=================Start Main Body Section==============*/}
      <section id="main-body-section">
        <div>
          {/*Body Effect*/}
          <div className="profile-body-effect">
            <div className="effect-001" />
            <div className="effect-002" />
          </div>
          {/* End Body Effect*/}
          <div className="profile-body-main">
            {/*Profile Image*/}
            <div className="profile-img-area">
              <div className="logo-new">
                <img src="assets/images/logo.svg" alt="logo" />
              </div>
              <div className="scan-box">
                {/*profile*/}
                <div className="profile-img">
                  {/* <ReactPlayer url={videoUrl} /> */}
                  {videoUrl != undefined ? (
                    <video
                      autoPlay={true}
                      loop={true}
                      src={videoUrl}
                      controls={false}
                      playsInline
                      width="100%"
                      height="100%">
                      {/* <source src={videoUrl} type="mp4" /> */}
                    </video>
                  ) : (
                    // <ReactPlayer url={videoUrl} />
                    <>
                      <p>Loading..</p>
                      {/* <img src="assets/images/loading/1.jpg" alt="" /> */}
                    </>
                  )}
                </div>
                {/* end profile*/}
              </div>
            </div>
            {/* End Profile Image*/}
            {/*User Details*/}
            <div className="user-details">
              <h2>Analyzing your hair...</h2>
              <p>
                Wait a moment. <br />
                Layla AI is analyzing your hair.
              </p>
            </div>
            {/*/// End User Details*/}
          </div>
        </div>
      </section>
      {/*=================End Main Body Section==============*/}
      {/* <Footer isHomePage={false} /> */}
    </div>
  );
};
export default Loading;
