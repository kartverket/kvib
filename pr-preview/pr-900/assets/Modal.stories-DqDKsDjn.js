import{j as e}from"./extends-CwFRzn3r.js";import{r as v}from"./index-BwDkhjyp.js";import{e as i,M as d,a as m,b as u}from"./modal-overlay-y0vbcUgo.js";import{M as p}from"./modal-content-idGtK2UU.js";import{M as h,a as x}from"./modal-footer-BWohZAuX.js";import{u as M}from"./use-disclosure-CdGn7wGE.js";import{B as n}from"./Button-BE2-1vnN.js";import{B as U}from"./box-Cs-tJ6EH.js";import{T as Z}from"./text-CypcOzo0.js";import{F as N}from"./Form-control-BdnVChy_.js";import{F as Q}from"./Form-label-dFo3DmS2.js";import{I as X}from"./input-BT3C-fnf.js";import{F as Y}from"./flex-DUW0W68E.js";import{S as $}from"./select-D64daKoA.js";const ee=`
const { isOpen, onOpen, onClose } = useDisclosure();
return (
  <>
    <Button onClick={onOpen} colorScheme={args.colorScheme}>
      Åpne modal
    </Button>

    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Her er en modal</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          Modaler må kun vises etter en brukerinteraksjon, og skal ikke avbryte brukeren på noe vis.
        </ModalBody>

        <ModalFooter justifyContent="space-between">
          <Button onClick={onClose} variant="tertiary">
            Tertiær
          </Button>
          <Box>
            <Button mr={3} onClick={onClose} variant="secondary">
              Sekundær
            </Button>
            <Button>Primær</Button>
          </Box>
        </ModalFooter>
      </ModalContent>
    </Modal>
  </>
);
`,oe=`
const { isOpen, onOpen, onClose } = useDisclosure();
return (
  <>
    <Button onClick={onOpen}>Åpne modal med scroll</Button>

    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Modal med scroll</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <Text fontWeight="bold" mb="1rem">
            Her er en modal hvor du kan scrolle innholdet bak.
          </Text>
        </ModalBody>
        <ModalFooter>
          <Button mr={3} onClick={onClose} variant="secondary">
            Avbryt
          </Button>
          <Button>Bekreft</Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  </>
);
`,ne=`
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
        <ModalHeader>Modal med skjema</ModalHeader>
        <ModalCloseButton />
        <ModalBody pb={6}>
          <FormControl>
            <FormLabel>Skriv inn noe</FormLabel>
            <Input ref={initialRef} placeholder="Placeholder" />
          </FormControl>
        </ModalBody>

        <ModalFooter>
          <Button mr={3} variant="secondary">
            Avbryt
          </Button>
          <Button onClick={onClose}>
            Send inn skjema
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  </>
);
`,re=`
const { isOpen, onOpen, onClose } = useDisclosure();
return (
  <>
    <Button onClick={onOpen}>Åpne modal</Button>

    <Modal onClose={onClose} isOpen={isOpen} isCentered>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Sentrert modal</ModalHeader>
        <ModalCloseButton />
        <ModalBody>Denne modalen vises i midten av skjermen.</ModalBody>
        <ModalFooter>
          <Button onClick={onClose}>Lukk</Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  </>
);
`,le=`
const { isOpen, onOpen, onClose } = useDisclosure();
return (
  <>
    <Button onClick={onOpen}>Åpne modal</Button>
    <Modal isCentered onClose={onClose} isOpen={isOpen} motionPreset="slideInBottom">
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Modal Transition</ModalHeader>
        <ModalCloseButton />
        <ModalBody>Denne modalen skyves inn med animasjon.</ModalBody>
        <ModalFooter>
          <Button mr={3} onClick={onClose} variant="secondary">
            Avbryt
          </Button>
          <Button>Bekreft</Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  </>
);
`,te=`
const { isOpen, onOpen, onClose } = useDisclosure();
const [size, setSize] = useState("md");
const sizes = ["xs", "sm", "md", "lg", "xl", "full"];

return (
  <>
    <FormControl>
      <FormLabel htmlFor="select">Velg størrelse for modal</FormLabel>
      <Flex gap="0.5rem">
        <Select id="select" onChange={e => setSize(e.target.value)} value={size} w="8rem">
          {sizes.map(size => (
            <option key={size} value={size}>
              {size}
            </option>
          ))}
        </Select>
        <Button onClick={onOpen}>Åpne modal</Button>
      </Flex>
    </FormControl>

    <KvibModal {...args} onClose={onClose} size={size} isOpen={isOpen}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Modal i forskjellige størrelser</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          Du har åpnet modalen i størrelse <b>{size}</b>.
        </ModalBody>
        <ModalFooter>
          <Button onClick={onClose}>Lukk</Button>
        </ModalFooter>
      </ModalContent>
    </KvibModal>
  </>
);
`,se=`
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
      Åpne modal med blurry bakgrunn
    </Button>
    <Button
      ml="4"
      onClick={() => {
        setOverlay(<OverlayTwo />);
        onOpen();
      }}
    >
      Åpne modal med inverterte farger
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
`,ae={title:"Komponenter/Modal",component:i,argTypes:{isOpen:{name:"isOpen*",description:"If true, the modal will be open.",table:{type:{summary:"boolean"}},control:"boolean"},onClose:{description:"Callback invoked to close the modal.",table:{type:{summary:"() => void"}},control:"text"},allowPinchZoom:{name:"isOpen*",description:"Handle zoom/pinch gestures on iOS devices when scroll locking is enabled.",table:{type:{summary:"boolean"}},control:"boolean"},autoFocus:{description:"If true, the modal will autofocus the first enabled and interactive element within the ModalContent",table:{type:{summary:"boolean"}},control:"boolean"},blockScrollOnMount:{description:"If true, scrolling will be disabled on the body when the modal opens.",table:{type:{summary:"boolean"}},control:"boolean"},closeOnEsc:{description:"If true, the modal will close when the Esc key is pressed",table:{type:{summary:"boolean"}},control:"boolean"},closeOnOverlayClick:{description:"If true, the modal will close when the overlay is clicked",table:{type:{summary:"boolean"}},control:"boolean"},finalFocusRef:{description:"The ref of element to receive focus when the modal closes.",table:{type:{summary:"RefObject<FocusableElement>"}},control:"object"},initialFocusRef:{description:"The ref of element to receive focus when the modal opens.",table:{type:{summary:"RefObject<FocusableElement>"}},control:"object"},isCentered:{description:"If true, the modal will be centered on screen.",table:{type:{summary:"boolean"}},control:"boolean"},lockFocusAcrossFrames:{description:"Enables aggressive focus capturing within iframes. - If true: keep focus in the lock, no matter where lock is active - If false: allows focus to move outside of iframe",table:{type:{summary:"boolean"}},control:"boolean"},motionPreset:{description:"The transition that should be used for the modal",table:{type:{summary:"MotionPreset"},defaultValue:{summary:"scale"}},control:"text"},onCloseComplete:{description:"Fires when all exiting nodes have completed animating out",table:{type:{summary:"() => void"}},control:"text"},onEsc:{description:"Callback fired when the escape key is pressed and focus is within modal",table:{type:{summary:"() => void"}},control:"text"},onOverlayClick:{description:"Callback fired when the overlay is clicked.",table:{type:{summary:"() => void"}},control:"text"},portalProps:{description:"Props to be forwarded to the portal component",table:{type:{summary:'Pick< PortalProps, "appendToParentPortal" | "containerRef" >'}},control:"text"},preserveScrollBarGap:{description:"If true, a `padding-right` will be applied to the body element that's equal to the width of the scrollbar. This can help prevent some unpleasant flickering effect and content adjustment when the modal opens",table:{type:{summary:"boolean"}},control:"boolean"},returnFocusOnClose:{description:"If true, the modal will return focus to the element that triggered it when it closes.",table:{type:{summary:"boolean"}},control:"boolean"},scrollBehavior:{description:"Where scroll behavior should originate. - If set to inside, scroll only occurs within the ModalBody. - If set to outside, the entire ModalContent will scroll within the viewport.",table:{type:{summary:"ScrollBehavior"},defaultValue:{summary:"outside"}},control:"text"},size:{description:"The size of the Modal",table:{type:{summary:"xs | sm | md | lg | xl | 2xl | 3xl | 4xl | 5xl | 6xl | full"},defaultValue:{summary:"md"}},options:["xs","sm","md","lg","xl","2xl","3xl","4xl","5xl","6xl","full"],control:{type:"radio"}},trapFocus:{description:"If false, focus lock will be disabled completely. This is useful in situations where you still need to interact with other surrounding elements. 🚨Warning: We don't recommend doing this because it hurts the accessibility of the modal, based on WAI-ARIA specifications.",table:{type:{summary:"boolean"}},control:"boolean"},useInert:{description:"A11y: If true, the siblings of the modal will have `aria-hidden` set to true so that screen readers can only see the modal. This is commonly known as making the other elements **inert**",table:{type:{summary:"boolean"}},control:"boolean"}},args:{onCloseComplete:void 0,onEsc:void 0,onOverlayClick:void 0,onClose:void 0}},de=({...o})=>{const{isOpen:l,onOpen:t,onClose:r}=M();return e.jsxs(e.Fragment,{children:[e.jsx(n,{onClick:t,colorScheme:o.colorScheme,children:"Åpne modal"}),e.jsxs(i,{...o,isOpen:l,onClose:r,children:[e.jsx(d,{}),e.jsxs(p,{children:[e.jsx(m,{children:"Her er en modal"}),e.jsx(h,{colorScheme:o.colorScheme}),e.jsx(u,{children:"Modaler må kun vises etter en brukerinteraksjon, og skal ikke avbryte brukeren på noe vis."}),e.jsxs(x,{justifyContent:"space-between",children:[e.jsx(n,{onClick:r,variant:"tertiary",colorScheme:o.colorScheme,children:"Tertiær"}),e.jsxs(U,{children:[e.jsx(n,{mr:3,onClick:r,variant:"secondary",colorScheme:o.colorScheme,children:"Sekundær"}),e.jsx(n,{colorScheme:o.colorScheme,children:"Primær"})]})]})]})]})]})},y={render:o=>e.jsx(de,{...o}),parameters:{docs:{source:{type:"code",language:"tsx",code:ee}}}},ie=({...o})=>{const{isOpen:l,onOpen:t,onClose:r}=M();return e.jsxs(e.Fragment,{children:[e.jsx(n,{onClick:t,children:"Åpne modal med scroll"}),e.jsxs(i,{...o,isOpen:l,onClose:r,children:[e.jsx(d,{}),e.jsxs(p,{children:[e.jsx(m,{children:"Modal med scroll"}),e.jsx(h,{}),e.jsx(u,{children:e.jsx(Z,{fontWeight:"bold",mb:"1rem",children:"Her er en modal hvor du kan scrolle innholdet bak."})}),e.jsxs(x,{children:[e.jsx(n,{mr:3,onClick:r,variant:"secondary",children:"Avbryt"}),e.jsx(n,{variant:"primary",children:"Bekreft"})]})]})]})]})},b={render:o=>e.jsx(ie,{...o}),args:{blockScrollOnMount:!1},parameters:{docs:{source:{type:"code",language:"tsx",code:oe}}}},ce=({...o})=>{const{isOpen:l,onOpen:t,onClose:r}=M(),s=v.useRef(null),c=v.useRef(null);return e.jsxs(e.Fragment,{children:[e.jsx(n,{onClick:t,children:"Åpne modal"}),e.jsx(n,{ml:4,ref:c,children:"Jeg får fokus på close"}),e.jsxs(i,{...o,initialFocusRef:s,finalFocusRef:c,isOpen:l,onClose:r,children:[e.jsx(d,{}),e.jsxs(p,{children:[e.jsx(m,{children:"Modal med skjema"}),e.jsx(h,{}),e.jsx(u,{pb:6,children:e.jsxs(N,{children:[e.jsx(Q,{children:"Skriv inn noe"}),e.jsx(X,{ref:s,placeholder:"Placeholder"})]})}),e.jsxs(x,{children:[e.jsx(n,{colorScheme:o.colorScheme,mr:3,variant:"secondary",children:"Avbryt"}),e.jsx(n,{colorScheme:o.colorScheme,onClick:r,variant:"primary",children:"Send inn skjema"})]})]})]})]})},k={render:o=>e.jsx(ce,{...o}),parameters:{docs:{source:{type:"code",language:"tsx",code:ne}}}},me=({...o})=>{const{isOpen:l,onOpen:t,onClose:r}=M();return e.jsxs(e.Fragment,{children:[e.jsx(n,{onClick:t,children:"Åpne modal"}),e.jsxs(i,{...o,onClose:r,isOpen:l,isCentered:!0,children:[e.jsx(d,{}),e.jsxs(p,{children:[e.jsx(m,{children:"Sentrert modal"}),e.jsx(h,{}),e.jsx(u,{children:"Denne modalen vises i midten av skjermen."}),e.jsx(x,{children:e.jsx(n,{onClick:r,children:"Lukk"})})]})]})]})},g={render:o=>e.jsx(me,{...o}),parameters:{docs:{source:{type:"code",language:"tsx",code:re}}}},ue=({...o})=>{const{isOpen:l,onOpen:t,onClose:r}=M();return e.jsxs(e.Fragment,{children:[e.jsx(n,{onClick:t,children:"Åpne modal"}),e.jsxs(i,{...o,isCentered:!0,onClose:r,isOpen:l,motionPreset:"slideInBottom",children:[e.jsx(d,{}),e.jsxs(p,{children:[e.jsx(m,{children:"Modal Transition"}),e.jsx(h,{}),e.jsx(u,{children:"Denne modalen skyves inn med animasjon."}),e.jsxs(x,{children:[e.jsx(n,{mr:3,onClick:r,variant:"secondary",children:"Avbryt"}),e.jsx(n,{children:"Bekreft"})]})]})]})]})},C={render:o=>e.jsx(ue,{...o}),parameters:{docs:{source:{type:"code",language:"tsx",code:le}}}},pe=({...o})=>{const{isOpen:l,onOpen:t,onClose:r}=M(),[s,c]=v.useState("md"),O=["xs","sm","md","lg","xl","full"];return e.jsxs(e.Fragment,{children:[e.jsxs(N,{children:[e.jsx(Q,{htmlFor:"select",children:"Velg størrelse for modal"}),e.jsxs(Y,{gap:"0.5rem",children:[e.jsx($,{id:"select",onChange:a=>c(a.target.value),value:s,w:"12rem",children:O.map(a=>e.jsx("option",{value:a,children:a},a))}),e.jsx(n,{onClick:t,children:"Åpne modal"})]})]}),e.jsxs(i,{...o,onClose:r,size:s,isOpen:l,children:[e.jsx(d,{}),e.jsxs(p,{children:[e.jsx(m,{children:"Modal i forskjellige størrelser"}),e.jsx(h,{}),e.jsxs(u,{children:["Du har åpnet modalen i størrelse ",e.jsx("b",{children:s}),"."]}),e.jsx(x,{children:e.jsx(n,{onClick:r,children:"Lukk"})})]})]})]})},f={render:o=>e.jsx(pe,{...o}),parameters:{docs:{source:{type:"code",language:"tsx",code:te}}}},he=({...o})=>{const l=()=>e.jsx(d,{bg:"blackAlpha.300",backdropFilter:"blur(10px) hue-rotate(90deg)"}),t=()=>e.jsx(d,{bg:"none",backdropFilter:"auto",backdropInvert:"80%",backdropBlur:"2px"}),{isOpen:r,onOpen:s,onClose:c}=M(),[O,a]=v.useState(e.jsx(l,{}));return e.jsxs(e.Fragment,{children:[e.jsx(n,{onClick:()=>{a(e.jsx(l,{})),s()},children:"Åpne modal med blurry bakgrunn"}),e.jsx(n,{ml:"4",onClick:()=>{a(e.jsx(t,{})),s()},children:"Åpne modal med inverterte farger"}),e.jsxs(i,{...o,isCentered:!0,isOpen:r,onClose:c,children:[O,e.jsxs(p,{children:[e.jsx(m,{children:"Bakteppe"}),e.jsx(h,{}),e.jsx(u,{children:e.jsx(Z,{children:"Egendefinerte baktepper!"})}),e.jsx(x,{children:e.jsx(n,{onClick:c,children:"Lukk"})})]})]})]})},j={render:o=>e.jsx(he,{...o}),parameters:{docs:{source:{type:"code",language:"tsx",code:se}}}};var B,S,F;y.parameters={...y.parameters,docs:{...(B=y.parameters)==null?void 0:B.docs,source:{originalSource:`{
  render: args => <ModalExample {...args} />,
  parameters: {
    docs: {
      source: {
        type: "code",
        language: "tsx",
        code: ModalString
      }
    }
  }
}`,...(F=(S=y.parameters)==null?void 0:S.docs)==null?void 0:F.source}}};var w,T,E;b.parameters={...b.parameters,docs:{...(w=b.parameters)==null?void 0:w.docs,source:{originalSource:`{
  render: args => <ModalScrollingExample {...args} />,
  args: {
    blockScrollOnMount: false
  },
  parameters: {
    docs: {
      source: {
        type: "code",
        language: "tsx",
        code: ModalScrollingString
      }
    }
  }
}`,...(E=(T=b.parameters)==null?void 0:T.docs)==null?void 0:E.source}}};var z,I,R;k.parameters={...k.parameters,docs:{...(z=k.parameters)==null?void 0:z.docs,source:{originalSource:`{
  render: args => <ModalFocusExample {...args} />,
  parameters: {
    docs: {
      source: {
        type: "code",
        language: "tsx",
        code: ModalFocusString
      }
    }
  }
}`,...(R=(I=k.parameters)==null?void 0:I.docs)==null?void 0:R.source}}};var H,P,D;g.parameters={...g.parameters,docs:{...(H=g.parameters)==null?void 0:H.docs,source:{originalSource:`{
  render: args => <ModalCenteredExample {...args} />,
  parameters: {
    docs: {
      source: {
        type: "code",
        language: "tsx",
        code: ModalCenteredString
      }
    }
  }
}`,...(D=(P=g.parameters)==null?void 0:P.docs)==null?void 0:D.source}}};var A,L,W;C.parameters={...C.parameters,docs:{...(A=C.parameters)==null?void 0:A.docs,source:{originalSource:`{
  render: args => <ModalTransitionExample {...args} />,
  parameters: {
    docs: {
      source: {
        type: "code",
        language: "tsx",
        code: ModalTransitionString
      }
    }
  }
}`,...(W=(L=C.parameters)==null?void 0:L.docs)==null?void 0:W.source}}};var _,V,K;f.parameters={...f.parameters,docs:{...(_=f.parameters)==null?void 0:_.docs,source:{originalSource:`{
  render: args => <ModalSizeExample {...args} />,
  parameters: {
    docs: {
      source: {
        type: "code",
        language: "tsx",
        code: ModalSizesString
      }
    }
  }
}`,...(K=(V=f.parameters)==null?void 0:V.docs)==null?void 0:K.source}}};var J,q,G;j.parameters={...j.parameters,docs:{...(J=j.parameters)==null?void 0:J.docs,source:{originalSource:`{
  render: args => <ModalBackdropExample {...args} />,
  parameters: {
    docs: {
      source: {
        type: "code",
        language: "tsx",
        code: ModalBackdropString
      }
    }
  }
}`,...(G=(q=j.parameters)==null?void 0:q.docs)==null?void 0:G.source}}};const xe=["Preview","ModalScrolling","ModalFocus","ModalCentered","ModalTransition","ModalSizes","ModalBackdrop"],Te=Object.freeze(Object.defineProperty({__proto__:null,ModalBackdrop:j,ModalCentered:g,ModalFocus:k,ModalScrolling:b,ModalSizes:f,ModalTransition:C,Preview:y,__namedExportsOrder:xe,default:ae},Symbol.toStringTag,{value:"Module"}));export{Te as M,y as P,g as a,f as b,C as c,k as d,j as e,b as f};
