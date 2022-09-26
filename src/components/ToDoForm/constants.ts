import { FormNames, ToDoFormState } from "./types";

export const INITIAL_STATE: ToDoFormState = {
  title: "",
  date: "",
  time: "",
  describe: "",
};

export const FORM_NAMES: Record<FormNames, FormNames> = {
  title: "title",
  date: "date",
  time: "time",
  describe: "describe",
};
