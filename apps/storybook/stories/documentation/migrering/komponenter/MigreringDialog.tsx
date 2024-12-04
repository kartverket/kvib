import { Code } from "@kvib/react";
import { Liste } from "../../utils/Liste";
import { Listeelement } from "../../utils/Listeelement";
import { Tekstblokk } from "../../utils/Tekstblokk";

export const MigreringDialog = () => (
  <Tekstblokk tittel="Dialog (tidligere kalt Modal)">
    AlertDialog og Modal har blitt slått sammen til én komponent som nå heter Dialog. I tillegg barnekomponentene også
    fått nye navn.
    <Liste>
      <Listeelement tittel="ModalCloseButton">
        Omdøpt til <Code>DialogCloseTrigger</Code>.
      </Listeelement>
      <Listeelement tittel="ModalContent">
        Omdøpt til <Code>DialogContent</Code>.
      </Listeelement>
      <Listeelement tittel="ModalHeader">
        Omdøpt til <Code>DialogHeader</Code>.
      </Listeelement>
      <Listeelement tittel="ModalFooter">
        Omdøpt til <Code>DialogFooter</Code>.
      </Listeelement>
      <Listeelement tittel="ModalOverlay">
        Omdøpt til <Code>DialogBackdrop</Code>.
      </Listeelement>
    </Liste>
  </Tekstblokk>
);
