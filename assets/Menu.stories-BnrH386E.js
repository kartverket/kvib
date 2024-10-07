import{j as e}from"./extends-CwFRzn3r.js";import{u as H,a as q,b as U,c as Y,M as i}from"./chunk-HB6KBUMZ-DDm3484g.js";import{S as J,M as l,a as c,b as t}from"./chunk-Z3VR2BFQ-BR0Ullb0.js";import{f as A,a as j,c as W}from"./chunk-ZJJGQIVY-CoI1iMVy.js";import{B as m}from"./chunk-PULVB27S-CgiffgmI.js";import{B as I}from"./Button-CfHMKyil.js";import{I as X}from"./IconButton-BcOVO0AX.js";import{I as b}from"./Icon-CERCJRn_.js";var g=A((n,o)=>{const{title:r,children:a,className:u,...x}=n,Q=j("chakra-menu__group__title",u),$=H();return e.jsxs("div",{ref:o,className:"chakra-menu__group",role:"group",children:[r&&e.jsx(W.p,{className:Q,...x,__css:$.groupTitle,children:r}),a]})});g.displayName="MenuGroup";var v=n=>{const{className:o,title:r,...a}=n,u=q(a);return e.jsx(g,{title:r,className:j("chakra-menu__option-group",o),...u})};v.displayName="MenuOptionGroup";var k=n=>{const{className:o,...r}=n,a=H();return e.jsx(W.hr,{"aria-orientation":"horizontal",className:j("chakra-menu__divider",o),...r,__css:a.divider})};k.displayName="MenuDivider";var Z=n=>e.jsx("svg",{viewBox:"0 0 14 14",width:"1em",height:"1em",...n,children:e.jsx("polygon",{fill:"currentColor",points:"5.5 11.9993304 14 3.49933039 12.5 2 5.5 8.99933039 1.5 4.9968652 0 6.49933039"})}),s=A((n,o)=>{const{icon:r,iconSpacing:a="0.75rem",...u}=n,x=U(u,o);return e.jsxs(J,{...x,className:j("chakra-menu__menuitem-option",u.className),children:[r!==null&&e.jsx(Y,{fontSize:"0.8em",marginEnd:a,opacity:n.isChecked?1:0,children:r||e.jsx(Z,{})}),e.jsx("span",{style:{flex:1},children:x.children})]})});s.id="MenuItemOption";s.displayName="MenuItemOption";const ee={title:"Navigasjon/Menu",component:i,parameters:{docs:{story:{inline:!0},canvas:{sourceState:"shown"}}},argTypes:{arrowPadding:{description:"The padding required to prevent the arrow from reaching the very edge of the popper.",table:{type:{summary:"number"},defaultValue:{summary:8}},control:"number"},autoSelect:{description:"If true, the first enabled menu item will receive focus and be selected when the menu opens.",table:{type:{summary:"boolean"},defaultValue:{summary:!0}},control:"boolean"},boundary:{description:"The boundary area for the popper. Used within the preventOverflow modifier",table:{type:{summary:'"clippingParents" | "scrollParent" | HTMLElement'},defaultValue:{summary:'"clippingParents"'}},control:{type:"text"}},closeOnBlur:{description:"If true, the menu will close when you click outside the menu list",table:{type:{summary:"boolean"},defaultValue:{summary:!0}},control:"boolean"},closeOnSelect:{description:"If true, the menu will close when a menu item is clicked",table:{type:{summary:"boolean"},defaultValue:{summary:!0}},control:"boolean"},computePositionOnMount:{table:{type:{summary:"boolean"}},control:"boolean"},defaultIsOpen:{table:{type:{summary:"boolean"}},control:"boolean"},direction:{table:{type:{summary:"ltr | rtl"}},options:["lrt","rtl"],control:"radio"},eventListeners:{description:"If provided, determines whether the popper will reposition itself on scroll and resize of the window.",table:{type:{summary:"type ONLY_FOR_FORMAT = | boolean | { scroll?: boolean | undefined resize?: boolean | undefined }"},defaultValue:{summary:!0}},control:"text"},flip:{description:"If true, the popper will change its placement and flip when it's about to overflow its boundary area.",table:{type:{summary:"boolean"},defaultValue:{summary:!0}},control:"boolean"},gutter:{description:"The distance or margin between the reference and popper. It is used internally to create an offset modifier. NB: If you define offset prop, it'll override the gutter.",table:{type:{summary:"number"},defaultValue:{summary:8}},control:"number"},id:{table:{type:{summary:"string"}},control:"text"},initialFocusRef:{description:"The ref of the element that should receive focus when the popover opens.",table:{type:{summary:"RefObject<{ focus(): void }>"}},control:"object"},isLazy:{description:"Performance 🚀: If true, the MenuItem rendering will be deferred until the menu is open.",table:{type:{summary:"boolean"},defaultValue:{summary:!0}},control:"boolean"},isOpen:{table:{type:{summary:"boolean"}},control:"boolean"},lazyBehavior:{description:`Performance 🚀: The lazy behavior of menu's content when not visible. Only works when "isLazy={true}" - "unmount": The menu's content is always unmounted when not open. - "keepMounted": The menu's content initially unmounted, but stays mounted when menu is open.`,table:{type:{summary:"LazyMode"},defaultValue:{summary:"unmount"}},control:"text"},matchWidth:{description:"If true, the popper will match the width of the reference at all times. It's useful for autocomplete, `date-picker` and select patterns.",table:{type:{summary:"boolean"},defaultValue:{summary:!1}},control:"boolean"},modifiers:{description:"Array of popper.js modifiers. Check the docs to see the list of possible modifiers you can pass.",table:{type:{summary:"Partial<Modifier<string, any>>[]"}},control:"text"},offset:{description:"The main and cross-axis offset to displace popper element from its reference element.",table:{type:{summary:"[number, number]"}},control:"array"},onClose:{table:{type:{summary:"() => void"}},control:"text"},onOpen:{table:{type:{summary:"() => void"}},control:"text"},placement:{description:"The placement of the popper relative to its reference.",table:{type:{summary:"PlacementWithLogical"},defaultValue:{summary:"bottom"}},control:"text"},preventOverflow:{description:"If true, will prevent the popper from being cut off and ensure it's visible within the boundary area.",table:{type:{summary:"boolean"},defaultValue:{summary:!0}},control:"boolean"},strategy:{description:"The CSS positioning strategy to use.",table:{type:{summary:"absolute | fixed"},defaultValue:{summary:"absolute"}},options:["absolute","fixed"],control:{type:"radio"}}},args:{onClose:void 0,onOpen:void 0}},d={args:{},render:n=>e.jsx(m,{h:"60",children:e.jsxs(i,{...n,children:[e.jsx(l,{as:I,rightIcon:"expand_more",children:"Handlinger"}),e.jsxs(c,{children:[e.jsx(t,{children:"Nedlast"}),e.jsx(t,{children:"Lag en kopi"}),e.jsx(t,{children:"Marker som utkast"}),e.jsx(t,{children:"Slett"}),e.jsx(t,{children:"Bli med på en workshop"})]})]})})},p={args:{},render:n=>e.jsx(m,{h:"40",children:e.jsx(i,{...n,children:({isOpen:o})=>e.jsxs(e.Fragment,{children:[e.jsx(l,{as:I,rightIcon:"expand_more",children:o?"Lukk":"Åpne"}),e.jsxs(c,{children:[e.jsx(t,{children:"Nedlast"}),e.jsx(t,{onClick:()=>alert("Kopi"),children:"Lag en kopi"})]})]})})})},h={args:{},render:n=>e.jsx(m,{h:"40",children:e.jsxs(i,{...n,children:[e.jsx(l,{as:X,"aria-label":"Options",icon:"menu",variant:"primary"}),e.jsxs(c,{children:[e.jsx(t,{icon:e.jsx(b,{weight:300,icon:"add"}),command:"⌘T",children:"Ny fane"}),e.jsx(t,{icon:e.jsx(b,{weight:300,icon:"open_in_new"}),command:"⌘N",children:"Nytt vindu"}),e.jsx(t,{icon:e.jsx(b,{weight:300,icon:"cached"}),command:"⌘⇧N",children:"Åpne lukket fane"}),e.jsx(t,{icon:e.jsx(b,{weight:300,icon:"file_open"}),command:"⌘O",children:"Åpne fil..."})]})]})})},M={args:{},render:n=>e.jsx(m,{h:"60",children:e.jsxs(i,{...n,children:[e.jsx(l,{as:I,colorScheme:"green",children:"Profil"}),e.jsxs(c,{children:[e.jsxs(g,{title:"Profil",children:[e.jsx(t,{children:"Min konto"}),e.jsx(t,{children:"Betaling"})]}),e.jsx(k,{}),e.jsxs(g,{title:"Hjelp",children:[e.jsx(t,{children:"Dokumentasjon"}),e.jsx(t,{children:"FAQ"})]})]})]})})},f={args:{},render:n=>e.jsx(m,{h:"20",children:e.jsxs(i,{...n,children:[e.jsx(l,{children:"Åpne meny"}),e.jsxs(c,{children:[e.jsx(t,{as:"a",href:"#",children:"Link 1"}),e.jsx(t,{as:"a",href:"#",children:"Link 2"})]})]})})},y={args:{},render:n=>e.jsx(m,{h:"80",children:e.jsxs(i,{...n,closeOnSelect:!1,children:[e.jsx(l,{as:I,colorScheme:"blue",children:"Sorter og filtrer"}),e.jsxs(c,{minWidth:"240px",children:[e.jsxs(v,{defaultValue:"asc",title:"Rekkefølge",type:"radio",children:[e.jsx(s,{value:"asc",children:"Stigende"}),e.jsx(s,{value:"desc",children:"Synkende"})]}),e.jsx(k,{}),e.jsxs(v,{title:"Filtrer",type:"checkbox",children:[e.jsx(s,{value:"email",children:"Email"}),e.jsx(s,{value:"phone",children:"Telefon"}),e.jsx(s,{value:"country",children:"Land"})]})]})]})})};var w,O,B;d.parameters={...d.parameters,docs:{...(w=d.parameters)==null?void 0:w.docs,source:{originalSource:`{
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
}`,...(B=(O=d.parameters)==null?void 0:O.docs)==null?void 0:B.source}}};var S,_,L;p.parameters={...p.parameters,docs:{...(S=p.parameters)==null?void 0:S.docs,source:{originalSource:`{
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
}`,...(L=(_=p.parameters)==null?void 0:_.docs)==null?void 0:L.source}}};var N,T,K;h.parameters={...h.parameters,docs:{...(N=h.parameters)==null?void 0:N.docs,source:{originalSource:`{
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
}`,...(K=(T=h.parameters)==null?void 0:T.docs)==null?void 0:K.source}}};var G,P,V;M.parameters={...M.parameters,docs:{...(G=M.parameters)==null?void 0:G.docs,source:{originalSource:`{
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
}`,...(V=(P=M.parameters)==null?void 0:P.docs)==null?void 0:V.source}}};var C,z,F;f.parameters={...f.parameters,docs:{...(C=f.parameters)==null?void 0:C.docs,source:{originalSource:`{
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
}`,...(F=(z=f.parameters)==null?void 0:z.docs)==null?void 0:F.source}}};var R,D,E;y.parameters={...y.parameters,docs:{...(R=y.parameters)==null?void 0:R.docs,source:{originalSource:`{
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
}`,...(E=(D=y.parameters)==null?void 0:D.docs)==null?void 0:E.source}}};const ne=["Menu","MenuState","MenuIconsCommands","MenuGroup","MenuLink","MenuOptionGroups"],ce=Object.freeze(Object.defineProperty({__proto__:null,Menu:d,MenuGroup:M,MenuIconsCommands:h,MenuLink:f,MenuOptionGroups:y,MenuState:p,__namedExportsOrder:ne,default:ee},Symbol.toStringTag,{value:"Module"}));export{ce as M,d as a,p as b,h as c,M as d,f as e,y as f};
