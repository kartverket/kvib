import{j as e}from"./extends-CwFRzn3r.js";import{H as a}from"./Header-CZgueE9f.js";import{H as P}from"./chunk-7OLJDQMT-lazN81OQ.js";import{S as o}from"./Search-Cz41gYwx.js";import{T as J,a as R,b as p}from"./Tabs-Dcwwa5RE.js";import{S as $}from"./chunk-ZHMYA64R-V_96TD_T.js";import{H as N}from"./chunk-3ASUQ6PA-DZH9lOZq.js";import{B as Q}from"./chunk-PULVB27S-CgiffgmI.js";import{S as U}from"./SearchAsync-Bql4y0VF.js";import{I as X}from"./Icon-CERCJRn_.js";import{c as Y}from"./colors-BRrPfCdD.js";const Z={title:"Sideelementer/Header",component:a,parameters:{docs:{story:{inline:!0},canvas:{sourceState:"shown"}},a11y:{disable:!0}},argTypes:{justifyContent:{table:{type:{summary:"start | center | space-between"},defaultValue:{summary:"space-between"}},options:["start","center","space-between"],control:{type:"radio"}},logoLinkDisabled:{table:{type:{summary:"boolean"},defaultValue:{summary:!1}},control:"boolean"},logoLink:{table:{type:{summary:"string"},defaultValue:{summary:"/"}},control:"text"},logoLinkProps:{table:{summary:"object"},defaultValue:{summary:void 0}},showMenuButton:{table:{type:{summary:"boolean"},defaultValue:{summary:!1}},control:"boolean"},showChildrenInMenu:{table:{type:{summary:"boolean"},defaultValue:{summary:!0}},control:"boolean"},collapseBreakpoint:{table:{type:{summary:"sm | md | lg"},defaultValue:{summary:"sm"}},options:["sm","md","lg"],control:{type:"radio"}},gap:{table:{type:{summary:"number"},defaultValue:{summary:90}},control:"number"},logoVariant:{table:{type:{summary:"horizontal | vertical"},defaultValue:{summary:"horizontal"}},options:["horizontal","vertical"],control:{type:"radio"}}},args:{onMenuButtonClick:void 0}},ee=[{label:"Eple",value:"eple"},{label:"Banan",value:"banan"},{label:"Kirsebær",value:"kirsebær"},{label:"Pære",value:"pære"},{label:"Svarthyll",value:"svarthyll"}],re=(r,g)=>{setTimeout(()=>{const q=ee.filter(G=>G.label.toLowerCase().includes(r.toLowerCase()));g(q)},500)},t={args:{logoAltText:"Kartverket Logo"},render:r=>e.jsx(a,{...r})},n={args:{justifyContent:"space-between",onMenuButtonClick:void 0,gap:50,collapseBreakpoint:"md",logoAltText:"Kartverket Logo"},render:r=>e.jsxs(a,{...r,children:[e.jsx(P,{size:"md",children:"Eiendom"}),e.jsx(o,{bgColor:"white",maxWidth:400,placeholder:"Søk her..."}),e.jsx(J,{colorScheme:"blue",size:"md",children:e.jsxs(R,{children:[e.jsx(p,{w:90,children:"Fane 1"}),e.jsx(p,{w:90,children:"Fane 2"})]})})]})},s={args:{logoAltText:"Kartverket Logo"},render:r=>e.jsxs($,{children:[e.jsx(a,{...r,justifyContent:"center",children:e.jsx(o,{bgColor:"white",maxWidth:400,placeholder:"Søk her..."})}),e.jsx(a,{...r,justifyContent:"space-between",children:e.jsx(o,{bgColor:"white",maxWidth:400,placeholder:"Søk her..."})}),e.jsx(a,{...r,justifyContent:"start",children:e.jsx(o,{bgColor:"white",maxWidth:400,placeholder:"Søk her..."})})]})},l={args:{logoLink:"https://design.kartverket.no",logoAltText:"Kartverket Logo",dropdownMenuChildren:e.jsxs(N,{wrap:"wrap",align:"center",justify:"center",gap:"10",children:[e.jsx(o,{maxWidth:400,bgColor:"white",placeholder:"Søk her..."}),e.jsx(J,{colorScheme:"blue",size:"md",children:e.jsxs(R,{children:[e.jsx(p,{children:"Første fane"}),e.jsx(p,{children:"Andre fane"})]})})]}),showMenuButton:!0,onMenuButtonClick:void 0,showChildrenInMenu:!1},render:r=>e.jsx(a,{...r,children:e.jsx(P,{size:"md",children:"Eiendom"})})},i={args:{justifyContent:"center",logoAltText:"Kartverket Logo"},render:r=>e.jsxs($,{children:[e.jsx(a,{...r,collapseBreakpoint:"sm",children:e.jsx(o,{bgColor:"white",maxWidth:400,placeholder:"Søk her..."})}),e.jsx(a,{...r,collapseBreakpoint:"md",children:e.jsx(o,{bgColor:"white",maxWidth:400,placeholder:"Søk her..."})}),e.jsx(a,{...r,collapseBreakpoint:"lg",children:e.jsx(o,{bgColor:"white",maxWidth:400,placeholder:"Søk her..."})})]})},d={args:{logoAltText:"Kartverket Logo"},render:r=>e.jsx(a,{...r,children:e.jsx(Q,{width:300,children:e.jsx(U,{placeholder:"Søk etter frukt",loadOptions:re,onChange:g=>{console.log("Selected Option:",g)},size:"md",dropdownIndicator:e.jsx(X,{icon:"search",weight:500,color:Y.green[500]}),"aria-label":"search async"})})})},c={args:{logoLink:"https://design.kartverket.no",logoAltText:"Kartverket Logo"},render:r=>e.jsx(a,{...r})},m={args:{logoVariant:"vertical",logoAltText:"Kartverket Logo"},render:r=>e.jsx(a,{...r})},h={args:{logoLinkDisabled:!0},render:r=>e.jsx(a,{...r})};var u,b,k;t.parameters={...t.parameters,docs:{...(u=t.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    logoAltText: "Kartverket Logo"
  },
  render: args => <KvibHeader {...args} />
}`,...(k=(b=t.parameters)==null?void 0:b.docs)==null?void 0:k.source}}};var x,S,v;n.parameters={...n.parameters,docs:{...(x=n.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    justifyContent: "space-between",
    onMenuButtonClick: undefined,
    gap: 50,
    collapseBreakpoint: "md",
    logoAltText: "Kartverket Logo"
  },
  render: args => <KvibHeader {...args}>
      <Heading size="md">Eiendom</Heading>
      <Search bgColor="white" maxWidth={400} placeholder="Søk her..."></Search>
      <Tabs colorScheme="blue" size="md">
        <TabList>
          <Tab w={90}>Fane 1</Tab>
          <Tab w={90}>Fane 2</Tab>
        </TabList>
      </Tabs>
    </KvibHeader>
}`,...(v=(S=n.parameters)==null?void 0:S.docs)==null?void 0:v.source}}};var y,j,H;s.parameters={...s.parameters,docs:{...(y=s.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    logoAltText: "Kartverket Logo"
  },
  render: args => <Stack>
      <KvibHeader {...args} justifyContent="center">
        <Search bgColor="white" maxWidth={400} placeholder="Søk her..."></Search>
      </KvibHeader>
      <KvibHeader {...args} justifyContent="space-between">
        <Search bgColor="white" maxWidth={400} placeholder="Søk her..."></Search>
      </KvibHeader>
      <KvibHeader {...args} justifyContent="start">
        <Search bgColor="white" maxWidth={400} placeholder="Søk her..."></Search>
      </KvibHeader>
    </Stack>
}`,...(H=(j=s.parameters)==null?void 0:j.docs)==null?void 0:H.source}}};var f,w,C;l.parameters={...l.parameters,docs:{...(f=l.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    logoLink: "https://design.kartverket.no",
    logoAltText: "Kartverket Logo",
    dropdownMenuChildren: <HStack wrap="wrap" align="center" justify="center" gap="10">
        <Search maxWidth={400} bgColor="white" placeholder="Søk her..."></Search>
        <Tabs colorScheme="blue" size="md">
          <TabList>
            <Tab>Første fane</Tab>
            <Tab>Andre fane</Tab>
          </TabList>
        </Tabs>
      </HStack>,
    showMenuButton: true,
    onMenuButtonClick: undefined,
    showChildrenInMenu: false
  },
  render: args => <KvibHeader {...args}>
      <Heading size="md">Eiendom</Heading>
    </KvibHeader>
}`,...(C=(w=l.parameters)==null?void 0:w.docs)==null?void 0:C.source}}};var L,K,T;i.parameters={...i.parameters,docs:{...(L=i.parameters)==null?void 0:L.docs,source:{originalSource:`{
  args: {
    justifyContent: "center",
    logoAltText: "Kartverket Logo"
  },
  render: args => <Stack>
      <KvibHeader {...args} collapseBreakpoint="sm">
        <Search bgColor="white" maxWidth={400} placeholder="Søk her..."></Search>
      </KvibHeader>
      <KvibHeader {...args} collapseBreakpoint="md">
        <Search bgColor="white" maxWidth={400} placeholder="Søk her..."></Search>
      </KvibHeader>
      <KvibHeader {...args} collapseBreakpoint="lg">
        <Search bgColor="white" maxWidth={400} placeholder="Søk her..."></Search>
      </KvibHeader>
    </Stack>
}`,...(T=(K=i.parameters)==null?void 0:K.docs)==null?void 0:T.source}}};var B,A,W;d.parameters={...d.parameters,docs:{...(B=d.parameters)==null?void 0:B.docs,source:{originalSource:`{
  args: {
    logoAltText: "Kartverket Logo"
  },
  render: args => <KvibHeader {...args}>
      <Box width={300}>
        <SearchAsync placeholder={"Søk etter frukt"} loadOptions={mockLoadOptions} onChange={(selectedOption: any) => {
        console.log("Selected Option:", selectedOption);
      }} size="md" dropdownIndicator={<Icon icon="search" weight={500} color={colors.green[500]} />} aria-label="search async" />
      </Box>
    </KvibHeader>
}`,...(W=(A=d.parameters)==null?void 0:A.docs)==null?void 0:W.source}}};var z,M,V;c.parameters={...c.parameters,docs:{...(z=c.parameters)==null?void 0:z.docs,source:{originalSource:`{
  args: {
    logoLink: "https://design.kartverket.no",
    logoAltText: "Kartverket Logo"
  },
  render: args => <KvibHeader {...args} />
}`,...(V=(M=c.parameters)==null?void 0:M.docs)==null?void 0:V.source}}};var O,E,I;m.parameters={...m.parameters,docs:{...(O=m.parameters)==null?void 0:O.docs,source:{originalSource:`{
  args: {
    logoVariant: "vertical",
    logoAltText: "Kartverket Logo"
  },
  render: args => <KvibHeader {...args} />
}`,...(I=(E=m.parameters)==null?void 0:E.docs)==null?void 0:I.source}}};var F,_,D;h.parameters={...h.parameters,docs:{...(F=h.parameters)==null?void 0:F.docs,source:{originalSource:`{
  args: {
    logoLinkDisabled: true
  },
  render: args => <KvibHeader {...args} />
}`,...(D=(_=h.parameters)==null?void 0:_.docs)==null?void 0:D.source}}};const ae=["Header","HeaderElements","HeaderJustifyContent","HeaderDropdownChildren","HeaderBreakpoint","HeaderSearchAsync","HeaderLogoButton","HeaderLogoVariant","HeaderWithoutLink"],ge=Object.freeze(Object.defineProperty({__proto__:null,Header:t,HeaderBreakpoint:i,HeaderDropdownChildren:l,HeaderElements:n,HeaderJustifyContent:s,HeaderLogoButton:c,HeaderLogoVariant:m,HeaderSearchAsync:d,HeaderWithoutLink:h,__namedExportsOrder:ae,default:Z},Symbol.toStringTag,{value:"Module"}));export{ge as H,n as a,s as b,i as c,l as d,d as e,c as f,m as g,h,t as i};
