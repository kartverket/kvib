import { IconButton as KvibIconButton } from "@kvib/react/src/button";
// import { HStack } from "@kvib/react";
import { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof KvibIconButton> = {
  title: "Komponenter/Icon Button**",
  component: KvibIconButton,
  parameters: {
    docs: {
      story: { inline: true },
      canvas: { sourceState: "shown" },
    },
  },
  argTypes: {
    // icon: {
    //   description: "Icon in button",
    //   table: {
    //     type: { summary: "string" },
    //   },
    //   control: { type: "string" },
    // },
    // variant: {
    //   description: "Variant",
    //   table: {
    //     type: { summary: "primary | secondary" },
    //     defaultValue: { summary: "primary" },
    //   },
    //   options: ["primary", "secondary"],
    //   control: { type: "radio" },
    // },
    // colorScheme: {
    //   description: "Color of button",
    //   table: {
    //     type: { summary: "green | blue| gray" },
    //     defaultValue: { summary: "green" },
    //   },
    //   options: ["green", "blue", "gray"],
    //   control: { type: "radio" },
    // },
    // size: {
    //   description: "Size of Icon button",
    //   table: {
    //     type: { summary: "sm | md | lg" },
    //     defaultValue: { summary: "md" },
    //   },
    //   options: ["sm", "md", "lg"],
    //   control: { type: "radio" },
    // },
    isDisabled: {
      description: "Toggles if button should be disabled",
      table: {
        type: { summary: "boolean" },
      },
      control: "boolean",
    },
    isLoading: {
      description: "Toggles if Icon button should be loading",
      table: {
        type: { summary: "boolean" },
      },
      control: "boolean",
    },
  },
};

export default meta;
type Story = StoryObj<typeof KvibIconButton>;

export const IconButton: Story = {
  args: { variant: "solid", icon: "add" },
  render: (args) => (
    <KvibIconButton {...args}></KvibIconButton>
    /*<KvibIconButton variant="ordinary" aria-label="IconButton Large" size="lg" icon="add"></KvibIconButton>*/
  ),
};
