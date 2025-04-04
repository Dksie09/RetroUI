import React from "react";
import { Meta, StoryFn } from "@storybook/react";
import { Button } from "./Button";

// Import the button CSS in preview.ts

const meta = {
  title: "Components/Button",
  component: Button,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    bg: { control: "color" },
    textColor: { control: "color" },
    shadow: { control: "color" },
    borderColor: { control: "color" },
    onClick: { action: "clicked" },
  },
} satisfies Meta<typeof Button>;

export default meta;

// Template for all button stories
const Template: StoryFn<typeof Button> = (args) => <Button {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: "Default Button",
  className: "!p-0",
};

export const Coloured = Template.bind({});
Coloured.args = {
  children: "Coloured Button",
  bg: "#fefcd0",
  textColor: "black",
  borderColor: "black",
  shadow: "#c381b5",
  className: "!p-0",
};
