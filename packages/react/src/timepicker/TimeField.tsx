import { Box, Flex } from "@kvib/react/src";
import { CalendarDateTime, Time } from "@internationalized/date";
import { useRef } from "react";
import { AriaTimeFieldProps, useTimeField } from "react-aria";
import { TimeFieldState } from "react-stately";
import { DateTimeSegment } from "./DateTimeSegment";
import { getTimestampFromTime } from "./Timepicker";

type TimeFieldProps = AriaTimeFieldProps<Time> & {
  state: TimeFieldState;
  name?: string;
  colorScheme: "green" | "blue";
};
/** A time field component.
 *
 * This component lets the user choose a time based on regular user input.
 * It shouldn't be used directly, but is used by the TimePicker component.
 */
export const TimeField = ({ state, colorScheme, ...props }: TimeFieldProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const { fieldProps } = useTimeField(props, state, ref);

  return (
    <Box>
      <Flex {...fieldProps} ref={ref}>
        {state.segments.map((segment) => (
          <DateTimeSegment key={segment.type} segment={segment} state={state} colorScheme={colorScheme} />
        ))}
      </Flex>
      <input type="hidden" value={getTimestampFromTime(state.value as CalendarDateTime | null)} name={props.name} />
    </Box>
  );
};
