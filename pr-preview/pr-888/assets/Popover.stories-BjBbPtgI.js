import{j as e}from"./extends-CwFRzn3r.js";import{r as j}from"./index-BwDkhjyp.js";import{F as Q}from"./Combination-DhNDPOzd.js";import{P as v,a as y,b as P,c as x}from"./popover-header-3uV4LMxq.js";import{u as X,P as a,a as i,b as p,c as Y}from"./popover-trigger-CWmiE4NK.js";import{c as Z}from"./factory-C6UFhaBW.js";import{c as $}from"./cx-BDMMs1jM.js";import{B as b}from"./box-DeqT4ixr.js";import{B as t}from"./Button-B2lbKAvu.js";import{F as ee}from"./Form-control-Dfay2bjP.js";import{F as K}from"./Form-label-B-qAuQLc.js";import{I as U}from"./input-Cik3wyxH.js";import{B as w}from"./ButtonGroup-DYaSzs8e.js";import{u as G}from"./use-disclosure-CdGn7wGE.js";import{I as oe}from"./IconButton-DVuMM99W.js";import{u as re}from"./use-boolean-CY0foEXq.js";import{H as te}from"./h-stack-BA5VzuBF.js";import{R as ne,a as g}from"./radio-CsweyUa7.js";import{S as q}from"./stack-REYSnkee.js";function k(o){const r=X();return e.jsx(Z.footer,{...o,className:$("chakra-popover__footer",o.className),__css:r.footer})}k.displayName="PopoverFooter";const se={title:"Overlay/Popover",component:a,parameters:{docs:{story:{inline:!0},canvas:{sourceState:"shown"}}},argTypes:{arrowPadding:{description:"The padding required to prevent the arrow from reaching the very edge of the Popover.",table:{type:{summary:"number"},defaultValue:{summary:8}},control:"number"},arrowShadowColor:{description:"The `box-shadow` of the popover arrow",table:{type:{summary:"string"}},control:"text"},arrowSize:{description:"The size of the popover arrow",table:{type:{summary:"number"}},control:"number"},autoFocus:{description:"If true, focus will be transferred to the first interactive element when the popover opens",table:{type:{summary:"boolean"},defaultValue:{summary:!0}},control:"boolean"},boundary:{description:"The boundary area for the Popover. Used within the preventOverflow modifier",table:{type:{summary:'"clippingParents" | "scrollParent" | HTMLElement'},defaultValue:{summary:"clippingParents"}},control:"text"},closeDelay:{description:"",table:{type:{summary:"number"},defaultValue:{summary:200}},control:"number"},closeOnBlur:{description:"If true, the popover will close when you blur out it by clicking outside or tabbing out",table:{type:{summary:"boolean"},defaultValue:{summary:!0}},control:"boolean"},closeOnEsc:{description:"If true, the popover will close when you hit the Esc key",table:{type:{summary:"boolean"},defaultValue:{summary:!0}},control:"boolean"},computePositionOnMount:{description:"If true, the popover will be positioned when it mounts (even if it's not open) Note 🚨: We don't recommend using this in a popover/menu intensive UI or page as it might affect scrolling performance.",table:{type:{summary:"boolean"}},control:"boolean"},defaultIsOpen:{description:"If true, the popover will be initially opened.",table:{type:{summary:"boolean"}},control:"boolean"},direction:{description:"Theme direction ltr or rtl. Popover's placement will be set accordingly",table:{type:{summary:'"ltr" | "rtl"'},defaultValue:{summary:"ltr"}},options:["ltr","rtl"],control:{type:"radio"}},eventListeners:{description:"If provided, determines whether the Popover will reposition itself on scroll and resize of the window.",table:{type:{summary:"boolean | { scroll?: boolean | undefined resize?: boolean | undefined }"},defaultValue:{summary:!0}},control:"object"},flip:{description:"If true, the Popover will change its placement and flip when it's about to overflow its boundary area.",table:{type:{summary:"boolean"},defaultValue:{summary:!0}},control:"boolean"},gutter:{description:"The distance or margin between the reference and Popover. It is used internally to create an offset modifier. NB: If you define offset prop, it'll override the gutter.",table:{type:{summary:"number"},defaultValue:{summary:8}},control:"number"},id:{description:"The html id attribute of the popover. If not provided, we generate a unique id. This id is also used to auto-generate the `aria-labelledby` and `aria-describedby` attributes that points to the PopoverHeader and PopoverBody",table:{type:{summary:"string"}},control:"text"},initialFocusRef:{description:"The ref of the element that should receive focus when the popover opens.",table:{type:{summary:"RefObject<{ focus(): void }>"}},control:"object"},isLazy:{description:"Performance 🚀: If true, the PopoverContent rendering will be deferred until the popover is open.",table:{type:{summary:"boolean"}},control:"boolean"},isOpen:{description:"If true, the popover will be opened in controlled mode.",table:{type:{summary:"boolean"}},control:"boolean"},lazyBehavior:{description:"Performance 🚀: The lazy behavior of popover's content when not visible. Only works when `isLazy={true}` - 'unmount': The popover's content is always unmounted when not open. - 'keepMounted': The popover's content initially unmounted, but stays mounted when popover is open.",table:{type:{summary:"LazyMode"},defaultValue:{summary:"unmount"}},control:"text"},matchWidth:{description:"If true, the Popover will match the width of the reference at all times. It's useful for autocomplete, `date-picker` and select patterns.",table:{type:{summary:"boolean"},defaultValue:{summary:!1}},control:"boolean"},modifiers:{description:"Array of Popover.js modifiers. Check the docs to see the list of possible modifiers you can pass.",table:{type:{summary:"Partial<Modifier<string, any>>[]"}},control:"array"},offset:{description:"The main and cross-axis offset to displace Popover element from its reference element.",table:{type:{summary:"[number, number]"}},control:"array"},onClose:{description:"Callback fired when the popover closes",table:{type:{summary:"() => void"}},control:"function"},onOpen:{description:"Callback fired when the popover opens",table:{type:{summary:"() => void"}},control:"function"},openDelay:{description:"",table:{type:{summary:"number"},defaultValue:{summary:200}},control:"number"},placement:{description:"The placement of the Popover relative to its reference.",table:{type:{summary:"PlacementWithLogical"},defaultValue:{summary:"bottom"}},control:"text"},preventOverflow:{description:"If true, will prevent the popover from being cut off and ensure it's visible within the boundary area.",table:{type:{summary:"boolean"},defaultValue:{summary:!0}},control:"boolean"},returnFocusOnClose:{description:"If true, focus will be returned to the element that triggers the popover when it closes",table:{type:{summary:"boolean"},defaultValue:{summary:!0}},control:"boolean"},strategy:{description:"The CSS positioning strategy to use.",table:{type:{summary:'"absolute" | "fixed"'},defaultValue:{summary:"absolute"}},options:["absolute","fixed"],control:{type:"radio"}},trigger:{description:"The interaction that triggers the popover. 'hover' means the popover will open when you hover with mouse or focus with keyboard on the popover trigger. 'click' means the popover will open on click or press Enter to Space on keyboard.",table:{type:{summary:'"click" | "hover"'},defaultValue:{summary:"click"}},control:{type:"radio"},options:["click","hover"]}},args:{onClose:void 0,onOpen:void 0}},c={render:o=>e.jsx(b,{h:"40",children:e.jsxs(a,{...o,children:[e.jsx(i,{children:e.jsx(t,{children:"Trykk"})}),e.jsxs(p,{children:[e.jsx(v,{}),e.jsx(y,{}),e.jsx(P,{children:"Bekreftelse!"}),e.jsx(x,{children:"Er du sikker på at du vil drikke den milkshaken?"})]})]})})},ae=({...o})=>{const r=j.useRef(null);return e.jsxs(a,{...o,initialFocusRef:r,placement:"bottom",closeOnBlur:!1,children:[e.jsx(i,{children:e.jsx(t,{children:"Trykk"})}),e.jsxs(p,{color:"white",bg:"blue.800",borderColor:"blue.800",children:[e.jsx(P,{pt:4,fontWeight:"bold",border:"0",children:"Hjelp med oppsett"}),e.jsx(v,{bg:"blue.800"}),e.jsx(y,{}),e.jsx(x,{children:"Det er lurt å sette opp emailbekreftelse for å få bekreftelse på ordren din."}),e.jsxs(k,{border:"0",display:"flex",alignItems:"center",justifyContent:"space-between",pb:4,children:[e.jsx(b,{fontSize:"sm",children:"Steg 2 av 4"}),e.jsxs(w,{size:"sm",children:[e.jsx(t,{colorScheme:"green",children:"Legg til Email"}),e.jsx(t,{colorScheme:"blue",ref:r,children:"Neste"})]})]})]})]})},d={render:o=>e.jsx(ae,{...o})},C=j.forwardRef((o,r)=>{const{id:n,label:s,...l}=o;return e.jsxs(ee,{children:[e.jsx(K,{htmlFor:n,children:s}),e.jsx(U,{ref:r,id:n,...l})]})}),le=({firstFieldRef:o,onCancel:r})=>e.jsxs(q,{spacing:4,children:[e.jsx(C,{label:"Fornavn",id:"first-name",ref:o,defaultValue:"Ola"}),e.jsx(C,{label:"Etternavn",id:"last-name",defaultValue:"Nordmann"}),e.jsxs(w,{display:"flex",justifyContent:"flex-end",children:[e.jsx(t,{variant:"primary",onClick:r,children:"Avbryt"}),e.jsx(t,{isDisabled:!0,colorScheme:"green",children:"Lagre"})]})]}),ie=({...o})=>{const{onOpen:r,onClose:n,isOpen:s}=G(),l=j.useRef(null);return e.jsxs(e.Fragment,{children:[e.jsx(b,{display:"inline-block",mr:3,children:"Ola Nordmann"}),e.jsxs(a,{...o,isOpen:s,initialFocusRef:l,onOpen:r,onClose:n,placement:"right",closeOnBlur:!1,children:[e.jsx(i,{children:e.jsx(oe,{size:"sm",icon:"edit","aria-label":"edit",colorScheme:"gray"})}),e.jsx(p,{p:5,children:e.jsxs(Q,{returnFocus:!0,persistentFocus:!1,children:[e.jsx(v,{}),e.jsx(y,{}),e.jsx(le,{firstFieldRef:l,onCancel:n})]})})]})]})},u={render:o=>e.jsx(ie,{...o})},pe=({...o})=>{const{isOpen:r,onToggle:n,onClose:s}=G();return e.jsxs(e.Fragment,{children:[e.jsx(t,{mr:5,onClick:n,children:"Trigger"}),e.jsxs(a,{...o,returnFocusOnClose:!1,isOpen:r,onClose:s,placement:"right",closeOnBlur:!1,children:[e.jsx(i,{children:e.jsx(t,{colorScheme:"red",children:"Popover"})}),e.jsxs(p,{children:[e.jsx(P,{fontWeight:"semibold",children:"Bekreftelse"}),e.jsx(v,{}),e.jsx(y,{}),e.jsx(x,{children:"Er du sikker på at du vil fortsette?"}),e.jsx(k,{display:"flex",justifyContent:"flex-end",children:e.jsxs(w,{size:"sm",children:[e.jsx(t,{variant:"outline",children:"Avbryt"}),e.jsx(t,{colorScheme:"red",children:"Godkjenn"})]})})]})]})]})},m={render:o=>e.jsx(pe,{...o})},ce=({...o})=>{const[r,n]=re(),[s,l]=j.useState("red");return e.jsxs(a,{...o,isOpen:r,onOpen:n.on,onClose:n.off,closeOnBlur:!1,isLazy:!0,lazyBehavior:"keepMounted",children:[e.jsx(K,{htmlFor:"anchor text",children:"Prøv å redigere teksten"}),e.jsxs(te,{children:[e.jsx(Y,{children:e.jsx(U,{id:"anchor text",color:s,w:"auto",display:"inline-flex",isDisabled:!r,defaultValue:"Popover Anchor"})}),e.jsx(i,{children:e.jsx(t,{h:"40px",colorScheme:"blue",children:r?"Lagre":"Rediger"})})]}),e.jsx(p,{children:e.jsxs(x,{children:["Farger:",e.jsx(ne,{value:s,onChange:J=>l(J),children:e.jsxs(q,{direction:"row",children:[e.jsx(g,{value:"red",children:"rød"}),e.jsx(g,{value:"blue",children:"blå"}),e.jsx(g,{value:"green",children:"grønn"}),e.jsx(g,{value:"purple",children:"lilla"})]})})]})})]})},h={render:o=>e.jsx(ce,{...o})},f={render:o=>e.jsx(b,{h:"40",children:e.jsxs(a,{...o,children:[e.jsx(i,{children:e.jsx(b,{tabIndex:0,role:"button","aria-label":"Some box",p:5,w:"120px",bg:"gray.300",children:"Klikk her"})}),e.jsxs(p,{bg:"tomato",color:"white",children:[e.jsx(P,{fontWeight:"semibold",children:"Tilpasning"}),e.jsx(v,{bg:"pink.500"}),e.jsx(y,{bg:"purple.500"}),e.jsx(x,{children:"Tadaa!! Farge og bakgrunn er endret. Sjekk ut props på hvert komponent."})]})]})})};var T,B,F;c.parameters={...c.parameters,docs:{...(T=c.parameters)==null?void 0:T.docs,source:{originalSource:`{
  render: args => <Box h="40">
      <KvibPopover {...args}>
        <PopoverTrigger>
          <Button>Trykk</Button>
        </PopoverTrigger>
        <PopoverContent>
          <PopoverArrow />
          <PopoverCloseButton />
          <PopoverHeader>Bekreftelse!</PopoverHeader>
          <PopoverBody>Er du sikker på at du vil drikke den milkshaken?</PopoverBody>
        </PopoverContent>
      </KvibPopover>
    </Box>
}`,...(F=(B=c.parameters)==null?void 0:B.docs)==null?void 0:F.source}}};var S,O,I;d.parameters={...d.parameters,docs:{...(S=d.parameters)==null?void 0:S.docs,source:{originalSource:`{
  render: args => <PopoverFocusExample {...args} />
}`,...(I=(O=d.parameters)==null?void 0:O.docs)==null?void 0:I.source}}};var V,z,E;u.parameters={...u.parameters,docs:{...(V=u.parameters)==null?void 0:V.docs,source:{originalSource:`{
  render: args => <PopoverForm {...args} />
}`,...(E=(z=u.parameters)==null?void 0:z.docs)==null?void 0:E.source}}};var R,A,L;m.parameters={...m.parameters,docs:{...(R=m.parameters)==null?void 0:R.docs,source:{originalSource:`{
  render: args => <ControlledUsage {...args} />
}`,...(L=(A=m.parameters)==null?void 0:A.docs)==null?void 0:L.source}}};var H,_,W;h.parameters={...h.parameters,docs:{...(H=h.parameters)==null?void 0:H.docs,source:{originalSource:`{
  render: args => <WithPopoverAnchor {...args} />
}`,...(W=(_=h.parameters)==null?void 0:_.docs)==null?void 0:W.source}}};var N,M,D;f.parameters={...f.parameters,docs:{...(N=f.parameters)==null?void 0:N.docs,source:{originalSource:`{
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
}`,...(D=(M=f.parameters)==null?void 0:M.docs)==null?void 0:D.source}}};const de=["Preview","PopoverFocus","PopoverTrappingFocus","PopoverControlled","PopoverAnchorExample","PopoverCustomizing"],Ie=Object.freeze(Object.defineProperty({__proto__:null,PopoverAnchorExample:h,PopoverControlled:m,PopoverCustomizing:f,PopoverFocus:d,PopoverTrappingFocus:u,Preview:c,__namedExportsOrder:de,default:se},Symbol.toStringTag,{value:"Module"}));export{Ie as P,d as a,u as b,m as c,h as d,f as e,c as f};
