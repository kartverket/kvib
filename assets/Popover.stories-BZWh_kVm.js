import{b7 as r,j as e,b8 as l,v as p,b9 as i,ba as d,bb as P,bc as v,bd as c,T as m}from"./iframe-B_C8pV-B.js";const g={title:"Komponenter/Popover",component:r,parameters:{docs:{story:{inline:!0}}},argTypes:{colorPalette:{description:"The color palette of the component",table:{type:{summary:"'gray' | 'blue' | 'green' | 'red'"},defaultValue:{summary:"gray"}},control:"radio",options:["gray","blue","green","red"]},modal:{description:"Whether the popover should be modal. When set to `true`: - interaction with outside elements will be disabled - only popover content will be visible to screen readers - scrolling is blocked - focus is trapped within the popover",table:{type:{summary:"boolean"},defaultValue:{summary:"false"}},control:"boolean"}}};r.displayName="Popover";l.displayName="PopoverTrigger";i.displayName="PopoverContent";P.displayName="PopoverArrow";v.displayName="PopoverBody";c.displayName="PopoverTitle";d.displayName="PopoverCloseTrigger";p.displayName="Button";m.displayName="Text";const o={render:t=>e.jsxs(r,{...t,children:[e.jsx(l,{asChild:!0,children:e.jsx(p,{colorPalette:t.colorPalette,children:"Open Popover"})}),e.jsxs(i,{children:[e.jsx(d,{}),e.jsx(P,{}),e.jsxs(v,{children:[e.jsx(c,{fontWeight:"bold",children:"Popover title"}),e.jsx(m,{mt:"4px",children:"Popover content"})]})]})]})},u=["Preview"];var a,s,n;o.parameters={...o.parameters,docs:{...(a=o.parameters)==null?void 0:a.docs,source:{originalSource:`{
  render: (args: Props) => <Popover {...args}>
      <PopoverTrigger asChild>
        <Button colorPalette={args.colorPalette}>Open Popover</Button>
      </PopoverTrigger>
      <PopoverContent>
        <PopoverCloseTrigger />
        <PopoverArrow />
        <PopoverBody>
          <PopoverTitle fontWeight="bold">Popover title</PopoverTitle>
          <Text mt="4px">Popover content</Text>
        </PopoverBody>
      </PopoverContent>
    </Popover>
}`,...(n=(s=o.parameters)==null?void 0:s.docs)==null?void 0:n.source}}};const b=Object.freeze(Object.defineProperty({__proto__:null,Preview:o,__namedExportsOrder:u,default:g},Symbol.toStringTag,{value:"Module"}));export{b as P,o as a};
