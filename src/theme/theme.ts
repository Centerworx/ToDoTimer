import type { Theme } from "theme-ui";
import { system } from "@theme-ui/presets";

export const theme: Theme = {
  ...system,
  messages: {
    error: {
      color: "darkred",
      mb: 2,
    },
    success: {
      color: "darkred",
      mb: 2,
    },
    info: {
      color: "darkgray",
      mb: 2,
    },
  },
  styles: {
    h1: {
      variant: "text.heading",
      fontSize: 5,
    },
    h2: {
      variant: "text.heading",
      fontSize: 4,
    },
    h3: {
      variant: "text.heading",
      fontSize: 3,
    },
    h4: {
      variant: "text.heading",
      fontSize: 2,
    },
    h5: {
      variant: "text.heading",
      fontSize: 1,
    },
    h6: {
      variant: "text.heading",
      fontSize: 0,
    },
  },
};
