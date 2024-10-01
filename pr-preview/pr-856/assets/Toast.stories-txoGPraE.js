import{j as o}from"./extends-CwFRzn3r.js";import{u as x}from"./chunk-6RSEZNRH-Cg-8soWI.js";import{S as y}from"./chunk-ZHMYA64R-V_96TD_T.js";import{H as i}from"./chunk-3ASUQ6PA-DZH9lOZq.js";import{B as h}from"./chunk-PULVB27S-CgiffgmI.js";import{C as T}from"./chunk-FAWTVNS3-tKAZUTn2.js";import{B as j}from"./Button-C2ChFq4J.js";import{I as k}from"./Icon-tbSQqMaw.js";const S={title:"Tilbakemelding/Toast",parameters:{docs:{story:{inline:!0},canvas:{sourceState:"shown"}},a11y:{disable:!0}},argTypes:{addRole:{description:"",table:{type:{summary:"boolean"},defaultValue:{summary:"false"}},control:"boolean"},containerSyle:{description:"Style for the outer container",table:{type:{summary:"styleProps"}},control:"text"},description:{description:"Descriptive text on the toast",table:{type:{summary:"string"}},control:"text"},duration:{description:"Time for the toast to disappear, in milliseconds. Set to null for infinite",table:{type:{summary:"number"},defaultValue:{summary:9e3}},control:{type:"number"}},icon:{description:"Custom icon that will be displayed",table:{type:{summary:"<Icon/>"},defaultValue:{summary:"none"}},control:"text"},id:{description:"Unique html id",table:{type:{summary:"string"}},control:"text"},isClosable:{description:"if true, the toast will show a close button",table:{type:{summary:"boolean"},defaultValue:{summary:!1}},control:"boolean"},onClose:{description:"function to be triggered when the toast gets closed",table:{type:{summary:"() => void"}},control:""},onCloseComplete:{description:"Callback function to run side effects after the toast has closed.",table:{type:{summary:"() => void"}},control:""},position:{description:"Placement of the toast",table:{type:{summary:"top | top-left | top-right | bottom | bottom-left | bottom-right"},defaultValue:{summary:"bottom"}},control:"select",options:["top","top-left","top-right","bottom","bottom-left","bottom-right"]},render:{description:"Render a component toast component. Any component passed will receive 2 props: id and onClose",table:{type:{summary:"React element"}}},status:{description:"The status (color) of the toast",table:{type:{summary:"info | warning | success | error | loading"},defaultValue:{summary:"info"}},control:"select",options:["info","warning","success","error","loading"]},title:{description:"The title of the toast",table:{type:{summary:"string"}},control:"text"}}},e=({...t})=>{const f=x();return o.jsx(T,{children:o.jsx(j,{colorScheme:t.btnClr,w:t.btnW,onClick:()=>f({title:t.title,description:t.description,status:t.status,duration:t.duration,isClosable:t.isClosable,icon:o.jsx(k,{icon:t.icon}),position:t.position}),children:t.title})})},s={args:{title:"Skjema innsendt",description:"Takk for opplysningene",status:"success",duration:9e3,icon:"check"},render:t=>o.jsx(e,{...t})},n={args:{duration:4e3,btnW:"500px"},render:t=>o.jsxs(y,{children:[o.jsx(e,{...t,btnClr:"blue",title:"Info",description:"Hold inne ctrl for å zoome på kartet",status:"info"}),",",o.jsx(e,{...t,btnClr:"orange",title:"Warning",description:"Dette kan bare gjøres to ganger til i dag",status:"warning"}),",",o.jsx(e,{...t,btnClr:"green",title:"Success",description:"Informasjon oppdatert",status:"success"}),",",o.jsx(e,{...t,btnClr:"red",title:"Error",description:"Noe gikk galt",status:"error"}),",",o.jsx(e,{...t,btnClr:"blue",title:"Loading",description:"laster...",status:"loading"}),","]})},r={args:{duration:5e3,btnW:"100px"},render:t=>o.jsxs("div",{children:[o.jsxs(i,{children:[o.jsx(e,{...t,position:"top-left",title:"Top-left"}),",",o.jsx(e,{...t,position:"top",title:"Top"}),",",o.jsx(e,{...t,position:"top-right",title:"Top-right"}),","]}),o.jsx(h,{h:"10px"}),o.jsxs(i,{children:[o.jsx(e,{...t,position:"bottom-left",title:"Bottom-left"}),",",o.jsx(e,{...t,position:"bottom",title:"Bottom"}),",",o.jsx(e,{...t,position:"bottom-right",title:"Bottom-right"}),","]})]})};var a,l,p;s.parameters={...s.parameters,docs:{...(a=s.parameters)==null?void 0:a.docs,source:{originalSource:`{
  args: {
    title: "Skjema innsendt",
    description: "Takk for opplysningene",
    status: "success",
    duration: 9000,
    icon: "check"
  },
  render: args => <ToastExample {...args} />
}`,...(p=(l=s.parameters)==null?void 0:l.docs)==null?void 0:p.source}}};var c,m,d;n.parameters={...n.parameters,docs:{...(c=n.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    duration: 4000,
    btnW: "500px"
  },
  render: args => <Stack>
      <ToastExample {...args} btnClr="blue" title="Info" description="Hold inne ctrl for å zoome på kartet" status="info" />
      ,
      <ToastExample {...args} btnClr="orange" title="Warning" description="Dette kan bare gjøres to ganger til i dag" status="warning" />
      ,
      <ToastExample {...args} btnClr="green" title="Success" description="Informasjon oppdatert" status="success" />,
      <ToastExample {...args} btnClr="red" title="Error" description="Noe gikk galt" status="error" />,
      <ToastExample {...args} btnClr="blue" title="Loading" description="laster..." status="loading" />,
    </Stack>
}`,...(d=(m=n.parameters)==null?void 0:m.docs)==null?void 0:d.source}}};var u,b,g;r.parameters={...r.parameters,docs:{...(u=r.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    duration: 5000,
    btnW: "100px"
  },
  render: args => <div>
      <HStack>
        <ToastExample {...args} position="top-left" title="Top-left" />,
        <ToastExample {...args} position="top" title="Top" />,
        <ToastExample {...args} position="top-right" title="Top-right" />,
      </HStack>
      <Box h="10px" />
      <HStack>
        <ToastExample {...args} position="bottom-left" title="Bottom-left" />,
        <ToastExample {...args} position="bottom" title="Bottom" />,
        <ToastExample {...args} position="bottom-right" title="Bottom-right" />,
      </HStack>
    </div>
}`,...(g=(b=r.parameters)==null?void 0:b.docs)==null?void 0:g.source}}};const C=["Toast","ToastStatus","ToastPosition"],_=Object.freeze(Object.defineProperty({__proto__:null,Toast:s,ToastPosition:r,ToastStatus:n,__namedExportsOrder:C,default:S},Symbol.toStringTag,{value:"Module"}));export{_ as T,n as a,r as b,s as c};
