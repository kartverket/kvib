import{j as s}from"./extends-CwFRzn3r.js";import{r as c}from"./index-BwDkhjyp.js";import{B as l}from"./box-B7h7acUJ.js";import{f as m}from"./forward-ref-BWI-Phbn.js";import{u as g,o as u}from"./use-style-config--HlEOpE-.js";const f=m(function(t,r){const o=g("Mark",t),n=u(t);return s.jsx(l,{ref:r,...n,as:"mark",__css:{bg:"transparent",whiteSpace:"nowrap",...o}})}),h=e=>e.replace(/[|\\{}()[\]^$+*?.-]/g,t=>`\\${t}`);function p(e){const t=e.filter(r=>r.length!==0).map(r=>h(r.trim()));return t.length?new RegExp(`(${t.join("|")})`,"ig"):null}function x({text:e,query:t}){const r=p(Array.isArray(t)?t:[t]);return r?e.split(r).filter(Boolean).map(n=>({text:n,match:r.test(n)})):[{text:e,match:!1}]}function d(e){const{text:t,query:r}=e;return c.useMemo(()=>x({text:t,query:r}),[t,r])}function H(e){const{children:t,query:r,styles:o}=e;if(typeof t!="string")throw new Error("The children prop of Highlight must be a string");const n=d({query:r,text:t});return s.jsx(s.Fragment,{children:n.map((i,a)=>i.match?s.jsx(f,{sx:o,children:i.text},a):s.jsx(c.Fragment,{children:i.text},a))})}export{H};
