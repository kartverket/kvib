import {
  Box,
  Skeleton as KvibSkeleton,
  SkeletonText as KvibSkeletonText,
  SkeletonCircle as KvibSkeletonCircle,
  Stack as KvibStack,
} from "@kvib/react/src";
import { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof KvibSkeleton> = {
  title: "Tilbakemelding/Skeleton",
  component: KvibSkeleton,
  parameters: {
    docs: {
      story: { inline: true },
      canvas: { sourceState: "shown" },
    },
  },
  argTypes: {
    endColor: {
      description: "The color at the animation end",
      table: {
        type: { summary: "string" },
      },
      control: "text",
    },

    fadeDuration: {
      description: "The fadeIn duration in seconds. Requires isLoaded toggled to true in order to see the transition.",
      table: {
        type: { summary: "number" },
        defaultValue: { summary: 0.4 },
      },
      control: "number",
    },

    fitContent: {
      description: "If true, the skeleton will take the width of it's children",
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: false },
      },
      control: "boolean",
    },

    isLoaded: {
      description: "If true, it'll render its children with a nice fade transition",
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: false },
      },
      control: "boolean",
    },

    speed: {
      description: "The animation speed in seconds",
      table: {
        type: { summary: "number" },
        defaultValue: { summary: 0.8 },
      },
      control: "number",
    },

    startColor: {
      description: "The color at the animation start",
      table: {
        type: { summary: "string" },
      },
      control: "text",
    },
  },
};

export default meta;
type Story = StoryObj<typeof KvibSkeleton>;

export const Skeleton: Story = {
  args: {},
  render: (args) => (
    <KvibStack>
      <KvibSkeleton {...args} height="20px" />
      <KvibSkeleton {...args} height="20px" />
      <KvibSkeleton {...args} height="20px" />
    </KvibStack>
  ),
};

export const SkeletonWrapped: Story = {
  args: { fitContent: true },
  render: (args) => (
    <KvibSkeleton {...args}>
      <div>Det som er wrapped i Skeleton</div>
      <div>vil ikke være synlig.</div>
    </KvibSkeleton>
  ),
};

export const SkeletonCircle: Story = {
  args: {},
  render: (args) => (
    <Box padding="6" boxShadow="lg" bg="white">
      <KvibSkeletonCircle {...args} size="10" />
      <KvibSkeletonText {...args} mt="4" noOfLines={4} spacing="4" skeletonHeight="2" />
    </Box>
  ),
};

export const SkeletonColors: Story = {
  args: { startColor: "blue.500", endColor: "green.500", height: "20px" },
  render: (args) => <KvibSkeleton {...args} />,
};

export const SkeletonLoaded: Story = {
  args: { isLoaded: true },
  render: (args) => (
    <KvibSkeleton {...args}>
      <span>Denne teksten er ferdiglastet.</span>
    </KvibSkeleton>
  ),
};
