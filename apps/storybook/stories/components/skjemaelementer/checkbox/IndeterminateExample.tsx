import { Checkbox, Stack } from "@kvib/react";
import { useState } from "react";
export const IndeterminateExample = () => {
  const [checkedItems, setCheckedItems] = useState([false, false]);

  const allChecked = checkedItems.every(Boolean);
  const isIndeterminate = checkedItems.some(Boolean) && !allChecked;

  return (
    <>
      <Checkbox
        isChecked={allChecked}
        isIndeterminate={isIndeterminate}
        onChange={e => setCheckedItems([e.target.checked, e.target.checked])}
      >
        Parent Checkbox
      </Checkbox>
      <Stack pl={6} mt={1} gap={1}>
        <Checkbox
          isChecked={checkedItems[0]}
          iconSize="3rem"
          onChange={e => setCheckedItems([e.target.checked, checkedItems[1]])}
        >
          Child Checkbox 1
        </Checkbox>
        <Checkbox isChecked={checkedItems[1]} onChange={e => setCheckedItems([checkedItems[0], e.target.checked])}>
          Child Checkbox 2
        </Checkbox>
      </Stack>
    </>
  );
};
