import headImg from "../../lottefiles/head.json";
import getOurApps from "../../lottefiles/head.json";
import Lottie from "lottie-react";

const Page7 = () => {
  function onClickDownload() {
    window.open(
      "https://pillai-karthik.github.io/Hairdays-Hair-Assist-Demo/",
      "_blank"
    );
  }
  return (
    <>
      {/*=================Start Main Body Section==============*/}
      <section id="main-body-section">
        <div className="container-fluid">
          <div className="row">
            {/*Logo Area*/}
            <div className="logo-area custom-size col-lg-4 col-12">
              <div className="logo">
                <img src="assets/images/logo.svg" alt="logo" />
              </div>
              <div className="user-profile-area">
                <div className="user-profile">
                  <Lottie animationData={headImg} loop={false} />
                </div>
                {/*img upload*/}
                <div className="profile-img-link">
                  <a href="/">
                    <img src="assets/images/arrow-up.svg" alt="" />
                  </a>
                </div>
                {/*img upload*/}
                {/*Download App text*/}
                <div className="download-app-text">
                  <h1>Download Clarity App</h1>
                  <p>
                    Downlaod Clarity to take Layla home with you and seamlessly
                    personalized products.
                  </p>
                </div>
                {/*/// End Download App text*/}
              </div>
            </div>
            {/*/// End Logo Area*/}
            {/*Upload HairStyle*/}
            <div className="hairstyle-upload-area-start col-lg-8 col-12">
              {/*Download Area*/}
              <div className="main-download-area">
                {/*copy item*/}
                <div className="download-item">
                  <img src="assets/images/download-page/01.png" alt="img" />
                </div>
                {/*/// End copy item*/}
                {/*copy item*/}
                <div className="download-item">
                  <img src="assets/images/download-page/02.png" alt="img" />
                </div>
                {/*/// End copy item*/}
                {/*copy item*/}
                <div className="download-item">
                  <img src="assets/images/download-page/03.png" alt="img" />
                </div>
                {/*/// End copy item*/}
              </div>
              <div className="download-btn">
                <button onClick={onClickDownload}>
                  <img
                    src="assets/images/download-page/download.svg"
                    alt="icon"
                  />{" "}
                  DOWNLOAD NOW
                </button>
              </div>
              {/*/// End Download Area*/}
              {/*Body Effect*/}
              <div className="body-effect-area">
                <div className="body-effect-left-up"></div>
                <div className="body-effect-left dissNone"></div>
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
      <footer className="main-footer-area">
        <div className="container-fluid">
          <div className="row">
            <div className="copyright-area">
              <img
                className="footer-logo-img"
                src="assets/images/footer-logo.svg"
                alt="logo"
              />
              <p className="copyright-text">
                Powered by <a href="/">Layla AI</a>
              </p>
            </div>
          </div>
        </div>
      </footer>
      {/*====================End Footer Section====================*/}
    </>
  );
};

export default Page7;
