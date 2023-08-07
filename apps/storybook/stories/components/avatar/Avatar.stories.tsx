import {
  Avatar as KvibAvatar,
  AvatarBadge as KvibAvatarBadge,
  AvatarGroup as KvibAvatarGroup,
  Stack as KvibStack,
  Wrap as KvibWrap,
  WrapItem as KvibWrapItem,
} from "@kvib/react/src";
import { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof KvibAvatar> = {
  title: "Komponenter/Avatar",
  component: KvibAvatar,
  parameters: {
    docs: {
      story: { inline: true },
      canvas: { sourceState: "shown" },
    },
  },
  argTypes: {
    ignoreFallback: {
      description: "If true, opt out of the avatar's fallback logic and renders the img at all times.",
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: false },
      },
      control: "boolean",
    },
    loading: {
      description: "Defines loading strategy",
      table: {
        type: { summary: "eager | lazy" },
      },
      options: ["eager", "lazy"],
      control: "radio",
    },
    name: {
      description:
        "The name of the person in the avatar. - if src has loaded, the name will be used as the alt attribute of the img - If src is not loaded, the name will be used to create the initials",
      table: {
        type: { summary: String },
      },
      control: "text",
    },
    referrerPolicy: {
      description: "Defining which referrer is sent when fetching the resource.",
      table: {
        type: { summary: "HTMLAttributeReferrerPolicy" },
      },
      control: "text",
    },
    showBorder: {
      description: "If true, the Avatar will show a border around it. Best for a group of avatars",
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: false },
      },
      control: "boolean",
    },
    size: {
      description: "The size of the Avatar",
      table: {
        type: { summary: "2xs | xs | sm | md | lg | xl | 2xl | full" },
        defaultValue: { summary: "md" },
      },
      options: ["2xs", "xs", "sm", "md", "lg", "xl", "2xl", "full"],
      control: { type: "radio" },
    },
    src: {
      description: "The image url of the Avatar",
      table: {
        type: { summary: "String" },
      },
      control: "text",
    },
    srcSet: {
      description: "List of sources to use for different screen resolutions",
      table: {
        type: { summary: "String" },
      },
      control: "text",
    },
  },
};

export default meta;
type Story = StoryObj<typeof KvibAvatar>;

export const Avatar: Story = {
  args: {
    name: "Eksempel Navn",
    src: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1287&q=80",
  },
  render: (args) => <KvibAvatar {...args} name="Eksempel Navn" />,
};

export const AvatarSizes: Story = {
  args: {
    name: "Eksempel Navn",
    src: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1287&q=80",
  },
  render: (args) => (
    <KvibWrap>
      <KvibWrapItem>
        <KvibAvatar {...args} size="2xs" />
      </KvibWrapItem>
      <KvibWrapItem>
        <KvibAvatar {...args} size="xs" />
      </KvibWrapItem>
      <KvibWrapItem>
        <KvibAvatar {...args} size="sm" />
      </KvibWrapItem>
      <KvibWrapItem>
        <KvibAvatar {...args} size="md" />
      </KvibWrapItem>
      <KvibWrapItem>
        <KvibAvatar {...args} size="lg" />
      </KvibWrapItem>
      <KvibWrapItem>
        <KvibAvatar {...args} size="xl" />
      </KvibWrapItem>
      <KvibWrapItem>
        <KvibAvatar {...args} size="2xl" />
      </KvibWrapItem>
    </KvibWrap>
  ),
};

export const AvatarFallback: Story = {
  args: {},
  render: (args) => (
    <KvibStack direction="row">
      <KvibAvatar {...args} name="Eksempel Navn" src="https://bit.ly/broken-link" bg="green.500" />
      <KvibAvatar {...args} name="Annet Eksempel" src="https://bit.ly/broken-link" />
      <KvibAvatar {...args} src="https://bit.ly/broken-link" />
    </KvibStack>
  ),
};

export const AvatarBadge: Story = {
  args: {},
  render: (args) => (
    <KvibAvatar {...args}>
      <KvibAvatarBadge boxSize="1.25em" bg="green.500" />
    </KvibAvatar>
  ),
};

export const AvatarGrouping: Story = {
  args: { name: "Eksempel Navn" },
  render: (args) => (
    <KvibAvatarGroup size="md" max={2}>
      <KvibAvatar
        {...args}
        src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1287&q=80"
      />
      <KvibAvatar {...args} />
      <KvibAvatar {...args} />
      <KvibAvatar {...args} />
      <KvibAvatar {...args} />
    </KvibAvatarGroup>
  ),
};
