import React from "react";
import { Meta, StoryFn } from "@storybook/react";
import { ProgressBar } from "./ProgressBar";

const meta = {
  title: "Components/ProgressBar",
  component: ProgressBar,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    progress: {
      control: { type: "range", min: 0, max: 100, step: 1 },
      description: "Progress value (0-100)",
    },
    size: {
      control: { type: "radio" },
      options: ["sm", "md", "lg"],
      description: "Size of the progress bar",
    },
    color: { control: "color", description: "Color of the progress indicator" },
    borderColor: {
      control: "color",
      description: "Border color of the progress bar",
    },
  },
} satisfies Meta<typeof ProgressBar>;

export default meta;

// Template for all ProgressBar stories
const Template: StoryFn<typeof ProgressBar> = (args) => (
  <div style={{ width: "300px" }}>
    <ProgressBar {...args} />
  </div>
);

export const Default = Template.bind({});
Default.args = {
  progress: 50,
};

export const Small = Template.bind({});
Small.args = {
  progress: 35,
  size: "sm",
};

export const Medium = Template.bind({});
Medium.args = {
  progress: 50,
  size: "md",
};

export const Large = Template.bind({});
Large.args = {
  progress: 65,
  size: "lg",
};

export const CustomColors = Template.bind({});
CustomColors.args = {
  progress: 75,
  color: "#c381b5",
  borderColor: "black",
};

export const Complete = Template.bind({});
Complete.args = {
  progress: 100,
  color: "#00FF00",
};
