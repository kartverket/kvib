import{j as e}from"./extends-CwFRzn3r.js";import{u as S}from"./chunk-57I6FYPZ-CwnaZWLD.js";import{u as xe}from"./chunk-7JBTTEVG-DuShY1Xb.js";import{C as ye}from"./chunk-RKXMPHPI-CPdQsr-a.js";import{V as ve}from"./chunk-NTCQBYKE-BJzF3cNd.js";import{B as Y}from"./chunk-PULVB27S-CgiffgmI.js";import{F as we}from"./chunk-KRPLQIP4-ICIqHMLQ.js";import{d as j}from"./index-CCHl0gzi.js";import{L as Se}from"./Link-CiNpFhSN.js";import{I as je}from"./IconButton-DjHq5yhg.js";import{L as Ce}from"./Logo-TQuPSOc1.js";import{H as Z}from"./chunk-7OLJDQMT-lazN81OQ.js";import{S as o}from"./Search-1oD_E59N.js";import{a as ee,b as re,T as h}from"./Tabs-BxDlweT0.js";import{S as ae}from"./chunk-ZHMYA64R-V_96TD_T.js";import{H as He}from"./chunk-3ASUQ6PA-DZH9lOZq.js";import{S as Le}from"./SearchAsync-DuNggyJF.js";import{I as Te}from"./Icon-CnEaoVOW.js";import{c as Be}from"./colors-BETQBCi-.js";const a=r=>{const{justifyContent:n="space-between",logoLinkDisabled:g=!1,logoLink:b="/",logoLinkProps:oe,logoAltText:ne,children:f,showMenuButton:te=!1,dropdownMenuChildren:le,showChildrenInMenu:se=!0,collapseBreakpoint:ie="sm",onMenuButtonClick:de,gap:ce=90,logoVariant:v="horizontal"}=r,[k]=S(`(max-width: ${j.breakpoints[ie]})`),[x]=S(`(max-width: ${j.breakpoints.sm})`),ue=x?110:150,me=x?70:100,pe=x?70:90,he=n&&k?"space-between":n,ge=!k,{isOpen:y,onToggle:be}=xe(),fe=f&&(k||y)||te,ke=de||be,w=()=>e.jsx(Ce,{label:ne,variant:v,size:v=="horizontal"?ue:me});return e.jsxs(Y,{children:[e.jsxs(we,{bg:"white",borderBottomWidth:"2px",borderBottomColor:"gray.200",padding:30,height:pe,alignItems:"center",justifyContent:he,gap:ce,children:[g?e.jsx(w,{}):e.jsx(Se,{href:b,isExternal:!1,...oe,children:e.jsx(w,{})}),ge&&f,fe&&e.jsx(je,{"aria-label":"open menu",icon:y?"close":"menu",variant:"ghost",onClick:ke})]}),e.jsx(ye,{in:y,animateOpacity:!1,children:e.jsxs(ve,{bg:"gray.50",borderBottomWidth:"2px",borderBottomColor:"gray.200",padding:30,gap:10,children:[se&&f,le]})})]})};try{a.displayName="Header",a.__docgenInfo={description:"",displayName:"Header",props:{justifyContent:{defaultValue:null,description:"Determines where the content in the header is displayed.",name:"justifyContent",required:!1,type:{name:"enum",value:[{value:"undefined"},{value:'"center"'},{value:'"space-between"'},{value:'"start"'}]}},logoLinkDisabled:{defaultValue:null,description:"If set, the link around the logo will not be rendered and clickable.",name:"logoLinkDisabled",required:!1,type:{name:"boolean | undefined"}},logoLink:{defaultValue:null,description:"Href for logo link",name:"logoLink",required:!1,type:{name:"string | undefined"}},logoLinkProps:{defaultValue:null,description:"As for logo link",name:"logoLinkProps",required:!1,type:{name:'Omit<LinkProps, "href"> | undefined'}},logoAltText:{defaultValue:null,description:"Alt Text for logo",name:"logoAltText",required:!1,type:{name:"string | undefined"}},children:{defaultValue:null,description:"Children to be displayed in the header.",name:"children",required:!1,type:{name:"ReactNode"}},showMenuButton:{defaultValue:null,description:"If true, a menu button will be displayed.",name:"showMenuButton",required:!1,type:{name:"boolean | undefined"}},showChildrenInMenu:{defaultValue:null,description:"If true, the header children will be displayed in the dropdown menu.",name:"showChildrenInMenu",required:!1,type:{name:"boolean | undefined"}},dropdownMenuChildren:{defaultValue:null,description:"Custom children to be displayed in the dropdown menu. Also to modify dropdown layout.",name:"dropdownMenuChildren",required:!1,type:{name:"ReactNode"}},collapseBreakpoint:{defaultValue:null,description:"Screen breakpoint for when the header should collapse and display menu button instead.",name:"collapseBreakpoint",required:!1,type:{name:"enum",value:[{value:"undefined"},{value:'"sm"'},{value:'"md"'},{value:'"lg"'}]}},onMenuButtonClick:{defaultValue:null,description:"If provided: a custom function to be called when the menu button is clicked.",name:"onMenuButtonClick",required:!1,type:{name:"MouseEventHandler<HTMLButtonElement> | undefined"}},gap:{defaultValue:null,description:"Gap between header elements.",name:"gap",required:!1,type:{name:"number | undefined"}},logoVariant:{defaultValue:null,description:"",name:"logoVariant",required:!1,type:{name:"enum",value:[{value:"undefined"},{value:'"vertical"'},{value:'"horizontal"'}]}}}}}catch{}const Ke={title:"Sideelementer/Header",component:a,parameters:{docs:{story:{inline:!0},canvas:{sourceState:"shown"}},a11y:{disable:!0}},argTypes:{justifyContent:{table:{type:{summary:"start | center | space-between"},defaultValue:{summary:"space-between"}},options:["start","center","space-between"],control:{type:"radio"}},logoLinkDisabled:{table:{type:{summary:"boolean"},defaultValue:{summary:!1}},control:"boolean"},logoLink:{table:{type:{summary:"string"},defaultValue:{summary:"/"}},control:"text"},logoLinkProps:{table:{summary:"object"},defaultValue:{summary:void 0}},showMenuButton:{table:{type:{summary:"boolean"},defaultValue:{summary:!1}},control:"boolean"},showChildrenInMenu:{table:{type:{summary:"boolean"},defaultValue:{summary:!0}},control:"boolean"},collapseBreakpoint:{table:{type:{summary:"sm | md | lg"},defaultValue:{summary:"sm"}},options:["sm","md","lg"],control:{type:"radio"}},gap:{table:{type:{summary:"number"},defaultValue:{summary:90}},control:"number"},logoVariant:{table:{type:{summary:"horizontal | vertical"},defaultValue:{summary:"horizontal"}},options:["horizontal","vertical"],control:{type:"radio"}}},args:{onMenuButtonClick:void 0}},Ve=[{label:"Eple",value:"eple"},{label:"Banan",value:"banan"},{label:"Kirsebær",value:"kirsebær"},{label:"Pære",value:"pære"},{label:"Svarthyll",value:"svarthyll"}],Me=(r,n)=>{setTimeout(()=>{const g=Ve.filter(b=>b.label.toLowerCase().includes(r.toLowerCase()));n(g)},500)},t={args:{logoAltText:"Kartverket Logo"},render:r=>e.jsx(a,{...r})},l={args:{justifyContent:"space-between",onMenuButtonClick:void 0,gap:50,collapseBreakpoint:"md",logoAltText:"Kartverket Logo"},render:r=>e.jsxs(a,{...r,children:[e.jsx(Z,{size:"md",children:"Eiendom"}),e.jsx(o,{bgColor:"white",maxWidth:400,placeholder:"Søk her..."}),e.jsx(ee,{colorScheme:"blue",size:"md",children:e.jsxs(re,{children:[e.jsx(h,{w:90,children:"Fane 1"}),e.jsx(h,{w:90,children:"Fane 2"})]})})]})},s={args:{logoAltText:"Kartverket Logo"},render:r=>e.jsxs(ae,{children:[e.jsx(a,{...r,justifyContent:"center",children:e.jsx(o,{bgColor:"white",maxWidth:400,placeholder:"Søk her..."})}),e.jsx(a,{...r,justifyContent:"space-between",children:e.jsx(o,{bgColor:"white",maxWidth:400,placeholder:"Søk her..."})}),e.jsx(a,{...r,justifyContent:"start",children:e.jsx(o,{bgColor:"white",maxWidth:400,placeholder:"Søk her..."})})]})},i={args:{logoLink:"https://design.kartverket.no",logoAltText:"Kartverket Logo",dropdownMenuChildren:e.jsxs(He,{wrap:"wrap",align:"center",justify:"center",gap:"10",children:[e.jsx(o,{maxWidth:400,bgColor:"white",placeholder:"Søk her..."}),e.jsx(ee,{colorScheme:"blue",size:"md",children:e.jsxs(re,{children:[e.jsx(h,{children:"Første fane"}),e.jsx(h,{children:"Andre fane"})]})})]}),showMenuButton:!0,onMenuButtonClick:void 0,showChildrenInMenu:!1},render:r=>e.jsx(a,{...r,children:e.jsx(Z,{size:"md",children:"Eiendom"})})},d={args:{justifyContent:"center",logoAltText:"Kartverket Logo"},render:r=>e.jsxs(ae,{children:[e.jsx(a,{...r,collapseBreakpoint:"sm",children:e.jsx(o,{bgColor:"white",maxWidth:400,placeholder:"Søk her..."})}),e.jsx(a,{...r,collapseBreakpoint:"md",children:e.jsx(o,{bgColor:"white",maxWidth:400,placeholder:"Søk her..."})}),e.jsx(a,{...r,collapseBreakpoint:"lg",children:e.jsx(o,{bgColor:"white",maxWidth:400,placeholder:"Søk her..."})})]})},c={args:{logoAltText:"Kartverket Logo"},render:r=>e.jsx(a,{...r,children:e.jsx(Y,{width:300,children:e.jsx(Le,{placeholder:"Søk etter frukt",loadOptions:Me,onChange:n=>{console.log("Selected Option:",n)},size:"md",dropdownIndicator:e.jsx(Te,{icon:"search",weight:500,color:Be.green[500]}),"aria-label":"search async"})})})},u={args:{logoLink:"https://design.kartverket.no",logoAltText:"Kartverket Logo"},render:r=>e.jsx(a,{...r})},m={args:{logoVariant:"vertical",logoAltText:"Kartverket Logo"},render:r=>e.jsx(a,{...r})},p={args:{logoLinkDisabled:!0},render:r=>e.jsx(a,{...r})};var C,H,L;t.parameters={...t.parameters,docs:{...(C=t.parameters)==null?void 0:C.docs,source:{originalSource:`{
  args: {
    logoAltText: "Kartverket Logo"
  },
  render: args => <KvibHeader {...args} />
}`,...(L=(H=t.parameters)==null?void 0:H.docs)==null?void 0:L.source}}};var T,B,K;l.parameters={...l.parameters,docs:{...(T=l.parameters)==null?void 0:T.docs,source:{originalSource:`{
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
}`,...(K=(B=l.parameters)==null?void 0:B.docs)==null?void 0:K.source}}};var V,M,A;s.parameters={...s.parameters,docs:{...(V=s.parameters)==null?void 0:V.docs,source:{originalSource:`{
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
}`,...(A=(M=s.parameters)==null?void 0:M.docs)==null?void 0:A.source}}};var z,W,I;i.parameters={...i.parameters,docs:{...(z=i.parameters)==null?void 0:z.docs,source:{originalSource:`{
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
}`,...(I=(W=i.parameters)==null?void 0:W.docs)==null?void 0:I.source}}};var O,_,q;d.parameters={...d.parameters,docs:{...(O=d.parameters)==null?void 0:O.docs,source:{originalSource:`{
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
}`,...(q=(_=d.parameters)==null?void 0:_.docs)==null?void 0:q.source}}};var E,D,F;c.parameters={...c.parameters,docs:{...(E=c.parameters)==null?void 0:E.docs,source:{originalSource:`{
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
}`,...(F=(D=c.parameters)==null?void 0:D.docs)==null?void 0:F.source}}};var P,N,R;u.parameters={...u.parameters,docs:{...(P=u.parameters)==null?void 0:P.docs,source:{originalSource:`{
  args: {
    logoLink: "https://design.kartverket.no",
    logoAltText: "Kartverket Logo"
  },
  render: args => <KvibHeader {...args} />
}`,...(R=(N=u.parameters)==null?void 0:N.docs)==null?void 0:R.source}}};var $,J,G;m.parameters={...m.parameters,docs:{...($=m.parameters)==null?void 0:$.docs,source:{originalSource:`{
  args: {
    logoVariant: "vertical",
    logoAltText: "Kartverket Logo"
  },
  render: args => <KvibHeader {...args} />
}`,...(G=(J=m.parameters)==null?void 0:J.docs)==null?void 0:G.source}}};var Q,U,X;p.parameters={...p.parameters,docs:{...(Q=p.parameters)==null?void 0:Q.docs,source:{originalSource:`{
  args: {
    logoLinkDisabled: true
  },
  render: args => <KvibHeader {...args} />
}`,...(X=(U=p.parameters)==null?void 0:U.docs)==null?void 0:X.source}}};const Ae=["Header","HeaderElements","HeaderJustifyContent","HeaderDropdownChildren","HeaderBreakpoint","HeaderSearchAsync","HeaderLogoButton","HeaderLogoVariant","HeaderWithoutLink"],Ze=Object.freeze(Object.defineProperty({__proto__:null,Header:t,HeaderBreakpoint:d,HeaderDropdownChildren:i,HeaderElements:l,HeaderJustifyContent:s,HeaderLogoButton:u,HeaderLogoVariant:m,HeaderSearchAsync:c,HeaderWithoutLink:p,__namedExportsOrder:Ae,default:Ke},Symbol.toStringTag,{value:"Module"}));export{Ze as H,l as a,s as b,d as c,i as d,c as e,u as f,m as g,p as h,t as i};
