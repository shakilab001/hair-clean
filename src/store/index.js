import React, { createContext, useContext, useReducer } from "react";
import {
  stateHairAnimationResponse,
  actionHairDescResponse,
} from "./hairAnimationResponse";

const iInitialValue = { ...stateHairAnimationResponse };

const Actions = { ...actionHairDescResponse };

const reducer = (state, action) => {
  const actions = Actions[action.type];
  const update = actions(state, action.payload);
  return { ...state, ...update };
};

const ContextLoader = createContext(iInitialValue);

export const LoaderStore = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, iInitialValue);

  return (
    <ContextLoader.Provider value={{ state, dispatch }}>
      {children}
    </ContextLoader.Provider>
  );
};

export function useStore() {
  const { state, dispatch } = useContext(ContextLoader);
  return { state, dispatch };
}

export default {};
