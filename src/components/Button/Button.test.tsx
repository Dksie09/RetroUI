import React from "react";
import { render, screen } from "@testing-library/react";
import { Button } from "./Button";

describe("Button", () => {
  it("renders with default props", () => {
    render(<Button>Click me</Button>);
    const button = screen.getByRole("button", { name: /click me/i });
    expect(button).toBeInTheDocument();
    expect(button).toHaveClass("pixelButton");
  });

  it("applies custom className", () => {
    render(<Button className="custom-class">Click me</Button>);
    const button = screen.getByRole("button", { name: /click me/i });
    expect(button).toHaveClass("custom-class");
  });

  it("applies custom background color", () => {
    render(<Button bg="#ff0000">Click me</Button>);
    const button = screen.getByRole("button", { name: /click me/i });
    expect(button).toHaveStyle("--button-custom-bg: #ff0000");
  });

  it("applies custom text color", () => {
    render(<Button textColor="#00ff00">Click me</Button>);
    const button = screen.getByRole("button", { name: /click me/i });
    expect(button).toHaveStyle("--button-custom-text: #00ff00");
  });

  it("applies custom shadow color", () => {
    render(<Button shadow="#0000ff">Click me</Button>);
    const button = screen.getByRole("button", { name: /click me/i });
    expect(button).toHaveStyle("--button-custom-shadow: #0000ff");
  });

  it("applies custom border color", () => {
    render(<Button borderColor="#ffff00">Click me</Button>);
    const button = screen.getByRole("button", { name: /click me/i });
    expect(button).toHaveStyle("--button-custom-border: #ffff00");
  });

  it("applies multiple custom styles", () => {
    render(
      <Button
        bg="#ff0000"
        textColor="#00ff00"
        shadow="#0000ff"
        borderColor="#ffff00"
      >
        Click me
      </Button>
    );
    const button = screen.getByRole("button", { name: /click me/i });
    expect(button).toHaveStyle({
      "--button-custom-bg": "#ff0000",
      "--button-custom-text": "#00ff00",
      "--button-custom-shadow": "#0000ff",
      "--button-custom-border": "#ffff00",
    });
  });
});
