import{j as e}from"./extends-CwFRzn3r.js";import{r as d}from"./index-BwDkhjyp.js";import{P as a}from"./portal-BlJtTGys.js";import{B as n}from"./box-CwIaBbUI.js";const N={title:"Komponenter/Portal",component:a,parameters:{docs:{story:{inline:!0},canvas:{sourceState:"shown"}}},argTypes:{appendToParentPortal:{description:"If true, the portal will check if it is within a parent portal and append itself to the parent's portal node. This provides nesting for portals. If false, the portal will always append to `document.body` regardless of nesting. It is used to opt out of portal nesting.",table:{type:{summary:"boolean"},defaultValue:{summary:"true"}},control:"boolean"},containerRef:{description:"The ref to the component where the portal will be attached to.",table:{type:{summary:"RefObject<HTMLElement | null>"}},control:"object"}}},s={render:r=>e.jsxs(n,{bg:"green.500",color:"white",children:["Dette er en Box",e.jsx(o,{...r})]})},B=({...r})=>{const t=d.useRef(null);return e.jsxs(n,{bg:"green.500",color:"white",children:["Dette er en box",e.jsx(a,{...r,containerRef:t,children:"Portal: Denne teksten er portaled til den blå boksen!"}),e.jsx(n,{ref:t,bg:"blue.400",children:e.jsx("div",{children:"Container: Hei"})})]})},l={render:r=>e.jsx(B,{...r})},o=({...r})=>{const t=d.useRef(null);return e.jsxs("div",{children:[e.jsx(a,{...r,containerRef:t,children:e.jsxs(n,{bg:"green.500",color:"white",children:["Parent: Hei, velkommen",e.jsx(a,{...r,children:"Child: Jeg er festet til min parent portal"})]})}),e.jsx(n,{bg:"red.500",color:"white",ref:t})]})},i={render:r=>e.jsx(o,{...r})};function S({...r}){const t=d.useRef(null);return e.jsxs("div",{children:[e.jsx(a,{...r,containerRef:t,children:e.jsxs(n,{bg:"green.500",color:"white",children:["Parent: Hei, velkommen",e.jsx(a,{...r,appendToParentPortal:!1,children:"Child: Jeg går til document.body"})]})}),e.jsx("div",{style:{background:"red"},ref:t})]})}const c={render:r=>e.jsx(S,{...r})};var p,m,u;s.parameters={...s.parameters,docs:{...(p=s.parameters)==null?void 0:p.docs,source:{originalSource:`{
  render: args => <Box bg="green.500" color="white">
      Dette er en Box
      <PortalNestedExample {...args} />
    </Box>
}`,...(u=(m=s.parameters)==null?void 0:m.docs)==null?void 0:u.source}}};var g,x,f;l.parameters={...l.parameters,docs:{...(g=l.parameters)==null?void 0:g.docs,source:{originalSource:`{
  render: args => <PortalCustomExample {...args} />
}`,...(f=(x=l.parameters)==null?void 0:x.docs)==null?void 0:f.source}}};var h,P,b;o.parameters={...o.parameters,docs:{...(h=o.parameters)==null?void 0:h.docs,source:{originalSource:`({
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
}`,...(b=(P=o.parameters)==null?void 0:P.docs)==null?void 0:b.source}}};var j,v,w;i.parameters={...i.parameters,docs:{...(j=i.parameters)==null?void 0:j.docs,source:{originalSource:`{
  render: args => <PortalNestedExample {...args} />
}`,...(w=(v=i.parameters)==null?void 0:v.docs)==null?void 0:w.source}}};var y,E,R;c.parameters={...c.parameters,docs:{...(y=c.parameters)==null?void 0:y.docs,source:{originalSource:`{
  render: args => <PortalNotAppendedExample {...args} />
}`,...(R=(E=c.parameters)==null?void 0:E.docs)==null?void 0:R.source}}};const C=["Preview","PortalCustom","PortalNestedExample","PortalNested","PortalNotAppended"],K=Object.freeze(Object.defineProperty({__proto__:null,PortalCustom:l,PortalNested:i,PortalNestedExample:o,PortalNotAppended:c,Preview:s,__namedExportsOrder:C,default:N},Symbol.toStringTag,{value:"Module"}));export{K as P,s as a,l as b,i as c,c as d};
