import{c,f as _,a as y}from"./chunk-ZJJGQIVY-CoI1iMVy.js";import{s as C}from"./chunk-SR4VX3RF-BplkwScB.js";import{s as e}from"./chunk-7254PCTD-Dz4qzdo-.js";import{r as j}from"./index-BwDkhjyp.js";import{j as s}from"./extends-CwFRzn3r.js";import{m as N}from"./proxy-CzVOQe18.js";import{d as l,u as S,e as w}from"./chunk-OFOVX77R-DinjXdWq.js";var I={slideInBottom:{...e,custom:{offsetY:16,reverse:!0}},slideInRight:{...e,custom:{offsetX:16,reverse:!0}},slideInTop:{...e,custom:{offsetY:-16,reverse:!0}},slideInLeft:{...e,custom:{offsetX:-16,reverse:!0}},scale:{...C,custom:{initialScale:.95,reverse:!0}},none:{}},R=c(N.section),k=o=>I[o||"none"],d=j.forwardRef((o,t)=>{const{preset:r,motionProps:a=k(r),...n}=o;return s.jsx(R,{ref:t,...a,...n})});d.displayName="ModalTransition";var D=_((o,t)=>{const{className:r,children:a,containerProps:n,motionProps:m,...p}=o,{getDialogProps:f,getDialogContainerProps:u}=l(),x=f(p,t),g=u(n),v=y("chakra-modal__content",r),i=S(),h={display:"flex",flexDirection:"column",position:"relative",width:"100%",outline:0,...i.dialog},M={display:"flex",width:"100vw",height:"$100vh",position:"fixed",left:0,top:0,...i.dialogContainer},{motionPreset:P}=l();return s.jsx(w,{children:s.jsx(c.div,{...g,className:"chakra-modal__content-container",tabIndex:-1,__css:M,children:s.jsx(d,{preset:P,motionProps:m,className:v,...x,__css:h,children:a})})})});D.displayName="ModalContent";export{D as M};