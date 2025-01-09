import { Box, Collapsible, CollapsibleContent, CollapsibleTrigger } from "@kvib/react";
import { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof Collapsible> = {
  title: "Komponenter/Collapsible",
  component: Collapsible,
  parameters: {
    docs: {
      story: { inline: true },
    },
  },
  argTypes: {
    open: {
      description: "Whether the collapsible is open or not",
      table: {
        type: {
          summary: "boolean",
        },
        defaultValue: { summary: "false" },
      },
      control: {
        type: "boolean",
      },
    },
    onOpenChange: {
      description: "Function called when the popup is opened",
      table: {
        type: {
          summary: "(details: OpenChangeDetails) => void",
        },
      },
    },
    onExitComplete: {
      description: "Function called when the animation ends in the closed state.",
      table: {
        type: {
          summary: "() => void",
        },
      },
    },
    disabled: {
      description: "Whether the collapsible is disabled or not",
      table: {
        type: {
          summary: "boolean",
        },
        defaultValue: { summary: "false" },
      },
      control: {
        type: "boolean",
      },
    },
    defaultOpen: {
      description: "Whether the collapsible is open by default",
      table: {
        type: {
          summary: "boolean",
        },
        defaultValue: { summary: "false" },
      },
      control: {
        type: "boolean",
      },
    },
    unmountOnExit: {
      description: "Unmount the content when the collapsible is closed",
      table: {
        type: {
          summary: "boolean",
        },
        defaultValue: { summary: "false" },
      },
      control: {
        type: "boolean",
      },
    },
    lazyMount: {
      description: "Whether to enable lazy mounting",
      table: {
        type: {
          summary: "boolean",
        },
        defaultValue: { summary: "false" },
      },
      control: {
        type: "boolean",
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof Collapsible>;

/** Manuell navngivning av komponenter for å unngå at kompilert kode vises ved "Show Code" i Storybook */
Collapsible.displayName = "Collapsible";
CollapsibleTrigger.displayName = "CollapsibleTrigger";
CollapsibleContent.displayName = "CollapsibleContent";

export const Preview: Story = {
  render: args => (
    <Collapsible {...args}>
      <CollapsibleTrigger py={"4px"} w="100%">
        Open Collapsible
      </CollapsibleTrigger>
      <CollapsibleContent>
        <Box padding="4" borderWidth="1px">
          Content that is shown when the collapsible is open.
        </Box>
      </CollapsibleContent>
    </Collapsible>
  ),
};
