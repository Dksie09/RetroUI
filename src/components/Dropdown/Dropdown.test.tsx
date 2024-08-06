import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "./Dropdown";

describe("Dropdown", () => {
  const setup = () => {
    render(
      <DropdownMenu>
        <DropdownMenuTrigger>Open</DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuItem>Item 1</DropdownMenuItem>
          <DropdownMenuItem>Item 2</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    );
  };

  test("renders the dropdown trigger", () => {
    setup();
    expect(screen.getByText("Open")).toBeInTheDocument();
  });

  test("opens the dropdown when trigger is clicked", () => {
    setup();
    fireEvent.click(screen.getByText("Open"));
    expect(screen.getByText("Item 1")).toBeInTheDocument();
    expect(screen.getByText("Item 2")).toBeInTheDocument();
  });

  test("closes the dropdown when clicked outside", () => {
    setup();
    fireEvent.click(screen.getByText("Open"));
    expect(screen.getByText("Item 1")).toBeInTheDocument();

    fireEvent.mouseDown(document.body);
    expect(screen.queryByText("Item 1")).not.toBeInTheDocument();
  });

  test("keeps dropdown open when clicking inside", () => {
    setup();
    fireEvent.click(screen.getByText("Open"));

    const dropdownContent = screen.getByText("Item 1").parentElement;
    if (dropdownContent) {
      fireEvent.mouseDown(dropdownContent);
    }

    expect(screen.getByText("Item 1")).toBeInTheDocument();
  });

  test("applies custom styles", () => {
    render(
      <DropdownMenu
        bg="red"
        textColor="white"
        borderColor="black"
        shadowColor="gray"
      >
        <DropdownMenuTrigger>Open</DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuItem>Item 1</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    );

    const dropdown = screen.getByText("Open").closest(".dropdownMenu");
    expect(dropdown).toHaveStyle({
      "--dropdown-custom-bg": "red",
      "--dropdown-custom-text": "white",
      "--dropdown-custom-border": "black",
      "--dropdown-custom-shadow": "gray",
    });
  });
});
