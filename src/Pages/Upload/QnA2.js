import { useEffect, useRef, useState } from "react";
import { API } from "../../api/API";
import ScrollToTop from "../../utils.js/scrollToTop";
import unicorn from "../../lottefiles/unicorn.json";
import Lottie from "lottie-react";
import styles from "./qna.module.css";
import analyzeBtn from "../../lottefiles/analyze.json";
import headImg from "../../lottefiles/head.json";
import QnaPopUp from "../../components/Modal/QnaPopup";
import Footer from "../../components/Footer";
import { PopUpData } from "../../data";

const QnA2 = ({
  analyze,
  showUnicorn,
  setStep,
  hairGoal,
  setHairGoal,
  unwanted,
  setUnwanted,
  stylingPreference,
  setStylingPreference,
  productSearch,
  setProductSearch,
  products,
  setProducts,
  selectedProducts,
  setSelectedProducts,
}) => {
  const hairGoals = [
    "improve density",
    "reduce shedding",
    "length retention",
    "anti-frizz",
    "curl definition",
    "replenish hair",
    "deep condition",
    "fix split ends",
    "moisturize",
    "strengthen",
    "rejuvenate",
    "color protection",
    "improve shine",
    "heat protection",
    "volumize",
    "nourish roots",
    "styling",
    "soothe scalp",
    "straighten",
    "oil control",
    "reduce brassiness",
    "reduce dandruff",
  ];

  const unwanteds = ["Silicone", "Paraben", "Sulfate", "Fragrance"];
  const stylingPreferenceData = [
    "I have locs",
    "I have braids",
    "I relax my hair",
    "My hair is color treated",
    "None of these",
  ];

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      let token = localStorage.getItem('access')
      if (productSearch !== "") {
        fetch(API + "/product-search?q=" + productSearch, {
          method: 'GET',
          headers: {
            'Authorization': `Bearer ${token}`
          },
        })
          .then((response) => response.json())
          .then((data) => {
            if (data["status-code"] === 200) {
              setProducts(data.products);
            }
            console.log(data);
          });
      }
    }, 1000);
    return () => clearTimeout(timeoutId);
  }, [productSearch]);

  useEffect(() => {
    const selectedFavId = selectedProducts.map((data) => {
      console.log(data);
      return data[0];
    });
    console.log(
      "===> ~ file: QnA2.js ~ line 68 ~ selectedFavId ~ selectedFavId",
      selectedFavId
    );
    localStorage.setItem("favProductList", JSON.stringify(selectedFavId));
  }, [selectedProducts]);

  const selectHairGoal = (goal) => {
    if (hairGoal.includes(goal)) {
      let newHairGoal = hairGoal.filter((el) => {
        return el !== goal;
      });
      setHairGoal(newHairGoal);
    } else {
      if (hairGoal.length < 5) {
        setHairGoal((old) => [...old, goal]);
      }
    }
  };
  const selectUnwanted = (goal) => {
    if (unwanted.includes(goal)) {
      let newUnwanted = unwanted.filter((el) => {
        return el !== goal;
      });
      setUnwanted(newUnwanted);
    } else if (unwanted.length < 3) {
      setUnwanted((old) => [...old, goal]);
    }
  };

  const selectProducts = (goal) => {
    if (selectedProducts.includes(goal)) {
      let newProducts = selectedProducts.filter((el) => {
        return el !== goal;
      });
      setSelectedProducts(newProducts);
    } else {
      if (selectedProducts.length < 6) {
        setSelectedProducts((old) => [...old, goal]);
      }
    }
  };

  const selectStylePreference = (goal) => {
    if (stylingPreference.includes(goal)) {
      let newProducts = stylingPreference.filter((el) => {
        return el !== goal;
      });
      setStylingPreference(newProducts);
    } else {
      setStylingPreference((prev) => [...prev, goal]);
    }
  };
  useEffect(() => {
    analyzeRef.current.playSegments([17, 77], true);
  }, []);

  // useEffect(() => {
  // 	console.log(unwanted)
  // }, [unwanted])

  const analyzeRef = useRef();

  const unicornRef = useRef();

  let unicornStyle = {
    position: "fixed",
    zIndex: 10,
    height: "100%",
    width: "auto",
    overflow: "hidden",
  };
  let mainContainer = {
    overflowX: "hidden",
  };

  const desciption = `
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate ratione nostrum consectetur nemo temporibus magni blanditiis culpa, eaque sunt aliquam illum accusamus quia nesciunt explicabo tenetur, sint esse in id?
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam laudantium provident atque sequi deleniti, id, quam voluptatum dicta quod animi neque quidem voluptatem magni? Deserunt dolores repellendus officiis officia eveniet.`;

  const [modalIsOpen, setIsOpen] = useState(false);
  const [popUpHeading, setPopUpHeading] = useState("Heading");
  const [popUpDesc, setPopUpDesc] = useState(desciption);
  const [popUpImage, setPopUpImage] = useState("assets/images/IMG_1498.jpg");

  function openModal(heading, desciption, popUpImage) {
    setPopUpHeading(heading);
    setPopUpDesc(desciption);
    setPopUpImage(popUpImage);
    setIsOpen(true);
  }

  return (
    <div style={mainContainer}>
      {modalIsOpen && (
        <QnaPopUp
          heading={popUpHeading}
          description={popUpDesc}
          image={popUpImage}
          setIsOpen={setIsOpen}
          modalIsOpen={modalIsOpen}
        />
      )}
      <ScrollToTop />
      {showUnicorn === true ? (
        <Lottie
          animationData={unicorn}
          lottieRef={unicornRef}
          className={styles.unicorn}
          onLoopComplete={() => {
            unicornRef.current.destroy();
          }}
          style={unicornStyle}
        />
      ) : null}
      {/*=================Start Main Body Section==============*/}
      <section id="main-body-section">
        <div className="container-fluid">
          <div className="row">
            {/*Logo Area*/}
            <div className="logo-area col-lg-4 col-12 dis-none">
              <div className="logo">
                <img src="assets/images/logo.svg" alt="logo" />
              </div>
              <div className="user-profile-area">
                <div className="user-profile">
                  <Lottie animationData={headImg} loop={false} />
                </div>
              </div>
            </div>
            {/*/// End Logo Area*/}
            {/*Upload HairStyle*/}
            <div className="hairstyle-upload-area-start customPadding col-lg-8 col-12">
              {/*Responsive Logo*/}
              <div className="responsive-logo-new">
                <img
                  className="maniResponsiveLogo"
                  src="assets/images/main-logo.svg"
                  alt="logo"
                />
                <div className="responsiveBodyEffect">
                  <img
                    src="assets/images/all-effect/body-left-effect.png"
                    alt="img"
                  />
                </div>
                <div className="bodyBlueEffect" />
              </div>
              {/*/// End Responsive Logo*/}
              {/*Body Effect*/}
              <div className="body-effect-area dis-none">
                <div className="body-effect-left-up"></div>
                <div className="body-effect-left"></div>
                <div className="body-effect-up">
                  <img src="assets/images/up-effect.png" alt="img" />
                </div>
              </div>
              {/*/// End Body Effect*/}
              {/*Hair Analysis Area*/}
              <div className="hair-analysis-main-area">
                <div className="hair-analysis-heading">
                  <h4>HAIR ANALYSIS QUIZ</h4>
                  <p>
                    <span>
                      1 / <span style={{ color: "#00C9C9" }}>2</span>
                    </span>
                  </p>
                </div>
                {/*Showing Bar*/}
                <div className="showing-bar-area">
                  <div className="bar-left black-bar" />
                  <div className="bar-right" />
                </div>
                {/*/// End Showing Bar*/}
                {/*Select Hair Goals Options*/}
                <div className="select-hair-goals-area">
                  {/*Heading*/}
                  <div className="hari-golas-heading">
                    <h1>
                      Select up to 5 hair goals{" "}
                      <span
                        onClick={() =>
                          openModal("5 Hair Goals", PopUpData.HairGoals)
                        }
                        style={{
                          paddingLeft: "5px",
                          color: "white",
                          cursor: "pointer",
                        }}>
                        <img
                          style={{
                            filter: "invert(1)",

                            transform: "translateY(-2px)",
                          }}
                          src="assets/images/info-svg/icons8-info-24.svg"
                          alt="img"
                        />
                      </span>
                    </h1>
                    <p className="notice-text">Please select at least 1 goal</p>
                  </div>
                  {/*/// End Heading*/}
                  {/*Select Option / one*/}
                  <div className="hair-select-option">
                    {hairGoals.map((text, index) => {
                      return (
                        <div className="select-item" key={"001-" + index}>
                          <button
                            className={
                              hairGoal.includes(text)
                                ? "select-item-selected"
                                : ""
                            }
                            onClick={() => selectHairGoal(text)}>
                            {text}
                          </button>
                        </div>
                      );
                    })}
                  </div>
                  {/*/// End Select Option / Five*/}
                </div>
                {/*/// End Select Hair Goals Options*/}
                {/*Unwanted Ingredients*/}
                <div className="unwanted-ingredients-area">
                  {/*Heading*/}
                  <div className="hari-golas-heading">
                    <h1>
                      Unwanted Ingredients
                      <span
                        onClick={() =>
                          openModal(
                            "Unwanted ingredients",
                            PopUpData.UnwantedIngredients
                          )
                        }
                        style={{
                          paddingLeft: "5px",
                          color: "white",
                          cursor: "pointer",
                        }}>
                        <img
                          style={{
                            filter: "invert(1)",

                            transform: "translateY(-2px)",
                          }}
                          src="assets/images/info-svg/icons8-info-24.svg"
                          alt="img"
                        />
                      </span>
                    </h1>
                    <p className="notice-text">
                      Select up to 3 ingredients that you would like to exclude
                      from your product recommendation.
                    </p>
                  </div>
                  {/*/// End Heading*/}
                  {/*Select Option Unwanted*/}
                  <div className="hair-select-option">
                    {unwanteds.map((text, index) => {
                      return (
                        <div key={"002-" + index} className="select-item">
                          <button
                            className={
                              unwanted.includes(text)
                                ? "select-item-selected"
                                : ""
                            }
                            onClick={() => selectUnwanted(text)}>
                            {text}
                          </button>
                        </div>
                      );
                    })}
                  </div>
                  {/*/// End Select Option Unwanted*/}
                </div>
                {/*/// End Unwanted Ingredients*/}
                {/* Styling Preference Start */}
                <div className="unwanted-ingredients-area">
                  {/*Heading*/}
                  <div className="hari-golas-heading">
                    <h1>
                      Styling Preferences
                      <span
                        onClick={() =>
                          openModal(
                            "Styling Preferences",
                            PopUpData.StylingPreference
                          )
                        }
                        style={{
                          paddingLeft: "5px",
                          color: "white",
                          cursor: "pointer",
                        }}>
                        <img
                          style={{
                            filter: "invert(1)",

                            transform: "translateY(-2px)",
                          }}
                          src="assets/images/info-svg/icons8-info-24.svg"
                          alt="img"
                        />
                      </span>
                    </h1>
                    <p className="notice-text">
                      Select only 1 styling preference
                    </p>
                  </div>
                  {/*/// End Heading*/}
                  {/*Select Option Unwanted*/}
                  <div className="hair-select-option">
                    {stylingPreferenceData.map((text, index) => {
                      return (
                        <div key={"002-" + index} className="select-item">
                          <button
                            className={
                              stylingPreference.includes(text)
                                ? "select-item-selected"
                                : ""
                            }
                            onClick={() => selectStylePreference(text)}>
                            {text}
                          </button>
                        </div>
                      );
                    })}
                  </div>
                  {/*/// End Select Option Unwanted*/}
                </div>

                {/* Styling Preference End */}
                {/*What is your favorite Product*/}
                <div className="what-is-your-favorite-section">
                  {/*Headng*/}
                  <div className="what-is-heading">
                    <h1>
                      What are your{" "}
                      <span style={{ color: "#00C9C9" }}>
                        favorite products?
                      </span>
                    </h1>
                    <p>
                      This helps us understand how similar products match your
                      preference.
                    </p>
                  </div>
                  {/*/// End Headng*/}
                  {/*Search Here*/}
                  <div className="search-here-area">
                    {selectedProducts.map((text, index) => {
                      return (
                        <div
                          className="search-item"
                          style={{ marginBottom: "6px" }}
                          key={"004-" + index}>
                          <button
                            className="select-item-selected"
                            onClick={() => selectProducts(text)}>
                            {text[1]}
                          </button>
                        </div>
                      );
                    })}
                    <form action="">
                      <div className="search">
                        <input
                          type="search"
                          value={productSearch}
                          onChange={(e) => setProductSearch(e.target.value)}
                          placeholder="Search for products"
                        />
                        <img
                          className="search-icon"
                          src="assets/images/search.svg"
                          alt="img"
                        />
                      </div>
                    </form>
                  </div>
                  {/*/// End Search Here*/}
                  {/*Search Item*/}
                  <div className="search-item-here">
                    {products.map((text, index) => {
                      return (
                        <div
                          className="search-item"
                          style={{ marginBottom: "6px" }}
                          key={"003-" + index}>
                          <button
                            className={
                              selectedProducts.includes(text)
                                ? "select-item-selected"
                                : ""
                            }
                            onClick={() => selectProducts(text)}>
                            {text[1]}
                          </button>
                        </div>
                      );
                    })}
                    {/*/// End copy item*/}
                  </div>
                  {/*/// End Search Item*/}
                </div>
                {/*/// End What is your favorite Product*/}
                {/*Button Area*/}
                <div className="main-button-area">
                  <div className="previous-btn">
                    <button onClick={() => setStep(1)}>
                      <i className="bx bx-chevron-left" /> PREVIOUS
                    </button>
                  </div>
                  <div className="next-btn">
                    {/* <button> */}
                    {/* <img
												className="orginal"
												src="assets/images/analyze-hover.svg"
												alt="icon"
											/>{' '}
											<img
												className="hover-img"
												src="assets/images/analyze.svg"
												alt="icon"
											/>{' '}
											ANALYZE */}
                    <Lottie
                      className={styles.analyzeBtn}
                      onClick={() => {
                        analyze();
                        analyzeRef.current.playSegments([78, 91], true);
                      }}
                      onLoopComplete={() => {
                        analyzeRef.current.goToAndStop(20, true);
                      }}
                      loop={true}
                      lottieRef={analyzeRef}
                      animationData={analyzeBtn}
                    />
                    {/* </button> */}
                  </div>
                </div>
                {/*/// End Button Area*/}
              </div>
              {/*/// End Hair Analysis Area*/}
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
};
export default QnA2;
