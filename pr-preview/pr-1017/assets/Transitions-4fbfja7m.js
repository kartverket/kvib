import{j as o}from"./jsx-runtime-D_zvdyIk.js";import{useMDXComponents as i}from"./index-CfoPgG5w.js";import"./index-C2SNSthn.js";import{M as s,S as e}from"./index-cHrQXJ43.js";import"./index-Bj2TM2QZ.js";import"./preview-CGKBEMC1.js";import"./iframe-CfsTLJA0.js";import"./DocsRenderer-CFRXHY34-CSdK36ks.js";import"./react-18-mqHmL3K7.js";import"./index-kjvw1_fE.js";import"./index-CVNl4AZj.js";import"./index-CXQShRbs.js";import"./index-DrFu-skq.js";const a=`
const transitionProperty = {
  common: "background-color, border-color, color, fill, stroke, opacity, box-shadow, transform",
  colors: "background-color, border-color, color, fill, stroke",
  dimensions: "width, height",
  position: "left, right, top, bottom",
  background: "background-color, background-image, background-position",
};

const transitionTimingFunction = {
  "ease-in": "cubic-bezier(0.4, 0, 1, 1)",
  "ease-out": "cubic-bezier(0, 0, 0.2, 1)",
  "ease-in-out": "cubic-bezier(0.4, 0, 0.2, 1)",
};

const transitionDuration = {
  "ultra-fast": "50ms",
  faster: "100ms",
  fast: "150ms",
  normal: "200ms",
  slow: "300ms",
  slower: "400ms",
  "ultra-slow": "500ms",
};

const transition = {
  property: transitionProperty,
  easing: transitionTimingFunction,
  duration: transitionDuration,
};

export default transition;
`;function r(t){const n={h2:"h2",...i(),...t.components};return o.jsxs(o.Fragment,{children:[o.jsx(s,{title:"Komponenter/Tokens/Transitions"}),`
`,o.jsx(n.h2,{id:"transitions",children:"Transitions"}),`
`,o.jsx(e,{code:a})]})}function w(t={}){const{wrapper:n}={...i(),...t.components};return n?o.jsx(n,{...t,children:o.jsx(r,{...t})}):r(t)}export{w as default};
