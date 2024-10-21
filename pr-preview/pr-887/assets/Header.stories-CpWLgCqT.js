import{j as e}from"./extends-CwFRzn3r.js";import{H as a}from"./Header-CWsTIK5L.js";import{T as D,a as J,b as g}from"./Tabs-BvJKGxy4.js";import{H as R}from"./heading--NES2npU.js";import{S as u}from"./Search-DDckL6cm.js";import{S as q}from"./stack-REYSnkee.js";import{H as Q}from"./h-stack-BA5VzuBF.js";import{B as U}from"./box-DeqT4ixr.js";import{S as X}from"./SearchAsync-BhjNGOB3.js";import{I as Y}from"./Icon-YKyBU4O5.js";import{c as Z}from"./colors-BRrPfCdD.js";const $={title:"Sideelementer/Header",component:a,parameters:{docs:{story:{inline:!0},canvas:{sourceState:"shown"}},a11y:{disable:!0}},argTypes:{justifyContent:{table:{type:{summary:"start | center | space-between"},defaultValue:{summary:"space-between"}},options:["start","center","space-between"],control:{type:"radio"}},logoLinkDisabled:{table:{type:{summary:"boolean"},defaultValue:{summary:!1}},control:"boolean"},logoLink:{table:{type:{summary:"string"},defaultValue:{summary:"/"}},control:"text"},logoLinkProps:{table:{summary:"object"},defaultValue:{summary:void 0}},showMenuButton:{table:{type:{summary:"boolean"},defaultValue:{summary:"false"}},control:"boolean"},showChildrenInMenu:{table:{type:{summary:"boolean"},defaultValue:{summary:"true"}},control:"boolean"},collapseBreakpoint:{table:{type:{summary:"sm | md | lg"},defaultValue:{summary:"sm"}},options:["sm","md","lg"],control:{type:"radio"}},gap:{table:{type:{summary:"number"},defaultValue:{summary:"90"}},control:"number"},logoVariant:{table:{type:{summary:"horizontal | vertical"},defaultValue:{summary:"horizontal"}},options:["horizontal","vertical"],control:{type:"radio"}}},args:{onMenuButtonClick:void 0}},ee=[{label:"Eple",value:"eple"},{label:"Banan",value:"banan"},{label:"Kirsebær",value:"kirsebær"},{label:"Pære",value:"pære"},{label:"Svarthyll",value:"svarthyll"}],re=(r,p)=>{setTimeout(()=>{const G=ee.filter(N=>N.label.toLowerCase().includes(r.toLowerCase()));p(G)},500)},o={args:{logoAltText:"Kartverket Logo"},render:r=>e.jsx(a,{...r})},t={args:{justifyContent:"space-between",onMenuButtonClick:void 0,gap:50,collapseBreakpoint:"md",logoAltText:"Kartverket Logo"},render:r=>e.jsxs(a,{...r,children:[e.jsx(R,{size:"md",children:"Eiendom"}),e.jsx(u,{bgColor:"white",maxWidth:400,placeholder:"Søk her..."}),e.jsx(D,{colorScheme:"blue",size:"md",children:e.jsxs(J,{children:[e.jsx(g,{w:90,children:"Fane 1"}),e.jsx(g,{w:90,children:"Fane 2"})]})})]})},n={args:{logoAltText:"Kartverket Logo"},render:r=>e.jsx(q,{children:e.jsx(a,{...r,justifyContent:"center",children:e.jsx(u,{bgColor:"white",maxWidth:400,placeholder:"Søk her..."})})})},s={args:{logoLink:"https://design.kartverket.no",logoAltText:"Kartverket Logo",dropdownMenuChildren:e.jsxs(Q,{wrap:"wrap",align:"center",justify:"center",gap:"10",children:[e.jsx(u,{maxWidth:400,bgColor:"white",placeholder:"Søk her..."}),e.jsx(D,{colorScheme:"blue",size:"md",children:e.jsxs(J,{children:[e.jsx(g,{children:"Første fane"}),e.jsx(g,{children:"Andre fane"})]})})]}),showMenuButton:!0,onMenuButtonClick:void 0,showChildrenInMenu:!1},render:r=>e.jsx(a,{...r,children:e.jsx(R,{size:"md",children:"Eiendom"})})},l={args:{justifyContent:"center",logoAltText:"Kartverket Logo"},render:r=>e.jsx(q,{children:e.jsx(a,{...r,collapseBreakpoint:"sm",children:e.jsx(u,{bgColor:"white",maxWidth:400,placeholder:"Søk her..."})})})},i={args:{logoAltText:"Kartverket Logo"},render:r=>e.jsx(a,{...r,children:e.jsx(U,{width:300,children:e.jsx(X,{placeholder:"Søk etter frukt",loadOptions:re,onChange:p=>{console.log("Selected Option:",p)},size:"md",dropdownIndicator:e.jsx(Y,{icon:"search",weight:500,color:Z.green[500]}),"aria-label":"search async"})})})},d={args:{logoLink:"https://design.kartverket.no",logoAltText:"Kartverket Logo"},render:r=>e.jsx(a,{...r})},c={args:{logoVariant:"vertical",logoAltText:"Kartverket Logo"},render:r=>e.jsx(a,{...r})},m={args:{logoLinkDisabled:!0},render:r=>e.jsx(a,{...r})};var h,b,k;o.parameters={...o.parameters,docs:{...(h=o.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    logoAltText: "Kartverket Logo"
  },
  render: args => <KvibHeader {...args} />
}`,...(k=(b=o.parameters)==null?void 0:b.docs)==null?void 0:k.source}}};var x,S,y;t.parameters={...t.parameters,docs:{...(x=t.parameters)==null?void 0:x.docs,source:{originalSource:`{
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
}`,...(y=(S=t.parameters)==null?void 0:S.docs)==null?void 0:y.source}}};var v,f,H;n.parameters={...n.parameters,docs:{...(v=n.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    logoAltText: "Kartverket Logo"
  },
  render: args => <Stack>
      <KvibHeader {...args} justifyContent="center">
        <Search bgColor="white" maxWidth={400} placeholder="Søk her..."></Search>
      </KvibHeader>
    </Stack>
}`,...(H=(f=n.parameters)==null?void 0:f.docs)==null?void 0:H.source}}};var j,w,L;s.parameters={...s.parameters,docs:{...(j=s.parameters)==null?void 0:j.docs,source:{originalSource:`{
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
}`,...(L=(w=s.parameters)==null?void 0:w.docs)==null?void 0:L.source}}};var T,C,K;l.parameters={...l.parameters,docs:{...(T=l.parameters)==null?void 0:T.docs,source:{originalSource:`{
  args: {
    justifyContent: "center",
    logoAltText: "Kartverket Logo"
  },
  render: args => <Stack>
      <KvibHeader {...args} collapseBreakpoint="sm">
        <Search bgColor="white" maxWidth={400} placeholder="Søk her..."></Search>
      </KvibHeader>
    </Stack>
}`,...(K=(C=l.parameters)==null?void 0:C.docs)==null?void 0:K.source}}};var A,B,z;i.parameters={...i.parameters,docs:{...(A=i.parameters)==null?void 0:A.docs,source:{originalSource:`{
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
}`,...(z=(B=i.parameters)==null?void 0:B.docs)==null?void 0:z.source}}};var M,V,O;d.parameters={...d.parameters,docs:{...(M=d.parameters)==null?void 0:M.docs,source:{originalSource:`{
  args: {
    logoLink: "https://design.kartverket.no",
    logoAltText: "Kartverket Logo"
  },
  render: args => <KvibHeader {...args} />
}`,...(O=(V=d.parameters)==null?void 0:V.docs)==null?void 0:O.source}}};var W,E,I;c.parameters={...c.parameters,docs:{...(W=c.parameters)==null?void 0:W.docs,source:{originalSource:`{
  args: {
    logoVariant: "vertical",
    logoAltText: "Kartverket Logo"
  },
  render: args => <KvibHeader {...args} />
}`,...(I=(E=c.parameters)==null?void 0:E.docs)==null?void 0:I.source}}};var F,P,_;m.parameters={...m.parameters,docs:{...(F=m.parameters)==null?void 0:F.docs,source:{originalSource:`{
  args: {
    logoLinkDisabled: true
  },
  render: args => <KvibHeader {...args} />
}`,...(_=(P=m.parameters)==null?void 0:P.docs)==null?void 0:_.source}}};const ae=["Preview","HeaderElements","HeaderJustifyContent","HeaderDropdownChildren","HeaderBreakpoint","HeaderSearchAsync","HeaderLogoButton","HeaderLogoVariant","HeaderWithoutLink"],pe=Object.freeze(Object.defineProperty({__proto__:null,HeaderBreakpoint:l,HeaderDropdownChildren:s,HeaderElements:t,HeaderJustifyContent:n,HeaderLogoButton:d,HeaderLogoVariant:c,HeaderSearchAsync:i,HeaderWithoutLink:m,Preview:o,__namedExportsOrder:ae,default:$},Symbol.toStringTag,{value:"Module"}));export{pe as H,o as P,t as a,n as b,l as c,s as d,i as e,d as f,c as g,m as h};
