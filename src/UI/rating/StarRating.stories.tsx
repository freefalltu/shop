import { Meta, StoryObj } from "@storybook/react";
import { ComponentProps } from "react";
import { StarRating } from "./StarRating";

type StoryProps = ComponentProps<typeof StarRating>;

const meta: Meta<StoryProps> = {
  component: StarRating,
  title: "Компоненты/StarRating",
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<StoryProps>;

export const Primary: Story = {
  args: {},
};
