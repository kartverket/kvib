import { Tabs as KvibTabs, Tab as KvibTab, TabList as KvibTabList } from "@kvib/react/src/tabs";
import { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof KvibTab> = {
  title: "Navigasjon/Tabs/tab",
  component: KvibTab,
  parameters: {
    docs: {
      story: { inline: true },
      canvas: { sourceState: "shown" },
    },
    a11y: {
      config: {
        rules: [
          {
            // Turned off aria value violation due to false error.
            id: "aria-valid-attr-value",
            reviewOnFail: true,
          },
        ],
      },
    },
  },

  argTypes: {
    panelId: {
      description: "The id of the panel.",
      table: {
        type: { summary: String },
      },
      control: "text",
    },
    isDisabled: {
      description: "If true, tabs will no longer be able to toggle.",
      table: {
        type: { summary: Boolean },
        defaultValue: { summary: false },
      },
      control: { type: "boolean" },
    },
  },
};

export default meta;
type Story = StoryObj<typeof KvibTab>;

export const Tabs: Story = {
  args: { isDisabled: false },
  render: (args) => (
    <KvibTabs size={"md"}>
      <KvibTabList>
        <KvibTab {...args}>Første fane</KvibTab>
        <KvibTab {...args}>Andre fane</KvibTab>
      </KvibTabList>
    </KvibTabs>
  ),
};
