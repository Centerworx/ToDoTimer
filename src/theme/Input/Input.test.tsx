import React from "react";
import { customRender } from "../../../test/customRender";
import { screen } from "@testing-library/react";
import Input from "./Input";

describe("Input", () => {
  test("should render Input with default value", () => {
    const mockOnChange = jest.fn();
    const DEFAULT_VALUE = "default_value";
    const INPUT_LABEL = "ToDo Input";
    const INPUT_NAME = "test-input";

    customRender(
      <Input
        name={INPUT_NAME}
        label={INPUT_LABEL}
        value={DEFAULT_VALUE}
        onChange={mockOnChange}
      />
    );

    expect(screen.getByRole("textbox", { name: INPUT_LABEL })).toHaveAttribute(
      "value",
      DEFAULT_VALUE
    );
    expect(screen.getByText(INPUT_LABEL)).toBeInTheDocument();
  });
});
