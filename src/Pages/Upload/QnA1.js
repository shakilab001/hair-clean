import { useEffect, useState } from "react";
import ScrollToTop from "../../utils.js/scrollToTop";
import headImg from "../../lottefiles/head.json";
import Lottie from "lottie-react";
import QnaPopUp from "../../components/Modal/QnaPopup";
import Footer from "../../components/Footer";
import { PopUpData } from "../../data";
import { CustomAlert } from "../../components/Alert/alert";
import { hairType1, hairType2, moisture, porosity } from "./icons";

const QnA1 = ({
  setStep,
  hairSelect1,
  setHairSelect1,
  hairSelect2,
  setHairSelect2,
  moistureSelect,
  setMoistureSelect,
  porositySelect,
  setPorositySelect,
}) => {
  // useEffect(() => {
  // 	console.log(hairSelect1)
  // 	console.log(hairSelect2)
  // 	console.log(moistureSelect)
  // 	console.log(porositySelect)
  // }, [hairSelect1, hairSelect2, moistureSelect, porositySelect])

  const desciption = `
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate ratione nostrum consectetur nemo temporibus magni blanditiis culpa, eaque sunt aliquam illum accusamus quia nesciunt explicabo tenetur, sint esse in id?
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam laudantium provident atque sequi deleniti, id, quam voluptatum dicta quod animi neque quidem voluptatem magni? Deserunt dolores repellendus officiis officia eveniet.`;

  const [modalIsOpen, setIsOpen] = useState(false);
  const [popUpHeading, setPopUpHeading] = useState("Heading");
  const [popUpDesc, setPopUpDesc] = useState(desciption);
  const [popUpImage, setPopUpImage] = useState("assets/images/IMG_1498.jpg");
  const [alertShow, setAlertShow] = useState(false);
  const [alertMessage, setAlertMessage] = useState("");

  function openModal(heading, desciption, popUpImage) {
    setPopUpHeading(heading);
    setPopUpDesc(desciption);
    setPopUpImage(popUpImage);
    setIsOpen(true);
  }

  function onClickType({ getPrevSelectInput, selectedInput, setSelectInput }) {
    if (getPrevSelectInput === selectedInput) {
      setSelectInput("");
    } else {
      setSelectInput(selectedInput);
    }
  }

  function onNextClick() {
    try {
      if (hairSelect1 === "") {
        throw new Error("Please select a hair type");
      } else if (hairSelect2 === "") {
        throw new Error("Please select a hair structure");
      } else if (porositySelect === "") {
        throw new Error("Please select a hair porosity");
      } else if (moistureSelect === "") {
        throw new Error("Please select a moisture");
      } else {
        setStep(2);
      }
    } catch (err) {
      setAlertShow(true);
      setAlertMessage(err.message);
    }
  }

  useEffect(() => {
    console.log("AlertShow", alertShow);
  }, [alertShow]);
  return (
    <>
      {modalIsOpen && (
        <QnaPopUp
          heading={popUpHeading}
          description={popUpDesc}
          image={popUpImage}
          setIsOpen={setIsOpen}
          modalIsOpen={modalIsOpen}
        />
      )}
      {/*=================Start Main Body Section==============*/}
      {alertShow === true ? (
        <CustomAlert message={alertMessage} close={() => setAlertShow(false)} />
      ) : null}
      <ScrollToTop />
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
                      <span style={{ color: "#00C9C9" }}>1 </span>/ 2
                    </span>
                  </p>
                </div>
                {/*Showing Bar*/}
                <div className="showing-bar-area">
                  <div className="bar-left" />
                  <div className="bar-right black-bar" />
                </div>
                {/*/// End Showing Bar*/}
                {/*Build Profile Area*/}
                <div className="build-profile-area">
                  <div className="build-profile-heading">
                    <h1>Build your hair profile</h1>
                  </div>
                  {/* <div className="already-account-login">
                    <p>
                      Already a customer? <a href="/">Login</a>
                    </p>
                  </div> */}
                </div>
                {/*/// End Build Profile Area*/}
                {/*Promo Applied /offer*/}
                <div className="promo-applied-area">
                  <div className="checkmark">
                    <img src="assets/images/checkmark.svg" alt="icon" />
                  </div>
                  <div className="promo-text">
                    <h2>Promo applied!</h2>
                    <p>
                      <span style={{ fontWeight: 600 }}>20% OFF</span> your
                      first 16OZ shampoo + conditioner set
                    </p>
                  </div>
                </div>
                {/*/// End Promo Applied /offer*/}
                {/*Hair Style Type*/}
                <div className="hair-style-type-area">
                  {/*Natural Hair*/}
                  <div className="natural-hair-style">
                    {/*Heading Hair*/}
                    <div className="heading-hair-style">
                      <h1>
                        NATURAL HAIR TYPE
                        <span
                          onClick={() =>
                            openModal(
                              "Natural Hair Type",
                              PopUpData.NaturalHairType
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
                    </div>
                    {/*/// End Heading Hair*/}
                    <div className="flex-box">
                      {hairType1.map((text, index) => {
                        return (
                          <div
                            // onClick={() => setHairSelect1(text.text)}
                            onClick={() =>
                              onClickType({
                                getPrevSelectInput: hairSelect1,
                                selectedInput: text.text,
                                setSelectInput: setHairSelect1,
                              })
                            }
                            key={"001-" + index}
                            className={
                              hairSelect1 === text.text
                                ? "hair-style-item new-overlay-bg"
                                : "hair-style-item"
                            }>
                            <img src={text.src} alt="img" />
                            <p>{text.text}</p>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                  {/*/// End Natural Hair*/}
                  {/*Hair Structure*/}
                  <div className="hair-structure-area">
                    {/*Heading Hair*/}
                    <div className="heading-hair-style">
                      <h1>
                        HAIR STRUCTURE
                        <span
                          onClick={() =>
                            openModal("Hair Structure", PopUpData.HairStructure)
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
                    </div>
                    {/*/// End Heading Hair*/}
                    <div className="flex-box">
                      {hairType2.map((text, index) => {
                        return (
                          <div
                            // onClick={() => setHairSelect2(text.text)}
                            onClick={() =>
                              onClickType({
                                getPrevSelectInput: hairSelect2,
                                selectedInput: text.text,
                                setSelectInput: setHairSelect2,
                              })
                            }
                            key={"002-" + index}
                            className={
                              hairSelect2 === text.text
                                ? "hair-style-item new-overlay-bg"
                                : "hair-style-item"
                            }>
                            <img src={text.src} alt="img" />
                            <p>{text.text}</p>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                  {/*/// End Hair Structure*/}
                </div>
                {/*/// End Hair Style Type*/}
                {/*Hair Style Type*/}
                <div className="hair-style-type-area">
                  {/*Natural Hair*/}
                  <div className="natural-hair-style">
                    {/*Heading Hair*/}
                    <div className="heading-hair-style">
                      <h1>
                        HAIR POROSITY
                        <span
                          onClick={() =>
                            openModal("Hair Porosity", PopUpData.HairPorosity)
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
                    </div>
                    {/*/// End Heading Hair*/}
                    <div className="flex-box">
                      {porosity.map((text, index) => {
                        return (
                          <div
                            onClick={() =>
                              onClickType({
                                getPrevSelectInput: porositySelect,
                                selectedInput: text.text,
                                setSelectInput: setPorositySelect,
                              })
                            }
                            key={"002-" + index}
                            className={
                              porositySelect === text.text
                                ? "hair-style-item new-overlay-bg"
                                : "hair-style-item"
                            }>
                            <img src={text.src} alt="img" />
                            <p>{text.text}</p>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                  {/*/// End Natural Hair*/}
                  {/*Hair Structure*/}
                  <div className="hair-structure-area">
                    {/*Heading Hair*/}
                    <div className="heading-hair-style">
                      <h1>
                        SCALP MOISTURE
                        <span
                          onClick={() =>
                            openModal("Scalp Moisture", PopUpData.ScalpMoisture)
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
                    </div>
                    {/*/// End Heading Hair*/}
                    <div className="flex-box">
                      {moisture.map((text, index) => {
                        return (
                          <div
                            onClick={() =>
                              onClickType({
                                getPrevSelectInput: moistureSelect,
                                selectedInput: text.text,
                                setSelectInput: setMoistureSelect,
                              })
                            }
                            key={"001-" + index}
                            className={
                              moistureSelect === text.text
                                ? "hair-style-item new-overlay-bg"
                                : "hair-style-item"
                            }>
                            <img src={text.src} alt="img" />
                            <p>{text.text}</p>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                  {/*/// End Hair Structure*/}
                </div>
                {/*/// End Hair Style Type*/}
                {/*Button Area*/}
                <div className="main-button-area">
                  <div className="previous-btn">
                    <button>
                      <i className="bx bx-chevron-left" /> PREVIOUS
                    </button>
                  </div>
                  <div className="next-btn">
                    <button
                      className="qna-next-btn"
                      onClick={() => onNextClick()}>
                      NEXT <i className="bx bx-chevron-right" />
                    </button>
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
      <Footer isGlobal={false} />
      {/*====================End Footer Section====================*/}
    </>
  );
};
export default QnA1;
