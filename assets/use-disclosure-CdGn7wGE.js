import{u as O}from"./use-callback-ref-DA6UG1mJ.js";import{r as s}from"./index-BwDkhjyp.js";function S(l={}){const{onClose:p,onOpen:k,isOpen:c,id:P}=l,t=O(k),i=O(p),[b,a]=s.useState(l.defaultIsOpen||!1),e=c!==void 0?c:b,n=c!==void 0,g=s.useId(),d=P??`disclosure-${g}`,r=s.useCallback(()=>{n||a(!1),i==null||i()},[n,i]),u=s.useCallback(()=>{n||a(!0),t==null||t()},[n,t]),f=s.useCallback(()=>{e?r():u()},[e,u,r]);function m(o={}){return{...o,"aria-expanded":e,"aria-controls":d,onClick(I){var C;(C=o.onClick)==null||C.call(o,I),f()}}}function x(o={}){return{...o,hidden:!e,id:d}}return{isOpen:e,onOpen:u,onClose:r,onToggle:f,isControlled:n,getButtonProps:m,getDisclosureProps:x}}export{S as u};