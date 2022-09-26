export type ToDosStateType = {
  toDos: ToDos[];
};

export type DateString = string;

export type ToDos = {
  title: string;
  dueDateTime: DateString;
};

export type ToDosContextType = {
  state: ToDosStateType;
  dispatch: React.Dispatch<To_Dos_Actions>;
};

// eslint-disable-next-line no-shadow
export enum TO_DOS_ACTION_TYPE {
  LOAD_TODO = "LOAD_TODO",
  SET_TODO = "SET_TODO",
  CANCEL_TODO = "CANCEL_TODO",
}

type ACTION_LOAD_TODO = {
  type: TO_DOS_ACTION_TYPE.LOAD_TODO;
  payload: ToDos[];
};
type ACTION_SET_TODO = {
  type: TO_DOS_ACTION_TYPE.SET_TODO;
  payload: ToDos;
};

type ACTION_CANCEL_SEARCH = {
  type: TO_DOS_ACTION_TYPE.CANCEL_TODO;
  payload: ToDos;
};

// prettier-ignore
export type To_Dos_Actions = | ACTION_LOAD_TODO | ACTION_SET_TODO | ACTION_CANCEL_SEARCH;
