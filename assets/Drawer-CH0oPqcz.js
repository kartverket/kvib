import{j as e}from"./extends-CwFRzn3r.js";import{useMDXComponents as m}from"./index-DlpNa54Y.js";import{ae as d,ah as a,ai as t,ag as u}from"./index-CRFEv_Bl.js";import{D as c,F as D,b as n}from"./Feedback-7ODX0rOz.js";import{D as w,a as h,b as x,c as g,P as p}from"./Drawer.stories-DyLvjz1W.js";import{C as i,a as s}from"./Card-rgsWy52h.js";import"./index-BwDkhjyp.js";import"./_commonjsHelpers-BosuxZz1.js";import"./iframe-P1aML4fh.js";import"../sb-preview/runtime.js";import"./index-Drt3gf4w.js";import"./index-D-8MO0q_.js";import"./assertThisInitialized-DSoh8oXT.js";import"./inheritsLoose-B6jfs0L0.js";import"./setPrototypeOf-DgZC2w_0.js";import"./index-DF3CPj03.js";import"./index-DrFu-skq.js";import"./box-DeqT4ixr.js";import"./factory-C6UFhaBW.js";import"./emotion-styled.browser.esm-NI0tOKWg.js";import"./image-BzV54DYr.js";import"./forward-ref-BWI-Phbn.js";import"./use-image-rNdzB_Ea.js";import"./use-safe-layout-effect-BnICyLBj.js";import"./omit-QLD0Eizt.js";import"./simple-grid-inAnnyJ8.js";import"./grid-B2CMUJGq.js";import"./use-theme-CBfqdygA.js";import"./hooks-gaHRB8Pq.js";import"./responsive-BNzRyFLh.js";import"./heading--NES2npU.js";import"./use-style-config-YUvqttAg.js";import"./index-CfyPTyT-.js";import"./cx-BDMMs1jM.js";import"./text-ByHKaHOl.js";import"./flex-C1gIBb6o.js";import"./Link-C3IPjqxf.js";import"./drawer-content-BErhVZ2L.js";import"./modal-overlay-C0uK6VRa.js";import"./Combination-DhNDPOzd.js";import"./defineProperty-BylEvKcw.js";import"./focusable-crJ8ziAt.js";import"./is-element-C52yPwBl.js";import"./proxy-CQsau1XN.js";import"./define-styles-BSAHv3yx.js";import"./use-merge-refs-Bdxaq0s4.js";import"./call-all-DDzecCnU.js";import"./portal-DTuMj-Dh.js";import"./context-CBKykClo.js";import"./index-DVNvNJVv.js";import"./fade-DIkg9ySx.js";import"./transition-utils-CnxNY5SP.js";import"./slide-BKzKlc2C.js";import"./modal-footer-CFNkBq26.js";import"./close-button-BkvRA7vz.js";import"./icon-Bx5s8P2X.js";import"./radio-CsweyUa7.js";import"./index-BbAC0Ngi.js";import"./form-control-r5o_asaM.js";import"./attr-sHTFgF0E.js";import"./visually-hidden.style-BUiBK_kv.js";import"./split-CzYrjwZo.js";import"./input-addon-RlMWPo5q.js";import"./input-group-B7NKAurU.js";import"./children-2ZXUntH3.js";import"./select-ZTEkT6fV.js";import"./use-form-control-1lTcASP6.js";import"./textarea-DdJBiiLn.js";import"./use-disclosure-CdGn7wGE.js";import"./use-callback-ref-DA6UG1mJ.js";import"./Button-CplK2pH4.js";import"./button-DEHO-vdc.js";import"./spinner-DfEqsPDM.js";import"./emotion-react.browser.esm-Hqbkbmab.js";import"./center-Da94FwVR.js";import"./h-stack-BA5VzuBF.js";import"./stack-REYSnkee.js";import"./Icon-DFlaEF_r.js";/* empty css              */import"./input-Cik3wyxH.js";import"./Form-label-B-qAuQLc.js";import"./providers-BwxcBeey.js";import"./calc-B93s4yJe.js";import"./css-var-DE0-P1bc.js";import"./pick-DBnSFT3T.js";const C=`const DrawerExample = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Button colorScheme="green" onClick={onOpen}>
        Åpne
      </Button>
      <Drawer isOpen={isOpen} placement="right" onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Lag din konto</DrawerHeader>

          <DrawerBody>
            <Input placeholder="Skriv her..." />
          </DrawerBody>

          <DrawerFooter>
            <Button variant="outline" mr={3} onClick={onClose}>
              Avbryt
            </Button>
            <Button colorScheme="blue">Lagre</Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  );
};`,k=`const PlacementExample = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [placement, setPlacement] = useState<"right" | "left" | "top" | "bottom">("right");

  const handlePlacementChange = (nextValue: "right" | "left" | "top" | "bottom") => {
    setPlacement(nextValue);
  };

  return (
    <>
      <RadioGroup defaultValue={placement} onChange={handlePlacementChange}>
        <Stack direction="row" mb="4">
          <Radio value="top">Topp</Radio>
          <Radio value="right">Høyre</Radio>
          <Radio value="bottom">Bunn</Radio>
          <Radio value="left">Venstre</Radio>
        </Stack>
      </RadioGroup>
      <Button colorScheme="blue" onClick={onOpen}>
        Åpne
      </Button>
      <Drawer placement={placement} onClose={onClose} isOpen={isOpen}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerHeader borderBottomWidth="1px">Drawer</DrawerHeader>
          <DrawerBody>
            <p>Noe innhold...</p>
            <p>Noe innhold...</p>
            <p>Noe innhold...</p>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
};`,B=`const DrawerFocusExample = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const firstField = useRef<HTMLInputElement>(null);

  return (
    <>
      <Button colorScheme="green" onClick={onOpen}>
        Lag bruker
      </Button>
      <Drawer isOpen={isOpen} placement="right" initialFocusRef={firstField} onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader borderBottomWidth="1px">Lag en ny konto</DrawerHeader>

          <DrawerBody>
            <Stack spacing="24px">
              <Box>
                <FormLabel htmlFor="username">Navn</FormLabel>
                <Input ref={firstField} id="username" placeholder="Brukernavn" />
              </Box>

              <Box>
                <FormLabel htmlFor="url">Url</FormLabel>
                <InputGroup>
                  <InputLeftAddon>https://</InputLeftAddon>
                  <Input type="url" id="url" placeholder="Domene" />
                  <InputRightAddon>.com</InputRightAddon>
                </InputGroup>
              </Box>

              <Box>
                <FormLabel htmlFor="owner">Velg eier</FormLabel>
                <Select id="owner" defaultValue="segun">
                  <option value="ola">Ola Nordmann</option>
                  <option value="kari">Kari Nordmann</option>
                </Select>
              </Box>

              <Box>
                <FormLabel htmlFor="desc">Beskrivelse</FormLabel>
                <Textarea id="desc" />
              </Box>
            </Stack>
          </DrawerBody>

          <DrawerFooter borderTopWidth="1px">
            <Button variant="outline" mr={3} onClick={onClose}>
              Avbryt
            </Button>
            <Button colorScheme="blue">Send inn</Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  );
};`,f=`const SizeExample = () => {
  const [size, setSize] = useState<string | undefined>();
  const { isOpen, onOpen, onClose } = useDisclosure();

  const handleClick = (newSize: string) => {
    setSize(newSize);
    onOpen();
  };

  const sizes: string[] = ["xs", "sm", "md", "lg", "xl", "full"];

  return (
    <>
      {sizes.map((size) => (
        <Button onClick={() => handleClick(size)} key={size} m={4}>{\`Åpne \${size} Drawer\`}</Button>
      ))}

      <Drawer onClose={onClose} isOpen={isOpen} size={size}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>{\`\${size} drawer innhold\`}</DrawerHeader>
          <DrawerBody>
            <p>
              Kartverket er Norges nasjonale kartmyndighet, og har som sin primære oppgave å bidra med geografisk
              informasjon og tjenester av høy kvalitet til samfunnet. Dette omfatter både produksjon av kart og
              oppmålingstjenester, samt forvaltning av eiendomsinformasjon.
            </p>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
};`,j=`export const App = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  return (
    <>
      <Button onClick={onOpen}>Open</Button>
      <Drawer isOpen={isOpen} onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Create your account</DrawerHeader>

          <DrawerBody>
            <form
              id='my-form'
              onSubmit={(e) => {
                e.preventDefault()
                console.log('submitted')
              }}
            >
              <Input name='nickname' placeholder='Type here...' />
            </form>
          </DrawerBody>

          <DrawerFooter>
            <Button type='submit' form='my-form'>
              Save
            </Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  )
}`;function l(o){const r={code:"code",h1:"h1",p:"p",pre:"pre",...m(),...o.components};return e.jsxs(e.Fragment,{children:[e.jsx(d,{of:w}),`
`,e.jsxs(c,{children:[e.jsx(r.h1,{id:"drawer",children:"Drawer"}),e.jsx(r.p,{children:`Drawer er et panel som sklir ut fra kanten av skjermen. Den kan være nyttig hvis du vil at brukeren skal se detaljer eller gjøre en oppgave
uten å bytte side. Drawer kan komme ut fra alle kanter av skjermen.`}),e.jsx(r.pre,{children:e.jsx(r.code,{className:"language-jsx",children:`import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
} from "@kvib/react";
`})}),e.jsx(D,{component:"Drawer"}),e.jsx(n,{light:!0,children:"Plassering"}),e.jsx(i,{variant:"outline",borderRadius:"0",children:e.jsx(s,{children:e.jsx(a,{of:h})})}),e.jsx(t,{code:k,dark:!0}),e.jsx(n,{light:!0,children:"Fokus"}),e.jsx(i,{variant:"outline",borderRadius:"0",children:e.jsx(s,{children:e.jsx(a,{of:x})})}),e.jsx(t,{code:B,dark:!0}),e.jsx(n,{light:!0,children:"Størrelser"}),e.jsx(i,{variant:"outline",borderRadius:"0",children:e.jsx(s,{children:e.jsx(a,{of:g})})}),e.jsx(t,{code:f,dark:!0}),e.jsx(n,{light:!0,children:"Bruk av form i en Drawer"}),e.jsxs(r.p,{children:["Hvis du skal bruke form i en drawer må du bruke biblioteker som ",e.jsx(r.code,{children:"react-hook-form"})," eller ",e.jsx(r.code,{children:"formik"}),". Her er den anbefalte måten å gjøre det på:"]}),e.jsx(t,{code:j,dark:!0}),e.jsx(n,{light:!0,children:"Props"}),e.jsx(i,{variant:"outline",borderRadius:"0",children:e.jsx(s,{children:e.jsx(a,{of:p})})}),e.jsx(t,{code:C,dark:!0}),e.jsx(u,{of:p})]})]})}function rr(o={}){const{wrapper:r}={...m(),...o.components};return r?e.jsx(r,{...o,children:e.jsx(l,{...o})}):l(o)}export{rr as default};
