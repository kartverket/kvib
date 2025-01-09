import { Portal as KvibPortal, Portal, PortalProps } from "@kvib/react";
import { Meta, StoryObj } from "@storybook/react";
import { useRef } from "react";

const meta: Meta<typeof KvibPortal> = {
  title: "Komponenter/Portal",
  component: KvibPortal,
  parameters: {
    docs: {
      story: { inline: true },
      canvas: { sourceState: "hidden" },
    },
  },
  argTypes: {
    container: {
      table: {
        type: {
          summary: "RefObject<HTMLElement | null>",
        },
      },
    },
    disabled: {
      table: {
        type: {
          summary: "boolean",
        },
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof KvibPortal>;

/** Manuell navngivning av komponenter for å unngå at kompilert kode vises ved "Show Code" i Storybook */
(KvibPortal as any).displayName = "Portal";

export const Preview: Story = {
  render: (args: PortalProps) => {
    const containerRef = useRef<HTMLDivElement | null>(null);
    return (
      <>
        <Portal container={containerRef} {...args}>
          <div>Portal content</div>
        </Portal>
        <div ref={containerRef} />
      </>
    );
  },
};
