import { Dokumentasjonsside } from "../../documentation/utils/Dokumentasjonsside";
import { Liste } from "../../documentation/utils/Liste";
import { Listeelement } from "../../documentation/utils/Listeelement";
import { Tekstblokk } from "../../documentation/utils/Tekstblokk";

export const CenterDocs = () => (
  <Dokumentasjonsside tittel="Center" beskrivelse={"Center er en beholder der innholdet sentreres i midten."}>
    <Tekstblokk tittel="Egnet til:">
      <Liste>
        <Listeelement>sentrering av innhold som tekst, bilder, eller ikoner (horisontalt og vertikalt).</Listeelement>
        <Listeelement>å lage visuelle rammer rundt innhold.</Listeelement>
        <Listeelement>ideelt for enklere design med symmetrisk eller balansert innhold.</Listeelement>
      </Liste>
    </Tekstblokk>
  </Dokumentasjonsside>
);
