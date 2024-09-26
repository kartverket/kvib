import { useConst } from "@kvib/react/src";
import { Source } from "@storybook/blocks";
import { useState } from "react";
import { DocsCanvas } from "../templates/DocsCanvas";
import { ConstStrings, StateStrings } from "./srcConstStrings";

export const ConstExample = () => {
  const mountTime = useConst(() => new Date().toTimeString());
  const obj = useConst({ a: Math.random() });
  return (
    <DocsCanvas>
      <p>Mount time: {mountTime}</p>
      <p>Value from constant object: {obj.a}</p>
      <Source code={ConstStrings} dark />
    </DocsCanvas>
  );
};

export const StateExample = () => {
  const [value] = useState(new Date().toTimeString());
  return (
    <DocsCanvas>
      <p>Mount time: {value}</p>
      <Source code={StateStrings} dark />
    </DocsCanvas>
  );
};
