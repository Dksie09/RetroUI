import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "./DropdownMenu";

describe("DropdownMenu Component", () => {
  const renderDropdown = () => {
    render(
      <DropdownMenu>
        <DropdownMenuTrigger>Open</DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuItem>Profile</DropdownMenuItem>
          <DropdownMenuItem>Billing</DropdownMenuItem>
          <DropdownMenuItem>Team</DropdownMenuItem>
          <DropdownMenuItem>Subscription</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    );
  };

  test("renders dropdown menu structure correctly", () => {
    renderDropdown();

    expect(screen.getByText("Open")).toBeInTheDocument();
    expect(screen.getByText("Profile")).toBeInTheDocument();
    expect(screen.getByText("Billing")).toBeInTheDocument();
    expect(screen.getByText("Team")).toBeInTheDocument();
    expect(screen.getByText("Subscription")).toBeInTheDocument();
  });

  test("DropdownMenuTrigger has correct class", () => {
    renderDropdown();

    const trigger = screen.getByText("Open");
    expect(trigger).toHaveClass("pixel-dropdown-trigger");
  });

  test("DropdownMenuContent has correct class", () => {
    renderDropdown();

    const content = screen
      .getByText("Profile")
      .closest(".pixel-dropdown-content");
    expect(content).toBeInTheDocument();
  });

  test("DropdownMenuItem has correct class", () => {
    renderDropdown();

    const items = screen.getAllByRole("link");
    items.forEach((item) => {
      expect(item).toHaveClass("pixel-dropdown-item");
    });
  });

  test("Dropdown content is initially hidden", () => {
    renderDropdown();

    const content = screen
      .getByText("Profile")
      .closest(".pixel-dropdown-content");
    expect(content).toHaveStyle("display: none");
  });

  test("Dropdown content is visible on hover", () => {
    renderDropdown();

    const dropdown = screen.getByText("Open").closest(".pixel-dropdown");
    fireEvent.mouseEnter(dropdown!);

    const content = screen
      .getByText("Profile")
      .closest(".pixel-dropdown-content");
    expect(content).toHaveStyle("display: block");
  });

  test("Arrow icon rotates on hover", () => {
    renderDropdown();

    const dropdown = screen.getByText("Open").closest(".pixel-dropdown");
    const arrow = screen.getByAltText("Toggle Dropdown");

    fireEvent.mouseEnter(dropdown!);

    expect(arrow).toHaveStyle("transform: rotate(90deg)");
  });
});
