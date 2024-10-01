import{j as o}from"./extends-CwFRzn3r.js";import{useMDXComponents as p}from"./index-DlpNa54Y.js";import{ae as u,ah as t,ai as n,ag as m}from"./index-DYIgjWA5.js";import{M as c,a as M,b as C,c as k,d as B,e as x,f as h,g as s}from"./Modal.stories-PrmOJAyB.js";import{D as g,F as O,b as r}from"./Feedback-BBpeTI0L.js";import{C as l,a}from"./Card-Bjv9El9h.js";import"./index-BwDkhjyp.js";import"./_commonjsHelpers-BosuxZz1.js";import"./iframe-BSZf6IIr.js";import"../sb-preview/runtime.js";import"./index-Dn0f7ynd.js";import"./index-D-8MO0q_.js";import"./isNativeReflectConstruct-lfp1ZYuW.js";import"./inheritsLoose-B6jfs0L0.js";import"./setPrototypeOf-DgZC2w_0.js";import"./index-DF3CPj03.js";import"./index-DrFu-skq.js";import"./chunk-OFOVX77R-4PKM3lTH.js";import"./Combination-DhNDPOzd.js";import"./defineProperty-BylEvKcw.js";import"./index-yX8pBrvj.js";import"./chunk-3XANSPY5-CEuNXLts.js";import"./proxy-CdnPo0W_.js";import"./chunk-ZJJGQIVY-CoI1iMVy.js";import"./chunk-TR226DUX-BGnVKkVp.js";import"./chunk-6NHXDBFO-DotHZPjx.js";import"./index-DLHofduV.js";import"./index-Bdxaq0s4.js";import"./chunk-34PD6CUK-B1dqEPkL.js";import"./index-CHDWSgKD.js";import"./index-DJS8qWMq.js";import"./chunk-DMO4EI7P-D6u3hnqn.js";import"./chunk-7FWEOSAE-DBqCpNZ5.js";import"./chunk-UIGT7YZF-XoNRsZNz.js";import"./chunk-4FCEGNGT-BzgWbZwh.js";import"./chunk-37N6GCLA-D1CkRx4c.js";import"./chunk-2GBDXOMA-K_WHOyag.js";import"./chunk-EL2VKIZQ-CR2cgERt.js";import"./chunk-SR4VX3RF-UIgTPzYu.js";import"./chunk-7254PCTD-BmzKejH7.js";import"./chunk-7JBTTEVG-DuShY1Xb.js";import"./chunk-7JSBRQFI-ZG6s8cg4.js";import"./chunk-KA2477BY-BRr71Die.js";import"./chunk-724WJZW4-D7beLSYm.js";import"./Button-Cm2XyTcV.js";import"./chunk-UVUR7MCU-TM6grcjD.js";import"./chunk-5PH6ULNP-B_hWxh7m.js";import"./emotion-react.browser.esm-DOaDIBza.js";import"./chunk-FAWTVNS3-tKAZUTn2.js";import"./chunk-3ASUQ6PA-DZH9lOZq.js";import"./chunk-ZHMYA64R-V_96TD_T.js";import"./chunk-G72KV6MB-s0NcBBxe.js";import"./index-2ZXUntH3.js";import"./Icon-BhvPdM64.js";/* empty css              */import"./chunk-2OOHT3W5-CV6N7GVi.js";import"./chunk-R3DH46PF-iWUMGBws.js";import"./Form-control-CG1fyGaW.js";import"./chunk-DFWC5MHP-TuRmrrLs.js";import"./Form-label-D-r0Q-vl.js";import"./chunk-6CVSDS6C-DIHhJ7ei.js";import"./chunk-56K2BSAJ-DEJm4C0m.js";import"./chunk-PULVB27S-CgiffgmI.js";import"./chunk-QINAG4RG-EokTgSxx.js";import"./chunk-SPIKMR6I-lNfAZPIg.js";import"./chunk-NEK3OOAM-DbYvnad0.js";import"./chunk-JARCRF6W-DgXWZoO5.js";import"./chunk-7OLJDQMT-lazN81OQ.js";import"./chunk-KRPLQIP4-ICIqHMLQ.js";import"./chunk-MFVQSVQB-CA8z8kWU.js";const j=`const ModalExample = ({ ...args }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Button onClick={onOpen}>Åpne Modal</Button>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Historiske kart</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            Vil du ha eit gammalt kart på hytteveggen? Historiske kart kan lastast ned og skrivast ut gratis. Ta ein
            kikk i vårt arkiv!
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={onClose}>
              Lukk
            </Button>
            <Button>Ta en kikk</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};`,v=`const ModalScrollingExample = ({ ...args }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Button onClick={onOpen}>Åpne modal</Button>

      <Modal blockScrollOnMount={false} isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Modal tittel</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Text fontWeight="bold" mb="1rem">
              Du kan scrolle i innholdet bak modalen
            </Text>
          </ModalBody>
          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={onClose}>
              Lukk
            </Button>
            <Button variant="ghost">Annen handling</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};`,f=`const ModalFocusExample = ({ ...args }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const initialRef = useRef(null);
  const finalRef = useRef(null);

  return (
    <>
      <Button onClick={onOpen}>Åpne modal</Button>
      <Button ml={4} ref={finalRef}>
        Jeg får fokus på close
      </Button>

      <Modal initialFocusRef={initialRef} finalFocusRef={finalRef} isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Lag konto</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <FormControl>
              <FormLabel>Fornavn</FormLabel>
              <Input ref={initialRef} placeholder="Fornavn" />
            </FormControl>

            <FormControl>
              <FormLabel>Etternavn</FormLabel>
              <Input placeholder="Etternavn" />
            </FormControl>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="blue" mr={3}>
              Lagre
            </Button>
            <Button onClick={onClose}>Avbryt</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};`,y=`const ModalCenteredExample = ({ ...args }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Button onClick={onOpen}>Åpne modal</Button>

      <Modal onClose={onClose} isOpen={isOpen} isCentered>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Modal Sentrering</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            Modalen har 3.75rem vertical offset. Den kan endres ved å legge "top" til ModalContent. Hvis du skal
            sentrere vertikalt legger du isCentered i Modal.
          </ModalBody>
          <ModalFooter>
            <Button onClick={onClose}>Lukk</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};`,b=`const ModalTransitionExample = ({ ...args }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Button onClick={onOpen}>Åpne modal</Button>
      <Modal isCentered onClose={onClose} isOpen={isOpen} motionPreset="slideInBottom">
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Modal Transition</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            Modal kommer med scale transition, men du kan endre den med motionPreset-propen. Sett verdien til
            "slideInBottom", "slideInRight", "scale" eller "none".
          </ModalBody>
          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={onClose}>
              Lukk
            </Button>
            <Button variant="ghost">Annen handling</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};`,F=`const ModalSizeExample = ({ ...args }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [size, setSize] = useState("md");

  const handleSizeClick = (newSize: SetStateAction<string>) => {
    setSize(newSize);
    onOpen();
  };

  const sizes = ["xs", "sm", "md", "lg", "xl", "full"];

  return (
    <>
      {sizes.map((size) => (
        <Button onClick={() => handleSizeClick(size)} key={size} m={4}>{\`Åpne \${size} Modal\`}</Button>
      ))}

      <Modal onClose={onClose} size={size} isOpen={isOpen}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Modal Størrelser</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            Bruk size-proppen hvis du vil endre størrelse. Verdiene du kan velge mellom er xs, sm, md, lg, xl, eller
            full.
          </ModalBody>
          <ModalFooter>
            <Button onClick={onClose}>Lukk</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};`,S=`const ModalBackdropExample = ({ ...args }) => {
  const OverlayOne = () => <ModalOverlay bg="blackAlpha.300" backdropFilter="blur(10px) hue-rotate(90deg)" />;

  const OverlayTwo = () => <ModalOverlay bg="none" backdropFilter="auto" backdropInvert="80%" backdropBlur="2px" />;

  const { isOpen, onOpen, onClose } = useDisclosure();
  const [overlay, setOverlay] = useState(<OverlayOne />);

  return (
    <>
      <Button
        onClick={() => {
          setOverlay(<OverlayOne />);
          onOpen();
        }}
      >
        Bruk overlay 1
      </Button>
      <Button
        ml="4"
        onClick={() => {
          setOverlay(<OverlayTwo />);
          onOpen();
        }}
      >
        Bruk overlay 2
      </Button>
      <Modal isCentered isOpen={isOpen} onClose={onClose}>
        {overlay}
        <ModalContent>
          <ModalHeader>Bakteppe</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Text>Egendefinerte baktepper!</Text>
          </ModalBody>
          <ModalFooter>
            <Button onClick={onClose}>Lukk</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};`;function d(i){const e={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...p(),...i.components};return o.jsxs(o.Fragment,{children:[o.jsx(u,{of:c}),`
`,o.jsxs(g,{children:[o.jsx(e.h1,{id:"modal",children:"Modal"}),o.jsx(e.p,{children:"En modal er en dialog som fokuserer brukerens oppmerksomhet på informasjonen i vinduet."}),o.jsx(e.h2,{id:"ta-i-bruk",children:"Ta i bruk"}),o.jsx(e.pre,{children:o.jsx(e.code,{className:"language-jsx",children:`import { Modal, ModalOverlay, ModalContent, ModalHeader, ModalFooter, ModalBody, ModalCloseButton } from "@kvib/react";
`})}),o.jsx(O,{component:"Modal"}),o.jsx(r,{light:!0,children:"Block scrolling"}),o.jsx(l,{variant:"outline",borderRadius:"0",children:o.jsx(a,{children:o.jsx(t,{of:M})})}),o.jsx(n,{code:v,dark:!0}),o.jsx(r,{light:!0,children:"Fokus"}),o.jsx(l,{variant:"outline",borderRadius:"0",children:o.jsx(a,{children:o.jsx(t,{of:C})})}),o.jsx(n,{code:f,dark:!0}),o.jsx(r,{light:!0,children:"Sentrering"}),o.jsx(l,{variant:"outline",borderRadius:"0",children:o.jsx(a,{children:o.jsx(t,{of:k})})}),o.jsx(n,{code:y,dark:!0}),o.jsx(r,{light:!0,children:"Transition"}),o.jsx(l,{variant:"outline",borderRadius:"0",children:o.jsx(a,{children:o.jsx(t,{of:B})})}),o.jsx(n,{code:b,dark:!0}),o.jsx(r,{light:!0,children:"Størrelser"}),o.jsx(l,{variant:"outline",borderRadius:"0",children:o.jsx(a,{children:o.jsx(t,{of:x})})}),o.jsx(n,{code:F,dark:!0}),o.jsx(r,{light:!0,children:"Bakteppe"}),o.jsx(l,{variant:"outline",borderRadius:"0",children:o.jsx(a,{children:o.jsx(t,{of:h})})}),o.jsx(n,{code:S,dark:!0}),o.jsx(r,{light:!0,children:"Props"}),o.jsx(l,{variant:"outline",borderRadius:"0",children:o.jsx(a,{children:o.jsx(t,{of:s})})}),o.jsx(n,{code:j,dark:!0}),o.jsx(m,{of:s})]})]})}function $o(i={}){const{wrapper:e}={...p(),...i.components};return e?o.jsx(e,{...i,children:o.jsx(d,{...i})}):d(i)}export{$o as default};
