import { Button } from "./Button";
import { Meta, StoryObj } from "@storybook/react";
import "./Button.module.scss";

const meta: Meta<typeof Button> = {
  component: Button,
  title: "Компоненты/Button",
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof Button>;

export const Primary: Story = {
  args: {
    children: "Кнопка",
  },
};
