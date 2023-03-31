import { Button, ButtonProps } from "@kvib/react/src/components/Button";
import { StoryFn, Meta } from "@storybook/react";
import { Delete } from "@mui/icons-material";

const meta: Meta<typeof Button> = {
  title: "Komponenter/Knapper",
  component: Button,
  parameters: {
    docs: {
      story: { inline: true },
      canvas: { sourceState: "shown" },
    },
  },
  argTypes: {
    children: {
      description: "Text in button",
      table: {
        type: { summary: "string" },
      },
      control: "text",
    },
    variant: {
      description: "Variant",
      table: {
        type: { summary: "primary | secondary | tertiary" },
      },
      options: ["primary", "secondary", "tertiary"],
      control: { type: "radio" },
    },
    colorScheme: {
      description: "Color of button",
      table: {
        type: { summary: "green | blue" },
      },
      options: ["green", "blue"],
      control: { type: "radio" },
    },
    size: {
      description: "Size of button",
      table: {
        type: { summary: "sm | md | lg" },
      },
      options: ["sm", "md", "lg"],
      control: { type: "radio" },
    },
    isDisabled: {
      description: "Toggles if button should be disabled",
      table: {
        type: { summary: "boolean" },
      },
      control: "boolean",
    },
    isLoading: {
      description: "Toggles if button should be loading",
      table: {
        type: { summary: "boolean" },
      },
      control: "boolean",
    },
  },
};

export default meta;

const Template: StoryFn<ButtonProps> = (args) => {
  const { children } = args;

  return <Button {...args}>{children}</Button>;
};

export const Default = Template.bind({});
Default.args = {
  children: "Klikk her",
  variant: "primary",
  colorScheme: "green",
  size: "md",
  isDisabled: false,
  isLoading: false,
};

Default.storyName = "Standard";

export const WithIcon = Template.bind({});
WithIcon.args = {
  children: "Knapp med ikon",
  leftIcon: <Delete />,
};

WithIcon.storyName = "Med Ikon";
