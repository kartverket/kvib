import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{r as i}from"./index-Bj2TM2QZ.js";import{P as t}from"./portal-EfEQ2Dgj.js";const c={title:"Komponenter/Portal",component:t,parameters:{docs:{story:{inline:!0},canvas:{sourceState:"hidden"}}},argTypes:{container:{table:{type:{summary:"RefObject<HTMLElement | null>"}}},disabled:{table:{type:{summary:"boolean"}}}}};t.displayName="Portal";const r={render:l=>{const n=i.useRef(null);return e.jsxs(e.Fragment,{children:[e.jsx(t,{container:n,...l,children:e.jsx("div",{children:"Portal content"})}),e.jsx("div",{ref:n})]})}};var o,a,s;r.parameters={...r.parameters,docs:{...(o=r.parameters)==null?void 0:o.docs,source:{originalSource:`{
  render: (args: PortalProps) => {
    const containerRef = useRef<HTMLDivElement | null>(null);
    return <>
        <Portal container={containerRef} {...args}>
          <div>Portal content</div>
        </Portal>
        <div ref={containerRef} />
      </>;
  }
}`,...(s=(a=r.parameters)==null?void 0:a.docs)==null?void 0:s.source}}};const m=["Preview"],f=Object.freeze(Object.defineProperty({__proto__:null,Preview:r,__namedExportsOrder:m,default:c},Symbol.toStringTag,{value:"Module"}));export{f as P,r as a};
