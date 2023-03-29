import { Button, ButtonProps } from "@kvib/react/src/components/Button";
import { StoryFn, Meta } from "@storybook/react";

const meta: Meta<typeof Button> = {
  title: "Komponenter/Knapper",
  component: Button,
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
      options: ["green", "blue"],
      control: { type: "radio" },
    },
    size: {
      options: ["sm", "md"],
      control: { type: "radio" },
    },
    isDisabled: {
      control: "boolean",
    },
  },
};

export default meta;

const Template: StoryFn<ButtonProps> = (args) => {
  const { children } = args;

  return <Button {...args}>{children}</Button>;
};

export const Component = Template.bind({});
Component.args = {
  children: "Klikk her",
  variant: "primary",
  colorScheme: "green",
  size: "md",
  isDisabled: false,
  isLoading: false,
};

Component.storyName = "Button";
