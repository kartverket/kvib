import{j as e}from"./jsx-runtime-CQsLhzk5.js";import{V as i}from"./visually-hidden-BTwES0D0.js";import{F as y}from"./field-B-_6-NQP.js";import{B as H}from"./Button-BbJokG5b.js";import{I as V}from"./Icon-CK1cb8lZ.js";import{B as h}from"./box-BV7_-RZx.js";import{H as j}from"./heading-CoXJvVOu.js";import{I as f}from"./Input-BFdZb76K.js";const I={title:"Komponenter/Visually Hidden",component:i,parameters:{docs:{story:{inline:!0},canvas:{sourceState:"shown"}}}},E=({...r})=>e.jsx(e.Fragment,{children:e.jsxs(H,{children:[e.jsx(i,{...r,children:"Checkmark"}),e.jsx(V,{icon:"check"})]})}),s={args:{children:"VisuallyHidden"},render:r=>e.jsx(E,{...r})},k=({...r})=>e.jsxs(h,{children:[e.jsx(j,{children:"Tittel og beskrivelse"}),e.jsx(i,{...r,children:"Dette vil bli skjult"})]}),a={args:{children:"VisuallyHidden"},render:r=>e.jsx(k,{...r})},S=({...r})=>e.jsx(y,{label:"Visually Hidden Input",children:e.jsx(f,{placeholder:"Visually Hidden Input",...r,defaultChecked:!0,onChange:g=>{console.log(g.target.checked)}})}),n={args:{},render:r=>e.jsx(S,{...r})};var l,t,d;s.parameters={...s.parameters,docs:{...(l=s.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {
    children: "VisuallyHidden"
  },
  render: args => <VisuallyHiddenExample {...args} />
}`,...(d=(t=s.parameters)==null?void 0:t.docs)==null?void 0:d.source}}};var o,c,u;a.parameters={...a.parameters,docs:{...(o=a.parameters)==null?void 0:o.docs,source:{originalSource:`{
  args: {
    children: "VisuallyHidden"
  },
  render: args => <VisuallyHiddenText {...args} />
}`,...(u=(c=a.parameters)==null?void 0:c.docs)==null?void 0:u.source}}};var m,p,x;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {},
  render: args => <VisuallyHiddenInputExample {...args} />
}`,...(x=(p=n.parameters)==null?void 0:p.docs)==null?void 0:x.source}}};const b=["Preview","VisuallyHiddenTextExample","VisuallyHiddenInput"],O=Object.freeze(Object.defineProperty({__proto__:null,Preview:s,VisuallyHiddenInput:n,VisuallyHiddenTextExample:a,__namedExportsOrder:b,default:I},Symbol.toStringTag,{value:"Module"}));export{s as P,O as V};
