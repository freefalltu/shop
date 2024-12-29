import { Button } from "./Button";
import { Meta, StoryObj } from "@storybook/react";
import "./Button.module.scss";
import { fn } from "@storybook/test";

const meta: Meta<typeof Button> = {
  component: Button,
  title: "Компоненты/Button",
  tags: ["autodocs"],
  args: { onClick: fn() },
};

export default meta;

type Story = StoryObj<typeof Button>;

export const Primary: Story = {
  args: {
    children: "Кнопка",
  },
};
