import{j as e}from"./index-D6_wGsWO.js";import{x as l,t as y,y as H,B as V,z as h,D as j,E}from"./index-BJ7FRa-X.js";const I={title:"Komponenter/Visually Hidden",component:l,parameters:{docs:{story:{inline:!0},canvas:{sourceState:"shown"}}}},k=({...r})=>e.jsx(e.Fragment,{children:e.jsxs(y,{children:[e.jsx(l,{...r,children:"Checkmark"}),e.jsx(H,{icon:"check"})]})}),s={args:{children:"VisuallyHidden"},render:r=>e.jsx(k,{...r})},S=({...r})=>e.jsxs(V,{children:[e.jsx(h,{children:"Tittel og beskrivelse"}),e.jsx(l,{...r,children:"Dette vil bli skjult"})]}),a={args:{children:"VisuallyHidden"},render:r=>e.jsx(S,{...r})},b=({...r})=>e.jsx(j,{label:"Visually Hidden Input",children:e.jsx(E,{placeholder:"Visually Hidden Input",...r,defaultChecked:!0,onChange:g=>{console.log(g.target.checked)}})}),n={args:{},render:r=>e.jsx(b,{...r})};var d,i,t;s.parameters={...s.parameters,docs:{...(d=s.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
}`,...(x=(m=n.parameters)==null?void 0:m.docs)==null?void 0:x.source}}};const f=["Preview","VisuallyHiddenTextExample","VisuallyHiddenInput"],_=Object.freeze(Object.defineProperty({__proto__:null,Preview:s,VisuallyHiddenInput:n,VisuallyHiddenTextExample:a,__namedExportsOrder:f,default:I},Symbol.toStringTag,{value:"Module"}));export{s as P,_ as V};
