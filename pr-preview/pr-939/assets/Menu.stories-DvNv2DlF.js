import{j as e}from"./index-D6_wGsWO.js";import{aW as s,a as u,aX as i,t as m,aY as p,aZ as t}from"./index-DX2yoEI4.js";const c={title:"Komponenter/Menu",component:s,parameters:{docs:{story:{inline:!0},canvas:{sourceState:"shown"}}},argTypes:{arrowPadding:{description:"The padding required to prevent the arrow from reaching the very edge of the popper.",table:{type:{summary:"number"},defaultValue:{summary:"8"}},control:"number"},autoSelect:{description:"If true, the first enabled menu item will receive focus and be selected when the menu opens.",table:{type:{summary:"boolean"},defaultValue:{summary:"true"}},control:"boolean"},boundary:{description:"The boundary area for the popper. Used within the preventOverflow modifier",table:{type:{summary:'"clippingParents" | "scrollParent" | HTMLElement'},defaultValue:{summary:'"clippingParents"'}},control:{type:"text"}},closeOnBlur:{description:"If true, the menu will close when you click outside the menu list",table:{type:{summary:"boolean"},defaultValue:{summary:"true"}},control:"boolean"},closeOnSelect:{description:"If true, the menu will close when a menu item is clicked",table:{type:{summary:"boolean"},defaultValue:{summary:"true"}},control:"boolean"},computePositionOnMount:{table:{type:{summary:"boolean"}},control:"boolean"},defaultIsOpen:{table:{type:{summary:"boolean"}},control:"boolean"},direction:{table:{type:{summary:"ltr | rtl"}},options:["lrt","rtl"],control:"radio"},eventListeners:{description:"If provided, determines whether the popper will reposition itself on scroll and resize of the window.",table:{type:{summary:"type ONLY_FOR_FORMAT = | boolean | { scroll?: boolean | undefined resize?: boolean | undefined }"},defaultValue:{summary:"true"}},control:"text"},flip:{description:"If true, the popper will change its placement and flip when it's about to overflow its boundary area.",table:{type:{summary:"boolean"},defaultValue:{summary:"true"}},control:"boolean"},gutter:{description:"The distance or margin between the reference and popper. It is used internally to create an offset modifier. NB: If you define offset prop, it'll override the gutter.",table:{type:{summary:"number"},defaultValue:{summary:"8"}},control:"number"},id:{table:{type:{summary:"string"}},control:"text"},initialFocusRef:{description:"The ref of the element that should receive focus when the popover opens.",table:{type:{summary:"RefObject<{ focus(): void }>"}},control:"object"},isLazy:{description:"Performance 🚀: If true, the MenuItem rendering will be deferred until the menu is open.",table:{type:{summary:"boolean"},defaultValue:{summary:"true"}},control:"boolean"},isOpen:{table:{type:{summary:"boolean"}},control:"boolean"},lazyBehavior:{description:`Performance 🚀: The lazy behavior of menu's content when not visible. Only works when "isLazy={true}" - "unmount": The menu's content is always unmounted when not open. - "keepMounted": The menu's content initially unmounted, but stays mounted when menu is open.`,table:{type:{summary:"LazyMode"},defaultValue:{summary:"unmount"}},control:"text"},matchWidth:{description:"If true, the popper will match the width of the reference at all times. It's useful for autocomplete, `date-picker` and select patterns.",table:{type:{summary:"boolean"},defaultValue:{summary:"false"}},control:"boolean"},modifiers:{description:"Array of popper.js modifiers. Check the docs to see the list of possible modifiers you can pass.",table:{type:{summary:"Partial<Modifier<string, any>>[]"}},control:"text"},offset:{description:"The main and cross-axis offset to displace popper element from its reference element.",table:{type:{summary:"[number, number]"}}},onClose:{table:{type:{summary:"() => void"}},control:"text"},onOpen:{table:{type:{summary:"() => void"}},control:"text"},placement:{description:"The placement of the popper relative to its reference.",table:{type:{summary:"PlacementWithLogical"},defaultValue:{summary:"bottom"}},control:"text"},preventOverflow:{description:"If true, will prevent the popper from being cut off and ensure it's visible within the boundary area.",table:{type:{summary:"boolean"},defaultValue:{summary:"true"}},control:"boolean"},strategy:{description:"The CSS positioning strategy to use.",table:{type:{summary:"absolute | fixed"},defaultValue:{summary:"absolute"}},options:["absolute","fixed"],control:{type:"radio"}}}},n={render:o=>e.jsx(u,{children:e.jsxs(s,{...o,children:[e.jsx(i,{asChild:!0,children:e.jsx(m,{variant:"outline",colorPalette:o.colorPalette,size:"sm",children:"Åpne meny"})}),e.jsxs(p,{children:[e.jsx(t,{value:"new-txt-a",children:"Nedlast"}),e.jsx(t,{value:"new-txt-b",children:"Lag en kopi"}),e.jsx(t,{value:"new-txt-c",children:"Marker som utkast"}),e.jsx(t,{value:"new-txt-d",children:"Slett"}),e.jsx(t,{value:"new-txt-e",children:"Bli med på en workshop"})]})]})})};var r,a,l;n.parameters={...n.parameters,docs:{...(r=n.parameters)==null?void 0:r.docs,source:{originalSource:`{
  render: (args: MenuProps) => <Center>
      <KvibMenu {...args}>
        <MenuTrigger asChild>
          <Button variant="outline" colorPalette={args.colorPalette} size="sm">
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
      </KvibMenu>
    </Center>
}`,...(l=(a=n.parameters)==null?void 0:a.docs)==null?void 0:l.source}}};const d=["Preview"],b=Object.freeze(Object.defineProperty({__proto__:null,Preview:n,__namedExportsOrder:d,default:c},Symbol.toStringTag,{value:"Module"}));export{b as M,n as P};
