import React from "react";
import { render, fireEvent } from "@testing-library/react";
import '@testing-library/jest-dom';
import Application from "../Application";

it("defaults to Monday and changes the schedule when a new day is selected", async () => {
  const { findByText, queryByText, getByText } = render(<Application />);

  await findByText("Monday");

    fireEvent.click(getByText("Tuesday"));
    expect(queryByText("Leopold Silvers")).toBeInTheDocument();
});

