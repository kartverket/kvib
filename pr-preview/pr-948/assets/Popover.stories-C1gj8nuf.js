import{j as e}from"./index-D6_wGsWO.js";import{bk as a,bl as i,t as l,bm as p,bn as d,bo as c,bp as v,bq as m,T as P}from"./index-BJ7FRa-X.js";const u={title:"Komponenter/Popover",component:a,parameters:{docs:{story:{inline:!0},canvas:{sourceState:"hidden"}}},argTypes:{colorPalette:{description:"The color palette of the component",table:{type:{summary:"'gray' | 'blue' | 'green' | 'red'"},defaultValue:{summary:"gray"}},control:"radio",options:["gray","blue","green","red"]},modal:{description:"Whether the popover should be modal. When set to `true`: - interaction with outside elements will be disabled - only popover content will be visible to screen readers - scrolling is blocked - focus is trapped within the popover",table:{type:{summary:"boolean"},defaultValue:{summary:"false"}},control:"boolean"}}},o={render:r=>e.jsxs(a,{...r,children:[e.jsx(i,{asChild:!0,children:e.jsx(l,{size:"sm",variant:"outline",colorPalette:r.colorPalette,children:"Vis popover"})}),e.jsxs(p,{children:[e.jsx(d,{size:"sm"}),e.jsx(c,{}),e.jsxs(v,{children:[e.jsx(m,{fontWeight:"bold",children:"Tittel"}),e.jsx(P,{my:"4",children:"Beskrivelse i popover som vises når man har trykket på triggeren."})]})]})]})};var t,s,n;o.parameters={...o.parameters,docs:{...(t=o.parameters)==null?void 0:t.docs,source:{originalSource:`{
  render: (args: PopoverProps) => <Popover {...args}>
      <PopoverTrigger asChild>
        <Button size="sm" variant="outline" colorPalette={args.colorPalette}>
          Vis popover
        </Button>
      </PopoverTrigger>
      <PopoverContent>
        <PopoverCloseTrigger size={"sm"} />
        <PopoverArrow />
        <PopoverBody>
          <PopoverTitle fontWeight="bold">Tittel</PopoverTitle>
          <Text my="4">Beskrivelse i popover som vises når man har trykket på triggeren.</Text>
        </PopoverBody>
      </PopoverContent>
    </Popover>
}`,...(n=(s=o.parameters)==null?void 0:s.docs)==null?void 0:n.source}}};const g=["Preview"],y=Object.freeze(Object.defineProperty({__proto__:null,Preview:o,__namedExportsOrder:g,default:u},Symbol.toStringTag,{value:"Module"}));export{y as P,o as a};
