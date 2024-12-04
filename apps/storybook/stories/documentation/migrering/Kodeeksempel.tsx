import { Stack } from "@kvib/react";
import { Source } from "@storybook/blocks";

interface Props {
  beskrivelse: React.ReactNode;
  kildekode: string;
}

export const Kodeeksempel = (props: Props) => (
  <Stack mt="1.5rem">
    <div>{props.beskrivelse}</div>
    <Source code={props.kildekode} />
  </Stack>
);
