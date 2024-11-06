import { Meta, StoryObj } from "@storybook/react";
import Button from "../components/button";
import { fn } from "@storybook/test";

const meta = {
  title: "custom Button",
  component: Button,
  argTypes: {
    backgroundColor: { control: "color" },
  },
  args: { onClick: fn() },
} satisfies Meta<typeof Button>;

export default meta;

type Story = StoryObj<typeof meta>;
export const Primary: Story = {
  args: {
    btnText: "button",
    backgroundColor: "blue",
  },
};
