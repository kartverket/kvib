function m(t){const r=new Map;return function(a,i){const n=a+(i?Object.entries(i).sort((s,c)=>s[0]<c[0]?-1:1).join():"");if(r.has(n))return r.get(n);let o=new t(a,i);return r.set(n,o),o}}var f=m(Intl.NumberFormat);function h(t,r,e={}){return f(r,e).format(t)}var l=["","kilo","mega","giga","tera"],g=["","kilo","mega","giga","tera","peta"],v=(t,r="en-US",e={})=>{if(isNaN(t))return"";if(t===0)return"0 B";const{unit:a="byte",unitDisplay:i="short"}=e,n=a==="bit"?l:g,o=Math.max(0,Math.min(Math.floor(Math.log10(t)/3),n.length-1)),s=n[o]+a,c=i||"short",u=parseFloat((t/Math.pow(1e3,o)).toPrecision(3));return h(u,r,{style:"unit",unit:s,unitDisplay:c})},p=new Set(["Avst","Arab","Armi","Syrc","Samr","Mand","Thaa","Mend","Nkoo","Adlm","Rohg","Hebr"]),b=new Set(["ae","ar","arc","bcc","bqi","ckb","dv","fa","glk","he","ku","mzn","nqo","pnb","ps","sd","ug","ur","yi"]);function M(t){if(Intl.Locale){const e=new Intl.Locale(t).maximize().script??"";return p.has(e)}const r=t.split("-")[0];return b.has(r)}export{h as a,v as f,M as i};