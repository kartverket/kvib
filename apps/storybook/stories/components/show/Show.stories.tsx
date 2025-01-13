import { Button, Show as KvibShow, ShowProps, VStack } from "@kvib/react";
import { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";

interface Props extends ShowProps<string> {
  colorPalette: "green" | "blue";
}

const meta: Meta<Props> = {
  title: "Komponenter/Show",
  component: KvibShow,
  parameters: {
    docs: {
      story: { inline: true },
    },
  },
  argTypes: {
    fallback: {
      description: "The content to show when the condition is false",
      table: {
        type: { summary: "ReactNode" },
      },
      control: "text",
    },
    when: {
      description: "If `true`, it will render the `children` prop",
      table: {
        type: { summary: "T | null | undefined" },
      },
    },
  },
};

export default meta;
type Story = StoryObj<Props>;

/** Manuell navngivning av komponenter for å unngå at kompilert kode vises ved "Show Code" i Storybook */
(KvibShow as any).displayName = "Show";
Button.displayName = "Button";
VStack.displayName = "VStack";

export const Preview: Story = {
  render: args => {
    const [count, setCount] = useState(1);
    return (
      <VStack>
        <Button onClick={() => setCount(count + 1)} w="fit-content" colorPalette={args.colorPalette}>
          Value: {count}
        </Button>
        <KvibShow {...args} when={count <= 3}>
          Content visible when 3 or less
        </KvibShow>
        <KvibShow {...args} when={count > 3}>
          Content visible when more than 3
        </KvibShow>
      </VStack>
    );
  },
};
