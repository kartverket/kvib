import{j as r}from"./extends-CwFRzn3r.js";import{e as C,u as D,c as P,d as y}from"./modal-overlay-BlwCg4fM.js";import{u as _}from"./use-theme-CeOC8r1f.js";import{c as j}from"./context-CBKykClo.js";import{S as v}from"./slide-D-toIuQT.js";import{c as d}from"./factory-DBKMNJMh.js";import{f as S}from"./forward-ref-BWI-Phbn.js";import{c as M}from"./cx-BDMMs1jM.js";const[N,k]=j(),O={start:{ltr:"left",rtl:"right"},end:{ltr:"right",rtl:"left"}};function R(t,e){var o;if(t)return((o=O[t])==null?void 0:o[e])??t}function H(t){var n;const{isOpen:e,onClose:o,placement:a="right",children:i,...c}=t,s=_(),l=(n=s.components)==null?void 0:n.Drawer,m=R(a,s.direction);return r.jsx(N,{value:{placement:m},children:r.jsx(C,{isOpen:e,onClose:o,styleConfig:l,...c,children:i})})}const E=d(v),F=S((t,e)=>{const{className:o,children:a,motionProps:i,containerProps:c,...s}=t,{getDialogProps:l,getDialogContainerProps:m,isOpen:n}=D(),f=l(s,e),h=m(c),u=M("chakra-modal__content",o),p=P(),x={display:"flex",flexDirection:"column",position:"relative",width:"100%",outline:0,...p.dialog},g={display:"flex",width:"100vw",height:"$100vh",position:"fixed",left:0,top:0,...p.dialogContainer},{placement:w}=k();return r.jsx(y,{children:r.jsx(d.div,{...h,className:"chakra-modal__content-container",__css:g,children:r.jsx(E,{motionProps:i,direction:w,in:n,className:u,...f,__css:x,children:a})})})});F.displayName="DrawerContent";export{H as D,F as a};