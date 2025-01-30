import{j as e}from"./jsx-runtime-DQFEoQHt.js";import{an as o,ao as i,ap as u,aq as n,B as m}from"./index-BkLpvq3U.js";const p={title:"Komponenter/Menu",component:o,parameters:{docs:{story:{inline:!0}}},argTypes:{closeOnSelect:{description:"If true, the menu will close when a menu item is clicked",table:{type:{summary:"boolean"},defaultValue:{summary:"true"}},control:"boolean"},defaultOpen:{table:{type:{summary:"boolean"}},control:"boolean"},id:{table:{type:{summary:"string"}},control:"text"},lazyMount:{description:"Performance 🚀: If true, the MenuItem rendering will be deferred until the menu is open.",table:{type:{summary:"boolean"},defaultValue:{summary:"true"}},control:"boolean"},open:{table:{type:{summary:"boolean"}},control:"boolean"},onExitComplete:{description:"Function called when the animation ends in the closed state",table:{type:{summary:"() => void"}},control:"text"},onOpenChange:{description:"Function called when the menu opens or closes.",table:{type:{summary:"() => void"}},control:"text"},positioning:{description:"The placement of the popper relative to its reference.",table:{type:{summary:"PositioningOptions"},defaultValue:{summary:"bottom"}},control:"text"}}};o.displayName="Menu";i.displayName="MenuTrigger";u.displayName="MenuContent";n.displayName="MenuItem";m.displayName="Button";const t={render:r=>e.jsxs(o,{...r,children:[e.jsx(i,{asChild:!0,children:e.jsx(m,{colorPalette:r.colorPalette,children:"Open Menu"})}),e.jsxs(u,{children:[e.jsx(n,{value:"op1",children:"Option 1"}),e.jsx(n,{value:"op2",children:"Option 2"}),e.jsx(n,{value:"op3",children:"Option 3"})]})]})};var a,l,s;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
  render: (args: Props) => <KvibMenu.Root {...args}>
      <MenuTrigger asChild>
        <Button colorPalette={args.colorPalette}>Open Menu</Button>
      </MenuTrigger>
      <MenuContent>
        <MenuItem value="op1">Option 1</MenuItem>
        <MenuItem value="op2">Option 2</MenuItem>
        <MenuItem value="op3">Option 3</MenuItem>
      </MenuContent>
    </KvibMenu.Root>
}`,...(s=(l=t.parameters)==null?void 0:l.docs)==null?void 0:s.source}}};const c=["Preview"],M=Object.freeze(Object.defineProperty({__proto__:null,Preview:t,__namedExportsOrder:c,default:p},Symbol.toStringTag,{value:"Module"}));export{M,t as P};
