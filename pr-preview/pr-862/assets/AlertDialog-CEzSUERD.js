import{j as o}from"./extends-CwFRzn3r.js";import{useMDXComponents as m}from"./index-DlpNa54Y.js";import{ae as p,ah as r,ai as i,ag as c}from"./index-CcWrSbUc.js";import{A as d,a as g,b as n}from"./AlertDialog.stories-CwnjZW3c.js";import{D as u,F as D,b as A}from"./Feedback-CGVA0MWq.js";import{C as l,a}from"./Card-BhafkWhq.js";import"./index-BwDkhjyp.js";import"./_commonjsHelpers-BosuxZz1.js";import"./iframe-C77LSURn.js";import"../sb-preview/runtime.js";import"./index-Dn0f7ynd.js";import"./index-D-8MO0q_.js";import"./isNativeReflectConstruct-lfp1ZYuW.js";import"./inheritsLoose-B6jfs0L0.js";import"./setPrototypeOf-DgZC2w_0.js";import"./index-DF3CPj03.js";import"./index-DrFu-skq.js";import"./chunk-EL2VKIZQ-r9Y9hAnt.js";import"./chunk-ZJJGQIVY-Dk0gAx5w.js";import"./chunk-SR4VX3RF-DHegaSDG.js";import"./chunk-6NHXDBFO-DotHZPjx.js";import"./index-CBajw-n2.js";import"./proxy-CzVOQe18.js";import"./chunk-7254PCTD-C6dlIIpG.js";import"./chunk-OFOVX77R-COpOBI_W.js";import"./Combination-DhNDPOzd.js";import"./defineProperty-BylEvKcw.js";import"./index-yX8pBrvj.js";import"./chunk-3XANSPY5-CEuNXLts.js";import"./chunk-TR226DUX-DiR02sYQ.js";import"./index-Bdxaq0s4.js";import"./chunk-34PD6CUK-B1dqEPkL.js";import"./index-CHDWSgKD.js";import"./index-DJS8qWMq.js";import"./chunk-DMO4EI7P-CbM7tafX.js";import"./chunk-7FWEOSAE-BgGQS5yP.js";import"./chunk-UIGT7YZF-BZ8OOi_0.js";import"./chunk-4FCEGNGT-fiGwVf8M.js";import"./chunk-37N6GCLA-kZIb89lP.js";import"./chunk-2GBDXOMA-DYcQJ-WZ.js";import"./chunk-7JBTTEVG-CYT7sRLE.js";import"./chunk-7JSBRQFI-CSWo1_dX.js";import"./chunk-KA2477BY-BRr71Die.js";import"./chunk-724WJZW4-D7beLSYm.js";import"./Button-CYMcA4Az.js";import"./chunk-UVUR7MCU-CDviNqUv.js";import"./chunk-5PH6ULNP-DjlYY-Z2.js";import"./emotion-react.browser.esm-5ppwkrPI.js";import"./chunk-FAWTVNS3-h_p2ezMN.js";import"./chunk-3ASUQ6PA-BRAByO3y.js";import"./chunk-ZHMYA64R-DVnaPXQt.js";import"./chunk-G72KV6MB-CW_g5wqE.js";import"./index-2ZXUntH3.js";import"./Icon-BA11F4pX.js";/* empty css              */import"./chunk-PULVB27S-BbQOsZmk.js";import"./chunk-QINAG4RG-D8ybSQBR.js";import"./chunk-SPIKMR6I-lNfAZPIg.js";import"./chunk-NEK3OOAM-y-5BEe1S.js";import"./chunk-JARCRF6W-C8V8GAuA.js";import"./chunk-2OOHT3W5-DQGV2H9e.js";import"./chunk-R3DH46PF-iWUMGBws.js";import"./chunk-7OLJDQMT-BcrawTP2.js";import"./chunk-KRPLQIP4-B8CwleOo.js";import"./chunk-MFVQSVQB-CVs57b_v.js";const f=`const AlertDialogExample = () => {
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
`})}),o.jsx(D,{component:"AlertDialog"}),o.jsx(t.h2,{id:"endring-av-transition",children:"Endring av transition"}),o.jsx(l,{variant:"outline",borderRadius:"0",children:o.jsx(a,{children:o.jsx(r,{of:g})})}),o.jsx(i,{code:C,dark:!0}),o.jsx(A,{light:!0,children:"Props"}),o.jsx(l,{variant:"outline",borderRadius:"0",children:o.jsx(a,{children:o.jsx(r,{of:n})})}),o.jsx(i,{code:f,dark:!0}),o.jsx(c,{of:n})]})]})}function Eo(e={}){const{wrapper:t}={...m(),...e.components};return t?o.jsx(t,{...e,children:o.jsx(s,{...e})}):s(e)}export{Eo as default};
