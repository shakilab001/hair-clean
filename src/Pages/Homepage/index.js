import { Link } from "react-router-dom";
import HomePageScroll1 from "../../components/HomePageScroll1";
import HomePageScroll2 from "../../components/HomePageScroll2";
// import './home-page.css'
// import './menu.css'
// import './effect.css';
import Lottie from "lottie-react";
import subscribe from "../../lottefiles/subscribe.json";
import image1 from "../../lottefiles/image1.json";
import founder from "../../lottefiles/founder.json";
import laylaAi from "../../lottefiles/laylaAi.json";
import requestADemo from "../../lottefiles/requestADemo.json";
import headImg from "../../lottefiles/head.json";
import getYourHairAnalysis from "../../lottefiles/getYourHairAnalysis.json";
import styles from "./home.module.css";
import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import Footer from "../../components/Footer";
import { UserContext } from "../../context/authContext";
import { useContext } from "react";

const Homepage = () => {
  const subRef = useRef();
  const requestADemoRef = useRef();
  const requestADemoRef2 = useRef();
  const getYourHairAnalysisRef = useRef();
  const navigate = useNavigate();
  const { loggedIn } = useContext(UserContext)

  useEffect(() => {
    subRef.current.playSegments([17, 77], true);
    requestADemoRef.current.playSegments([17, 77], true);
    requestADemoRef2.current.playSegments([17, 77], true);
    getYourHairAnalysisRef.current.goToAndStop(20, true);
  }, []);

  function navigateToUpload() {
    setTimeout(() => {
      navigate("/upload");
    }, 1000);
  }

  return (
    <div className="main-homepage">
      {/*=================Start Header Section==============*/}
      <header id="main-header-area">
        <div className="container">
          <div className="row align-items-center">
            {/*Logo*/}
            <div className="mainLogo col-lg-2">
              <img src="assets/images/main-logo.svg" alt="Logo" />
            </div>
            {/*/// End Logo*/}
            {/*Menu Area*/}
            <nav className="menu-area col-lg-10">
              <div className="menu-item">
                <ul>
                  <li>
                    <a href="/">Home</a>
                  </li>
                  <li>
                    <a href="/">About</a>
                  </li>
                  <li>
                    <a href="/">Featured</a>
                  </li>
                  <li>
                    <a href="mailto:hello@myhairdays.com">Contact</a>
                  </li>
                </ul>
              </div>
              {/*Business and Customer*/}
              <div className="header-button">
                <div className="custom-button">
                  <a href="/">Business</a>
                  <a href="/">Customer</a>
                </div>
              </div>
              {/*/// End Business and Customer*/}
              {/*Social Media*/}
              <div className="social-media-icon">
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
                  {loggedIn && <li onClick={() => {
                    localStorage.removeItem('access')
                    localStorage.removeItem('refresh')
                    window.location.href = "/"
                  }} style={{ cursor: 'pointer' }}>
                    <img style={{ width: '20px', margin: '6px' }}
                      src="https://svgsilh.com/svg/154692.svg"
                      alt="icon"
                    />
                    {/* <i class="fa-duotone fa-power-off"></i> */}
                  </li>}
                </ul>
              </div>
              {/*/// End Social Media*/}
            </nav>
            {/*/// End Menu Area*/}
          </div>
        </div>
      </header>
      {/*Responsive Header Area Start*/}
      <header className="header responsive_header">
        <a href="index.html" className="logo">
          <img src="assets/images/main-logo.svg" alt="logo" />
        </a>
        {/*Business and Customer*/}
        <div className="header-button custom-header-two">
          <div className="custom-button btn-two">
            <a href="/">Business</a>
            <a href="/">Customer</a>
          </div>
        </div>
        {/*/// End Business and Customer*/}
        <input className="menu-btn" type="checkbox" id="menu-btn" />
        <label className="menu-icon" htmlFor="menu-btn">
          <span className="navicon" />
        </label>
        <ul className="menu">
          <li>
            <img src="assets/images/main-logo.svg" alt="logo" />
          </li>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/">About</a>
          </li>
          <li>
            <a href="/">Featured</a>
          </li>
          <li>
            <a href="/">Contact</a>
          </li>
          {/*Business and Customer*/}
          <div className="header-button">
            <div className="custom-button">
              <a href="/">Business</a>
              <a href="/">Customer</a>
            </div>
          </div>
          {/*/// End Business and Customer*/}
          {/*Social Media*/}
          <div className="social-media-icon">
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
          {/*/// End Social Media*/}
        </ul>
      </header>
      {/*Responsive Header Area Start*/}
      {/*=================End Header Section==============*/}
      {/*=================Start Hero Section==============*/}
      <section id="main-hero-section">
        <div className="container">
          <div className="row align-items-center">
            {/*Hero Left*/}
            <div className="hero-left-area col-lg-6 col-12">
              <div className="hero-text">
                <h2>
                  Welcome to <br /> AI Analytics
                </h2>
                <h1>HairDays</h1>
                <p>
                  Hyper-personalized hair health regimens and product
                  recommendations that your customers will obsess over!
                </p>
                {/*Hero Button*/}
                <div className="hero-button custom-btn">
                  <button onClick={navigateToUpload}>
                    {/* <a href="/">
											REQUEST A DEMO{' '}
											<img src="assets/images/arrow-right.svg" alt="icon" />
										</a> */}
                    <Lottie
                      height={"100px"}
                      onClick={() => {
                        // subRef.current.pause()
                        requestADemoRef.current.playSegments([78, 91], true);
                        // subRef.current.playSegments([1, 16], true)
                        // subRef.current.goToAndStop(78, true)
                      }}
                      className={styles.requestADemo}
                      onLoopComplete={() => {
                        requestADemoRef.current.playSegments([17, 77], true);
                      }}
                      lottieRef={requestADemoRef}
                      animationData={requestADemo}
                    />
                  </button>
                </div>
                {/*/// End Hero Button*/}
              </div>
            </div>
            {/*/// End Hero Left*/}
            {/*Hero right*/}
            <div className="hero-right-area col-lg-6 col-12">
              <div className="hero-img">
                {/* <img src="assets/images/hero-img-01.svg" alt="img" /> */}
                <Lottie animationData={image1} />
              </div>
            </div>
            {/*/// End Hero right*/}
          </div>
        </div>
      </section>
      {/*=================End Hero Section==============*/}
      {/*=================Start Sponser Section==============*/}
      <section id="main-sponser-area">
        <div className="container">
          <div className="row">
            <div className="sponser-area">
              {/*Copy item*/}
              <div className="sponser-item">
                <a href="/">
                  <img src="assets/images/Sponsor/01.svg" alt="img" />
                </a>
              </div>
              {/*/// End Copy item*/}
              {/*Copy item*/}
              <div className="sponser-item">
                <a href="/">
                  <img src="assets/images/Sponsor/02.svg" alt="img" />
                </a>
              </div>
              {/*/// End Copy item*/}
              {/*Copy item*/}
              <div className="sponser-item">
                <a href="/">
                  <img src="assets/images/Sponsor/03.svg" alt="img" />
                </a>
              </div>
              {/*/// End Copy item*/}
              {/*Copy item*/}
              <div className="sponser-item">
                <a href="/">
                  <img src="assets/images/Sponsor/04.svg" alt="img" />
                </a>
              </div>
              {/*/// End Copy item*/}
              {/*Copy item*/}
              <div className="sponser-item">
                <a href="/">
                  <img src="assets/images/Sponsor/05.svg" alt="img" />
                </a>
              </div>
              {/*/// End Copy item*/}
              {/*Copy item*/}
              <div className="sponser-item">
                <a href="/">
                  <img src="assets/images/Sponsor/06.svg" alt="img" />
                </a>
              </div>
              {/*/// End Copy item*/}
              {/*Copy item*/}
              <div className="sponser-item">
                <a href="/">
                  <img src="assets/images/Sponsor/07.svg" alt="img" />
                </a>
              </div>
              {/*/// End Copy item*/}
              {/*Copy item*/}
              <div className="sponser-item">
                <a href="/">
                  <img src="assets/images/Sponsor/08.svg" alt="img" />
                </a>
              </div>
              {/*/// End Copy item*/}
              {/*Copy item*/}
              <div className="sponser-item">
                <a href="/">
                  <img src="assets/images/Sponsor/09.svg" alt="img" />
                </a>
              </div>
              {/*/// End Copy item*/}
            </div>
          </div>
        </div>
      </section>
      {/*=================End Sponser Section==============*/}
      {/*=================Start About Us Section==============*/}
      <section id="main-about-us-section">
        <div className="container">
          <div className="row">
            {/*About us left*/}
            <div className="about-us-left-area col-lg-6 col-12">
              <div className="about-us-img">
                {/* <img src="assets/images/About-us-img.svg" alt="img" /> */}
                <Lottie animationData={laylaAi} />
              </div>
              {/*body Effect*/}
              <div className="aboutUsEffect" />
              {/*/// End body Effect*/}
            </div>
            {/*/// End About us left*/}
            {/*About us right*/}
            <div className="about-us-right-area col-lg-6 col-12">
              <div className="about-us-text">
                <h1>LAYLA AI</h1>
                <p>
                  HairDays takes strands to new lengths with advanced technology
                  cultivated with a health-first and individualized approach.
                  Using AI and advanced innovation, we’re on a mission to help
                  women better understand their hair and discover brands like
                  YOU that align with their needs. Our process is unrivaled from
                  start to finish, with the intention of elevating and
                  supporting every unique hair goal with the perfectly matched
                  product.
                </p>
                {/*About Us Button*/}
                <div className="about-us-button custom-btn">
                  <button onClick={navigateToUpload}>
                    {/* <a href="/">
											REQUEST A DEMO{' '}
											<img src="assets/images/arrow-right.svg" alt="icon" />
										</a> */}
                    <Lottie
                      onClick={() => {
                        // subRef.current.pause()
                        requestADemoRef2.current.playSegments([78, 91], true);
                        // subRef.current.playSegments([1, 16], true)
                        // subRef.current.goToAndStop(78, true)
                      }}
                      className={styles.requestADemo}
                      onLoopComplete={() => {
                        requestADemoRef2.current.playSegments([17, 77], true);
                      }}
                      lottieRef={requestADemoRef2}
                      animationData={requestADemo}
                    />
                  </button>
                </div>
                {/*/// End About Us Button*/}
              </div>
            </div>
            {/*/// End About us right*/}
          </div>
        </div>
      </section>
      {/*=================End About Us Section==============*/}
      {/*=================Start Service Section==============*/}
      <section id="main-service-area">
        <div className="container">
          <div className="row">
            {/*Service Heading*/}
            <div className="service-heading">
              <h1>
                BOOST YOUR REVENUE WITH AI-POWERED HYPER PERSONALIZED PRODUCT
                RECOMMENDATIONS
              </h1>
            </div>
            {/*/// End Service Heading*/}
            {/*Service*/}
            <div className="main-service-area row justify-content-between">
              {/*Copy item*/}
              <div className="service-item col-lg-3 col-md-6 col-12">
                <img src="assets/images/service/01.svg" alt="img" />
                <h1>Shop</h1>
                <p>
                  Shop with confidence with your favourite retailer or brand
                  &amp; take the guesswork out of product discovery.
                </p>
              </div>
              {/*/// End Copy item*/}
              {/*Copy item*/}
              <div className="service-item col-lg-3 col-md-6 col-12">
                <img src="assets/images/service/02.svg" alt="img" />
                <h1>Analyze</h1>
                <p>
                  Let Layla AI analyze your strands and provide you with
                  personalized recommendations to reach your goals
                </p>
              </div>
              {/*/// End Copy item*/}
              {/*Copy item*/}
              <div className="service-item col-lg-3 col-md-6 col-12">
                <img src="assets/images/service/03.svg" alt="img" />
                <h1>Recommend</h1>
                <p>
                  Get recommendations on hair conditions, products, &amp; a
                  haircare plans for your unique hair profile.
                </p>
              </div>
              {/*/// End Copy item*/}
              {/*Copy item*/}
              <div className="service-item col-lg-3 col-md-6 col-12">
                <img src="assets/images/service/04.svg" alt="img" />
                <h1>Purchase &amp; Track</h1>
                <p>
                  Easily purcashe product &amp; care tracking with real-time
                  analytics personalized to your unique hair type &amp; goals.
                </p>
              </div>
              {/*/// End Copy item*/}
            </div>
            {/*/// End Service*/}
          </div>
        </div>
      </section>
      {/*=================End Service Section==============*/}
      {/*=================Start Story Section==============*/}
      <section id="main-story-area">
        {/*Body Effect*/}
        <div className="storyBodyEffectUp">
          <img src="assets/images/all-effect/story-body-effect.png" alt="img" />
        </div>
        <div className="storyBodyEffect" />
        {/*/// End Body Effect*/}
        <div className="container">
          <div className="row align-items-center">
            {/*Story Left Area*/}
            <div className="story-left-area col-lg-6 col-12">
              <div className="story-text">
                <h1>FOUNDER STORY</h1>
                <p>
                  During a battle with her health, HairDays CEO Tiffany St.
                  Bernard, Ph.D., noticed significant hair loss. After months of
                  wasted money & product hunting for a solution, Tiffany used
                  her knowledge as a biomedical engineer to create a path to
                  ignite her strands & introduce her to incredible products.
                  Crafting a scientific method to analyze her scalp & hair
                  digitally, she explored personalized strategies yielding
                  results of overall health & growth. Blending innovation,
                  science, & beauty - HairDays was born to connect trusted
                  brands & hair lovers so that anyone can find their perfect
                  match.
                </p>
              </div>
            </div>
            {/*/// End Story Left Area*/}
            {/*Story right Area*/}
            <div className="story-right-area col-lg-6 col-12">
              <div className="story-img">
                {/* <img src="assets/images/story-img-01.svg" alt="img" /> */}
                <Lottie animationData={founder} />
              </div>
            </div>
            {/*/// End Story right Area*/}
          </div>
        </div>
      </section>
      {/*=================End Story Section==============*/}
      {/*=================Start Feedback Section==============*/}

      <section id="main-feedback-area">
        <div className="container">
          {/* <div className="row"> */}
          {/*Heading*/}
          {/* <div className="feedabck-heading">
							<h1>AS FEATURED IN</h1>
							<div className="slder-arrow">
								<div className="rec-left-arrow " id="rec-slide-prev-btn">
									<img src="assets/images/home-arrow-left.svg" alt="" />
								</div>
								<div className="rec-right-arrow " id="rec-slide-next-btn">
									<img src="assets/images/home-arrow-right.svg" alt="" />
								</div>
							</div>
						</div> */}
          {/*/// End Heading*/}
          {/*Slider*/}
          <HomePageScroll1 />
          {/*/// End Slider*/}
          {/* </div> */}
        </div>
      </section>
      {/*=================End Feedback Section==============*/}
      {/*=================Start Shop Section==============*/}

      <section id="main-shop-area">
        {/* <!--Body Effect--> */}
        <div className="shopBodyEffect"></div>
        {/* <!--/// End Body Effect--> */}
        <div className="container">
          <div className="row">
            <div className="shop-area row align-items-center">
              {/* <!--Shop img--> */}
              <div className="shop-img col-lg-6 col-12">
                <img src="assets/images/shop-img-01.svg" alt="img" />
              </div>
              {/* <!--/// End Shop img--> */}
              {/* <!--Shop Text--> */}
              <div className="shop-text offset-lg-6 col-lg-6 col-12">
                <h1>Shop with confidence</h1>
                <p>Get hyper-personalized Product Recommendations</p>
                {/* <!--About Us Button--> */}
                {/* <div className="shop-button custom-btn">
									<button>
										<Link to="/upload">
											GET YOUR HAIR ANALYSIS{' '}
											<img src="assets/images/arrow-right-2.svg" alt="icon" />
										</Link>
									</button>
								</div> */}
                <div className="shop-button custom-btn">
                  <button onClick={navigateToUpload}>
                    <Lottie
                      className={styles.getYourHairAnalysisRef}
                      onClick={() => {
                        getYourHairAnalysisRef.current.playSegments(
                          [78, 91],
                          true
                        );
                      }}
                      onLoopComplete={() => {
                        getYourHairAnalysisRef.current.goToAndStop(20, true);
                      }}
                      loop={true}
                      lottieRef={getYourHairAnalysisRef}
                      animationData={getYourHairAnalysis}
                    />
                  </button>
                </div>
                {/* <!--/// End About Us Button--> */}
              </div>
              {/* <!--/// End Shop Text--> */}
              {/* <!--Shop img--> */}
              <div className="shop-img-two col-lg-6 col-12">
                <img src="assets/images/shop-img-01.svg" alt="img" />
              </div>
              {/* <!--/// End Shop img--> */}
            </div>
          </div>
        </div>
      </section>
      {/* <!--=================End Shop Section==============--> */}
      {/* <!--=================Start Blog Section==============--> */}
      <div id="main-blog-area">
        <div className="container">
          <div className="row">
            {/* <!--Blog Heading--> */}

            {/* <!--/// End Blog Heading--> */}
            {/* <!--Slider--> */}
            <HomePageScroll2 />

            {/* <!--/// End Slider--> */}
          </div>
        </div>
      </div>
      {/* <!--=================End Blog Section==============--> */}
      {/* <!--=================End Newsletter Section==============--> */}
      <section id="main-newsletter-area">
        <div className="container">
          <div className="row">
            {/* <!--NewLetter--> */}
            <div className="newsletter-area">
              {/* <!--News Letter Logo--> */}
              <div className="newletter-logo">
                <div className="imageWrapper">
                  <Lottie animationData={headImg} loop={false} />
                </div>
                {/* <img src="assets/images/newslater-logo.svg" alt="logo" /> */}
              </div>
              {/* <!--/// End News Letter Logo--> */}
              {/* <!--Newsletter Details--> */}
              <div className="newsletter-detalis">
                {/* <!--Body Effect--> */}
                <div className="newsLetterEffectUp">
                  <img src="assets/images/all-effect/newletter-up.png" alt="" />
                </div>
                <div className="newsLetterEffectDown">
                  <img
                    src="assets/images/all-effect/newletter-down.png"
                    alt=""
                  />
                </div>
                {/* <!--/// End Body Effect--> */}
                <div className="newsletter-heading">
                  <h1>NEWSLETTER</h1>
                  <p>Subscribe to get the latest updates newsletter from us</p>
                </div>
                <form className="newsletter-form" action="">
                  <div
                    className={"newletter-form-group " + styles.newsLetterForm}>
                    <div className="email-input">
                      <input type="email" placeholder="Your email here" />
                      <div className="submit-btn-area">
                        {/* <input type="submit" value="SUBSCRIBE" /> */}
                        <Lottie
                          onClick={() => {
                            // subRef.current.pause()
                            subRef.current.playSegments([78, 91], true);
                            // subRef.current.playSegments([1, 16], true)
                            // subRef.current.goToAndStop(78, true)
                          }}
                          className={styles.subscribe}
                          onLoopComplete={() => {
                            subRef.current.playSegments([17, 77], true);
                          }}
                          lottieRef={subRef}
                          animationData={subscribe}
                        />
                        {/* <div className={styles.subscribe} ref={container}></div> */}
                      </div>
                    </div>
                  </div>
                </form>
              </div>
              {/* <!--/// End Newsletter Details--> */}
            </div>
            {/* <!--/// End NewLetter--> */}
          </div>
        </div>
      </section>
      {/* <!--=================End Newsletter Section==============--> */}
      {/* <!--=================End Body Effect Section==============--> */}
      <div className="bodyEffectsArea">
        <div className="mainBodyLeft">
          <img
            src="assets/images/all-effect/body-left-effect.png"
            alt="effect"
          />
        </div>
        <div className="bodyTopEffect"></div>
      </div>
      {/* <!--=================End Body Effect Section==============--> */}
      {/* <!--=================Start Footer Section==============--> */}
      <Footer isHomePage={true} />
    </div>
  );
};

export default Homepage;
