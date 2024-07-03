import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "./Card";

describe("Card Components", () => {
  test("renders full card structure correctly", () => {
    render(
      <Card>
        <CardHeader>
          <CardTitle>Card Title</CardTitle>
          <CardDescription>Card Description</CardDescription>
        </CardHeader>
        <CardContent>
          <p>Card Content</p>
        </CardContent>
        <CardFooter>
          <p>Card Footer</p>
        </CardFooter>
      </Card>
    );

    expect(screen.getByText("Card Title")).toBeInTheDocument();
    expect(screen.getByText("Card Description")).toBeInTheDocument();
    expect(screen.getByText("Card Content")).toBeInTheDocument();
    expect(screen.getByText("Card Footer")).toBeInTheDocument();
  });

  test("Card applies base classes", () => {
    render(<Card>Test Content</Card>);
    const card = screen.getByText("Test Content").closest("div");
    expect(card).toHaveClass("pixel-card");
  });

  test("CardHeader applies correct class", () => {
    render(<CardHeader>Header Content</CardHeader>);
    const header = screen.getByText("Header Content").closest("div");
    expect(header).toHaveClass("pixel-card-header");
  });

  test("CardTitle applies correct class", () => {
    render(<CardTitle>Title Content</CardTitle>);
    const title = screen.getByText("Title Content");
    expect(title).toHaveClass("pixel-card-title");
  });

  test("CardDescription applies correct class", () => {
    render(<CardDescription>Description Content</CardDescription>);
    const description = screen.getByText("Description Content");
    expect(description).toHaveClass("pixel-card-description");
  });

  test("CardContent applies correct class", () => {
    render(<CardContent>Content</CardContent>);
    const content = screen.getByText("Content").closest("div");
    expect(content).toHaveClass("pixel-card-content");
  });

  test("CardFooter applies correct class", () => {
    render(<CardFooter>Footer Content</CardFooter>);
    const footer = screen.getByText("Footer Content").closest("div");
    expect(footer).toHaveClass("pixel-card-footer");
  });

  test("components accept and apply additional className", () => {
    render(
      <Card className="extra-class">
        <CardHeader className="header-class">Header</CardHeader>
        <CardTitle className="title-class">Title</CardTitle>
        <CardDescription className="desc-class">Description</CardDescription>
        <CardContent className="content-class">Content</CardContent>
        <CardFooter className="footer-class">Footer</CardFooter>
      </Card>
    );

    expect(screen.getByText("Header").closest("div")).toHaveClass(
      "header-class"
    );
    expect(screen.getByText("Title")).toHaveClass("title-class");
    expect(screen.getByText("Description")).toHaveClass("desc-class");
    expect(screen.getByText("Content").closest("div")).toHaveClass(
      "content-class"
    );
    expect(screen.getByText("Footer").closest("div")).toHaveClass(
      "footer-class"
    );
    expect(screen.getByText("Content").closest(".pixel-card")).toHaveClass(
      "extra-class"
    );
  });
});
