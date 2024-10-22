import{j as r}from"./extends-CwFRzn3r.js";import{S as a}from"./SearchAsync-DzYBJ_-x.js";import{B as n}from"./box-DeqT4ixr.js";import{I as Y}from"./Icon-95dq-cLq.js";import{S as Z}from"./stack-REYSnkee.js";import{B as x}from"./Badge-C2CLp90z.js";import{T as f}from"./text-ByHKaHOl.js";const re={title:"Søk/SearchAsync",component:a,parameters:{docs:{story:{inline:!0},canvas:{sourceState:"hidden"}},a11y:{disable:!0}},argTypes:{loadOptions:{control:"text"},onChange:{table:{type:{summary:"(newValue: T | null) => void"}},control:"text"},placeholder:{table:{type:{summary:"string"}},control:"text"},autoFocus:{table:{type:{summary:"boolean"}},control:"boolean"},debounceTime:{table:{type:{summary:"number"}},control:"number"},className:{table:{type:{summary:"string"}},control:"text"},isClearable:{table:{type:{summary:"boolean"}},control:"boolean"},dropdownIndicator:{table:{type:{summary:"Element"}},control:"text"},size:{table:{type:{summary:"sm | md | lg"},defaultValue:{summary:"md"}},options:["sm","md","lg"],control:{type:"radio"}},defaultOptions:{table:{type:{summary:"T[] | boolean"}},control:"array"},variant:{table:{type:{summary:"outline | filled | flushed | unstyled"},defaultValue:{summary:"outline"}},options:["outline","filled","flushed","unstyled"],control:{type:"radio"}},id:{table:{type:{summary:"string"}},control:"text"},isMulti:{table:{type:{summary:"boolean"},defualtValue:{summary:"false"}},control:"boolean"},noOptionsMessage:{table:{type:{summary:"(obj: { inputValue: string; }) => ReactNode"}},control:"text"},optionLabelFormatter:{table:{type:{summary:"(data: T, formatOptionLabelMeta: FormatOptionLabelMeta<T>) => ReactNode"}},control:"text"},isDisabled:{table:{type:{summary:"boolean"},defaultValue:{summary:"false"}},control:"boolean"},focusBorderColor:{table:{type:{summary:"string"},defaultValue:{summary:"blue.500"}},control:"text"}},args:{onChange:void 0,loadOptions:void 0}},l={parameters:{docs:{canvas:{sourceState:"shown"}}},args:{placeholder:"Søk i resultater asynkront..."},render:e=>r.jsx(n,{w:"100%",children:r.jsx(a,{...e})})},$=[{label:"Eple",value:"eple"},{label:"Banan",value:"banan"},{label:"Kirsebær",value:"kirsebær"},{label:"Pære",value:"pære"},{label:"Svarthyll",value:"svarthyll"},{label:"Mango",value:"mango"},{label:"Ananas",value:"ananas"},{label:"Kiwi",value:"kiwi"},{label:"Papaya",value:"papaya"},{label:"Blåbær",value:"blåbær"},{label:"Jordbær",value:"jordbær"},{label:"Appelsin",value:"appelsin"},{label:"Druer",value:"druer"},{label:"Sitron",value:"sitron"},{label:"Melon",value:"melon"}],o=(e,t)=>{setTimeout(()=>{const y=$.filter(S=>S.label.toLowerCase().includes(e.toLowerCase()));t(y)},500)},s=e=>{console.log("Selected Option:",e)},c={args:{loadOptions:o,onChange:s,placeholder:"Søk etter frukt...",isMulti:!1},render:e=>r.jsx(n,{h:"20rem",children:r.jsx(a,{...e})})},ae=e=>r.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",width:"100%"},children:[r.jsx("b",{children:e.label}),e.label==="Kiwi"?r.jsx(x,{children:"Frukt (ekkel)"}):r.jsx(x,{children:"Frukt"})]}),i={args:{loadOptions:o,onChange:s,optionLabelFormatter:ae,placeholder:"Søk etter frukt...",isMulti:!1},render:e=>r.jsx(n,{h:"20rem",children:r.jsx(a,{...e})})},ne=(e,t)=>{if(e.length<=2){t([]);return}setTimeout(()=>{const y=$.filter(S=>S.label.toLowerCase().includes(e.toLowerCase()));t(y)},500)},oe=({inputValue:e})=>e.length>0?e.length<=2?r.jsx(f,{children:"Søket må inneholde minst 3 tegn"}):r.jsx(f,{children:"Fant ingen resultater"}):null,d={args:{loadOptions:ne,onChange:s,noOptionsMessage:oe,placeholder:"Søk etter frukt...",isMulti:!1},render:e=>r.jsx(n,{h:40,children:r.jsx(a,{...e})})},u={args:{loadOptions:o,onChange:s,debounceTime:3e3,placeholder:"Søk etter frukt..."},render:e=>r.jsx(n,{h:40,children:r.jsx(a,{...e})})},p={args:{loadOptions:o,onChange:s,dropdownIndicator:r.jsx(Y,{icon:"expand_more",weight:400}),defaultOptions:!0,placeholder:"Søk eller velg frukt..."},render:e=>r.jsx(n,{h:"20rem",children:r.jsx(a,{...e})})},ee=(e,t)=>{console.log("Changed value:",e),console.log("Action:",t)},m={args:{loadOptions:o,onChange:ee,isMulti:!0,placeholder:"Søk etter frukt..."},render:e=>r.jsx(n,{h:40,children:r.jsx(a,{...e})})},h={args:{loadOptions:o,onChange:ee,isMulti:!0,dropdownIndicator:r.jsx(Y,{icon:"expand_more",weight:400}),defaultOptions:!0,placeholder:"Søk eller velg frukt..."},render:e=>r.jsx(n,{h:"20rem",children:r.jsx(a,{...e})})},g={args:{loadOptions:o,onChange:s,placeholder:"Søk etter frukt..."},render:e=>r.jsxs(Z,{children:[r.jsx(a,{...e,size:"sm"}),r.jsx(a,{...e,size:"md"}),r.jsx(a,{...e,size:"lg"})]})},b={args:{loadOptions:o,onChange:s,placeholder:"Søk etter frukt...",focusBorderColor:"green.500"},render:e=>r.jsxs(Z,{h:"12rem",children:[r.jsx(a,{...e,variant:"outline"}),r.jsx(a,{...e,variant:"filled"}),r.jsx(a,{...e,variant:"flushed"}),r.jsx(a,{...e,variant:"unstyled"})]})};var k,v,O;l.parameters={...l.parameters,docs:{...(k=l.parameters)==null?void 0:k.docs,source:{originalSource:`{
  parameters: {
    docs: {
      canvas: {
        sourceState: "shown"
      }
    }
  },
  args: {
    placeholder: "Søk i resultater asynkront..."
  },
  render: args => <Box w="100%">
      <KvibSearchAsync {...args} />
    </Box>
}`,...(O=(v=l.parameters)==null?void 0:v.docs)==null?void 0:O.source}}};var A,C,j;c.parameters={...c.parameters,docs:{...(A=c.parameters)==null?void 0:A.docs,source:{originalSource:`{
  args: {
    loadOptions: mockLoadOptions,
    onChange: handleChange,
    placeholder: "Søk etter frukt...",
    isMulti: false
  },
  render: (args: SearchAsyncProps<Fruit>) => <Box h="20rem">
      <KvibSearchAsync {...args} />
    </Box>
}`,...(j=(C=c.parameters)==null?void 0:C.docs)==null?void 0:j.source}}};var w,B,M;i.parameters={...i.parameters,docs:{...(w=i.parameters)==null?void 0:w.docs,source:{originalSource:`{
  args: {
    loadOptions: mockLoadOptions,
    onChange: handleChange,
    optionLabelFormatter: boldAndBadgeLabelFormatter,
    placeholder: "Søk etter frukt...",
    isMulti: false
  },
  render: (args: SearchAsyncProps<Fruit>) => <Box h="20rem">
      <KvibSearchAsync {...args} />
    </Box>
}`,...(M=(B=i.parameters)==null?void 0:B.docs)==null?void 0:M.source}}};var K,L,F;d.parameters={...d.parameters,docs:{...(K=d.parameters)==null?void 0:K.docs,source:{originalSource:`{
  args: {
    loadOptions: mockLoadOptionsWithRule,
    onChange: handleChange,
    noOptionsMessage: noOptionsMessage,
    placeholder: "Søk etter frukt...",
    isMulti: false
  },
  render: args => <Box h={40}>
      <KvibSearchAsync {...args} />
    </Box>
}`,...(F=(L=d.parameters)==null?void 0:L.docs)==null?void 0:F.source}}};var T,R,z;u.parameters={...u.parameters,docs:{...(T=u.parameters)==null?void 0:T.docs,source:{originalSource:`{
  args: {
    loadOptions: mockLoadOptions,
    onChange: handleChange,
    debounceTime: 3000,
    placeholder: "Søk etter frukt..."
  },
  render: args => <Box h={40}>
      <KvibSearchAsync {...args} />
    </Box>
}`,...(z=(R=u.parameters)==null?void 0:R.docs)==null?void 0:z.source}}};var I,_,D;p.parameters={...p.parameters,docs:{...(I=p.parameters)==null?void 0:I.docs,source:{originalSource:`{
  args: {
    loadOptions: mockLoadOptions,
    onChange: handleChange,
    dropdownIndicator: <Icon icon="expand_more" weight={400} />,
    defaultOptions: true,
    placeholder: "Søk eller velg frukt..."
  },
  render: args => <Box h="20rem">
      <KvibSearchAsync {...args} />
    </Box>
}`,...(D=(_=p.parameters)==null?void 0:_.docs)==null?void 0:D.source}}};var P,V,N;m.parameters={...m.parameters,docs:{...(P=m.parameters)==null?void 0:P.docs,source:{originalSource:`{
  args: {
    loadOptions: mockLoadOptions,
    onChange: handleChangeMulti,
    isMulti: true,
    placeholder: "Søk etter frukt..."
  },
  render: args => <Box h={40}>
      <KvibSearchAsync {...args} />
    </Box>
}`,...(N=(V=m.parameters)==null?void 0:V.docs)==null?void 0:N.source}}};var E,W,J;h.parameters={...h.parameters,docs:{...(E=h.parameters)==null?void 0:E.docs,source:{originalSource:`{
  args: {
    loadOptions: mockLoadOptions,
    onChange: handleChangeMulti,
    isMulti: true,
    dropdownIndicator: <Icon icon="expand_more" weight={400} />,
    defaultOptions: true,
    placeholder: "Søk eller velg frukt..."
  },
  render: args => <Box h="20rem">
      <KvibSearchAsync {...args} />
    </Box>
}`,...(J=(W=h.parameters)==null?void 0:W.docs)==null?void 0:J.source}}};var q,G,H;g.parameters={...g.parameters,docs:{...(q=g.parameters)==null?void 0:q.docs,source:{originalSource:`{
  args: {
    loadOptions: mockLoadOptions,
    onChange: handleChange,
    placeholder: "Søk etter frukt..."
  },
  render: args => <KvibStack>
      <KvibSearchAsync {...args} size="sm" />
      <KvibSearchAsync {...args} size="md" />
      <KvibSearchAsync {...args} size="lg" />
    </KvibStack>
}`,...(H=(G=g.parameters)==null?void 0:G.docs)==null?void 0:H.source}}};var Q,U,X;b.parameters={...b.parameters,docs:{...(Q=b.parameters)==null?void 0:Q.docs,source:{originalSource:`{
  args: {
    loadOptions: mockLoadOptions,
    onChange: handleChange,
    placeholder: "Søk etter frukt...",
    focusBorderColor: "green.500"
  },
  render: args => <KvibStack h={"12rem"}>
      <KvibSearchAsync {...args} variant="outline" />
      <KvibSearchAsync {...args} variant="filled" />
      <KvibSearchAsync {...args} variant="flushed" />
      <KvibSearchAsync {...args} variant="unstyled" />
    </KvibStack>
}`,...(X=(U=b.parameters)==null?void 0:U.docs)==null?void 0:X.source}}};const se=["Preview","SearchAsyncResults","SearchAsyncResultsFormatted","SearchAsyncNoOptions","SearchAsyncResultsDebounce","SearchAsyncDropdown","SearchAsyncMulti","SearchAsyncMultiDropdown","SearchAsyncSizes","SearchAsyncVariants"],me=Object.freeze(Object.defineProperty({__proto__:null,Preview:l,SearchAsyncDropdown:p,SearchAsyncMulti:m,SearchAsyncMultiDropdown:h,SearchAsyncNoOptions:d,SearchAsyncResults:c,SearchAsyncResultsDebounce:u,SearchAsyncResultsFormatted:i,SearchAsyncSizes:g,SearchAsyncVariants:b,__namedExportsOrder:se,default:re},Symbol.toStringTag,{value:"Module"}));export{l as P,me as S,c as a,b,p as c,h as d,d as e};
