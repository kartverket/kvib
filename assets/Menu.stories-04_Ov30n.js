import{j as e}from"./index-D6_wGsWO.js";import{aT as s,a as u,aU as i,t as m,aV as c,aW as t}from"./index-BEiQEnoY.js";const d={title:"Komponenter/Menu",component:s,parameters:{docs:{story:{inline:!0},canvas:{sourceState:"hidden"}}},argTypes:{closeOnSelect:{description:"If true, the menu will close when a menu item is clicked",table:{type:{summary:"boolean"},defaultValue:{summary:"true"}},control:"boolean"},defaultOpen:{table:{type:{summary:"boolean"}},control:"boolean"},id:{table:{type:{summary:"string"}},control:"text"},lazyMount:{description:"Performance 🚀: If true, the MenuItem rendering will be deferred until the menu is open.",table:{type:{summary:"boolean"},defaultValue:{summary:"true"}},control:"boolean"},open:{table:{type:{summary:"boolean"}},control:"boolean"},onExitComplete:{description:"Function called when the animation ends in the closed state",table:{type:{summary:"() => void"}},control:"text"},onOpenChange:{description:"Function called when the menu opens or closes.",table:{type:{summary:"() => void"}},control:"text"},positioning:{description:"The placement of the popper relative to its reference.",table:{type:{summary:"PositioningOptions"},defaultValue:{summary:"bottom"}},control:"text"}}},n={render:o=>e.jsx(u,{children:e.jsxs(s,{...o,children:[e.jsx(i,{asChild:!0,children:e.jsx(m,{variant:"outline",size:"sm",colorPalette:o.colorPalette,children:"Åpne meny"})}),e.jsxs(c,{children:[e.jsx(t,{value:"new-txt-a",children:"Nedlast"}),e.jsx(t,{value:"new-txt-b",children:"Lag en kopi"}),e.jsx(t,{value:"new-txt-c",children:"Marker som utkast"}),e.jsx(t,{value:"new-txt-d",children:"Slett"}),e.jsx(t,{value:"new-txt-e",children:"Bli med på en workshop"})]})]})})};var r,a,l;n.parameters={...n.parameters,docs:{...(r=n.parameters)==null?void 0:r.docs,source:{originalSource:`{
  render: (args: Props) => <Center>
      <KvibMenu.Root {...args}>
        <MenuTrigger asChild>
          <Button variant="outline" size="sm" colorPalette={args.colorPalette}>
            Åpne meny
          </Button>
        </MenuTrigger>
        <MenuContent>
          <MenuItem value="new-txt-a">Nedlast</MenuItem>
          <MenuItem value="new-txt-b">Lag en kopi</MenuItem>
          <MenuItem value="new-txt-c">Marker som utkast</MenuItem>
          <MenuItem value="new-txt-d">Slett</MenuItem>
          <MenuItem value="new-txt-e">Bli med på en workshop</MenuItem>
        </MenuContent>
      </KvibMenu.Root>
    </Center>
}`,...(l=(a=n.parameters)==null?void 0:a.docs)==null?void 0:l.source}}};const p=["Preview"],h=Object.freeze(Object.defineProperty({__proto__:null,Preview:n,__namedExportsOrder:p,default:d},Symbol.toStringTag,{value:"Module"}));export{h as M,n as P};
