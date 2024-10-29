import{j as e}from"./extends-CwFRzn3r.js";import{r as C}from"./index-BwDkhjyp.js";import{F as ie}from"./Combination-DhNDPOzd.js";import{u as B,a as g,P as l,b as i,c as p,d as pe}from"./popover-trigger-CBFb82ni.js";import{c as y}from"./factory-lWLPzty5.js";import{c as x}from"./cx-BDMMs1jM.js";import{C as ce}from"./close-button-CK4MGrTr.js";import{f as T}from"./forward-ref-BWI-Phbn.js";import{B as a}from"./Button-JOqyI9DN.js";import{F as de}from"./Form-control-BdnVChy_.js";import{F as X}from"./Form-label-dFo3DmS2.js";import{I as Y}from"./input-BT3C-fnf.js";import{B as k}from"./box-Cs-tJ6EH.js";import{B as I}from"./ButtonGroup-DIYU158p.js";import{u as Z}from"./use-disclosure-CdGn7wGE.js";import{I as ue}from"./IconButton-uz9h808H.js";import{u as me}from"./use-boolean-CY0foEXq.js";import{H as he}from"./h-stack-ecaAvnDk.js";import{R as fe,a as w}from"./radio-DUogg9O2.js";import{S as ee}from"./stack-C3a7yBZW.js";const F=(o,r)=>r?`${o}.${r}, ${r}`:void 0;function c(o){const{bg:r,bgColor:t,backgroundColor:s,shadow:n,boxShadow:S,shadowColor:oe,...re}=o,{getArrowProps:te,getArrowInnerProps:se}=B(),ne=g(),ae=r??t??s,le=n??S;return e.jsx(y.div,{...te(),className:"chakra-popover__arrow-positioner",children:e.jsx(y.div,{className:x("chakra-popover__arrow",o.className),...se(re),__css:{"--popper-arrow-shadow-color":F("colors",oe),"--popper-arrow-bg":F("colors",ae),"--popper-arrow-shadow":F("shadows",le),...ne.arrow}})})}c.displayName="PopoverArrow";const j=T(function(r,t){const{getBodyProps:s}=B(),n=g();return e.jsx(y.div,{...s(r,t),className:x("chakra-popover__body",r.className),__css:n.body})});j.displayName="PopoverBody";const d=T(function(r,t){const{onClose:s}=B(),n=g();return e.jsx(ce,{size:"sm",onClick:s,className:x("chakra-popover__close-btn",r.className),__css:n.closeButton,ref:t,...r})});d.displayName="PopoverCloseButton";function _(o){const r=g();return e.jsx(y.footer,{...o,className:x("chakra-popover__footer",o.className),__css:r.footer})}_.displayName="PopoverFooter";const P=T(function(r,t){const{getHeaderProps:s}=B(),n=g();return e.jsx(y.header,{...s(r,t),className:x("chakra-popover__header",r.className),__css:n.header})});P.displayName="PopoverHeader";const be={title:"Komponenter/Popover",component:l,parameters:{docs:{story:{inline:!0},canvas:{sourceState:"shown"}}},argTypes:{arrowPadding:{description:"The padding required to prevent the arrow from reaching the very edge of the Popover.",table:{type:{summary:"number"},defaultValue:{summary:"8"}},control:"number"},arrowShadowColor:{description:"The `box-shadow` of the popover arrow",table:{type:{summary:"string"}},control:"text"},arrowSize:{description:"The size of the popover arrow",table:{type:{summary:"number"}},control:"number"},autoFocus:{description:"If true, focus will be transferred to the first interactive element when the popover opens",table:{type:{summary:"boolean"},defaultValue:{summary:"true"}},control:"boolean"},boundary:{description:"The boundary area for the Popover. Used within the preventOverflow modifier",table:{type:{summary:'"clippingParents" | "scrollParent" | HTMLElement'},defaultValue:{summary:"clippingParents"}},control:"text"},closeDelay:{description:"",table:{type:{summary:"number"},defaultValue:{summary:"200"}},control:"number"},closeOnBlur:{description:"If true, the popover will close when you blur out it by clicking outside or tabbing out",table:{type:{summary:"boolean"},defaultValue:{summary:"true"}},control:"boolean"},closeOnEsc:{description:"If true, the popover will close when you hit the Esc key",table:{type:{summary:"boolean"},defaultValue:{summary:"true"}},control:"boolean"},computePositionOnMount:{description:"If true, the popover will be positioned when it mounts (even if it's not open) Note 🚨: We don't recommend using this in a popover/menu intensive UI or page as it might affect scrolling performance.",table:{type:{summary:"boolean"}},control:"boolean"},defaultIsOpen:{description:"If true, the popover will be initially opened.",table:{type:{summary:"boolean"}},control:"boolean"},direction:{description:"Theme direction ltr or rtl. Popover's placement will be set accordingly",table:{type:{summary:'"ltr" | "rtl"'},defaultValue:{summary:"ltr"}},options:["ltr","rtl"],control:{type:"radio"}},eventListeners:{description:"If provided, determines whether the Popover will reposition itself on scroll and resize of the window.",table:{type:{summary:"boolean | { scroll?: boolean | undefined resize?: boolean | undefined }"},defaultValue:{summary:"true"}},control:"object"},flip:{description:"If true, the Popover will change its placement and flip when it's about to overflow its boundary area.",table:{type:{summary:"boolean"},defaultValue:{summary:"true"}},control:"boolean"},gutter:{description:"The distance or margin between the reference and Popover. It is used internally to create an offset modifier. NB: If you define offset prop, it'll override the gutter.",table:{type:{summary:"number"},defaultValue:{summary:"8"}},control:"number"},id:{description:"The html id attribute of the popover. If not provided, we generate a unique id. This id is also used to auto-generate the `aria-labelledby` and `aria-describedby` attributes that points to the PopoverHeader and PopoverBody",table:{type:{summary:"string"}},control:"text"},initialFocusRef:{description:"The ref of the element that should receive focus when the popover opens.",table:{type:{summary:"RefObject<{ focus(): void }>"}},control:"object"},isLazy:{description:"Performance 🚀: If true, the PopoverContent rendering will be deferred until the popover is open.",table:{type:{summary:"boolean"}},control:"boolean"},isOpen:{description:"If true, the popover will be opened in controlled mode.",table:{type:{summary:"boolean"}},control:"boolean"},lazyBehavior:{description:"Performance 🚀: The lazy behavior of popover's content when not visible. Only works when `isLazy={true}` - 'unmount': The popover's content is always unmounted when not open. - 'keepMounted': The popover's content initially unmounted, but stays mounted when popover is open.",table:{type:{summary:"LazyMode"},defaultValue:{summary:"unmount"}},control:"text"},matchWidth:{description:"If true, the Popover will match the width of the reference at all times. It's useful for autocomplete, `date-picker` and select patterns.",table:{type:{summary:"boolean"},defaultValue:{summary:"false"}},control:"boolean"},modifiers:{description:"Array of Popover.js modifiers. Check the docs to see the list of possible modifiers you can pass.",table:{type:{summary:"Partial<Modifier<string, any>>[]"}}},offset:{description:"The main and cross-axis offset to displace Popover element from its reference element.",table:{type:{summary:"[number, number]"}}},onClose:{description:"Callback fired when the popover closes",table:{type:{summary:"() => void"}}},onOpen:{description:"Callback fired when the popover opens",table:{type:{summary:"() => void"}}},openDelay:{description:"",table:{type:{summary:"number"},defaultValue:{summary:"200"}},control:"number"},placement:{description:"The placement of the Popover relative to its reference.",table:{type:{summary:"PlacementWithLogical"},defaultValue:{summary:"bottom"}},control:"text"},preventOverflow:{description:"If true, will prevent the popover from being cut off and ensure it's visible within the boundary area.",table:{type:{summary:"boolean"},defaultValue:{summary:"true"}},control:"boolean"},returnFocusOnClose:{description:"If true, focus will be returned to the element that triggers the popover when it closes",table:{type:{summary:"boolean"},defaultValue:{summary:"true"}},control:"boolean"},strategy:{description:"The CSS positioning strategy to use.",table:{type:{summary:'"absolute" | "fixed"'},defaultValue:{summary:"absolute"}},options:["absolute","fixed"],control:{type:"radio"}},trigger:{description:"The interaction that triggers the popover. 'hover' means the popover will open when you hover with mouse or focus with keyboard on the popover trigger. 'click' means the popover will open on click or press Enter to Space on keyboard.",table:{type:{summary:'"click" | "hover"'},defaultValue:{summary:"click"}},control:{type:"radio"},options:["click","hover"]}},args:{onClose:void 0,onOpen:void 0}},u={render:o=>e.jsxs(l,{...o,children:[e.jsx(i,{children:e.jsx(a,{children:"Vis popover"})}),e.jsxs(p,{children:[e.jsx(c,{}),e.jsx(d,{}),e.jsx(P,{children:"Dette er en popover"})]})]})},ve=({...o})=>{const r=C.useRef(null);return e.jsxs(l,{...o,initialFocusRef:r,placement:"bottom",closeOnBlur:!1,children:[e.jsx(i,{children:e.jsx(a,{children:"Trykk"})}),e.jsxs(p,{color:"white",bg:"blue.800",borderColor:"blue.800",children:[e.jsx(P,{pt:4,fontWeight:"bold",border:"0",children:"Hjelp med oppsett"}),e.jsx(c,{bg:"blue.800"}),e.jsx(d,{}),e.jsx(j,{children:"Det er lurt å sette opp emailbekreftelse for å få bekreftelse på ordren din."}),e.jsxs(_,{border:"0",display:"flex",alignItems:"center",justifyContent:"space-between",pb:4,children:[e.jsx(k,{fontSize:"sm",children:"Steg 2 av 4"}),e.jsxs(I,{size:"sm",children:[e.jsx(a,{colorScheme:"green",children:"Legg til Email"}),e.jsx(a,{colorScheme:"blue",ref:r,children:"Neste"})]})]})]})]})},m={render:o=>e.jsx(ve,{...o})},O=C.forwardRef((o,r)=>{const{id:t,label:s,...n}=o;return e.jsxs(de,{children:[e.jsx(X,{htmlFor:t,children:s}),e.jsx(Y,{ref:r,id:t,...n})]})}),ye=({firstFieldRef:o,onCancel:r})=>e.jsxs(ee,{spacing:4,children:[e.jsx(O,{label:"Fornavn",id:"first-name",ref:o,defaultValue:"Ola"}),e.jsx(O,{label:"Etternavn",id:"last-name",defaultValue:"Nordmann"}),e.jsxs(I,{display:"flex",justifyContent:"flex-end",children:[e.jsx(a,{variant:"primary",onClick:r,children:"Avbryt"}),e.jsx(a,{isDisabled:!0,colorScheme:"green",children:"Lagre"})]})]}),ge=({...o})=>{const{onOpen:r,onClose:t,isOpen:s}=Z(),n=C.useRef(null);return e.jsxs(e.Fragment,{children:[e.jsx(k,{display:"inline-block",mr:3,children:"Ola Nordmann"}),e.jsxs(l,{...o,isOpen:s,initialFocusRef:n,onOpen:r,onClose:t,placement:"right",closeOnBlur:!1,children:[e.jsx(i,{children:e.jsx(ue,{size:"sm",icon:"edit","aria-label":"edit",colorScheme:"gray"})}),e.jsx(p,{p:5,children:e.jsxs(ie,{returnFocus:!0,persistentFocus:!1,children:[e.jsx(c,{}),e.jsx(d,{}),e.jsx(ye,{firstFieldRef:n,onCancel:t})]})})]})]})},h={render:o=>e.jsx(ge,{...o})},xe=({...o})=>{const{isOpen:r,onToggle:t,onClose:s}=Z();return e.jsxs(e.Fragment,{children:[e.jsx(a,{mr:5,onClick:t,children:"Trigger"}),e.jsxs(l,{...o,returnFocusOnClose:!1,isOpen:r,onClose:s,placement:"right",closeOnBlur:!1,children:[e.jsx(i,{children:e.jsx(a,{colorScheme:"red",children:"Popover"})}),e.jsxs(p,{children:[e.jsx(P,{fontWeight:"semibold",children:"Bekreftelse"}),e.jsx(c,{}),e.jsx(d,{}),e.jsx(j,{children:"Er du sikker på at du vil fortsette?"}),e.jsx(_,{display:"flex",justifyContent:"flex-end",children:e.jsxs(I,{size:"sm",children:[e.jsx(a,{variant:"tertiary",children:"Avbryt"}),e.jsx(a,{colorScheme:"red",children:"Godkjenn"})]})})]})]})]})},f={render:o=>e.jsx(xe,{...o})},je=({...o})=>{const[r,t]=me(),[s,n]=C.useState("red");return e.jsxs(l,{...o,isOpen:r,onOpen:t.on,onClose:t.off,closeOnBlur:!1,isLazy:!0,lazyBehavior:"keepMounted",children:[e.jsx(X,{htmlFor:"anchor text",children:"Prøv å redigere teksten"}),e.jsxs(he,{children:[e.jsx(pe,{children:e.jsx(Y,{id:"anchor text",color:s,w:"auto",display:"inline-flex",isDisabled:!r,defaultValue:"Popover Anchor"})}),e.jsx(i,{children:e.jsx(a,{h:"40px",colorScheme:"blue",children:r?"Lagre":"Rediger"})})]}),e.jsx(p,{children:e.jsxs(j,{children:["Farger:",e.jsx(fe,{value:s,onChange:S=>n(S),children:e.jsxs(ee,{direction:"row",children:[e.jsx(w,{value:"red",children:"rød"}),e.jsx(w,{value:"blue",children:"blå"}),e.jsx(w,{value:"green",children:"grønn"}),e.jsx(w,{value:"purple",children:"lilla"})]})})]})})]})},b={render:o=>e.jsx(je,{...o})},v={render:o=>e.jsx(k,{h:"40",children:e.jsxs(l,{...o,children:[e.jsx(i,{children:e.jsx(k,{tabIndex:0,role:"button","aria-label":"Some box",p:5,w:"120px",bg:"gray.300",children:"Klikk her"})}),e.jsxs(p,{bg:"tomato",color:"white",children:[e.jsx(P,{fontWeight:"semibold",children:"Tilpasning"}),e.jsx(c,{bg:"pink.500"}),e.jsx(d,{bg:"purple.500"}),e.jsx(j,{children:"Tadaa!! Farge og bakgrunn er endret. Sjekk ut props på hvert komponent."})]})]})})};var V,N,z;u.parameters={...u.parameters,docs:{...(V=u.parameters)==null?void 0:V.docs,source:{originalSource:`{
  render: args => <KvibPopover {...args}>
      <PopoverTrigger>
        <Button>Vis popover</Button>
      </PopoverTrigger>
      <PopoverContent>
        <PopoverArrow />
        <PopoverCloseButton />
        <PopoverHeader>Dette er en popover</PopoverHeader>
      </PopoverContent>
    </KvibPopover>
}`,...(z=(N=u.parameters)==null?void 0:N.docs)==null?void 0:z.source}}};var E,A,R;m.parameters={...m.parameters,docs:{...(E=m.parameters)==null?void 0:E.docs,source:{originalSource:`{
  render: args => <PopoverFocusExample {...args} />
}`,...(R=(A=m.parameters)==null?void 0:A.docs)==null?void 0:R.source}}};var H,L,W;h.parameters={...h.parameters,docs:{...(H=h.parameters)==null?void 0:H.docs,source:{originalSource:`{
  render: args => <PopoverForm {...args} />
}`,...(W=(L=h.parameters)==null?void 0:L.docs)==null?void 0:W.source}}};var D,K,M;f.parameters={...f.parameters,docs:{...(D=f.parameters)==null?void 0:D.docs,source:{originalSource:`{
  render: args => <ControlledUsage {...args} />
}`,...(M=(K=f.parameters)==null?void 0:K.docs)==null?void 0:M.source}}};var U,G,$;b.parameters={...b.parameters,docs:{...(U=b.parameters)==null?void 0:U.docs,source:{originalSource:`{
  render: args => <WithPopoverAnchor {...args} />
}`,...($=(G=b.parameters)==null?void 0:G.docs)==null?void 0:$.source}}};var q,J,Q;v.parameters={...v.parameters,docs:{...(q=v.parameters)==null?void 0:q.docs,source:{originalSource:`{
  render: args => <Box h="40">
      <KvibPopover {...args}>
        <PopoverTrigger>
          <Box tabIndex={0} role="button" aria-label="Some box" p={5} w="120px" bg="gray.300" children="Klikk her" />
        </PopoverTrigger>
        <PopoverContent bg="tomato" color="white">
          <PopoverHeader fontWeight="semibold">Tilpasning</PopoverHeader>
          <PopoverArrow bg="pink.500" />
          <PopoverCloseButton bg="purple.500" />
          <PopoverBody>Tadaa!! Farge og bakgrunn er endret. Sjekk ut props på hvert komponent.</PopoverBody>
        </PopoverContent>
      </KvibPopover>
    </Box>
}`,...(Q=(J=v.parameters)==null?void 0:J.docs)==null?void 0:Q.source}}};const Pe=["Preview","PopoverFocus","PopoverTrappingFocus","PopoverControlled","PopoverAnchorExample","PopoverCustomizing"],Ke=Object.freeze(Object.defineProperty({__proto__:null,PopoverAnchorExample:b,PopoverControlled:f,PopoverCustomizing:v,PopoverFocus:m,PopoverTrappingFocus:h,Preview:u,__namedExportsOrder:Pe,default:be},Symbol.toStringTag,{value:"Module"}));export{Ke as P,m as a,h as b,f as c,b as d,v as e,u as f};
