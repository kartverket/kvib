import { Link } from "@kvib/react";
import { Dokumentasjonsside } from "../../documentation/utils/Dokumentasjonsside";

export const LinkOverlayDocs = () => (
  <Dokumentasjonsside
    tittel="Link Overlay"
    beskrivelse={
      <>
        Link Overlay er en variant av Link som inneholder lenketekst og mer informasjon, hvor hele område er klikkbart.
        Komponenten egner seg for eksempel til inngang til en tjeneste eller underside. Les mer om lenker og
        retningslinjer under komponenten <Link href="/?path=/docs/komponenter-link--docs">“link”.</Link>
      </>
    }
  ></Dokumentasjonsside>
);
