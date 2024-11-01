import{j as t}from"./extends-CwFRzn3r.js";import{f as l}from"./forward-ref-BWI-Phbn.js";import{a as A,o as C}from"./use-style-config-B2siLCbt.js";import{c as n}from"./factory-DBKMNJMh.js";import{c as H}from"./context-CBKykClo.js";import{c as d}from"./cx-BDMMs1jM.js";import{I as w}from"./icon-BmokjFuu.js";import{B as F}from"./box-CwIaBbUI.js";const[I,b]=H({name:"StatStylesContext",errorMessage:`useStatStyles returned is 'undefined'. Seems you forgot to wrap the components in "<Stat />" `}),c=l(function(e,r){const s=A("Stat",e),p={position:"relative",flex:"1 1 0%",...s.container},{className:x,children:h,...f}=C(e);return t.jsx(I,{value:s,children:t.jsx(n.div,{ref:r,...f,className:d("chakra-stat",x),__css:p,children:t.jsx("dl",{children:h})})})});c.displayName="Stat";const L=a=>t.jsx(w,{color:"red.400",...a,children:t.jsx("path",{fill:"currentColor",d:"M21,5H3C2.621,5,2.275,5.214,2.105,5.553C1.937,5.892,1.973,6.297,2.2,6.6l9,12 c0.188,0.252,0.485,0.4,0.8,0.4s0.611-0.148,0.8-0.4l9-12c0.228-0.303,0.264-0.708,0.095-1.047C21.725,5.214,21.379,5,21,5z"})});L.displayName="StatDownArrow";function k(a){return t.jsx(w,{color:"green.400",...a,children:t.jsx("path",{fill:"currentColor",d:"M12.8,5.4c-0.377-0.504-1.223-0.504-1.6,0l-9,12c-0.228,0.303-0.264,0.708-0.095,1.047 C2.275,18.786,2.621,19,3,19h18c0.379,0,0.725-0.214,0.895-0.553c0.169-0.339,0.133-0.744-0.095-1.047L12.8,5.4z"})})}k.displayName="StatUpArrow";function v(a){const{type:e,"aria-label":r,...s}=a,p=b(),x=e==="increase"?k:L,f=r||(e==="increase"?"increased by":"decreased by");return t.jsxs(t.Fragment,{children:[t.jsx(n.span,{srOnly:!0,children:f}),t.jsx(x,{"aria-hidden":!0,...s,__css:p.icon})]})}v.displayName="StatArrow";const T=l(function(e,r){return t.jsx(n.div,{...e,ref:r,role:"group",className:d("chakra-stat__group",e.className),__css:{display:"flex",flexWrap:"wrap",justifyContent:"space-around",alignItems:"flex-start"}})});T.displayName="StatGroup";const S=l(function(e,r){const s=b();return t.jsx(n.dd,{ref:r,...e,className:d("chakra-stat__help-text",e.className),__css:s.helpText})});S.displayName="StatHelpText";const m=l(function(e,r){const s=b();return t.jsx(n.dt,{ref:r,...e,className:d("chakra-stat__label",e.className),__css:s.label})});m.displayName="StatLabel";const u=l(function(e,r){const s=b();return t.jsx(n.dd,{ref:r,...e,className:d("chakra-stat__number",e.className),__css:{...s.number,fontFeatureSettings:"pnum",fontVariantNumeric:"proportional-nums"}})});u.displayName="StatNumber";const P={title:"Komponenter/Stat",component:c,parameters:{docs:{story:{inline:!0},canvas:{sourceState:"shown"}}}},o={render:a=>t.jsx(F,{children:t.jsxs(c,{...a,children:[t.jsx(m,{children:"Utgifter"}),t.jsx(u,{children:"3200kr"}),t.jsx(S,{children:"Feb 12 - Feb 28"})]})})},i={render:a=>t.jsxs(T,{children:[t.jsxs(c,{...a,children:[t.jsx(m,{children:"Sendt"}),t.jsx(u,{children:"345,670"}),t.jsxs(S,{children:[t.jsx(v,{type:"increase"}),"23.36%"]})]}),t.jsxs(c,{...a,children:[t.jsx(m,{children:"Klikk"}),t.jsx(u,{children:"45"}),t.jsxs(S,{children:[t.jsx(v,{type:"decrease"}),"9.05%"]})]})]})};var j,y,K;o.parameters={...o.parameters,docs:{...(j=o.parameters)==null?void 0:j.docs,source:{originalSource:`{
  render: args => <Box>
      <KvibStat {...args}>
        <KvibStatLabel>Utgifter</KvibStatLabel>
        <KvibStatNumber>3200kr</KvibStatNumber>
        <KvibStatHelpText>Feb 12 - Feb 28</KvibStatHelpText>
      </KvibStat>
    </Box>
}`,...(K=(y=o.parameters)==null?void 0:y.docs)==null?void 0:K.source}}};var N,_,g;i.parameters={...i.parameters,docs:{...(N=i.parameters)==null?void 0:N.docs,source:{originalSource:`{
  render: args => <KvibStatGroup>
      <KvibStat {...args}>
        <KvibStatLabel>Sendt</KvibStatLabel>
        <KvibStatNumber>345,670</KvibStatNumber>
        <KvibStatHelpText>
          <KvibStatArrow type="increase" />
          23.36%
        </KvibStatHelpText>
      </KvibStat>

      <KvibStat {...args}>
        <KvibStatLabel>Klikk</KvibStatLabel>
        <KvibStatNumber>45</KvibStatNumber>
        <KvibStatHelpText>
          <KvibStatArrow type="decrease" />
          9.05%
        </KvibStatHelpText>
      </KvibStat>
    </KvibStatGroup>
}`,...(g=(_=i.parameters)==null?void 0:_.docs)==null?void 0:g.source}}};const B=["Preview","StatIndicator"],V=Object.freeze(Object.defineProperty({__proto__:null,Preview:o,StatIndicator:i,__namedExportsOrder:B,default:P},Symbol.toStringTag,{value:"Module"}));export{o as P,V as S,i as a};
