import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "./Accordion";

describe("Accordion", () => {
  const renderAccordion = () => {
    return render(
      <Accordion data-testid="accordion">
        <AccordionItem value="item-1">
          <AccordionTrigger>Trigger 1</AccordionTrigger>
          <AccordionContent>Content 1</AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger>Trigger 2</AccordionTrigger>
          <AccordionContent>Content 2</AccordionContent>
        </AccordionItem>
      </Accordion>
    );
  };

  test("renders accordion with correct number of items", () => {
    renderAccordion();
    const triggers = screen.getAllByRole("button");
    expect(triggers).toHaveLength(2);
  });

  test("opens and closes accordion items on click", () => {
    renderAccordion();
    const trigger1 = screen.getByText("Trigger 1");
    const content1 = screen.getByText("Content 1");

    expect(content1).not.toBeVisible();
    fireEvent.click(trigger1);
    expect(content1).toBeVisible();
    fireEvent.click(trigger1);
    expect(content1).not.toBeVisible();
  });

  test("only one item can be open at a time", () => {
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

  test("applies custom styles to accordion", () => {
    render(
      <Accordion
        data-testid="accordion"
        bg="#f0f0f0"
        textColor="#333333"
        borderColor="#000000"
        shadowColor="#cccccc"
      >
        <AccordionItem value="item-1">
          <AccordionTrigger>Trigger 1</AccordionTrigger>
          <AccordionContent>Content 1</AccordionContent>
        </AccordionItem>
      </Accordion>
    );

    const accordion = screen.getByTestId("accordion");
    expect(accordion).toHaveStyle({
      "--accordion-custom-bg": "#f0f0f0",
      "--accordion-custom-text": "#333333",
      "--accordion-custom-border": "#000000",
      "--accordion-custom-shadow": "#cccccc",
    });
  });

  test("AccordionItem props override Accordion props", () => {
    render(
      <Accordion data-testid="accordion" bg="#f0f0f0" textColor="#333333">
        <AccordionItem
          value="item-1"
          data-testid="item-1"
          bg="#e0e0e0"
          textColor="#0000ff"
        >
          <AccordionTrigger>Trigger 1</AccordionTrigger>
          <AccordionContent>Content 1</AccordionContent>
        </AccordionItem>
      </Accordion>
    );

    const accordionItem = screen.getByTestId("item-1");
    expect(accordionItem).toHaveStyle({
      "--accordion-item-custom-bg": "#e0e0e0",
      "--accordion-item-custom-text": "#0000ff",
    });
  });

  test("accordion is accessible", () => {
    renderAccordion();
    const trigger1 = screen.getByText("Trigger 1");
    const trigger2 = screen.getByText("Trigger 2");

    expect(trigger1).toHaveAttribute("aria-expanded", "false");
    expect(trigger2).toHaveAttribute("aria-expanded", "false");

    fireEvent.click(trigger1);
    expect(trigger1).toHaveAttribute("aria-expanded", "true");
    expect(trigger2).toHaveAttribute("aria-expanded", "false");

    fireEvent.click(trigger2);
    expect(trigger1).toHaveAttribute("aria-expanded", "false");
    expect(trigger2).toHaveAttribute("aria-expanded", "true");
  });
});
