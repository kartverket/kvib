import{j as o}from"./jsx-runtime-sfY7k0Xq.js";import{useMDXComponents as i}from"./index-BRkUXrbv.js";import"./chunk-NUUEMKO5-DiA3V88u.js";import{ae as s,ai as e}from"./index-C-eDq7uL.js";import"./index-CcKhGcwW.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./iframe-DZueWxJB.js";import"../sb-preview/runtime.js";import"./react-18-ChRDcVY1.js";import"./index-DI5DFbIx.js";import"./index-D-8MO0q_.js";import"./index-CJyPbrN5.js";import"./index-DrFu-skq.js";const a=`
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
