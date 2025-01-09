import { HStack, Pagination, PaginationItems, PaginationNextTrigger, PaginationPrevTrigger } from "@kvib/react";

import { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof Pagination> = {
  title: "Komponenter/Pagination",
  component: Pagination,
  parameters: {
    docs: {
      story: { inline: true },
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

export const Preview: Story = {
  args: {
    count: 10,
    defaultPage: 1,
    pageSize: 5,
  },
  render: args => (
    <Pagination {...args}>
      <HStack>
        <PaginationPrevTrigger />
        <PaginationItems />
        <PaginationNextTrigger />
      </HStack>
    </Pagination>
  ),
};
