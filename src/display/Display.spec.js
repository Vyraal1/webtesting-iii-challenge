import React from "react";
import { render, queryByText } from "@testing-library/react";
import Display from "./Display";

test("Display renders", () => {
  render(<Display />);
});

test(`Display 'Locked' if the locked prop is true, and 'Unlocked' if false`, () => {
  const { getByText, queryByText } = render(<Display locked={false} />);
  expect(getByText(/Unlocked/i));
  expect(queryByText(/^Locked/i)).toBeFalsy();
});

test(`Green-led class when unlocked`, () => {
  const { getByText } = render(<Display locked={false} />);
  expect(getByText(/Unlocked/i).classList.contains(`green-led`)).toBe(true);
});

//this is how to check props
test(`Show closed if closed porp is true, open if false`, () => {
  const { getByText, queryByText } = render(<Display closed={true} />);
  expect(getByText(/Closed/i));
  expect(queryByText(/Open/i)).toBeFalsy();
});
