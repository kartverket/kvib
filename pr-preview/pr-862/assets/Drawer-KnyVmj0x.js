import{j as e}from"./extends-CwFRzn3r.js";import{useMDXComponents as m}from"./index-DlpNa54Y.js";import{ae as d,ah as a,ai as t,ag as u}from"./index-k-h-8Dss.js";import{D as c,a as D,b as w,c as h,d as l}from"./Drawer.stories-Cf5fM_eo.js";import{D as x,F as g,b as n}from"./Feedback-Be-nclhu.js";import{C as i,a as s}from"./Card-Bn7RuWsc.js";import"./index-BwDkhjyp.js";import"./_commonjsHelpers-BosuxZz1.js";import"./iframe-DKUcOLmC.js";import"../sb-preview/runtime.js";import"./index-Dn0f7ynd.js";import"./index-D-8MO0q_.js";import"./isNativeReflectConstruct-lfp1ZYuW.js";import"./inheritsLoose-B6jfs0L0.js";import"./setPrototypeOf-DgZC2w_0.js";import"./index-DF3CPj03.js";import"./index-DrFu-skq.js";import"./chunk-65IR7CTH-BCoK_-h6.js";import"./chunk-OFOVX77R-COpOBI_W.js";import"./Combination-DhNDPOzd.js";import"./defineProperty-BylEvKcw.js";import"./index-yX8pBrvj.js";import"./chunk-3XANSPY5-CEuNXLts.js";import"./proxy-CzVOQe18.js";import"./chunk-ZJJGQIVY-Dk0gAx5w.js";import"./chunk-TR226DUX-DiR02sYQ.js";import"./chunk-6NHXDBFO-DotHZPjx.js";import"./index-CBajw-n2.js";import"./index-Bdxaq0s4.js";import"./chunk-34PD6CUK-B1dqEPkL.js";import"./index-CHDWSgKD.js";import"./index-DJS8qWMq.js";import"./chunk-DMO4EI7P-CbM7tafX.js";import"./chunk-7FWEOSAE-BgGQS5yP.js";import"./chunk-UIGT7YZF-BZ8OOi_0.js";import"./chunk-CYUETFQE-Byn0bAYO.js";import"./chunk-4FCEGNGT-fiGwVf8M.js";import"./chunk-37N6GCLA-kZIb89lP.js";import"./chunk-2GBDXOMA-DYcQJ-WZ.js";import"./chunk-RDF2AYID-BSAGDmjh.js";import"./chunk-DFWC5MHP-CwveL_zt.js";import"./index-DdrsuNi1.js";import"./chunk-ADBZ7YHX-CuaO3VUC.js";import"./chunk-FKYN3ZGE-Dj-484bu.js";import"./index-2ZXUntH3.js";import"./chunk-R3DH46PF-iWUMGBws.js";import"./chunk-6CVSDS6C-BAIATr_D.js";import"./chunk-56K2BSAJ-B2SooMhp.js";import"./chunk-3RSXBRAN-BgHuQDcO.js";import"./chunk-4IH3O7BJ-1_9Vphig.js";import"./chunk-7JBTTEVG-CYT7sRLE.js";import"./chunk-7JSBRQFI-CSWo1_dX.js";import"./chunk-KA2477BY-BRr71Die.js";import"./chunk-724WJZW4-D7beLSYm.js";import"./Button-ld38lsZs.js";import"./chunk-UVUR7MCU-CDviNqUv.js";import"./chunk-5PH6ULNP-DjlYY-Z2.js";import"./emotion-react.browser.esm-5ppwkrPI.js";import"./chunk-FAWTVNS3-h_p2ezMN.js";import"./chunk-3ASUQ6PA-BRAByO3y.js";import"./chunk-ZHMYA64R-DVnaPXQt.js";import"./chunk-G72KV6MB-CW_g5wqE.js";import"./Icon-CPAF9xaH.js";/* empty css              */import"./chunk-PULVB27S-BbQOsZmk.js";import"./Form-label-CsbnDGei.js";import"./chunk-QINAG4RG-D8ybSQBR.js";import"./chunk-SPIKMR6I-lNfAZPIg.js";import"./chunk-NEK3OOAM-y-5BEe1S.js";import"./chunk-JARCRF6W-C8V8GAuA.js";import"./chunk-2OOHT3W5-DQGV2H9e.js";import"./chunk-7OLJDQMT-BcrawTP2.js";import"./chunk-KRPLQIP4-B8CwleOo.js";import"./chunk-MFVQSVQB-CVs57b_v.js";const C=`const DrawerExample = () => {
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
}`;function p(o){const r={code:"code",h1:"h1",p:"p",pre:"pre",...m(),...o.components};return e.jsxs(e.Fragment,{children:[e.jsx(d,{of:c}),`
`,e.jsxs(x,{children:[e.jsx(r.h1,{id:"drawer",children:"Drawer"}),e.jsx(r.p,{children:`Drawer er et panel som sklir ut fra kanten av skjermen. Den kan være nyttig hvis du vil at brukeren skal se detaljer eller gjøre en oppgave
uten å bytte side. Drawer kan komme ut fra alle kanter av skjermen.`}),e.jsx(r.pre,{children:e.jsx(r.code,{className:"language-jsx",children:`import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
} from "@kvib/react";
`})}),e.jsx(g,{component:"Drawer"}),e.jsx(n,{light:!0,children:"Plassering"}),e.jsx(i,{variant:"outline",borderRadius:"0",children:e.jsx(s,{children:e.jsx(a,{of:D})})}),e.jsx(t,{code:k,dark:!0}),e.jsx(n,{light:!0,children:"Fokus"}),e.jsx(i,{variant:"outline",borderRadius:"0",children:e.jsx(s,{children:e.jsx(a,{of:w})})}),e.jsx(t,{code:B,dark:!0}),e.jsx(n,{light:!0,children:"Størrelser"}),e.jsx(i,{variant:"outline",borderRadius:"0",children:e.jsx(s,{children:e.jsx(a,{of:h})})}),e.jsx(t,{code:f,dark:!0}),e.jsx(n,{light:!0,children:"Bruk av form i en Drawer"}),e.jsxs(r.p,{children:["Hvis du skal bruke form i en drawer må du bruke biblioteker som ",e.jsx(r.code,{children:"react-hook-form"})," eller ",e.jsx(r.code,{children:"formik"}),". Her er den anbefalte måten å gjøre det på:"]}),e.jsx(t,{code:j,dark:!0}),e.jsx(n,{light:!0,children:"Props"}),e.jsx(i,{variant:"outline",borderRadius:"0",children:e.jsx(s,{children:e.jsx(a,{of:l})})}),e.jsx(t,{code:C,dark:!0}),e.jsx(u,{of:l})]})]})}function Xe(o={}){const{wrapper:r}={...m(),...o.components};return r?e.jsx(r,{...o,children:e.jsx(p,{...o})}):p(o)}export{Xe as default};
