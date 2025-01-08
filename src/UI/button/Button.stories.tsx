import { Button } from "./Button";
import { Meta, StoryObj } from "@storybook/react";
import "./Button.module.scss";
import { fn } from "@storybook/test";
import { ComponentProps } from "react";
import img from "img/icon-cart.svg";
import cl from "UI/counter/Counter.module.scss";

type StoryProps = ComponentProps<typeof Button>;

const meta: Meta<StoryProps> = {
  component: Button,
  title: "Компоненты/Button",
  tags: ["autodocs"],
  args: { onClick: fn() },
};

export default meta;

type Story = StoryObj<StoryProps>;

export const Primary: Story = {
  args: {
    children: "Кнопка",
  },
};

export const Disabled: Story = {
  args: {
    children: "Кнопка",
    view: "text",
    size: "small",
    type: "myBtnTextDisabled",
  },
};

export const Cart: Story = {
  render: () => {
    return (
      <Button type="myBtnIcon" view="icon" size="small">
        <img src={img} alt="" />
      </Button>
    );
  },
};

export const Plus: Story = {
  render: () => {
    return (
      <Button type="myBtnIcon" view="icon" size="small">
        <div className={cl.plus} />
      </Button>
    );
  },
};

export const Minus: Story = {
  render: () => {
    return (
      <Button type="myBtnIcon" view="icon" size="small">
        <div className={cl.minus} />
      </Button>
    );
  },
};
