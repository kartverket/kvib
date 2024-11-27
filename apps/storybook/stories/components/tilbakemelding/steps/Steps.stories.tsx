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
    <Steps w="24rem" defaultValue={1} count={3} {...args}>
      <StepsList>
        <StepsItem index={0} title="Steg 1" />
        <StepsItem index={1} title="Steg 2" />
        <StepsItem index={2} title="Steg 3" />
      </StepsList>

      <StepsContent index={0}>Innhold i første steg</StepsContent>
      <StepsContent index={1}>Annet innhold i andre steg</StepsContent>
      <StepsContent index={2}>Dette er siste steg</StepsContent>
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
  tags: ["skip-test"],
  render: (args: StepsProps) => <StepperExample {...args} />,
};
