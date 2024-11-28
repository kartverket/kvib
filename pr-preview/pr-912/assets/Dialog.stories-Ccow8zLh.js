import{j as e}from"./jsx-runtime-CQsLhzk5.js";import{ag as s,ah as i,g as l,ai as c,aj as d,ak as m,al as u,am as p,an as h,B as b,ao as y,ap as f}from"./index-BrYXhiCR.js";const g={title:"Komponenter/Dialog",component:s,argTypes:{isOpen:{name:"isOpen*",description:"If true, the modal will be open.",table:{type:{summary:"boolean"}},control:"boolean"},onClose:{description:"Callback invoked to close the modal.",table:{type:{summary:"() => void"}},control:"text"},allowPinchZoom:{name:"isOpen*",description:"Handle zoom/pinch gestures on iOS devices when scroll locking is enabled.",table:{type:{summary:"boolean"}},control:"boolean"},autoFocus:{description:"If true, the modal will autofocus the first enabled and interactive element within the ModalContent",table:{type:{summary:"boolean"}},control:"boolean"},blockScrollOnMount:{description:"If true, scrolling will be disabled on the body when the modal opens.",table:{type:{summary:"boolean"}},control:"boolean"},closeOnEsc:{description:"If true, the modal will close when the Esc key is pressed",table:{type:{summary:"boolean"}},control:"boolean"},closeOnOverlayClick:{description:"If true, the modal will close when the overlay is clicked",table:{type:{summary:"boolean"}},control:"boolean"},finalFocusRef:{description:"The ref of element to receive focus when the modal closes.",table:{type:{summary:"RefObject<FocusableElement>"}},control:"object"},initialFocusRef:{description:"The ref of element to receive focus when the modal opens.",table:{type:{summary:"RefObject<FocusableElement>"}},control:"object"},isCentered:{description:"If true, the modal will be centered on screen.",table:{type:{summary:"boolean"}},control:"boolean"},lockFocusAcrossFrames:{description:"Enables aggressive focus capturing within iframes. - If true: keep focus in the lock, no matter where lock is active - If false: allows focus to move outside of iframe",table:{type:{summary:"boolean"}},control:"boolean"},motionPreset:{description:"The transition that should be used for the modal",table:{type:{summary:"MotionPreset"},defaultValue:{summary:"scale"}},control:"text"},onCloseComplete:{description:"Fires when all exiting nodes have completed animating out",table:{type:{summary:"() => void"}},control:"text"},onEsc:{description:"Callback fired when the escape key is pressed and focus is within modal",table:{type:{summary:"() => void"}},control:"text"},onOverlayClick:{description:"Callback fired when the overlay is clicked.",table:{type:{summary:"() => void"}},control:"text"},portalProps:{description:"Props to be forwarded to the portal component",table:{type:{summary:'Pick< PortalProps, "appendToParentPortal" | "containerRef" >'}},control:"text"},preserveScrollBarGap:{description:"If true, a `padding-right` will be applied to the body element that's equal to the width of the scrollbar. This can help prevent some unpleasant flickering effect and content adjustment when the modal opens",table:{type:{summary:"boolean"}},control:"boolean"},returnFocusOnClose:{description:"If true, the modal will return focus to the element that triggered it when it closes.",table:{type:{summary:"boolean"}},control:"boolean"},scrollBehavior:{description:"Where scroll behavior should originate. - If set to inside, scroll only occurs within the ModalBody. - If set to outside, the entire ModalContent will scroll within the viewport.",table:{type:{summary:"ScrollBehavior"},defaultValue:{summary:"outside"}},control:"text"},size:{description:"The size of the Modal",table:{type:{summary:"xs | sm | md | lg | xl | 2xl | 3xl | 4xl | 5xl | 6xl | full"},defaultValue:{summary:"md"}},options:["xs","sm","md","lg","xl","2xl","3xl","4xl","5xl","6xl","full"],control:{type:"radio"}},trapFocus:{description:"If false, focus lock will be disabled completely. This is useful in situations where you still need to interact with other surrounding elements. 🚨Warning: We don't recommend doing this because it hurts the accessibility of the modal, based on WAI-ARIA specifications.",table:{type:{summary:"boolean"}},control:"boolean"},useInert:{description:"A11y: If true, the siblings of the modal will have `aria-hidden` set to true so that screen readers can only see the modal. This is commonly known as making the other elements **inert**",table:{type:{summary:"boolean"}},control:"boolean"},colorPalette:{description:"The visual color appearance of the component",table:{type:{summary:"green | blue | gray | red"}},defaultValue:{summary:"green"},options:["green","blue","gray","red"],control:{type:"radio"}}},args:{colorPalette:"green",onCloseComplete:void 0,onEsc:void 0,onOverlayClick:void 0,onClose:void 0}},x=({...o})=>e.jsx(e.Fragment,{children:e.jsxs(s,{...o,children:[e.jsx(i,{asChild:!0,children:e.jsx(l,{colorPalette:o.colorPalette,children:"Åpne dialog"})}),e.jsx(c,{}),e.jsxs(d,{children:[e.jsx(m,{children:e.jsx(u,{children:"Her er en modal"})}),e.jsx(p,{children:"Modaler må kun vises etter en brukerinteraksjon, og skal ikke avbryte brukeren på noe vis."}),e.jsxs(h,{justifyContent:"space-between",children:[e.jsx(l,{variant:"tertiary",colorPalette:o.colorPalette,children:"Tertiær"}),e.jsxs(b,{children:[e.jsx(l,{mr:3,variant:"secondary",colorPalette:o.colorPalette,children:"Sekundær"}),e.jsx(y,{asChild:!0,children:e.jsx(l,{colorPalette:o.colorPalette,children:"Primær"})})]})]}),e.jsx(f,{})]})]})}),t={render:o=>e.jsx(x,{...o}),parameters:{docs:{source:{type:"code",language:"tsx"}}}};var a,r,n;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
  render: (args: DialogProps) => <ModalExample {...args} />,
  parameters: {
    docs: {
      source: {
        type: "code",
        language: "tsx"
      }
    }
  }
}`,...(n=(r=t.parameters)==null?void 0:r.docs)==null?void 0:n.source}}};const w=["Preview"],j=Object.freeze(Object.defineProperty({__proto__:null,Preview:t,__namedExportsOrder:w,default:g},Symbol.toStringTag,{value:"Module"}));export{j as M,t as P};
