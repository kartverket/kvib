import{j as e}from"./extends-CwFRzn3r.js";import{u as Q,a as Y,b as O,c as J,M as i}from"./menu-icon-mAq9v6fy.js";import{S as X,M as l,a as c,b as t}from"./menu-list-Ds3U0_4A.js";import{f as $}from"./forward-ref-BWI-Phbn.js";import{a as q}from"./factory-CdGA0D9p.js";import{c as I}from"./cx-BDMMs1jM.js";import{B as m}from"./box-B7h7acUJ.js";import{B as v}from"./Button-D_Q0PYb8.js";import{I as Z}from"./IconButton-BzjWz2bc.js";import{I as g}from"./Icon-YKyBU4O5.js";const w=n=>{const{className:r,...o}=n,s=Q();return e.jsx(q.hr,{"aria-orientation":"horizontal",className:I("chakra-menu__divider",r),...o,__css:s.divider})};w.displayName="MenuDivider";const j=$((n,r)=>{const{title:o,children:s,className:u,...x}=n,b=I("chakra-menu__group__title",u),U=Q();return e.jsxs("div",{ref:r,className:"chakra-menu__group",role:"group",children:[o&&e.jsx(q.p,{className:b,...x,__css:U.groupTitle,children:o}),s]})});j.displayName="MenuGroup";const B=n=>e.jsx("svg",{viewBox:"0 0 14 14",width:"1em",height:"1em",...n,children:e.jsx("polygon",{fill:"currentColor",points:"5.5 11.9993304 14 3.49933039 12.5 2 5.5 8.99933039 1.5 4.9968652 0 6.49933039"})}),a=$((n,r)=>{const{icon:o,iconSpacing:s="0.75rem",iconPlacement:u="start",...x}=n,b=Y(x,r);return e.jsxs(X,{...b,className:I("chakra-menu__menuitem-option",x.className),children:[o!==null&&u==="start"&&e.jsx(O,{fontSize:"0.8em",marginEnd:s,opacity:n.isChecked?1:0,children:o||e.jsx(B,{})}),e.jsx("span",{style:{flex:1},children:b.children}),o!==null&&u==="end"&&e.jsx(O,{fontSize:"0.8em",marginStart:s,opacity:n.isChecked?1:0,children:o||e.jsx(B,{})})]})});a.id="MenuItemOption";a.displayName="MenuItemOption";const k=n=>{const{className:r,title:o,...s}=n,u=J(s);return e.jsx(j,{title:o,className:I("chakra-menu__option-group",r),...u})};k.displayName="MenuOptionGroup";const ee={title:"Navigasjon/Menu",component:i,parameters:{docs:{story:{inline:!0},canvas:{sourceState:"shown"}}},argTypes:{arrowPadding:{description:"The padding required to prevent the arrow from reaching the very edge of the popper.",table:{type:{summary:"number"},defaultValue:{summary:8}},control:"number"},autoSelect:{description:"If true, the first enabled menu item will receive focus and be selected when the menu opens.",table:{type:{summary:"boolean"},defaultValue:{summary:!0}},control:"boolean"},boundary:{description:"The boundary area for the popper. Used within the preventOverflow modifier",table:{type:{summary:'"clippingParents" | "scrollParent" | HTMLElement'},defaultValue:{summary:'"clippingParents"'}},control:{type:"text"}},closeOnBlur:{description:"If true, the menu will close when you click outside the menu list",table:{type:{summary:"boolean"},defaultValue:{summary:!0}},control:"boolean"},closeOnSelect:{description:"If true, the menu will close when a menu item is clicked",table:{type:{summary:"boolean"},defaultValue:{summary:!0}},control:"boolean"},computePositionOnMount:{table:{type:{summary:"boolean"}},control:"boolean"},defaultIsOpen:{table:{type:{summary:"boolean"}},control:"boolean"},direction:{table:{type:{summary:"ltr | rtl"}},options:["lrt","rtl"],control:"radio"},eventListeners:{description:"If provided, determines whether the popper will reposition itself on scroll and resize of the window.",table:{type:{summary:"type ONLY_FOR_FORMAT = | boolean | { scroll?: boolean | undefined resize?: boolean | undefined }"},defaultValue:{summary:!0}},control:"text"},flip:{description:"If true, the popper will change its placement and flip when it's about to overflow its boundary area.",table:{type:{summary:"boolean"},defaultValue:{summary:!0}},control:"boolean"},gutter:{description:"The distance or margin between the reference and popper. It is used internally to create an offset modifier. NB: If you define offset prop, it'll override the gutter.",table:{type:{summary:"number"},defaultValue:{summary:8}},control:"number"},id:{table:{type:{summary:"string"}},control:"text"},initialFocusRef:{description:"The ref of the element that should receive focus when the popover opens.",table:{type:{summary:"RefObject<{ focus(): void }>"}},control:"object"},isLazy:{description:"Performance 🚀: If true, the MenuItem rendering will be deferred until the menu is open.",table:{type:{summary:"boolean"},defaultValue:{summary:!0}},control:"boolean"},isOpen:{table:{type:{summary:"boolean"}},control:"boolean"},lazyBehavior:{description:`Performance 🚀: The lazy behavior of menu's content when not visible. Only works when "isLazy={true}" - "unmount": The menu's content is always unmounted when not open. - "keepMounted": The menu's content initially unmounted, but stays mounted when menu is open.`,table:{type:{summary:"LazyMode"},defaultValue:{summary:"unmount"}},control:"text"},matchWidth:{description:"If true, the popper will match the width of the reference at all times. It's useful for autocomplete, `date-picker` and select patterns.",table:{type:{summary:"boolean"},defaultValue:{summary:!1}},control:"boolean"},modifiers:{description:"Array of popper.js modifiers. Check the docs to see the list of possible modifiers you can pass.",table:{type:{summary:"Partial<Modifier<string, any>>[]"}},control:"text"},offset:{description:"The main and cross-axis offset to displace popper element from its reference element.",table:{type:{summary:"[number, number]"}},control:"array"},onClose:{table:{type:{summary:"() => void"}},control:"text"},onOpen:{table:{type:{summary:"() => void"}},control:"text"},placement:{description:"The placement of the popper relative to its reference.",table:{type:{summary:"PlacementWithLogical"},defaultValue:{summary:"bottom"}},control:"text"},preventOverflow:{description:"If true, will prevent the popper from being cut off and ensure it's visible within the boundary area.",table:{type:{summary:"boolean"},defaultValue:{summary:!0}},control:"boolean"},strategy:{description:"The CSS positioning strategy to use.",table:{type:{summary:"absolute | fixed"},defaultValue:{summary:"absolute"}},options:["absolute","fixed"],control:{type:"radio"}}},args:{onClose:void 0,onOpen:void 0}},d={args:{},render:n=>e.jsx(m,{h:"60",children:e.jsxs(i,{...n,children:[e.jsx(l,{as:v,rightIcon:"expand_more",children:"Handlinger"}),e.jsxs(c,{children:[e.jsx(t,{children:"Nedlast"}),e.jsx(t,{children:"Lag en kopi"}),e.jsx(t,{children:"Marker som utkast"}),e.jsx(t,{children:"Slett"}),e.jsx(t,{children:"Bli med på en workshop"})]})]})})},p={args:{},render:n=>e.jsx(m,{h:"40",children:e.jsx(i,{...n,children:({isOpen:r})=>e.jsxs(e.Fragment,{children:[e.jsx(l,{as:v,rightIcon:"expand_more",children:r?"Lukk":"Åpne"}),e.jsxs(c,{children:[e.jsx(t,{children:"Nedlast"}),e.jsx(t,{onClick:()=>alert("Kopi"),children:"Lag en kopi"})]})]})})})},h={args:{},render:n=>e.jsx(m,{h:"40",children:e.jsxs(i,{...n,children:[e.jsx(l,{as:Z,"aria-label":"Options",icon:"menu",variant:"primary"}),e.jsxs(c,{children:[e.jsx(t,{icon:e.jsx(g,{weight:300,icon:"add"}),command:"⌘T",children:"Ny fane"}),e.jsx(t,{icon:e.jsx(g,{weight:300,icon:"open_in_new"}),command:"⌘N",children:"Nytt vindu"}),e.jsx(t,{icon:e.jsx(g,{weight:300,icon:"cached"}),command:"⌘⇧N",children:"Åpne lukket fane"}),e.jsx(t,{icon:e.jsx(g,{weight:300,icon:"file_open"}),command:"⌘O",children:"Åpne fil..."})]})]})})},M={args:{},render:n=>e.jsx(m,{h:"60",children:e.jsxs(i,{...n,children:[e.jsx(l,{as:v,colorScheme:"green",children:"Profil"}),e.jsxs(c,{children:[e.jsxs(j,{title:"Profil",children:[e.jsx(t,{children:"Min konto"}),e.jsx(t,{children:"Betaling"})]}),e.jsx(w,{}),e.jsxs(j,{title:"Hjelp",children:[e.jsx(t,{children:"Dokumentasjon"}),e.jsx(t,{children:"FAQ"})]})]})]})})},f={args:{},render:n=>e.jsx(m,{h:"20",children:e.jsxs(i,{...n,children:[e.jsx(l,{children:"Åpne meny"}),e.jsxs(c,{children:[e.jsx(t,{as:"a",href:"#",children:"Link 1"}),e.jsx(t,{as:"a",href:"#",children:"Link 2"})]})]})})},y={args:{},render:n=>e.jsx(m,{h:"80",children:e.jsxs(i,{...n,closeOnSelect:!1,children:[e.jsx(l,{as:v,colorScheme:"blue",children:"Sorter og filtrer"}),e.jsxs(c,{minWidth:"240px",children:[e.jsxs(k,{defaultValue:"asc",title:"Rekkefølge",type:"radio",children:[e.jsx(a,{value:"asc",children:"Stigende"}),e.jsx(a,{value:"desc",children:"Synkende"})]}),e.jsx(w,{}),e.jsxs(k,{title:"Filtrer",type:"checkbox",children:[e.jsx(a,{value:"email",children:"Email"}),e.jsx(a,{value:"phone",children:"Telefon"}),e.jsx(a,{value:"country",children:"Land"})]})]})]})})};var S,_,L;d.parameters={...d.parameters,docs:{...(S=d.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {},
  render: args => <Box h="60">
      <KvibMenu {...args}>
        <MenuButton as={Button} rightIcon={"expand_more"}>
          Handlinger
        </MenuButton>
        <MenuList>
          <MenuItem>Nedlast</MenuItem>
          <MenuItem>Lag en kopi</MenuItem>
          <MenuItem>Marker som utkast</MenuItem>
          <MenuItem>Slett</MenuItem>
          <MenuItem>Bli med på en workshop</MenuItem>
        </MenuList>
      </KvibMenu>
    </Box>
}`,...(L=(_=d.parameters)==null?void 0:_.docs)==null?void 0:L.source}}};var N,T,K;p.parameters={...p.parameters,docs:{...(N=p.parameters)==null?void 0:N.docs,source:{originalSource:`{
  args: {},
  render: args => <Box h="40">
      <KvibMenu {...args}>
        {({
        isOpen
      }) => <>
            <MenuButton as={Button} rightIcon={"expand_more"}>
              {isOpen ? "Lukk" : "Åpne"}
            </MenuButton>
            <MenuList>
              <MenuItem>Nedlast</MenuItem>
              <MenuItem onClick={() => alert("Kopi")}>Lag en kopi</MenuItem>
            </MenuList>
          </>}
      </KvibMenu>
    </Box>
}`,...(K=(T=p.parameters)==null?void 0:T.docs)==null?void 0:K.source}}};var G,P,V;h.parameters={...h.parameters,docs:{...(G=h.parameters)==null?void 0:G.docs,source:{originalSource:`{
  args: {},
  render: args => <Box h="40">
      <KvibMenu {...args}>
        <MenuButton as={IconButton} aria-label="Options" icon={"menu"} variant="primary" />
        <MenuList>
          <MenuItem icon={<Icon weight={300} icon="add" />} command="⌘T">
            Ny fane
          </MenuItem>
          <MenuItem icon={<Icon weight={300} icon="open_in_new" />} command="⌘N">
            Nytt vindu
          </MenuItem>
          <MenuItem icon={<Icon weight={300} icon="cached" />} command="⌘⇧N">
            Åpne lukket fane
          </MenuItem>
          <MenuItem icon={<Icon weight={300} icon="file_open" />} command="⌘O">
            Åpne fil...
          </MenuItem>
        </MenuList>
      </KvibMenu>
    </Box>
}`,...(V=(P=h.parameters)==null?void 0:P.docs)==null?void 0:V.source}}};var C,z,F;M.parameters={...M.parameters,docs:{...(C=M.parameters)==null?void 0:C.docs,source:{originalSource:`{
  args: {},
  render: args => <Box h="60">
      <KvibMenu {...args}>
        <MenuButton as={Button} colorScheme="green">
          Profil
        </MenuButton>
        <MenuList>
          <KvibMenuGroup title="Profil">
            <MenuItem>Min konto</MenuItem>
            <MenuItem>Betaling</MenuItem>
          </KvibMenuGroup>
          <MenuDivider />
          <KvibMenuGroup title="Hjelp">
            <MenuItem>Dokumentasjon</MenuItem>
            <MenuItem>FAQ</MenuItem>
          </KvibMenuGroup>
        </MenuList>
      </KvibMenu>
    </Box>
}`,...(F=(z=M.parameters)==null?void 0:z.docs)==null?void 0:F.source}}};var R,D,E;f.parameters={...f.parameters,docs:{...(R=f.parameters)==null?void 0:R.docs,source:{originalSource:`{
  args: {},
  render: args => <Box h="20">
      <KvibMenu {...args}>
        <MenuButton>Åpne meny</MenuButton>
        <MenuList>
          <MenuItem as="a" href="#">
            Link 1
          </MenuItem>
          <MenuItem as="a" href="#">
            Link 2
          </MenuItem>
        </MenuList>
      </KvibMenu>
    </Box>
}`,...(E=(D=f.parameters)==null?void 0:D.docs)==null?void 0:E.source}}};var H,A,W;y.parameters={...y.parameters,docs:{...(H=y.parameters)==null?void 0:H.docs,source:{originalSource:`{
  args: {},
  render: args => <Box h="80">
      <KvibMenu {...args} closeOnSelect={false}>
        <MenuButton as={Button} colorScheme="blue">
          Sorter og filtrer
        </MenuButton>
        <MenuList minWidth="240px">
          <MenuOptionGroup defaultValue="asc" title="Rekkefølge" type="radio">
            <MenuItemOption value="asc">Stigende</MenuItemOption>
            <MenuItemOption value="desc">Synkende</MenuItemOption>
          </MenuOptionGroup>
          <MenuDivider />
          <MenuOptionGroup title="Filtrer" type="checkbox">
            <MenuItemOption value="email">Email</MenuItemOption>
            <MenuItemOption value="phone">Telefon</MenuItemOption>
            <MenuItemOption value="country">Land</MenuItemOption>
          </MenuOptionGroup>
        </MenuList>
      </KvibMenu>
    </Box>
}`,...(W=(A=y.parameters)==null?void 0:A.docs)==null?void 0:W.source}}};const ne=["Menu","MenuState","MenuIconsCommands","MenuGroup","MenuLink","MenuOptionGroups"],de=Object.freeze(Object.defineProperty({__proto__:null,Menu:d,MenuGroup:M,MenuIconsCommands:h,MenuLink:f,MenuOptionGroups:y,MenuState:p,__namedExportsOrder:ne,default:ee},Symbol.toStringTag,{value:"Module"}));export{de as M,d as a,p as b,h as c,M as d,f as e,y as f};
