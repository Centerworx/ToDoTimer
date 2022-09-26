import React from "react";
import { TO_DOS_ACTION_TYPE } from "./types";
import type { To_Dos_Actions, ToDosStateType } from "./types";
import { setStorage } from "../../clients/localStorage/localStorage";

export function toDosContextReducer(
  state: ToDosStateType,
  action: To_Dos_Actions
): ToDosStateType {
  switch (action.type) {
    case TO_DOS_ACTION_TYPE.LOAD_TODO: {
      const newState = { ...state, toDos: action.payload };

      setStorage({ toDosState: newState });
      return newState;
    }
    case TO_DOS_ACTION_TYPE.SET_TODO: {
      const newState = { ...state, toDos: [...state.toDos, action.payload] };

      setStorage({ toDosState: newState });
      return newState;
    }
    case TO_DOS_ACTION_TYPE.CANCEL_TODO: {
      const newState = {
        ...state,
        toDos: [...state.toDos.filter((toDo) => toDo !== action.payload)],
      };
      setStorage({ toDosState: newState });
      return newState;
    }
    default: {
      return state;
    }
  }
}
