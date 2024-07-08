import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { ProgressBar } from "./ProgressBar";

describe("ProgressBar Component", () => {
  test("renders progress bar with correct progress", () => {
    render(<ProgressBar progress={50} />);
    const progressBar = screen.getByText("50%").previousSibling as HTMLElement;
    expect(progressBar).toHaveStyle("width: 50%");
  });

  test("clamps progress value between 0 and 100", () => {
    render(<ProgressBar progress={150} />);
    expect(screen.getByText("100%")).toBeInTheDocument();

    render(<ProgressBar progress={-10} />);
    expect(screen.getByText("0%")).toBeInTheDocument();
  });

  test("applies correct color class", () => {
    render(<ProgressBar progress={50} color="secondary" />);
    const progressBar = screen.getByText("50%").previousSibling as HTMLElement;
    expect(progressBar).toHaveClass("pixel-progressbar-secondary");
  });

  test("applies correct size class", () => {
    render(<ProgressBar progress={50} size="lg" />);
    const container = screen.getByText("50%").parentElement;
    expect(container).toHaveClass("pixel-progressbar-lg");
  });

  test("applies additional className", () => {
    render(<ProgressBar progress={50} className="custom-class" />);
    const container = screen.getByText("50%").parentElement;
    expect(container).toHaveClass("custom-class");
  });
});
