import{r as u}from"./index-BwDkhjyp.js";import{t as n,c as m,u as d}from"./toast.provider-Ccs5t8hm.js";import{r as l}from"./factory-DBKMNJMh.js";import{u as p}from"./hooks-Dk7VeZ_r.js";function f(a,r){const e=a??"bottom",t={"top-start":{ltr:"top-left",rtl:"top-right"},"top-end":{ltr:"top-right",rtl:"top-left"},"bottom-start":{ltr:"bottom-left",rtl:"bottom-right"},"bottom-end":{ltr:"bottom-right",rtl:"bottom-left"}}[e];return(t==null?void 0:t[r])??e}function g(a,r){const e=t=>({...r,...t,position:f((t==null?void 0:t.position)??(r==null?void 0:r.position),a)}),o=t=>{const s=e(t),c=m(s);return n.notify(c,s)};return o.update=(t,s)=>{n.update(t,e(s))},o.promise=(t,s)=>{const c=o({...s.loading,status:"loading",duration:null});t.then(i=>o.update(c,{status:"success",duration:5e3,...l(s.success,i)})).catch(i=>o.update(c,{status:"error",duration:5e3,...l(s.error,i)}))},o.closeAll=n.closeAll,o.close=n.close,o.isActive=n.isActive,o}function x(a){const{theme:r}=p(),e=d();return u.useMemo(()=>g(r.direction,{...e,...a}),[a,r.direction,e])}export{x as u};
