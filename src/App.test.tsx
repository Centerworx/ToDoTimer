import React from "react";
import { screen } from "@testing-library/react";
import { customRender } from "../test/customRender";
import App from "./App";

test("renders learn react link", () => {
  customRender(<App />);
  const linkElement = screen.getByText("ToDo Timer");
  expect(linkElement).toBeInTheDocument();
});
