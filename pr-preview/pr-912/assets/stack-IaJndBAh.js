import{j as d}from"./jsx-runtime-sfY7k0Xq.js";import{r as e}from"./index-CcKhGcwW.js";import{c as W,b as k}from"./factory-Dr_T95xI.js";import{m as j}from"./walk-object-CRYnzttT.js";function I(o){const{gap:r,direction:a}=o,t={column:{marginY:r,marginX:0,borderInlineStartWidth:0,borderTopWidth:"1px"},"column-reverse":{marginY:r,marginX:0,borderInlineStartWidth:0,borderTopWidth:"1px"},row:{marginX:r,marginY:0,borderInlineStartWidth:"1px",borderTopWidth:0},"row-reverse":{marginX:r,marginY:0,borderInlineStartWidth:"1px",borderTopWidth:0}};return{"&":j(a,i=>t[i])}}function v(o){return e.Children.toArray(o).filter(r=>e.isValidElement(r))}const Y=e.forwardRef(function(r,a){const{direction:t="column",align:i,justify:u,gap:s="0.5rem",wrap:f,children:c,separator:n,className:g,...h}=r,l=e.useMemo(()=>I({gap:s,direction:t}),[s,t]),x=e.useMemo(()=>n?v(c).map((m,p,y)=>{const b=typeof m.key<"u"?m.key:p,S=e.cloneElement(n,{css:[l,n.props.css]});return d.jsxs(e.Fragment,{children:[m,p===y.length-1?null:S]},b)}):c,[c,n,l]);return d.jsx(W.div,{ref:a,display:"flex",alignItems:i,justifyContent:u,flexDirection:t,flexWrap:f,gap:n?void 0:s,className:k("chakra-stack",g),...h,children:x})});export{Y as S};