import{j as t}from"./extends-CwFRzn3r.js";import{r as H}from"./index-BwDkhjyp.js";import{B as c}from"./box-Cs-tJ6EH.js";import{f as K}from"./forward-ref-BWI-Phbn.js";import{u as S,o as T}from"./use-style-config-C4sZEIFb.js";import{H as w}from"./heading-CZK5ruZ7.js";import{T as h}from"./text-CypcOzo0.js";const q=K(function(r,n){const g=S("Mark",r),i=T(r);return t.jsx(c,{ref:n,...i,as:"mark",__css:{bg:"transparent",whiteSpace:"nowrap",...g}})}),M=e=>e.replace(/[|\\{}()[\]^$+*?.-]/g,r=>`\\${r}`);function W(e){const r=e.filter(n=>n.length!==0).map(n=>M(n.trim()));return r.length?new RegExp(`(${r.join("|")})`,"ig"):null}function _({text:e,query:r}){const n=W(Array.isArray(r)?r:[r]);return n?e.split(n).filter(Boolean).map(i=>({text:i,match:n.test(i)})):[{text:e,match:!1}]}function B(e){const{text:r,query:n}=e;return H.useMemo(()=>_({text:r,query:n}),[r,n])}function s(e){const{children:r,query:n,styles:g}=e;if(typeof r!="string")throw new Error("The children prop of Highlight must be a string");const i=B({query:n,text:r});return t.jsx(t.Fragment,{children:i.map((m,d)=>m.match?t.jsx(q,{sx:g,children:m.text},d):t.jsx(H.Fragment,{children:m.text},d))})}const P={title:"Komponenter/Highlight",component:s,parameters:{docs:{story:{inline:!0},canvas:{sourceState:"shown"}}},argTypes:{query:{name:"query*",description:"The highlighted word",table:{type:{summary:"string | string[]"}},control:"text"},styles:{description:"The style for the highlighted word",table:{type:{summary:"SystemStyleObject"}}}}},l={args:{query:"fremheve",styles:{px:"1",py:"1",bg:"orange.100"}},render:e=>t.jsx(c,{textAlign:"center",children:t.jsx(s,{...e,children:"Det er mulig å fremheve ord med Highlight."})})},o={args:{query:["skjøte","hjemmelserklæring","hjemmelsoverføring"],styles:{px:"2",py:"1",rounded:"full",bg:"teal.100"}},render:e=>t.jsx(w,{lineHeight:"tall",size:"lg",children:t.jsx(s,{...e,children:"Du kan tinglyse et eierskifte i grunneboken ved å fylle ut et skjøte, en hjemmelserklæring ved arv, skifte og uskifte, eller hjemmelsoverføring til andel i borettslag."})})},a={args:{query:"kart",styles:{py:"1",fontWeight:"normal"}},render:e=>t.jsxs(c,{children:[t.jsx(h,{children:'Søkeresultat for: "kart"'}),t.jsx(h,{mt:"6",fontWeight:"bold",children:t.jsx(s,{...e,children:"Kartverket"})}),t.jsx(h,{fontWeight:"bold",children:t.jsx(s,{...e,children:"Sjøkart"})}),t.jsx(h,{fontWeight:"bold",children:t.jsx(s,{...e,children:"Marint kartarbeid"})})]})};var u,p,f;l.parameters={...l.parameters,docs:{...(u=l.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    query: "fremheve",
    styles: {
      px: "1",
      py: "1",
      bg: "orange.100"
    }
  },
  render: args => <Box textAlign={"center"}>
      <KvibHighlight {...args}>Det er mulig å fremheve ord med Highlight.</KvibHighlight>
    </Box>
}`,...(f=(p=l.parameters)==null?void 0:p.docs)==null?void 0:f.source}}};var b,x,y;o.parameters={...o.parameters,docs:{...(b=o.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    query: ["skjøte", "hjemmelserklæring", "hjemmelsoverføring"],
    styles: {
      px: "2",
      py: "1",
      rounded: "full",
      bg: "teal.100"
    }
  },
  render: args => <KvibHeading lineHeight="tall" size="lg">
      <KvibHighlight {...args}>
        Du kan tinglyse et eierskifte i grunneboken ved å fylle ut et skjøte, en hjemmelserklæring ved arv, skifte og
        uskifte, eller hjemmelsoverføring til andel i borettslag.
      </KvibHighlight>
    </KvibHeading>
}`,...(y=(x=o.parameters)==null?void 0:x.docs)==null?void 0:y.source}}};var v,j,k;a.parameters={...a.parameters,docs:{...(v=a.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    query: "kart",
    styles: {
      py: "1",
      fontWeight: "normal"
    }
  },
  render: args => <KvibBox>
      <KvibText>Søkeresultat for: "kart"</KvibText>
      <KvibText mt="6" fontWeight="bold">
        <KvibHighlight {...args}>Kartverket</KvibHighlight>
      </KvibText>
      <KvibText fontWeight="bold">
        <KvibHighlight {...args}>Sjøkart</KvibHighlight>
      </KvibText>
      <KvibText fontWeight="bold">
        <KvibHighlight {...args}>Marint kartarbeid</KvibHighlight>
      </KvibText>
    </KvibBox>
}`,...(k=(j=a.parameters)==null?void 0:j.docs)==null?void 0:k.source}}};const E=["Preview","HighlightMultiple","HighlightSubstring"],C=Object.freeze(Object.defineProperty({__proto__:null,HighlightMultiple:o,HighlightSubstring:a,Preview:l,__namedExportsOrder:E,default:P},Symbol.toStringTag,{value:"Module"}));export{C as H,l as P,o as a,a as b};
