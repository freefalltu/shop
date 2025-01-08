import { ComponentProps } from "react";
import { Text } from "./Text";
import { Meta, StoryObj } from "@storybook/react";

type StoryProps = ComponentProps<typeof Text>;

const meta: Meta<StoryProps> = {
  component: Text,
  title: "Компоненты/Text",
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<StoryProps>;

export const Primary: Story = {
  args: {
    children: "Текст",
  },
};
