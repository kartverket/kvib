import{j as a}from"./jsx-runtime-CLpGMVip.js";import{r as h}from"./index-Cjd7pOeM.js";import{u as f,L as g}from"./link-CiBOvFm-.js";import{B as v}from"./box-FlB7OGm2.js";const t=h.forwardRef((e,s)=>{const{external:d,children:c,colorPalette:n="green",...p}=e,u=f("colors",`${n}.500`)[0],m=`data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='${encodeURIComponent(u)}' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M15 3h6v6'%3E%3C/path%3E%3Cpath d='M10 14L21 3'%3E%3C/path%3E%3Cpath d='M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6'%3E%3C/path%3E%3C/svg%3E`;return a.jsx(g,{ref:s,colorPalette:n,...p,style:{display:"inline-flex",alignItems:"center",position:"relative"},children:a.jsxs(v,{as:"span",style:{display:"inline",position:"relative"},children:[c,d&&a.jsx("span",{style:{display:"inline-block",width:"1em",height:"1em",backgroundImage:`url("${m}")`,backgroundSize:"contain",backgroundRepeat:"no-repeat",marginLeft:"0.25em",verticalAlign:"middle",transform:"translateY(-0.1em)"}})]})})});try{t.displayName="Link",t.__docgenInfo={description:"Link to different sites or parts of site\n\nYou can specify the `color` prop to get different link designs.",displayName:"Link",props:{external:{defaultValue:null,description:"If `true`, the link will open in a new tab.",name:"external",required:!1,type:{name:"boolean"}},size:{defaultValue:null,description:"The size of the link",name:"size",required:!1,type:{name:"enum",value:[{value:'"sm"'},{value:'"md"'},{value:'"lg"'},{value:'"xl"'},{value:'"2xl"'},{value:'"max"'},{value:'"min"'},{value:'"full"'},{value:'"3xs"'},{value:'"2xs"'},{value:'"xs"'},{value:'"3xl"'},{value:'"4xl"'},{value:'"5xl"'},{value:'"6xl"'},{value:'"7xl"'},{value:'"8xl"'},{value:'"prose"'}]}},recipe:{defaultValue:null,description:"",name:"recipe",required:!1,type:{name:"RecipeDefinition<RecipeVariantRecord>"}}}}}catch{}const y={title:"Komponenter/Link",component:t,parameters:{docs:{story:{inline:!0}}},argTypes:{variant:{description:"The visual style of the component.",table:{type:{summary:"string"}},defaultValue:{summary:"underline"},options:["underline","plain"],control:{type:"radio"}},colorPalette:{description:"The color of the link.",table:{type:{summary:"'green' | 'blue' | 'gray' | 'red'"},defaultValue:{summary:"green"}},options:["green","blue","gray","red"],control:{type:"radio"}},size:{description:"The size of the link.",table:{type:{summary:"'sm' | 'md' | 'lg'"},defaultValue:{summary:"md"}},options:["sm","md","lg"],control:{type:"radio"}},children:{description:"This is the linktext",table:{type:{summary:"string | ReactNode"}},control:"text"},external:{description:"If true, an icon will be included.",table:{type:{summary:"boolean"},defaultValue:{summary:"false"}},control:"boolean"},href:{description:"The URL the link should navigate to.",table:{type:{summary:"string"}},control:"text"},recipe:{table:{disable:!0}}}};t.displayName="Link";const r={args:{href:"/?path=/",children:"This is a link",variant:"underline",colorPalette:"green",size:"md",external:!1},render:e=>a.jsx(t,{...e,children:e.children})};var l,i,o;r.parameters={...r.parameters,docs:{...(l=r.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {
    href: "/?path=/",
    children: "This is a link",
    variant: "underline",
    colorPalette: "green",
    size: "md",
    external: false
  },
  render: args => <KvibLink {...args}>{args.children}</KvibLink>
}`,...(o=(i=r.parameters)==null?void 0:i.docs)==null?void 0:o.source}}};const x=["Preview"],T=Object.freeze(Object.defineProperty({__proto__:null,Preview:r,__namedExportsOrder:x,default:y},Symbol.toStringTag,{value:"Module"}));export{T as L,r as P};
