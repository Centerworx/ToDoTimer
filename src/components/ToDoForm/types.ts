export type FormNames = "title" | "date" | "time" | "describe";

export type InputValueType = string | number | readonly string[];

export type ToDoFormState = Record<FormNames, InputValueType>;
