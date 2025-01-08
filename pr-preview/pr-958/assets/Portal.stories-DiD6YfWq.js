import{j as e}from"./index-Bqoz-m_F.js";import{b2 as s}from"./index-DuafSpvy.js";import{r as l}from"./index-C7I6S4tq.js";const i={title:"Komponenter/Portal",component:s,parameters:{docs:{story:{inline:!0},canvas:{sourceState:"hidden"}}},argTypes:{appendToParentPortal:{description:"If true, the portal will check if it is within a parent portal and append itself to the parent's portal node. This provides nesting for portals. If false, the portal will always append to `document.body` regardless of nesting. It is used to opt out of portal nesting.",table:{type:{summary:"boolean"},defaultValue:{summary:"true"}},control:"boolean"},containerRef:{description:"The ref to the component where the portal will be attached to.",table:{type:{summary:"RefObject<HTMLElement | null>"}},control:"object"}}},t={render:r=>e.jsx(p,{...r})},p=()=>{const r=l.useRef(null);return e.jsxs(e.Fragment,{children:[e.jsx(s,{container:r,children:e.jsx("div",{children:"Portal content"})}),e.jsx("div",{ref:r})]})};var o,a,n;t.parameters={...t.parameters,docs:{...(o=t.parameters)==null?void 0:o.docs,source:{originalSource:`{
  render: (args: PortalProps) => <Demo {...args} />
}`,...(n=(a=t.parameters)==null?void 0:a.docs)==null?void 0:n.source}}};const c=["Preview"],f=Object.freeze(Object.defineProperty({__proto__:null,Preview:t,__namedExportsOrder:c,default:i},Symbol.toStringTag,{value:"Module"}));export{f as P,t as a};
