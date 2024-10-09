import{j as t}from"./extends-CwFRzn3r.js";import{u as d,S as c}from"./chunk-W64KV3Y7-kEgjCWXt.js";import{I as y}from"./chunk-2GBDXOMA-K_WHOyag.js";import{c as l,f as u,a as m}from"./chunk-ZJJGQIVY-CoI1iMVy.js";var N=a=>t.jsx(y,{color:"red.400",...a,children:t.jsx("path",{fill:"currentColor",d:"M21,5H3C2.621,5,2.275,5.214,2.105,5.553C1.937,5.892,1.973,6.297,2.2,6.6l9,12 c0.188,0.252,0.485,0.4,0.8,0.4s0.611-0.148,0.8-0.4l9-12c0.228-0.303,0.264-0.708,0.095-1.047C21.725,5.214,21.379,5,21,5z"})});N.displayName="StatDownArrow";function _(a){return t.jsx(y,{color:"green.400",...a,children:t.jsx("path",{fill:"currentColor",d:"M12.8,5.4c-0.377-0.504-1.223-0.504-1.6,0l-9,12c-0.228,0.303-0.264,0.708-0.095,1.047 C2.275,18.786,2.621,19,3,19h18c0.379,0,0.725-0.214,0.895-0.553c0.169-0.339,0.133-0.744-0.095-1.047L12.8,5.4z"})})}_.displayName="StatUpArrow";function p(a){const{type:e,"aria-label":r,...s}=a,w=d(),L=e==="increase"?_:N,k=r||(e==="increase"?"increased by":"decreased by");return t.jsxs(t.Fragment,{children:[t.jsx(l.span,{srOnly:!0,children:k}),t.jsx(L,{"aria-hidden":!0,...s,__css:w.icon})]})}p.displayName="StatArrow";var g=u(function(e,r){return t.jsx(l.div,{...e,ref:r,role:"group",className:m("chakra-stat__group",e.className),__css:{display:"flex",flexWrap:"wrap",justifyContent:"space-around",alignItems:"flex-start"}})});g.displayName="StatGroup";var o=u(function(e,r){const s=d();return t.jsx(l.dd,{ref:r,...e,className:m("chakra-stat__help-text",e.className),__css:s.helpText})});o.displayName="StatHelpText";var S=u(function(e,r){const s=d();return t.jsx(l.dt,{ref:r,...e,className:m("chakra-stat__label",e.className),__css:s.label})});S.displayName="StatLabel";var b=u(function(e,r){const s=d();return t.jsx(l.dd,{ref:r,...e,className:m("chakra-stat__number",e.className),__css:{...s.number,fontFeatureSettings:"pnum",fontVariantNumeric:"proportional-nums"}})});b.displayName="StatNumber";const T={title:"Datavisning/Stat",component:c,parameters:{docs:{story:{inline:!0},canvas:{sourceState:"shown"}}}},n={args:{},render:a=>t.jsxs(c,{...a,children:[t.jsx(S,{children:"Utgifter"}),t.jsx(b,{children:"3200kr"}),t.jsx(o,{children:"Feb 12 - Feb 28"})]})},i={args:{},render:a=>t.jsxs(g,{children:[t.jsxs(c,{...a,children:[t.jsx(S,{children:"Sendt"}),t.jsx(b,{children:"345,670"}),t.jsxs(o,{children:[t.jsx(p,{type:"increase"}),"23.36%"]})]}),t.jsxs(c,{...a,children:[t.jsx(S,{children:"Klikk"}),t.jsx(b,{children:"45"}),t.jsxs(o,{children:[t.jsx(p,{type:"decrease"}),"9.05%"]})]})]})};var x,v,j;n.parameters={...n.parameters,docs:{...(x=n.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {},
  render: args => <KvibStat {...args}>
      <KvibStatLabel>Utgifter</KvibStatLabel>
      <KvibStatNumber>3200kr</KvibStatNumber>
      <KvibStatHelpText>Feb 12 - Feb 28</KvibStatHelpText>
    </KvibStat>
}`,...(j=(v=n.parameters)==null?void 0:v.docs)==null?void 0:j.source}}};var K,h,f;i.parameters={...i.parameters,docs:{...(K=i.parameters)==null?void 0:K.docs,source:{originalSource:`{
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
}`,...(f=(h=i.parameters)==null?void 0:h.docs)==null?void 0:f.source}}};const A=["Stat","StatIndicator"],O=Object.freeze(Object.defineProperty({__proto__:null,Stat:n,StatIndicator:i,__namedExportsOrder:A,default:T},Symbol.toStringTag,{value:"Module"}));export{O as S,n as a,i as b};