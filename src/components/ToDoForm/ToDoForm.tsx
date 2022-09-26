import React, { useContext, useState } from "react";
import { Button, Flex, Message } from "theme-ui";
import Input from "../../theme/Input";
import { FORM_NAMES } from "./constants";
import { FormNames, InputValueType, ToDoFormState } from "./types";
import { ToDosContext } from "../../providers/ToDosProvider";
import { TO_DOS_ACTION_TYPE } from "../../providers/ToDosProvider/types";
import { time } from "console";
import { useToDos } from "../../hooks/useToDos";
import { getTimezoneOffset } from "../../utilities/getTimezoneOffset";
import { getMonth, Month } from "../../utilities/getMonths";
import { getPreviousDate } from "../../utilities/getPreviousDate";

export default function ToDoForm() {
  const [formState, setFormState] = useState<Partial<ToDoFormState>>({});
  const [error, setError] = useState<string | undefined>(undefined);
  const { state, dispatch, actions } = useToDos();

  const onChange = (name: FormNames) => (value: InputValueType) => {
    setError(undefined);
    setFormState({ ...formState, [name]: value });
  };

  const onSubmit = (event: any) => {
    event.preventDefault();

    const { title, date, time } = formState;

    if (title && date && time) {
      const dueDateTime = `${date}T${time}:00${getTimezoneOffset()}`;
      dispatch({
        type: actions.SET_TODO,
        payload: {
          title: title as string,
          dueDateTime,
        },
      });
    } else {
      setError("Invalid form entries");
    }
  };

  return (
    <form action="" onSubmit={onSubmit}>
      <Flex sx={{ flexDirection: "column" }}>
        <Input
          type="text"
          label="Title"
          value={formState.title}
          name={FORM_NAMES.title}
          onChange={onChange(FORM_NAMES.title)}
        />
        <Flex sx={{ display: "flex", flexDirection: "row" }}>
          <Input
            sx={{ flex: "1 1 70%" }}
            type="date"
            label="Due Date"
            placeholder="mm/dd/yyyy"
            min={getPreviousDate()}
            value={formState.date}
            name={FORM_NAMES.date}
            onChange={onChange(FORM_NAMES.date)}
          />
          <Input
            sx={{ flex: "1 1 70%" }}
            type="time"
            placeholder="hh:mm am/pm"
            label="Due Time"
            value={formState.time}
            name={FORM_NAMES.time}
            onChange={onChange(FORM_NAMES.time)}
          />
        </Flex>
        {error && (
          <Message variant="error" id={`error-form`}>
            {error}
          </Message>
        )}
        <Button type="submit">Submit</Button>
      </Flex>
    </form>
  );
}
