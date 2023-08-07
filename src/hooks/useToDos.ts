import { useContext } from "react";
import { ToDosContext } from "../providers/ToDosProvider";
import { TO_DOS_ACTION_TYPE } from "../providers/ToDosProvider/types";

// just a basic hook
export const useToDos = () => {
  const { state, dispatch } = useContext(ToDosContext);

  const actions = TO_DOS_ACTION_TYPE;

  return { state, dispatch, actions };
};
