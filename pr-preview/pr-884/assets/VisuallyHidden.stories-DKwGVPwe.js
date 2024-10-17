import{j as e}from"./extends-CwFRzn3r.js";import{V as i,a as y}from"./visually-hidden-Dw_aOpzd.js";import{F as H}from"./Form-control-Dfay2bjP.js";import{F as V}from"./Form-label-B-qAuQLc.js";import{B as h}from"./Button-C12g0nd7.js";import{I as j}from"./Icon-WZuZuvaV.js";import{B as f}from"./box-DeqT4ixr.js";import{H as I}from"./heading--NES2npU.js";const E={title:"Annet/Visually Hidden",component:i,parameters:{docs:{story:{inline:!0},canvas:{sourceState:"shown"}}}},k=({...r})=>e.jsx(e.Fragment,{children:e.jsxs(h,{children:[e.jsx(i,{...r,children:"Checkmark"}),e.jsx(j,{icon:"check"})]})}),s={args:{children:"VisuallyHidden"},render:r=>e.jsx(k,{...r})},S=({...r})=>e.jsxs(f,{children:[e.jsx(I,{children:"Tittel og beskrivelse"}),e.jsx(i,{...r,children:"Dette vil bli skjult"})]}),a={args:{children:"VisuallyHidden"},render:r=>e.jsx(S,{...r})},b=({...r})=>e.jsx(H,{children:e.jsxs(V,{children:["Visually Hidden Input",e.jsx(y,{placeholder:"Visually Hidden Input",...r,defaultChecked:!0,onChange:g=>{console.log(g.target.checked)}})]})}),n={args:{},render:r=>e.jsx(b,{...r})};var l,d,t;s.parameters={...s.parameters,docs:{...(l=s.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {
    children: "VisuallyHidden"
  },
  render: args => <VisuallyHiddenExample {...args} />
}`,...(t=(d=s.parameters)==null?void 0:d.docs)==null?void 0:t.source}}};var o,c,u;a.parameters={...a.parameters,docs:{...(o=a.parameters)==null?void 0:o.docs,source:{originalSource:`{
  args: {
    children: "VisuallyHidden"
  },
  render: args => <VisuallyHiddenText {...args} />
}`,...(u=(c=a.parameters)==null?void 0:c.docs)==null?void 0:u.source}}};var m,p,x;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {},
  render: args => <VisuallyHiddenInputExample {...args} />
}`,...(x=(p=n.parameters)==null?void 0:p.docs)==null?void 0:x.source}}};const v=["Preview","VisuallyHiddenTextExample","VisuallyHiddenInput"],z=Object.freeze(Object.defineProperty({__proto__:null,Preview:s,VisuallyHiddenInput:n,VisuallyHiddenTextExample:a,__namedExportsOrder:v,default:E},Symbol.toStringTag,{value:"Module"}));export{s as P,z as V};
