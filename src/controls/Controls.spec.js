import React from "react";
import { render } from "@testing-library/react";

import Controls from "./Controls";

test(`Lock gate if locked`, () => {
  const { getByText } = render(<Controls locked={false} />);
  expect(getByText(/Lock Gate/i));
});

//do I also need to do one for locked={true}?

test(`toggle button is disabled on lock`, () => {
  const { getByText } = render(<Controls locked={true} closed={true} />);
  expect(getByText(/Open Gate/i).disabled).toBe(true);
});

test(`button says close gate if closed state is false`, () => {
  const { getByText } = render(<Controls closed={false} />);
  expect(getByText(/Close Gate/i));
});
