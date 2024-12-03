import { Code } from "@kvib/react";
import { Tekstblokk } from "../../utils/Tekstblokk";
import { Kodeeksempel } from "../Kodeeksempel";

export const MigreringNumberInput = () => (
  <Tekstblokk tittel="Number Input">
    <Kodeeksempel
      beskrivelse={
        <>
          Tidligere kunne man bruke <Code>NumberInput</Code> slik med <Code>name</Code> og <Code>value</Code> som props
          på <Code>NumberInputField</Code>:
        </>
      }
      kildekode={`
<NumberInput>
  <NumberInputField name={name} value={name} />
</NumberInput>
      `}
    />
    <Kodeeksempel
      beskrivelse={
        <>
          Nå må man flytte disse propsene til <Code>NumberInput</Code>:
        </>
      }
      kildekode={`
<NumberInput name={name} value={name}>
  <NumberInputField />
</NumberInput>
      `}
    />
  </Tekstblokk>
);
