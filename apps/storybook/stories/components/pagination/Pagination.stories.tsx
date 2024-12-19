import {
  HStack,
  Pagination,
  PaginationItems,
  PaginationNextTrigger,
  PaginationPrevTrigger,
  PaginationProps,
} from "@kvib/react";

import { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof Pagination> = {
  title: "Komponenter/Pagination",
  component: Pagination,
  parameters: {
    docs: {
      story: { inline: true },
      canvas: { sourceState: "hidden" },
    },
    a11y: {
      // This option disables all a11y checks on this story
      disable: true,
    },
  },
  argTypes: {
    size: {
      description: "The size of the pagination component.",
      table: {
        type: { summary: "'sm' | 'md' | 'lg'" },
        defaultValue: { summary: "md" },
      },
      control: "radio",
      options: ["sm", "md", "lg"],
    },
    variant: {
      description: "The variant of the pagination component.",
      table: {
        type: { summary: "'solid' | 'outline'" },
        defaultValue: { summary: "outline" },
      },
      control: "radio",
      options: ["solid", "outline"],
    },
    defaultPage: {
      description: "The default page number.",
      table: {
        type: { summary: "number" },
      },
      control: "number",
    },
    count: {
      description: "The total number of pages.",
      table: {
        type: { summary: "number" },
      },
      control: "number",
    },
    pageSize: {
      description: "The number of items per page.",
      table: {
        type: { summary: "number" },
      },
      control: "number",
    },
  },
  args: {
    size: "sm",
  },
};

export default meta;
type Story = StoryObj<typeof Pagination>;

const PaginationExample = (args: PaginationProps) => (
  <Pagination count={15} pageSize={5} defaultPage={1} {...args}>
    <HStack>
      <PaginationPrevTrigger />
      <PaginationItems />
      <PaginationNextTrigger />
    </HStack>
  </Pagination>
);

export const Preview: Story = {
  args: {
    variant: "outline",
    defaultValue: 3507,
  },
  render: args => <PaginationExample {...args} />,
};
