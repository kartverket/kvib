import { Header as KvibHeader, Tabs, TabsList, TabsTrigger } from "@kvib/react";
import { Meta, StoryObj } from "@storybook/react";
import { Button, VStack } from "@chakra-ui/react";

const meta: Meta<typeof KvibHeader> = {
  title: "Komponenter/Header",
  component: KvibHeader,
  parameters: {
    layout: "fullscreen",
    docs: {
      story: { inline: true },
    },
    a11y: {
      // Label warnings + contrast ratio because of chakra wrapper.
      disable: true,
    },
  },
  argTypes: {
    justifyContent: {
      table: {
        type: { summary: "start | center | space-between" },
        defaultValue: { summary: "space-between" },
      },
      options: ["start", "center", "space-between"],
      control: { type: "radio" },
    },
    logoLinkDisabled: {
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "false" },
      },
      control: "boolean",
    },
    logoLink: {
      table: {
        type: { summary: "string" },
        defaultValue: { summary: "/" },
      },
      control: "text",
    },
    logoLinkProps: {
      table: { summary: "object" },
      defaultValue: { summary: undefined },
    },
    logoAltText: {
      table: {
        type: { summary: "string" },
      },
      control: "text",
    },
    title: {
      table: {
        type: { summary: "string" },
        defaultValue: { summary: undefined },
      },
      control: "text",
    },
    titleLink: {
      table: {
        type: { summary: "string" },
        defaultValue: { summary: undefined },
      },
      control: "text",
    },
    collapseBreakpoint: {
      table: {
        type: { summary: "sm | md | lg" },
        defaultValue: { summary: "sm" },
      },
      options: ["sm", "md", "lg"],
      control: { type: "radio" },
    },
    gap: {
      table: {
        type: { summary: "number" },
        defaultValue: { summary: "90" },
      },
      control: "number",
    },
    logoVariant: {
      table: {
        type: { summary: "horizontal | vertical | symbol" },
        defaultValue: { summary: "horizontal" },
      },
      options: ["horizontal", "vertical", "symbol"],
      control: { type: "radio" },
    },
    contentMaxWidth: {
      table: {
        type: { summary: "string | number" },
        defaultValue: { summary: "1140px" },
      },
      control: "text",
    },
    menuContent: {
      table: {
        type: { summary: "React.ReactNode" },
        defaultValue: { summary: undefined },
      },
      description:
        "Custom content to be displayed in the opened menu. Shows as a side drawer on large screens (unless tabBarContent is provided) and as a collapsible dropdown on small screens. When both menuContent and tabBarContent are defined, menuContent takes priority on small screens.",
    },
    tabBarContent: {
      table: {
        type: { summary: "React.ReactNode" },
        defaultValue: { summary: undefined },
      },
      description:
        "Content to be displayed as a tab bar attached to the bottom of the header. Shows on all screen sizes when menuContent is not defined. When both are defined, tabBarContent shows on large screens and menuContent shows on small screens.",
    },
  },
  args: { onMenuButtonClick: undefined },
};

export default meta;
type Story = StoryObj<typeof KvibHeader>;

/** Manuell navngivning av komponenter for å unngå at kompilert kode vises ved "Show Code" i Storybook */
(KvibHeader as any).displayName = "Header";

export const Preview: Story = {
  args: { logoAltText: "Kartverket-logo" },
  render: args => <KvibHeader {...args} />,
};

export const WithTabBarAndMenu: Story = {
  args: {
    logoAltText: "Kartverket-logo",
    tabBarContent: (
      <Tabs defaultValue="hjem" width="full" colorPalette="green">
        <TabsList style={{ borderBottomWidth: 0 }}>
          <TabsTrigger value="hjem">Hjem</TabsTrigger>
          <TabsTrigger value="tjenester">Tjenester</TabsTrigger>
          <TabsTrigger value="om">Om oss</TabsTrigger>
          <TabsTrigger value="kontakt">Kontakt</TabsTrigger>
        </TabsList>
      </Tabs>
    ),
    menuContent: (
      <VStack gap={2} width="100%">
        <Button value="hjem" variant="plain">
          Hjem
        </Button>
        <Button value="tjenester" variant="plain">
          Tjenester
        </Button>
        <Button value="om" variant="plain">
          Om oss
        </Button>
        <Button value="kontakt" variant="plain">
          Kontakt
        </Button>
      </VStack>
    ),
  },
  render: args => <KvibHeader {...args} />,
};

export const WithTabBarWithoutMenu: Story = {
  args: {
    logoAltText: "Kartverket-logo",
    tabBarContent: (
      <Tabs defaultValue="hjem" width="full" colorPalette="green">
        <TabsList style={{ borderBottomWidth: 0 }}>
          <TabsTrigger value="hjem">Hjem</TabsTrigger>
          <TabsTrigger value="tjenester">Tjenester</TabsTrigger>
          <TabsTrigger value="om">Om oss</TabsTrigger>
          <TabsTrigger value="kontakt">Kontakt</TabsTrigger>
        </TabsList>
      </Tabs>
    ),
  },
  render: args => <KvibHeader {...args} />,
};

export const WithMenu: Story = {
  args: {
    logoAltText: "Kartverket-logo",
    menuContent: (
      <VStack gap={2} width="100%">
        <Button value="hjem" variant="plain">
          Hjem
        </Button>
        <Button value="tjenester" variant="plain">
          Tjenester
        </Button>
        <Button value="om" variant="plain">
          Om oss
        </Button>
        <Button value="kontakt" variant="plain">
          Kontakt
        </Button>
      </VStack>
    ),
  },
  render: args => <KvibHeader {...args} />,
};
