import{j as t}from"./extends-CwFRzn3r.js";import{B as k}from"./chunk-PULVB27S-CgiffgmI.js";import{u as K}from"./chunk-DMO4EI7P-D6u3hnqn.js";import{f as S,o as T}from"./chunk-ZJJGQIVY-CoI1iMVy.js";import{r as H}from"./index-BwDkhjyp.js";import{T as h}from"./chunk-2OOHT3W5-CV6N7GVi.js";import{H as w}from"./chunk-7OLJDQMT-lazN81OQ.js";var q=e=>e.replace(/[|\\{}()[\]^$+*?.-]/g,r=>`\\${r}`);function M(e){const r=e.filter(i=>i.length!==0).map(i=>q(i.trim()));return r.length?new RegExp(`(${r.join("|")})`,"ig"):null}function W({text:e,query:r}){const i=M(Array.isArray(r)?r:[r]);return i?e.split(i).filter(Boolean).map(n=>({text:n,match:i.test(n)})):[{text:e,match:!1}]}function _(e){const{text:r,query:i}=e;return H.useMemo(()=>W({text:r,query:i}),[r,i])}var B=S(function(r,i){const g=K("Mark",r),n=T(r);return t.jsx(k,{ref:i,...n,as:"mark",__css:{bg:"transparent",whiteSpace:"nowrap",...g}})});function s(e){const{children:r,query:i,styles:g}=e;if(typeof r!="string")throw new Error("The children prop of Highlight must be a string");const n=_({query:i,text:r});return t.jsx(t.Fragment,{children:n.map((m,c)=>m.match?t.jsx(B,{sx:g,children:m.text},c):t.jsx(H.Fragment,{children:m.text},c))})}const D={title:"Datavisning/Highlight",component:s,parameters:{docs:{story:{inline:!0},canvas:{sourceState:"shown"}}},argTypes:{query:{name:"query*",description:"The highlighted word",table:{type:{summary:"string | string[]"}},control:"text"},styles:{description:"The style for the highlighted word",table:{type:{summary:"SystemStyleObject"}}}}},l={args:{query:"fremheve",styles:{px:"1",py:"1",bg:"orange.100"}},render:e=>t.jsx(s,{...e,children:"Det er mulig å fremheve ord med Highlight."})},a={args:{query:["skjøte","hjemmelserklæring","hjemmelsoverføring"],styles:{px:"2",py:"1",rounded:"full",bg:"teal.100"}},render:e=>t.jsx(w,{lineHeight:"tall",size:"lg",children:t.jsx(s,{...e,children:"Du kan tinglyse et eierskifte i grunneboken ved å fylle ut et skjøte, en hjemmelserklæring ved arv, skifte og uskifte, eller hjemmelsoverføring til andel i borettslag."})})},o={args:{query:"kart",styles:{py:"1",fontWeight:"normal"}},render:e=>t.jsxs(k,{children:[t.jsx(h,{children:'Søkeresultat for: "kart"'}),t.jsx(h,{mt:"6",fontWeight:"bold",children:t.jsx(s,{...e,children:"Kartverket"})}),t.jsx(h,{fontWeight:"bold",children:t.jsx(s,{...e,children:"Sjøkart"})}),t.jsx(h,{fontWeight:"bold",children:t.jsx(s,{...e,children:"Marint kartarbeid"})})]})};var d,u,p;l.parameters={...l.parameters,docs:{...(d=l.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    query: "fremheve",
    styles: {
      px: "1",
      py: "1",
      bg: "orange.100"
    }
  },
  render: args => <KvibHighlight {...args}>Det er mulig å fremheve ord med Highlight.</KvibHighlight>
}`,...(p=(u=l.parameters)==null?void 0:u.docs)==null?void 0:p.source}}};var f,b,x;a.parameters={...a.parameters,docs:{...(f=a.parameters)==null?void 0:f.docs,source:{originalSource:`{
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
}`,...(x=(b=a.parameters)==null?void 0:b.docs)==null?void 0:x.source}}};var v,y,j;o.parameters={...o.parameters,docs:{...(v=o.parameters)==null?void 0:v.docs,source:{originalSource:`{
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
}`,...(j=(y=o.parameters)==null?void 0:y.docs)==null?void 0:j.source}}};const E=["Highlight","HighlightMultiple","HighlightSubstring"],C=Object.freeze(Object.defineProperty({__proto__:null,Highlight:l,HighlightMultiple:a,HighlightSubstring:o,__namedExportsOrder:E,default:D},Symbol.toStringTag,{value:"Module"}));export{C as H,a,o as b,l as c};
