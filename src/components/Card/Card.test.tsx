import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { Card } from "./Card";

describe("Card Component", () => {
  test("renders card content correctly", () => {
    render(
      <Card>
        <h1>Card Title</h1>
        <p>Card Content</p>
      </Card>
    );

    expect(screen.getByText("Card Title")).toBeInTheDocument();
    expect(screen.getByText("Card Content")).toBeInTheDocument();
  });

  test("Card applies base classes", () => {
    render(<Card>Test Content</Card>);
    const card = screen.getByText("Test Content").closest("div");
    expect(card).toHaveClass("pixelCard");
  });

  test("Card accepts and applies additional className", () => {
    render(<Card className="extra-class">Test Content</Card>);
    const card = screen.getByText("Test Content").closest("div");
    expect(card).toHaveClass("pixelCard");
    expect(card).toHaveClass("extra-class");
  });

  test("Card applies custom styles", () => {
    render(
      <Card
        bg="#ff0000"
        textColor="#ffffff"
        borderColor="#000000"
        shadowColor="#333333"
      >
        Styled Card
      </Card>
    );
    const card = screen.getByText("Styled Card").closest("div");
    expect(card).toHaveStyle({
      "--card-custom-bg": "#ff0000",
      "--card-custom-text": "#ffffff",
      "--card-custom-border": "#000000",
      "--card-custom-shadow": "#333333",
    });
  });

  test("Card renders with default styles when no custom styles are provided", () => {
    render(<Card>Default Styled Card</Card>);
    const card = screen.getByText("Default Styled Card").closest("div");
    expect(card).not.toHaveStyle({
      "--card-custom-bg": expect.any(String),
      "--card-custom-text": expect.any(String),
      "--card-custom-border": expect.any(String),
      "--card-custom-shadow": expect.any(String),
    });
  });
});
