import { Button, useBoolean } from "@kvib/react/src";
import { DocsCanvas } from "../templates/DocsCanvas";
export const BooleanStringExample = () => {
  const [flag, setFlag] = useBoolean();
  return (
    <DocsCanvas>
      <p>Boolean state: {flag.toString()}</p>
      <Button onClick={setFlag.toggle}>Click me to toggle the boolean value</Button>
    </DocsCanvas>
  );
};
