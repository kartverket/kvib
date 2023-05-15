import { Radio, RadioProps } from "@Kvib/react/src/components/Radio/Radio";
import { StoryFn, Meta } from "@storybook/react";

const meta: Meta<typeof Radio> = {
  title: "Komponenter/RadioKnapper",
  component: Radio,
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
  },
};

export default meta;

const Template: StoryFn<RadioProps> = (args) => {
  const { children } = args;

  return <Radio {...args}>{children}</Radio>;
};

export const Default = Template.bind({});
Default.args = {
  children: "test",
  colorScheme: "green",
  size: "lg",
  isDisabled: false,
};

Default.storyName = "Radioknapp";
