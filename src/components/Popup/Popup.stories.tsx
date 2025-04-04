import React, { useState } from "react";
import { Meta, StoryFn } from "@storybook/react";
import { Popup } from "./Popup";
import { Button } from "../Button/Button";

const meta = {
  title: "Components/Popup",
  component: Popup,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    isOpen: { control: "boolean" },
    title: { control: "text" },
    closeButtonText: { control: "text" },
    bg: { control: "color" },
    baseBg: { control: "color" },
    overlayBg: { control: "color" },
    textColor: { control: "color" },
    borderColor: { control: "color" },
    onClose: { action: "closed" },
  },
} satisfies Meta<typeof Popup>;

export default meta;

// Base Template with a trigger button
const Template: StoryFn<typeof Popup> = (args) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div style={{ padding: "2rem" }}>
      <Button onClick={() => setIsOpen(true)}>Open Popup</Button>
      <Popup {...args} isOpen={isOpen} onClose={() => setIsOpen(false)}>
        <p>This is the content of the popup!</p>
        <p>You can put anything you want here.</p>
      </Popup>
    </div>
  );
};

export const Default = Template.bind({});
Default.args = {
  title: "Basic Popup",
};

export const Colored: StoryFn<typeof Popup> = (args) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div style={{ padding: "2rem" }}>
      <Button
        onClick={() => setIsOpen(true)}
        bg="#333333"
        textColor="#ffffff"
        borderColor="#ff00ff"
      >
        Open Colored Popup
      </Button>
      <Popup {...args} isOpen={isOpen} onClose={() => setIsOpen(false)}>
        <p>This is the content of the popup!</p>
        <p>You can put anything you want here.</p>
      </Popup>
    </div>
  );
};
Colored.args = {
  title: "Colored Popup",
  bg: "#333333",
  textColor: "#ffffff",
  borderColor: "#ff00ff",
  overlayBg: "rgba(0, 0, 0, 0.7)",
};

export const FormPopup: StoryFn<typeof Popup> = (args) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div style={{ padding: "2rem" }}>
      <Button onClick={() => setIsOpen(true)}>Login</Button>
      <Popup {...args} isOpen={isOpen} onClose={() => setIsOpen(false)}>
        <div style={{ padding: "1rem", minWidth: "300px" }}>
          <form onSubmit={(e) => e.preventDefault()}>
            <div style={{ marginBottom: "1rem" }}>
              <label style={{ display: "block", marginBottom: "0.5rem" }}>
                Username
              </label>
              <input
                type="text"
                style={{
                  width: "100%",
                  padding: "0.5rem",
                  fontFamily: "Minecraft, sans-serif",
                  border: "2px solid #000",
                }}
              />
            </div>
            <div style={{ marginBottom: "1rem" }}>
              <label style={{ display: "block", marginBottom: "0.5rem" }}>
                Password
              </label>
              <input
                type="password"
                style={{
                  width: "100%",
                  padding: "0.5rem",
                  fontFamily: "Minecraft, sans-serif",
                  border: "2px solid #000",
                }}
              />
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                marginTop: "1rem",
              }}
            >
              <Button onClick={() => setIsOpen(false)}>Login</Button>
            </div>
          </form>
        </div>
      </Popup>
    </div>
  );
};
FormPopup.args = {
  title: "Login",
};
