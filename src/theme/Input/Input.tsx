import React from "react";
import { useState } from "react";
import {
  Box,
  Input as ThemeInput,
  InputProps as themeInputProps,
  Label,
  Message,
} from "theme-ui";

type InputProps = Omit<themeInputProps, "onChange" | "value"> & {
  label: string;
  value?: string | number | readonly string[];
  onChange: (value: string | number | readonly string[]) => void;
  error?: string | string[];
};

export default function Input({
  name,
  label,
  error,
  value: inputValue = "",
  sx,
  onChange,
  ...inputProps
}: InputProps) {
  const [value, setValue] = useState<
    string | number | readonly string[] | undefined
  >(inputValue);

  return (
    <Box sx={{ mb: 2, mr: 2 }}>
      <Label variant="default" htmlFor={name} sx={{ fontWeight: 600 }}>
        {label}
      </Label>
      <ThemeInput
        {...inputProps}
        variant="default"
        id={name}
        name={name}
        sx={{ ...sx, minHeight: 40 }}
        aria-label={label}
        aria-invalid={Boolean(error)}
        aria-errormessage={`error${name}`}
        value={value}
        onChange={(e) => {
          const inputValue = e.target.value;
          setValue(inputValue);
          onChange(inputValue);
        }}
      />
      {error && (
        <Message variant="error" id={`error${name}`}>
          {error}
        </Message>
      )}
    </Box>
  );
}
