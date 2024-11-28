import{c as g}from"./index-BRNWFSEf.js";import{c as l,y as m,z as v}from"./index-C5caIrke.js";import{c as I,a as p}from"./index-Cq1GvU5P.js";import{c as E}from"./index-Ctx6eFvH.js";var R=g("avatar").parts("root","image","fallback"),c=R.build(),o=l({getRootId:t=>{var a;return((a=t.ids)==null?void 0:a.root)??`avatar:${t.id}`},getImageId:t=>{var a;return((a=t.ids)==null?void 0:a.image)??`avatar:${t.id}:image`},getFallbackId:t=>{var a;return((a=t.ids)==null?void 0:a.fallback)??`avatar:${t.id}:fallback`},getRootEl:t=>o.getById(t,o.getRootId(t)),getImageEl:t=>o.getById(t,o.getImageId(t))});function f(t,a,e){const r=t.matches("loaded");return{loaded:r,setSrc(n){a({type:"SRC.SET",src:n})},setLoaded(){a({type:"IMG.LOADED",src:"api"})},setError(){a({type:"IMG.ERROR",src:"api"})},getRootProps(){return e.element({...c.root.attrs,dir:t.context.dir,id:o.getRootId(t.context)})},getImageProps(){return e.img({...c.image.attrs,hidden:!r,dir:t.context.dir,id:o.getImageId(t.context),"data-state":r?"visible":"hidden",onLoad(){a({type:"IMG.LOADED",src:"element"})},onError(){a({type:"IMG.ERROR",src:"element"})}})},getFallbackProps(){return e.element({...c.fallback.attrs,dir:t.context.dir,id:o.getFallbackId(t.context),hidden:r,"data-state":r?"hidden":"visible"})}}}function S(t){const a=I(t);return p({id:"avatar",initial:"loading",activities:["trackImageRemoval"],context:a,on:{"SRC.CHANGE":{target:"loading"},"IMG.UNMOUNT":{target:"error"}},states:{loading:{activities:["trackSrcChange"],entry:["checkImageStatus"],on:{"IMG.LOADED":{target:"loaded",actions:["invokeOnLoad"]},"IMG.ERROR":{target:"error",actions:["invokeOnError"]}}},error:{activities:["trackSrcChange"],on:{"IMG.LOADED":{target:"loaded",actions:["invokeOnLoad"]}}},loaded:{activities:["trackSrcChange"],on:{"IMG.ERROR":{target:"error",actions:["invokeOnError"]}}}}},{activities:{trackSrcChange(e,r,{send:n}){const i=o.getImageEl(e);return m(i,{attributes:["src","srcset"],callback(){n({type:"SRC.CHANGE"})}})},trackImageRemoval(e,r,{send:n}){const i=o.getRootEl(e);return v(i,{callback(d){Array.from(d[0].removedNodes).find(s=>s.nodeType===Node.ELEMENT_NODE&&s.matches("[data-scope=avatar][data-part=image]"))&&n({type:"IMG.UNMOUNT"})}})}},actions:{invokeOnLoad(e){var r;(r=e.onStatusChange)==null||r.call(e,{status:"loaded"})},invokeOnError(e){var r;(r=e.onStatusChange)==null||r.call(e,{status:"error"})},checkImageStatus(e,r,{send:n}){const i=o.getImageEl(e);if(i!=null&&i.complete){const d=k(i)?"IMG.LOADED":"IMG.ERROR";n({type:d,src:"ssr"})}}}})}function k(t){return t.complete&&t.naturalWidth!==0&&t.naturalHeight!==0}E()(["dir","id","ids","onStatusChange","getRootNode"]);export{R as a,f as c,S as m};
