import{j as o}from"./jsx-runtime-sfY7k0Xq.js";import{P as c}from"./portal-B_Lxu86P.js";const d={title:"Komponenter/Portal",component:c,parameters:{docs:{story:{inline:!0},canvas:{sourceState:"shown"}}},argTypes:{appendToParentPortal:{description:"If true, the portal will check if it is within a parent portal and append itself to the parent's portal node. This provides nesting for portals. If false, the portal will always append to `document.body` regardless of nesting. It is used to opt out of portal nesting.",table:{type:{summary:"boolean"},defaultValue:{summary:"true"}},control:"boolean"},containerRef:{description:"The ref to the component where the portal will be attached to.",table:{type:{summary:"RefObject<HTMLElement | null>"}},control:"object"}}},r={render:t=>o.jsx(e,{...t})},e=({...t})=>o.jsx(c,{...t,children:o.jsx("div",{children:"Portal-innhold"})});var a,n,s;r.parameters={...r.parameters,docs:{...(a=r.parameters)==null?void 0:a.docs,source:{originalSource:`{
  render: (args: PortalProps) => <PortalExample {...args} />
}`,...(s=(n=r.parameters)==null?void 0:n.docs)==null?void 0:s.source}}};var l,p,i;e.parameters={...e.parameters,docs:{...(l=e.parameters)==null?void 0:l.docs,source:{originalSource:`({
  ...args
}) => {
  return <Portal {...args}>
      <div>Portal-innhold</div>
    </Portal>;
}`,...(i=(p=e.parameters)==null?void 0:p.docs)==null?void 0:i.source}}};const m=["Preview","PortalExample"],f=Object.freeze(Object.defineProperty({__proto__:null,PortalExample:e,Preview:r,__namedExportsOrder:m,default:d},Symbol.toStringTag,{value:"Module"}));export{f as P,r as a};
