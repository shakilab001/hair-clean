import QnA2 from "./QnA2";
import { useEffect, useState, useCallback, useContext } from "react";
import QnA1 from "./QnA1";
import Loading from "./Loading";
import axios from "axios";
import { API } from "../../api/API";
import { CustomAlert } from "../../components/Alert/alert";
import { UserContext } from "../../context/authContext";

const QnA = () => {
  const [hairGoal, setHairGoal] = useState([]);
  const [unwanted, setUnwanted] = useState([]);
  const [stylingPreference, setStylingPreference] = useState([]);
  const [productSearch, setProductSearch] = useState("");
  const [products, setProducts] = useState([]);
  const [selectedProducts, setSelectedProducts] = useState([]);

  const [hairSelect1, setHairSelect1] = useState("");
  const [hairSelect2, setHairSelect2] = useState("");
  const [moistureSelect, setMoistureSelect] = useState("");
  const [porositySelect, setPorositySelect] = useState("");

  const [showUnicorn, setShowUnicorn] = useState(false);

  const [alertMessage, setAlertMessage] = useState("");
  const [alertShow, setAlertShow] = useState(false);

  const [initialValues, setInitialValues] = useState();
  const [successFullyLoaded, setSuccessFullyLoaded] = useState(false);

  const videoURL = JSON.parse(localStorage.getItem("animatedVideo"));

  // eslint-disable-next-line react-hooks/exhaustive-deps
  function callAxios(storedURL) {
    const token = localStorage.getItem('access')
    axios
      .get(storedURL, {
        headers: {
          "Authorization": 'Bearer ' + token,
        },
      })
      .then((result) => {
        if (result.status === 202) {
          console.log("got 202");
          callAfter3sec(storedURL);
          return;
        } else {
          let url = result.data["video-url"];
          setSuccessFullyLoaded(true);
          setInitialValues(url);
          return;
        }
      })
      .catch((error) => {
        throw new Error(error);
      });
  }

  //   function callAfter3sec(storedURL) {
  //     setTimeout(() => {
  //       callAxios(storedURL);
  //     }, "3000");
  //   }

  const callAfter3sec = useCallback(
    (storedURL) => {
      setTimeout(() => {
        callAxios(storedURL);
      }, "5000");
    },
    [callAxios]
  );

  useEffect(() => {
    if (
      videoURL &&
      videoURL["task-response-status-url"] !== undefined &&
      !successFullyLoaded
    ) {
      let url = videoURL["task-response-status-url"];
      callAfter3sec(url);
    }
  }, [callAfter3sec, successFullyLoaded, videoURL]);

  const analyze = () => {
    let newBody = {
      "natural-hair-type": hairSelect1,
      "hair-structure": hairSelect2,
      "hair-porosity": porositySelect,
      "scalp-moisture": moistureSelect,
      "hair-goals": hairGoal,
      "unwanted-ingredients": unwanted,
      "favorite-products": selectedProducts,
    };
    try {
      if (hairSelect1 === "") {
        throw new Error("Please select a hair type");
      } else if (hairSelect2 === "") {
        throw new Error("Please select a hair structure");
      } else if (porositySelect === "") {
        throw new Error("Please select a hair porosity");
      } else if (moistureSelect === "") {
        throw new Error("Please select a moisture");
      } else if (hairGoal.length === 0) {
        throw new Error("Please select one or more hair goal");
      } else if (stylingPreference.length === 0) {
        throw new Error("Please select one styling preference");
      } else if (selectedProducts.length === 0) {
        throw new Error("Please select one or more favorite product");
      }
      else if (localStorage.getItem('imgComplete') < 3) {
        throw new Error("Image upload not complete");
      }
      else {
        const token = localStorage.getItem('access')
        fetch(API + "/question-and-answer", {
          method: "POST",
          headers: {
            "Authorization": 'Bearer ' + token,
            "Content-Type": "application/json",
          },
          body: JSON.stringify(newBody),
        })
          .then((response) => response.json())
          .then((data) => {
            if (data["status-code"] === 200) {
              localStorage.setItem("questionierId", data["id"]);
              setShowUnicorn(true);
              setTimeout(() => {
                setStep(3);
              }, 4000);
              console.log(data);
            }
          });
      }
    } catch (err) {
      setAlertMessage(err.message);
      setAlertShow(true);
      console.log(err.message);
      // alert(err)
    }
  };

  const [step, setStep] = useState(1);
  return (
    <>
      {alertShow === true ? (
        <CustomAlert message={alertMessage} close={() => setAlertShow(false)} />
      ) : null}
      {step === 1 && (
        <QnA1
          hairSelect1={hairSelect1}
          setHairSelect1={setHairSelect1}
          hairSelect2={hairSelect2}
          setHairSelect2={setHairSelect2}
          moistureSelect={moistureSelect}
          setMoistureSelect={setMoistureSelect}
          porositySelect={porositySelect}
          setPorositySelect={setPorositySelect}
          setStep={setStep}
        />
      )}
      {step === 2 && (
        <QnA2
          analyze={analyze}
          setStep={setStep}
          hairGoal={hairGoal}
          setHairGoal={setHairGoal}
          unwanted={unwanted}
          setUnwanted={setUnwanted}
          stylingPreference={stylingPreference}
          setStylingPreference={setStylingPreference}
          productSearch={productSearch}
          setProductSearch={setProductSearch}
          products={products}
          setProducts={setProducts}
          selectedProducts={selectedProducts}
          setSelectedProducts={setSelectedProducts}
          showUnicorn={showUnicorn}
        />
      )}
      {step === 3 && <Loading initialValues={initialValues} />}
    </>
  );
};

export default QnA;
