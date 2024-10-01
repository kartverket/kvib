import{j as t}from"./extends-CwFRzn3r.js";import{c as A}from"./index-CHDWSgKD.js";import{a as C}from"./chunk-DMO4EI7P-D6u3hnqn.js";import{f as o,o as H,c as n,a as S}from"./chunk-ZJJGQIVY-CoI1iMVy.js";import{I as w}from"./chunk-2GBDXOMA-K_WHOyag.js";var[F,m]=A({name:"StatStylesContext",errorMessage:`useStatStyles returned is 'undefined'. Seems you forgot to wrap the components in "<Stat />" `}),c=o(function(e,r){const s=C("Stat",e),p={position:"relative",flex:"1 1 0%",...s.container},{className:x,children:f,...v}=H(e);return t.jsx(F,{value:s,children:t.jsx(n.div,{ref:r,...v,className:S("chakra-stat",x),__css:p,children:t.jsx("dl",{children:f})})})});c.displayName="Stat";var L=a=>t.jsx(w,{color:"red.400",...a,children:t.jsx("path",{fill:"currentColor",d:"M21,5H3C2.621,5,2.275,5.214,2.105,5.553C1.937,5.892,1.973,6.297,2.2,6.6l9,12 c0.188,0.252,0.485,0.4,0.8,0.4s0.611-0.148,0.8-0.4l9-12c0.228-0.303,0.264-0.708,0.095-1.047C21.725,5.214,21.379,5,21,5z"})});L.displayName="StatDownArrow";function k(a){return t.jsx(w,{color:"green.400",...a,children:t.jsx("path",{fill:"currentColor",d:"M12.8,5.4c-0.377-0.504-1.223-0.504-1.6,0l-9,12c-0.228,0.303-0.264,0.708-0.095,1.047 C2.275,18.786,2.621,19,3,19h18c0.379,0,0.725-0.214,0.895-0.553c0.169-0.339,0.133-0.744-0.095-1.047L12.8,5.4z"})})}k.displayName="StatUpArrow";function h(a){const{type:e,"aria-label":r,...s}=a,p=m(),x=e==="increase"?k:L,v=r||(e==="increase"?"increased by":"decreased by");return t.jsxs(t.Fragment,{children:[t.jsx(n.span,{srOnly:!0,children:v}),t.jsx(x,{"aria-hidden":!0,...s,__css:p.icon})]})}h.displayName="StatArrow";var T=o(function(e,r){return t.jsx(n.div,{...e,ref:r,role:"group",className:S("chakra-stat__group",e.className),__css:{display:"flex",flexWrap:"wrap",justifyContent:"space-around",alignItems:"flex-start"}})});T.displayName="StatGroup";var d=o(function(e,r){const s=m();return t.jsx(n.dd,{ref:r,...e,className:S("chakra-stat__help-text",e.className),__css:s.helpText})});d.displayName="StatHelpText";var b=o(function(e,r){const s=m();return t.jsx(n.dt,{ref:r,...e,className:S("chakra-stat__label",e.className),__css:s.label})});b.displayName="StatLabel";var u=o(function(e,r){const s=m();return t.jsx(n.dd,{ref:r,...e,className:S("chakra-stat__number",e.className),__css:{...s.number,fontFeatureSettings:"pnum",fontVariantNumeric:"proportional-nums"}})});u.displayName="StatNumber";const I={title:"Datavisning/Stat",component:c,parameters:{docs:{story:{inline:!0},canvas:{sourceState:"shown"}}}},i={args:{},render:a=>t.jsxs(c,{...a,children:[t.jsx(b,{children:"Utgifter"}),t.jsx(u,{children:"3200kr"}),t.jsx(d,{children:"Feb 12 - Feb 28"})]})},l={args:{},render:a=>t.jsxs(T,{children:[t.jsxs(c,{...a,children:[t.jsx(b,{children:"Sendt"}),t.jsx(u,{children:"345,670"}),t.jsxs(d,{children:[t.jsx(h,{type:"increase"}),"23.36%"]})]}),t.jsxs(c,{...a,children:[t.jsx(b,{children:"Klikk"}),t.jsx(u,{children:"45"}),t.jsxs(d,{children:[t.jsx(h,{type:"decrease"}),"9.05%"]})]})]})};var j,y,K;i.parameters={...i.parameters,docs:{...(j=i.parameters)==null?void 0:j.docs,source:{originalSource:`{
  args: {},
  render: args => <KvibStat {...args}>
      <KvibStatLabel>Utgifter</KvibStatLabel>
      <KvibStatNumber>3200kr</KvibStatNumber>
      <KvibStatHelpText>Feb 12 - Feb 28</KvibStatHelpText>
    </KvibStat>
}`,...(K=(y=i.parameters)==null?void 0:y.docs)==null?void 0:K.source}}};var N,_,g;l.parameters={...l.parameters,docs:{...(N=l.parameters)==null?void 0:N.docs,source:{originalSource:`{
  args: {},
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
}`,...(g=(_=l.parameters)==null?void 0:_.docs)==null?void 0:g.source}}};const G=["Stat","StatIndicator"],P=Object.freeze(Object.defineProperty({__proto__:null,Stat:i,StatIndicator:l,__namedExportsOrder:G,default:I},Symbol.toStringTag,{value:"Module"}));export{P as S,i as a,l as b};
