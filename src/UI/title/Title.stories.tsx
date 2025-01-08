import { ComponentProps } from "react";
import { Title } from "./Title";
import { Meta, StoryObj } from "@storybook/react";

type StoryProps = ComponentProps<typeof Title>;

const meta: Meta<StoryProps> = {
  component: Title,
  title: "Компоненты/Title",
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<StoryProps>;

export const Primary: Story = {
  args: {
    children: "Заголовок",
  },
};
