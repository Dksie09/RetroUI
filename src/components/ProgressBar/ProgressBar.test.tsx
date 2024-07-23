import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { ProgressBar } from "./ProgressBar";

describe("ProgressBar", () => {
  it("renders without crashing", () => {
    render(<ProgressBar progress={50} />);
    expect(screen.getByRole("progressbar")).toBeInTheDocument();
  });

  it("displays the correct progress", () => {
    render(<ProgressBar progress={75} />);
    const progressBar = screen.getByRole("progressbar");
    expect(progressBar).toHaveAttribute("aria-valuenow", "75");
  });

  it("clamps progress between 0 and 100", () => {
    const { rerender } = render(<ProgressBar progress={-10} />);
    expect(screen.getByRole("progressbar")).toHaveAttribute(
      "aria-valuenow",
      "0"
    );

    rerender(<ProgressBar progress={110} />);
    expect(screen.getByRole("progressbar")).toHaveAttribute(
      "aria-valuenow",
      "100"
    );
  });

  it("applies custom className", () => {
    render(<ProgressBar progress={50} className="custom-class" />);
    expect(screen.getByRole("progressbar")).toHaveClass("custom-class");
  });

  it("applies different sizes", () => {
    const { rerender } = render(<ProgressBar progress={50} size="sm" />);
    expect(screen.getByRole("progressbar")).toHaveClass("pixelProgressbarSm");

    rerender(<ProgressBar progress={50} size="md" />);
    expect(screen.getByRole("progressbar")).toHaveClass("pixelProgressbarMd");

    rerender(<ProgressBar progress={50} size="lg" />);
    expect(screen.getByRole("progressbar")).toHaveClass("pixelProgressbarLg");
  });

  it("applies custom color", () => {
    render(<ProgressBar progress={50} color="red" />);
    const progressBar = screen.getByRole("progressbar");
    expect(progressBar).toHaveStyle("--progressbar-custom-color: red");
  });

  it("applies custom border color", () => {
    render(<ProgressBar progress={50} borderColor="blue" />);
    const progressBar = screen.getByRole("progressbar");
    expect(progressBar).toHaveStyle("--progressbar-custom-border-color: blue");
  });

  it("generates correct SVG string for border", () => {
    render(<ProgressBar progress={50} borderColor="blue" />);
    const progressBar = screen.getByRole("progressbar");
    const style = window.getComputedStyle(progressBar);
    const borderImageSource = style.getPropertyValue("border-image-source");
    expect(borderImageSource).toContain("data:image/svg+xml,");
    expect(borderImageSource).toContain("fill%3D%22blue%22");
  });
});
