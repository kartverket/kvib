import{j as e}from"./jsx-runtime-sfY7k0Xq.js";import{r as h}from"./index-CcKhGcwW.js";import{u as w}from"./index-6zURGglY.js";import{G as I}from"./group-DiEFhqFk.js";import{I as B}from"./input-D7jApd-z.js";import{I as y}from"./input-element-CpSc6Iej.js";import{B as P}from"./Button-C2e2oxpU.js";import{I as T}from"./IconButton-BCET4TB0.js";const n=h.forwardRef(({id:r,colorScheme:x,size:a,variant:S,disabled:l,searchButton:o="none",buttonWidth:i,buttonVariant:R="outline",buttonText:s,role:V="search",...u},_)=>{const d=h.useRef(null),c=w({ref:d,box:"border-box"}),m=({position:j})=>{const f={...j==="left"?{borderBottomRightRadius:0,borderTopRightRadius:0}:{borderBottomLeftRadius:0,borderTopLeftRadius:0},colorScheme:x,variant:R,disabled:l,width:i,size:a,borderRadius:a==="sm"||a==="xs"?"0.125rem":void 0};return s?e.jsx(P,{ref:d,...f,rightIcon:"search",type:"submit","aria-label":"search",children:s}):e.jsx(T,{...f,type:"submit",icon:"search"})},p=i?`calc(${i} + 0.5rem)`:s&&c?`calc(${c.width}px + 0.5rem)`:"3rem";return e.jsxs(I,{width:u.width,children:[e.jsx(B,{...u,id:r,ref:_,role:V,size:a,variant:S,disabled:l,paddingLeft:o==="left"?p:void 0,paddingRight:o==="right"?p:void 0}),o==="left"&&e.jsx(y,{width:"auto",children:e.jsx(m,{position:"left"})}),o==="right"&&e.jsx(y,{width:"auto",children:e.jsx(m,{position:"right"})})]})});try{n.displayName="Search",n.__docgenInfo={description:"",displayName:"Search",props:{recipe:{defaultValue:null,description:"",name:"recipe",required:!1,type:{name:"RecipeDefinition<RecipeVariantRecord> | undefined"}},searchButton:{defaultValue:{value:"none"},description:"",name:"searchButton",required:!1,type:{name:"enum",value:[{value:"undefined"},{value:'"left"'},{value:'"right"'},{value:'"none"'}]}},colorScheme:{defaultValue:null,description:"",name:"colorScheme",required:!1,type:{name:"enum",value:[{value:"undefined"},{value:'"blue"'},{value:'"gray"'},{value:'"green"'},{value:'"red"'}]}},buttonVariant:{defaultValue:{value:"outline"},description:"",name:"buttonVariant",required:!1,type:{name:"enum",value:[{value:"undefined"},{value:'"outline"'},{value:'"solid"'},{value:'"subtle"'},{value:'"plain"'},{value:'"ghost"'},{value:'"surface"'}]}},buttonWidth:{defaultValue:null,description:"",name:"buttonWidth",required:!1,type:{name:"string | undefined"}},buttonText:{defaultValue:null,description:"",name:"buttonText",required:!1,type:{name:"string | undefined"}}}}}catch{}const q={title:"Komponenter/Search",component:n,parameters:{docs:{story:{inline:!0},canvas:{sourceState:"hidden"}},a11y:{disable:!0}},argTypes:{placeholder:{description:"Placeholder for text",table:{defaultValue:{summary:"Søk her..."}},control:"text"},size:{description:"Input size",table:{type:{summary:"lg | md | sm | xs"},defaultValue:{summary:"md"}},options:["lg","md","sm","xs"],control:{type:"radio"}},variant:{description:"Variant",table:{type:{summary:"outline | filled | flushed | unstyled"},defaultValue:{summary:"outline"}},options:["outline","filled","flushed","unstyled"],control:{type:"radio"}},searchButton:{description:"Add search button to input",table:{defaultValue:{summary:"none"}},options:["none","left","right"],control:{type:"radio"}},colorScheme:{description:"Change Icon color",table:{defaultValue:{summary:"green"}},options:["gray","red","green","blue"],control:{type:"radio"}},invalid:{description:"Toggles if input should be invalid",table:{type:{summary:"boolean"},defaultValue:{summary:"false"}},control:"boolean"},disabled:{description:"Toggles if input should be disabled",table:{type:{summary:"boolean"},defaultValue:{summary:"false"}},control:"boolean"},buttonVariant:{description:"Button variant if an icon is enabled",table:{type:{summary:"primary | secondary | tertiary | ghost"},defaultValue:{summary:"tertiary"}},options:["primary","secondary","tertiary","ghost"],control:{type:"radio"}},buttonWidth:{description:"Button width if an icon is enabled. Cannot be smaller than default, e.g. needs to be more than 2.5rem with size md",table:{type:{summary:"string"}},control:"text"},buttonText:{description:"Button text if an icon is enabled",table:{type:{summary:"string"}},control:"text"}},args:{}},t={parameters:{docs:{canvas:{sourceState:"shown"}}},args:{placeholder:"Søk her...",variant:"outline",disabled:!1},render:r=>e.jsx(n,{...r})};var b,g,v;t.parameters={...t.parameters,docs:{...(b=t.parameters)==null?void 0:b.docs,source:{originalSource:`{
  parameters: {
    docs: {
      canvas: {
        sourceState: "shown"
      }
    }
  },
  args: {
    placeholder: "Søk her...",
    variant: "outline",
    disabled: false
  },
  render: args => <KvibSearch {...args} />
}`,...(v=(g=t.parameters)==null?void 0:g.docs)==null?void 0:v.source}}};const E=["Preview"],A=Object.freeze(Object.defineProperty({__proto__:null,Preview:t,__namedExportsOrder:E,default:q},Symbol.toStringTag,{value:"Module"}));export{t as P,A as S};
