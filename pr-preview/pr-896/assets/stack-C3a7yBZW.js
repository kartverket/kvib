import{j as i}from"./extends-CwFRzn3r.js";import{r as s}from"./index-BwDkhjyp.js";import{c as W}from"./factory-lWLPzty5.js";import{m as D}from"./responsive-BbUtuhhZ.js";import{f as I}from"./forward-ref-BWI-Phbn.js";import{g as E}from"./children-2ZXUntH3.js";import{c as R}from"./cx-BDMMs1jM.js";const _=e=>i.jsx(W.div,{className:"chakra-stack__item",...e,__css:{display:"inline-block",flex:"0 0 auto",minWidth:0,...e.__css}});_.displayName="StackItem";function M(e){const{spacing:t,direction:n}=e,d={column:{my:t,mx:0,borderLeftWidth:0,borderBottomWidth:"1px"},"column-reverse":{my:t,mx:0,borderLeftWidth:0,borderBottomWidth:"1px"},row:{mx:t,my:0,borderLeftWidth:"1px",borderBottomWidth:0},"row-reverse":{mx:t,my:0,borderLeftWidth:"1px",borderBottomWidth:0}};return{"&":D(n,c=>d[c])}}const F=I((e,t)=>{const{isInline:n,direction:d,align:c,justify:g,spacing:a="0.5rem",wrap:b,children:h,divider:m,className:j,shouldWrapChildren:l,...S}=e,p=n?"row":d??"column",x=s.useMemo(()=>M({spacing:a,direction:p}),[a,p]),r=!!m,u=!l&&!r,w=s.useMemo(()=>{const f=E(h);return u?f:f.map((o,y)=>{const v=typeof o.key<"u"?o.key:y,N=y+1===f.length,k=l?i.jsx(_,{children:o},v):o;if(!r)return k;const L=s.cloneElement(m,{__css:x}),B=N?null:L;return i.jsxs(s.Fragment,{children:[k,B]},v)})},[m,x,r,u,l,h]),C=R("chakra-stack",j);return i.jsx(W.div,{ref:t,display:"flex",alignItems:c,justifyContent:g,flexDirection:p,flexWrap:b,gap:r?void 0:a,className:C,...S,children:w})});F.displayName="Stack";export{F as S};
