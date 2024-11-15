import { Box, Steps as KvibStepper, Steps, useStepsContext } from "@kvib/react/src";
import { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof KvibStepper> = {
  title: "Komponenter/Stepper",
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

const steps = [
  { title: "Første", description: "Kontaktinfo" },
  { title: "Andre", description: "Dato og tid" },
  { title: "Tredje", description: "Oppsummering" },
];

const StepperExample = ({ ...args }) => {
  const { activeStep } = useStepsContext({
    index: 1,
    count: steps.length,
  });

  const simpleSteps = [{ title: "Første" }, { title: "Andre" }];

  return (
    <KvibStepper {...args} index={activeStep}>
      {simpleSteps.map((step, index) => (
        <Steps.Item key={index}>
          <Steps.Indicator>
            <Steps.Status isCompleted={index < activeStep} isActive={index === activeStep} />
          </Steps.Indicator>

          <Box flexShrink="0">
            <Steps.Title>{step.title}</Steps.Title>
          </Box>

          <Steps.Separator />
        </Steps.Item>
      ))}
    </KvibStepper>
  );
};

export const Preview: Story = {
  render: args => <StepperExample {...args} />,
};
