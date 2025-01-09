import{j as e}from"./jsx-runtime-DgHZ7iq2.js";import{by as l,B as y,am as H,a9 as V,a6 as h}from"./index-CRrqj8Jn.js";import{B as j}from"./box-Bmov6X-Z.js";import{H as f}from"./heading-c0bs7S-P.js";const E={title:"Komponenter/Visually Hidden",component:l,parameters:{docs:{story:{inline:!0},canvas:{sourceState:"shown"}}}},I=({...r})=>e.jsx(e.Fragment,{children:e.jsxs(y,{children:[e.jsx(l,{...r,children:"Checkmark"}),e.jsx(H,{icon:"check"})]})}),s={args:{children:"VisuallyHidden"},render:r=>e.jsx(I,{...r})},b=({...r})=>e.jsxs(j,{children:[e.jsx(f,{children:"Tittel og beskrivelse"}),e.jsx(l,{...r,children:"Dette vil bli skjult"})]}),a={args:{children:"VisuallyHidden"},render:r=>e.jsx(b,{...r})},k=({...r})=>e.jsx(V,{label:"Visually Hidden Input",children:e.jsx(h,{placeholder:"Visually Hidden Input",...r,defaultChecked:!0,onChange:g=>{console.log(g.target.checked)}})}),n={args:{},render:r=>e.jsx(k,{...r})};var d,i,t;s.parameters={...s.parameters,docs:{...(d=s.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    children: "VisuallyHidden"
  },
  render: args => <VisuallyHiddenExample {...args} />
}`,...(t=(i=s.parameters)==null?void 0:i.docs)==null?void 0:t.source}}};var o,c,u;a.parameters={...a.parameters,docs:{...(o=a.parameters)==null?void 0:o.docs,source:{originalSource:`{
  args: {
    children: "VisuallyHidden"
  },
  render: args => <VisuallyHiddenText {...args} />
}`,...(u=(c=a.parameters)==null?void 0:c.docs)==null?void 0:u.source}}};var p,m,x;n.parameters={...n.parameters,docs:{...(p=n.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {},
  render: args => <VisuallyHiddenInputExample {...args} />
}`,...(x=(m=n.parameters)==null?void 0:m.docs)==null?void 0:x.source}}};const S=["Preview","VisuallyHiddenTextExample","VisuallyHiddenInput"],P=Object.freeze(Object.defineProperty({__proto__:null,Preview:s,VisuallyHiddenInput:n,VisuallyHiddenTextExample:a,__namedExportsOrder:S,default:E},Symbol.toStringTag,{value:"Module"}));export{s as P,P as V};
