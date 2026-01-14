import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{ae as r,af as x,ag as t}from"./index-DEVjdq2o.js";import{T as k,a as f,b as a}from"./tabs-BQpyEPWP.js";const B={title:"Komponenter/Header",component:r,parameters:{layout:"fullscreen",docs:{story:{inline:!0}},a11y:{disable:!0}},argTypes:{justifyContent:{table:{type:{summary:"start | center | space-between"},defaultValue:{summary:"space-between"}},options:["start","center","space-between"],control:{type:"radio"}},logoLinkDisabled:{table:{type:{summary:"boolean"},defaultValue:{summary:"false"}},control:"boolean"},logoLink:{table:{type:{summary:"string"},defaultValue:{summary:"/"}},control:"text"},logoLinkProps:{table:{summary:"object"},defaultValue:{summary:void 0}},logoAltText:{table:{type:{summary:"string"}},control:"text"},title:{table:{type:{summary:"string"},defaultValue:{summary:void 0}},control:"text"},titleLink:{table:{type:{summary:"string"},defaultValue:{summary:void 0}},control:"text"},collapseBreakpoint:{table:{type:{summary:"sm | md | lg"},defaultValue:{summary:"sm"}},options:["sm","md","lg"],control:{type:"radio"}},showMenuButton:{table:{type:{summary:"boolean"},defaultValue:{summary:void 0}},control:"boolean",description:"If set, overrides the automatic logic for showing the menu button. When undefined, the menu button visibility is determined automatically based on menuContent, tabBarContent, and screen size."},gap:{table:{type:{summary:"number"},defaultValue:{summary:"90"}},control:"number"},logoVariant:{table:{type:{summary:"horizontal | vertical | symbol"},defaultValue:{summary:"horizontal"}},options:["horizontal","vertical","symbol"],control:{type:"radio"}},contentMaxWidth:{table:{type:{summary:"string | number"},defaultValue:{summary:"1140px"}},control:"text"},menuContent:{table:{type:{summary:"React.ReactNode"},defaultValue:{summary:void 0}},description:"Custom content to be displayed in the opened menu. Shows as a side drawer on large screens (unless tabBarContent is provided) and as a collapsible dropdown on small screens. When both menuContent and tabBarContent are defined, menuContent takes priority on small screens."},tabBarContent:{table:{type:{summary:"React.ReactNode"},defaultValue:{summary:void 0}},description:"Content to be displayed as a tab bar attached to the bottom of the header. Shows on all screen sizes when menuContent is not defined. When both are defined, tabBarContent shows on large screens and menuContent shows on small screens."}},args:{onMenuButtonClick:void 0}};r.displayName="Header";const o={args:{logoAltText:"Kartverket-logo"},render:n=>e.jsx(r,{...n})},s={args:{logoAltText:"Kartverket-logo",tabBarContent:e.jsx(k,{defaultValue:"hjem",width:"full",colorPalette:"green",children:e.jsxs(f,{style:{borderBottomWidth:0},children:[e.jsx(a,{value:"hjem",children:"Hjem"}),e.jsx(a,{value:"tjenester",children:"Tjenester"}),e.jsx(a,{value:"om",children:"Om oss"}),e.jsx(a,{value:"kontakt",children:"Kontakt"})]})}),menuContent:e.jsxs(x,{gap:2,width:"100%",children:[e.jsx(t,{value:"hjem",variant:"plain",children:"Hjem"}),e.jsx(t,{value:"tjenester",variant:"plain",children:"Tjenester"}),e.jsx(t,{value:"om",variant:"plain",children:"Om oss"}),e.jsx(t,{value:"kontakt",variant:"plain",children:"Kontakt"})]})},render:n=>e.jsx(r,{...n})},l={args:{logoAltText:"Kartverket-logo",tabBarContent:e.jsx(k,{defaultValue:"hjem",width:"full",colorPalette:"green",children:e.jsxs(f,{style:{borderBottomWidth:0},children:[e.jsx(a,{value:"hjem",children:"Hjem"}),e.jsx(a,{value:"tjenester",children:"Tjenester"}),e.jsx(a,{value:"om",children:"Om oss"}),e.jsx(a,{value:"kontakt",children:"Kontakt"})]})})},render:n=>e.jsx(r,{...n})},i={args:{logoAltText:"Kartverket-logo",menuContent:e.jsxs(x,{gap:2,width:"100%",children:[e.jsx(t,{value:"hjem",variant:"plain",children:"Hjem"}),e.jsx(t,{value:"tjenester",variant:"plain",children:"Tjenester"}),e.jsx(t,{value:"om",variant:"plain",children:"Om oss"}),e.jsx(t,{value:"kontakt",variant:"plain",children:"Kontakt"})]})},render:n=>e.jsx(r,{...n})};var u,m,d;o.parameters={...o.parameters,docs:{...(u=o.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    logoAltText: "Kartverket-logo"
  },
  render: args => <KvibHeader {...args} />
}`,...(d=(m=o.parameters)==null?void 0:m.docs)==null?void 0:d.source}}};var c,g,b;s.parameters={...s.parameters,docs:{...(c=s.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    logoAltText: "Kartverket-logo",
    tabBarContent: <Tabs defaultValue="hjem" width="full" colorPalette="green">
        <TabsList style={{
        borderBottomWidth: 0
      }}>
          <TabsTrigger value="hjem">Hjem</TabsTrigger>
          <TabsTrigger value="tjenester">Tjenester</TabsTrigger>
          <TabsTrigger value="om">Om oss</TabsTrigger>
          <TabsTrigger value="kontakt">Kontakt</TabsTrigger>
        </TabsList>
      </Tabs>,
    menuContent: <VStack gap={2} width="100%">
        <Button value="hjem" variant="plain">
          Hjem
        </Button>
        <Button value="tjenester" variant="plain">
          Tjenester
        </Button>
        <Button value="om" variant="plain">
          Om oss
        </Button>
        <Button value="kontakt" variant="plain">
          Kontakt
        </Button>
      </VStack>
  },
  render: args => <KvibHeader {...args} />
}`,...(b=(g=s.parameters)==null?void 0:g.docs)==null?void 0:b.source}}};var p,h,v;l.parameters={...l.parameters,docs:{...(p=l.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    logoAltText: "Kartverket-logo",
    tabBarContent: <Tabs defaultValue="hjem" width="full" colorPalette="green">
        <TabsList style={{
        borderBottomWidth: 0
      }}>
          <TabsTrigger value="hjem">Hjem</TabsTrigger>
          <TabsTrigger value="tjenester">Tjenester</TabsTrigger>
          <TabsTrigger value="om">Om oss</TabsTrigger>
          <TabsTrigger value="kontakt">Kontakt</TabsTrigger>
        </TabsList>
      </Tabs>
  },
  render: args => <KvibHeader {...args} />
}`,...(v=(h=l.parameters)==null?void 0:h.docs)==null?void 0:v.source}}};var j,T,y;i.parameters={...i.parameters,docs:{...(j=i.parameters)==null?void 0:j.docs,source:{originalSource:`{
  args: {
    logoAltText: "Kartverket-logo",
    menuContent: <VStack gap={2} width="100%">
        <Button value="hjem" variant="plain">
          Hjem
        </Button>
        <Button value="tjenester" variant="plain">
          Tjenester
        </Button>
        <Button value="om" variant="plain">
          Om oss
        </Button>
        <Button value="kontakt" variant="plain">
          Kontakt
        </Button>
      </VStack>
  },
  render: args => <KvibHeader {...args} />
}`,...(y=(T=i.parameters)==null?void 0:T.docs)==null?void 0:y.source}}};const C=["Preview","WithTabBarAndMenu","WithTabBarWithoutMenu","WithMenu"],H=Object.freeze(Object.defineProperty({__proto__:null,Preview:o,WithMenu:i,WithTabBarAndMenu:s,WithTabBarWithoutMenu:l,__namedExportsOrder:C,default:B},Symbol.toStringTag,{value:"Module"}));export{H,o as P};
