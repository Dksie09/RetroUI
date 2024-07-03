import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import { Popup } from "./Popup";

describe("Popup Component", () => {
  const onCloseMock = jest.fn();

  afterEach(() => {
    jest.clearAllMocks();
  });

  test("renders nothing when isOpen is false", () => {
    render(
      <Popup isOpen={false} onClose={onCloseMock}>
        <p>Test content</p>
      </Popup>
    );
    expect(screen.queryByText("Test content")).not.toBeInTheDocument();
  });

  test("renders content when isOpen is true", () => {
    render(
      <Popup isOpen={true} onClose={onCloseMock}>
        <p>Test content</p>
      </Popup>
    );
    expect(screen.getByText("Test content")).toBeInTheDocument();
  });

  test("calls onClose when clicking outside the popup", () => {
    render(
      <Popup isOpen={true} onClose={onCloseMock}>
        <p>Test content</p>
      </Popup>
    );
    fireEvent.click(
      screen.getByText("Test content").parentElement!.parentElement!
        .parentElement!.parentElement!
    );
    expect(onCloseMock).toHaveBeenCalledTimes(1);
  });

  test("does not call onClose when clicking inside the popup", () => {
    render(
      <Popup isOpen={true} onClose={onCloseMock}>
        <p>Test content</p>
      </Popup>
    );
    fireEvent.click(screen.getByText("Test content"));
    expect(onCloseMock).not.toHaveBeenCalled();
  });

  test("renders title when provided", () => {
    render(
      <Popup isOpen={true} onClose={onCloseMock} title="Test Title">
        <p>Test content</p>
      </Popup>
    );
    expect(screen.getByText("Test Title")).toBeInTheDocument();
  });

  test("renders custom close button text", () => {
    render(
      <Popup isOpen={true} onClose={onCloseMock} closeButtonText="Close">
        <p>Test content</p>
      </Popup>
    );
    expect(screen.getByText("Close")).toBeInTheDocument();
  });
});
