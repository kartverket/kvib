const p=n=>n!=null&&typeof n=="object"&&!Array.isArray(n),m=n=>/^var\(--.+\)$/.test(n),h=n=>typeof n=="string",k=n=>typeof n=="function",O=n=>n!=null;function d(n,r,s={}){const{stop:i,getKey:c}=s;function o(t,e=[]){if(p(t)||Array.isArray(t)){const f={};for(const[u,a]of Object.entries(t)){const y=(c==null?void 0:c(u,a))??u,l=[...e,y];if(i!=null&&i(t,l))return r(t,e);const A=o(a,l);O(A)&&(f[y]=A)}return f}return r(t,e)}return o(n)}function w(n,r){return Array.isArray(n)?n.map(s=>r(s)):p(n)?d(n,s=>r(s)):n!=null?r(n):n}export{p as a,h as b,k as c,m as i,w as m,d as w};
