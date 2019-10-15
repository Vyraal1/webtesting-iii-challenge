import React from "react";
import Dashboard from "./Dashboard";
import Controls from "../controls/Controls";
import { render } from "@testing-library/react";

test("App render", () => {
  render(<Dashboard />);
});

test("Gate defaults to 'unlocked' and 'open'", () => {
  // returns a method that returns a component with the given text
  const { getByText } = render(<Dashboard />);
  expect(getByText(/open/i));
  expect(getByText(/unlocked/i));
});

//am i missing anything else?
