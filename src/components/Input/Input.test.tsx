import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import { Input } from "./Input";
import { Search } from "lucide-react";

describe("Input Component", () => {
  test("renders input element", () => {
    render(<Input placeholder="Test placeholder" />);
    expect(screen.getByPlaceholderText("Test placeholder")).toBeInTheDocument();
  });

  test("applies custom className", () => {
    render(<Input className="custom-class" />);
    expect(screen.getByRole("textbox").parentElement).toHaveClass(
      "custom-class"
    );
  });

  test("renders icon when provided", () => {
    render(<Input icon="/icons/search-1.svg" />);
    expect(screen.getByAltText("Input icon")).toBeInTheDocument();
  });

  test("calls onIconClick when icon is clicked", () => {
    const mockOnIconClick = jest.fn();
    render(<Input icon="/icons/search-1.svg" onIconClick={mockOnIconClick} />);
    fireEvent.click(screen.getByAltText("Input icon"));
    expect(mockOnIconClick).toHaveBeenCalledTimes(1);
  });

  test("renders icon when provided as a React component", () => {
    render(<Input icon={<Search data-testid="search-icon" />} />);
    expect(screen.getByTestId("search-icon")).toBeInTheDocument();
  });

  test("calls onIconClick when React component icon is clicked", () => {
    const mockOnIconClick = jest.fn();
    render(<Input icon={<Search data-testid="search-icon" />} onIconClick={mockOnIconClick} />);
    fireEvent.click(screen.getByTestId("search-icon"));
    expect(mockOnIconClick).toHaveBeenCalledTimes(1);
  });
});
