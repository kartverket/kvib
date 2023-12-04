import { Meta, StoryObj } from "@storybook/react";
import {
  Button,
  Icon,
  FormLabel,
  FormControl,
  Box,
  Heading,
  VisuallyHidden as KvibVisuallyHidden,
  VisuallyHiddenInput as KvibVisuallyHiddenInput,
} from "@kvib/react/src";

const meta: Meta<typeof KvibVisuallyHidden> = {
  title: "Komponenter/Visually Hidden",
  component: KvibVisuallyHidden,
  parameters: {
    docs: {
      story: { inline: true },
      canvas: { sourceState: "shown" },
    },
  },
};

export default meta;

type Story = StoryObj<typeof KvibVisuallyHidden>;

const VisuallyHiddenExample = ({ ...args }) => {
  return (
    <>
      <Button>
        <KvibVisuallyHidden {...args}>Checkmark</KvibVisuallyHidden>
        <Icon icon="check" />
      </Button>
    </>
  );
};

export const VisuallyHidden: Story = {
  args: { children: "VisuallyHidden" },
  render: (args) => <VisuallyHiddenExample {...args} />,
};

const VisuallyHiddenText = ({ ...args }) => {
  return (
    <Box>
      <Heading>Tittel og beskrivelse</Heading>
      <KvibVisuallyHidden {...args}>Dette vil bli skjult</KvibVisuallyHidden>
    </Box>
  );
};

export const VisuallyHiddenTextExample: Story = {
  args: { children: "VisuallyHidden" },
  render: (args) => <VisuallyHiddenText {...args} />,
};

const VisuallyHiddenInputExample = ({ ...args }) => {
  return (
    <FormControl>
      <FormLabel>
        Visually Hidden Input
        <KvibVisuallyHiddenInput
          placeholder="Visually Hidden Input"
          {...args}
          defaultChecked
          onChange={(event) => {
            console.log(event.target.checked);
          }}
        />
      </FormLabel>
    </FormControl>
  );
};

export const VisuallyHiddenInput: Story = {
  args: {},
  render: (args) => <VisuallyHiddenInputExample {...args} />,
};
