import{j as e}from"./jsx-runtime-sfY7k0Xq.js";import{C as y}from"./close-button-C8_g2cP4.js";import{r as c}from"./index-CcKhGcwW.js";import{P as g}from"./portal-6abwbB-C.js";import{D as d,a as x,b as w,c as v,d as j,e as k,f as C,g as D,h as P,i as T,j as I}from"./dialog-DThW9tSe.js";import{B as r}from"./Button-C2e2oxpU.js";import{B as O}from"./box-C9nK2UO9.js";const B=c.forwardRef(function(l,a){const{children:u,portalled:p=!0,portalRef:h,backdrop:b=!0,...f}=l;return e.jsxs(g,{disabled:!p,container:h,children:[b&&e.jsx(d,{}),e.jsx(x,{children:e.jsx(w,{ref:a,...f,asChild:!1,children:u})})]})}),E=c.forwardRef(function(l,a){return e.jsx(v,{position:"absolute",top:"2",insetEnd:"2",...l,asChild:!0,children:e.jsx(y,{size:"sm",ref:a,children:l.children})})}),m=j,F=k,M=C,R=D,$=d,S=P,A=T,_=I,z={title:"Komponenter/Dialog",component:m,argTypes:{isOpen:{name:"isOpen*",description:"If true, the modal will be open.",table:{type:{summary:"boolean"}},control:"boolean"},onClose:{description:"Callback invoked to close the modal.",table:{type:{summary:"() => void"}},control:"text"},allowPinchZoom:{name:"isOpen*",description:"Handle zoom/pinch gestures on iOS devices when scroll locking is enabled.",table:{type:{summary:"boolean"}},control:"boolean"},autoFocus:{description:"If true, the modal will autofocus the first enabled and interactive element within the ModalContent",table:{type:{summary:"boolean"}},control:"boolean"},blockScrollOnMount:{description:"If true, scrolling will be disabled on the body when the modal opens.",table:{type:{summary:"boolean"}},control:"boolean"},closeOnEsc:{description:"If true, the modal will close when the Esc key is pressed",table:{type:{summary:"boolean"}},control:"boolean"},closeOnOverlayClick:{description:"If true, the modal will close when the overlay is clicked",table:{type:{summary:"boolean"}},control:"boolean"},finalFocusRef:{description:"The ref of element to receive focus when the modal closes.",table:{type:{summary:"RefObject<FocusableElement>"}},control:"object"},initialFocusRef:{description:"The ref of element to receive focus when the modal opens.",table:{type:{summary:"RefObject<FocusableElement>"}},control:"object"},isCentered:{description:"If true, the modal will be centered on screen.",table:{type:{summary:"boolean"}},control:"boolean"},lockFocusAcrossFrames:{description:"Enables aggressive focus capturing within iframes. - If true: keep focus in the lock, no matter where lock is active - If false: allows focus to move outside of iframe",table:{type:{summary:"boolean"}},control:"boolean"},motionPreset:{description:"The transition that should be used for the modal",table:{type:{summary:"MotionPreset"},defaultValue:{summary:"scale"}},control:"text"},onCloseComplete:{description:"Fires when all exiting nodes have completed animating out",table:{type:{summary:"() => void"}},control:"text"},onEsc:{description:"Callback fired when the escape key is pressed and focus is within modal",table:{type:{summary:"() => void"}},control:"text"},onOverlayClick:{description:"Callback fired when the overlay is clicked.",table:{type:{summary:"() => void"}},control:"text"},portalProps:{description:"Props to be forwarded to the portal component",table:{type:{summary:'Pick< PortalProps, "appendToParentPortal" | "containerRef" >'}},control:"text"},preserveScrollBarGap:{description:"If true, a `padding-right` will be applied to the body element that's equal to the width of the scrollbar. This can help prevent some unpleasant flickering effect and content adjustment when the modal opens",table:{type:{summary:"boolean"}},control:"boolean"},returnFocusOnClose:{description:"If true, the modal will return focus to the element that triggered it when it closes.",table:{type:{summary:"boolean"}},control:"boolean"},scrollBehavior:{description:"Where scroll behavior should originate. - If set to inside, scroll only occurs within the ModalBody. - If set to outside, the entire ModalContent will scroll within the viewport.",table:{type:{summary:"ScrollBehavior"},defaultValue:{summary:"outside"}},control:"text"},size:{description:"The size of the Modal",table:{type:{summary:"xs | sm | md | lg | xl | 2xl | 3xl | 4xl | 5xl | 6xl | full"},defaultValue:{summary:"md"}},options:["xs","sm","md","lg","xl","2xl","3xl","4xl","5xl","6xl","full"],control:{type:"radio"}},trapFocus:{description:"If false, focus lock will be disabled completely. This is useful in situations where you still need to interact with other surrounding elements. 🚨Warning: We don't recommend doing this because it hurts the accessibility of the modal, based on WAI-ARIA specifications.",table:{type:{summary:"boolean"}},control:"boolean"},useInert:{description:"A11y: If true, the siblings of the modal will have `aria-hidden` set to true so that screen readers can only see the modal. This is commonly known as making the other elements **inert**",table:{type:{summary:"boolean"}},control:"boolean"}},args:{onCloseComplete:void 0,onEsc:void 0,onOverlayClick:void 0,onClose:void 0}},H=({...o})=>e.jsx(e.Fragment,{children:e.jsxs(m,{...o,children:[e.jsx(A,{asChild:!0,children:e.jsx(r,{variant:"outline",children:"Åpne dialog"})}),e.jsx($,{}),e.jsxs(B,{children:[e.jsx(M,{children:e.jsx(S,{children:"Her er en modal"})}),e.jsx(R,{children:"Modaler må kun vises etter en brukerinteraksjon, og skal ikke avbryte brukeren på noe vis."}),e.jsxs(F,{justifyContent:"space-between",children:[e.jsx(r,{variant:"tertiary",colorPalette:o.colorPalette,children:"Tertiær"}),e.jsxs(O,{children:[e.jsx(r,{mr:3,variant:"secondary",colorPalette:o.colorPalette,children:"Sekundær"}),e.jsx(_,{asChild:!0,children:e.jsx(r,{colorPalette:o.colorPalette,children:"Primær"})})]})]}),e.jsx(E,{})]})]})}),t={render:o=>e.jsx(H,{...o}),parameters:{docs:{source:{type:"code",language:"tsx"}}}};var n,s,i;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`{
  render: (args: DialogProps) => <ModalExample {...args} />,
  parameters: {
    docs: {
      source: {
        type: "code",
        language: "tsx"
      }
    }
  }
}`,...(i=(s=t.parameters)==null?void 0:s.docs)==null?void 0:i.source}}};const W=["Preview"],N=Object.freeze(Object.defineProperty({__proto__:null,Preview:t,__namedExportsOrder:W,default:z},Symbol.toStringTag,{value:"Module"}));export{N as M,t as P};
