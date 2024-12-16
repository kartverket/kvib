import { Alert, Code, Text } from "@kvib/react";
import { Dokumentasjonsside } from "../utils/Dokumentasjonsside";
import { Liste } from "../utils/Liste";
import { Listeelement } from "../utils/Listeelement";
import { Tekstblokk } from "../utils/Tekstblokk";
import { fjernedeKomponenter } from "./FjernenedeKompsOgProps";
import { MigreringAccordion } from "./komponenter/MigreringAccordion";
import { MigreringAlert } from "./komponenter/MigreringAlert";
import { MigreringDialog } from "./komponenter/MigreringDialog";
import { MigreringInputGroup } from "./komponenter/MigreringInputGroup";
import { MigreringNumberInput } from "./komponenter/MigreringNumberInput";
import { MigreringShow } from "./komponenter/MigreringShow";
import { MigreringSteps } from "./komponenter/MigreringSteps";
import { MigreringTable } from "./komponenter/MigreringTable";
import { MigreringToast } from "./komponenter/MigreringToast";
import { MigreringTooltip } from "./komponenter/MigreringTooltip";
import { MigreringTypography } from "./komponenter/MigreringTypography";
import { kompMedNyeNavn, nyeKomponenter } from "./NyeKomponenter";
import { nyeProps } from "./NyeProps";
import { nySyntaks } from "./NySyntaks";

const nyeVarianter = [
  {
    title: "primary",
    description: (
      <>
        <Code>solid</Code>
      </>
    ),
  },
  {
    title: "secondary",
    description: (
      <>
        <Code>outline</Code>
      </>
    ),
  },
  {
    title: "tertiary",
    description: (
      <>
        <Code>plain</Code>
      </>
    ),
  },
  {
    title: "ghost",
    description: (
      <>
        <Code>ghost</Code>
      </>
    ),
  },
];

export const Migration = () => (
  <Dokumentasjonsside
    tittel="Kvib 5"
    beskrivelse="Versjon 5 av Kvib bygger på Chakra 3 og har en rekke nyheter med seg. I denne oversikten vil vi fremheve de viktigste endringene og hvordan dette påvirker brukerne av tidligere versjoner av Kvib."
  >
    <Alert status="info" size="lg">
      Dokumentasjonen vår vil være litt utdatert i en tid fremover etter oppdateringen.
    </Alert>
    <Tekstblokk tittel="Ny syntaks">
      <Liste>
        {nySyntaks
          .sort((a, b) => (a.title > b.title ? 1 : -1))
          .map(komponent => (
            <Listeelement key={komponent.title} tittel={komponent.title}>
              {komponent.description}
            </Listeelement>
          ))}
      </Liste>
    </Tekstblokk>

    <Text as="h2">Endringer i komponenter</Text>
    <MigreringAccordion />
    <MigreringAlert />
    <Tekstblokk tittel="Alert Dialog">
      Slått sammen med <Code>Modal</Code> i den nye komponenten <Code>Dialog</Code>, hvor man kan sette propen{" "}
      <Code>role="alertdialog"</Code> for å få en Alert Dialog som før.
    </Tekstblokk>
    <MigreringDialog />
    <MigreringInputGroup />
    <MigreringNumberInput />
    <MigreringShow />
    <MigreringSteps />
    <MigreringTable />
    <MigreringToast />
    <MigreringTooltip />
    <MigreringTypography />

    <Tekstblokk tittel="Komponenter med nye navn">
      Flere av komponentene har fått nye navn. Dette byr på breaking changes for de som oppgraderer fra tidligere
      versjoner av Kvib.
      <Liste>
        {kompMedNyeNavn
          .sort((a, b) => (a.title > b.title ? 1 : -1))
          .map(komponent => (
            <Listeelement key={komponent.title} tittel={komponent.title}>
              {komponent.description}
            </Listeelement>
          ))}
      </Liste>
      <br />
      <Text as="h3" fontWeight={700} fontSize={"md"}>
        Props med nye navn
      </Text>
      <Liste>
        {nyeProps
          .sort((a, b) => (a.title > b.title ? 1 : -1))
          .map(prop => (
            <Listeelement key={prop.title} tittel={prop.title}>
              {prop.description}
            </Listeelement>
          ))}
      </Liste>
    </Tekstblokk>
    <Tekstblokk tittel="Varianter">
      <Liste>
        {nyeVarianter.map(variant => (
          <Listeelement key={variant.title} tittel={variant.title}>
            {variant.description}
          </Listeelement>
        ))}
      </Liste>
    </Tekstblokk>
    <Tekstblokk tittel="Nye komponenter">
      <Liste>
        {nyeKomponenter.sort().map(komponent => (
          <Listeelement key={komponent} tittel={komponent} />
        ))}
      </Liste>
    </Tekstblokk>
    <Tekstblokk tittel="Fjernede komponenter, hooks og props">
      <Liste>
        {fjernedeKomponenter
          .sort((a, b) => (a.title > b.title ? 1 : -1))
          .map(komponent => (
            <Listeelement key={komponent.title} tittel={komponent.title}>
              {komponent.description}
            </Listeelement>
          ))}
      </Liste>
    </Tekstblokk>
  </Dokumentasjonsside>
);
