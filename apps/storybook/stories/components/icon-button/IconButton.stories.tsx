import { IconButton as KvibIconButton, HStack } from "@kvib/react/src";

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
    size: {
      description: "Size of Icon button",
      table: {
        type: { summary: " xs| sm | md | lg" },
        defaultValue: { summary: "md" },
      },
      options: ["xs", "sm", "md", "lg"],
      control: { type: "radio" },
    },
    isDisabled: {
      description: "If true, the button will be disabled.",
      table: {
        type: { summary: Boolean },
        defaultValue: { summary: false },
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
  args: { icon: "add", isDisabled: false, "aria-label": "IconButton default" },
  render: (args) => (
    <KvibIconButton {...args}></KvibIconButton>
    /*<KvibIconButton variant="ordinary" aria-label="IconButton Large" size="lg" icon="add"></KvibIconButton>*/
  ),
};

export const IconButtonSizes: Story = {
  args: { icon: "add", isDisabled: false },
  render: (args) => (
    <HStack>
      <KvibIconButton {...args} aria-label="IconButton Large" size="xs"></KvibIconButton>
      <KvibIconButton {...args} aria-label="IconButton Large" size="sm"></KvibIconButton>
      <KvibIconButton {...args} aria-label="IconButton Large" size="md"></KvibIconButton>
      <KvibIconButton {...args} aria-label="IconButton Large" size="lg"></KvibIconButton>
    </HStack>
  ),
};

export const IconButtonVariants: Story = {
  args: { icon: "add", isDisabled: false },
  render: (args) => (
    <HStack>
      <KvibIconButton {...args} aria-label="IconButton solid" variant="solid"></KvibIconButton>
      <KvibIconButton {...args} aria-label="IconButton outline" variant="outline"></KvibIconButton>
    </HStack>
  ),
};

// export const IconButtonBlue: Story = {
//   args: { icon: "add" ,isDisabled: false, colorScheme:"blue"},
//   render: (args) => (
//       <HStack>
//         <KvibIconButton {...args} aria-label="IconButton green solid" variant="solid"></KvibIconButton>
//         <KvibIconButton {...args} aria-label="IconButton green outline" variant="outline"></KvibIconButton>
//       </HStack>
//   ),
// };
