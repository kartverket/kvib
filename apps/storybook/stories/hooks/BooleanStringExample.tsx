import { useBoolean } from "@kvib/react/src";
import { Button } from "@kvib/react/src";
export const BooleanStringExample = () => {
  const [flag, setFlag] = useBoolean();
  return (
    <>
      <p>Boolean state: {flag.toString()}</p>
      <Button onClick={setFlag.toggle}>Click me to toggle the boolean value</Button>
    </>
  );
};
