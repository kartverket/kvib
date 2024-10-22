import{j as e}from"./extends-CwFRzn3r.js";import{u as S}from"./use-media-query-DZQeksUW.js";import{u as ye}from"./use-disclosure-CdGn7wGE.js";import{C as xe}from"./collapse-DJrNMGUe.js";import{V as ve}from"./v-stack-BfMi40Xh.js";import{d as j}from"./index-CfE5Katq.js";import{B as Y}from"./box-DeqT4ixr.js";import{F as we}from"./flex-C1gIBb6o.js";import{L as Se}from"./Link-C3IPjqxf.js";import{I as je}from"./IconButton-B55ZuMAz.js";import{L as Ce}from"./Logo-CwyJCF6Z.js";import{T as Z,a as ee,b as p}from"./Tabs-Ca0JhOtF.js";import{H as re}from"./heading--NES2npU.js";import{S as g}from"./Search-DoKkoYnm.js";import{S as ae}from"./stack-REYSnkee.js";import{H as Le}from"./h-stack-BA5VzuBF.js";import{S as He}from"./SearchAsync-DzYBJ_-x.js";import{I as Te}from"./Icon-95dq-cLq.js";import{c as Be}from"./colors-BRrPfCdD.js";const a=r=>{const{justifyContent:o="space-between",logoLinkDisabled:h=!1,logoLink:b="/",logoLinkProps:oe,logoAltText:ne,children:f,showMenuButton:te=!1,dropdownMenuChildren:se,showChildrenInMenu:le=!0,collapseBreakpoint:ie="sm",onMenuButtonClick:de,gap:ce=90,logoVariant:v="horizontal"}=r,[k]=S(`(max-width: ${j.breakpoints[ie]})`),[y]=S(`(max-width: ${j.breakpoints.sm})`),ue=y?110:150,me=y?70:100,pe=y?70:90,ge=o&&k?"space-between":o,he=!k,{isOpen:x,onToggle:be}=ye(),fe=f&&(k||x)||te,ke=de||be,w=()=>e.jsx(Ce,{label:ne,variant:v,size:v=="horizontal"?ue:me});return e.jsxs(Y,{children:[e.jsxs(we,{bg:"white",borderBottomWidth:"2px",borderBottomColor:"gray.200",padding:30,height:pe,alignItems:"center",justifyContent:ge,gap:ce,children:[h?e.jsx(w,{}):e.jsx(Se,{href:b,isExternal:!1,...oe,children:e.jsx(w,{})}),he&&f,fe&&e.jsx(je,{"aria-label":"open menu",icon:x?"close":"menu",variant:"ghost",onClick:ke})]}),e.jsx(xe,{in:x,animateOpacity:!1,children:e.jsxs(ve,{bg:"gray.50",borderBottomWidth:"2px",borderBottomColor:"gray.200",padding:30,gap:10,children:[le&&f,se]})})]})};try{a.displayName="Header",a.__docgenInfo={description:"",displayName:"Header",props:{justifyContent:{defaultValue:null,description:"Determines where the content in the header is displayed.",name:"justifyContent",required:!1,type:{name:"enum",value:[{value:"undefined"},{value:'"center"'},{value:'"start"'},{value:'"space-between"'}]}},logoLinkDisabled:{defaultValue:null,description:"If set, the link around the logo will not be rendered and clickable.",name:"logoLinkDisabled",required:!1,type:{name:"boolean | undefined"}},logoLink:{defaultValue:null,description:"Href for logo link",name:"logoLink",required:!1,type:{name:"string | undefined"}},logoLinkProps:{defaultValue:null,description:"As for logo link",name:"logoLinkProps",required:!1,type:{name:'Omit<LinkProps, "href"> | undefined'}},logoAltText:{defaultValue:null,description:"Alt Text for logo",name:"logoAltText",required:!1,type:{name:"string | undefined"}},children:{defaultValue:null,description:"Children to be displayed in the header.",name:"children",required:!1,type:{name:"ReactNode"}},showMenuButton:{defaultValue:null,description:"If true, a menu button will be displayed.",name:"showMenuButton",required:!1,type:{name:"boolean | undefined"}},showChildrenInMenu:{defaultValue:null,description:"If true, the header children will be displayed in the dropdown menu.",name:"showChildrenInMenu",required:!1,type:{name:"boolean | undefined"}},dropdownMenuChildren:{defaultValue:null,description:"Custom children to be displayed in the dropdown menu. Also to modify dropdown layout.",name:"dropdownMenuChildren",required:!1,type:{name:"ReactNode"}},collapseBreakpoint:{defaultValue:null,description:"Screen breakpoint for when the header should collapse and display menu button instead.",name:"collapseBreakpoint",required:!1,type:{name:"enum",value:[{value:"undefined"},{value:'"sm"'},{value:'"md"'},{value:'"lg"'}]}},onMenuButtonClick:{defaultValue:null,description:"If provided: a custom function to be called when the menu button is clicked.",name:"onMenuButtonClick",required:!1,type:{name:"MouseEventHandler<HTMLButtonElement> | undefined"}},gap:{defaultValue:null,description:"Gap between header elements.",name:"gap",required:!1,type:{name:"number | undefined"}},logoVariant:{defaultValue:null,description:"",name:"logoVariant",required:!1,type:{name:"enum",value:[{value:"undefined"},{value:'"horizontal"'},{value:'"vertical"'}]}}}}}catch{}const Ve={title:"Sideelementer/Header",component:a,parameters:{docs:{story:{inline:!0},canvas:{sourceState:"shown"}},a11y:{disable:!0}},argTypes:{justifyContent:{table:{type:{summary:"start | center | space-between"},defaultValue:{summary:"space-between"}},options:["start","center","space-between"],control:{type:"radio"}},logoLinkDisabled:{table:{type:{summary:"boolean"},defaultValue:{summary:!1}},control:"boolean"},logoLink:{table:{type:{summary:"string"},defaultValue:{summary:"/"}},control:"text"},logoLinkProps:{table:{summary:"object"},defaultValue:{summary:void 0}},showMenuButton:{table:{type:{summary:"boolean"},defaultValue:{summary:"false"}},control:"boolean"},showChildrenInMenu:{table:{type:{summary:"boolean"},defaultValue:{summary:"true"}},control:"boolean"},collapseBreakpoint:{table:{type:{summary:"sm | md | lg"},defaultValue:{summary:"sm"}},options:["sm","md","lg"],control:{type:"radio"}},gap:{table:{type:{summary:"number"},defaultValue:{summary:"90"}},control:"number"},logoVariant:{table:{type:{summary:"horizontal | vertical"},defaultValue:{summary:"horizontal"}},options:["horizontal","vertical"],control:{type:"radio"}}},args:{onMenuButtonClick:void 0}},Ke=[{label:"Eple",value:"eple"},{label:"Banan",value:"banan"},{label:"Kirsebær",value:"kirsebær"},{label:"Pære",value:"pære"},{label:"Svarthyll",value:"svarthyll"}],Me=(r,o)=>{setTimeout(()=>{const h=Ke.filter(b=>b.label.toLowerCase().includes(r.toLowerCase()));o(h)},500)},n={args:{logoAltText:"Kartverket Logo"},render:r=>e.jsx(a,{...r})},t={args:{justifyContent:"space-between",onMenuButtonClick:void 0,gap:50,collapseBreakpoint:"md",logoAltText:"Kartverket Logo"},render:r=>e.jsxs(a,{...r,children:[e.jsx(re,{size:"md",children:"Eiendom"}),e.jsx(g,{bgColor:"white",maxWidth:400,placeholder:"Søk her..."}),e.jsx(Z,{colorScheme:"blue",size:"md",children:e.jsxs(ee,{children:[e.jsx(p,{w:90,children:"Fane 1"}),e.jsx(p,{w:90,children:"Fane 2"})]})})]})},s={args:{logoAltText:"Kartverket Logo"},render:r=>e.jsx(ae,{children:e.jsx(a,{...r,justifyContent:"center",children:e.jsx(g,{bgColor:"white",maxWidth:400,placeholder:"Søk her..."})})})},l={args:{logoLink:"https://design.kartverket.no",logoAltText:"Kartverket Logo",dropdownMenuChildren:e.jsxs(Le,{wrap:"wrap",align:"center",justify:"center",gap:"10",children:[e.jsx(g,{maxWidth:400,bgColor:"white",placeholder:"Søk her..."}),e.jsx(Z,{colorScheme:"blue",size:"md",children:e.jsxs(ee,{children:[e.jsx(p,{children:"Første fane"}),e.jsx(p,{children:"Andre fane"})]})})]}),showMenuButton:!0,onMenuButtonClick:void 0,showChildrenInMenu:!1},render:r=>e.jsx(a,{...r,children:e.jsx(re,{size:"md",children:"Eiendom"})})},i={args:{justifyContent:"center",logoAltText:"Kartverket Logo"},render:r=>e.jsx(ae,{children:e.jsx(a,{...r,collapseBreakpoint:"sm",children:e.jsx(g,{bgColor:"white",maxWidth:400,placeholder:"Søk her..."})})})},d={args:{logoAltText:"Kartverket Logo"},render:r=>e.jsx(a,{...r,children:e.jsx(Y,{width:300,children:e.jsx(He,{placeholder:"Søk etter frukt",loadOptions:Me,onChange:o=>{console.log("Selected Option:",o)},size:"md",dropdownIndicator:e.jsx(Te,{icon:"search",weight:500,color:Be.green[500]}),"aria-label":"search async"})})})},c={args:{logoLink:"https://design.kartverket.no",logoAltText:"Kartverket Logo"},render:r=>e.jsx(a,{...r})},u={args:{logoVariant:"vertical",logoAltText:"Kartverket Logo"},render:r=>e.jsx(a,{...r})},m={args:{logoLinkDisabled:!0},render:r=>e.jsx(a,{...r})};var C,L,H;n.parameters={...n.parameters,docs:{...(C=n.parameters)==null?void 0:C.docs,source:{originalSource:`{
  args: {
    logoAltText: "Kartverket Logo"
  },
  render: args => <KvibHeader {...args} />
}`,...(H=(L=n.parameters)==null?void 0:L.docs)==null?void 0:H.source}}};var T,B,V;t.parameters={...t.parameters,docs:{...(T=t.parameters)==null?void 0:T.docs,source:{originalSource:`{
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
}`,...(V=(B=t.parameters)==null?void 0:B.docs)==null?void 0:V.source}}};var K,M,A;s.parameters={...s.parameters,docs:{...(K=s.parameters)==null?void 0:K.docs,source:{originalSource:`{
  args: {
    logoAltText: "Kartverket Logo"
  },
  render: args => <Stack>
      <KvibHeader {...args} justifyContent="center">
        <Search bgColor="white" maxWidth={400} placeholder="Søk her..."></Search>
      </KvibHeader>
    </Stack>
}`,...(A=(M=s.parameters)==null?void 0:M.docs)==null?void 0:A.source}}};var z,I,O;l.parameters={...l.parameters,docs:{...(z=l.parameters)==null?void 0:z.docs,source:{originalSource:`{
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
}`,...(O=(I=l.parameters)==null?void 0:I.docs)==null?void 0:O.source}}};var _,q,E;i.parameters={...i.parameters,docs:{...(_=i.parameters)==null?void 0:_.docs,source:{originalSource:`{
  args: {
    justifyContent: "center",
    logoAltText: "Kartverket Logo"
  },
  render: args => <Stack>
      <KvibHeader {...args} collapseBreakpoint="sm">
        <Search bgColor="white" maxWidth={400} placeholder="Søk her..."></Search>
      </KvibHeader>
    </Stack>
}`,...(E=(q=i.parameters)==null?void 0:q.docs)==null?void 0:E.source}}};var W,D,P;d.parameters={...d.parameters,docs:{...(W=d.parameters)==null?void 0:W.docs,source:{originalSource:`{
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
}`,...(P=(D=d.parameters)==null?void 0:D.docs)==null?void 0:P.source}}};var F,N,R;c.parameters={...c.parameters,docs:{...(F=c.parameters)==null?void 0:F.docs,source:{originalSource:`{
  args: {
    logoLink: "https://design.kartverket.no",
    logoAltText: "Kartverket Logo"
  },
  render: args => <KvibHeader {...args} />
}`,...(R=(N=c.parameters)==null?void 0:N.docs)==null?void 0:R.source}}};var J,$,G;u.parameters={...u.parameters,docs:{...(J=u.parameters)==null?void 0:J.docs,source:{originalSource:`{
  args: {
    logoVariant: "vertical",
    logoAltText: "Kartverket Logo"
  },
  render: args => <KvibHeader {...args} />
}`,...(G=($=u.parameters)==null?void 0:$.docs)==null?void 0:G.source}}};var Q,U,X;m.parameters={...m.parameters,docs:{...(Q=m.parameters)==null?void 0:Q.docs,source:{originalSource:`{
  args: {
    logoLinkDisabled: true
  },
  render: args => <KvibHeader {...args} />
}`,...(X=(U=m.parameters)==null?void 0:U.docs)==null?void 0:X.source}}};const Ae=["Preview","HeaderElements","HeaderJustifyContent","HeaderDropdownChildren","HeaderBreakpoint","HeaderSearchAsync","HeaderLogoButton","HeaderLogoVariant","HeaderWithoutLink"],Ze=Object.freeze(Object.defineProperty({__proto__:null,HeaderBreakpoint:i,HeaderDropdownChildren:l,HeaderElements:t,HeaderJustifyContent:s,HeaderLogoButton:c,HeaderLogoVariant:u,HeaderSearchAsync:d,HeaderWithoutLink:m,Preview:n,__namedExportsOrder:Ae,default:Ve},Symbol.toStringTag,{value:"Module"}));export{Ze as H,n as P,t as a,s as b,i as c,l as d,d as e,c as f,u as g,m as h};
