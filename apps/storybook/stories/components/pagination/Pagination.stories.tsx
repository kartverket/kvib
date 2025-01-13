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
      description: "The size of the component.",
      table: {
        type: { summary: "'sm' | 'md' | 'lg'" },
        defaultValue: { summary: "md" },
      },
      control: "radio",
      options: ["sm", "md", "lg"],
    },
    variant: {
      description: "The variant of the component.",
      table: {
        type: { summary: "'solid' | 'outline' | 'subtle'" },
        defaultValue: { summary: "outline" },
      },
      control: "radio",
      options: ["outline", "solid", "subtle"],
    },
    defaultPage: {
      description: "The default page number.",
      table: {
        type: { summary: "number" },
      },
      control: "number",
    },
    page: {
      description: "The active page.",
      table: {
        type: { summary: "number" },
        defaultValue: { summary: "1" },
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
        defaultValue: { summary: "10" },
      },
      control: "number",
    },
    colorPalette: {
      description: "The color palette of the component.",
      table: {
        type: { summary: "'green' | 'blue' | 'gray'" },
      },
      defaultValue: { summary: "green" },
      options: ["green", "blue", "gray"],
      control: { type: "radio" },
    },
    getHref: {
      description: "Function that returns the href for a page.",
      table: {
        type: { summary: "(page: number) => string" },
      },
    },
    siblingCount: {
      description: "Number of pages to show beside active page.",
      table: {
        type: { summary: "number" },
        defaultValue: { summary: "1" },
      },
      control: "number",
    },
    onPageChange: {
      description: "Called when the page number is changed.",
      table: {
        type: { summary: "(details: PageChangeDetails) => void" },
      },
    },
    onPageSizeChange: {
      description: "Called when the page size is changed.",
      table: {
        type: { summary: "(details: PageSizeChangeDetails) => void" },
      },
    },
    ids: {
      description: "The ids of the elements in the accordion. Useful for composition",
      table: {
        type: {
          summary:
            "Partial<{ root: string ellipsis(index: number): string prevTrigger: string nextTrigger: string item(page: number): string }>",
        },
      },
    },
    translations: {
      description: "Specifies the localized strings that identifies the accessibility elements and their states.",
      table: {
        type: { summary: "IntlTranslations" },
      },
    },
  },
  args: {
    size: "sm",
    variant: "outline",
    colorPalette: "green",
    count: 2,
    defaultPage: 1,
    pageSize: 1,
  },
};

export default meta;
type Story = StoryObj<typeof Pagination>;

/** Manuell navngivning av komponenter for å unngå at kompilert kode vises ved "Show Code" i Storybook */
Pagination.displayName = "Pagination";
(PaginationItems as any).displayName = "PaginationItems";
PaginationNextTrigger.displayName = "PaginationNextTrigger";
PaginationPrevTrigger.displayName = "PaginationPrevTrigger";
HStack.displayName = "HStack";

export const Preview: Story = {
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
