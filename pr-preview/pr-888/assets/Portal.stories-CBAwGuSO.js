import{j as e}from"./extends-CwFRzn3r.js";import{r as c}from"./index-BwDkhjyp.js";import{P as o}from"./portal-DTuMj-Dh.js";import{B as a}from"./box-DeqT4ixr.js";const k={title:"Annet/Portal",component:o,parameters:{docs:{story:{inline:!0},canvas:{sourceState:"shown"}}},argTypes:{appendToParentPortal:{description:"If true, the portal will check if it is within a parent portal and append itself to the parent's portal node. This provides nesting for portals. If false, the portal will always append to `document.body` regardless of nesting. It is used to opt out of portal nesting.",table:{type:{summary:"boolean"},defaultValue:{summary:!0}},control:"boolean"},containerRef:{description:"The ref to the component where the portal will be attached to.",table:{type:{summary:"RefObject<HTMLElement | null>"}},control:"object"}}},s={render:r=>e.jsxs(a,{bg:"green.500",color:"white",children:["Dette er en Box",e.jsx(o,{...r,children:"Denne teksten er portaled til enden av document.body!"})]})},B=({...r})=>{const t=c.useRef(null);return e.jsxs(a,{bg:"green.500",color:"white",children:["Dette er en box",e.jsx(o,{...r,containerRef:t,children:"Portal: Denne teksten er portaled til den blå boksen!"}),e.jsx(a,{ref:t,bg:"blue.400",children:e.jsx("div",{children:"Container: Hei"})})]})},l={render:r=>e.jsx(B,{...r})},n=({...r})=>{const t=c.useRef(null);return e.jsxs("div",{children:[e.jsx(o,{...r,containerRef:t,children:e.jsxs(a,{bg:"green.500",color:"white",children:["Parent: Hei, velkommen",e.jsx(o,{...r,children:"Child: Jeg er festet til min parent portal"})]})}),e.jsx(a,{bg:"red.500",color:"white",ref:t})]})},i={render:r=>e.jsx(n,{...r})};function N({...r}){const t=c.useRef(null);return e.jsxs("div",{children:[e.jsx(o,{...r,containerRef:t,children:e.jsxs(a,{bg:"green.500",color:"white",children:["Parent: Hei, velkommen",e.jsx(o,{...r,appendToParentPortal:!1,children:"Child: Jeg går til document.body"})]})}),e.jsx("div",{style:{background:"red"},ref:t})]})}const d={render:r=>e.jsx(N,{...r})};var p,m,u;s.parameters={...s.parameters,docs:{...(p=s.parameters)==null?void 0:p.docs,source:{originalSource:`{
  render: args => <Box bg="green.500" color="white">
      Dette er en Box
      <KvibPortal {...args}>Denne teksten er portaled til enden av document.body!</KvibPortal>
    </Box>
}`,...(u=(m=s.parameters)==null?void 0:m.docs)==null?void 0:u.source}}};var g,x,f;l.parameters={...l.parameters,docs:{...(g=l.parameters)==null?void 0:g.docs,source:{originalSource:`{
  render: args => <PortalCustomExample {...args} />
}`,...(f=(x=l.parameters)==null?void 0:x.docs)==null?void 0:f.source}}};var h,b,P;n.parameters={...n.parameters,docs:{...(h=n.parameters)==null?void 0:h.docs,source:{originalSource:`({
  ...args
}) => {
  const ref = useRef(null);
  return <div>
      <KvibPortal {...args} containerRef={ref}>
        <Box bg="green.500" color="white">
          Parent: Hei, velkommen
          <KvibPortal {...args}>Child: Jeg er festet til min parent portal</KvibPortal>
        </Box>
      </KvibPortal>
      <Box bg="red.500" color="white" ref={ref} />
    </div>;
}`,...(P=(b=n.parameters)==null?void 0:b.docs)==null?void 0:P.source}}};var j,v,w;i.parameters={...i.parameters,docs:{...(j=i.parameters)==null?void 0:j.docs,source:{originalSource:`{
  render: args => <PortalNestedExample {...args} />
}`,...(w=(v=i.parameters)==null?void 0:v.docs)==null?void 0:w.source}}};var y,E,R;d.parameters={...d.parameters,docs:{...(y=d.parameters)==null?void 0:y.docs,source:{originalSource:`{
  render: args => <PortalNotAppendedExample {...args} />
}`,...(R=(E=d.parameters)==null?void 0:E.docs)==null?void 0:R.source}}};const S=["Preview","PortalCustom","PortalNestedExample","PortalNested","PortalNotAppended"],_=Object.freeze(Object.defineProperty({__proto__:null,PortalCustom:l,PortalNested:i,PortalNestedExample:n,PortalNotAppended:d,Preview:s,__namedExportsOrder:S,default:k},Symbol.toStringTag,{value:"Module"}));export{_ as P,s as a,l as b,i as c,d,n as e};
