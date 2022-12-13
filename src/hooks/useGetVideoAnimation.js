import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useState } from "react";
import { useStore } from "../store";

export const useGetVideoAnimation = () => {
  const { state: stateHairAnimationResponse } = useStore();
  console.log(
    "===> ~ file: useGetVideoAnimation.js ~ line 7 ~ useGetVideoAnimation ~ stateHairAnimationResponse",
    stateHairAnimationResponse
  );

  const videoURL = JSON.parse(localStorage.getItem("animatedVideo"));
  let token = localStorage.getItem('access')
  const hairAimation = axios.create({
    baseURL: videoURL["task-response-status-url"],
    headers: {
      "Authorization": 'Bearer ' + token,
    }
  });

  let data;
  //   let videoURL = stateHairAnimationResponse["task-response-status-url"];
  const { isLoading, refetch } = useQuery(
    "get-video-animation",
    hairAimation.get().then((response) => console.log(response)),
    {
      refetchInterval: 6000,
    }
  );
  return {
    isLoading,
    refetch,
    data,
  };
};

export const useGetHairDescription = () => {
  // const { state: stateHairAnimationResponse } = useStore();
  // console.log(
  //   "===> ~ file: useGetVideoAnimation.js ~ line 7 ~ useGetVideoAnimation ~ stateHairAnimationResponse",
  //   stateHairAnimationResponse
  // const [data, setdata] = useState();
  // );
  const videoURL = JSON.parse(localStorage.getItem("hairDescription"));

  // const hairDescription = axios.create({
  //   baseURL: videoURL["task-response-status-url"],
  // });

  // const videoURL = localStorage.getItem("hairDescription");

  //   let videoURL = stateHairAnimationResponse["task-response-status-url"];
  const token = localStorage.getItem('access')
  const { isLoading, refetch, data } = useQuery(
    "get-video-animation",
    // hairDescription.get(),
    // .then((response) => setdata(response.data))
    async () => {
      return await axios.get(
        // "http://18.119.137.100/result/67eba6e1-5419-4c55-bbfc-e80bd925a7fc"
        "https://hair-animation.myhairdays.com/result/8a1f8e50-0227-4021-b352-68236aca31b2", {
        headers: {
          "Authorization": 'Bearer ' + token,
        },
      }
      );
    },
    {
      onSettled: (data, error) => {
        console.log(data, error);
      },
      enabled: true,
    }
  );

  // console.log(data);

  return {
    isLoading,
    refetch,
    data,
  };
};
// import React, { useState } from 'react';
// import { useMutation, useQuery } from 'react-query'
// import { privateClient } from "../../fetcher";

// export const useGetLottery = () => {
//   const { isLoading, refetch } = useQuery("query-getLottery",
//     async () => {
//       return await privateClient.get("lottery/fast-parity");
//     }, {
//       cacheTime: 0,
//       enabled: false
//     }
//   );

//   return {
//     isLoading,
//     refetch
//   }
// }

// export const useTradeLottery = () => {
//   const [error, setError] = useState<any>(null);

//   const {mutateAsync, isLoading } = useMutation(
//     async (body: any) => {
//       return await privateClient.post("/lottery/trade", body);
//   }, {
//     onError: (error: any) => {
//       if (error.response?.data?.message) {
//         setError(error.response?.data?.message);
//       }
//     }
//   });

//   return {
//     trade: mutateAsync, tradeLoading: isLoading, tradeErrorMessage: error
//   };
// }
