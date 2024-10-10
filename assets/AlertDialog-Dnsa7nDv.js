import{j as o}from"./extends-CwFRzn3r.js";import{useMDXComponents as m}from"./index-DlpNa54Y.js";import{ae as p,ah as r,ai as i,ag as c}from"./index-B1_o41dk.js";import{A as d,a as g,b as n}from"./AlertDialog.stories-CJ7edfbd.js";import{D as u,F as D,b as A}from"./Feedback-D0tVrm0g.js";import{C as l,a}from"./Card-DoxEvc2h.js";import"./index-BwDkhjyp.js";import"./_commonjsHelpers-BosuxZz1.js";import"./iframe-g5al9mnR.js";import"../sb-preview/runtime.js";import"./index-Dn0f7ynd.js";import"./index-D-8MO0q_.js";import"./isNativeReflectConstruct-lfp1ZYuW.js";import"./inheritsLoose-B6jfs0L0.js";import"./setPrototypeOf-DgZC2w_0.js";import"./index-DF3CPj03.js";import"./index-DrFu-skq.js";import"./modal-overlay-BUyZrJgU.js";import"./Combination-DhNDPOzd.js";import"./defineProperty-BylEvKcw.js";import"./focusable-crJ8ziAt.js";import"./is-element-C52yPwBl.js";import"./proxy-CQsau1XN.js";import"./forward-ref-BWI-Phbn.js";import"./factory-CdGA0D9p.js";import"./emotion-styled.browser.esm-NI0tOKWg.js";import"./cx-BDMMs1jM.js";import"./define-styles-BSAHv3yx.js";import"./use-merge-refs-Bdxaq0s4.js";import"./call-all-DDzecCnU.js";import"./portal-BqZkrvYK.js";import"./context-CBKykClo.js";import"./use-safe-layout-effect-BnICyLBj.js";import"./use-style-config--HlEOpE-.js";import"./omit-QLD0Eizt.js";import"./index-CfyPTyT-.js";import"./hooks-D04p5R0A.js";import"./use-theme-CBfqdygA.js";import"./index-DVNvNJVv.js";import"./fade-DIkg9ySx.js";import"./transition-utils-CnxNY5SP.js";import"./modal-content-BJmJrIq4.js";import"./slide-fade-DtQ3VHUy.js";import"./scale-fade-B3H2u9LX.js";import"./modal-footer-BGD7Y1hz.js";import"./close-button-uAmhqF5q.js";import"./icon-DQb5sAJm.js";import"./use-disclosure-CdGn7wGE.js";import"./use-callback-ref-DA6UG1mJ.js";import"./Button-D_pUdPLe.js";import"./button-Db-BlFJ2.js";import"./spinner-DcEBpU52.js";import"./emotion-react.browser.esm-Hqbkbmab.js";import"./attr-sHTFgF0E.js";import"./center-D672Tu8u.js";import"./h-stack-P6-XT6iQ.js";import"./stack-Crl0JO1i.js";import"./responsive-ClFn5vzN.js";import"./children-2ZXUntH3.js";import"./Icon-Dgh1NZQ-.js";/* empty css              */import"./box-B7h7acUJ.js";import"./image-Cz43cXZB.js";import"./use-image-rNdzB_Ea.js";import"./simple-grid-CQLrn815.js";import"./grid-zpFC2r7C.js";import"./heading-D_euA-I1.js";import"./text-rUwQV1v4.js";import"./flex-CHlq4-Ax.js";import"./providers-tFX8H8_I.js";import"./calc-Dy10IX1y.js";import"./css-var-DE0-P1bc.js";import"./pick-DBnSFT3T.js";const f=`const AlertDialogExample = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const cancelRef = useRef<HTMLButtonElement>(null);

  return (
    <>
      <Button colorScheme="red" onClick={onOpen}>
        Slett
      </Button>

      <AlertDialog  isOpen={isOpen} leastDestructiveRef={cancelRef} onClose={onClose}>
        <AlertDialogOverlay>
          <AlertDialogContent>
            <AlertDialogHeader fontSize="lg" fontWeight="bold">
              Slett
            </AlertDialogHeader>

            <AlertDialogBody>Er du sikker? Du kan ikke angre senere.</AlertDialogBody>

            <AlertDialogFooter>
              <Button ref={cancelRef} onClick={onClose}>
                Avbryt
              </Button>
              <Button colorScheme="red" onClick={onClose} ml={3}>
                Slett
              </Button>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialogOverlay>
      </AlertDialog>
    </>
  );
};`,C=`const TransitionExample = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const cancelRef = useRef<HTMLButtonElement>(null);

  return (
    <>
      <Button onClick={onOpen}>Forkast endringer</Button>
      <AlertDialog
        motionPreset="slideInBottom"
        leastDestructiveRef={cancelRef}
        onClose={onClose}
        isOpen={isOpen}
        isCentered
      >
        <AlertDialogOverlay />
        <AlertDialogContent>
          <AlertDialogHeader>Forkast endringer?</AlertDialogHeader>
          <AlertDialogCloseButton />
          <AlertDialogBody>Er du sikker på at du vil forkaste notatene? 44 ord vil bli slettet.</AlertDialogBody>
          <AlertDialogFooter>
            <Button ref={cancelRef} onClick={onClose}>
              Nei
            </Button>
            <Button colorScheme="red" ml={3}>
              Ja
            </Button>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </>
  );
};`;function s(e){const t={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...m(),...e.components};return o.jsxs(o.Fragment,{children:[o.jsx(p,{of:d}),`
`,o.jsxs(u,{children:[o.jsx(t.h1,{id:"alert-dialog",children:"Alert Dialog"}),o.jsx(t.p,{children:"AlertDialog er et komponent som brukes til å avbryte brukeren med en bekreftelesesdialog."}),o.jsx(t.pre,{children:o.jsx(t.code,{className:"language-jsx",children:`import {
  AlertDialog,
  AlertDialogBody,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogContent,
  AlertDialogOverlay,
  AlertDialogCloseButton,
} from "@kvib/react";
`})}),o.jsx(D,{component:"AlertDialog"}),o.jsx(t.h2,{id:"endring-av-transition",children:"Endring av transition"}),o.jsx(l,{variant:"outline",borderRadius:"0",children:o.jsx(a,{children:o.jsx(r,{of:g})})}),o.jsx(i,{code:C,dark:!0}),o.jsx(A,{light:!0,children:"Props"}),o.jsx(l,{variant:"outline",borderRadius:"0",children:o.jsx(a,{children:o.jsx(r,{of:n})})}),o.jsx(i,{code:f,dark:!0}),o.jsx(c,{of:n})]})]})}function _o(e={}){const{wrapper:t}={...m(),...e.components};return t?o.jsx(t,{...e,children:o.jsx(s,{...e})}):s(e)}export{_o as default};
