import { Box, Portal as KvibPortal, PortalProps, Text } from "@kvib/react";
import { Meta, StoryObj } from "@storybook/react";
import { useRef } from "react";

const meta: Meta<typeof KvibPortal> = {
  title: "Komponenter/Portal",
  component: KvibPortal,
  parameters: {
    docs: {
      story: { inline: true },
      canvas: { sourceState: "shown" },
    },
  },
  argTypes: {
    appendToParentPortal: {
      description:
        "If true, the portal will check if it is within a parent portal and append itself to the parent's portal node. This provides nesting for portals. If false, the portal will always append to `document.body` regardless of nesting. It is used to opt out of portal nesting.",
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "true" },
      },
      control: "boolean",
    },
    containerRef: {
      description: "The ref to the component where the portal will be attached to.",
      table: {
        type: { summary: "RefObject<HTMLElement | null>" },
      },
      control: "object",
    },
  },
};

export default meta;
type Story = StoryObj<typeof KvibPortal>;

export const Preview: Story = {
  render: (args: PortalProps) => <PortalNestedExample {...args} />,
};

export const PortalNestedExample = ({ ...args }) => {
  const ref = useRef(null);
  return (
    <>
      <KvibPortal {...args} containerRef={ref} asChild>
        <Box bg="green.500" color="white" w="12rem" h="4rem">
          <Text>Parent: Hei, velkommen</Text>
        </Box>
      </KvibPortal>
      <Box bg="red.500" color="white" ref={ref} w="12rem" h="4rem">
        <Text>Hei, velkommen</Text>
      </Box>
    </>
  );
};
