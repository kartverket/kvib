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
  argTypes: {
    colorPalette: {
      description: "The color palette of the component",
      table: {
        type: { summary: "green | blue | gray" },
        defaultValue: { summary: "green" },
      },
      options: ["green", "blue", "gray"],
      control: { type: "radio" },
    },
    size: {
      description: "The size of the component",
      table: {
        type: { summary: "sm | md | lg" },
        defaultValue: { summary: "md" },
      },
      options: ["sm", "md", "lg"],
      control: { type: "radio" },
    },
  },
};

export default meta;

interface Props extends StepsProps {
  colorPalette: "green" | "blue" | "gray";
}

type Story = StoryObj<Props>;

/** Manuell navngivning av komponenter for å unngå at kompilert kode vises ved "Show Code" i Storybook */
KvibStepper.displayName = "Steps";
StepsList.displayName = "StepsList";
StepsItem.displayName = "StepsItem";
StepsContent.displayName = "StepsContent";
StepsCompletedContent.displayName = "StepsCompletedContent";
StepsPrevTrigger.displayName = "StepsPrevTrigger";
StepsNextTrigger.displayName = "StepsNextTrigger";
Button.displayName = "Button";
Group.displayName = "Group";

export const Preview: Story = {
  render: args => (
    <Steps defaultValue={1} count={2} {...args}>
      <StepsList>
        <StepsItem index={0}>Step 1</StepsItem>
        <StepsItem index={1}>Step 2</StepsItem>
      </StepsList>

      <StepsContent index={0}>Step 1 content</StepsContent>
      <StepsContent index={1}>Step 2 content</StepsContent>
      <StepsCompletedContent>Done with all steps</StepsCompletedContent>

      <Group>
        <StepsPrevTrigger asChild>
          <Button size="sm" colorPalette={args.colorPalette}>
            Previous
          </Button>
        </StepsPrevTrigger>
        <StepsNextTrigger asChild>
          <Button size="sm" colorPalette={args.colorPalette}>
            Next
          </Button>
        </StepsNextTrigger>
      </Group>
    </Steps>
  ),
};
