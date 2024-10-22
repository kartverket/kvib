import{j as e}from"./extends-CwFRzn3r.js";import{v as x}from"./visually-hidden.style-BUiBK_kv.js";import{c as H}from"./factory-C6UFhaBW.js";import{F as h}from"./Form-control-Dfay2bjP.js";import{F as j}from"./Form-label-B-qAuQLc.js";import{B as f}from"./Button-DiIcCLTC.js";import{I}from"./Icon-Ct7uaolX.js";import{B as S}from"./box-DeqT4ixr.js";import{H as b}from"./heading--NES2npU.js";const l=H("span",{baseStyle:x});l.displayName="VisuallyHidden";const g=H("input",{baseStyle:x});g.displayName="VisuallyHiddenInput";const k={title:"Annet/Visually Hidden",component:l,parameters:{docs:{story:{inline:!0},canvas:{sourceState:"shown"}}}},v=({...r})=>e.jsx(e.Fragment,{children:e.jsxs(f,{children:[e.jsx(l,{...r,children:"Checkmark"}),e.jsx(I,{icon:"check"})]})}),s={args:{children:"VisuallyHidden"},render:r=>e.jsx(v,{...r})},E=({...r})=>e.jsxs(S,{children:[e.jsx(b,{children:"Tittel og beskrivelse"}),e.jsx(l,{...r,children:"Dette vil bli skjult"})]}),a={args:{children:"VisuallyHidden"},render:r=>e.jsx(E,{...r})},T=({...r})=>e.jsx(h,{children:e.jsxs(j,{children:["Visually Hidden Input",e.jsx(g,{placeholder:"Visually Hidden Input",...r,defaultChecked:!0,onChange:V=>{console.log(V.target.checked)}})]})}),n={args:{},render:r=>e.jsx(T,{...r})};var i,d,t;s.parameters={...s.parameters,docs:{...(i=s.parameters)==null?void 0:i.docs,source:{originalSource:`{
  args: {
    children: "VisuallyHidden"
  },
  render: args => <VisuallyHiddenExample {...args} />
}`,...(t=(d=s.parameters)==null?void 0:d.docs)==null?void 0:t.source}}};var o,c,u;a.parameters={...a.parameters,docs:{...(o=a.parameters)==null?void 0:o.docs,source:{originalSource:`{
  args: {
    children: "VisuallyHidden"
  },
  render: args => <VisuallyHiddenText {...args} />
}`,...(u=(c=a.parameters)==null?void 0:c.docs)==null?void 0:u.source}}};var m,p,y;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {},
  render: args => <VisuallyHiddenInputExample {...args} />
}`,...(y=(p=n.parameters)==null?void 0:p.docs)==null?void 0:y.source}}};const _=["Preview","VisuallyHiddenTextExample","VisuallyHiddenInput"],D=Object.freeze(Object.defineProperty({__proto__:null,Preview:s,VisuallyHiddenInput:n,VisuallyHiddenTextExample:a,__namedExportsOrder:_,default:k},Symbol.toStringTag,{value:"Module"}));export{s as P,D as V};
