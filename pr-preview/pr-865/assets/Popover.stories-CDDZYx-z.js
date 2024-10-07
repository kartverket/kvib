import{j as e}from"./extends-CwFRzn3r.js";import{r as k}from"./index-BwDkhjyp.js";import{F as ne}from"./Combination-DhNDPOzd.js";import{P as y,a as x,b as w,c as P}from"./chunk-JKY3EM6P-dFuHKoXh.js";import{u as te,P as a,a as c,b as d,c as se}from"./chunk-24I2HV4N-CvgI1VDP.js";import{c as ae,a as ie}from"./chunk-ZJJGQIVY-CoI1iMVy.js";import{B as g}from"./chunk-PULVB27S-CgiffgmI.js";import{B as n}from"./Button-8b5yAIpR.js";import{F as le}from"./Form-control-CG1fyGaW.js";import{F as Y}from"./Form-label-D-r0Q-vl.js";import{I as Z}from"./chunk-6CVSDS6C-DIHhJ7ei.js";import{u as ee}from"./chunk-7JBTTEVG-DuShY1Xb.js";import{I as pe}from"./IconButton-BroQO-P4.js";import{u as ce}from"./chunk-BBVTFCMB-CY0foEXq.js";import{H as de}from"./chunk-3ASUQ6PA-DZH9lOZq.js";import{R as ue,a as j}from"./chunk-RDF2AYID-DCZN3YCE.js";import{S as oe}from"./chunk-ZHMYA64R-V_96TD_T.js";import{B as C}from"./ButtonGroup-0TRPeOUk.js";function F(o){const r=te();return e.jsx(ae.footer,{...o,className:ie("chakra-popover__footer",o.className),__css:r.footer})}F.displayName="PopoverFooter";const me={title:"Overlay/Popover",component:a,parameters:{docs:{story:{inline:!0},canvas:{sourceState:"shown"}}},argTypes:{arrowPadding:{description:"The padding required to prevent the arrow from reaching the very edge of the Popover.",table:{type:{summary:"number"},defaultValue:{summary:8}},control:"number"},arrowShadowColor:{description:"The `box-shadow` of the popover arrow",table:{type:{summary:"string"}},control:"text"},arrowSize:{description:"The size of the popover arrow",table:{type:{summary:"number"}},control:"number"},autoFocus:{description:"If true, focus will be transferred to the first interactive element when the popover opens",table:{type:{summary:"boolean"},defaultValue:{summary:!0}},control:"boolean"},boundary:{description:"The boundary area for the Popover. Used within the preventOverflow modifier",table:{type:{summary:'"clippingParents" | "scrollParent" | HTMLElement'},defaultValue:{summary:"clippingParents"}},control:"text"},closeDelay:{description:"",table:{type:{summary:"number"},defaultValue:{summary:200}},control:"number"},closeOnBlur:{description:"If true, the popover will close when you blur out it by clicking outside or tabbing out",table:{type:{summary:"boolean"},defaultValue:{summary:!0}},control:"boolean"},closeOnEsc:{description:"If true, the popover will close when you hit the Esc key",table:{type:{summary:"boolean"},defaultValue:{summary:!0}},control:"boolean"},computePositionOnMount:{description:"If true, the popover will be positioned when it mounts (even if it's not open) Note 🚨: We don't recommend using this in a popover/menu intensive UI or page as it might affect scrolling performance.",table:{type:{summary:"boolean"}},control:"boolean"},defaultIsOpen:{description:"If true, the popover will be initially opened.",table:{type:{summary:"boolean"}},control:"boolean"},direction:{description:"Theme direction ltr or rtl. Popover's placement will be set accordingly",table:{type:{summary:'"ltr" | "rtl"'},defaultValue:{summary:"ltr"}},options:["ltr","rtl"],control:{type:"radio"}},eventListeners:{description:"If provided, determines whether the Popover will reposition itself on scroll and resize of the window.",table:{type:{summary:"boolean | { scroll?: boolean | undefined resize?: boolean | undefined }"},defaultValue:{summary:!0}},control:"object"},flip:{description:"If true, the Popover will change its placement and flip when it's about to overflow its boundary area.",table:{type:{summary:"boolean"},defaultValue:{summary:!0}},control:"boolean"},gutter:{description:"The distance or margin between the reference and Popover. It is used internally to create an offset modifier. NB: If you define offset prop, it'll override the gutter.",table:{type:{summary:"number"},defaultValue:{summary:8}},control:"number"},id:{description:"The html id attribute of the popover. If not provided, we generate a unique id. This id is also used to auto-generate the `aria-labelledby` and `aria-describedby` attributes that points to the PopoverHeader and PopoverBody",table:{type:{summary:"string"}},control:"text"},initialFocusRef:{description:"The ref of the element that should receive focus when the popover opens.",table:{type:{summary:"RefObject<{ focus(): void }>"}},control:"object"},isLazy:{description:"Performance 🚀: If true, the PopoverContent rendering will be deferred until the popover is open.",table:{type:{summary:"boolean"}},control:"boolean"},isOpen:{description:"If true, the popover will be opened in controlled mode.",table:{type:{summary:"boolean"}},control:"boolean"},lazyBehavior:{description:"Performance 🚀: The lazy behavior of popover's content when not visible. Only works when `isLazy={true}` - 'unmount': The popover's content is always unmounted when not open. - 'keepMounted': The popover's content initially unmounted, but stays mounted when popover is open.",table:{type:{summary:"LazyMode"},defaultValue:{summary:"unmount"}},control:"text"},matchWidth:{description:"If true, the Popover will match the width of the reference at all times. It's useful for autocomplete, `date-picker` and select patterns.",table:{type:{summary:"boolean"},defaultValue:{summary:!1}},control:"boolean"},modifiers:{description:"Array of Popover.js modifiers. Check the docs to see the list of possible modifiers you can pass.",table:{type:{summary:"Partial<Modifier<string, any>>[]"}},control:"array"},offset:{description:"The main and cross-axis offset to displace Popover element from its reference element.",table:{type:{summary:"[number, number]"}},control:"array"},onClose:{description:"Callback fired when the popover closes",table:{type:{summary:"() => void"}},control:"function"},onOpen:{description:"Callback fired when the popover opens",table:{type:{summary:"() => void"}},control:"function"},openDelay:{description:"",table:{type:{summary:"number"},defaultValue:{summary:200}},control:"number"},placement:{description:"The placement of the Popover relative to its reference.",table:{type:{summary:"PlacementWithLogical"},defaultValue:{summary:"bottom"}},control:"text"},preventOverflow:{description:"If true, will prevent the popover from being cut off and ensure it's visible within the boundary area.",table:{type:{summary:"boolean"},defaultValue:{summary:!0}},control:"boolean"},returnFocusOnClose:{description:"If true, focus will be returned to the element that triggers the popover when it closes",table:{type:{summary:"boolean"},defaultValue:{summary:!0}},control:"boolean"},strategy:{description:"The CSS positioning strategy to use.",table:{type:{summary:'"absolute" | "fixed"'},defaultValue:{summary:"absolute"}},options:["absolute","fixed"],control:{type:"radio"}},trigger:{description:"The interaction that triggers the popover. 'hover' means the popover will open when you hover with mouse or focus with keyboard on the popover trigger. 'click' means the popover will open on click or press Enter to Space on keyboard.",table:{type:{summary:'"click" | "hover"'},defaultValue:{summary:"click"}},control:{type:"radio"},options:["click","hover"]}},args:{onClose:void 0,onOpen:void 0}},u={args:{},render:o=>e.jsx(g,{h:"40",children:e.jsxs(a,{...o,children:[e.jsx(c,{children:e.jsx(n,{children:"Trykk"})}),e.jsxs(d,{children:[e.jsx(y,{}),e.jsx(x,{}),e.jsx(w,{children:"Bekreftelse!"}),e.jsx(P,{children:"Er du sikker på at du vil drikke den milkshaken?"})]})]})})},he=({...o})=>{const r=k.useRef(null);return e.jsxs(a,{...o,initialFocusRef:r,placement:"bottom",closeOnBlur:!1,children:[e.jsx(c,{children:e.jsx(n,{children:"Trykk"})}),e.jsxs(d,{color:"white",bg:"blue.800",borderColor:"blue.800",children:[e.jsx(w,{pt:4,fontWeight:"bold",border:"0",children:"Hjelp med oppsett"}),e.jsx(y,{bg:"blue.800"}),e.jsx(x,{}),e.jsx(P,{children:"Det er lurt å sette opp emailbekreftelse for å få bekreftelse på ordren din."}),e.jsxs(F,{border:"0",display:"flex",alignItems:"center",justifyContent:"space-between",pb:4,children:[e.jsx(g,{fontSize:"sm",children:"Steg 2 av 4"}),e.jsxs(C,{size:"sm",children:[e.jsx(n,{colorScheme:"green",children:"Legg til Email"}),e.jsx(n,{colorScheme:"blue",ref:r,children:"Neste"})]})]})]})]})},m={args:{},render:o=>e.jsx(he,{...o})},B=k.forwardRef((o,r)=>{const{id:t,label:s,...i}=o;return e.jsxs(le,{children:[e.jsx(Y,{htmlFor:t,children:s}),e.jsx(Z,{ref:r,id:t,...i})]})}),fe=({firstFieldRef:o,onCancel:r})=>e.jsxs(oe,{spacing:4,children:[e.jsx(B,{label:"Fornavn",id:"first-name",ref:o,defaultValue:"Ola"}),e.jsx(B,{label:"Etternavn",id:"last-name",defaultValue:"Nordmann"}),e.jsxs(C,{display:"flex",justifyContent:"flex-end",children:[e.jsx(n,{variant:"primary",onClick:r,children:"Avbryt"}),e.jsx(n,{isDisabled:!0,colorScheme:"green",children:"Lagre"})]})]}),l=({...o})=>{const{onOpen:r,onClose:t,isOpen:s}=ee(),i=k.useRef(null);return e.jsxs(e.Fragment,{children:[e.jsx(g,{display:"inline-block",mr:3,children:"Ola Nordmann"}),e.jsxs(a,{...o,isOpen:s,initialFocusRef:i,onOpen:r,onClose:t,placement:"right",closeOnBlur:!1,children:[e.jsx(c,{children:e.jsx(pe,{size:"sm",icon:"edit","aria-label":"edit",colorScheme:"gray"})}),e.jsx(d,{p:5,children:e.jsxs(ne,{returnFocus:!0,persistentFocus:!1,children:[e.jsx(y,{}),e.jsx(x,{}),e.jsx(fe,{firstFieldRef:i,onCancel:t})]})})]})]})},h={args:{},render:o=>e.jsx(l,{...o})},ve=({...o})=>{const{isOpen:r,onToggle:t,onClose:s}=ee();return e.jsxs(e.Fragment,{children:[e.jsx(n,{mr:5,onClick:t,children:"Trigger"}),e.jsxs(a,{...o,returnFocusOnClose:!1,isOpen:r,onClose:s,placement:"right",closeOnBlur:!1,children:[e.jsx(c,{children:e.jsx(n,{colorScheme:"red",children:"Popover"})}),e.jsxs(d,{children:[e.jsx(w,{fontWeight:"semibold",children:"Bekreftelse"}),e.jsx(y,{}),e.jsx(x,{}),e.jsx(P,{children:"Er du sikker på at du vil fortsette?"}),e.jsx(F,{display:"flex",justifyContent:"flex-end",children:e.jsxs(C,{size:"sm",children:[e.jsx(n,{variant:"outline",children:"Avbryt"}),e.jsx(n,{colorScheme:"red",children:"Godkjenn"})]})})]})]})]})},f={args:{},render:o=>e.jsx(ve,{...o})},p=({...o})=>{const[r,t]=ce(),[s,i]=k.useState("red");return e.jsxs(a,{...o,isOpen:r,onOpen:t.on,onClose:t.off,closeOnBlur:!1,isLazy:!0,lazyBehavior:"keepMounted",children:[e.jsx(Y,{htmlFor:"anchor text",children:"Prøv å redigere teksten"}),e.jsxs(de,{children:[e.jsx(se,{children:e.jsx(Z,{id:"anchor text",color:s,w:"auto",display:"inline-flex",isDisabled:!r,defaultValue:"Popover Anchor"})}),e.jsx(c,{children:e.jsx(n,{h:"40px",colorScheme:"blue",children:r?"Lagre":"Rediger"})})]}),e.jsx(d,{children:e.jsxs(P,{children:["Farger:",e.jsx(ue,{value:s,onChange:re=>i(re),children:e.jsxs(oe,{direction:"row",children:[e.jsx(j,{value:"red",children:"rød"}),e.jsx(j,{value:"blue",children:"blå"}),e.jsx(j,{value:"green",children:"grønn"}),e.jsx(j,{value:"purple",children:"lilla"})]})})]})})]})},v={args:{},render:o=>e.jsx(p,{...o})},b={args:{},render:o=>e.jsx(g,{h:"40",children:e.jsxs(a,{...o,children:[e.jsx(c,{children:e.jsx(g,{tabIndex:0,role:"button","aria-label":"Some box",p:5,w:"120px",bg:"gray.300",children:"Klikk her"})}),e.jsxs(d,{bg:"tomato",color:"white",children:[e.jsx(w,{fontWeight:"semibold",children:"Tilpasning"}),e.jsx(y,{bg:"pink.500"}),e.jsx(x,{bg:"purple.500"}),e.jsx(P,{children:"Tadaa!! Farge og bakgrunn er endret. Sjekk ut props på hvert komponent."})]})]})})};var S,T,O;u.parameters={...u.parameters,docs:{...(S=u.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {},
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
}`,...(O=(T=u.parameters)==null?void 0:T.docs)==null?void 0:O.source}}};var I,R,E;m.parameters={...m.parameters,docs:{...(I=m.parameters)==null?void 0:I.docs,source:{originalSource:`{
  args: {},
  render: args => <PopoverFocusExample {...args} />
}`,...(E=(R=m.parameters)==null?void 0:R.docs)==null?void 0:E.source}}};var V,z,L;l.parameters={...l.parameters,docs:{...(V=l.parameters)==null?void 0:V.docs,source:{originalSource:`({
  ...args
}) => {
  const {
    onOpen,
    onClose,
    isOpen
  } = useDisclosure();
  const firstFieldRef = useRef<HTMLInputElement>(null);
  return <>
      <Box display="inline-block" mr={3}>
        Ola Nordmann
      </Box>
      <KvibPopover {...args} isOpen={isOpen} initialFocusRef={firstFieldRef} onOpen={onOpen} onClose={onClose} placement="right" closeOnBlur={false}>
        <PopoverTrigger>
          <IconButton size="sm" icon={"edit"} aria-label={"edit"} colorScheme="gray" />
        </PopoverTrigger>
        <PopoverContent p={5}>
          <FocusLock returnFocus persistentFocus={false}>
            <PopoverArrow />
            <PopoverCloseButton />
            <Form firstFieldRef={firstFieldRef} onCancel={onClose} />
          </FocusLock>
        </PopoverContent>
      </KvibPopover>
    </>;
}`,...(L=(z=l.parameters)==null?void 0:z.docs)==null?void 0:L.source}}};var A,H,K;h.parameters={...h.parameters,docs:{...(A=h.parameters)==null?void 0:A.docs,source:{originalSource:`{
  args: {},
  render: args => <PopoverForm {...args} />
}`,...(K=(H=h.parameters)==null?void 0:H.docs)==null?void 0:K.source}}};var W,_,M;f.parameters={...f.parameters,docs:{...(W=f.parameters)==null?void 0:W.docs,source:{originalSource:`{
  args: {},
  render: args => <ControlledUsage {...args} />
}`,...(M=(_=f.parameters)==null?void 0:_.docs)==null?void 0:M.source}}};var N,D,G;p.parameters={...p.parameters,docs:{...(N=p.parameters)==null?void 0:N.docs,source:{originalSource:`({
  ...args
}) => {
  const [isEditing, setIsEditing] = useBoolean();
  const [color, setColor] = useState("red");
  return <KvibPopover {...args} isOpen={isEditing} onOpen={setIsEditing.on} onClose={setIsEditing.off} closeOnBlur={false} isLazy lazyBehavior="keepMounted">
      <FormLabel htmlFor="anchor text">Prøv å redigere teksten</FormLabel>
      <HStack>
        <PopoverAnchor>
          <Input id="anchor text" color={color} w="auto" display="inline-flex" isDisabled={!isEditing} defaultValue="Popover Anchor" />
        </PopoverAnchor>

        <PopoverTrigger>
          <Button h="40px" colorScheme="blue">
            {isEditing ? "Lagre" : "Rediger"}
          </Button>
        </PopoverTrigger>
      </HStack>

      <PopoverContent>
        <PopoverBody>
          Farger:
          <RadioGroup value={color} onChange={newColor => setColor(newColor)}>
            <Stack direction="row">
              <Radio value="red">rød</Radio>
              <Radio value="blue">blå</Radio>
              <Radio value="green">grønn</Radio>
              <Radio value="purple">lilla</Radio>
            </Stack>
          </RadioGroup>
        </PopoverBody>
      </PopoverContent>
    </KvibPopover>;
}`,...(G=(D=p.parameters)==null?void 0:D.docs)==null?void 0:G.source}}};var U,q,$;v.parameters={...v.parameters,docs:{...(U=v.parameters)==null?void 0:U.docs,source:{originalSource:`{
  args: {},
  render: args => <WithPopoverAnchor {...args} />
}`,...($=(q=v.parameters)==null?void 0:q.docs)==null?void 0:$.source}}};var J,Q,X;b.parameters={...b.parameters,docs:{...(J=b.parameters)==null?void 0:J.docs,source:{originalSource:`{
  args: {},
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
}`,...(X=(Q=b.parameters)==null?void 0:Q.docs)==null?void 0:X.source}}};const be=["Popover","PopoverFocus","PopoverForm","PopoverTrappingFocus","PopoverControlled","WithPopoverAnchor","PopoverAnchorExample","PopoverCustomizing"],Le=Object.freeze(Object.defineProperty({__proto__:null,Popover:u,PopoverAnchorExample:v,PopoverControlled:f,PopoverCustomizing:b,PopoverFocus:m,PopoverForm:l,PopoverTrappingFocus:h,WithPopoverAnchor:p,__namedExportsOrder:be,default:me},Symbol.toStringTag,{value:"Module"}));export{Le as P,m as a,h as b,f as c,v as d,b as e,u as f};
