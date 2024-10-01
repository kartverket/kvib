import{j as e}from"./extends-CwFRzn3r.js";import{T as o}from"./chunk-TK6VMDNP-D-1SiMBZ.js";import{B as l}from"./Button-BTrFsz-j.js";import{V as R}from"./chunk-NTCQBYKE-BJzF3cNd.js";import{H as a}from"./chunk-3ASUQ6PA-DZH9lOZq.js";import{W as V,a as r}from"./chunk-7ELO524Q-Fc7yoYFC.js";import{f as P}from"./chunk-ZJJGQIVY-CoI1iMVy.js";import{B as L}from"./chunk-PULVB27S-CgiffgmI.js";import{T as _}from"./chunk-RPO2WXNL-DTSHIQcn.js";const z={title:"Overlay/Tooltip",component:o,parameters:{docs:{story:{inline:!0},canvas:{sourceState:"shown"}}},argTypes:{"aria-label":{description:"The accessible, human friendly label to use for screen readers. If passed, tooltip will show the content label but expose only `aria-label` to assistive technologies",table:{type:{summary:"string"}},control:"text"},arrowPadding:{description:"The padding required to prevent the arrow from reaching the very edge of the popper.",table:{type:{summary:"number"},defaultValue:{summary:"8"}},control:"number"},arrowShadowColor:{table:{type:{summary:"string"}},control:"text"},arrowSize:{table:{type:{summary:"number"},defaultValue:{summary:"10"}},control:"number"},closeDelay:{description:"Delay (in ms) before hiding the tooltip",table:{type:{summary:"number"},defaultValue:{summary:"0ms"}},control:"number"},closeOnClick:{description:"If true, the tooltip will hide on click",table:{type:{summary:"boolean"},defaultValue:{summary:"true"}},control:"boolean"},closeOnEsc:{description:"If true, the tooltip will hide on pressing Esc key",table:{type:{summary:"boolean"},defaultValue:{summary:"true"}},control:"boolean"},closeOnMouseDown:{description:"If true, the tooltip will hide while the mouse is down",table:{type:{summary:"boolean"}},control:"boolean"},closeOnPointerDown:{description:"If true, the tooltip will hide while the pointer is down",table:{type:{summary:"boolean"},defaultValue:{summary:"true"}},control:"boolean"},closeOnScroll:{table:{type:{summary:"boolean"},defaultValue:{summary:"false"}},control:"boolean"},defaultIsOpen:{description:"If true, the tooltip will be initially shown",table:{type:{summary:"boolean"},defaultValue:{summary:"false"}},control:"boolean"},direction:{description:"Theme direction ltr or rtl. Popper's placement will be set accordingly",table:{type:{summary:"'ltr' | 'rtl'"},defaultValue:{summary:"ltr"}},options:["ltr","rtl"],control:"radio"},gutter:{description:"The distance or margin between the reference and popper. It is used internally to create an offset modifier. NB: If you define offset prop, it'll override the gutter.",table:{type:{summary:"number"},defaultValue:{summary:"8"}},control:"number"},hasArrow:{description:"If true, the tooltip will show an arrow tip",table:{type:{summary:"boolean"},defaultValue:{summary:"false"}},control:"boolean"},isDisabled:{table:{type:{summary:"boolean"},defaultValue:{summary:"false"}},control:"boolean"},isOpen:{description:"If true, the tooltip will be shown (in controlled mode)",table:{type:{summary:"boolean"},defaultValue:{summary:"false"}},control:"boolean"},label:{description:"The label of the tooltip",table:{type:{summary:"type ONLY_FOR_FORMAT = | string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | ReactFragment | ReactPortal"}},control:"text"},modifiers:{description:"Array of popper.js modifiers. Check the docs to see the list of possible modifiers you can pass.",table:{type:{summary:"Partial<Modifier<string, any>>[]"}},control:"text"},motionProps:{table:{type:{summary:"HTMLMotionProps<'div'>"}},control:"text"},offset:{description:"The main and cross-axis offset to displace popper element from its reference element.",table:{type:{summary:"[number, number]"}},control:"array"},onClose:{description:"Callback to run when the tooltip hides",table:{type:{summary:"() => void"}},control:"text"},onOpen:{description:"Callback to run when the tooltip shows",table:{type:{summary:"() => void"}},control:"text"},openDelay:{description:"Delay (in ms) before showing the tooltip",table:{type:{summary:"number"},defaultValue:{summary:"0ms"}},control:"number"},placement:{description:"The placement of the popper relative to its reference.",table:{type:{summary:"PlacementWithLogical"},defaultValue:{summary:"bottom"}},control:"text"},portalProps:{description:"Props to be forwarded to the portal component",table:{type:{summary:"Pick< PortalProps, 'appendToParentPortal' | 'containerRef' >"}},control:"text"},shouldWrapChildren:{description:"If true, the tooltip will wrap its children in a `<span/>` with `tabIndex=0`",table:{type:{summary:"boolean"},defaultValue:{summary:"false"}},control:"boolean"}},args:{onClose:void 0,onOpen:void 0}},n={args:{},render:t=>e.jsx(o,{...t,label:"Et tooltip!","aria-label":"Et tooltip",children:"Hover meg"})},s={args:{label:"Søk",hasArrow:!0},render:t=>e.jsx(o,{...t,bg:"gray.600",children:"Hover meg"})},i={args:{label:"Søk",hasArrow:!0},render:t=>e.jsx(o,{...t,bg:"red.600",children:e.jsx(l,{children:"Button"})})},p={args:{isDisabled:!0},render:t=>e.jsx(o,{...t,children:"Dette er et disabled tooltip"})},c={args:{},render:t=>e.jsxs(R,{spacing:6,children:[e.jsxs(a,{spacing:6,children:[e.jsx(o,{...t,label:"Auto start",placement:"auto-start",children:e.jsx(l,{children:"Auto-Start"})}),e.jsx(o,{...t,label:"Auto",placement:"auto",children:e.jsx(l,{children:"Auto"})}),e.jsx(o,{...t,label:"Auto end",placement:"auto-end",children:e.jsx(l,{children:"Auto-End"})})]}),e.jsxs(a,{spacing:6,children:[e.jsx(o,{...t,label:"Top start",placement:"top-start",children:e.jsx(l,{children:"Top-Start"})}),e.jsx(o,{...t,label:"Top",placement:"top",children:e.jsx(l,{children:"Top"})}),e.jsx(o,{...t,label:"Top end",placement:"top-end",children:e.jsx(l,{children:"Top-End"})})]}),e.jsxs(a,{spacing:6,children:[e.jsx(o,{...t,label:"Right start",placement:"right-start",children:e.jsx(l,{children:"Right-Start"})}),e.jsx(o,{...t,label:"Right",placement:"right",children:e.jsx(l,{children:"Right"})}),e.jsx(o,{...t,label:"Right end",placement:"right-end",children:e.jsx(l,{children:"Right-End"})})]}),e.jsxs(a,{spacing:6,children:[e.jsx(o,{...t,label:"Bottom start",placement:"bottom-start",children:e.jsx(l,{children:"Bottom Start"})}),e.jsx(o,{...t,label:"Bottom",placement:"bottom",children:e.jsx(l,{children:"Bottom"})}),e.jsx(o,{...t,label:"Bottom end",placement:"bottom-end",children:e.jsx(l,{children:"Bottom End"})})]}),e.jsxs(a,{spacing:6,children:[e.jsx(o,{...t,label:"Left start",placement:"left-start",children:e.jsx(l,{children:"Left-Start"})}),e.jsx(o,{...t,label:"Left",placement:"left",children:e.jsx(l,{children:"Left"})}),e.jsx(o,{...t,label:"Left end",placement:"left-end",children:e.jsx(l,{children:"Left-End"})})]})]})},m={args:{},render:t=>e.jsxs(V,{spacing:6,children:[e.jsx(r,{children:e.jsx(o,{...t,label:"I close on click",children:e.jsx(l,{children:"Close on Click - true(default)"})})}),e.jsx(r,{children:e.jsx(o,{...t,label:"I don't close on click",closeOnClick:!1,children:e.jsx(l,{children:"Close on Click - false"})})}),e.jsx(r,{children:e.jsx(o,{...t,label:"I am always open",placement:"top",isOpen:!0,children:e.jsx(l,{children:"Always Open"})})}),e.jsx(r,{children:e.jsx(o,{...t,label:"I am open by default",placement:"left",defaultIsOpen:!0,children:e.jsx(l,{children:"Open on startup"})})}),e.jsx(r,{children:e.jsx(o,{...t,label:"Opened after 500ms",openDelay:500,children:e.jsx(l,{children:"Delay Open - 500ms"})})}),e.jsx(r,{children:e.jsx(o,{...t,label:"Closed after 500ms",closeDelay:500,children:e.jsx(l,{children:"Delay Close - 500ms"})})}),e.jsx(r,{children:e.jsx(o,{...t,label:"I have 15px arrow",hasArrow:!0,arrowSize:15,children:e.jsx(l,{children:"Arrow size - 15px"})})})]})},M=P(({children:t,...H},W)=>e.jsx(L,{p:"1",children:e.jsx(_,{ref:W,...H,children:t})})),d={args:{label:"Hover me! (CustomCard)"},render:t=>e.jsx(o,{...t,children:e.jsx(M,{children:"Tag Here"})})};var u,b,h;n.parameters={...n.parameters,docs:{...(u=n.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {},
  render: args => <KvibTooltip {...args} label="Et tooltip!" aria-label="Et tooltip">
      Hover meg
    </KvibTooltip>
}`,...(h=(b=n.parameters)==null?void 0:b.docs)==null?void 0:h.source}}};var f,y,g;s.parameters={...s.parameters,docs:{...(f=s.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    label: "Søk",
    hasArrow: true
  },
  render: args => <KvibTooltip {...args} bg="gray.600">
      Hover meg
    </KvibTooltip>
}`,...(g=(y=s.parameters)==null?void 0:y.docs)==null?void 0:g.source}}};var T,x,v;i.parameters={...i.parameters,docs:{...(T=i.parameters)==null?void 0:T.docs,source:{originalSource:`{
  args: {
    label: "Søk",
    hasArrow: true
  },
  render: args => <KvibTooltip {...args} bg="red.600">
      <Button>Button</Button>
    </KvibTooltip>
}`,...(v=(x=i.parameters)==null?void 0:x.docs)==null?void 0:v.source}}};var j,B,w;p.parameters={...p.parameters,docs:{...(j=p.parameters)==null?void 0:j.docs,source:{originalSource:`{
  args: {
    isDisabled: true
  },
  render: args => <KvibTooltip {...args}>Dette er et disabled tooltip</KvibTooltip>
}`,...(w=(B=p.parameters)==null?void 0:B.docs)==null?void 0:w.source}}};var K,S,I;c.parameters={...c.parameters,docs:{...(K=c.parameters)==null?void 0:K.docs,source:{originalSource:`{
  args: {},
  render: args => <VStack spacing={6}>
      <HStack spacing={6}>
        <KvibTooltip {...args} label="Auto start" placement="auto-start">
          <Button>Auto-Start</Button>
        </KvibTooltip>

        <KvibTooltip {...args} label="Auto" placement="auto">
          <Button>Auto</Button>
        </KvibTooltip>

        <KvibTooltip {...args} label="Auto end" placement="auto-end">
          <Button>Auto-End</Button>
        </KvibTooltip>
      </HStack>

      <HStack spacing={6}>
        <KvibTooltip {...args} label="Top start" placement="top-start">
          <Button>Top-Start</Button>
        </KvibTooltip>

        <KvibTooltip {...args} label="Top" placement="top">
          <Button>Top</Button>
        </KvibTooltip>

        <KvibTooltip {...args} label="Top end" placement="top-end">
          <Button>Top-End</Button>
        </KvibTooltip>
      </HStack>

      <HStack spacing={6}>
        <KvibTooltip {...args} label="Right start" placement="right-start">
          <Button>Right-Start</Button>
        </KvibTooltip>

        <KvibTooltip {...args} label="Right" placement="right">
          <Button>Right</Button>
        </KvibTooltip>

        <KvibTooltip {...args} label="Right end" placement="right-end">
          <Button>Right-End</Button>
        </KvibTooltip>
      </HStack>

      <HStack spacing={6}>
        <KvibTooltip {...args} label="Bottom start" placement="bottom-start">
          <Button>Bottom Start</Button>
        </KvibTooltip>

        <KvibTooltip {...args} label="Bottom" placement="bottom">
          <Button>Bottom</Button>
        </KvibTooltip>

        <KvibTooltip {...args} label="Bottom end" placement="bottom-end">
          <Button>Bottom End</Button>
        </KvibTooltip>
      </HStack>

      <HStack spacing={6}>
        <KvibTooltip {...args} label="Left start" placement="left-start">
          <Button>Left-Start</Button>
        </KvibTooltip>

        <KvibTooltip {...args} label="Left" placement="left">
          <Button>Left</Button>
        </KvibTooltip>

        <KvibTooltip {...args} label="Left end" placement="left-end">
          <Button>Left-End</Button>
        </KvibTooltip>
      </HStack>
    </VStack>
}`,...(I=(S=c.parameters)==null?void 0:S.docs)==null?void 0:I.source}}};var C,k,O;m.parameters={...m.parameters,docs:{...(C=m.parameters)==null?void 0:C.docs,source:{originalSource:`{
  args: {},
  render: args => <Wrap spacing={6}>
      <WrapItem>
        <KvibTooltip {...args} label="I close on click">
          <Button>Close on Click - true(default)</Button>
        </KvibTooltip>
      </WrapItem>

      <WrapItem>
        <KvibTooltip {...args} label="I don't close on click" closeOnClick={false}>
          <Button>Close on Click - false</Button>
        </KvibTooltip>
      </WrapItem>

      <WrapItem>
        <KvibTooltip {...args} label="I am always open" placement="top" isOpen>
          <Button>Always Open</Button>
        </KvibTooltip>
      </WrapItem>

      <WrapItem>
        <KvibTooltip {...args} label="I am open by default" placement="left" defaultIsOpen>
          <Button>Open on startup</Button>
        </KvibTooltip>
      </WrapItem>

      <WrapItem>
        <KvibTooltip {...args} label="Opened after 500ms" openDelay={500}>
          <Button>Delay Open - 500ms</Button>
        </KvibTooltip>
      </WrapItem>

      <WrapItem>
        <KvibTooltip {...args} label="Closed after 500ms" closeDelay={500}>
          <Button>Delay Close - 500ms</Button>
        </KvibTooltip>
      </WrapItem>

      <WrapItem>
        <KvibTooltip {...args} label="I have 15px arrow" hasArrow arrowSize={15}>
          <Button>Arrow size - 15px</Button>
        </KvibTooltip>
      </WrapItem>
    </Wrap>
}`,...(O=(k=m.parameters)==null?void 0:k.docs)==null?void 0:O.source}}};var A,E,D;d.parameters={...d.parameters,docs:{...(A=d.parameters)==null?void 0:A.docs,source:{originalSource:`{
  args: {
    label: "Hover me! (CustomCard)"
  },
  render: args => <KvibTooltip {...args}>
      <CustomCard>Tag Here</CustomCard>
    </KvibTooltip>
}`,...(D=(E=d.parameters)==null?void 0:E.docs)==null?void 0:D.source}}};const F=["Tooltip","TooltipArrow","TooltipFocusable","TooltipDisabled","TooltipPlacement","TooltipExamples","CustomToolTip"],Z=Object.freeze(Object.defineProperty({__proto__:null,CustomToolTip:d,Tooltip:n,TooltipArrow:s,TooltipDisabled:p,TooltipExamples:m,TooltipFocusable:i,TooltipPlacement:c,__namedExportsOrder:F,default:z},Symbol.toStringTag,{value:"Module"}));export{d as C,Z as T,s as a,i as b,p as c,c as d,m as e,n as f};
