import React, { useEffect } from "react";
import { Box, Button, Flex, Heading, Message } from "theme-ui";
import ToDoForm from "../components/ToDoForm";
import Countdown from "react-countdown";
import { useToDos } from "../hooks/useToDos";
import { getStorage } from "../clients/localStorage/localStorage";
import { ToDos } from "../providers/ToDosProvider/types";

export default function ToDoTimer() {
  const {
    state: { toDos },
    dispatch,
    actions,
  } = useToDos();

  useEffect(() => {
    const storageState = getStorage();

    if (storageState && storageState.toDosState.toDos) {
      dispatch({
        type: actions.LOAD_TODO,
        payload: storageState.toDosState.toDos,
      });
    }
  });

  const onRemove = (toDo: ToDos) => {
    dispatch({
      type: actions.CANCEL_TODO,
      payload: toDo,
    });
  };

  toDos.sort(function (a, b) {
    return (new Date(a.dueDateTime) as any) - (new Date(b.dueDateTime) as any);
  });

  return (
    <Box>
      <Heading as="h1" sx={{ textAlign: "center" }}>
        ToDo Timer
      </Heading>
      <Box
        sx={{
          maxWidth: 500,
          border: "1px solid primary",
          p: 2,
          m: "12px auto",
        }}
      >
        <ToDoForm />
      </Box>
      <Box>
        <Heading as="h2" sx={{ m: "12px auto", textAlign: "center" }}>
          Active ToDos...
        </Heading>
        <Box as="p" sx={{ m: "12px auto", textAlign: "center" }}>
          ToDo's will stay as long as you don't clear browser cache.
        </Box>
      </Box>
      <Flex sx={{ flexDirection: "column" }}>
        {toDos.length > 0 ? (
          toDos.map((toDo) => {
            const { title, dueDateTime } = toDo;
            return (
              <Flex
                key={title.replace(" ", "-")}
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  alignContent: "flex-start",
                  minWidth: [300, 500],
                  border: "solid 1px black",
                  backgroundColor: "lightgray",
                  borderRadius: 3,
                  p: 2,
                  m: "12px auto",
                }}
              >
                <Heading as="h3" sx={{ p: 2 }}>
                  {title}
                </Heading>
                <Flex sx={{ p: 2, flexDirection: "row" }}>
                  <Heading as="h4">Due In: </Heading>
                  <Countdown
                    date={dueDateTime}
                    // onComplete={}
                    renderer={({
                      days,
                      hours,
                      minutes,
                      seconds,
                      completed,
                    }) => {
                      if (completed) {
                        // Render a completed state
                        return "Finished!";
                      } else {
                        // Render a countdown
                        return (
                          <Flex sx={{ flexDirection: "row" }}>
                            <Box sx={{ m: "0 8px" }}>{`Days: ${days}`}</Box>
                            <Box sx={{ m: "0 8px" }}>{`Hours: ${hours}`}</Box>
                            <Box sx={{ m: "0 8px" }}>{`Min: ${minutes}`}</Box>
                            <Box sx={{ m: "0 8px" }}>{`Sec: ${seconds}`}</Box>
                          </Flex>
                        );
                      }
                    }}
                  />
                </Flex>
                <Button
                  sx={{ m: "8px 0" }}
                  onClick={() => {
                    onRemove(toDo);
                  }}
                >
                  Cancel
                </Button>
              </Flex>
            );
          })
        ) : (
          <Message sx={{ m: "8px auto", maxWidth: 500 }} variant="info">
            Enter a ToDo to start the ToDo Timer
          </Message>
        )}
      </Flex>
    </Box>
  );
}
