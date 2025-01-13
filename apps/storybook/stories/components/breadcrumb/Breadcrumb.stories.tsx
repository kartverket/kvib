import { Box, Breadcrumb, BreadcrumbCurrentLink, BreadcrumbLink, Icon } from "@kvib/react";
import { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof Breadcrumb> = {
  title: "Komponenter/Breadcrumb",
  component: Breadcrumb,
  parameters: {
    docs: {
      story: { inline: true },
    },
  },
  args: {
    size: "md",
    variant: "underline",
    separator: "/",
    separatorGap: "8px",
    colorPalette: "green",
  },
  argTypes: {
    variant: {
      description: "The variant of the breadcrumb",
      table: {
        type: { summary: "underline | plain" },
        defaultValue: { summary: "underline" },
      },
      options: ["underline", "plain"],
      control: { type: "radio" },
    },
    size: {
      description: "The size of the breadcrumb",
      table: {
        type: { summary: "sm | md | lg" },
        defaultValue: { summary: "md" },
      },
      options: ["sm", "md", "lg"],
      control: { type: "radio" },
    },
    separator: {
      description: "The visual separator between each breadcrumb item",
      table: {
        type: { summary: "ReactNode" },
      },
      control: "text",
    },
    separatorGap: {
      description: "The gap between the separator and the breadcrumb item",
      table: {
        type: { summary: "SystemStyleObject['gap']" },
      },
    },
    colorPalette: {
      description: "The color palette of the breadcrumb",
      table: {
        type: { summary: "green | blue | gray" },
      },
      defaultValue: { summary: "green" },
      options: ["green", "blue", "gray"],
      control: { type: "radio" },
    },
  },
};

export default meta;
type Story = StoryObj<typeof Breadcrumb>;

/** Manuell navngivning av komponenter for å unngå at kompilert kode vises ved "Show Code" i Storybook */
Breadcrumb.displayName = "Breadcrumb";
BreadcrumbLink.displayName = "BreadcrumbLink";
BreadcrumbCurrentLink.displayName = "BreadcrumbCurrentLink";
Icon.displayName = "Icon";

export const Preview: Story = {
  render: args => (
    <Breadcrumb
      {...args}
      separator={
        <Box
          css={{
            m: 0,
            p: 0,
            height: "1.5em",
          }}
        >
          <Icon icon="chevron_right" />
        </Box>
      }
    >
      <BreadcrumbLink href="#">Level 1</BreadcrumbLink>
      <BreadcrumbCurrentLink>Level 2</BreadcrumbCurrentLink>
    </Breadcrumb>
  ),
};
