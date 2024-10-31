import{j as o}from"./extends-CwFRzn3r.js";import{useMDXComponents as m}from"./index-DlpNa54Y.js";import{ae as d,ah as n,ai as i,af as l,ag as c}from"./index-D7Kl20qE.js";import{D as v,F as f,b as t,a as P}from"./Feedback-oujG440w.js";import{P as g,a as x,b as h,c as C,d as B,e as F,f as a}from"./Popover.stories-BJs-xOz5.js";import{C as p,a as s}from"./Card-jUBPBQ-A.js";import"./index-BwDkhjyp.js";import"./_commonjsHelpers-BosuxZz1.js";import"./iframe-DxPpY7qe.js";import"../sb-preview/runtime.js";import"./index-CS4BWtGh.js";import"./index-D-8MO0q_.js";import"./assertThisInitialized-DSoh8oXT.js";import"./inheritsLoose-B6jfs0L0.js";import"./setPrototypeOf-DgZC2w_0.js";import"./index-DF3CPj03.js";import"./index-DrFu-skq.js";import"./box-CwIaBbUI.js";import"./factory-DBKMNJMh.js";import"./emotion-styled.browser.esm-KUABWefE.js";import"./emotion-element-5486c51c.browser.esm-xLAo67gU.js";import"./image-GsZWH-VT.js";import"./forward-ref-BWI-Phbn.js";import"./use-image-rNdzB_Ea.js";import"./use-safe-layout-effect-BnICyLBj.js";import"./omit-QLD0Eizt.js";import"./simple-grid-ZnRIKZLi.js";import"./grid-BNFEBO0r.js";import"./use-theme-CeOC8r1f.js";import"./hooks-Dk7VeZ_r.js";import"./responsive-CwLgsqRj.js";import"./heading-05dRngNe.js";import"./use-style-config-B2siLCbt.js";import"./index-CfyPTyT-.js";import"./cx-BDMMs1jM.js";import"./text-D14Jyc6W.js";import"./flex-v5DFvFs4.js";import"./Link-D6DR4S49.js";import"./Combination-DhNDPOzd.js";import"./defineProperty-BylEvKcw.js";import"./popover-trigger-B48GfZiR.js";import"./use-popper-DwNTykfS.js";import"./use-merge-refs-Bdxaq0s4.js";import"./use-disclosure-CdGn7wGE.js";import"./use-callback-ref-DA6UG1mJ.js";import"./use-focus-effect-BY0uqI8l.js";import"./use-event-listener-DbiM-QVt.js";import"./owner-DF4q1r8F.js";import"./is-element-C52yPwBl.js";import"./use-update-effect-CNg9DBIF.js";import"./focusable-crJ8ziAt.js";import"./use-focus-on-pointer-down-BI4L5zXl.js";import"./use-outside-click-DJDnsvpj.js";import"./lazy-DLVTVQVU.js";import"./call-all-DDzecCnU.js";import"./proxy-NyFW0ziH.js";import"./define-styles-BSAHv3yx.js";import"./context-CBKykClo.js";import"./close-button-C2STa05D.js";import"./icon-BmokjFuu.js";import"./Button-yx5TWCfg.js";import"./button-CcUc8H6T.js";import"./spinner-CI5qPk1o.js";import"./emotion-react.browser.esm-0Zac8NuU.js";import"./attr-sHTFgF0E.js";import"./center-Ds0pdlwh.js";import"./h-stack-DtOTlfD9.js";import"./stack-BdCvkUuU.js";import"./children-2ZXUntH3.js";import"./Icon-AWJq4l__.js";/* empty css              */import"./Form-control-DDEvLp3l.js";import"./form-control-RaYef-ka.js";import"./Form-label-CcuP-A5M.js";import"./input-sbpWslp1.js";import"./use-form-control-DrpX4ys0.js";import"./ButtonGroup-CPfUJfpb.js";import"./IconButton-Bj25AnSx.js";import"./use-boolean-CY0foEXq.js";import"./radio-Cpsvm0ym.js";import"./index-BbAC0Ngi.js";import"./visually-hidden.style-BUiBK_kv.js";import"./split-CzYrjwZo.js";import"./providers-BmY41TRh.js";import"./calc-C4XOv3Qc.js";import"./css-var-DE0-P1bc.js";import"./pick-DBnSFT3T.js";const j=`const PopoverFocusExample = ({ ...args }) => {
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
};`;function u(r){const e={code:"code",h1:"h1",p:"p",pre:"pre",...m(),...r.components};return o.jsxs(o.Fragment,{children:[o.jsx(d,{of:g}),`
`,o.jsxs(v,{children:[o.jsx(e.h1,{id:"popover",children:"Popover"}),o.jsx(e.p,{children:"Popover er en dialog som flyter rundt en trigger."}),o.jsx(e.pre,{children:o.jsx(e.code,{className:"language-jsx",children:`import {
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
`})}),o.jsx(f,{component:"Popover"}),o.jsx(t,{light:!0,children:"Fokus på element når Popover åpnes"}),o.jsx(p,{variant:"outline",borderRadius:"0",children:o.jsx(s,{children:o.jsx(n,{of:x})})}),o.jsx(i,{code:j,dark:!0}),o.jsx(t,{light:!0,children:"Fange fokus i Popover"}),o.jsxs(e.p,{children:[`Hvis Popover har en form, vil du kanskje fange fokus inne i Popoveren og lukke den når brukeren er ferdig og trykker på "Lagre".
Bruk `,o.jsx(e.code,{children:"react-focus-lock"})," for å fange fokus inne i ",o.jsx(e.code,{children:"PopoveContent"})]}),o.jsx(p,{variant:"outline",borderRadius:"0",children:o.jsx(s,{children:o.jsx(n,{of:h})})}),o.jsx(i,{code:b,dark:!0}),o.jsx(t,{light:!0,children:"Kontrollert bruk"}),o.jsx(p,{variant:"outline",borderRadius:"0",children:o.jsx(s,{children:o.jsx(n,{of:C})})}),o.jsx(i,{code:k,dark:!0}),o.jsx(t,{light:!0,children:"Popover Anchor"}),o.jsx(p,{variant:"outline",borderRadius:"0",children:o.jsx(s,{children:o.jsx(n,{of:B})})}),o.jsx(i,{code:R,dark:!0}),o.jsx(P,{title:"Tilpasse stil",description:"",story:o.jsx(l,{of:F,sourceState:"hidden"})}),o.jsx(t,{light:!0,children:"Props"}),o.jsx(l,{of:a}),o.jsx(c,{of:a})]})]})}function se(r={}){const{wrapper:e}={...m(),...r.components};return e?o.jsx(e,{...r,children:o.jsx(u,{...r})}):u(r)}export{se as default};
