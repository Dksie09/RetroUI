import React from "react";
import { Meta, StoryFn } from "@storybook/react";
import { TextArea } from "./TextArea";

const meta = {
  title: "Components/TextArea",
  component: TextArea,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    bg: { control: "color" },
    textColor: { control: "color" },
    borderColor: { control: "color" },
    placeholder: { control: "text" },
    disabled: { control: "boolean" },
    value: { control: "text" },
    rows: { control: "number" },
    onChange: { action: "changed" },
  },
} satisfies Meta<typeof TextArea>;

export default meta;

// Template for all TextArea stories
const Template: StoryFn<typeof TextArea> = (args) => (
  <div style={{ width: "400px" }}>
    <TextArea {...args} />
  </div>
);

export const Default = Template.bind({});
Default.args = {
  placeholder: "Enter your text here...",
  rows: 4,
};

export const WithValue = Template.bind({});
WithValue.args = {
  value:
    "This is a retro-style textarea with pixel perfect borders. It's resizable and maintains its pixel aesthetic regardless of size.",
  rows: 5,
};

export const Disabled = Template.bind({});
Disabled.args = {
  placeholder: "This textarea is disabled",
  disabled: true,
  rows: 4,
};

export const CustomStyle = Template.bind({});
CustomStyle.args = {
  placeholder: "Custom styled textarea...",
  rows: 4,
  bg: "#FEFCD0", // light yellow
  textColor: "#000000", // black
  borderColor: "#C381B5", // primary purple
};

export const LargeTextArea = Template.bind({});
LargeTextArea.args = {
  placeholder: "This is a larger textarea for more content...",
  rows: 10,
};
