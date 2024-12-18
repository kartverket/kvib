import{j as e}from"./index-D6_wGsWO.js";import{b5 as a,b6 as i,t as p,b7 as l,b8 as v,b9 as c,ba as d,bb as P,T as m}from"./index-BX2HAd5b.js";const g={title:"Komponenter/Popover",component:a,parameters:{docs:{story:{inline:!0},canvas:{sourceState:"hidden"}}},argTypes:{colorPalette:{description:"The color palette of the component",table:{type:{summary:"'gray' | 'blue' | 'green' | 'red'"},defaultValue:{summary:"gray"}},control:"radio",options:["gray","blue","green","red"]}}},o={render:r=>e.jsxs(a,{...r,children:[e.jsx(i,{asChild:!0,children:e.jsx(p,{size:"sm",variant:"outline",colorPalette:r.colorPalette,children:"Vis popover"})}),e.jsxs(l,{children:[e.jsx(v,{size:"sm"}),e.jsx(c,{}),e.jsxs(d,{children:[e.jsx(P,{fontWeight:"bold",children:"Tittel"}),e.jsx(m,{my:"4",children:"Beskrivelse i popover som vises når man har trykket på triggeren."})]})]})]})};var t,s,n;o.parameters={...o.parameters,docs:{...(t=o.parameters)==null?void 0:t.docs,source:{originalSource:`{
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
}`,...(n=(s=o.parameters)==null?void 0:s.docs)==null?void 0:n.source}}};const u=["Preview"],b=Object.freeze(Object.defineProperty({__proto__:null,Preview:o,__namedExportsOrder:u,default:g},Symbol.toStringTag,{value:"Module"}));export{b as P,o as a};
