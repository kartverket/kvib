const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./index-C2WH5l5l.js","./index-Wp2u197Z.js"])))=>i.map(i=>d[i]);
import{_ as i}from"./iframe-wwWTPeck.js";import{e as t,r as l}from"./index-Wp2u197Z.js";import{aj as p,ak as u,al as h,am as d}from"./index-DG2E561w.js";import{renderElement as E,unmountElement as x}from"./react-18-B9NBEw6j.js";var D={code:p,a:u,...h},_=class extends l.Component{constructor(){super(...arguments),this.state={hasError:!1}}static getDerivedStateFromError(){return{hasError:!0}}componentDidCatch(r){let{showException:e}=this.props;e(r)}render(){let{hasError:r}=this.state,{children:e}=this.props;return r?null:t.createElement(t.Fragment,null,e)}},y=class{constructor(){this.render=async(r,e,n)=>{let s={...D,...e==null?void 0:e.components},a=d;return new Promise((m,c)=>{i(async()=>{const{MDXProvider:o}=await import("./index-C2WH5l5l.js");return{MDXProvider:o}},__vite__mapDeps([0,1]),import.meta.url).then(({MDXProvider:o})=>E(t.createElement(_,{showException:c,key:Math.random()},t.createElement(o,{components:s},t.createElement(a,{context:r,docsParameter:e}))),n)).then(()=>m())})},this.unmount=r=>{x(r)}}};export{y as D,D as d};