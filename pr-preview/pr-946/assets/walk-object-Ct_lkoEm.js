const p=r=>r!=null&&typeof r=="object"&&!Array.isArray(r),d=r=>/^var\(--.+\)$/.test(r),h=r=>typeof r=="string",k=r=>typeof r=="function",O=r=>r!=null;function m(r,t,s={}){const{stop:i,getKey:c}=s;function e(n,o=[]){if(p(n)||Array.isArray(n)){const f={};for(const[u,a]of Object.entries(n)){const y=(c==null?void 0:c(u,a))??u,l=[...o,y];if(i!=null&&i(n,l))return t(n,o);const A=e(a,l);O(A)&&(f[y]=A)}return f}return t(n,o)}return e(r)}function w(r,t){return Array.isArray(r)?r.map(s=>t(s)):p(r)?m(r,s=>t(s)):r!=null?t(r):r}export{p as a,h as b,k as c,d as i,w as m,m as w};
