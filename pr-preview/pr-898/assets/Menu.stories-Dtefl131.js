import{j as e}from"./extends-CwFRzn3r.js";import{u as y,a as oe,b as se,M as L,c as re,d as ae,e as ie,f as le,g as ue,h as d}from"./menu-icon-DwaPw1FY.js";import{f as u}from"./forward-ref-BWI-Phbn.js";import{c}from"./factory-lWLPzty5.js";import{c as p}from"./cx-BDMMs1jM.js";import{m as ce}from"./proxy-NyFW0ziH.js";import{a as me}from"./call-all-DDzecCnU.js";import{r as de}from"./index-BwDkhjyp.js";import{B}from"./Button-CdMzSscO.js";import{B as _}from"./box-Cs-tJ6EH.js";import{I as pe}from"./IconButton-CKWqchJT.js";import{I as O}from"./Icon-C4cZvZqq.js";const he=u((n,o)=>{const t=y();return e.jsx(c.button,{ref:o,...n,__css:{display:"inline-flex",appearance:"none",alignItems:"center",outline:0,...t.button}})}),h=u((n,o)=>{const{children:t,as:r,...a}=n,l=oe(a,o),i=r||he;return e.jsx(i,{...l,className:p("chakra-menu__menu-button",n.className),children:e.jsx(c.span,{__css:{pointerEvents:"none",flex:"1 1 auto",minW:0},children:n.children})})});h.displayName="MenuButton";const ne=u((n,o)=>{const t=y();return e.jsx(c.span,{ref:o,...n,__css:t.command,className:"chakra-menu__command"})});ne.displayName="MenuCommand";const T=n=>{const{className:o,...t}=n,r=y();return e.jsx(c.hr,{"aria-orientation":"horizontal",className:p("chakra-menu__divider",o),...t,__css:r.divider})};T.displayName="MenuDivider";const S=u((n,o)=>{const{title:t,children:r,className:a,...l}=n,i=p("chakra-menu__group__title",a),f=y();return e.jsxs("div",{ref:o,className:"chakra-menu__group",role:"group",children:[t&&e.jsx(c.p,{className:i,...l,__css:f.groupTitle,children:t}),r]})});S.displayName="MenuGroup";const te=u((n,o)=>{const{type:t,...r}=n,a=y(),l=r.as||t?t??void 0:"button",i=de.useMemo(()=>({textDecoration:"none",color:"inherit",userSelect:"none",display:"flex",width:"100%",alignItems:"center",textAlign:"start",flex:"0 0 auto",outline:0,...a.item}),[a.item]);return e.jsx(c.button,{ref:o,type:l,...r,__css:i})}),s=u((n,o)=>{const{icon:t,iconSpacing:r="0.75rem",command:a,commandSpacing:l="0.75rem",children:i,...f}=n,k=se(f,o),N=t||a?e.jsx("span",{style:{pointerEvents:"none",flex:1},children:i}):i;return e.jsxs(te,{...k,className:p("chakra-menu__menuitem",k.className),children:[t&&e.jsx(L,{fontSize:"0.8em",marginEnd:r,children:t}),N,a&&e.jsx(ne,{marginStart:l,children:a})]})});s.displayName="MenuItem";const G=n=>e.jsx("svg",{viewBox:"0 0 14 14",width:"1em",height:"1em",...n,children:e.jsx("polygon",{fill:"currentColor",points:"5.5 11.9993304 14 3.49933039 12.5 2 5.5 8.99933039 1.5 4.9968652 0 6.49933039"})}),m=u((n,o)=>{const{icon:t,iconSpacing:r="0.75rem",iconPlacement:a="start",...l}=n,i=re(l,o);return e.jsxs(te,{...i,className:p("chakra-menu__menuitem-option",l.className),children:[t!==null&&a==="start"&&e.jsx(L,{fontSize:"0.8em",marginEnd:r,opacity:n.isChecked?1:0,children:t||e.jsx(G,{})}),e.jsx("span",{style:{flex:1},children:i.children}),t!==null&&a==="end"&&e.jsx(L,{fontSize:"0.8em",marginStart:r,opacity:n.isChecked?1:0,children:t||e.jsx(G,{})})]})});m.id="MenuItemOption";m.displayName="MenuItemOption";const Me={enter:{visibility:"visible",opacity:1,scale:1,transition:{duration:.2,ease:[.4,0,.2,1]}},exit:{transitionEnd:{visibility:"hidden"},opacity:0,scale:.8,transition:{duration:.1,easings:"easeOut"}}},ye=c(ce.div),M=u(function(o,t){var C;const{rootProps:r,motionProps:a,...l}=o,{isOpen:i,onTransitionEnd:f,unstable__animationState:k}=ae(),w=ie(l,t),N=le(r),K=y();return e.jsx(c.div,{...N,__css:{zIndex:o.zIndex??((C=K.list)==null?void 0:C.zIndex)},children:e.jsx(ye,{variants:Me,initial:!1,animate:i?"enter":"exit",__css:{outline:0,...K.list},...a,...w,className:p("chakra-menu__menu-list",w.className),onUpdate:f,onAnimationComplete:me(k.onComplete,w.onAnimationComplete)})})});M.displayName="MenuList";const P=n=>{const{className:o,title:t,...r}=n,a=ue(r);return e.jsx(S,{title:t,className:p("chakra-menu__option-group",o),...a})};P.displayName="MenuOptionGroup";const fe={title:"Komponenter/Menu",component:d,parameters:{docs:{story:{inline:!0},canvas:{sourceState:"shown"}}},argTypes:{arrowPadding:{description:"The padding required to prevent the arrow from reaching the very edge of the popper.",table:{type:{summary:"number"},defaultValue:{summary:"8"}},control:"number"},autoSelect:{description:"If true, the first enabled menu item will receive focus and be selected when the menu opens.",table:{type:{summary:"boolean"},defaultValue:{summary:"true"}},control:"boolean"},boundary:{description:"The boundary area for the popper. Used within the preventOverflow modifier",table:{type:{summary:'"clippingParents" | "scrollParent" | HTMLElement'},defaultValue:{summary:'"clippingParents"'}},control:{type:"text"}},closeOnBlur:{description:"If true, the menu will close when you click outside the menu list",table:{type:{summary:"boolean"},defaultValue:{summary:"true"}},control:"boolean"},closeOnSelect:{description:"If true, the menu will close when a menu item is clicked",table:{type:{summary:"boolean"},defaultValue:{summary:"true"}},control:"boolean"},computePositionOnMount:{table:{type:{summary:"boolean"}},control:"boolean"},defaultIsOpen:{table:{type:{summary:"boolean"}},control:"boolean"},direction:{table:{type:{summary:"ltr | rtl"}},options:["lrt","rtl"],control:"radio"},eventListeners:{description:"If provided, determines whether the popper will reposition itself on scroll and resize of the window.",table:{type:{summary:"type ONLY_FOR_FORMAT = | boolean | { scroll?: boolean | undefined resize?: boolean | undefined }"},defaultValue:{summary:"true"}},control:"text"},flip:{description:"If true, the popper will change its placement and flip when it's about to overflow its boundary area.",table:{type:{summary:"boolean"},defaultValue:{summary:"true"}},control:"boolean"},gutter:{description:"The distance or margin between the reference and popper. It is used internally to create an offset modifier. NB: If you define offset prop, it'll override the gutter.",table:{type:{summary:"number"},defaultValue:{summary:"8"}},control:"number"},id:{table:{type:{summary:"string"}},control:"text"},initialFocusRef:{description:"The ref of the element that should receive focus when the popover opens.",table:{type:{summary:"RefObject<{ focus(): void }>"}},control:"object"},isLazy:{description:"Performance 🚀: If true, the MenuItem rendering will be deferred until the menu is open.",table:{type:{summary:"boolean"},defaultValue:{summary:"true"}},control:"boolean"},isOpen:{table:{type:{summary:"boolean"}},control:"boolean"},lazyBehavior:{description:`Performance 🚀: The lazy behavior of menu's content when not visible. Only works when "isLazy={true}" - "unmount": The menu's content is always unmounted when not open. - "keepMounted": The menu's content initially unmounted, but stays mounted when menu is open.`,table:{type:{summary:"LazyMode"},defaultValue:{summary:"unmount"}},control:"text"},matchWidth:{description:"If true, the popper will match the width of the reference at all times. It's useful for autocomplete, `date-picker` and select patterns.",table:{type:{summary:"boolean"},defaultValue:{summary:"false"}},control:"boolean"},modifiers:{description:"Array of popper.js modifiers. Check the docs to see the list of possible modifiers you can pass.",table:{type:{summary:"Partial<Modifier<string, any>>[]"}},control:"text"},offset:{description:"The main and cross-axis offset to displace popper element from its reference element.",table:{type:{summary:"[number, number]"}}},onClose:{table:{type:{summary:"() => void"}},control:"text"},onOpen:{table:{type:{summary:"() => void"}},control:"text"},placement:{description:"The placement of the popper relative to its reference.",table:{type:{summary:"PlacementWithLogical"},defaultValue:{summary:"bottom"}},control:"text"},preventOverflow:{description:"If true, will prevent the popper from being cut off and ensure it's visible within the boundary area.",table:{type:{summary:"boolean"},defaultValue:{summary:"true"}},control:"boolean"},strategy:{description:"The CSS positioning strategy to use.",table:{type:{summary:"absolute | fixed"},defaultValue:{summary:"absolute"}},options:["absolute","fixed"],control:{type:"radio"}}},args:{onClose:void 0,onOpen:void 0}},x={render:n=>e.jsxs(d,{...n,children:[e.jsx(h,{as:B,rightIcon:"expand_more",children:"Handlinger"}),e.jsxs(M,{children:[e.jsx(s,{children:"Nedlast"}),e.jsx(s,{children:"Lag en kopi"}),e.jsx(s,{children:"Marker som utkast"}),e.jsx(s,{children:"Slett"}),e.jsx(s,{children:"Bli med på en workshop"})]})]})},b={render:n=>e.jsx(_,{h:"40",children:e.jsx(d,{...n,children:({isOpen:o})=>e.jsxs(e.Fragment,{children:[e.jsx(h,{as:B,rightIcon:"expand_more",children:o?"Lukk":"Åpne"}),e.jsxs(M,{children:[e.jsx(s,{children:"Nedlast"}),e.jsx(s,{onClick:()=>alert("Kopi"),children:"Lag en kopi"})]})]})})})},j={render:n=>e.jsx(_,{h:"40",children:e.jsxs(d,{...n,children:[e.jsx(h,{as:pe,"aria-label":"Options",icon:"menu",variant:"primary"}),e.jsxs(M,{children:[e.jsx(s,{icon:e.jsx(O,{weight:300,icon:"add"}),command:"⌘T",children:"Ny fane"}),e.jsx(s,{icon:e.jsx(O,{weight:300,icon:"open_in_new"}),command:"⌘N",children:"Nytt vindu"}),e.jsx(s,{icon:e.jsx(O,{weight:300,icon:"cached"}),command:"⌘⇧N",children:"Åpne lukket fane"}),e.jsx(s,{icon:e.jsx(O,{weight:300,icon:"file_open"}),command:"⌘O",children:"Åpne fil..."})]})]})})},g={render:n=>e.jsx(_,{h:"60",children:e.jsxs(d,{...n,children:[e.jsx(h,{as:B,colorScheme:"green",children:"Profil"}),e.jsxs(M,{children:[e.jsxs(S,{title:"Profil",children:[e.jsx(s,{children:"Min konto"}),e.jsx(s,{children:"Betaling"})]}),e.jsx(T,{}),e.jsxs(S,{title:"Hjelp",children:[e.jsx(s,{children:"Dokumentasjon"}),e.jsx(s,{children:"FAQ"})]})]})]})})},I={render:n=>e.jsx(_,{h:"20",children:e.jsxs(d,{...n,children:[e.jsx(h,{children:"Åpne meny"}),e.jsxs(M,{children:[e.jsx(s,{as:"a",href:"#",children:"Link 1"}),e.jsx(s,{as:"a",href:"#",children:"Link 2"})]})]})})},v={render:n=>e.jsx(_,{h:"80",children:e.jsxs(d,{...n,closeOnSelect:!1,children:[e.jsx(h,{as:B,colorScheme:"blue",children:"Sorter og filtrer"}),e.jsxs(M,{minWidth:"240px",children:[e.jsxs(P,{defaultValue:"asc",title:"Rekkefølge",type:"radio",children:[e.jsx(m,{value:"asc",children:"Stigende"}),e.jsx(m,{value:"desc",children:"Synkende"})]}),e.jsx(T,{}),e.jsxs(P,{title:"Filtrer",type:"checkbox",children:[e.jsx(m,{value:"email",children:"Email"}),e.jsx(m,{value:"phone",children:"Telefon"}),e.jsx(m,{value:"country",children:"Land"})]})]})]})})};var V,z,E;x.parameters={...x.parameters,docs:{...(V=x.parameters)==null?void 0:V.docs,source:{originalSource:`{
  render: args => <KvibMenu {...args}>
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
}`,...(E=(z=x.parameters)==null?void 0:z.docs)==null?void 0:E.source}}};var A,F,R;b.parameters={...b.parameters,docs:{...(A=b.parameters)==null?void 0:A.docs,source:{originalSource:`{
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
}`,...(R=(F=b.parameters)==null?void 0:F.docs)==null?void 0:R.source}}};var D,W,H;j.parameters={...j.parameters,docs:{...(D=j.parameters)==null?void 0:D.docs,source:{originalSource:`{
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
}`,...(H=(W=j.parameters)==null?void 0:W.docs)==null?void 0:H.source}}};var Q,U,q;g.parameters={...g.parameters,docs:{...(Q=g.parameters)==null?void 0:Q.docs,source:{originalSource:`{
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
}`,...(q=(U=g.parameters)==null?void 0:U.docs)==null?void 0:q.source}}};var Y,$,J;I.parameters={...I.parameters,docs:{...(Y=I.parameters)==null?void 0:Y.docs,source:{originalSource:`{
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
}`,...(J=($=I.parameters)==null?void 0:$.docs)==null?void 0:J.source}}};var X,Z,ee;v.parameters={...v.parameters,docs:{...(X=v.parameters)==null?void 0:X.docs,source:{originalSource:`{
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
}`,...(ee=(Z=v.parameters)==null?void 0:Z.docs)==null?void 0:ee.source}}};const xe=["Preview","MenuState","MenuIconsCommands","MenuGroup","MenuLink","MenuOptionGroups"],Le=Object.freeze(Object.defineProperty({__proto__:null,MenuGroup:g,MenuIconsCommands:j,MenuLink:I,MenuOptionGroups:v,MenuState:b,Preview:x,__namedExportsOrder:xe,default:fe},Symbol.toStringTag,{value:"Module"}));export{Le as M,x as P,b as a,j as b,g as c,I as d,v as e};
