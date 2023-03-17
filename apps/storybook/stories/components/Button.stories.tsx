import React from "react";
import { Button, ButtonProps } from "@kvib/react/src/button";
import { Meta, Story } from "@storybook/react";

export default {
  title: "Komponenter/Knapper/Button",
  argTypes: {
    children: {
      defaultValue: "",
      control: "text",
    },
    variant: {
      options: ["primary", "secondary", "tertiary"],
      control: { type: "radio" },
    },
    colorScheme: {
      control: {
        type: "radio",
        options: ["green", "blue"],
      },
    },
    size: {
      defaultValue: "",
      type: { name: "string", required: false },
      control: {
        type: "radio",
        options: ["sm", "md"],
      },
    },
    isDisabled: {
      control: "boolean",
    },
    isLoading: {
      control: "boolean",
    },
    loadingText: {
      defaultValue: "",
      control: "text",
    },
    leftIcon: {
      defaultValue: "",
      control: "text",
    },
    rightIcon: {
      defaultValue: "",
      control: "text",
    },
  },
} as Meta;

const Template: Story<ButtonProps> = (args) => {
  const { children } = args;

  return <Button {...args}>{children}</Button>;
};

export const Component = Template.bind({});
Component.args = {
  children: "Klikk på meg",
  variant: "primary",
  colorScheme: "green",
  size: "md",
  isDisabled: false,
  isLoading: false,
};

Component.storyName = "Button";
