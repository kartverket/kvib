import {
  Breadcrumb as KvibBreadcrumb,
  BreadcrumbCurrentLink as KvibBreadcrumbCurrentLink,
  BreadcrumbLink as KvibBreadcrumbLink,
} from "@kvib/react/src";
import { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof KvibBreadcrumb> = {
  title: "Komponenter/Breadcrumb",
  component: KvibBreadcrumb,
  parameters: {
    docs: {
      story: { inline: true },
      canvas: { sourceState: "shown" },
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
        type: { summary: "green | blue" },
      },
      defaultValue: { summary: "green" },
      options: ["green", "blue"],
      control: { type: "radio" },
    },
  },
};

export default meta;
type Story = StoryObj<typeof KvibBreadcrumb>;

export const Preview: Story = {
  render: args => (
    <KvibBreadcrumb {...args}>
      <KvibBreadcrumbLink href="#">Home</KvibBreadcrumbLink>
      <KvibBreadcrumbLink href="#">Docs</KvibBreadcrumbLink>
      <KvibBreadcrumbCurrentLink href="#">Breadcrumb</KvibBreadcrumbCurrentLink>
    </KvibBreadcrumb>
  ),
};
