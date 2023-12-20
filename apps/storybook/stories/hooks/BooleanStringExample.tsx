import { useBoolean } from "@chakra-ui/react";
export const BooleanStringExample = () => {
  const [flag, setFlag] = useBoolean();
  return (
    <>
      <p>Boolean state: {flag.toString()}</p>
      <button onClick={setFlag.toggle}>Click me to toggle the boolean value</button>
    </>
  );
};
