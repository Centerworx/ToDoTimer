import { render } from "@testing-library/react";
import React from "react";

import { setStorage, getStorage } from "./localStorage";

describe("localStorage", () => {
  test("should setStorage and retrieve storage", () => {
    expect(setStorage({})).toBeTruthy;
    expect(getStorage()).toEqual({});
  });
});
