import React from "react";
import { createContext, ReactNode, useReducer } from "react";
import type { ReactElement } from "react";
import { defaultState } from "./defaultState";
import type { ToDosContextType } from "./types";
import { toDosContextReducer } from "./toDosReducer";

export const ToDosContext = createContext<ToDosContextType>({
  state: defaultState,
  dispatch: () => undefined,
});

const ToDosProvider = ({ children }: { children: ReactNode }): ReactElement => {
  const [state, dispatch] = useReducer(toDosContextReducer, defaultState);

  return (
    <ToDosContext.Provider value={{ state, dispatch }}>
      {children}
    </ToDosContext.Provider>
  );
};

export default ToDosProvider;
