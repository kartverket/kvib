import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{bi as T,bj as r,bk as a,bl as s,I as m,bm as c,bn as p,bo as d}from"./index-CZ3ox6l8.js";const u={title:"Komponenter/Timeline",component:T,parameters:{docs:{story:{inline:!0}},a11y:{config:{rules:[{id:"aria-valid-attr-value",reviewOnFail:!0}]}}},argTypes:{colorPalette:{description:"Color palette of the component",table:{type:{summary:"gray | green | blue"},defaultValue:{summary:"gray"}},options:["gray","green","blue"],control:{type:"radio"}},variant:{description:"Variant of the component",table:{type:{summary:"'subtle' | 'solid' | 'outline' | 'plain'"},defaultValue:{summary:"solid"}},options:["subtle","solid","outline","plain"],control:{type:"radio"}},size:{description:"Size of the component",table:{type:{summary:"sm | md | lg"},defaultValue:{summary:"md"}},options:["sm","md","lg"],control:{type:"radio"}}}};r.displayName="Timeline";a.displayName="TimelineItem";s.displayName="TimelineConnector";c.displayName="TimelineContent";d.displayName="TimelineDescription";p.displayName="TimelineTitle";m.displayName="Icon";const i={render:n=>e.jsx(r,{...n,children:e.jsxs(a,{children:[e.jsx(s,{p:"1em",children:e.jsx(m,{icon:"check",colorPalette:n.colorPalette})}),e.jsxs(c,{children:[e.jsx(p,{children:"Title"}),e.jsx(d,{children:"Description"})]})]})})};var t,o,l;i.parameters={...i.parameters,docs:{...(t=i.parameters)==null?void 0:t.docs,source:{originalSource:`{
  render: args => <Timeline {...args}>
      <TimelineItem>
        <TimelineConnector p="1em">
          <Icon icon="check" colorPalette={args.colorPalette} />
        </TimelineConnector>
        <TimelineContent>
          <TimelineTitle>Title</TimelineTitle>
          <TimelineDescription>Description</TimelineDescription>
        </TimelineContent>
      </TimelineItem>
    </Timeline>
}`,...(l=(o=i.parameters)==null?void 0:o.docs)==null?void 0:l.source}}};const y=["Preview"],f=Object.freeze(Object.defineProperty({__proto__:null,Preview:i,__namedExportsOrder:y,default:u},Symbol.toStringTag,{value:"Module"}));export{i as P,f as T};
