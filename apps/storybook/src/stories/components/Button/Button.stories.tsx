import React from "react";
import { Button, ButtonProps } from "@kartverket/kvib-react-button/src/Button";
import { Meta, Story } from "@storybook/react";

export default {
  title: "Komponenter/Knapper/Button",
  argTypes: {
    variant: {
      options: ["primary", "secondary"],
      control: { type: "radio" },
    },
    size: {
      control: {
        type: "radio",
        options: ["sm", "md"],
      },
    },
  },
} as Meta;

const Template: Story<ButtonProps> = (args) => {
  return <Button {...args}>Hello world</Button>;
};

export const Component = Template.bind({});
Component.args = {
  variant: "primary",
  size: "sm",
};

Component.storyName = "Button";
