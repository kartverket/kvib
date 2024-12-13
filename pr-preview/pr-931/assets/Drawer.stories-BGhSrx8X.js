import{j as e}from"./index-D6_wGsWO.js";import{az as i,u as m,aA as d,t as r,aB as p,aC as h,aD as y,aE as b,aF as f,aG as w,E as v,aH as x}from"./index-DmZmBakc.js";const g={title:"Komponenter/Drawer",component:i,parameters:{docs:{story:{inline:!0},canvas:{sourceState:"shown"}}},argTypes:{isOpen:{description:"If true, the modal will be open.",table:{type:{summary:"boolean"}},control:"boolean"},onClose:{description:"Callback invoked to close the modal.",table:{type:{summary:"() => void"}},control:"text"},allowPinchZoom:{description:"Handle zoom/pinch gestures on iOS devices when scroll locking is enabled.",table:{type:{summary:"boolean"},defaultValue:{summary:"false"}},control:"boolean"},autoFocus:{description:"If true, the modal will autofocus the first enabled and interactive element within the ModalContent",table:{type:{summary:"boolean"},defaultValue:{summary:"true"}},control:"boolean"},blockScrollOnMount:{description:"If true, scrolling will be disabled on the body when the modal opens.",table:{type:{summary:"boolean"},defaultValue:{summary:"true"}},control:"boolean"},closeOnEsc:{description:"If true, the modal will close when the Esc key is pressed",table:{type:{summary:"boolean"},defaultValue:{summary:"true"}},control:"boolean"},closeOnOverlayClick:{description:"f true, the modal will close when the overlay is clicked",table:{type:{summary:"boolean"},defaultValue:{summary:"true"}},control:"boolean"},finalFocusRef:{description:"The ref of element to receive focus when the modal closes.",table:{type:{summary:"RefObject<FocusableElement>"}},control:"text"},id:{description:"The id of the modal",table:{type:{summary:"String"}},control:"text"},initialFocusRef:{description:"The ref of element to receive focus when the modal opens.",table:{type:{summary:"RefObject<FocusableElement>"}},control:"text"},isFullHeight:{description:"If true and drawer's placement is top or bottom, the drawer will occupy the viewport height (100vh)",table:{type:{summary:"boolean"}},control:"boolean"},lockFocusAcrossFrames:{description:"Enables aggressive focus capturing within iframes. - If true: keep focus in the lock, no matter where lock is active - If false: allows focus to move outside of iframe",table:{type:{summary:"boolean"},defaultValue:{summary:"false"}},control:"boolean"},onCloseComplete:{description:"Fires when all exiting nodes have completed animating out",table:{type:{summary:"() => void"}},control:"text"},onOverlayClick:{description:"Callback fired when the overlay is clicked.",table:{type:{summary:"() => void"}},control:"text"},placement:{description:"The placement of the drawer",table:{type:{summary:"bottom | top | start | end"}},defaultValue:{summary:"end"},control:"text"},portalProps:{description:"Props to be forwarded to the portal component",table:{type:{summary:'Pick< PortalProps, "appendToParentPortal" | "containerRef" >'}},control:"text"},preserveScrollBarGap:{description:"If true, a `padding-right` will be applied to the body element that's equal to the width of the scrollbar. This can help prevent some unpleasant flickering effect and content adjustment when the modal opens",table:{type:{summary:"boolean"},defaultValue:{summary:"true"}},control:"boolean"},returnFocusOnClose:{description:"If true, the modal will return focus to the element that triggered it when it closes.",table:{type:{summary:"boolean"},defaultValue:{summary:"true"}},control:"boolean"},size:{description:"Size of the Drawer",table:{type:{summary:"xs | sm | md | lg | xl | full"},defaultValue:{summary:"xs"}},options:["xs","sm","md","lg","xl","full"],control:{type:"radio"}},trapFocus:{description:"If false, focus lock will be disabled completely. This is useful in situations where you still need to interact with other surrounding elements. 🚨Warning: We don't recommend doing this because it hurts the accessibility of the modal, based on WAI-ARIA specifications.",table:{type:{summary:"boolean"},defaultValue:{summary:"true"}},control:"boolean"},useInert:{description:"A11y: If true, the siblings of the modal will have `aria-hidden` set to true so that screen readers can only see the modal. This is commonly known as making the other elements **inert**",table:{type:{summary:"boolean"},defaultValue:{summary:"true"}},control:"boolean"}},args:{allowPinchZoom:!1,autoFocus:!0,blockScrollOnMount:!0,closeOnEsc:!0,closeOnOverlayClick:!0,lockFocusAcrossFrames:!1,placement:"end",preserveScrollBarGap:!0,returnFocusOnClose:!0,size:"xs",trapFocus:!0,useInert:!0,onOverlayClick:void 0,onClose:void 0,onCloseComplete:void 0,onEsc:void 0}},k=({...o})=>{const{open:c,onOpen:u,onClose:a}=m();return e.jsxs(i,{...o,open:c,onClose:a,children:[e.jsx(d,{asChild:!0,children:e.jsx(r,{colorPalette:o.colorPalette,onClick:u,children:"Åpne"})}),e.jsx(p,{children:e.jsxs(h,{children:[e.jsx(y,{}),e.jsx(b,{children:e.jsx(f,{children:"Lag din konto"})}),e.jsx(w,{children:e.jsx(v,{placeholder:"Skriv her..."})}),e.jsxs(x,{children:[e.jsx(r,{colorPalette:o.colorPalette,variant:"secondary",mr:3,onClick:a,children:"Avbryt"}),e.jsx(r,{colorPalette:o.colorPalette,children:"Lagre"})]})]})})]})},t={render:o=>e.jsx(k,{...o})};var l,s,n;t.parameters={...t.parameters,docs:{...(l=t.parameters)==null?void 0:l.docs,source:{originalSource:`{
  render: (args: DrawerProps) => <DrawerExample {...args} />
}`,...(n=(s=t.parameters)==null?void 0:s.docs)==null?void 0:n.source}}};const C=["Preview"],O=Object.freeze(Object.defineProperty({__proto__:null,Preview:t,__namedExportsOrder:C,default:g},Symbol.toStringTag,{value:"Module"}));export{O as D,t as P};
