import React from "react";
import ToDoTimer from "./pages/ToDoTimer";
import AppProvider from "./providers/AppProvider";

function App() {
  return (
    <AppProvider>
      <ToDoTimer />
    </AppProvider>
  );
}

export default App;
