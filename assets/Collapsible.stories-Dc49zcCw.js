import{j as l}from"./jsx-runtime-D_zvdyIk.js";import{w as o,x as s,y as r}from"./index-Ck2gLP12.js";import{B as p}from"./index-DSremx2O.js";const d={title:"Komponenter/Collapsible",component:o,parameters:{docs:{story:{inline:!0}}},argTypes:{open:{description:"Whether the collapsible is open or not",table:{type:{summary:"boolean"},defaultValue:{summary:"false"}},control:{type:"boolean"}},onOpenChange:{description:"Function called when the popup is opened",table:{type:{summary:"(details: OpenChangeDetails) => void"}}},onExitComplete:{description:"Function called when the animation ends in the closed state.",table:{type:{summary:"() => void"}}},disabled:{description:"Whether the collapsible is disabled or not",table:{type:{summary:"boolean"},defaultValue:{summary:"false"}},control:{type:"boolean"}},defaultOpen:{description:"Whether the collapsible is open by default",table:{type:{summary:"boolean"},defaultValue:{summary:"false"}},control:{type:"boolean"}},unmountOnExit:{description:"Unmount the content when the collapsible is closed",table:{type:{summary:"boolean"},defaultValue:{summary:"false"}},control:{type:"boolean"}},lazyMount:{description:"Whether to enable lazy mounting",table:{type:{summary:"boolean"},defaultValue:{summary:"false"}},control:{type:"boolean"}}}};o.displayName="Collapsible";s.displayName="CollapsibleTrigger";r.displayName="CollapsibleContent";const e={render:i=>l.jsxs(o,{...i,children:[l.jsx(s,{py:"4px",w:"100%",children:"Open Collapsible"}),l.jsx(r,{children:l.jsx(p,{padding:"4",borderWidth:"1px",children:"Content that is shown when the collapsible is open."})})]})};var t,a,n;e.parameters={...e.parameters,docs:{...(t=e.parameters)==null?void 0:t.docs,source:{originalSource:`{
  render: args => <Collapsible {...args}>
      <CollapsibleTrigger py={"4px"} w="100%">
        Open Collapsible
      </CollapsibleTrigger>
      <CollapsibleContent>
        <Box padding="4" borderWidth="1px">
          Content that is shown when the collapsible is open.
        </Box>
      </CollapsibleContent>
    </Collapsible>
}`,...(n=(a=e.parameters)==null?void 0:a.docs)==null?void 0:n.source}}};const m=["Preview"],y=Object.freeze(Object.defineProperty({__proto__:null,Preview:e,__namedExportsOrder:m,default:d},Symbol.toStringTag,{value:"Module"}));export{y as C,e as P};
