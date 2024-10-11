import{j as e}from"./extends-CwFRzn3r.js";import{r as v}from"./index-BwDkhjyp.js";import{c as O,M as x,a as w,b as C}from"./modal-overlay-BUyZrJgU.js";import{M as S}from"./modal-content-BJmJrIq4.js";import{f as R}from"./forward-ref-BWI-Phbn.js";import{a as j,M as E}from"./modal-footer-BGD7Y1hz.js";import{u as D}from"./use-disclosure-CdGn7wGE.js";import{B as n}from"./Button-CnJN7iGK.js";function u(o){const{leastDestructiveRef:t,...a}=o;return e.jsx(O,{...a,initialFocusRef:t})}const A=R((o,t)=>e.jsx(S,{ref:t,role:"alertdialog",...o})),B={title:"Overlay/Alert Dialog",component:u,parameters:{docs:{story:{inline:!0},canvas:{sourceState:"shown"}}},argTypes:{isOpen:{required:!0,description:"If true, the modal will be open.",table:{type:{summary:"boolean"}},control:"boolean"},leastDestructiveRef:{required:!0,table:{type:{summary:"RefObject<FocusableElement>"}},control:"object"},onClose:{required:!0,description:"Callback invoked to close the modal.",table:{type:{summary:"() => void"}},control:"function"},allowPinchZoom:{description:"Handle zoom/pinch gestures on iOS devices when scroll locking is enabled.",table:{type:{summary:"boolean"},defaultValue:{summary:"false"}},control:"boolean"},autoFocus:{description:"If true, the modal will autofocus the first enabled and interactive element within the ModalContent",table:{type:{summary:"boolean"},defaultValue:{summary:"true"}},control:"boolean"},blockScrollOnMount:{description:"If true, scrolling will be disabled on the body when the modal opens.",table:{type:{summary:"boolean"},defaultValue:{summary:"true"}},control:"boolean"},closeOnEsc:{description:"If true, the modal will close when the Esc key is pressed",table:{type:{summary:"boolean"},defaultValue:{summary:"true"}},control:"boolean"},closeOnOverlayClick:{description:"If true, the modal will close when the overlay is clicked",table:{type:{summary:"boolean"},defaultValue:{summary:"true"}},control:"boolean"},finalFocusRef:{description:"The ref of element to receive focus when the modal closes.",table:{type:{summary:"RefObject<FocusableElement>"}},control:"object"},id:{description:"The id of the modal",table:{type:{summary:"string"}},control:"text"},isCentered:{description:"If true, the modal will be centered on screen.",table:{type:{summary:"boolean"},defaultValue:{summary:"false"}},control:"boolean"},lockFocusAcrossFrames:{description:"Enables aggressive focus capturing within iframes. - If true: keep focus in the lock, no matter where lock is active - If false: allows focus to move outside of iframe",table:{type:{summary:"boolean"},defaultValue:{summary:"false"}},control:"boolean"},motionPreset:{description:"The transition that should be used for the modal",table:{type:{summary:"MotionPreset"},defaultValue:{summary:"scale"}},control:"text"},onCloseComplete:{description:"Fires when all exiting nodes have completed animating out",table:{type:{summary:"() => void"}},control:"function"},onEsc:{description:"Callback fired when the escape key is pressed and focus is within modal",table:{type:{summary:"() => void"}},control:"function"},onOverlayClick:{description:"Callback fired when the overlay is clicked.",table:{type:{summary:"() => void"}},control:"function"},portalProps:{description:"Props to be forwarded to the portal component",table:{type:{summary:"Pick< PortalProps, 'appendToParentPortal' | 'containerRef' >"}},control:"object"},preserveScrollBarGap:{description:"If true, a `padding-right` will be applied to the body element that's equal to the width of the scrollbar. This can help prevent some unpleasant flickering effect and content adjustment when the modal opens",table:{type:{summary:"boolean"},defaultValue:{summary:"true"}},control:"boolean"},returnFocusOnClose:{description:"If true, the modal will return focus to the element that triggered it when it closes.",table:{type:{summary:"boolean"},defaultValue:{summary:"true"}},control:"boolean"},scrollBehavior:{description:"Where scroll behavior should originate. - If set to inside, scroll only occurs within the ModalBody. - If set to outside, the entire ModalContent will scroll within the viewport.",table:{type:{summary:"ScrollBehavior"},defaultValue:{summary:"outside"}},control:"text"},trapFocus:{description:"If false, focus lock will be disabled completely. This is useful in situations where you still need to interact with other surrounding elements. 🚨Warning: We don't recommend doing this because it hurts the accessibility of the modal, based on WAI-ARIA specifications.",table:{type:{summary:"boolean"},defaultValue:{summary:"true"}},control:"boolean"},useInert:{description:"A11y: If true, the siblings of the modal will have `aria-hidden` set to true so that screen readers can only see the modal. This is commonly known as making the other elements **inert**",table:{type:{summary:"boolean"},defaultValue:{summary:"true"}},control:"boolean"}},args:{onClose:void 0,onCloseComplete:void 0,onEsc:void 0,onOverlayClick:void 0}},l=({...o})=>{const{isOpen:t,onOpen:a,onClose:r}=D(),s=v.useRef(null);return e.jsxs(e.Fragment,{children:[e.jsx(n,{colorScheme:"red",onClick:a,children:"Slett"}),e.jsx(u,{...o,isOpen:t,leastDestructiveRef:s,onClose:r,children:e.jsx(x,{children:e.jsxs(A,{children:[e.jsx(w,{fontSize:"lg",fontWeight:"bold",children:"Slett"}),e.jsx(C,{children:"Er du sikker? Du kan ikke angre senere."}),e.jsxs(j,{children:[e.jsx(n,{ref:s,onClick:r,children:"Avbryt"}),e.jsx(n,{colorScheme:"red",onClick:r,ml:3,children:"Slett"})]})]})})})]})},i={args:{},render:o=>e.jsx(l,{...o})},I=({...o})=>{const{isOpen:t,onOpen:a,onClose:r}=D(),s=v.useRef(null);return e.jsxs(e.Fragment,{children:[e.jsx(n,{onClick:a,children:"Forkast endringer"}),e.jsxs(u,{...o,motionPreset:"slideInBottom",leastDestructiveRef:s,onClose:r,isOpen:t,isCentered:!0,children:[e.jsx(x,{}),e.jsxs(A,{children:[e.jsx(w,{children:"Forkast endringer?"}),e.jsx(E,{}),e.jsx(C,{children:"Er du sikker på at du vil forkaste notatene? 44 ord vil bli slettet."}),e.jsxs(j,{children:[e.jsx(n,{ref:s,onClick:r,children:"Nei"}),e.jsx(n,{colorScheme:"red",ml:3,children:"Ja"})]})]})]})]})},c={args:{},render:o=>e.jsx(I,{...o})};var d,m,p;l.parameters={...l.parameters,docs:{...(d=l.parameters)==null?void 0:d.docs,source:{originalSource:`({
  ...args
}) => {
  const {
    isOpen,
    onOpen,
    onClose
  } = useDisclosure();
  const cancelRef = useRef<HTMLButtonElement>(null);
  return <>
      <Button colorScheme="red" onClick={onOpen}>
        Slett
      </Button>

      <KvibAlertDialog {...args} isOpen={isOpen} leastDestructiveRef={cancelRef} onClose={onClose}>
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
      </KvibAlertDialog>
    </>;
}`,...(p=(m=l.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};var h,f,b;i.parameters={...i.parameters,docs:{...(h=i.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {},
  render: args => <AlertDialogExample {...args} />
}`,...(b=(f=i.parameters)==null?void 0:f.docs)==null?void 0:b.source}}};var y,g,k;c.parameters={...c.parameters,docs:{...(y=c.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {},
  render: args => <TransitionExample {...args} />
}`,...(k=(g=c.parameters)==null?void 0:g.docs)==null?void 0:k.source}}};const F=["AlertDialogExample","AlertDialog","AlertDialogTransition"],z=Object.freeze(Object.defineProperty({__proto__:null,AlertDialog:i,AlertDialogExample:l,AlertDialogTransition:c,__namedExportsOrder:F,default:B},Symbol.toStringTag,{value:"Module"}));export{z as A,c as a,i as b,l as c};
