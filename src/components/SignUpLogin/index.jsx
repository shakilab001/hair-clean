import styles from "./SignUpLogInLayout.module.css";

const SignUpLoginLayout = ({ children }) => {
  return (
    <div>
      {" "}
      <>
        {/*=================Start Main Body Section==============*/}
        <section>
          <div className="container-fluid">
            <div className="row">
              {/*Logo Area*/}

              <div className="col-lg-4 col-12 g-0">
                <div className={styles.signup_logo_area}>
                  <div className={styles.signup_logo}>
                    <img
                      src="assets/images/logo.svg"
                      alt="logo"
                      className="img-fluid"
                    />
                  </div>
                  <img
                    src="assets/images/signuploginsvg.svg"
                    className={`img-fluid ${styles.signup_svg}`}
                    alt=""
                  />
                </div>
              </div>

              <div
                className={`${styles.hairstyle_form_section} col-lg-8 col-12`}
              >
                <div className={styles.form_section}>{children}</div>

                <div className="body-effect-area">
                  <div className="body-effect-left-up"></div>
                  <div className="body-effect-left dissNone"></div>
                  <div className="body-effect-up">
                    <img src="assets/images/up-effect.png" alt="img" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

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
      </>
    </div>
  );
};

export default SignUpLoginLayout;
