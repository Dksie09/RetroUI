import React from "react";
import { Meta, StoryFn } from "@storybook/react";
import { Input } from "./Input";

const meta = {
  title: "Components/Input",
  component: Input,
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
    type: {
      control: { type: "select" },
      options: ["text", "password", "email", "number", "tel", "url"],
    },
    onChange: { action: "changed" },
    onIconClick: { action: "icon clicked" },
  },
} satisfies Meta<typeof Input>;

export default meta;

// Template for all Input stories
const Template: StoryFn<typeof Input> = (args) => (
  <div style={{ width: "300px" }}>
    <Input {...args} />
  </div>
);

export const Default = Template.bind({});
Default.args = {
  placeholder: "Enter text...",
};

export const WithValue = Template.bind({});
WithValue.args = {
  value: "Hello RetroUI",
  placeholder: "Enter text...",
};

export const Password = Template.bind({});
Password.args = {
  type: "password",
  placeholder: "Enter password...",
  value: "secretpassword",
};

export const Disabled = Template.bind({});
Disabled.args = {
  placeholder: "Disabled input",
  disabled: true,
};

export const WithIcon = Template.bind({});
WithIcon.args = {
  placeholder: "Search...",
  icon: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNCAyNCI+PHBhdGggZD0iTTE1LjUgMTRoLS43OWwtLjI4LS4yN0MxNS40MSAxMi41OSAxNiAxMS4xMSAxNiA5LjUgMTYgNS45MSAxMy4wOSAzIDkuNSAzUzMgNS45MSAzIDkuNSA1LjkxIDE2IDkuNSAxNmMxLjYxIDAgMy4wOS0uNTkgNC4yMy0xLjU3bC4yNy4yOHYuNzlsNSA0Ljk5TDIwLjQ5IDE5bC00Ljk5LTV6bS02IDBDNy4wMSAxNCA1IDExLjk5IDUgOS41UzcuMDEgNSA5LjUgNSAxNCA3LjAxIDE0IDkuNSAxMS45OSAxNCA5LjUgMTR6Ii8+PC9zdmc+",
  onIconClick: () => alert("Search clicked"),
};

export const Colored = Template.bind({});
Colored.args = {
  placeholder: "Colored theme...",
  bg: "#FEFCD0", // light yellow
  textColor: "#000000",
  borderColor: "#C381B5", // primary purple
};
