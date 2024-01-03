import { useConst } from "@kvib/react";
import { useState } from "react";

export const ConstExample = () => {
  const mountTime = useConst(() => new Date().toTimeString());
  const obj = useConst({ a: Math.random() });
  return (
    <>
      <p>Mount time: {mountTime}</p>
      <p>Value from constant object: {obj.a}</p>
    </>
  );
};

export const StateExample = () => {
  const [value] = useState(new Date().toTimeString());
  return <p>Mount time: {value}</p>;
};
