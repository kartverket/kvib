import { Box, Portal as KvibPortal } from "@kvib/react/src";
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
        defaultValue: { summary: true },
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

export const Portal: Story = {
  args: {},
  render: (args) => (
    <Box bg="green.500" color="white">
      Dette er en Box
      <KvibPortal {...args}>Denne teksten er portaled til enden av document.body!</KvibPortal>
    </Box>
  ),
};

const PortalCustomExample = ({ ...args }) => {
  const ref = useRef<HTMLDivElement | null>(null);

  return (
    <Box bg="green.500" color="white">
      Dette er en box
      <KvibPortal {...args} containerRef={ref}>
        Portal: Denne teksten er portaled til den blå boksen!
      </KvibPortal>
      <Box ref={ref} bg="blue.400">
        <div>Container: Hei</div>
      </Box>
    </Box>
  );
};

export const PortalCustom: Story = {
  args: {},
  render: (args) => <PortalCustomExample {...args} />,
};

const PortalNestedExample = ({ ...args }) => {
  const ref = useRef(null);
  return (
    <div>
      <KvibPortal {...args} containerRef={ref}>
        <Box bg="green.500" color="white">
          Parent: Hei, velkommen
          <KvibPortal {...args}>Child: Jeg er festet til min parent portal</KvibPortal>
        </Box>
      </KvibPortal>
      <Box bg="red.500" color="white" ref={ref} />
    </div>
  );
};

export const PortalNested: Story = {
  args: {},
  render: (args) => <PortalNestedExample {...args} />,
};

function PortalNotAppendedExample({ ...args }) {
  const ref = useRef(null);
  return (
    <div>
      <KvibPortal {...args} containerRef={ref}>
        <Box bg="green.500" color="white">
          Parent: Hei, velkommen
          <KvibPortal {...args} appendToParentPortal={false}>
            Child: Jeg går til document.body
          </KvibPortal>
        </Box>
      </KvibPortal>
      <div style={{ background: "red" }} ref={ref} />
    </div>
  );
}

export const PortalNotAppended: Story = {
  args: {},
  render: (args) => <PortalNotAppendedExample {...args} />,
};
