import{j as e}from"./jsx-runtime-sfY7k0Xq.js";import{t as a,T as i}from"./toaster-DdDsyqwc.js";import{B as l}from"./Button-Dt7_xUtp.js";import{I as c}from"./Icon-CCIbyc_B.js";const m={title:"Komponenter/Toaster",parameters:{docs:{story:{inline:!0},canvas:{sourceState:"shown"}},a11y:{disable:!0}},argTypes:{description:{description:"Descriptive text on the toast",table:{type:{summary:"string"}},control:"text"},duration:{description:"Time for the toast to disappear, in milliseconds. Set to null for infinite",table:{type:{summary:"number"},defaultValue:{summary:"9000"}},control:{type:"number"}},icon:{description:"Custom icon that will be displayed",table:{type:{summary:"<Icon/>"},defaultValue:{summary:"none"}},control:"text"},id:{description:"Unique html id",table:{type:{summary:"string"}},control:"text"},closeable:{description:"if true, the toast will show a close button",table:{type:{summary:"boolean"},defaultValue:{summary:"false"}},control:"boolean"},onCloseComplete:{description:"Callback function to run side effects after the toast has closed.",table:{type:{summary:"() => void"}}},position:{description:"Placement of the toast",table:{type:{summary:"top | top-left | top-right | bottom | bottom-left | bottom-right"}},defaultValue:{summary:"bottom"},control:"select",options:["top","top-left","top-right","bottom","bottom-left","bottom-right"]},render:{description:"Render a component toast component. Any component passed will receive 2 props: id and onClose",table:{type:{summary:"React element"}}},type:{description:"The status (color) of the toast",table:{type:{summary:"info | warning | success | error | loading"}},defaultValue:{summary:"info"},control:"radio",options:["info","warning","success","error"]},title:{description:"The title of the toast",table:{type:{summary:"string"}},control:"text"}}},p=({...t})=>e.jsxs(e.Fragment,{children:[e.jsx(l,{colorPalette:t.btnClr,w:t.btnW,onClick:()=>a.create({icon:e.jsx(c,{icon:t.icon}),...t}),children:"Vis toast"}),e.jsx(i,{})]}),o={args:{title:"Skjema innsendt",description:"Takk for opplysningene",type:"success",duration:9e3,icon:"check"},render:t=>e.jsx(p,{...t})};var s,r,n;o.parameters={...o.parameters,docs:{...(s=o.parameters)==null?void 0:s.docs,source:{originalSource:`{
  args: {
    title: "Skjema innsendt",
    description: "Takk for opplysningene",
    type: "success",
    duration: 9000,
    icon: "check"
  },
  render: args => <ToastExample {...args} />
}`,...(n=(r=o.parameters)==null?void 0:r.docs)==null?void 0:n.source}}};const u=["Preview"],h=Object.freeze(Object.defineProperty({__proto__:null,Preview:o,__namedExportsOrder:u,default:m},Symbol.toStringTag,{value:"Module"}));export{o as P,h as T};