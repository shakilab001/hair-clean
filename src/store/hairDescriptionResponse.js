export const stateHairDescResponse = () => {};

export const actionHairDescResponse = {
  SET_HAIR_DESC_RESPONSE: (state, payload) => ({
    ...state,
    state: payload,
  }),
};

// General Response
// {
//     "message": "Image is added to queue for processing!",
//     "task-id": "bc78d219-e7ea-478f-b9e8-9c86fa0ea891",
//     "task-response-status-url": "http://18.119.137.100/result/bc78d219-e7ea-478f-b9e8-9c86fa0ea891"
// }
