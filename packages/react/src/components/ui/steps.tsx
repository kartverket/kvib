import { ButtonProps } from "@/button";
import { BoxProps } from "@/layout";
import { Box, Steps as ChakraSteps } from "@chakra-ui/react";
import * as React from "react";
import { LuCheck } from "react-icons/lu";
import { Merge } from "../utils";

interface StepInfoProps {
  title?: React.ReactNode;
  description?: React.ReactNode;
}

export interface StepsItemProps extends Merge<BoxProps, Merge<Omit<ChakraSteps.ItemProps, "title">, StepInfoProps>> {
  completedIcon?: React.ReactNode;
  icon?: React.ReactNode;
  index: number;
}

export const StepsItem = React.forwardRef<HTMLDivElement, StepsItemProps>(function StepsItem(props, ref) {
  const { title, description, completedIcon, icon, ...rest } = props;
  return (
    <ChakraSteps.Item {...rest} ref={ref}>
      <ChakraSteps.Trigger>
        <ChakraSteps.Indicator>
          <ChakraSteps.Status complete={completedIcon || <LuCheck />} incomplete={icon || <ChakraSteps.Number />} />
        </ChakraSteps.Indicator>
        <StepInfo title={title} description={description} />
      </ChakraSteps.Trigger>
      <ChakraSteps.Separator />
    </ChakraSteps.Item>
  );
});

const StepInfo = (props: StepInfoProps) => {
  const { title, description } = props;

  if (title && description) {
    return (
      <Box>
        <ChakraSteps.Title>{title}</ChakraSteps.Title>
        <ChakraSteps.Description>{description}</ChakraSteps.Description>
      </Box>
    );
  }

  return (
    <>
      {title && <ChakraSteps.Title>{title}</ChakraSteps.Title>}
      {description && <ChakraSteps.Description>{description}</ChakraSteps.Description>}
    </>
  );
};

interface StepsIndicatorProps {
  completedIcon: React.ReactNode;
  icon?: React.ReactNode;
}

export const StepsIndicator = React.forwardRef<HTMLDivElement, StepsIndicatorProps>(
  function StepsIndicator(props, ref) {
    const { icon = <ChakraSteps.Number />, completedIcon } = props;
    return (
      <ChakraSteps.Indicator ref={ref}>
        <ChakraSteps.Status complete={completedIcon} incomplete={icon} />
      </ChakraSteps.Indicator>
    );
  },
);

export const StepsList = ChakraSteps.List;
export const StepsRoot = ChakraSteps.Root;

interface StepsContentProps extends Merge<BoxProps, { index: number }> {}

export const StepsContent = React.forwardRef<HTMLDivElement, StepsContentProps>(function StepsContent(props, ref) {
  return <ChakraSteps.Content ref={ref} {...props} />;
});

export const StepsCompletedContent = ChakraSteps.CompletedContent;

interface StepsTriggerProps extends Merge<ButtonProps, ChakraSteps.TriggerProps> {}

export const StepsNextTrigger = React.forwardRef<HTMLButtonElement, StepsTriggerProps>(
  function StepsNextTrigger(props, ref) {
    return <ChakraSteps.NextTrigger ref={ref} {...props} />;
  },
);

export const StepsPrevTrigger = React.forwardRef<HTMLButtonElement, StepsTriggerProps>(
  function StepsPrevTrigger(props, ref) {
    return <ChakraSteps.PrevTrigger ref={ref} {...props} />;
  },
);
