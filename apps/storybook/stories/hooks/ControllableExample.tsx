import { Box, Button, useControllableState } from "@kvib/react/src";
import { Source } from "@storybook/blocks";
import React from "react";
import { DocsCanvas } from "../templates/DocsCanvas";
import { ControllableStrings, UnControllableStrings } from "./srcControllableStrings";
export const UnControllableExample = () => {
  const [value, setValue] = useControllableState({ defaultValue: 40 });
  return (
    <DocsCanvas>
      <Box>
        <Button onClick={() => setValue(value + 1)}>+</Button>
        <Box as="span" w="200px" mx="24px">
          {value}
        </Box>
        <Button onClick={() => setValue(value - 1)}>-</Button>
      </Box>
      <Source code={UnControllableStrings} dark />
    </DocsCanvas>
  );
};

export const ControllableExample = () => {
  // you need a state and updater to change the value
  const [value, setValue] = React.useState(40);

  const [internalValue, setInternalValue] = useControllableState({
    value,
    onChange: setValue,
  });

  return (
    <DocsCanvas rowGap="1rem">
      <Box>
        <Button onClick={() => setInternalValue(value + 1)}>+</Button>
        <Box as="span" w="200px" mx="24px">
          {internalValue}
        </Box>
        <Button onClick={() => setInternalValue(value - 1)}>-</Button>
      </Box>
      <Source code={ControllableStrings} dark />
    </DocsCanvas>
  );
};
