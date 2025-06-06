import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "./Accordion";

describe("Accordion", () => {
  const renderAccordion = (props = {}) => {
    return render(
      <Accordion {...props}>
        <AccordionItem value="item1">
          <AccordionTrigger>Trigger 1</AccordionTrigger>
          <AccordionContent>Content 1</AccordionContent>
        </AccordionItem>
        <AccordionItem value="item2">
          <AccordionTrigger>Trigger 2</AccordionTrigger>
          <AccordionContent>Content 2</AccordionContent>
        </AccordionItem>
      </Accordion>
    );
  };

  it("renders without crashing", () => {
    renderAccordion();
    expect(screen.getByText("Trigger 1")).toBeInTheDocument();
    expect(screen.getByText("Trigger 2")).toBeInTheDocument();
  });

  it("expands and collapses items when clicked", () => {
    renderAccordion({ collapsible: true }); // Explicitly set collapsible to true

    const trigger1 = screen.getByText("Trigger 1");
    const content1 = screen.getByText("Content 1");

    // Check initial state - should be collapsed with collapsible=true
    expect(content1).not.toBeVisible();

    fireEvent.click(trigger1);
    expect(content1).toBeVisible();

    fireEvent.click(trigger1);
    expect(content1).not.toBeVisible();
  });

  it("only allows one item to be expanded at a time by default", () => {
    renderAccordion();

    const trigger1 = screen.getByText("Trigger 1");
    const trigger2 = screen.getByText("Trigger 2");
    const content1 = screen.getByText("Content 1");
    const content2 = screen.getByText("Content 2");

    fireEvent.click(trigger1);
    expect(content1).toBeVisible();
    expect(content2).not.toBeVisible();

    fireEvent.click(trigger2);
    expect(content1).not.toBeVisible();
    expect(content2).toBeVisible();
  });

  it("applies custom styles when provided", () => {
    const { container } = renderAccordion({
      bg: "red",
      textColor: "white",
      borderColor: "blue",
      shadowColor: "green",
    });

    const accordion = container.firstChild as HTMLElement;
    expect(accordion).toHaveStyle({
      "--accordion-custom-bg": "red",
      "--accordion-custom-text": "white",
      "--accordion-custom-border": "blue",
      "--accordion-custom-shadow": "green",
    });
  });

  it("applies custom class when provided", () => {
    const { container } = renderAccordion({ className: "custom-class" });
    expect(container.firstChild).toHaveClass("custom-class");
  });

  it("renders arrow icon and rotates it when item is active", () => {
    renderAccordion({ collapsible: true }); // Set collapsible to true

    const trigger1 = screen.getByText("Trigger 1");
    const arrow = trigger1.querySelector(".accordionArrow") as HTMLElement;

    // All items should start collapsed with collapsible=true
    expect(arrow).toHaveStyle("transform: rotate(0deg)");

    fireEvent.click(trigger1);
    expect(arrow).toHaveStyle("transform: rotate(90deg)");
  });

  it("allows all items to be collapsed when collapsible is true", () => {
    renderAccordion({ collapsible: true });

    const trigger1 = screen.getByText("Trigger 1");
    const trigger2 = screen.getByText("Trigger 2");
    const content1 = screen.getByText("Content 1");
    const content2 = screen.getByText("Content 2");

    fireEvent.click(trigger1);
    expect(content1).toBeVisible();
    expect(content2).not.toBeVisible();

    fireEvent.click(trigger1);
    expect(content1).not.toBeVisible();
    expect(content2).not.toBeVisible();

    fireEvent.click(trigger2);
    expect(content1).not.toBeVisible();
    expect(content2).toBeVisible();

    fireEvent.click(trigger2);
    expect(content1).not.toBeVisible();
    expect(content2).not.toBeVisible();
  });

  it("allows independent toggling of items when collapsible is false", () => {
    renderAccordion({ collapsible: false });

    const trigger1 = screen.getByText("Trigger 1");
    const trigger2 = screen.getByText("Trigger 2");
    const content1 = screen.getByText("Content 1");
    const content2 = screen.getByText("Content 2");

    // Initially no items are visible
    expect(content1).not.toBeVisible();
    expect(content2).not.toBeVisible();

    // Click first item to open it
    fireEvent.click(trigger1);
    expect(content1).toBeVisible();
    expect(content2).not.toBeVisible();

    // Click first item again - it should close with the new behavior
    fireEvent.click(trigger1);
    expect(content1).not.toBeVisible();
    expect(content2).not.toBeVisible();

    // Open both items
    fireEvent.click(trigger1);
    fireEvent.click(trigger2);
    expect(content1).toBeVisible();
    expect(content2).toBeVisible();
  });

  it("sets aria-expanded attribute correctly", () => {
    renderAccordion({ collapsible: true }); // Set collapsible to true

    const trigger1 = screen.getByText("Trigger 1");
    const trigger2 = screen.getByText("Trigger 2");

    // All items should start with aria-expanded="false"
    expect(trigger1).toHaveAttribute("aria-expanded", "false");
    expect(trigger2).toHaveAttribute("aria-expanded", "false");

    fireEvent.click(trigger1);
    expect(trigger1).toHaveAttribute("aria-expanded", "true");
    expect(trigger2).toHaveAttribute("aria-expanded", "false");

    fireEvent.click(trigger2);
    expect(trigger1).toHaveAttribute("aria-expanded", "false");
    expect(trigger2).toHaveAttribute("aria-expanded", "true");
  });

  it("allows multiple items to be expanded when collapsible is false", () => {
    renderAccordion({ collapsible: false });

    const trigger1 = screen.getByText("Trigger 1");
    const trigger2 = screen.getByText("Trigger 2");
    const content1 = screen.getByText("Content 1");
    const content2 = screen.getByText("Content 2");

    // Initially no items are visible
    expect(content1).not.toBeVisible();
    expect(content2).not.toBeVisible();

    // Click first item
    fireEvent.click(trigger1);
    expect(content1).toBeVisible();
    expect(content2).not.toBeVisible();

    // Click second item - both should be visible
    fireEvent.click(trigger2);
    expect(content1).toBeVisible();
    expect(content2).toBeVisible();

    // Click first item again - it should close
    fireEvent.click(trigger1);
    expect(content1).not.toBeVisible();
    expect(content2).toBeVisible();
  });
});
