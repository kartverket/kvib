import{j as o}from"./extends-CwFRzn3r.js";import{useMDXComponents as d}from"./index-DlpNa54Y.js";import{ae as c,ah as n,ai as i,af as l,ag as m}from"./index-B_29rcGw.js";import{P as v,a as f,b as P,c as g,d as x,e as h,f as a}from"./Popover.stories-BGFbW3VJ.js";import{D as C,F as B,b as t,a as F}from"./Feedback-DEYXld9b.js";import{C as p,a as s}from"./Card-BeZB5sUt.js";import"./index-BwDkhjyp.js";import"./_commonjsHelpers-BosuxZz1.js";import"./iframe-IMCsqiBJ.js";import"../sb-preview/runtime.js";import"./index-Dn0f7ynd.js";import"./index-D-8MO0q_.js";import"./isNativeReflectConstruct-lfp1ZYuW.js";import"./inheritsLoose-B6jfs0L0.js";import"./setPrototypeOf-DgZC2w_0.js";import"./index-DF3CPj03.js";import"./index-DrFu-skq.js";import"./Combination-DhNDPOzd.js";import"./defineProperty-BylEvKcw.js";import"./chunk-24I2HV4N-BwKAtiG7.js";import"./index-DUHZmgZA.js";import"./index-yX8pBrvj.js";import"./chunk-3XANSPY5-CEuNXLts.js";import"./index-Bvkiv1cC.js";import"./index-DdaX-njP.js";import"./index-DJS8qWMq.js";import"./index-DEiKcbOK.js";import"./index-CFS2lEUc.js";import"./index-DOEX-ehf.js";import"./chunk-LUYFNC5G-DV8XJogC.js";import"./index-Bdxaq0s4.js";import"./chunk-ZJJGQIVY-CoI1iMVy.js";import"./index-DLVTVQVU.js";import"./chunk-DMO4EI7P-D6u3hnqn.js";import"./chunk-7FWEOSAE-DBqCpNZ5.js";import"./chunk-UIGT7YZF-XoNRsZNz.js";import"./index-CHDWSgKD.js";import"./proxy-CzVOQe18.js";import"./chunk-37N6GCLA-D1CkRx4c.js";import"./chunk-2GBDXOMA-K_WHOyag.js";import"./chunk-PULVB27S-CgiffgmI.js";import"./Button-BTrFsz-j.js";import"./chunk-UVUR7MCU-TM6grcjD.js";import"./chunk-5PH6ULNP-B_hWxh7m.js";import"./emotion-react.browser.esm-DOaDIBza.js";import"./chunk-FAWTVNS3-tKAZUTn2.js";import"./chunk-3ASUQ6PA-DZH9lOZq.js";import"./chunk-ZHMYA64R-V_96TD_T.js";import"./chunk-G72KV6MB-s0NcBBxe.js";import"./index-2ZXUntH3.js";import"./Icon-Bw1o7Ynw.js";/* empty css              */import"./Form-control-CG1fyGaW.js";import"./chunk-DFWC5MHP-TuRmrrLs.js";import"./Form-label-D-r0Q-vl.js";import"./chunk-6CVSDS6C-DIHhJ7ei.js";import"./chunk-56K2BSAJ-DEJm4C0m.js";import"./ButtonGroup-BQtxj9tZ.js";import"./chunk-7JBTTEVG-DuShY1Xb.js";import"./chunk-7JSBRQFI-ZG6s8cg4.js";import"./chunk-KA2477BY-BRr71Die.js";import"./chunk-724WJZW4-D7beLSYm.js";import"./IconButton-Cq-AvSZh.js";import"./chunk-BBVTFCMB-CY0foEXq.js";import"./chunk-RDF2AYID-DCZN3YCE.js";import"./index-DdrsuNi1.js";import"./chunk-QINAG4RG-EokTgSxx.js";import"./chunk-SPIKMR6I-lNfAZPIg.js";import"./chunk-NEK3OOAM-DbYvnad0.js";import"./chunk-JARCRF6W-DgXWZoO5.js";import"./chunk-2OOHT3W5-CV6N7GVi.js";import"./chunk-R3DH46PF-iWUMGBws.js";import"./chunk-7OLJDQMT-lazN81OQ.js";import"./chunk-KRPLQIP4-ICIqHMLQ.js";import"./chunk-MFVQSVQB-CA8z8kWU.js";const j=`const PopoverFocusExample = ({ ...args }) => {
  const initialFocusRef = useRef(null);
  return (
    <Popover initialFocusRef={initialFocusRef} placement="bottom" closeOnBlur={false}>
      <PopoverTrigger>
        <Button>Trykk</Button>
      </PopoverTrigger>
      <PopoverContent color="white" bg="blue.800" borderColor="blue.800">
        <PopoverHeader pt={4} fontWeight="bold" border="0">
          Hjelp med oppsett
        </PopoverHeader>
        <PopoverArrow bg="blue.800" />
        <PopoverCloseButton />
        <PopoverBody>Det er lurt å sette opp emailbekreftelse for å få bekreftelse på ordren din.</PopoverBody>
        <PopoverFooter border="0" display="flex" alignItems="center" justifyContent="space-between" pb={4}>
          <Box fontSize="sm">Steg 2 av 4</Box>
          <ButtonGroup size="sm">
            <Button colorScheme="green">Legg til Email</Button>
            <Button colorScheme="blue" ref={initialFocusRef}>
              Neste
            </Button>
          </ButtonGroup>
        </PopoverFooter>
      </PopoverContent>
    </Popover>
  );
};`,b=`type TextInputProps = {
  label: string;
  id: string;
  [x: string]: any;
};

const TextInput = forwardRef<HTMLInputElement, TextInputProps>((props, ref) => {
  const { id, label, ...restProps } = props;
  return (
    <FormControl>
      <FormLabel htmlFor={id}>{label}</FormLabel>
      <Input ref={ref} id={id} {...restProps} />
    </FormControl>
  );
});

type FormProps = {
  firstFieldRef: Ref<HTMLInputElement>;
  onCancel: () => void;
};

const Form: FC<FormProps> = ({ firstFieldRef, onCancel }) => {
  return (
    <Stack spacing={4}>
      <TextInput label="Fornavn" id="first-name" ref={firstFieldRef} defaultValue="Ola" />
      <TextInput label="Etternavn" id="last-name" defaultValue="Nordmann" />
      <ButtonGroup display="flex" justifyContent="flex-end">
        <Button variant="outline" onClick={onCancel}>
          Avbryt
        </Button>
        <Button isDisabled colorScheme="green">
          Lagre
        </Button>
      </ButtonGroup>
    </Stack>
  );
};

const PopoverForm = ({ ...args }) => {
  const { onOpen, onClose, isOpen } = useDisclosure();
  const firstFieldRef = useRef<HTMLInputElement>(null);
  return (
    <>
      <Box display="inline-block" mr={3}>
        Ola Nordmann
      </Box>
      <Popover
        isOpen={isOpen}
        initialFocusRef={firstFieldRef}
        onOpen={onOpen}
        onClose={onClose}
        placement="right"
        closeOnBlur={false}
      >
        <PopoverTrigger>
          <IconButton size="sm" icon={"edit"} aria-label={"edit"} colorScheme="gray" />
        </PopoverTrigger>
        <PopoverContent p={5}>
          <FocusLock returnFocus persistentFocus={false}>
            <PopoverArrow />
            <PopoverCloseButton />
            <Form firstFieldRef={firstFieldRef} onCancel={onClose} />
          </FocusLock>
        </PopoverContent>
      </Popover>
    </>
  );
};`,k=`const ControlledUsage = ({ ...args }) => {
  const { isOpen, onToggle, onClose } = useDisclosure();

  return (
    <>
      <Button mr={5} onClick={onToggle}>
        Trigger
      </Button>
      <Popover
        returnFocusOnClose={false}
        isOpen={isOpen}
        onClose={onClose}
        placement="right"
        closeOnBlur={false}
      >
        <PopoverTrigger>
          <Button colorScheme="red">Popover</Button>
        </PopoverTrigger>
        <PopoverContent>
          <PopoverHeader fontWeight="semibold">Bekreftelse</PopoverHeader>
          <PopoverArrow />
          <PopoverCloseButton />
          <PopoverBody>Er du sikker på at du vil fortsette?</PopoverBody>
          <PopoverFooter display="flex" justifyContent="flex-end">
            <ButtonGroup size="sm">
              <Button variant="outline">Avbryt</Button>
              <Button colorScheme="red">Godkjenn</Button>
            </ButtonGroup>
          </PopoverFooter>
        </PopoverContent>
      </Popover>
    </>
  );
};`,R=`const WithPopoverAnchor = ({ ...args }) => {
  const [isEditing, setIsEditing] = useBoolean();
  const [color, setColor] = useState("red");
  return (
    <Popover
      isOpen={isEditing}
      onOpen={setIsEditing.on}
      onClose={setIsEditing.off}
      closeOnBlur={false}
      isLazy
      lazyBehavior="keepMounted"
    >
      <FormLabel htmlFor="anchor text">Prøv å redigere teksten</FormLabel>
      <HStack>
        <PopoverAnchor>
          <Input
            id="anchor text"
            color={color}
            w="auto"
            display="inline-flex"
            isDisabled={!isEditing}
            defaultValue="Popover Anchor"
          />
        </PopoverAnchor>

        <PopoverTrigger>
          <Button h="40px" colorScheme="blue">
            {isEditing ? "Lagre" : "Rediger"}
          </Button>
        </PopoverTrigger>
      </HStack>

      <PopoverContent>
        <PopoverBody>
          Farger:
          <RadioGroup value={color} onChange={(newColor) => setColor(newColor)}>
            <Stack direction="row">
              <Radio value="red">rød</Radio>
              <Radio value="blue">blå</Radio>
              <Radio value="green">grønn</Radio>
              <Radio value="purple">lilla</Radio>
            </Stack>
          </RadioGroup>
        </PopoverBody>
      </PopoverContent>
    </Popover>
  );
};`;function u(r){const e={code:"code",h1:"h1",p:"p",pre:"pre",...d(),...r.components};return o.jsxs(o.Fragment,{children:[o.jsx(c,{of:v}),`
`,o.jsxs(C,{children:[o.jsx(e.h1,{id:"popover",children:"Popover"}),o.jsx(e.p,{children:"Popover er en dialog som flyter rundt en trigger."}),o.jsx(e.pre,{children:o.jsx(e.code,{className:"language-jsx",children:`import {
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverHeader,
  PopoverBody,
  PopoverFooter,
  PopoverArrow,
  PopoverCloseButton,
  PopoverAnchor,
} from "@kvib/react";
`})}),o.jsx(B,{component:"Popover"}),o.jsx(t,{light:!0,children:"Fokus på element når Popover åpnes"}),o.jsx(p,{variant:"outline",borderRadius:"0",children:o.jsx(s,{children:o.jsx(n,{of:f})})}),o.jsx(i,{code:j,dark:!0}),o.jsx(t,{light:!0,children:"Fange fokus i Popover"}),o.jsxs(e.p,{children:[`Hvis Popover har en form, vil du kanskje fange fokus inne i Popoveren og lukke den når brukeren er ferdig og trykker på "Lagre".
Bruk `,o.jsx(e.code,{children:"react-focus-lock"})," for å fange fokus inne i ",o.jsx(e.code,{children:"PopoveContent"})]}),o.jsx(p,{variant:"outline",borderRadius:"0",children:o.jsx(s,{children:o.jsx(n,{of:P})})}),o.jsx(i,{code:b,dark:!0}),o.jsx(t,{light:!0,children:"Kontrollert bruk"}),o.jsx(p,{variant:"outline",borderRadius:"0",children:o.jsx(s,{children:o.jsx(n,{of:g})})}),o.jsx(i,{code:k,dark:!0}),o.jsx(t,{light:!0,children:"Popover Anchor"}),o.jsx(p,{variant:"outline",borderRadius:"0",children:o.jsx(s,{children:o.jsx(n,{of:x})})}),o.jsx(i,{code:R,dark:!0}),o.jsx(F,{title:"Tilpasse stil",description:"",story:o.jsx(l,{of:h,sourceState:"hidden"})}),o.jsx(t,{light:!0,children:"Props"}),o.jsx(l,{of:a}),o.jsx(m,{of:a})]})]})}function Jo(r={}){const{wrapper:e}={...d(),...r.components};return e?o.jsx(e,{...r,children:o.jsx(u,{...r})}):u(r)}export{Jo as default};
