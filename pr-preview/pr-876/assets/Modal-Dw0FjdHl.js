import{j as o}from"./extends-CwFRzn3r.js";import{useMDXComponents as p}from"./index-DlpNa54Y.js";import{ae as u,ah as t,ai as n,ag as m}from"./index-Kesphbnj.js";import{M as c,a as M,b as C,c as k,d as B,e as x,f as h,g as s}from"./Modal.stories-BD0TLHCZ.js";import{D as g,F as O,b as r}from"./Feedback-ikGBSwnK.js";import{C as l,a}from"./Card-DoxEvc2h.js";import"./index-BwDkhjyp.js";import"./_commonjsHelpers-BosuxZz1.js";import"./iframe-CgFFkTQ4.js";import"../sb-preview/runtime.js";import"./index-Dn0f7ynd.js";import"./index-D-8MO0q_.js";import"./isNativeReflectConstruct-lfp1ZYuW.js";import"./inheritsLoose-B6jfs0L0.js";import"./setPrototypeOf-DgZC2w_0.js";import"./index-DF3CPj03.js";import"./index-DrFu-skq.js";import"./modal-overlay-BUyZrJgU.js";import"./Combination-DhNDPOzd.js";import"./defineProperty-BylEvKcw.js";import"./focusable-crJ8ziAt.js";import"./is-element-C52yPwBl.js";import"./proxy-CQsau1XN.js";import"./forward-ref-BWI-Phbn.js";import"./factory-CdGA0D9p.js";import"./emotion-styled.browser.esm-NI0tOKWg.js";import"./cx-BDMMs1jM.js";import"./define-styles-BSAHv3yx.js";import"./use-merge-refs-Bdxaq0s4.js";import"./call-all-DDzecCnU.js";import"./portal-BqZkrvYK.js";import"./context-CBKykClo.js";import"./use-safe-layout-effect-BnICyLBj.js";import"./use-style-config--HlEOpE-.js";import"./omit-QLD0Eizt.js";import"./index-CfyPTyT-.js";import"./hooks-D04p5R0A.js";import"./use-theme-CBfqdygA.js";import"./index-DVNvNJVv.js";import"./fade-DIkg9ySx.js";import"./transition-utils-CnxNY5SP.js";import"./modal-content-BJmJrIq4.js";import"./slide-fade-DtQ3VHUy.js";import"./scale-fade-B3H2u9LX.js";import"./modal-footer-BGD7Y1hz.js";import"./close-button-uAmhqF5q.js";import"./icon-DQb5sAJm.js";import"./use-disclosure-CdGn7wGE.js";import"./use-callback-ref-DA6UG1mJ.js";import"./Button-C-HQ3BFF.js";import"./button-Db-BlFJ2.js";import"./spinner-DcEBpU52.js";import"./emotion-react.browser.esm-Hqbkbmab.js";import"./attr-sHTFgF0E.js";import"./center-D672Tu8u.js";import"./h-stack-P6-XT6iQ.js";import"./stack-Crl0JO1i.js";import"./responsive-ClFn5vzN.js";import"./children-2ZXUntH3.js";import"./Icon-Bt2yBKaj.js";/* empty css              */import"./text-rUwQV1v4.js";import"./Form-control-DGJzYvuD.js";import"./form-control-COBP5YBd.js";import"./Form-label-DGuXXNOx.js";import"./input-DYJm5yJ_.js";import"./use-form-control-Dd261dKs.js";import"./box-B7h7acUJ.js";import"./image-Cz43cXZB.js";import"./use-image-rNdzB_Ea.js";import"./simple-grid-CQLrn815.js";import"./grid-zpFC2r7C.js";import"./heading-D_euA-I1.js";import"./flex-CHlq4-Ax.js";import"./providers-tFX8H8_I.js";import"./calc-Dy10IX1y.js";import"./css-var-DE0-P1bc.js";import"./pick-DBnSFT3T.js";const j=`const ModalExample = ({ ...args }) => {
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
`})}),o.jsx(O,{component:"Modal"}),o.jsx(r,{light:!0,children:"Block scrolling"}),o.jsx(l,{variant:"outline",borderRadius:"0",children:o.jsx(a,{children:o.jsx(t,{of:M})})}),o.jsx(n,{code:v,dark:!0}),o.jsx(r,{light:!0,children:"Fokus"}),o.jsx(l,{variant:"outline",borderRadius:"0",children:o.jsx(a,{children:o.jsx(t,{of:C})})}),o.jsx(n,{code:f,dark:!0}),o.jsx(r,{light:!0,children:"Sentrering"}),o.jsx(l,{variant:"outline",borderRadius:"0",children:o.jsx(a,{children:o.jsx(t,{of:k})})}),o.jsx(n,{code:y,dark:!0}),o.jsx(r,{light:!0,children:"Transition"}),o.jsx(l,{variant:"outline",borderRadius:"0",children:o.jsx(a,{children:o.jsx(t,{of:B})})}),o.jsx(n,{code:b,dark:!0}),o.jsx(r,{light:!0,children:"Størrelser"}),o.jsx(l,{variant:"outline",borderRadius:"0",children:o.jsx(a,{children:o.jsx(t,{of:x})})}),o.jsx(n,{code:F,dark:!0}),o.jsx(r,{light:!0,children:"Bakteppe"}),o.jsx(l,{variant:"outline",borderRadius:"0",children:o.jsx(a,{children:o.jsx(t,{of:h})})}),o.jsx(n,{code:S,dark:!0}),o.jsx(r,{light:!0,children:"Props"}),o.jsx(l,{variant:"outline",borderRadius:"0",children:o.jsx(a,{children:o.jsx(t,{of:s})})}),o.jsx(n,{code:j,dark:!0}),o.jsx(m,{of:s})]})]})}function oe(i={}){const{wrapper:e}={...p(),...i.components};return e?o.jsx(e,{...i,children:o.jsx(d,{...i})}):d(i)}export{oe as default};
