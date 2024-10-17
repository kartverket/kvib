import {
  Breadcrumb as KvibBreadcrumb,
  BreadcrumbItem as KvibBreadcrumbItem,
  BreadcrumbLink as KvibBreadcrumbLink,
} from "@kvib/react/src";
import { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof KvibBreadcrumb> = {
  title: "Navigasjon/Breadcrumb",
  component: KvibBreadcrumb,
  parameters: {
    docs: {
      story: { inline: true },
      canvas: { sourceState: "shown" },
    },
  },
  argTypes: {
    separator: {
      description: "The visual separator between each breadcrumb item",
      table: {
        type: { summary: "type ONLY_FOR_FORMAT = | string | ReactElement<any, string | JSXElementConstructor<any>>" },
      },
      control: "text",
    },
    spacing: {
      description: "The left and right margin applied to the separator",
      table: {
        type: {
          summary:
            "string | number | boolean | (string & {}) | ResponsiveArray<string | number | (string & {})> | Partial<Record<string, string | number | (string & {})>> | ResponsiveArray<...> | Partial<...> | ((theme: Record<...>) => ResponsiveValue<...>)",
        },
      },
      control: "text",
    },
  },
};

export default meta;
type Story = StoryObj<typeof KvibBreadcrumb>;

export const Preview: Story = {
  render: args => (
    <KvibBreadcrumb {...args}>
      <KvibBreadcrumbItem>
        <KvibBreadcrumbLink href="#">Home</KvibBreadcrumbLink>
      </KvibBreadcrumbItem>

      <KvibBreadcrumbItem>
        <KvibBreadcrumbLink href="#">Docs</KvibBreadcrumbLink>
      </KvibBreadcrumbItem>

      <KvibBreadcrumbItem isCurrentPage>
        <KvibBreadcrumbLink href="#">Breadcrumb</KvibBreadcrumbLink>
      </KvibBreadcrumbItem>
    </KvibBreadcrumb>
  ),
};

export const BreadcrumbSeparator: Story = {
  render: args => (
    <KvibBreadcrumb {...args} separator="-">
      <KvibBreadcrumbItem>
        <KvibBreadcrumbLink href="#">Home</KvibBreadcrumbLink>
      </KvibBreadcrumbItem>

      <KvibBreadcrumbItem>
        <KvibBreadcrumbLink href="#">About</KvibBreadcrumbLink>
      </KvibBreadcrumbItem>

      <KvibBreadcrumbItem isCurrentPage>
        <KvibBreadcrumbLink href="#">Contact</KvibBreadcrumbLink>
      </KvibBreadcrumbItem>
    </KvibBreadcrumb>
  ),
};
