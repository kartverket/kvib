import{j as e}from"./extends-CwFRzn3r.js";import{r as D}from"./index-BwDkhjyp.js";import{D as p,a as b}from"./drawer-content-BvcegRQO.js";import{M as y,a as j,b as g}from"./modal-overlay-BlwCg4fM.js";import{M as F,a as _}from"./modal-footer-BtVOgQU0.js";import{R as G,a as h}from"./radio-Cpsvm0ym.js";import{I as Z,a as $}from"./input-addon-C5TxTYFw.js";import{S as q}from"./select-DKTWB6WW.js";import{T as U}from"./textarea-_Ww1oJ89.js";import{u as w}from"./use-disclosure-CdGn7wGE.js";import{B as n}from"./Button-EXIhltg2.js";import{I as C}from"./input-sbpWslp1.js";import{S as K}from"./stack-BdCvkUuU.js";import{B as x}from"./box-CwIaBbUI.js";import{F as f}from"./Form-label-CcuP-A5M.js";import{I as J}from"./input-group-CqctEj_1.js";const Q={title:"Komponenter/Drawer",component:p,parameters:{docs:{story:{inline:!0},canvas:{sourceState:"shown"}}},argTypes:{isOpen:{description:"If true, the modal will be open.",table:{type:{summary:"boolean"}},control:"boolean"},onClose:{description:"Callback invoked to close the modal.",table:{type:{summary:"() => void"}},control:"text"},allowPinchZoom:{description:"Handle zoom/pinch gestures on iOS devices when scroll locking is enabled.",table:{type:{summary:"boolean"},defaultValue:{summary:"false"}},control:"boolean"},autoFocus:{description:"If true, the modal will autofocus the first enabled and interactive element within the ModalContent",table:{type:{summary:"boolean"},defaultValue:{summary:"true"}},control:"boolean"},blockScrollOnMount:{description:"If true, scrolling will be disabled on the body when the modal opens.",table:{type:{summary:"boolean"},defaultValue:{summary:"true"}},control:"boolean"},closeOnEsc:{description:"If true, the modal will close when the Esc key is pressed",table:{type:{summary:"boolean"},defaultValue:{summary:"true"}},control:"boolean"},closeOnOverlayClick:{description:"f true, the modal will close when the overlay is clicked",table:{type:{summary:"boolean"},defaultValue:{summary:"true"}},control:"boolean"},finalFocusRef:{description:"The ref of element to receive focus when the modal closes.",table:{type:{summary:"RefObject<FocusableElement>"}},control:"text"},id:{description:"The id of the modal",table:{type:{summary:"String"}},control:"text"},initialFocusRef:{description:"The ref of element to receive focus when the modal opens.",table:{type:{summary:"RefObject<FocusableElement>"}},control:"text"},isFullHeight:{description:"If true and drawer's placement is top or bottom, the drawer will occupy the viewport height (100vh)",table:{type:{summary:"boolean"}},control:"boolean"},lockFocusAcrossFrames:{description:"Enables aggressive focus capturing within iframes. - If true: keep focus in the lock, no matter where lock is active - If false: allows focus to move outside of iframe",table:{type:{summary:"boolean"},defaultValue:{summary:"false"}},control:"boolean"},onCloseComplete:{description:"Fires when all exiting nodes have completed animating out",table:{type:{summary:"() => void"}},control:"text"},onEsc:{description:"Callback fired when the escape key is pressed and focus is within modal",table:{type:{summary:"() => void"}},control:"text"},onOverlayClick:{description:"Callback fired when the overlay is clicked.",table:{type:{summary:"() => void"}},control:"text"},placement:{description:"The placement of the drawer",table:{type:{summary:"SlideDirection | LogicalPlacement"},defaultValue:{summary:"right"}},control:"text"},portalProps:{description:"Props to be forwarded to the portal component",table:{type:{summary:'Pick< PortalProps, "appendToParentPortal" | "containerRef" >'}},control:"text"},preserveScrollBarGap:{description:"If true, a `padding-right` will be applied to the body element that's equal to the width of the scrollbar. This can help prevent some unpleasant flickering effect and content adjustment when the modal opens",table:{type:{summary:"boolean"},defaultValue:{summary:"true"}},control:"boolean"},returnFocusOnClose:{description:"If true, the modal will return focus to the element that triggered it when it closes.",table:{type:{summary:"boolean"},defaultValue:{summary:"true"}},control:"boolean"},size:{description:"Size of the Drawer",table:{type:{summary:"xs | sm | md | lg | xl | full"},defaultValue:{summary:"xs"}},options:["xs","sm","md","lg","xl","full"],control:{type:"radio"}},trapFocus:{description:"If false, focus lock will be disabled completely. This is useful in situations where you still need to interact with other surrounding elements. 🚨Warning: We don't recommend doing this because it hurts the accessibility of the modal, based on WAI-ARIA specifications.",table:{type:{summary:"boolean"},defaultValue:{summary:"true"}},control:"boolean"},useInert:{description:"A11y: If true, the siblings of the modal will have `aria-hidden` set to true so that screen readers can only see the modal. This is commonly known as making the other elements **inert**",table:{type:{summary:"boolean"},defaultValue:{summary:"true"}},control:"boolean"}},args:{allowPinchZoom:!1,autoFocus:!0,blockScrollOnMount:!0,closeOnEsc:!0,closeOnOverlayClick:!0,lockFocusAcrossFrames:!1,placement:"right",preserveScrollBarGap:!0,returnFocusOnClose:!0,size:"xs",trapFocus:!0,useInert:!0,onOverlayClick:void 0,onClose:void 0,onCloseComplete:void 0,onEsc:void 0}},l=({...r})=>{const{isOpen:t,onOpen:s,onClose:o}=w();return e.jsxs(e.Fragment,{children:[e.jsx(n,{colorScheme:r.colorScheme,onClick:s,children:"Åpne"}),e.jsxs(p,{...r,isOpen:t,onClose:o,children:[e.jsx(y,{}),e.jsxs(b,{children:[e.jsx(F,{}),e.jsx(j,{children:"Lag din konto"}),e.jsx(g,{children:e.jsx(C,{placeholder:"Skriv her..."})}),e.jsxs(_,{children:[e.jsx(n,{colorScheme:r.colorScheme,variant:"secondary",mr:3,onClick:o,children:"Avbryt"}),e.jsx(n,{colorScheme:r.colorScheme,children:"Lagre"})]})]})]})]})},c={render:r=>e.jsx(l,{...r})},X=({...r})=>{const{isOpen:t,onOpen:s,onClose:o}=w(),[a,v]=D.useState("right"),k=S=>{v(S)};return e.jsxs(e.Fragment,{children:[e.jsx(G,{defaultValue:a,onChange:k,children:e.jsxs(K,{direction:"row",mb:"4",children:[e.jsx(h,{value:"top",children:"Topp"}),e.jsx(h,{value:"right",children:"Høyre"}),e.jsx(h,{value:"bottom",children:"Bunn"}),e.jsx(h,{value:"left",children:"Venstre"})]})}),e.jsx(n,{colorScheme:"blue",onClick:s,children:"Åpne"}),e.jsxs(p,{...r,placement:a,onClose:o,isOpen:t,children:[e.jsx(y,{}),e.jsxs(b,{children:[e.jsx(j,{borderBottomWidth:"1px",children:"Drawer"}),e.jsxs(g,{children:[e.jsx("p",{children:"Noe innhold..."}),e.jsx("p",{children:"Noe innhold..."}),e.jsx("p",{children:"Noe innhold..."})]})]})]})]})},d={args:{},render:r=>e.jsx(X,{...r})},Y=({...r})=>{const{isOpen:t,onOpen:s,onClose:o}=w(),a=D.useRef(null);return e.jsxs(e.Fragment,{children:[e.jsx(n,{colorScheme:"green",onClick:s,children:"Lag bruker"}),e.jsxs(p,{...r,isOpen:t,placement:"right",initialFocusRef:a,onClose:o,children:[e.jsx(y,{}),e.jsxs(b,{children:[e.jsx(F,{}),e.jsx(j,{borderBottomWidth:"1px",children:"Lag en ny konto"}),e.jsx(g,{children:e.jsxs(K,{spacing:"24px",children:[e.jsxs(x,{children:[e.jsx(f,{htmlFor:"username",children:"Navn"}),e.jsx(C,{ref:a,id:"username",placeholder:"Brukernavn"})]}),e.jsxs(x,{children:[e.jsx(f,{htmlFor:"url",children:"Url"}),e.jsxs(J,{children:[e.jsx(Z,{children:"https://"}),e.jsx(C,{type:"url",id:"url",placeholder:"Domene"}),e.jsx($,{children:".com"})]})]}),e.jsxs(x,{children:[e.jsx(f,{htmlFor:"owner",children:"Velg eier"}),e.jsxs(q,{id:"owner",defaultValue:"segun",children:[e.jsx("option",{value:"ola",children:"Ola Nordmann"}),e.jsx("option",{value:"kari",children:"Kari Nordmann"})]})]}),e.jsxs(x,{children:[e.jsx(f,{htmlFor:"desc",children:"Beskrivelse"}),e.jsx(U,{id:"desc"})]})]})}),e.jsxs(_,{borderTopWidth:"1px",children:[e.jsx(n,{variant:"secondary",mr:3,onClick:o,children:"Avbryt"}),e.jsx(n,{colorScheme:"blue",children:"Send inn"})]})]})]})]})},m={args:{},render:r=>e.jsx(Y,{...r})},ee=({...r})=>{const[t,s]=D.useState(),{isOpen:o,onOpen:a,onClose:v}=w(),k=i=>{s(i),a()},S=["xs","sm","md","lg","xl","full"];return e.jsxs(e.Fragment,{children:[S.map(i=>e.jsx(n,{onClick:()=>k(i),m:4,children:`Åpne ${i} Drawer`},i)),e.jsxs(p,{...r,onClose:v,isOpen:o,size:t,children:[e.jsx(y,{}),e.jsxs(b,{children:[e.jsx(F,{}),e.jsx(j,{children:`${t} drawer innhold`}),e.jsx(g,{children:e.jsx("p",{children:"Kartverket er Norges nasjonale kartmyndighet, og har som sin primære oppgave å bidra med geografisk informasjon og tjenester av høy kvalitet til samfunnet. Dette omfatter både produksjon av kart og oppmålingstjenester, samt forvaltning av eiendomsinformasjon."})})]})]})]})},u={args:{},render:r=>e.jsx(ee,{...r})};var O,I,B;l.parameters={...l.parameters,docs:{...(O=l.parameters)==null?void 0:O.docs,source:{originalSource:`({
  ...args
}) => {
  const {
    isOpen,
    onOpen,
    onClose
  } = useDisclosure();
  return <>
      <Button colorScheme={args.colorScheme} onClick={onOpen}>
        Åpne
      </Button>
      <KvibDrawer {...args} isOpen={isOpen} onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Lag din konto</DrawerHeader>

          <DrawerBody>
            <Input placeholder="Skriv her..." />
          </DrawerBody>

          <DrawerFooter>
            <Button colorScheme={args.colorScheme} variant="secondary" mr={3} onClick={onClose}>
              Avbryt
            </Button>
            <Button colorScheme={args.colorScheme}>Lagre</Button>
          </DrawerFooter>
        </DrawerContent>
      </KvibDrawer>
    </>;
}`,...(B=(I=l.parameters)==null?void 0:I.docs)==null?void 0:B.source}}};var E,P,V;c.parameters={...c.parameters,docs:{...(E=c.parameters)==null?void 0:E.docs,source:{originalSource:`{
  render: args => <DrawerExample {...args} />
}`,...(V=(P=c.parameters)==null?void 0:P.docs)==null?void 0:V.source}}};var T,R,A;d.parameters={...d.parameters,docs:{...(T=d.parameters)==null?void 0:T.docs,source:{originalSource:`{
  args: {},
  render: args => <PlacementExample {...args} />
}`,...(A=(R=d.parameters)==null?void 0:R.docs)==null?void 0:A.source}}};var M,z,L;m.parameters={...m.parameters,docs:{...(M=m.parameters)==null?void 0:M.docs,source:{originalSource:`{
  args: {},
  render: args => <DrawerFocusExample {...args} />
}`,...(L=(z=m.parameters)==null?void 0:z.docs)==null?void 0:L.source}}};var N,H,W;u.parameters={...u.parameters,docs:{...(N=u.parameters)==null?void 0:N.docs,source:{originalSource:`{
  args: {},
  render: args => <SizeExample {...args} />
}`,...(W=(H=u.parameters)==null?void 0:H.docs)==null?void 0:W.source}}};const re=["DrawerExample","Preview","DrawerPlacement","DrawerFocus","DrawerSizes"],ye=Object.freeze(Object.defineProperty({__proto__:null,DrawerExample:l,DrawerFocus:m,DrawerPlacement:d,DrawerSizes:u,Preview:c,__namedExportsOrder:re,default:Q},Symbol.toStringTag,{value:"Module"}));export{ye as D,c as P,d as a,m as b,u as c};
