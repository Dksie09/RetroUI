import React from "react";
import { Meta, StoryFn } from "@storybook/react";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuItem,
  DropdownMenuSeparator,
} from "./Dropdown";

const meta = {
  title: "Components/Dropdown",
  component: DropdownMenu,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    bg: { control: "color" },
    textColor: { control: "color" },
    borderColor: { control: "color" },
    shadowColor: { control: "color" },
  },
} satisfies Meta<typeof DropdownMenu>;

export default meta;

// Template for all Dropdown stories
const Template: StoryFn<typeof DropdownMenu> = (args) => (
  <div style={{ padding: "2rem" }}>
    <DropdownMenu {...args}>
      <DropdownMenuTrigger>Click me</DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuLabel>Account</DropdownMenuLabel>
        <DropdownMenuItem>Profile</DropdownMenuItem>
        <DropdownMenuItem>Settings</DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem>Logout</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  </div>
);

export const Default = Template.bind({});
Default.args = {};

export const CustomColors = Template.bind({});
CustomColors.args = {
  bg: "#333333",
  textColor: "#ffffff",
  borderColor: "#ff00ff",
  shadowColor: "rgba(255, 0, 255, 0.5)",
};

export const WithIcons: StoryFn<typeof DropdownMenu> = (args) => (
  <div style={{ padding: "2rem" }}>
    <DropdownMenu {...args}>
      <DropdownMenuTrigger>Options</DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuLabel>Actions</DropdownMenuLabel>
        <DropdownMenuItem>
          <span style={{ marginRight: "8px", fontSize: "12px" }}>👤</span>
          Profile
        </DropdownMenuItem>
        <DropdownMenuItem>
          <span style={{ marginRight: "8px", fontSize: "12px" }}>⚙️</span>
          Settings
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem>
          <span style={{ marginRight: "8px", fontSize: "12px" }}>🚪</span>
          Logout
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  </div>
);

export const MultipleDropdowns: StoryFn<typeof DropdownMenu> = (args) => (
  <div style={{ padding: "2rem", display: "flex", gap: "1rem" }}>
    <DropdownMenu {...args}>
      <DropdownMenuTrigger>File</DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuItem>New</DropdownMenuItem>
        <DropdownMenuItem>Open</DropdownMenuItem>
        <DropdownMenuItem>Save</DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem>Exit</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>

    <DropdownMenu {...args}>
      <DropdownMenuTrigger>Edit</DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuItem>Cut</DropdownMenuItem>
        <DropdownMenuItem>Copy</DropdownMenuItem>
        <DropdownMenuItem>Paste</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>

    <DropdownMenu {...args}>
      <DropdownMenuTrigger>Help</DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuItem>Documentation</DropdownMenuItem>
        <DropdownMenuItem>About</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  </div>
);
