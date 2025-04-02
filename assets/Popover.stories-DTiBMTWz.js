import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{az as r,aA as p,B as l,aB as i,aC as d,aD as P,aE as v,aF as c}from"./index-CrtPA40L.js";import{T as m}from"./text-qGkYlHXO.js";const g={title:"Komponenter/Popover",component:r,parameters:{docs:{story:{inline:!0}}},argTypes:{colorPalette:{description:"The color palette of the component",table:{type:{summary:"'gray' | 'blue' | 'green' | 'red'"},defaultValue:{summary:"gray"}},control:"radio",options:["gray","blue","green","red"]},modal:{description:"Whether the popover should be modal. When set to `true`: - interaction with outside elements will be disabled - only popover content will be visible to screen readers - scrolling is blocked - focus is trapped within the popover",table:{type:{summary:"boolean"},defaultValue:{summary:"false"}},control:"boolean"}}};r.displayName="Popover";p.displayName="PopoverTrigger";i.displayName="PopoverContent";P.displayName="PopoverArrow";v.displayName="PopoverBody";c.displayName="PopoverTitle";d.displayName="PopoverCloseTrigger";l.displayName="Button";m.displayName="Text";const o={render:t=>e.jsxs(r,{...t,children:[e.jsx(p,{asChild:!0,children:e.jsx(l,{colorPalette:t.colorPalette,children:"Open Popover"})}),e.jsxs(i,{children:[e.jsx(d,{}),e.jsx(P,{}),e.jsxs(v,{children:[e.jsx(c,{fontWeight:"bold",children:"Popover title"}),e.jsx(m,{mt:"4px",children:"Popover content"})]})]})]})};var a,s,n;o.parameters={...o.parameters,docs:{...(a=o.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
}`,...(n=(s=o.parameters)==null?void 0:s.docs)==null?void 0:n.source}}};const u=["Preview"],T=Object.freeze(Object.defineProperty({__proto__:null,Preview:o,__namedExportsOrder:u,default:g},Symbol.toStringTag,{value:"Module"}));export{T as P,o as a};
