import React from "react";
import {
  IconButton,
  IconButtonProps,
} from "@kartverket/kvib-react-button/src/IconButton";
import { Meta, Story } from "@storybook/react";

export default {
  title: "Komponenter/Knapper/IconButton",
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

const Template: Story<IconButtonProps> = (args) => {
  return <IconButton {...args}>Icon goes here</IconButton>;
};

export const Component = Template.bind({});
Component.args = {
  variant: "primary",
  size: "sm",
};

Component.storyName = "Icon Button";
