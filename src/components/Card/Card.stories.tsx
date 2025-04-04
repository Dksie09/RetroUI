import React from "react";
import { Meta, StoryFn } from "@storybook/react";
import { Card } from "./Card";

const meta = {
  title: "Components/Card",
  component: Card,
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
} satisfies Meta<typeof Card>;

export default meta;

// Template for all card stories
const Template: StoryFn<typeof Card> = (args) => <Card {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: (
    <div style={{ padding: "1rem" }}>
      <h3 style={{ fontWeight: "bold", marginBottom: "0.5rem" }}>Card Title</h3>
      <p>This is a default card with standard styling.</p>
    </div>
  ),
};

export const Colored = Template.bind({});
Colored.args = {
  bg: "#fefcd0",
  textColor: "black",
  borderColor: "black",
  shadowColor: "#c381b5",
  className: "p-4 text-center",
  children: (
    <div style={{ padding: "1rem" }}>
      <h3 style={{ fontWeight: "bold", marginBottom: "0.5rem" }}>
        Colored Card
      </h3>
      <p>This card has custom colors.</p>
    </div>
  ),
};

export const Complex = Template.bind({});
Complex.args = {
  children: (
    <div style={{ padding: "1rem", maxWidth: "300px" }}>
      <h3 style={{ fontWeight: "bold", marginBottom: "0.5rem" }}>
        Game Item Card
      </h3>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          marginBottom: "0.5rem",
        }}
      >
        <div
          style={{
            width: "50px",
            height: "50px",
            backgroundColor: "#eee",
            marginRight: "0.5rem",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          🎮
        </div>
        <div>
          <p style={{ fontWeight: "bold" }}>Pixel Sword</p>
          <p style={{ fontSize: "0.8rem" }}>Legendary Item</p>
        </div>
      </div>
      <p style={{ marginTop: "0.5rem" }}>
        A mighty sword forged in pixel fire. Deals +10 damage to digital
        enemies.
      </p>
    </div>
  ),
};
