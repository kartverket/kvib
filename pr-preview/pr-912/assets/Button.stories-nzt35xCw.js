import{j as r}from"./jsx-runtime-sfY7k0Xq.js";import{r as C}from"./index-CcKhGcwW.js";import{G as q}from"./group-DiEFhqFk.js";import{B as n}from"./Button-ZrTyyYUn.js";import{V as F}from"./v-stack-bWf0p04U.js";import{S as T}from"./stack-separator-D2gEZy64.js";const t=C.forwardRef(({...e},d)=>r.jsx(q,{...e,ref:d}));try{t.displayName="ButtonGroup",t.__docgenInfo={description:"",displayName:"ButtonGroup",props:{grow:{defaultValue:null,description:"",name:"grow",required:!1,type:{name:"ConditionalValue<boolean | undefined>"}},orientation:{defaultValue:null,description:"",name:"orientation",required:!1,type:{name:'ConditionalValue<"horizontal" | "vertical" | undefined>'}},attached:{defaultValue:null,description:"",name:"attached",required:!1,type:{name:"ConditionalValue<boolean | undefined>"}},stacking:{defaultValue:null,description:"",name:"stacking",required:!1,type:{name:'ConditionalValue<"first-on-top" | "last-on-top" | undefined>'}},colorPalette:{defaultValue:{value:"green"},description:"The visual color appearance of the component",name:"colorPalette",required:!1,type:{name:"enum",value:[{value:"undefined"},{value:'"blue"'},{value:'"gray"'},{value:'"green"'},{value:'"red"'}]}},variant:{defaultValue:{value:"primary"},description:"The variant of the Button.",name:"variant",required:!1,type:{name:"enum",value:[{value:"undefined"},{value:'"primary"'},{value:'"secondary"'},{value:'"tertiary"'},{value:'"ghost"'}]}}}}}catch{}const N={title:"Komponenter/Button",component:n,parameters:{docs:{story:{inline:!0},canvas:{sourceState:"hidden"}}},args:{colorPalette:"green",variant:"primary",size:"md",disabled:!1,loading:!1,iconFill:!1,iconAriaIsHidden:!1},argTypes:{size:{description:"Size of the Button",table:{type:{summary:"xs | sm | md | lg"},defaultValue:{summary:"md"}},options:["xs","sm","md","lg"],control:{type:"radio"}},variant:{description:"The variant of the Button.",table:{type:{summary:"primary | secondary | tertiary | ghost"},defaultValue:{summary:"primary"}},options:["primary","secondary","tertiary","ghost"],control:{type:"radio"}},colorPalette:{description:"The visual color appearance of the component.",table:{type:{summary:"green | blue | gray | red"},defaultValue:{summary:"green"}},options:["green","blue","gray","red"],control:{type:"radio"}},disabled:{description:"If true, the button will be disabled.",table:{type:{summary:"boolean"},defaultValue:{summary:"false"}},control:"boolean"},loading:{description:"If true, the button will show a spinner.",table:{type:{summary:"boolean"},defaultValue:{summary:"false"}},control:"boolean"},iconFill:{table:{type:{summary:"boolean"}},control:"boolean"},iconAriaIsHidden:{table:{type:{summary:"boolean"}},control:"boolean",defaultValue:{summary:!1}},leftIcon:{table:{type:{summary:"string"}},control:"text",defaultValue:{summary:""}}}},a={args:{children:"Klikk her"},parameters:{docs:{canvas:{sourceState:"shown"}}},render:function(d){return r.jsx(n,{...d,children:d.children})}},o={render:e=>r.jsxs(t,{orientation:"vertical",children:[r.jsx(n,{...e,children:"Nettside"}),r.jsx(n,{...e,colorPalette:"blue",children:"Forvaltning"})]})},i={args:{children:"Klikk her"},render:e=>r.jsxs(t,{justifyContent:"space-between",height:["fit-content","fit-content","28rem"],orientation:"vertical",gap:"1rem",children:[r.jsx(n,{...e,variant:"primary",children:e.children}),r.jsx(n,{...e,variant:"secondary",children:e.children}),r.jsx(n,{...e,variant:"tertiary",children:e.children}),r.jsx(n,{...e,variant:"ghost",children:e.children})]})},s={args:{children:"Klikk her"},render:e=>r.jsxs(t,{children:[r.jsx(n,{...e,isLoading:!0,children:e.children}),r.jsx(n,{...e,isDisabled:!0,children:e.children})]})},l={args:{children:"Klikk her"},render:e=>r.jsxs(t,{children:[r.jsx(n,{...e,leftIcon:"favorite",children:e.children}),r.jsx(n,{...e,rightIcon:"favorite",children:e.children}),r.jsx(n,{...e,iconFill:!0,rightIcon:"favorite",children:e.children})]})},c={args:{children:"Klikk her"},render:e=>r.jsxs(t,{children:[r.jsx(n,{...e,size:"xs",children:e.children}),r.jsx(n,{...e,size:"sm",children:e.children}),r.jsx(n,{...e,size:"md",children:e.children}),r.jsx(n,{...e,size:"lg",children:e.children})]})},u={args:{children:"Klikk her",colorPalette:"inherit"},render:e=>r.jsxs(F,{separator:r.jsx(T,{borderColor:"gray.200"}),children:[r.jsxs(t,{orientation:"vertical",variant:"secondary",gap:"4",size:"sm",w:"100%",children:[r.jsx(n,{...e,children:e.children}),r.jsx(n,{...e,children:e.children})]}),r.jsxs(t,{colorPalette:"blue",attached:!0,children:[r.jsx(n,{...e,children:e.children}),r.jsx(n,{rightIcon:"add",...e,children:e.children})]})]})};var p,h,m;a.parameters={...a.parameters,docs:{...(p=a.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
}`,...(m=(h=a.parameters)==null?void 0:h.docs)==null?void 0:m.source}}};var v,b,g;o.parameters={...o.parameters,docs:{...(v=o.parameters)==null?void 0:v.docs,source:{originalSource:`{
  render: args => <KvibButtonGroup orientation="vertical">
      <KvibButton {...args}>Nettside</KvibButton>
      <KvibButton {...args} colorPalette="blue">
        Forvaltning
      </KvibButton>
    </KvibButtonGroup>
}`,...(g=(b=o.parameters)==null?void 0:b.docs)==null?void 0:g.source}}};var B,f,y;i.parameters={...i.parameters,docs:{...(B=i.parameters)==null?void 0:B.docs,source:{originalSource:`{
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
}`,...(y=(f=i.parameters)==null?void 0:f.docs)==null?void 0:y.source}}};var K,x,j;s.parameters={...s.parameters,docs:{...(K=s.parameters)==null?void 0:K.docs,source:{originalSource:`{
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
}`,...(V=(S=l.parameters)==null?void 0:S.docs)==null?void 0:V.source}}};var G,z,I;c.parameters={...c.parameters,docs:{...(G=c.parameters)==null?void 0:G.docs,source:{originalSource:`{
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
}`,...(I=(z=c.parameters)==null?void 0:z.docs)==null?void 0:I.source}}};var w,P,_;u.parameters={...u.parameters,docs:{...(w=u.parameters)==null?void 0:w.docs,source:{originalSource:`{
  args: {
    children: "Klikk her",
    colorPalette: "inherit"
  },
  render: args => <VStack separator={<StackSeparator borderColor="gray.200" />}>
      <KvibButtonGroup orientation="vertical" variant="secondary" gap="4" size="sm" w="100%">
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
}`,...(_=(P=u.parameters)==null?void 0:P.docs)==null?void 0:_.source}}};const R=["Preview","ButtonColors","ButtonVariants","ButtonStates","ButtonIcons","ButtonSizes","ButtonGroup"],M=Object.freeze(Object.defineProperty({__proto__:null,ButtonColors:o,ButtonGroup:u,ButtonIcons:l,ButtonSizes:c,ButtonStates:s,ButtonVariants:i,Preview:a,__namedExportsOrder:R,default:N},Symbol.toStringTag,{value:"Module"}));export{M as B,a as P,o as a,i as b,l as c,u as d};
