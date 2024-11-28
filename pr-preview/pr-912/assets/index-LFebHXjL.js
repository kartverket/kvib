import{d as g,e as l,w as m,o as v,p as I,$ as E,a0 as R}from"./create-slot-recipe-context-BTQZ2sOO.js";var p=g("avatar").parts("root","image","fallback"),s=p.build(),o=l({getRootId:e=>{var a;return((a=e.ids)==null?void 0:a.root)??`avatar:${e.id}`},getImageId:e=>{var a;return((a=e.ids)==null?void 0:a.image)??`avatar:${e.id}:image`},getFallbackId:e=>{var a;return((a=e.ids)==null?void 0:a.fallback)??`avatar:${e.id}:fallback`},getRootEl:e=>o.getById(e,o.getRootId(e)),getImageEl:e=>o.getById(e,o.getImageId(e))});function b(e,a,t){const r=e.matches("loaded");return{loaded:r,setSrc(i){a({type:"SRC.SET",src:i})},setLoaded(){a({type:"IMG.LOADED",src:"api"})},setError(){a({type:"IMG.ERROR",src:"api"})},getRootProps(){return t.element({...s.root.attrs,dir:e.context.dir,id:o.getRootId(e.context)})},getImageProps(){return t.img({...s.image.attrs,hidden:!r,dir:e.context.dir,id:o.getImageId(e.context),"data-state":r?"visible":"hidden",onLoad(){a({type:"IMG.LOADED",src:"element"})},onError(){a({type:"IMG.ERROR",src:"element"})}})},getFallbackProps(){return t.element({...s.fallback.attrs,dir:e.context.dir,id:o.getFallbackId(e.context),hidden:r,"data-state":r?"hidden":"visible"})}}}function M(e){const a=v(e);return I({id:"avatar",initial:"loading",activities:["trackImageRemoval"],context:a,on:{"SRC.CHANGE":{target:"loading"},"IMG.UNMOUNT":{target:"error"}},states:{loading:{activities:["trackSrcChange"],entry:["checkImageStatus"],on:{"IMG.LOADED":{target:"loaded",actions:["invokeOnLoad"]},"IMG.ERROR":{target:"error",actions:["invokeOnError"]}}},error:{activities:["trackSrcChange"],on:{"IMG.LOADED":{target:"loaded",actions:["invokeOnLoad"]}}},loaded:{activities:["trackSrcChange"],on:{"IMG.ERROR":{target:"error",actions:["invokeOnError"]}}}}},{activities:{trackSrcChange(t,r,{send:i}){const n=o.getImageEl(t);return E(n,{attributes:["src","srcset"],callback(){i({type:"SRC.CHANGE"})}})},trackImageRemoval(t,r,{send:i}){const n=o.getRootEl(t);return R(n,{callback(d){Array.from(d[0].removedNodes).find(c=>c.nodeType===Node.ELEMENT_NODE&&c.matches("[data-scope=avatar][data-part=image]"))&&i({type:"IMG.UNMOUNT"})}})}},actions:{invokeOnLoad(t){var r;(r=t.onStatusChange)==null||r.call(t,{status:"loaded"})},invokeOnError(t){var r;(r=t.onStatusChange)==null||r.call(t,{status:"error"})},checkImageStatus(t,r,{send:i}){const n=o.getImageEl(t);if(n!=null&&n.complete){const d=k(n)?"IMG.LOADED":"IMG.ERROR";i({type:d,src:"ssr"})}}}})}function k(e){return e.complete&&e.naturalWidth!==0&&e.naturalHeight!==0}m()(["dir","id","ids","onStatusChange","getRootNode"]);export{p as a,b as c,M as m};
