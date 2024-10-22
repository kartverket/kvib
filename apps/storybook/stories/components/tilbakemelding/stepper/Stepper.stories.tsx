import {
  Box,
  Stack as KvibStack,
  Stepper as KvibStepper,
  Step,
  StepDescription,
  StepIcon,
  StepIndicator,
  StepNumber,
  StepSeparator,
  StepStatus,
  StepTitle,
  Text,
  useSteps,
} from "@kvib/react/src";
import { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof KvibStepper> = {
  title: "Tilbakemelding/Stepper",
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
  const { activeStep } = useSteps({
    index: 1,
    count: steps.length,
  });

  const simpleSteps = [{ title: "Første" }, { title: "Andre" }];

  return (
    <KvibStepper {...args} index={activeStep}>
      {simpleSteps.map((step, index) => (
        <Step key={index}>
          <StepIndicator>
            <StepStatus complete={<StepIcon />} incomplete={<StepNumber />} active={<StepNumber />} />
          </StepIndicator>

          <Box flexShrink="0">
            <StepTitle>{step.title}</StepTitle>
          </Box>
          <StepSeparator />
        </Step>
      ))}
    </KvibStepper>
  );
};

export const Preview: Story = {
  render: args => <StepperExample {...args} />,
};

const StepperOrientationExample = ({ ...args }) => {
  const { activeStep } = useSteps({
    index: 1,
    count: steps.length,
  });

  return (
    <KvibStepper {...args} index={activeStep} orientation="vertical" height="400px" gap="0">
      {steps.map((step, index) => (
        <Step key={index}>
          <StepIndicator>
            <StepStatus complete={<StepIcon />} incomplete={<StepNumber />} active={<StepNumber />} />
          </StepIndicator>
          <Box flexShrink="0">
            <StepTitle>{step.title}</StepTitle>
            <StepDescription>{step.description}</StepDescription>
          </Box>

          <StepSeparator />
        </Step>
      ))}
    </KvibStepper>
  );
};

export const StepperOrientation: Story = {
  render: args => <StepperOrientationExample {...args} />,
};

const StepperSizeExample = ({ ...args }) => {
  const { activeStep } = useSteps({
    index: 1,
    count: steps.length,
  });

  return (
    <KvibStepper {...args} size="lg" index={activeStep}>
      {steps.map((step, index) => (
        <Step key={index}>
          <StepIndicator>
            <StepStatus complete={<StepIcon />} incomplete={<StepNumber />} active={<StepNumber />} />
          </StepIndicator>
          <Box flexShrink="0">
            <StepTitle>{step.title}</StepTitle>
            <StepDescription>{step.description}</StepDescription>
          </Box>
          <StepSeparator />
        </Step>
      ))}
    </KvibStepper>
  );
};

export const StepperSizes: Story = {
  render: args => <StepperSizeExample {...args} />,
};

const StepperColorExample = ({ ...args }) => {
  const { activeStep } = useSteps({
    index: 1,
    count: steps.length,
  });

  return (
    <KvibStepper {...args} size="lg" colorScheme="red" index={activeStep}>
      {steps.map((step, index) => (
        <Step key={index}>
          <StepIndicator>
            <StepStatus complete={<StepIcon />} incomplete={<StepNumber />} active={<StepNumber />} />
          </StepIndicator>
          <Box flexShrink="0">
            <StepTitle>{step.title}</StepTitle>
            <StepDescription>{step.description}</StepDescription>
          </Box>
          <StepSeparator />
        </Step>
      ))}
    </KvibStepper>
  );
};

export const StepperColors: Story = {
  render: args => <StepperColorExample {...args} />,
};

const StepperClickExample = ({ ...args }) => {
  const { activeStep, setActiveStep } = useSteps({
    index: 1,
    count: steps.length,
  });

  return (
    <KvibStepper {...args} size="lg" index={activeStep}>
      {steps.map((step, index) => (
        <Step key={index} onClick={() => setActiveStep(index)}>
          <StepIndicator>
            <StepStatus complete={<StepIcon />} incomplete={<StepNumber />} active={<StepNumber />} />
          </StepIndicator>
          <Box flexShrink="0">
            <StepTitle>{step.title}</StepTitle>
            <StepDescription>{step.description}</StepDescription>
          </Box>
          <StepSeparator />
        </Step>
      ))}
    </KvibStepper>
  );
};

export const StepperClick: Story = {
  render: args => <StepperClickExample {...args} />,
};

const StepperProgressbarExample = ({ ...args }) => {
  const { activeStep } = useSteps({
    index: 1,
    count: steps.length,
  });

  const activeStepText = steps[activeStep].description;

  return (
    <KvibStack>
      <KvibStepper {...args} size="sm" index={activeStep} gap="0">
        {steps.map((_step, index) => (
          <Step key={index} aria-label={index.toString()} role="status">
            <StepIndicator>
              <StepStatus complete={<StepIcon />} />
            </StepIndicator>
            <StepSeparator />
          </Step>
        ))}
      </KvibStepper>
      <Text>
        Step {activeStep + 1}: <b>{activeStepText}</b>
      </Text>
    </KvibStack>
  );
};

export const StepperProgressbar: Story = {
  render: args => <StepperProgressbarExample {...args} />,
};
