import type { RenderOptions, RenderResult } from "@testing-library/react";
import { render } from "@testing-library/react";
import type { ReactElement } from "react";
import AppProviders from "../src/providers/AppProvider";

export const customRender = (
  jsx: ReactElement,
  options?: RenderOptions
): RenderResult => {
  return render(jsx, { wrapper: AppProviders, ...options });
};
