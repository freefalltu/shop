import { Input } from "./Input";
import { Meta, StoryObj } from "@storybook/react";
import "./Input.module.scss";
import { fn, userEvent, within } from "@storybook/test";

const meta: Meta<typeof Input> = {
  component: Input,
  title: "Компоненты/Input",
  tags: ["autodocs"],
  args: { onChange: fn() },
};

export default meta;

type Story = StoryObj<typeof Input>;

export const Simple: Story = {
  args: {
    placeholder: "Search by title",
  },
};

export const SimpleFilled: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    await userEvent.type(
      canvas.getByPlaceholderText("Search by title"),
      "Apple",
      { delay: 200 },
    );
  },
  args: {
    placeholder: "Search by title",
  },
};
