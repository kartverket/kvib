import{j as e}from"./extends-CwFRzn3r.js";import{useMDXComponents as p}from"./index-DlpNa54Y.js";import{ae as M,ah as o,ai as i,ag as a}from"./index-k-h-8Dss.js";import{M as d,a as m,b as c,c as l,d as x,e as I,f as h}from"./Menu.stories-CogxlfoZ.js";import{C as u,a as r}from"./Card-Bn7RuWsc.js";import"./index-BwDkhjyp.js";import"./_commonjsHelpers-BosuxZz1.js";import"./iframe-DKUcOLmC.js";import"../sb-preview/runtime.js";import"./index-Dn0f7ynd.js";import"./index-D-8MO0q_.js";import"./isNativeReflectConstruct-lfp1ZYuW.js";import"./inheritsLoose-B6jfs0L0.js";import"./setPrototypeOf-DgZC2w_0.js";import"./index-DF3CPj03.js";import"./index-DrFu-skq.js";import"./chunk-HB6KBUMZ-DAMCVtVo.js";import"./chunk-AXLEE3EK-Dar5GxVZ.js";import"./chunk-ZJJGQIVY-Dk0gAx5w.js";import"./index-Bdxaq0s4.js";import"./chunk-OCNORRQU-DESonMht.js";import"./index-CHDWSgKD.js";import"./index-DUHZmgZA.js";import"./index-yX8pBrvj.js";import"./chunk-3XANSPY5-CEuNXLts.js";import"./index-Bvkiv1cC.js";import"./index-DdaX-njP.js";import"./index-DJS8qWMq.js";import"./index-DEiKcbOK.js";import"./chunk-LUYFNC5G-DV8XJogC.js";import"./index-DOEX-ehf.js";import"./index-2ZXUntH3.js";import"./index-DjrpCY14.js";import"./index-DLVTVQVU.js";import"./chunk-DMO4EI7P-CbM7tafX.js";import"./chunk-7FWEOSAE-BgGQS5yP.js";import"./chunk-UIGT7YZF-BZ8OOi_0.js";import"./proxy-CzVOQe18.js";import"./chunk-PULVB27S-BbQOsZmk.js";import"./Button-ld38lsZs.js";import"./chunk-UVUR7MCU-CDviNqUv.js";import"./chunk-5PH6ULNP-DjlYY-Z2.js";import"./emotion-react.browser.esm-5ppwkrPI.js";import"./chunk-FAWTVNS3-h_p2ezMN.js";import"./chunk-3ASUQ6PA-BRAByO3y.js";import"./chunk-ZHMYA64R-DVnaPXQt.js";import"./chunk-G72KV6MB-CW_g5wqE.js";import"./Icon-CPAF9xaH.js";/* empty css              */import"./IconButton-DwkEjBtS.js";import"./chunk-MFVQSVQB-CVs57b_v.js";const j=`
<Box h="60">
  <Menu>
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
  </Menu>
</Box>
`,k=`
<Box h="40">
  <Menu>
    {({ isOpen }) => (
      <>
        <MenuButton as={Button} rightIcon={"expand_more"}>
          {isOpen ? "Lukk" : "Åpne"}
        </MenuButton>
        <MenuList>
          <MenuItem>Nedlast</MenuItem>
          <MenuItem onClick={() => alert("Kopi")}>Lag en kopi</MenuItem>
        </MenuList>
      </>
    )}
  </Menu>
</Box>
`,f=`
<Box h="40">
  <Menu>
    <MenuButton as={IconButton} aria-label="Options" icon={"menu"} variant="outline" />
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
  </Menu>
</Box>
`,g=`
<Box h="60">
  <Menu>
    <MenuButton as={Button} colorScheme="green">
      Profil
    </MenuButton>
    <MenuList>
      <MenuGroup title="Profil">
        <MenuItem>Min konto</MenuItem>
        <MenuItem>Betaling</MenuItem>
      </MenuGroup>
      <MenuDivider />
      <MenuGroup title="Hjelp">
        <MenuItem>Dokumentasjon</MenuItem>
        <MenuItem>FAQ</MenuItem>
      </MenuGroup>
    </MenuList>
  </Menu>
</Box>
`,B=`
<Box h="20">
  <Menu>
    <MenuButton>Åpne meny</MenuButton>
    <MenuList>
      <MenuItem as="a" href="#">
        Link 1
      </MenuItem>
      <MenuItem as="a" href="#">
        Link 2
      </MenuItem>
    </MenuList>
  </Menu>
</Box>
`,O=`
<Box h="80">
  <Menu closeOnSelect={false}>
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
  </Menu>
</Box>
`;function s(t){const n={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...p(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(M,{of:d}),`
`,e.jsx(n.h1,{id:"menu",children:"Menu"}),`
`,e.jsx(n.p,{children:"Menu er en dropdown-meny for det vanlige dropdown menu button designmønsteret. Den bruker roving tabIndex for fokus. Det er mulig å søke i MenuItems ved å bruke tastaturet."}),`
`,e.jsx(n.h2,{id:"ta-i-bruk",children:"Ta i bruk"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-jsx",children:`import { Menu, MenuButton, MenuList, MenuItem, MenuItemOption, MenuGroup, MenuOptionGr } from "@kvib/react";
`})}),`
`,e.jsx(n.h2,{id:"props",children:"Props"}),`
`,e.jsx(u,{variant:"outline",borderRadius:"0",children:e.jsx(r,{children:e.jsx(o,{of:m})})}),`
`,e.jsx(i,{code:j,dark:!0}),`
`,e.jsx(a,{of:m}),`
`,e.jsx(n.h2,{id:"internal-state",children:"Internal state"}),`
`,e.jsx(u,{variant:"outline",borderRadius:"0",children:e.jsx(r,{children:e.jsx(o,{of:c})})}),`
`,e.jsx(i,{code:k,dark:!0}),`
`,e.jsx(n.h2,{id:"ikoner-og-kommandoer",children:"Ikoner og kommandoer"}),`
`,e.jsx(u,{variant:"outline",borderRadius:"0",children:e.jsx(r,{children:e.jsx(o,{of:l})})}),`
`,e.jsx(i,{code:f,dark:!0}),`
`,e.jsx(n.h2,{id:"menugroup",children:"MenuGroup"}),`
`,e.jsx(u,{variant:"outline",borderRadius:"0",children:e.jsx(r,{children:e.jsx(o,{of:x})})}),`
`,e.jsx(i,{code:g,dark:!0}),`
`,e.jsx(n.h2,{id:"menuitem-med-link",children:"MenuItem med link"}),`
`,e.jsx(u,{variant:"outline",borderRadius:"0",children:e.jsx(r,{children:e.jsx(o,{of:I})})}),`
`,e.jsx(i,{code:B,dark:!0}),`
`,e.jsx(n.h2,{id:"menu-option-groups",children:"Menu option groups"}),`
`,e.jsx(u,{variant:"outline",borderRadius:"0",children:e.jsx(r,{children:e.jsx(o,{of:h})})}),`
`,e.jsx(i,{code:O,dark:!0})]})}function ge(t={}){const{wrapper:n}={...p(),...t.components};return n?e.jsx(n,{...t,children:e.jsx(s,{...t})}):s(t)}export{ge as default};
