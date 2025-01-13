import { HoverCard, HoverCardContent, HoverCardProps, HoverCardTrigger, Link, Stack, Text } from "@kvib/react";
import { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof HoverCard> = {
  title: "Komponenter/Hover Card",
  component: HoverCard,
  parameters: {
    docs: {
      story: { inline: true },
    },
    a11y: {
      // Label warnings + contrast ratio because of chakra wrapper.
      disable: true,
    },
  },
  argTypes: {
    closeDelay: {
      description: "The duration from when the mouse leaves the trigger or content until the hover card closes.",
      table: {
        type: { summary: "number" },
        defaultValue: { summary: "300" },
      },
      control: "number",
    },
    openDelay: {
      description: "The duration from when the mouse enters the trigger until the hover card opens.",
      table: {
        type: { summary: "number" },
        defaultValue: { summary: "700" },
      },
      control: "number",
    },
    size: {
      description: "The size of the component",
      table: {
        type: { summary: "'xs' | 'sm' | 'md' | 'lg'" },
        defaultValue: { summary: "md" },
      },
      options: ["xs", "sm", "md", "lg"],
      control: "radio",
    },
    defaultOpen: {
      description:
        "The initial open state of the hover card when it is first rendered. Use when you do not need to control its open state.",
      table: {
        type: { summary: "boolean" },
      },
    },
    onExitComplete: {
      description: "Function called when the animation ends in the closed state",
      table: {
        type: { summary: "() => void" },
      },
    },
    onOpenChange: {
      description: "Function called when the hover card opens or closes.",
      table: {
        type: { summary: "(details: OpenChangeDetails) => void" },
      },
    },
    open: {
      description: "Whether the hover card is open",
      table: {
        type: { summary: "boolean" },
      },
      control: "boolean",
    },
  },
};

export default meta;

/** Trenger eget interface for å arve fargepaletten til knappen i eksempelet */
interface Props extends HoverCardProps {
  colorPalette: "green" | "blue" | "gray" | "red";
}
type Story = StoryObj<Props>;

/** Manuell navngivning av komponenter for å unngå at kompilert kode vises ved "Show Code" i Storybook */
HoverCard.displayName = "HoverCard";

export const Preview: Story = {
  render: args => (
    <HoverCard {...args}>
      <HoverCardTrigger asChild>
        <Link href="#" colorPalette={args.colorPalette}>
          Hover for content
        </Link>
      </HoverCardTrigger>
      <HoverCardContent>
        <Stack gap="1">
          <Text textStyle="sm" fontWeight="semibold">
            Content title
          </Text>
          <Text textStyle="sm" color="fg.muted">
            Description
          </Text>
        </Stack>
      </HoverCardContent>
    </HoverCard>
  ),
};
