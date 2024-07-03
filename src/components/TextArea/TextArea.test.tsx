import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import { TextArea } from "./TextArea";

describe("TextArea Component", () => {
  test("renders textarea element", () => {
    render(<TextArea placeholder="Test placeholder" />);
    expect(screen.getByPlaceholderText("Test placeholder")).toBeInTheDocument();
  });

  test("applies custom className", () => {
    render(<TextArea className="custom-class" />);
    expect(screen.getByRole("textbox")).toHaveClass("custom-class");
  });

  test("handles input changes", () => {
    const handleChange = jest.fn();
    render(<TextArea onChange={handleChange} />);
    fireEvent.change(screen.getByRole("textbox"), {
      target: { value: "test" },
    });
    expect(handleChange).toHaveBeenCalledTimes(1);
  });
});
