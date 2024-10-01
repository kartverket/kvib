import{j as e}from"./extends-CwFRzn3r.js";import{u as y,a as oe,M as Z,b as re,c as se,d as ae,e as ie,f as le,g as ue,h as d}from"./chunk-HB6KBUMZ-681QBenr.js";import{f as u,c,a as p,s as ce}from"./chunk-ZJJGQIVY-CoI1iMVy.js";import{r as me}from"./index-BwDkhjyp.js";import{m as de}from"./proxy-CzVOQe18.js";import{B as f}from"./chunk-PULVB27S-CgiffgmI.js";import{B}from"./Button-DWcfEdk6.js";import{I as pe}from"./IconButton-Bu_Cl9Mq.js";import{I as O}from"./Icon-BLy-BiFo.js";var ee=u((n,o)=>{const t=y();return e.jsx(c.span,{ref:o,...n,__css:t.command,className:"chakra-menu__command"})});ee.displayName="MenuCommand";var ne=u((n,o)=>{const{type:t,...a}=n,r=y(),i=a.as||t?t??void 0:"button",l=me.useMemo(()=>({textDecoration:"none",color:"inherit",userSelect:"none",display:"flex",width:"100%",alignItems:"center",textAlign:"start",flex:"0 0 auto",outline:0,...r.item}),[r.item]);return e.jsx(c.button,{ref:o,type:i,...a,__css:l})}),s=u((n,o)=>{const{icon:t,iconSpacing:a="0.75rem",command:r,commandSpacing:i="0.75rem",children:l,...x}=n,k=oe(x,o),S=t||r?e.jsx("span",{style:{pointerEvents:"none",flex:1},children:l}):l;return e.jsxs(ne,{...k,className:p("chakra-menu__menuitem",k.className),children:[t&&e.jsx(Z,{fontSize:"0.8em",marginEnd:a,children:t}),S,r&&e.jsx(ee,{marginStart:i,children:r})]})});s.displayName="MenuItem";var he={enter:{visibility:"visible",opacity:1,scale:1,transition:{duration:.2,ease:[.4,0,.2,1]}},exit:{transitionEnd:{visibility:"hidden"},opacity:0,scale:.8,transition:{duration:.1,easings:"easeOut"}}},Me=c(de.div),h=u(function(o,t){var a,r;const{rootProps:i,motionProps:l,...x}=o,{isOpen:k,onTransitionEnd:T,unstable__animationState:S}=re(),N=se(x,t),te=ae(i),K=y();return e.jsx(c.div,{...te,__css:{zIndex:(r=o.zIndex)!=null?r:(a=K.list)==null?void 0:a.zIndex},children:e.jsx(Me,{variants:he,initial:!1,animate:k?"enter":"exit",__css:{outline:0,...K.list},...l,className:p("chakra-menu__menu-list",N.className),...N,onUpdate:T,onAnimationComplete:ce(S.onComplete,N.onAnimationComplete)})})});h.displayName="MenuList";var w=u((n,o)=>{const{title:t,children:a,className:r,...i}=n,l=p("chakra-menu__group__title",r),x=y();return e.jsxs("div",{ref:o,className:"chakra-menu__group",role:"group",children:[t&&e.jsx(c.p,{className:l,...i,__css:x.groupTitle,children:t}),a]})});w.displayName="MenuGroup";var L=n=>{const{className:o,title:t,...a}=n,r=ie(a);return e.jsx(w,{title:t,className:p("chakra-menu__option-group",o),...r})};L.displayName="MenuOptionGroup";var ye=u((n,o)=>{const t=y();return e.jsx(c.button,{ref:o,...n,__css:{display:"inline-flex",appearance:"none",alignItems:"center",outline:0,...t.button}})}),M=u((n,o)=>{const{children:t,as:a,...r}=n,i=le(r,o),l=a||ye;return e.jsx(l,{...i,className:p("chakra-menu__menu-button",n.className),children:e.jsx(c.span,{__css:{pointerEvents:"none",flex:"1 1 auto",minW:0},children:n.children})})});M.displayName="MenuButton";var P=n=>{const{className:o,...t}=n,a=y();return e.jsx(c.hr,{"aria-orientation":"horizontal",className:p("chakra-menu__divider",o),...t,__css:a.divider})};P.displayName="MenuDivider";var fe=n=>e.jsx("svg",{viewBox:"0 0 14 14",width:"1em",height:"1em",...n,children:e.jsx("polygon",{fill:"currentColor",points:"5.5 11.9993304 14 3.49933039 12.5 2 5.5 8.99933039 1.5 4.9968652 0 6.49933039"})}),m=u((n,o)=>{const{icon:t,iconSpacing:a="0.75rem",...r}=n,i=ue(r,o);return e.jsxs(ne,{...i,className:p("chakra-menu__menuitem-option",r.className),children:[t!==null&&e.jsx(Z,{fontSize:"0.8em",marginEnd:a,opacity:n.isChecked?1:0,children:t||e.jsx(fe,{})}),e.jsx("span",{style:{flex:1},children:i.children})]})});m.id="MenuItemOption";m.displayName="MenuItemOption";const xe={title:"Navigasjon/Menu",component:d,parameters:{docs:{story:{inline:!0},canvas:{sourceState:"shown"}}},argTypes:{arrowPadding:{description:"The padding required to prevent the arrow from reaching the very edge of the popper.",table:{type:{summary:"number"},defaultValue:{summary:8}},control:"number"},autoSelect:{description:"If true, the first enabled menu item will receive focus and be selected when the menu opens.",table:{type:{summary:"boolean"},defaultValue:{summary:!0}},control:"boolean"},boundary:{description:"The boundary area for the popper. Used within the preventOverflow modifier",table:{type:{summary:'"clippingParents" | "scrollParent" | HTMLElement'},defaultValue:{summary:'"clippingParents"'}},control:{type:"text"}},closeOnBlur:{description:"If true, the menu will close when you click outside the menu list",table:{type:{summary:"boolean"},defaultValue:{summary:!0}},control:"boolean"},closeOnSelect:{description:"If true, the menu will close when a menu item is clicked",table:{type:{summary:"boolean"},defaultValue:{summary:!0}},control:"boolean"},computePositionOnMount:{table:{type:{summary:"boolean"}},control:"boolean"},defaultIsOpen:{table:{type:{summary:"boolean"}},control:"boolean"},direction:{table:{type:{summary:"ltr | rtl"}},options:["lrt","rtl"],control:"radio"},eventListeners:{description:"If provided, determines whether the popper will reposition itself on scroll and resize of the window.",table:{type:{summary:"type ONLY_FOR_FORMAT = | boolean | { scroll?: boolean | undefined resize?: boolean | undefined }"},defaultValue:{summary:!0}},control:"text"},flip:{description:"If true, the popper will change its placement and flip when it's about to overflow its boundary area.",table:{type:{summary:"boolean"},defaultValue:{summary:!0}},control:"boolean"},gutter:{description:"The distance or margin between the reference and popper. It is used internally to create an offset modifier. NB: If you define offset prop, it'll override the gutter.",table:{type:{summary:"number"},defaultValue:{summary:8}},control:"number"},id:{table:{type:{summary:"string"}},control:"text"},initialFocusRef:{description:"The ref of the element that should receive focus when the popover opens.",table:{type:{summary:"RefObject<{ focus(): void }>"}},control:"object"},isLazy:{description:"Performance 🚀: If true, the MenuItem rendering will be deferred until the menu is open.",table:{type:{summary:"boolean"},defaultValue:{summary:!0}},control:"boolean"},isOpen:{table:{type:{summary:"boolean"}},control:"boolean"},lazyBehavior:{description:`Performance 🚀: The lazy behavior of menu's content when not visible. Only works when "isLazy={true}" - "unmount": The menu's content is always unmounted when not open. - "keepMounted": The menu's content initially unmounted, but stays mounted when menu is open.`,table:{type:{summary:"LazyMode"},defaultValue:{summary:"unmount"}},control:"text"},matchWidth:{description:"If true, the popper will match the width of the reference at all times. It's useful for autocomplete, `date-picker` and select patterns.",table:{type:{summary:"boolean"},defaultValue:{summary:!1}},control:"boolean"},modifiers:{description:"Array of popper.js modifiers. Check the docs to see the list of possible modifiers you can pass.",table:{type:{summary:"Partial<Modifier<string, any>>[]"}},control:"text"},offset:{description:"The main and cross-axis offset to displace popper element from its reference element.",table:{type:{summary:"[number, number]"}},control:"array"},onClose:{table:{type:{summary:"() => void"}},control:"text"},onOpen:{table:{type:{summary:"() => void"}},control:"text"},placement:{description:"The placement of the popper relative to its reference.",table:{type:{summary:"PlacementWithLogical"},defaultValue:{summary:"bottom"}},control:"text"},preventOverflow:{description:"If true, will prevent the popper from being cut off and ensure it's visible within the boundary area.",table:{type:{summary:"boolean"},defaultValue:{summary:!0}},control:"boolean"},strategy:{description:"The CSS positioning strategy to use.",table:{type:{summary:"absolute | fixed"},defaultValue:{summary:"absolute"}},options:["absolute","fixed"],control:{type:"radio"}}},args:{onClose:void 0,onOpen:void 0}},b={args:{},render:n=>e.jsx(f,{h:"60",children:e.jsxs(d,{...n,children:[e.jsx(M,{as:B,rightIcon:"expand_more",children:"Handlinger"}),e.jsxs(h,{children:[e.jsx(s,{children:"Nedlast"}),e.jsx(s,{children:"Lag en kopi"}),e.jsx(s,{children:"Marker som utkast"}),e.jsx(s,{children:"Slett"}),e.jsx(s,{children:"Bli med på en workshop"})]})]})})},g={args:{},render:n=>e.jsx(f,{h:"40",children:e.jsx(d,{...n,children:({isOpen:o})=>e.jsxs(e.Fragment,{children:[e.jsx(M,{as:B,rightIcon:"expand_more",children:o?"Lukk":"Åpne"}),e.jsxs(h,{children:[e.jsx(s,{children:"Nedlast"}),e.jsx(s,{onClick:()=>alert("Kopi"),children:"Lag en kopi"})]})]})})})},j={args:{},render:n=>e.jsx(f,{h:"40",children:e.jsxs(d,{...n,children:[e.jsx(M,{as:pe,"aria-label":"Options",icon:"menu",variant:"primary"}),e.jsxs(h,{children:[e.jsx(s,{icon:e.jsx(O,{weight:300,icon:"add"}),command:"⌘T",children:"Ny fane"}),e.jsx(s,{icon:e.jsx(O,{weight:300,icon:"open_in_new"}),command:"⌘N",children:"Nytt vindu"}),e.jsx(s,{icon:e.jsx(O,{weight:300,icon:"cached"}),command:"⌘⇧N",children:"Åpne lukket fane"}),e.jsx(s,{icon:e.jsx(O,{weight:300,icon:"file_open"}),command:"⌘O",children:"Åpne fil..."})]})]})})},v={args:{},render:n=>e.jsx(f,{h:"60",children:e.jsxs(d,{...n,children:[e.jsx(M,{as:B,colorScheme:"green",children:"Profil"}),e.jsxs(h,{children:[e.jsxs(w,{title:"Profil",children:[e.jsx(s,{children:"Min konto"}),e.jsx(s,{children:"Betaling"})]}),e.jsx(P,{}),e.jsxs(w,{title:"Hjelp",children:[e.jsx(s,{children:"Dokumentasjon"}),e.jsx(s,{children:"FAQ"})]})]})]})})},I={args:{},render:n=>e.jsx(f,{h:"20",children:e.jsxs(d,{...n,children:[e.jsx(M,{children:"Åpne meny"}),e.jsxs(h,{children:[e.jsx(s,{as:"a",href:"#",children:"Link 1"}),e.jsx(s,{as:"a",href:"#",children:"Link 2"})]})]})})},_={args:{},render:n=>e.jsx(f,{h:"80",children:e.jsxs(d,{...n,closeOnSelect:!1,children:[e.jsx(M,{as:B,colorScheme:"blue",children:"Sorter og filtrer"}),e.jsxs(h,{minWidth:"240px",children:[e.jsxs(L,{defaultValue:"asc",title:"Rekkefølge",type:"radio",children:[e.jsx(m,{value:"asc",children:"Stigende"}),e.jsx(m,{value:"desc",children:"Synkende"})]}),e.jsx(P,{}),e.jsxs(L,{title:"Filtrer",type:"checkbox",children:[e.jsx(m,{value:"email",children:"Email"}),e.jsx(m,{value:"phone",children:"Telefon"}),e.jsx(m,{value:"country",children:"Land"})]})]})]})})};var C,G,V;b.parameters={...b.parameters,docs:{...(C=b.parameters)==null?void 0:C.docs,source:{originalSource:`{
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
}`,...(V=(G=b.parameters)==null?void 0:G.docs)==null?void 0:V.source}}};var z,E,A;g.parameters={...g.parameters,docs:{...(z=g.parameters)==null?void 0:z.docs,source:{originalSource:`{
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
}`,...(A=(E=g.parameters)==null?void 0:E.docs)==null?void 0:A.source}}};var F,R,D;j.parameters={...j.parameters,docs:{...(F=j.parameters)==null?void 0:F.docs,source:{originalSource:`{
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
}`,...(D=(R=j.parameters)==null?void 0:R.docs)==null?void 0:D.source}}};var W,H,Q;v.parameters={...v.parameters,docs:{...(W=v.parameters)==null?void 0:W.docs,source:{originalSource:`{
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
}`,...(Q=(H=v.parameters)==null?void 0:H.docs)==null?void 0:Q.source}}};var U,$,q;I.parameters={...I.parameters,docs:{...(U=I.parameters)==null?void 0:U.docs,source:{originalSource:`{
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
}`,...(q=($=I.parameters)==null?void 0:$.docs)==null?void 0:q.source}}};var Y,J,X;_.parameters={..._.parameters,docs:{...(Y=_.parameters)==null?void 0:Y.docs,source:{originalSource:`{
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
}`,...(X=(J=_.parameters)==null?void 0:J.docs)==null?void 0:X.source}}};const be=["Menu","MenuState","MenuIconsCommands","MenuGroup","MenuLink","MenuOptionGroups"],Se=Object.freeze(Object.defineProperty({__proto__:null,Menu:b,MenuGroup:v,MenuIconsCommands:j,MenuLink:I,MenuOptionGroups:_,MenuState:g,__namedExportsOrder:be,default:xe},Symbol.toStringTag,{value:"Module"}));export{Se as M,b as a,g as b,j as c,v as d,I as e,_ as f};
