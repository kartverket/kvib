import { BoxProps } from "@/layout";
import { Progress as ChakraProgress } from "@chakra-ui/react";
import * as React from "react";
import { Merge } from "../utils";
import { InfoTip } from "./toggle-tip";

interface ProgressBarProps extends Merge<BoxProps, ChakraProgress.TrackProps> {}

export const ProgressBar = React.forwardRef<HTMLDivElement, ProgressBarProps>(function ProgressBar(props, ref) {
  return (
    <ChakraProgress.Track {...props} ref={ref}>
      <ChakraProgress.Range />
    </ChakraProgress.Track>
  );
});

export interface ProgressLabelProps extends Merge<BoxProps, ChakraProgress.LabelProps> {
  info?: React.ReactNode;
}

export const ProgressLabel = React.forwardRef<HTMLDivElement, ProgressLabelProps>(function ProgressLabel(props, ref) {
  const { children, info, ...rest } = props;
  return (
    <ChakraProgress.Label {...rest} ref={ref}>
      {children}
      {info && <InfoTip>{info}</InfoTip>}
    </ChakraProgress.Label>
  );
});

export const ProgressRoot = ChakraProgress.Root;
export const ProgressValueText = ChakraProgress.ValueText;
