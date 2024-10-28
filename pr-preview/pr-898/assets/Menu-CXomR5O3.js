import{j as e}from"./extends-CwFRzn3r.js";import{useMDXComponents as s}from"./index-DlpNa54Y.js";import{ae as a,ah as o,ai as i,ag as M}from"./index-C3Ws-Y_S.js";import{M as d,P as m,a as c,b as l,c as x,d as I,e as h}from"./Menu.stories-Dtefl131.js";import{C as r,a as u}from"./Card-CjsZQyOM.js";import"./index-BwDkhjyp.js";import"./_commonjsHelpers-BosuxZz1.js";import"./iframe-IW80Hv2E.js";import"../sb-preview/runtime.js";import"./index-CS4BWtGh.js";import"./index-D-8MO0q_.js";import"./assertThisInitialized-DSoh8oXT.js";import"./inheritsLoose-B6jfs0L0.js";import"./setPrototypeOf-DgZC2w_0.js";import"./index-DF3CPj03.js";import"./index-DrFu-skq.js";import"./menu-icon-DwaPw1FY.js";import"./use-descendant-T3UBTUZf.js";import"./context-CBKykClo.js";import"./use-merge-refs-Bdxaq0s4.js";import"./use-popper-DwNTykfS.js";import"./use-clickable-BhnFrcNk.js";import"./attr-sHTFgF0E.js";import"./use-disclosure-CdGn7wGE.js";import"./use-callback-ref-DA6UG1mJ.js";import"./use-outside-click-DJDnsvpj.js";import"./use-focus-effect-BY0uqI8l.js";import"./use-event-listener-DbiM-QVt.js";import"./owner-DF4q1r8F.js";import"./is-element-C52yPwBl.js";import"./use-safe-layout-effect-BnICyLBj.js";import"./use-update-effect-CNg9DBIF.js";import"./focusable-crJ8ziAt.js";import"./call-all-DDzecCnU.js";import"./lazy-DLVTVQVU.js";import"./use-controllable-state-Dnial3e2.js";import"./children-2ZXUntH3.js";import"./use-theme-CBfqdygA.js";import"./emotion-styled.browser.esm-NI0tOKWg.js";import"./use-style-config-C4sZEIFb.js";import"./omit-QLD0Eizt.js";import"./index-CfyPTyT-.js";import"./hooks-CUXMK5kD.js";import"./factory-lWLPzty5.js";import"./cx-BDMMs1jM.js";import"./forward-ref-BWI-Phbn.js";import"./proxy-NyFW0ziH.js";import"./Button-CdMzSscO.js";import"./button-lwGmIUkK.js";import"./spinner-CCN1jjNR.js";import"./emotion-react.browser.esm-Hqbkbmab.js";import"./define-styles-BSAHv3yx.js";import"./center-Bg6uA6YZ.js";import"./h-stack-ecaAvnDk.js";import"./stack-C3a7yBZW.js";import"./responsive-BbUtuhhZ.js";import"./Icon-C4cZvZqq.js";/* empty css              */import"./box-Cs-tJ6EH.js";import"./IconButton-CKWqchJT.js";import"./providers-BQbExJqd.js";import"./calc-tjRj3nBR.js";import"./css-var-DE0-P1bc.js";import"./pick-DBnSFT3T.js";const j=`
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
`;function p(t){const n={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...s(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(a,{of:d}),`
`,e.jsx(n.h1,{id:"menu",children:"Menu"}),`
`,e.jsx(n.p,{children:"Menu er en dropdown-meny for det vanlige dropdown menu button designmønsteret. Den bruker roving tabIndex for fokus. Det er mulig å søke i MenuItems ved å bruke tastaturet."}),`
`,e.jsx(n.h2,{id:"ta-i-bruk",children:"Ta i bruk"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-jsx",children:`import { Menu, MenuButton, MenuList, MenuItem, MenuItemOption, MenuGroup, MenuOptionGr } from "@kvib/react";
`})}),`
`,e.jsx(n.h2,{id:"props",children:"Props"}),`
`,e.jsx(r,{variant:"outline",borderRadius:"0",children:e.jsx(u,{children:e.jsx(o,{of:m})})}),`
`,e.jsx(i,{code:j,dark:!0}),`
`,e.jsx(M,{of:m}),`
`,e.jsx(n.h2,{id:"internal-state",children:"Internal state"}),`
`,e.jsx(r,{variant:"outline",borderRadius:"0",children:e.jsx(u,{children:e.jsx(o,{of:c})})}),`
`,e.jsx(i,{code:k,dark:!0}),`
`,e.jsx(n.h2,{id:"ikoner-og-kommandoer",children:"Ikoner og kommandoer"}),`
`,e.jsx(r,{variant:"outline",borderRadius:"0",children:e.jsx(u,{children:e.jsx(o,{of:l})})}),`
`,e.jsx(i,{code:f,dark:!0}),`
`,e.jsx(n.h2,{id:"menugroup",children:"MenuGroup"}),`
`,e.jsx(r,{variant:"outline",borderRadius:"0",children:e.jsx(u,{children:e.jsx(o,{of:x})})}),`
`,e.jsx(i,{code:g,dark:!0}),`
`,e.jsx(n.h2,{id:"menuitem-med-link",children:"MenuItem med link"}),`
`,e.jsx(r,{variant:"outline",borderRadius:"0",children:e.jsx(u,{children:e.jsx(o,{of:I})})}),`
`,e.jsx(i,{code:B,dark:!0}),`
`,e.jsx(n.h2,{id:"menu-option-groups",children:"Menu option groups"}),`
`,e.jsx(r,{variant:"outline",borderRadius:"0",children:e.jsx(u,{children:e.jsx(o,{of:h})})}),`
`,e.jsx(i,{code:O,dark:!0})]})}function Ne(t={}){const{wrapper:n}={...s(),...t.components};return n?e.jsx(n,{...t,children:e.jsx(p,{...t})}):p(t)}export{Ne as default};
