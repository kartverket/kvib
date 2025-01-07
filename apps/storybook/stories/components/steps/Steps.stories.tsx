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
} from "@kvib/react";
import { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof KvibStepper> = {
  title: "Komponenter/Steps",
  component: KvibStepper,
  parameters: {
    docs: {
      story: { inline: true },
    },
  },
};

export default meta;
type Story = StoryObj<typeof KvibStepper>;

const StepperExample = ({ ...args }) => {
  return (
    <Steps w="16rem" defaultValue={1} count={2} {...args}>
      <StepsList>
        <StepsItem index={0} title="Steg 1" />
        <StepsItem index={1} title="Steg 2" />
      </StepsList>

      <StepsContent index={0}>Innhold i første steg</StepsContent>
      <StepsContent index={1}>Annet innhold i andre steg</StepsContent>
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
