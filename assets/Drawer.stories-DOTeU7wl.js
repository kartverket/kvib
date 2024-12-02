import{j as e}from"./jsx-runtime-CQsLhzk5.js";import{a5 as d,a6 as y,a7 as b,g as a,a8 as f,a9 as w,aa as g,ab as v,ac as D,ad as x,ae as k,l as C,af as P}from"./index-CyhnlmWi.js";const O={title:"Komponenter/Drawer",component:d,parameters:{docs:{story:{inline:!0},canvas:{sourceState:"shown"}}},argTypes:{isOpen:{description:"If true, the modal will be open.",table:{type:{summary:"boolean"}},control:"boolean"},onClose:{description:"Callback invoked to close the modal.",table:{type:{summary:"() => void"}},control:"text"},allowPinchZoom:{description:"Handle zoom/pinch gestures on iOS devices when scroll locking is enabled.",table:{type:{summary:"boolean"},defaultValue:{summary:"false"}},control:"boolean"},autoFocus:{description:"If true, the modal will autofocus the first enabled and interactive element within the ModalContent",table:{type:{summary:"boolean"},defaultValue:{summary:"true"}},control:"boolean"},blockScrollOnMount:{description:"If true, scrolling will be disabled on the body when the modal opens.",table:{type:{summary:"boolean"},defaultValue:{summary:"true"}},control:"boolean"},closeOnEsc:{description:"If true, the modal will close when the Esc key is pressed",table:{type:{summary:"boolean"},defaultValue:{summary:"true"}},control:"boolean"},closeOnOverlayClick:{description:"f true, the modal will close when the overlay is clicked",table:{type:{summary:"boolean"},defaultValue:{summary:"true"}},control:"boolean"},finalFocusRef:{description:"The ref of element to receive focus when the modal closes.",table:{type:{summary:"RefObject<FocusableElement>"}},control:"text"},id:{description:"The id of the modal",table:{type:{summary:"String"}},control:"text"},initialFocusRef:{description:"The ref of element to receive focus when the modal opens.",table:{type:{summary:"RefObject<FocusableElement>"}},control:"text"},isFullHeight:{description:"If true and drawer's placement is top or bottom, the drawer will occupy the viewport height (100vh)",table:{type:{summary:"boolean"}},control:"boolean"},lockFocusAcrossFrames:{description:"Enables aggressive focus capturing within iframes. - If true: keep focus in the lock, no matter where lock is active - If false: allows focus to move outside of iframe",table:{type:{summary:"boolean"},defaultValue:{summary:"false"}},control:"boolean"},onCloseComplete:{description:"Fires when all exiting nodes have completed animating out",table:{type:{summary:"() => void"}},control:"text"},onOverlayClick:{description:"Callback fired when the overlay is clicked.",table:{type:{summary:"() => void"}},control:"text"},placement:{description:"The placement of the drawer",table:{type:{summary:"bottom | top | start | end"}},defaultValue:{summary:"end"},control:"text"},portalProps:{description:"Props to be forwarded to the portal component",table:{type:{summary:'Pick< PortalProps, "appendToParentPortal" | "containerRef" >'}},control:"text"},preserveScrollBarGap:{description:"If true, a `padding-right` will be applied to the body element that's equal to the width of the scrollbar. This can help prevent some unpleasant flickering effect and content adjustment when the modal opens",table:{type:{summary:"boolean"},defaultValue:{summary:"true"}},control:"boolean"},returnFocusOnClose:{description:"If true, the modal will return focus to the element that triggered it when it closes.",table:{type:{summary:"boolean"},defaultValue:{summary:"true"}},control:"boolean"},size:{description:"Size of the Drawer",table:{type:{summary:"xs | sm | md | lg | xl | full"},defaultValue:{summary:"xs"}},options:["xs","sm","md","lg","xl","full"],control:{type:"radio"}},trapFocus:{description:"If false, focus lock will be disabled completely. This is useful in situations where you still need to interact with other surrounding elements. 🚨Warning: We don't recommend doing this because it hurts the accessibility of the modal, based on WAI-ARIA specifications.",table:{type:{summary:"boolean"},defaultValue:{summary:"true"}},control:"boolean"},useInert:{description:"A11y: If true, the siblings of the modal will have `aria-hidden` set to true so that screen readers can only see the modal. This is commonly known as making the other elements **inert**",table:{type:{summary:"boolean"},defaultValue:{summary:"true"}},control:"boolean"}},args:{allowPinchZoom:!1,autoFocus:!0,blockScrollOnMount:!0,closeOnEsc:!0,closeOnOverlayClick:!0,lockFocusAcrossFrames:!1,placement:"end",preserveScrollBarGap:!0,returnFocusOnClose:!0,size:"xs",trapFocus:!0,useInert:!0,onOverlayClick:void 0,onClose:void 0,onCloseComplete:void 0,onEsc:void 0}},t=({...o})=>{const{open:p,onOpen:h,onClose:l}=y();return e.jsxs(d,{...o,open:p,onClose:l,children:[e.jsx(b,{}),e.jsx(a,{as:f,colorPalette:o.colorPalette,onClick:h,children:"Åpne"}),e.jsx(w,{children:e.jsxs(g,{children:[e.jsx(v,{}),e.jsx(D,{children:e.jsx(x,{children:"Lag din konto"})}),e.jsx(k,{children:e.jsx(C,{placeholder:"Skriv her..."})}),e.jsxs(P,{children:[e.jsx(a,{colorPalette:o.colorPalette,variant:"secondary",mr:3,onClick:l,children:"Avbryt"}),e.jsx(a,{colorPalette:o.colorPalette,children:"Lagre"})]})]})})]})},r={render:o=>e.jsx(t,{...o})};var n,s,i;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`({
  ...args
}) => {
  const {
    open,
    onOpen,
    onClose
  } = useDisclosure();
  return <Drawer {...args} open={open} onClose={onClose}>
      <DrawerBackdrop />
      <Button as={DrawerTrigger} colorPalette={args.colorPalette} onClick={onOpen}>
        Åpne
      </Button>
      <DrawerPositioner>
        <DrawerContent>
          <DrawerCloseTrigger />
          <DrawerHeader>
            <DrawerTitle>Lag din konto</DrawerTitle>
          </DrawerHeader>

          <DrawerBody>
            <Input placeholder="Skriv her..." />
          </DrawerBody>

          <DrawerFooter>
            <Button colorPalette={args.colorPalette} variant="secondary" mr={3} onClick={onClose}>
              Avbryt
            </Button>
            <Button colorPalette={args.colorPalette}>Lagre</Button>
          </DrawerFooter>
        </DrawerContent>
      </DrawerPositioner>
    </Drawer>;
}`,...(i=(s=t.parameters)==null?void 0:s.docs)==null?void 0:i.source}}};var c,u,m;r.parameters={...r.parameters,docs:{...(c=r.parameters)==null?void 0:c.docs,source:{originalSource:`{
  render: (args: DrawerProps) => <DrawerExample {...args} />
}`,...(m=(u=r.parameters)==null?void 0:u.docs)==null?void 0:m.source}}};const j=["DrawerExample","Preview"],T=Object.freeze(Object.defineProperty({__proto__:null,DrawerExample:t,Preview:r,__namedExportsOrder:j,default:O},Symbol.toStringTag,{value:"Module"}));export{T as D,r as P};
