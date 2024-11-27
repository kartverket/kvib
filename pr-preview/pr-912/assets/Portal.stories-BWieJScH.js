import{j as e}from"./jsx-runtime-sfY7k0Xq.js";import{r as f}from"./index-CcKhGcwW.js";import{P as u}from"./portal-DtBuU742.js";import{B as n}from"./box-C9nK2UO9.js";import{T as s}from"./text-DJW8V014.js";const h={title:"Komponenter/Portal",component:u,parameters:{docs:{story:{inline:!0},canvas:{sourceState:"shown"}}},argTypes:{appendToParentPortal:{description:"If true, the portal will check if it is within a parent portal and append itself to the parent's portal node. This provides nesting for portals. If false, the portal will always append to `document.body` regardless of nesting. It is used to opt out of portal nesting.",table:{type:{summary:"boolean"},defaultValue:{summary:"true"}},control:"boolean"},containerRef:{description:"The ref to the component where the portal will be attached to.",table:{type:{summary:"RefObject<HTMLElement | null>"}},control:"object"}}},t={render:o=>e.jsx(r,{...o})},r=({...o})=>{const a=f.useRef(null);return e.jsxs(e.Fragment,{children:[e.jsx(u,{...o,containerRef:a,asChild:!0,children:e.jsx(n,{bg:"green.500",color:"white",w:"12rem",h:"4rem",children:e.jsx(s,{children:"Parent: Hei, velkommen"})})}),e.jsx(n,{bg:"red.500",color:"white",ref:a,w:"12rem",h:"4rem",children:e.jsx(s,{children:"Hei, velkommen"})})]})};var l,i,m;t.parameters={...t.parameters,docs:{...(l=t.parameters)==null?void 0:l.docs,source:{originalSource:`{
  render: (args: PortalProps) => <PortalNestedExample {...args} />
}`,...(m=(i=t.parameters)==null?void 0:i.docs)==null?void 0:m.source}}};var c,p,d;r.parameters={...r.parameters,docs:{...(c=r.parameters)==null?void 0:c.docs,source:{originalSource:`({
  ...args
}) => {
  const ref = useRef(null);
  return <>
      <KvibPortal {...args} containerRef={ref} asChild>
        <Box bg="green.500" color="white" w="12rem" h="4rem">
          <Text>Parent: Hei, velkommen</Text>
        </Box>
      </KvibPortal>
      <Box bg="red.500" color="white" ref={ref} w="12rem" h="4rem">
        <Text>Hei, velkommen</Text>
      </Box>
    </>;
}`,...(d=(p=r.parameters)==null?void 0:p.docs)==null?void 0:d.source}}};const x=["Preview","PortalNestedExample"],T=Object.freeze(Object.defineProperty({__proto__:null,PortalNestedExample:r,Preview:t,__namedExportsOrder:x,default:h},Symbol.toStringTag,{value:"Module"}));export{T as P,t as a};
