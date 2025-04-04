import React from "react";
import { Meta, StoryFn } from "@storybook/react";
import { Bubble } from "./Bubble";

const meta = {
  title: "Components/Bubble",
  component: Bubble,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    direction: {
      control: { type: "radio" },
      options: ["left", "right"],
      description: "Direction of the speech bubble tail",
    },
    borderColor: {
      control: "color",
      description: "Border color of the bubble",
    },
    bg: { control: "color", description: "Background color of the bubble" },
    textColor: {
      control: "color",
      description: "Text color inside the bubble",
    },
    onClick: { action: "clicked" },
  },
} satisfies Meta<typeof Bubble>;

export default meta;

// Template for all Bubble stories
const Template: StoryFn<typeof Bubble> = (args) => (
  <div style={{ width: "300px", height: "200px" }}>
    <Bubble {...args} />
  </div>
);

export const LeftDirection = Template.bind({});
LeftDirection.args = {
  children: "This is a speech bubble pointing to the left",
  direction: "left",
};

export const RightDirection = Template.bind({});
RightDirection.args = {
  children: "This is a speech bubble pointing to the right",
  direction: "right",
};

export const CustomColors = Template.bind({});
CustomColors.args = {
  children: "Custom colored speech bubble",
  direction: "left",
  bg: "#ddceb4",
  textColor: "#30210b",
  borderColor: "#30210b",
};

export const WithHTML = Template.bind({});
WithHTML.args = {
  children: (
    <>
      <h3 style={{ fontWeight: "bold", marginBottom: "0.5rem" }}>
        Speech Bubble Title
      </h3>
      <p>You can add any React components inside the bubble.</p>
    </>
  ),
  direction: "right",
};
