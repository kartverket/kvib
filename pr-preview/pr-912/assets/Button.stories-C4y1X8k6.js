import{j as n}from"./jsx-runtime-sfY7k0Xq.js";import{r as C}from"./index-CcKhGcwW.js";import{G as q}from"./group-DiEFhqFk.js";import{B as r}from"./Button-CS3sJgLu.js";import{V as F}from"./v-stack-bWf0p04U.js";import{S as T}from"./stack-separator-D2gEZy64.js";const t=C.forwardRef(({...e},d)=>n.jsx(q,{...e,ref:d}));try{t.displayName="ButtonGroup",t.__docgenInfo={description:"",displayName:"ButtonGroup",props:{grow:{defaultValue:null,description:"",name:"grow",required:!1,type:{name:"ConditionalValue<boolean | undefined>"}},orientation:{defaultValue:null,description:"",name:"orientation",required:!1,type:{name:'ConditionalValue<"horizontal" | "vertical" | undefined>'}},attached:{defaultValue:null,description:"",name:"attached",required:!1,type:{name:"ConditionalValue<boolean | undefined>"}},stacking:{defaultValue:null,description:"",name:"stacking",required:!1,type:{name:'ConditionalValue<"first-on-top" | "last-on-top" | undefined>'}},colorPalette:{defaultValue:{value:"green"},description:"The visual color appearance of the component",name:"colorPalette",required:!1,type:{name:"enum",value:[{value:"undefined"},{value:'"blue"'},{value:'"gray"'},{value:'"green"'},{value:'"red"'}]}},variant:{defaultValue:{value:"primary"},description:"The variant of the Button.",name:"variant",required:!1,type:{name:"enum",value:[{value:"undefined"},{value:'"primary"'},{value:'"secondary"'},{value:'"tertiary"'},{value:'"ghost"'}]}}}}}catch{}const N={title:"Komponenter/Button",component:r,parameters:{docs:{story:{inline:!0},canvas:{sourceState:"hidden"}}},args:{colorPalette:"green",variant:"solid",size:"md",disabled:!1,loading:!1,iconFill:!1,iconAriaIsHidden:!1},argTypes:{size:{description:"Size of the Button",table:{type:{summary:"xs | sm | md | lg"},defaultValue:{summary:"md"}},options:["xs","sm","md","lg"],control:{type:"radio"}},variant:{description:"The variant of the Button.",table:{type:{summary:"solid | outline | ghost | plain"}},defaultValue:{summary:"solid"},options:["solid","outline","ghost","plain"],control:{type:"radio"}},colorPalette:{description:"The visual color appearance of the component.",table:{type:{summary:"green | blue | gray | red"},defaultValue:{summary:"green"}},options:["green","blue","gray","red"],control:{type:"radio"}},disabled:{description:"If true, the button will be disabled.",table:{type:{summary:"boolean"},defaultValue:{summary:"false"}},control:"boolean"},loading:{description:"If true, the button will show a spinner.",table:{type:{summary:"boolean"},defaultValue:{summary:"false"}},control:"boolean"},iconFill:{table:{type:{summary:"boolean"}},control:"boolean"},iconAriaIsHidden:{table:{type:{summary:"boolean"}},control:"boolean",defaultValue:{summary:!1}},leftIcon:{table:{type:{summary:"string"}},control:"text",defaultValue:{summary:""}},rightIcon:{table:{type:{summary:"string"}},control:"text",defaultValue:{summary:""}}}},o={args:{children:"Klikk her"},parameters:{docs:{canvas:{sourceState:"shown"}}},render:function(d){return n.jsx(r,{...d,children:d.children})}},a={render:e=>n.jsxs(t,{orientation:"vertical",children:[n.jsx(r,{...e,children:"Nettside"}),n.jsx(r,{...e,colorPalette:"blue",children:"Forvaltning"})]})},i={args:{children:"Klikk her"},render:e=>n.jsxs(t,{justifyContent:"space-between",height:["fit-content","fit-content","28rem"],orientation:"vertical",gap:"1rem",children:[n.jsx(r,{...e,variant:"primary",children:e.children}),n.jsx(r,{...e,variant:"secondary",children:e.children}),n.jsx(r,{...e,variant:"tertiary",children:e.children}),n.jsx(r,{...e,variant:"ghost",children:e.children})]})},s={args:{children:"Klikk her"},render:e=>n.jsxs(t,{children:[n.jsx(r,{...e,isLoading:!0,children:e.children}),n.jsx(r,{...e,isDisabled:!0,children:e.children})]})},l={args:{children:"Klikk her"},render:e=>n.jsxs(t,{children:[n.jsx(r,{...e,leftIcon:"favorite",children:e.children}),n.jsx(r,{...e,rightIcon:"favorite",children:e.children}),n.jsx(r,{...e,iconFill:!0,rightIcon:"favorite",children:e.children})]})},c={args:{children:"Klikk her"},render:e=>n.jsxs(t,{children:[n.jsx(r,{...e,size:"xs",children:e.children}),n.jsx(r,{...e,size:"sm",children:e.children}),n.jsx(r,{...e,size:"md",children:e.children}),n.jsx(r,{...e,size:"lg",children:e.children})]})},u={args:{children:"Klikk her",colorPalette:"inherit"},render:e=>n.jsxs(F,{separator:n.jsx(T,{borderColor:"gray.200"}),children:[n.jsxs(t,{orientation:"vertical",variant:"secondary",gap:"4",w:"100%",children:[n.jsx(r,{...e,children:e.children}),n.jsx(r,{...e,children:e.children})]}),n.jsxs(t,{colorPalette:"blue",attached:!0,children:[n.jsx(r,{...e,children:e.children}),n.jsx(r,{rightIcon:"add",...e,children:e.children})]})]})};var p,h,m;o.parameters={...o.parameters,docs:{...(p=o.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
}`,...(m=(h=o.parameters)==null?void 0:h.docs)==null?void 0:m.source}}};var v,b,g;a.parameters={...a.parameters,docs:{...(v=a.parameters)==null?void 0:v.docs,source:{originalSource:`{
  render: args => <KvibButtonGroup orientation="vertical">
      <KvibButton {...args}>Nettside</KvibButton>
      <KvibButton {...args} colorPalette="blue">
        Forvaltning
      </KvibButton>
    </KvibButtonGroup>
}`,...(g=(b=a.parameters)==null?void 0:b.docs)==null?void 0:g.source}}};var B,f,K;i.parameters={...i.parameters,docs:{...(B=i.parameters)==null?void 0:B.docs,source:{originalSource:`{
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
}`,...(K=(f=i.parameters)==null?void 0:f.docs)==null?void 0:K.source}}};var y,x,j;s.parameters={...s.parameters,docs:{...(y=s.parameters)==null?void 0:y.docs,source:{originalSource:`{
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
}`,...(j=(x=s.parameters)==null?void 0:x.docs)==null?void 0:j.source}}};var k,S,V;l.parameters={...l.parameters,docs:{...(k=l.parameters)==null?void 0:k.docs,source:{originalSource:`{
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
}`,...(V=(S=l.parameters)==null?void 0:S.docs)==null?void 0:V.source}}};var G,I,z;c.parameters={...c.parameters,docs:{...(G=c.parameters)==null?void 0:G.docs,source:{originalSource:`{
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
}`,...(z=(I=c.parameters)==null?void 0:I.docs)==null?void 0:z.source}}};var w,P,_;u.parameters={...u.parameters,docs:{...(w=u.parameters)==null?void 0:w.docs,source:{originalSource:`{
  args: {
    children: "Klikk her",
    colorPalette: "inherit"
  },
  render: args => <VStack separator={<StackSeparator borderColor="gray.200" />}>
      <KvibButtonGroup orientation="vertical" variant="secondary" gap="4" w="100%">
        <KvibButton {...args}>{args.children}</KvibButton>
        <KvibButton {...args}>{args.children}</KvibButton>
      </KvibButtonGroup>
      <KvibButtonGroup colorPalette="blue" attached>
        <KvibButton {...args}>{args.children}</KvibButton>
        <KvibButton rightIcon="add" {...args}>
          {args.children}
        </KvibButton>
      </KvibButtonGroup>
    </VStack>
}`,...(_=(P=u.parameters)==null?void 0:P.docs)==null?void 0:_.source}}};const R=["Preview","ButtonColors","ButtonVariants","ButtonStates","ButtonIcons","ButtonSizes","ButtonGroup"],M=Object.freeze(Object.defineProperty({__proto__:null,ButtonColors:a,ButtonGroup:u,ButtonIcons:l,ButtonSizes:c,ButtonStates:s,ButtonVariants:i,Preview:o,__namedExportsOrder:R,default:N},Symbol.toStringTag,{value:"Module"}));export{M as B,o as P,a,i as b,l as c,u as d};
