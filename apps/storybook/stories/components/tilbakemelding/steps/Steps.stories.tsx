import {
  Button,
  Group,
  Steps as KvibStepper,
  Steps,
  StepsCompletedContent,
  StepsContent,
  StepsItem,
  StepsList,
  StepsNextTrigger,
  StepsPrevTrigger,
  StepsProps,
} from "@kvib/react/src";
import { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof KvibStepper> = {
  title: "Komponenter/Steps",
  component: KvibStepper,
  parameters: {
    docs: {
      story: { inline: true },
      canvas: { sourceState: "shown" },
    },
  },
  argTypes: {
    index: {
      name: "index*",
      description: "The active step index",
      table: {
        type: { summary: "number" },
      },
      control: "number",
    },
    children: {
      description: "The children of the stepper. Must be Step components",
      table: {
        type: { summary: "ReactElement[]" },
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof KvibStepper>;

const StepperExample = ({ ...args }) => {
  return (
    <Steps defaultValue={1} count={3} {...args}>
      <StepsList>
        <StepsItem index={0} title="Step 1" />
        <StepsItem index={1} title="Step 2" />
        <StepsItem index={2} title="Step 3" />
      </StepsList>

      <StepsContent index={0}>Første steg</StepsContent>
      <StepsContent index={1}>Andre steg</StepsContent>
      <StepsContent index={2}>Tredje steg</StepsContent>
      <StepsCompletedContent>Ferdig med alle stegene</StepsCompletedContent>

      <Group>
        <StepsPrevTrigger asChild>
          <Button size="sm">Forrige</Button>
        </StepsPrevTrigger>
        <StepsNextTrigger asChild>
          <Button size="sm">Neste</Button>
        </StepsNextTrigger>
      </Group>
    </Steps>
  );
};

export const Preview: Story = {
  render: (args: StepsProps) => <StepperExample {...args} />,
};
