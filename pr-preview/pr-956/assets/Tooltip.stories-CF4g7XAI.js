import{j as t}from"./index-D6_wGsWO.js";import{b8 as n,t as s}from"./index-DlM2nGIA.js";const i={title:"Komponenter/Tooltip",component:n,parameters:{docs:{story:{inline:!0},canvas:{sourceState:"shown"}}},argTypes:{"aria-label":{description:"The accessible, human friendly label to use for screen readers. If passed, tooltip will show the content label but expose only `aria-label` to assistive technologies",table:{type:{summary:"string"}},control:"text"},closeDelay:{description:"Delay (in ms) before hiding the tooltip",table:{type:{summary:"number"},defaultValue:{summary:"0ms"}},control:"number"},closeOnClick:{description:"If true, the tooltip will hide on click",table:{type:{summary:"boolean"},defaultValue:{summary:"true"}},control:"boolean"},closeOnPointerDown:{description:"If true, the tooltip will hide while the pointer is down",table:{type:{summary:"boolean"},defaultValue:{summary:"true"}},control:"boolean"},closeOnScroll:{table:{type:{summary:"boolean"},defaultValue:{summary:"false"}},control:"boolean"},defaultOpen:{description:"If true, the tooltip will be initially shown",table:{type:{summary:"boolean"},defaultValue:{summary:"false"}},control:"boolean"},disabled:{table:{type:{summary:"boolean"},defaultValue:{summary:"false"}},control:"boolean"},open:{description:"If true, the tooltip will be shown (in controlled mode)",table:{type:{summary:"boolean"},defaultValue:{summary:"false"}},control:"boolean"},onExitComplete:{description:"Callback to run when the tooltip hides",table:{type:{summary:"() => void"}},control:"text"},onOpenChange:{description:"Callback to run when the tooltip shows or hides",table:{type:{summary:"() => void"}},control:"text"},openDelay:{description:"Delay (in ms) before showing the tooltip",table:{type:{summary:"number"},defaultValue:{summary:"0ms"}},control:"number"}}},e={render:o=>t.jsx(n,{...o,content:"Et tooltip!","aria-label":"Et tooltip",children:t.jsx(s,{variant:"outline",size:"sm",colorPalette:o.colorPalette,children:"Hover me"})})};var l,a,r;e.parameters={...e.parameters,docs:{...(l=e.parameters)==null?void 0:l.docs,source:{originalSource:`{
  render: (args: Props) => <KvibTooltip {...args} content="Et tooltip!" aria-label="Et tooltip">
      <Button variant="outline" size="sm" colorPalette={args.colorPalette}>
        Hover me
      </Button>
    </KvibTooltip>
}`,...(r=(a=e.parameters)==null?void 0:a.docs)==null?void 0:r.source}}};const m=["Preview"],c=Object.freeze(Object.defineProperty({__proto__:null,Preview:e,__namedExportsOrder:m,default:i},Symbol.toStringTag,{value:"Module"}));export{e as P,c as T};
