import React from "react";

function Footer({ isHomePage }) {
  return (
    <footer id="main-footer-area">
      <div className="container">
        <div className="row">
          <div className="footer-item">
            <div className="copyright-area">
              <img
                className="footer-logo-img"
                src="assets/images/footer-logo.svg"
                alt="logo"
              />
              <p className="footer-text">
                Powered by <a href="/">Layla AI</a>
              </p>
            </div>
            <div className="social-icon-link">
              <ul>
                <li>
                  <a href="/">
                    <img
                      src="assets/images/social-media/instgram.svg"
                      alt="icon"
                    />
                  </a>
                </li>
                <li>
                  <a href="/">
                    <img
                      src="assets/images/social-media/facebook.svg"
                      alt="icon"
                    />
                  </a>
                </li>
                <li>
                  <a href="/">
                    <img
                      src="assets/images/social-media/youtube.svg"
                      alt="icon"
                    />
                  </a>
                </li>
              </ul>
            </div>
            {/* <!--copy right text--> */}
            <div className="copyright-section">
              <p>HairDays, Inc. 2022 . All Right Reserved</p>
            </div>
            {isHomePage && (
              <div className="copyright-section">
                <p>
                  For PR related inquiries:
                  <a
                    style={{ paddingLeft: "10px", color: "#00C9C9" }}
                    href="mailto:hairdays@astrskpr.com">
                    hairdays@astrskpr.com
                  </a>
                </p>
              </div>
            )}
            {/* <!--/// End copy right text--> */}
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
