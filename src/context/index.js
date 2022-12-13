import axios from "axios";
import React, {
  createContext,
  useContext,
  useEffect,
  useState,
  useCallback,
} from "react";

const GettingHairAnimation = createContext();
const GettingHairDescription = createContext();

export function GettingHairAnimationProvider({ children }) {
  const [initialValues, setInitialValues] = useState();
  const [hairDescription, setHairDescription] = useState();

  const videoURL = JSON.parse(localStorage.getItem("animatedVideo"));
  const hairDesc = localStorage.getItem("hairDescription");

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
    if (videoURL) {
      let url = videoURL["task-response-status-url"];
      callAfter3sec(url);
    }
  }, [callAfter3sec, hairDesc, videoURL]);

  return (
    <GettingHairAnimation.Provider value={initialValues}>
      <GettingHairDescription.Provider value={hairDescription}>
        {children}
      </GettingHairDescription.Provider>
    </GettingHairAnimation.Provider>
  );
}

export function useGetHairAnimation() {
  return useContext(GettingHairAnimation);
}

export function useGetHairDescription() {
  return useContext(GettingHairDescription);
}
