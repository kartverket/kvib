import{j as e}from"./extends-CwFRzn3r.js";import{S as D}from"./stack-divider-Bj3JUBnu.js";import{B as n}from"./Button-CORTJBOr.js";import{B as t}from"./ButtonGroup-DIYU158p.js";import{V as F}from"./v-stack-k8hvxFKi.js";const P={title:"Skjemaelementer/Button",component:n,parameters:{docs:{story:{inline:!0},canvas:{sourceState:"hidden"}}},argTypes:{size:{description:"Size of the Button",table:{type:{summary:"xs | sm | md | lg"},defaultValue:{summary:"md"}},options:["xs","sm","md","lg"],control:{type:"radio"}},variant:{description:"The variant of the Button.",table:{type:{summary:"primary | secondary | tertiary | ghost"},defaultValue:{summary:"primary"}},options:["primary","secondary","tertiary","ghost"],control:{type:"radio"}},colorScheme:{description:"The visual color appearance of the component.",table:{type:{summary:"green | blue | gray | red"},defaultValue:{summary:"green"}},options:["green","blue","gray","red"],control:{type:"radio"}},isDisabled:{description:"If true, the button will be disabled.",table:{type:{summary:Boolean},defaultValue:{summary:!1}},control:"boolean"},isLoading:{description:"If true, the button will show a spinner.",table:{type:{summary:"boolean"},defaultValue:{summary:!1}},control:"boolean"},iconFill:{table:{type:{summary:"boolean"}},control:"boolean"},iconAriaIsHidden:{table:{type:{summary:"boolean"}},control:"boolean",defaultValue:{summary:!1}}}},o={args:{children:"Klikk her"},parameters:{docs:{canvas:{sourceState:"shown"}}},render:function(u){return e.jsx(n,{...u,children:u.children})}},i={render:r=>e.jsxs(t,{orientation:"vertical",children:[e.jsx(n,{...r,children:"Nettside"}),e.jsx(n,{colorScheme:"blue",...r,children:"Forvaltning"})]})},a={args:{children:"Klikk her"},render:r=>e.jsxs(t,{justifyContent:"space-between",height:["fit-content","fit-content","28rem"],orientation:"vertical",gap:"1rem",children:[e.jsx(n,{...r,variant:"primary",children:r.children}),e.jsx(n,{...r,variant:"secondary",children:r.children}),e.jsx(n,{...r,variant:"tertiary",children:r.children}),e.jsx(n,{...r,variant:"ghost",children:r.children})]})},s={args:{children:"Klikk her"},render:r=>e.jsxs(t,{children:[e.jsx(n,{...r,isLoading:!0,children:r.children}),e.jsx(n,{...r,isDisabled:!0,children:r.children})]})},c={args:{children:"Klikk her"},render:r=>e.jsxs(t,{children:[e.jsx(n,{...r,leftIcon:"favorite",children:r.children}),e.jsx(n,{...r,rightIcon:"favorite",children:r.children}),e.jsx(n,{...r,iconFill:!0,rightIcon:"favorite",children:r.children})]})},l={args:{children:"Klikk her"},render:r=>e.jsxs(t,{children:[e.jsx(n,{...r,size:"xs",children:r.children}),e.jsx(n,{...r,size:"sm",children:r.children}),e.jsx(n,{...r,size:"md",children:r.children}),e.jsx(n,{...r,size:"lg",children:r.children})]})},d={args:{children:"Klikk her"},render:r=>e.jsxs(F,{divider:e.jsx(D,{borderColor:"gray.200"}),children:[e.jsxs(t,{orientation:"vertical",variant:"secondary",spacing:"4",size:"sm",children:[e.jsx(n,{...r,children:r.children}),e.jsx(n,{...r,children:r.children})]}),e.jsxs(t,{colorScheme:"blue",isAttached:!0,children:[e.jsx(n,{...r,children:r.children}),e.jsx(n,{rightIcon:"add",...r,children:r.children})]})]})};var h,m,p;o.parameters={...o.parameters,docs:{...(h=o.parameters)==null?void 0:h.docs,source:{originalSource:`{
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
  render: function Render(args) {
    return <KvibButton {...args}>{args.children}</KvibButton>;
  }
}`,...(p=(m=o.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};var v,b,B;i.parameters={...i.parameters,docs:{...(v=i.parameters)==null?void 0:v.docs,source:{originalSource:`{
  render: args => <KvibButtonGroup orientation="vertical">
      <KvibButton {...args}>Nettside</KvibButton>
      <KvibButton colorScheme="blue" {...args}>
        Forvaltning
      </KvibButton>
    </KvibButtonGroup>
}`,...(B=(b=i.parameters)==null?void 0:b.docs)==null?void 0:B.source}}};var g,K,y;a.parameters={...a.parameters,docs:{...(g=a.parameters)==null?void 0:g.docs,source:{originalSource:`{
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
}`,...(y=(K=a.parameters)==null?void 0:K.docs)==null?void 0:y.source}}};var f,x,j;s.parameters={...s.parameters,docs:{...(f=s.parameters)==null?void 0:f.docs,source:{originalSource:`{
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
}`,...(j=(x=s.parameters)==null?void 0:x.docs)==null?void 0:j.source}}};var k,S,G;c.parameters={...c.parameters,docs:{...(k=c.parameters)==null?void 0:k.docs,source:{originalSource:`{
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
}`,...(G=(S=c.parameters)==null?void 0:S.docs)==null?void 0:G.source}}};var z,I,V;l.parameters={...l.parameters,docs:{...(z=l.parameters)==null?void 0:z.docs,source:{originalSource:`{
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
}`,...(V=(I=l.parameters)==null?void 0:I.docs)==null?void 0:V.source}}};var w,C,_;d.parameters={...d.parameters,docs:{...(w=d.parameters)==null?void 0:w.docs,source:{originalSource:`{
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
}`,...(_=(C=d.parameters)==null?void 0:C.docs)==null?void 0:_.source}}};const T=["Preview","ButtonColors","ButtonVariants","ButtonStates","ButtonIcons","ButtonSizes","ButtonGroup"],N=Object.freeze(Object.defineProperty({__proto__:null,ButtonColors:i,ButtonGroup:d,ButtonIcons:c,ButtonSizes:l,ButtonStates:s,ButtonVariants:a,Preview:o,__namedExportsOrder:T,default:P},Symbol.toStringTag,{value:"Module"}));export{N as B,o as P,i as a,a as b,c,d};
