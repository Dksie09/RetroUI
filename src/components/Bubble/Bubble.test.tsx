import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Bubble from "./Bubble";

describe("Bubble Component", () => {
  test("renders children content", () => {
    render(<Bubble direction="left">Test Content</Bubble>);
    expect(screen.getByText("Test Content")).toBeInTheDocument();
  });

  test("applies correct direction class", () => {
    const { container } = render(<Bubble direction="right">Test</Bubble>);
    expect(container.firstChild).toHaveClass("from-right");
  });

  test("applies custom styles", () => {
    const { container } = render(
      <Bubble
        direction="left"
        borderColor="#ff0000"
        bg="#00ff00"
        textColor="#0000ff"
      >
        Test
      </Bubble>
    );
    const bubbleElement = container.firstChild as HTMLElement;
    expect(bubbleElement).toHaveStyle({
      "--bubble-border-color": "#ff0000",
      "--bubble-bg-color": "#00ff00",
      "--bubble-text-color": "#0000ff",
    });
  });

  test("calls onClick when clicked", () => {
    const handleClick = jest.fn();
    render(
      <Bubble direction="left" onClick={handleClick}>
        Click me
      </Bubble>
    );
    fireEvent.click(screen.getByText("Click me"));
    expect(handleClick).toHaveBeenCalledTimes(1);
  });
});
