import { ComponentProps } from "react";
import { Counter } from "./Counter";
import { Meta, StoryObj } from "@storybook/react";

type StoryProps = ComponentProps<typeof Counter>;

const meta: Meta<StoryProps> = {
  component: Counter,
  title: "Компоненты/Counter",
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<StoryProps>;

export const Primary: Story = {
  args: {
    children: 5,
  },
};
