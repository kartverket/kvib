import { Time } from "@internationalized/date";
import { Flex } from "@kvib/react/src";
import { useRef } from "react";
import { AriaTimeFieldProps, useTimeField } from "react-aria";
import { TimeFieldState } from "react-stately";
import { DateTimeSegment } from "./DateTimeSegment";

type TimeFieldProps = AriaTimeFieldProps<Time> & {
  state: TimeFieldState;
  name?: string;
  colorPalette?: "green" | "blue";
};
/** A time field component.
 *
 * This component lets the user choose a time based on regular user input.
 * It shouldn't be used directly, but is used by the TimePicker component.
 */
export const TimeField = ({ state, colorPalette, ...props }: TimeFieldProps) => {
  const ref = useRef<HTMLInputElement>(null);
  const { fieldProps } = useTimeField(props, state, ref);

  return (
    <Flex {...fieldProps} ref={ref}>
      {state.segments.map(segment => (
        <DateTimeSegment key={segment.type} segment={segment} state={state} colorPalette={colorPalette} />
      ))}
    </Flex>
  );
};
