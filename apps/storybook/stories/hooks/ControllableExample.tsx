import { useControllableState, Button, Box } from "@kvib/react";
import React from "react";
export const UnControllableExample = () => {
  const [value, setValue] = useControllableState({ defaultValue: 40 });
  return (
    <div>
      <Button onClick={() => setValue(value + 1)}>+</Button>
      <Box as="span" w="200px" mx="24px">
        {value}
      </Box>
      <Button onClick={() => setValue(value - 1)}>-</Button>
    </div>
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
    <div>
      <Button onClick={() => setInternalValue(value + 1)}>+</Button>
      <Box as="span" w="200px" mx="24px">
        {internalValue}
      </Box>
      <Button onClick={() => setInternalValue(value - 1)}>-</Button>
    </div>
  );
};
