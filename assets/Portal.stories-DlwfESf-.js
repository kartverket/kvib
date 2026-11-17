import{be as t,bf as c,j as e}from"./iframe-B_C8pV-B.js";const i={title:"Komponenter/Portal",component:t,parameters:{docs:{story:{inline:!0},canvas:{sourceState:"hidden"}}},argTypes:{container:{table:{type:{summary:"RefObject<HTMLElement | null>"}}},disabled:{table:{type:{summary:"boolean"}}}}};t.displayName="Portal";const r={render:l=>{const n=c.useRef(null);return e.jsxs(e.Fragment,{children:[e.jsx(t,{container:n,...l,children:e.jsx("div",{children:"Portal content"})}),e.jsx("div",{ref:n})]})}},d=["Preview"];var a,o,s;r.parameters={...r.parameters,docs:{...(a=r.parameters)==null?void 0:a.docs,source:{originalSource:`{
  render: (args: PortalProps) => {
    const containerRef = useRef<HTMLDivElement | null>(null);
    return <>
        <Portal container={containerRef} {...args}>
          <div>Portal content</div>
        </Portal>
        <div ref={containerRef} />
      </>;
  }
}`,...(s=(o=r.parameters)==null?void 0:o.docs)==null?void 0:s.source}}};const u=Object.freeze(Object.defineProperty({__proto__:null,Preview:r,__namedExportsOrder:d,default:i},Symbol.toStringTag,{value:"Module"}));export{u as P,r as a};
