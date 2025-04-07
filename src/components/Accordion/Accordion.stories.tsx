import React, { ReactNode } from "react";
import { Meta, StoryFn } from "@storybook/react";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "./Accordion";
// We're using global CSS styling in Storybook instead of the CSS module

// Define the meta object
const meta = {
  title: "Components/Accordion",
  component: Accordion,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    bg: { control: "color" },
    textColor: { control: "color" },
    borderColor: { control: "color" },
    shadowColor: { control: "color" },
    collapsible: { control: "boolean" },
  },
} satisfies Meta<typeof Accordion>;

export default meta;

// Define a template for all stories
const Template: StoryFn<typeof Accordion> = (args) => <Accordion {...args} />;

export const Default = Template.bind({});
Default.args = {
  collapsible: true,
  children: (
    <>
      <AccordionItem value="item-1">
        <AccordionTrigger>First Item</AccordionTrigger>
        <AccordionContent>
          <p>This is the content for the first accordion item.</p>
          <p>You can put any React components or HTML here.</p>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger>Second Item</AccordionTrigger>
        <AccordionContent>
          <p>This is the content for the second accordion item.</p>
          <p>The accordion can be collapsed if the collapsible prop is true.</p>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-3">
        <AccordionTrigger>Third Item</AccordionTrigger>
        <AccordionContent>
          <p>This is the content for the third accordion item.</p>
          <p>
            You can customize colors using the bg, textColor, borderColor, and
            shadowColor props.
          </p>
        </AccordionContent>
      </AccordionItem>
    </>
  ),
};

export const CustomColors = Template.bind({});
CustomColors.args = {
  collapsible: true,
  bg: "#fefcd0",
  textColor: "black",
  borderColor: "black",
  shadowColor: "#c381b5",
  children: (
    <>
      <AccordionItem value="item-1">
        <AccordionTrigger>Retro Terminal Style</AccordionTrigger>
        <AccordionContent>
          <p>
            This accordion has a custom retro terminal style with green text on
            dark background.
          </p>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger>Customizable</AccordionTrigger>
        <AccordionContent>
          <p>You can customize the appearance using the color props.</p>
        </AccordionContent>
      </AccordionItem>
    </>
  ),
};

export const MultipleOpen = Template.bind({});
MultipleOpen.args = {
  collapsible: false,
  children: (
    <>
      <AccordionItem value="item-1">
        <AccordionTrigger>FAQ Item 1</AccordionTrigger>
        <AccordionContent>
          <p>With collapsible=false, multiple items can be open at once.</p>
          <p>Try clicking several headers to see them all open.</p>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger>FAQ Item 2</AccordionTrigger>
        <AccordionContent>
          <p>Each item can be toggled independently.</p>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-3">
        <AccordionTrigger>FAQ Item 3</AccordionTrigger>
        <AccordionContent>
          <p>This mode is useful for FAQ pages or documentation.</p>
        </AccordionContent>
      </AccordionItem>
    </>
  ),
};
