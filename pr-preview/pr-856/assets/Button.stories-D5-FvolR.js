import{j as e}from"./extends-CwFRzn3r.js";import{B as n}from"./Button-DzfkXRWF.js";import{B as t}from"./ButtonGroup-BQtxj9tZ.js";import{V as _}from"./chunk-NTCQBYKE-BJzF3cNd.js";import{S as D}from"./chunk-KTD65HY5-Jvpz-zFG.js";const F={title:"Skjemaelementer/Button",component:n,parameters:{docs:{story:{inline:!0},canvas:{sourceState:"hidden"}}},argTypes:{size:{description:"Size of the Button",table:{type:{summary:"xs | sm | md | lg"},defaultValue:{summary:"md"}},options:["xs","sm","md","lg"],control:{type:"radio"}},variant:{description:"The variant of the Button.",table:{type:{summary:"primary | secondary | tertiary | ghost"},defaultValue:{summary:"primary"}},options:["primary","secondary","tertiary","ghost"],control:{type:"radio"}},colorScheme:{description:"The visual color appearance of the component.",table:{type:{summary:"green | blue | gray | red"},defaultValue:{summary:"green"}},options:["green","blue","gray","red"],control:{type:"radio"}},isDisabled:{description:"If true, the button will be disabled.",table:{type:{summary:Boolean},defaultValue:{summary:!1}},control:"boolean"},isLoading:{description:"If true, the button will show a spinner.",table:{type:{summary:"boolean"},defaultValue:{summary:!1}},control:"boolean"},iconFill:{table:{type:{summary:"boolean"}},control:"boolean"},iconAriaIsHidden:{table:{type:{summary:"boolean"}},control:"boolean",defaultValue:{summary:!1}}}},o={args:{children:"Klikk her"},parameters:{docs:{canvas:{sourceState:"shown"}}},render:r=>e.jsx(n,{...r,children:r.children})},i={args:{},render:r=>e.jsxs(t,{orientation:"vertical",children:[e.jsx(n,{...r,children:"Nettside"}),e.jsx(n,{colorScheme:"blue",...r,children:"Forvaltning"})]})},a={args:{children:"Klikk her"},render:r=>e.jsxs(t,{justifyContent:"space-between",height:["fit-content","fit-content","28rem"],orientation:"vertical",gap:"1rem",children:[e.jsx(n,{...r,variant:"primary",children:r.children}),e.jsx(n,{...r,variant:"secondary",children:r.children}),e.jsx(n,{...r,variant:"tertiary",children:r.children}),e.jsx(n,{...r,variant:"ghost",children:r.children})]})},s={args:{children:"Klikk her"},render:r=>e.jsxs(t,{children:[e.jsx(n,{...r,isLoading:!0,children:r.children}),e.jsx(n,{...r,isDisabled:!0,children:r.children})]})},c={args:{children:"Klikk her"},render:r=>e.jsxs(t,{children:[e.jsx(n,{...r,leftIcon:"favorite",children:r.children}),e.jsx(n,{...r,rightIcon:"favorite",children:r.children}),e.jsx(n,{...r,iconFill:!0,rightIcon:"favorite",children:r.children})]})},l={args:{children:"Klikk her"},render:r=>e.jsxs(t,{children:[e.jsx(n,{...r,size:"xs",children:r.children}),e.jsx(n,{...r,size:"sm",children:r.children}),e.jsx(n,{...r,size:"md",children:r.children}),e.jsx(n,{...r,size:"lg",children:r.children})]})},d={args:{children:"Klikk her"},render:r=>e.jsxs(_,{divider:e.jsx(D,{borderColor:"gray.200"}),children:[e.jsxs(t,{orientation:"vertical",variant:"secondary",spacing:"4",size:"sm",children:[e.jsx(n,{...r,children:r.children}),e.jsx(n,{...r,children:r.children})]}),e.jsxs(t,{colorScheme:"blue",isAttached:!0,children:[e.jsx(n,{...r,children:r.children}),e.jsx(n,{rightIcon:"add",...r,children:r.children})]})]})};var u,h,m;o.parameters={...o.parameters,docs:{...(u=o.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    children: "Klikk her"
  },
  parameters: {
    docs: {
      canvas: {
        sourceState: "shown"
      }
    }
  },
  render: args => <KvibButton {...args}>{args.children}</KvibButton>
}`,...(m=(h=o.parameters)==null?void 0:h.docs)==null?void 0:m.source}}};var p,b,v;i.parameters={...i.parameters,docs:{...(p=i.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {},
  render: args => <KvibButtonGroup orientation="vertical">
      <KvibButton {...args}>Nettside</KvibButton>
      <KvibButton colorScheme="blue" {...args}>
        Forvaltning
      </KvibButton>
    </KvibButtonGroup>
}`,...(v=(b=i.parameters)==null?void 0:b.docs)==null?void 0:v.source}}};var B,g,K;a.parameters={...a.parameters,docs:{...(B=a.parameters)==null?void 0:B.docs,source:{originalSource:`{
  args: {
    children: "Klikk her"
  },
  render: args => <KvibButtonGroup justifyContent="space-between" height={["fit-content", "fit-content", "28rem"]} orientation="vertical" gap="1rem">
      <KvibButton {...args} variant="primary">
        {args.children}
      </KvibButton>
      <KvibButton {...args} variant="secondary">
        {args.children}
      </KvibButton>
      <KvibButton {...args} variant="tertiary">
        {args.children}
      </KvibButton>
      <KvibButton {...args} variant="ghost">
        {args.children}
      </KvibButton>
    </KvibButtonGroup>
}`,...(K=(g=a.parameters)==null?void 0:g.docs)==null?void 0:K.source}}};var y,x,f;s.parameters={...s.parameters,docs:{...(y=s.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    children: "Klikk her"
  },
  render: args => <KvibButtonGroup>
      <KvibButton {...args} isLoading>
        {args.children}
      </KvibButton>
      <KvibButton {...args} isDisabled>
        {args.children}
      </KvibButton>
    </KvibButtonGroup>
}`,...(f=(x=s.parameters)==null?void 0:x.docs)==null?void 0:f.source}}};var j,k,S;c.parameters={...c.parameters,docs:{...(j=c.parameters)==null?void 0:j.docs,source:{originalSource:`{
  args: {
    children: "Klikk her"
  },
  render: args => <KvibButtonGroup>
      <KvibButton {...args} leftIcon="favorite">
        {args.children}
      </KvibButton>
      <KvibButton {...args} rightIcon="favorite">
        {args.children}
      </KvibButton>
      <KvibButton {...args} iconFill rightIcon="favorite">
        {args.children}
      </KvibButton>
    </KvibButtonGroup>
}`,...(S=(k=c.parameters)==null?void 0:k.docs)==null?void 0:S.source}}};var G,z,I;l.parameters={...l.parameters,docs:{...(G=l.parameters)==null?void 0:G.docs,source:{originalSource:`{
  args: {
    children: "Klikk her"
  },
  render: args => <KvibButtonGroup>
      <KvibButton {...args} size="xs">
        {args.children}
      </KvibButton>
      <KvibButton {...args} size="sm">
        {args.children}
      </KvibButton>
      <KvibButton {...args} size="md">
        {args.children}
      </KvibButton>
      <KvibButton {...args} size="lg">
        {args.children}
      </KvibButton>
    </KvibButtonGroup>
}`,...(I=(z=l.parameters)==null?void 0:z.docs)==null?void 0:I.source}}};var V,w,C;d.parameters={...d.parameters,docs:{...(V=d.parameters)==null?void 0:V.docs,source:{originalSource:`{
  args: {
    children: "Klikk her"
  },
  render: args => <VStack divider={<StackDivider borderColor="gray.200" />}>
      <KvibButtonGroup orientation="vertical" variant="secondary" spacing="4" size="sm">
        <KvibButton {...args}>{args.children}</KvibButton>
        <KvibButton {...args}>{args.children}</KvibButton>
      </KvibButtonGroup>
      <KvibButtonGroup colorScheme="blue" isAttached>
        <KvibButton {...args}>{args.children}</KvibButton>
        <KvibButton rightIcon="add" {...args}>
          {args.children}
        </KvibButton>
      </KvibButtonGroup>
    </VStack>
}`,...(C=(w=d.parameters)==null?void 0:w.docs)==null?void 0:C.source}}};const T=["Button","ButtonColors","ButtonVariants","ButtonStates","ButtonIcons","ButtonSizes","ButtonGroup"],$=Object.freeze(Object.defineProperty({__proto__:null,Button:o,ButtonColors:i,ButtonGroup:d,ButtonIcons:c,ButtonSizes:l,ButtonStates:s,ButtonVariants:a,__namedExportsOrder:T,default:F},Symbol.toStringTag,{value:"Module"}));export{$ as B,i as a,a as b,c,d,o as e};
