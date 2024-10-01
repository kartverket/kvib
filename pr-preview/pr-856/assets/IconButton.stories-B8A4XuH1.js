import{j as a}from"./extends-CwFRzn3r.js";import{I as t}from"./IconButton-D3Vz5vzp.js";import{H as c}from"./chunk-3ASUQ6PA-DZH9lOZq.js";import{V as K}from"./chunk-NTCQBYKE-BJzF3cNd.js";import{S as z}from"./chunk-KTD65HY5-Jvpz-zFG.js";import{B as l}from"./ButtonGroup-BMC5pd8R.js";import{B as k}from"./Button-C2ChFq4J.js";const V={title:"Skjemaelementer/Icon Button",component:t,parameters:{docs:{story:{inline:!0},canvas:{sourceState:"shown"}}},argTypes:{size:{description:"Size of Icon button",table:{type:{summary:"xs | sm | md | lg"},defaultValue:{summary:"md"}},options:["xs","sm","md","lg"],control:{type:"radio"}},variant:{description:"The variant of the IconButton.",table:{type:{summary:"primary | secondary | tertiary | ghost"},defaultValue:{summary:"primary"}},options:["primary","secondary","tertiary","ghost"],control:{type:"radio"}},isDisabled:{description:"If true, the button will be disabled.",table:{type:{summary:"boolean"},defaultValue:{summary:!1}},control:"boolean"},colorScheme:{table:{defaultValue:{summary:"green"}}},iconFill:{table:{type:{summary:"boolean"},defaultValue:{summary:!1}},control:"boolean"},isLoading:{description:"If true, the button will show a spinner.",table:{type:{summary:"boolean"},defaultValue:{summary:!1}},control:"boolean"}}},n={args:{icon:"favorite","aria-label":"IconButton default"},render:o=>a.jsx(t,{...o})},r={args:{icon:"add"},render:o=>a.jsxs(c,{children:[a.jsx(t,{...o,"aria-label":"IconButton xs",size:"xs"}),a.jsx(t,{...o,"aria-label":"IconButton sm",size:"sm"}),a.jsx(t,{...o,"aria-label":"IconButton md",size:"md"}),a.jsx(t,{...o,"aria-label":"IconButton lg",size:"lg"})]})},e={args:{icon:"add"},render:o=>a.jsxs(c,{children:[a.jsx(t,{...o,"aria-label":"IconButton primary",variant:"primary"}),a.jsx(t,{...o,"aria-label":"IconButton secondary",variant:"secondary"}),a.jsx(t,{...o,"aria-label":"IconButton link",variant:"tertiary"}),a.jsx(t,{...o,"aria-label":"IconButton ghost",variant:"ghost"})]})},s={args:{icon:"add"},render:o=>a.jsxs(c,{children:[a.jsx(t,{...o,"aria-label":"IconButton disabled",isDisabled:!0}),a.jsx(t,{...o,"aria-label":"IconButton loading",isLoading:!0})]})},i={args:{icon:"favorite","aria-label":"IconButton default"},render:o=>a.jsxs(K,{divider:a.jsx(z,{borderColor:"gray.200"}),children:[a.jsxs(l,{orientation:"vertical",size:"sm",children:[a.jsx(t,{...o}),a.jsx(t,{...o})]}),a.jsxs(l,{colorScheme:"blue",isAttached:!0,variant:"secondary",size:"sm",children:[a.jsx(k,{children:"Lagre"}),a.jsx(t,{icon:"add","aria-label":"IconButton add"})]})]})};var u,d,m;n.parameters={...n.parameters,docs:{...(u=n.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    icon: "favorite",
    "aria-label": "IconButton default"
  },
  render: args => <KvibIconButton {...args} />
}`,...(m=(d=n.parameters)==null?void 0:d.docs)==null?void 0:m.source}}};var b,B,p;r.parameters={...r.parameters,docs:{...(b=r.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    icon: "add"
  },
  render: args => <HStack>
      <KvibIconButton {...args} aria-label="IconButton xs" size="xs" />
      <KvibIconButton {...args} aria-label="IconButton sm" size="sm" />
      <KvibIconButton {...args} aria-label="IconButton md" size="md" />
      <KvibIconButton {...args} aria-label="IconButton lg" size="lg" />
    </HStack>
}`,...(p=(B=r.parameters)==null?void 0:B.docs)==null?void 0:p.source}}};var I,g,v;e.parameters={...e.parameters,docs:{...(I=e.parameters)==null?void 0:I.docs,source:{originalSource:`{
  args: {
    icon: "add"
  },
  render: args => <HStack>
      <KvibIconButton {...args} aria-label="IconButton primary" variant="primary" />
      <KvibIconButton {...args} aria-label="IconButton secondary" variant="secondary" />
      <KvibIconButton {...args} aria-label="IconButton link" variant="tertiary" />
      <KvibIconButton {...args} aria-label="IconButton ghost" variant="ghost" />
    </HStack>
}`,...(v=(g=e.parameters)==null?void 0:g.docs)==null?void 0:v.source}}};var y,x,f;s.parameters={...s.parameters,docs:{...(y=s.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    icon: "add"
  },
  render: args => <HStack>
      <KvibIconButton {...args} aria-label="IconButton disabled" isDisabled />
      <KvibIconButton {...args} aria-label="IconButton loading" isLoading />
    </HStack>
}`,...(f=(x=s.parameters)==null?void 0:x.docs)==null?void 0:f.source}}};var S,j,h;i.parameters={...i.parameters,docs:{...(S=i.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    icon: "favorite",
    "aria-label": "IconButton default"
  },
  render: args => <VStack divider={<StackDivider borderColor="gray.200" />}>
      <KvibButtonGroup orientation="vertical" size="sm">
        <KvibIconButton {...args} />
        <KvibIconButton {...args} />
      </KvibButtonGroup>
      <KvibButtonGroup colorScheme="blue" isAttached variant={"secondary"} size={"sm"}>
        <KvibButton>Lagre</KvibButton>
        <KvibIconButton icon={"add"} aria-label={"IconButton add"} />
      </KvibButtonGroup>
    </VStack>
}`,...(h=(j=i.parameters)==null?void 0:j.docs)==null?void 0:h.source}}};const H=["IconButton","IconButtonSizes","IconButtonVariants","IconButtonStates","IconButtonGroup"],A=Object.freeze(Object.defineProperty({__proto__:null,IconButton:n,IconButtonGroup:i,IconButtonSizes:r,IconButtonStates:s,IconButtonVariants:e,__namedExportsOrder:H,default:V},Symbol.toStringTag,{value:"Module"}));export{A as I,n as a,r as b,e as c,s as d,i as e};
