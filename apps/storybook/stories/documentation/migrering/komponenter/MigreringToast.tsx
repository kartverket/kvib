import { Code } from "@kvib/react";
import { Liste } from "../../utils/Liste";
import { Listeelement } from "../../utils/Listeelement";
import { Tekstblokk } from "../../utils/Tekstblokk";
import { Kodeeksempel } from "../Kodeeksempel";

export const MigreringToast = () => (
  <Tekstblokk tittel="Toast">
    <Liste>
      <Listeelement tittel="createStandaloneToasts og useToast">
        Er fjernet til fordel for <Code>toaster.create</Code>.
      </Listeelement>
      <Listeelement tittel="isClosable">
        Tidligere har <Code>isClosable</Code> blitt brukt som en prop for å bestemme om toasten skal kunne lukkes. Denne
        er nå fjernet til fordel for <Code>action</Code>.
      </Listeelement>
    </Liste>
    <Kodeeksempel
      beskrivelse="Tidligere har man gjort følgende:"
      kildekode={`
const toast = useToast()

toast({
  title: "Tittel i toast-komponent",
  description: "Beskrivelse",
  status: "success",
})
      `}
    />
    <Kodeeksempel
      beskrivelse={
        <>
          Man tar i bruk <Code>Toast</Code> ved å importere følgende:
        </>
      }
      kildekode={`
        import { Toaster, toaster } from "@kvib/react";
      `}
    />
    <Kodeeksempel
      beskrivelse={
        <>
          Nå vil man først rendre <Code>Toaster</Code> i appen slik som dette:
        </>
      }
      kildekode={`
        <Toaster />
      `}
    />
    <Kodeeksempel
      beskrivelse={
        <>
          Deretter kan man trigge en toast ved å bruke <Code>toaster.create</Code> slik:
        </>
      }
      kildekode={`
toaster.create({
  title: "Tittel i toast-komponent",
  description: "Beskrivelse",
  type: "success",
})
      `}
    />
    <Kodeeksempel
      beskrivelse={
        <>
          Eksempel med <Code>action</Code>-knapp:
        </>
      }
      kildekode={`
toaster.success({
  title: "Tittel i toast-komponent",
  description: "Beskrivelse",
  action: {
    label: "Lukk",
    onClick: () => console.log("Lukket toast"),
  },
})
        `}
    />
  </Tekstblokk>
);
