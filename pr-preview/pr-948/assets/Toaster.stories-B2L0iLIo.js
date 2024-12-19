import{j as n}from"./index-D6_wGsWO.js";import{t as a,bY as i}from"./index-Ch1r4p4S.js";const l={title:"Komponenter/Toast",parameters:{docs:{story:{inline:!0},canvas:{sourceState:"shown"}},a11y:{disable:!0}},argTypes:{description:{description:"Descriptive text on the toast",table:{type:{summary:"string"}},control:"text"},duration:{description:"Time for the toast to disappear, in milliseconds. Set to null for infinite",table:{type:{summary:"number"},defaultValue:{summary:"9000"}},control:{type:"number"}},icon:{description:"Custom icon that will be displayed",table:{type:{summary:"<Icon/>"},defaultValue:{summary:"none"}},control:"text"},id:{description:"Unique html id",table:{type:{summary:"string"}},control:"text"},closeable:{description:"if true, the toast will show a close button",table:{type:{summary:"boolean"},defaultValue:{summary:"false"}},control:"boolean"},onCloseComplete:{description:"Callback function to run side effects after the toast has closed.",table:{type:{summary:"() => void"}}},position:{description:"Placement of the toast",table:{type:{summary:"top | top-left | top-right | bottom | bottom-left | bottom-right"}},defaultValue:{summary:"bottom"},control:"select",options:["top","top-left","top-right","bottom","bottom-left","bottom-right"]},render:{description:"Render a component toast component. Any component passed will receive 2 props: id and onClose",table:{type:{summary:"React element"}}},type:{description:"The status (color) of the toast",table:{type:{summary:"info | warning | success | error | loading"}},defaultValue:{summary:"info"},control:"radio",options:["info","warning","success","error"]},title:{description:"The title of the toast",table:{type:{summary:"string"}},control:"text"}}},c=({...t})=>n.jsx(a,{colorPalette:t.btnClr,w:t.btnW,onClick:()=>i.create({...t}),children:"Vis toast"}),e={args:{title:"Skjema innsendt",description:"Takk for opplysningene",type:"success",duration:9e3,icon:"check"},render:t=>n.jsx(c,{...t})};var o,s,r;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
  args: {
    title: "Skjema innsendt",
    description: "Takk for opplysningene",
    type: "success",
    duration: 9000,
    icon: "check"
  },
  render: args => <ToastExample {...args} />
}`,...(r=(s=e.parameters)==null?void 0:s.docs)==null?void 0:r.source}}};const m=["Preview"],d=Object.freeze(Object.defineProperty({__proto__:null,Preview:e,__namedExportsOrder:m,default:l},Symbol.toStringTag,{value:"Module"}));export{e as P,d as T};
