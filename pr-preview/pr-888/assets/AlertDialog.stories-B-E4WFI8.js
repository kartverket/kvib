import{j as e}from"./extends-CwFRzn3r.js";import{r as u}from"./index-BwDkhjyp.js";import{e as O,M as m,a as p,b as g}from"./modal-overlay-C0uK6VRa.js";import{M as w}from"./modal-content-4Xxwg_pd.js";import{f as R}from"./forward-ref-BWI-Phbn.js";import{M as f,a as h}from"./modal-footer-CFNkBq26.js";import{u as y}from"./use-disclosure-CdGn7wGE.js";import{B as r}from"./Button-B2lbKAvu.js";function d(o){const{leastDestructiveRef:l,...a}=o;return e.jsx(O,{...a,initialFocusRef:l})}const b=R((o,l)=>e.jsx(w,{ref:l,role:"alertdialog",...o})),E=`
const { isOpen, onOpen, onClose } = useDisclosure();
const cancelRef = useRef<HTMLButtonElement>(null);

return (
  <>
    <Button colorScheme="red" onClick={onOpen}>
      Åpne alert dialog
    </Button>

    <AlertDialog isOpen={isOpen} leastDestructiveRef={cancelRef} onClose={onClose}>
      <AlertDialogOverlay>
        <AlertDialogContent>
          <AlertDialogHeader fontSize="lg" fontWeight="bold">
            Bekreft sletting
            <AlertDialogCloseButton />
          </AlertDialogHeader>

          <AlertDialogBody>Er du sikker på at du vil slette?</AlertDialogBody>

          <AlertDialogFooter>
            <Button ref={cancelRef} onClick={onClose} variant="secondary" colorScheme="blue">
              Avbryt
            </Button>
            <Button onClick={onClose} ml={3} colorScheme="red">
              Slett
            </Button>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialogOverlay>
    </AlertDialog>
  </>
);
`,F=`
const { isOpen, onOpen, onClose } = useDisclosure();
const cancelRef = useRef<HTMLButtonElement>(null);

return (
  <>
    <Button colorScheme="red" onClick={onOpen}>
      Åpne alert dialog
    </Button>
    <AlertDialog
      motionPreset="slideInBottom"
      leastDestructiveRef={cancelRef}
      onClose={onClose}
      isOpen={isOpen}
    >
      <AlertDialogOverlay />
      <AlertDialogContent>
        <AlertDialogHeader fontSize="lg" fontWeight="bold">
          Bekreft sletting
          <AlertDialogCloseButton />
        </AlertDialogHeader>

        <AlertDialogBody>Er du sikker på at du vil slette?</AlertDialogBody>

        <AlertDialogFooter>
          <Button ref={cancelRef} onClick={onClose} variant="secondary" colorScheme="blue">
            Avbryt
          </Button>
          <Button onClick={onClose} ml={3} colorScheme="red">
            Slett
          </Button>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  </>
);
`,I=`
const { isOpen, onOpen, onClose } = useDisclosure();
const cancelRef = useRef<HTMLButtonElement>(null);

return (
  <>
    <Button colorScheme="red" onClick={onOpen}>
      Åpne alert dialog
    </Button>
    <AlertDialog
      leastDestructiveRef={cancelRef}
      onClose={onClose}
      isOpen={isOpen}
      isCentered
    >
      <AlertDialogOverlay />
      <AlertDialogContent>
        <AlertDialogHeader fontSize="lg" fontWeight="bold">
          Bekreft sletting
          <AlertDialogCloseButton />
        </AlertDialogHeader>

        <AlertDialogBody>Er du sikker på at du vil slette?</AlertDialogBody>

        <AlertDialogFooter>
          <Button ref={cancelRef} onClick={onClose} variant="secondary" colorScheme="blue">
            Avbryt
          </Button>
          <Button onClick={onClose} ml={3} colorScheme="red">
            Slett
          </Button>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  </>
);
`,M={title:"Overlay/Alert Dialog",component:d,parameters:{docs:{story:{inline:!0},canvas:{sourceState:"hidden"}}},argTypes:{isOpen:{required:!0,description:"If true, the modal will be open.",table:{type:{summary:"boolean"}},control:"boolean"},leastDestructiveRef:{required:!0,table:{type:{summary:"RefObject<FocusableElement>"}},control:"object"},onClose:{required:!0,description:"Callback invoked to close the modal.",table:{type:{summary:"() => void"}},control:"function"},allowPinchZoom:{description:"Handle zoom/pinch gestures on iOS devices when scroll locking is enabled.",table:{type:{summary:"boolean"},defaultValue:{summary:"false"}},control:"boolean"},autoFocus:{description:"If true, the modal will autofocus the first enabled and interactive element within the ModalContent",table:{type:{summary:"boolean"},defaultValue:{summary:"true"}},control:"boolean"},blockScrollOnMount:{description:"If true, scrolling will be disabled on the body when the modal opens.",table:{type:{summary:"boolean"},defaultValue:{summary:"true"}},control:"boolean"},closeOnEsc:{description:"If true, the modal will close when the Esc key is pressed",table:{type:{summary:"boolean"},defaultValue:{summary:"true"}},control:"boolean"},closeOnOverlayClick:{description:"If true, the modal will close when the overlay is clicked",table:{type:{summary:"boolean"},defaultValue:{summary:"true"}},control:"boolean"},finalFocusRef:{description:"The ref of element to receive focus when the modal closes.",table:{type:{summary:"RefObject<FocusableElement>"}},control:"object"},id:{description:"The id of the modal",table:{type:{summary:"string"}},control:"text"},isCentered:{description:"If true, the modal will be centered on screen.",table:{type:{summary:"boolean"},defaultValue:{summary:"false"}},control:"boolean"},lockFocusAcrossFrames:{description:"Enables aggressive focus capturing within iframes. - If true: keep focus in the lock, no matter where lock is active - If false: allows focus to move outside of iframe",table:{type:{summary:"boolean"},defaultValue:{summary:"false"}},control:"boolean"},motionPreset:{description:"The transition that should be used for the modal",table:{type:{summary:"MotionPreset"},defaultValue:{summary:"scale"}},control:"text"},onCloseComplete:{description:"Fires when all exiting nodes have completed animating out",table:{type:{summary:"() => void"}},control:"function"},onEsc:{description:"Callback fired when the escape key is pressed and focus is within modal",table:{type:{summary:"() => void"}},control:"function"},onOverlayClick:{description:"Callback fired when the overlay is clicked.",table:{type:{summary:"() => void"}},control:"function"},portalProps:{description:"Props to be forwarded to the portal component",table:{type:{summary:"Pick< PortalProps, 'appendToParentPortal' | 'containerRef' >"}},control:"object"},preserveScrollBarGap:{description:"If true, a `padding-right` will be applied to the body element that's equal to the width of the scrollbar. This can help prevent some unpleasant flickering effect and content adjustment when the modal opens",table:{type:{summary:"boolean"},defaultValue:{summary:"true"}},control:"boolean"},returnFocusOnClose:{description:"If true, the modal will return focus to the element that triggered it when it closes.",table:{type:{summary:"boolean"},defaultValue:{summary:"true"}},control:"boolean"},scrollBehavior:{description:"Where scroll behavior should originate. - If set to inside, scroll only occurs within the ModalBody. - If set to outside, the entire ModalContent will scroll within the viewport.",table:{type:{summary:"ScrollBehavior"},defaultValue:{summary:"outside"}},control:"text"},trapFocus:{description:"If false, focus lock will be disabled completely. This is useful in situations where you still need to interact with other surrounding elements. 🚨Warning: We don't recommend doing this because it hurts the accessibility of the modal, based on WAI-ARIA specifications.",table:{type:{summary:"boolean"},defaultValue:{summary:"true"}},control:"boolean"},useInert:{description:"A11y: If true, the siblings of the modal will have `aria-hidden` set to true so that screen readers can only see the modal. This is commonly known as making the other elements **inert**",table:{type:{summary:"boolean"},defaultValue:{summary:"true"}},control:"boolean"}},args:{onClose:void 0,onCloseComplete:void 0,onEsc:void 0,onOverlayClick:void 0}},T=({...o})=>{const{isOpen:l,onOpen:a,onClose:t}=y(),n=u.useRef(null);return e.jsxs(e.Fragment,{children:[e.jsx(r,{colorScheme:"red",onClick:a,children:"Åpne alert dialog"}),e.jsx(d,{...o,isOpen:l,leastDestructiveRef:n,onClose:t,children:e.jsx(m,{children:e.jsxs(b,{children:[e.jsxs(p,{fontSize:"lg",fontWeight:"bold",children:["Bekreft sletting",e.jsx(f,{})]}),e.jsx(g,{children:"Er du sikker på at du vil slette?"}),e.jsxs(h,{children:[e.jsx(r,{ref:n,onClick:t,variant:"secondary",colorScheme:"blue",children:"Avbryt"}),e.jsx(r,{onClick:t,ml:3,colorScheme:"red",children:"Slett"})]})]})})})]})},s={render:o=>e.jsx(T,{...o}),parameters:{docs:{source:{type:"code",language:"tsx",code:E}}}},P=({...o})=>{const{isOpen:l,onOpen:a,onClose:t}=y(),n=u.useRef(null);return e.jsxs(e.Fragment,{children:[e.jsx(r,{colorScheme:"red",onClick:a,children:"Åpne alert dialog"}),e.jsxs(d,{...o,motionPreset:"slideInBottom",leastDestructiveRef:n,onClose:t,isOpen:l,children:[e.jsx(m,{}),e.jsxs(b,{children:[e.jsxs(p,{fontSize:"lg",fontWeight:"bold",children:["Bekreft sletting",e.jsx(f,{})]}),e.jsx(g,{children:"Er du sikker på at du vil slette?"}),e.jsxs(h,{children:[e.jsx(r,{ref:n,onClick:t,variant:"secondary",colorScheme:"blue",children:"Avbryt"}),e.jsx(r,{onClick:t,ml:3,colorScheme:"red",children:"Slett"})]})]})]})]})},i={render:o=>e.jsx(P,{...o}),parameters:{docs:{source:{type:"code",language:"tsx",code:F}}}},V=({...o})=>{const{isOpen:l,onOpen:a,onClose:t}=y(),n=u.useRef(null);return e.jsxs(e.Fragment,{children:[e.jsx(r,{colorScheme:"red",onClick:a,children:"Åpne alert dialog"}),e.jsxs(d,{...o,leastDestructiveRef:n,onClose:t,isOpen:l,isCentered:!0,children:[e.jsx(m,{}),e.jsxs(b,{children:[e.jsxs(p,{fontSize:"lg",fontWeight:"bold",children:["Bekreft sletting",e.jsx(f,{})]}),e.jsx(g,{children:"Er du sikker på at du vil slette?"}),e.jsxs(h,{children:[e.jsx(r,{ref:n,onClick:t,variant:"secondary",colorScheme:"blue",children:"Avbryt"}),e.jsx(r,{onClick:t,ml:3,colorScheme:"red",children:"Slett"})]})]})]})]})},c={render:o=>e.jsx(V,{...o}),parameters:{docs:{source:{type:"code",language:"tsx",code:I}}}};var C,A,D;s.parameters={...s.parameters,docs:{...(C=s.parameters)==null?void 0:C.docs,source:{originalSource:`{
  render: args => <AlertDialogExample {...args} />,
  parameters: {
    docs: {
      source: {
        type: "code",
        language: "tsx",
        code: AlertDialogString
      }
    }
  }
}`,...(D=(A=s.parameters)==null?void 0:A.docs)==null?void 0:D.source}}};var v,x,k;i.parameters={...i.parameters,docs:{...(v=i.parameters)==null?void 0:v.docs,source:{originalSource:`{
  render: args => <AlertDialogTransitionExample {...args} />,
  parameters: {
    docs: {
      source: {
        type: "code",
        language: "tsx",
        code: AlertDialogTransitionString
      }
    }
  }
}`,...(k=(x=i.parameters)==null?void 0:x.docs)==null?void 0:k.source}}};var j,S,B;c.parameters={...c.parameters,docs:{...(j=c.parameters)==null?void 0:j.docs,source:{originalSource:`{
  render: args => <AlertDialogCenteredExample {...args} />,
  parameters: {
    docs: {
      source: {
        type: "code",
        language: "tsx",
        code: AlertDialogCenteredString
      }
    }
  }
}`,...(B=(S=c.parameters)==null?void 0:S.docs)==null?void 0:B.source}}};const H=["Preview","AlertDialogTransition","AlertDialogCentered"],K=Object.freeze(Object.defineProperty({__proto__:null,AlertDialogCentered:c,AlertDialogTransition:i,Preview:s,__namedExportsOrder:H,default:M},Symbol.toStringTag,{value:"Module"}));export{K as A,s as P,c as a,i as b};
