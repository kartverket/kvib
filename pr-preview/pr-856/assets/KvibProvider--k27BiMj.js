import{j as i}from"./extends-CwFRzn3r.js";/* empty css              */import{G as z}from"./emotion-react.browser.esm-DOaDIBza.js";import{a as L}from"./chunk-34PD6CUK-B1dqEPkL.js";import{T as _,G as K}from"./chunk-MFVQSVQB-CA8z8kWU.js";import{G as q}from"./chunk-ZJJGQIVY-CoI1iMVy.js";import{u as G}from"./index-DJS8qWMq.js";import{r as d}from"./index-BwDkhjyp.js";import{E as I}from"./chunk-VMD3UMGK-5-kd4ADr.js";import{t as N,d as R}from"./index-CCHl0gzi.js";import{T as V,a as A}from"./chunk-3Y4YXCR2-DtyLwNq4.js";var j=String.raw,E=j`
  :root,
  :host {
    --chakra-vh: 100vh;
  }

  @supports (height: -webkit-fill-available) {
    :root,
    :host {
      --chakra-vh: -webkit-fill-available;
    }
  }

  @supports (height: -moz-fill-available) {
    :root,
    :host {
      --chakra-vh: -moz-fill-available;
    }
  }

  @supports (height: 100dvh) {
    :root,
    :host {
      --chakra-vh: 100dvh;
    }
  }
`,D=()=>i.jsx(z,{styles:E}),F=({scope:e=""})=>i.jsx(z,{styles:j`
      html {
        line-height: 1.5;
        -webkit-text-size-adjust: 100%;
        font-family: system-ui, sans-serif;
        -webkit-font-smoothing: antialiased;
        text-rendering: optimizeLegibility;
        -moz-osx-font-smoothing: grayscale;
        touch-action: manipulation;
      }

      body {
        position: relative;
        min-height: 100%;
        margin: 0;
        font-feature-settings: "kern";
      }

      ${e} :where(*, *::before, *::after) {
        border-width: 0;
        border-style: solid;
        box-sizing: border-box;
        word-wrap: break-word;
      }

      main {
        display: block;
      }

      ${e} hr {
        border-top-width: 1px;
        box-sizing: content-box;
        height: 0;
        overflow: visible;
      }

      ${e} :where(pre, code, kbd,samp) {
        font-family: SFMono-Regular, Menlo, Monaco, Consolas, monospace;
        font-size: 1em;
      }

      ${e} a {
        background-color: transparent;
        color: inherit;
        text-decoration: inherit;
      }

      ${e} abbr[title] {
        border-bottom: none;
        text-decoration: underline;
        -webkit-text-decoration: underline dotted;
        text-decoration: underline dotted;
      }

      ${e} :where(b, strong) {
        font-weight: bold;
      }

      ${e} small {
        font-size: 80%;
      }

      ${e} :where(sub,sup) {
        font-size: 75%;
        line-height: 0;
        position: relative;
        vertical-align: baseline;
      }

      ${e} sub {
        bottom: -0.25em;
      }

      ${e} sup {
        top: -0.5em;
      }

      ${e} img {
        border-style: none;
      }

      ${e} :where(button, input, optgroup, select, textarea) {
        font-family: inherit;
        font-size: 100%;
        line-height: 1.15;
        margin: 0;
      }

      ${e} :where(button, input) {
        overflow: visible;
      }

      ${e} :where(button, select) {
        text-transform: none;
      }

      ${e} :where(
          button::-moz-focus-inner,
          [type="button"]::-moz-focus-inner,
          [type="reset"]::-moz-focus-inner,
          [type="submit"]::-moz-focus-inner
        ) {
        border-style: none;
        padding: 0;
      }

      ${e} fieldset {
        padding: 0.35em 0.75em 0.625em;
      }

      ${e} legend {
        box-sizing: border-box;
        color: inherit;
        display: table;
        max-width: 100%;
        padding: 0;
        white-space: normal;
      }

      ${e} progress {
        vertical-align: baseline;
      }

      ${e} textarea {
        overflow: auto;
      }

      ${e} :where([type="checkbox"], [type="radio"]) {
        box-sizing: border-box;
        padding: 0;
      }

      ${e} input[type="number"]::-webkit-inner-spin-button,
      ${e} input[type="number"]::-webkit-outer-spin-button {
        -webkit-appearance: none !important;
      }

      ${e} input[type="number"] {
        -moz-appearance: textfield;
      }

      ${e} input[type="search"] {
        -webkit-appearance: textfield;
        outline-offset: -2px;
      }

      ${e} input[type="search"]::-webkit-search-decoration {
        -webkit-appearance: none !important;
      }

      ${e} ::-webkit-file-upload-button {
        -webkit-appearance: button;
        font: inherit;
      }

      ${e} details {
        display: block;
      }

      ${e} summary {
        display: list-item;
      }

      template {
        display: none;
      }

      [hidden] {
        display: none !important;
      }

      ${e} :where(
          blockquote,
          dl,
          dd,
          h1,
          h2,
          h3,
          h4,
          h5,
          h6,
          hr,
          figure,
          p,
          pre
        ) {
        margin: 0;
      }

      ${e} button {
        background: transparent;
        padding: 0;
      }

      ${e} fieldset {
        margin: 0;
        padding: 0;
      }

      ${e} :where(ol, ul) {
        margin: 0;
        padding: 0;
      }

      ${e} textarea {
        resize: vertical;
      }

      ${e} :where(button, [role="button"]) {
        cursor: pointer;
      }

      ${e} button::-moz-focus-inner {
        border: 0 !important;
      }

      ${e} table {
        border-collapse: collapse;
      }

      ${e} :where(h1, h2, h3, h4, h5, h6) {
        font-size: inherit;
        font-weight: inherit;
      }

      ${e} :where(button, input, optgroup, select, textarea) {
        padding: 0;
        line-height: inherit;
        color: inherit;
      }

      ${e} :where(img, svg, video, canvas, audio, iframe, embed, object) {
        display: block;
      }

      ${e} :where(img, video) {
        max-width: 100%;
        height: auto;
      }

      [data-js-focus-visible]
        :focus:not([data-focus-visible-added]):not(
          [data-focus-visible-disabled]
        ) {
        outline: none;
        box-shadow: none;
      }

      ${e} select::-ms-expand {
        display: none;
      }

      ${E}
    `}),g={light:"chakra-ui-light",dark:"chakra-ui-dark"};function B(e={}){const{preventTransition:o=!0}=e,n={setDataset:r=>{const t=o?n.preventTransition():void 0;document.documentElement.dataset.theme=r,document.documentElement.style.colorScheme=r,t==null||t()},setClassName(r){document.body.classList.add(r?g.dark:g.light),document.body.classList.remove(r?g.light:g.dark)},query(){return window.matchMedia("(prefers-color-scheme: dark)")},getSystemTheme(r){var t;return((t=n.query().matches)!=null?t:r==="dark")?"dark":"light"},addListener(r){const t=n.query(),a=s=>{r(s.matches?"dark":"light")};return typeof t.addListener=="function"?t.addListener(a):t.addEventListener("change",a),()=>{typeof t.removeListener=="function"?t.removeListener(a):t.removeEventListener("change",a)}},preventTransition(){const r=document.createElement("style");return r.appendChild(document.createTextNode("*{-webkit-transition:none!important;-moz-transition:none!important;-o-transition:none!important;-ms-transition:none!important;transition:none!important}")),document.head.appendChild(r),()=>{window.getComputedStyle(document.body),requestAnimationFrame(()=>{requestAnimationFrame(()=>{document.head.removeChild(r)})})}}};return n}var O="chakra-ui-color-mode";function U(e){return{ssr:!1,type:"localStorage",get(o){if(!(globalThis!=null&&globalThis.document))return o;let n;try{n=localStorage.getItem(e)||o}catch{}return n||o},set(o){try{localStorage.setItem(e,o)}catch{}}}}var Y=U(O),C=()=>{};function M(e,o){return e.type==="cookie"&&e.ssr?e.get(o):o}function P(e){const{value:o,children:n,options:{useSystemColorMode:r,initialColorMode:t,disableTransitionOnChange:a}={},colorModeManager:s=Y}=e,m=t==="dark"?"dark":"light",[h,f]=d.useState(()=>M(s,m)),[v,c]=d.useState(()=>M(s)),{getSystemTheme:y,setClassName:k,setDataset:x,addListener:w}=d.useMemo(()=>B({preventTransition:a}),[a]),b=t==="system"&&!h?v:h,l=d.useCallback(u=>{const p=u==="system"?y():u;f(p),k(p==="dark"),x(p),s.set(p)},[s,y,k,x]);G(()=>{t==="system"&&c(y())},[]),d.useEffect(()=>{const u=s.get();if(u){l(u);return}if(t==="system"){l("system");return}l(m)},[s,m,t,l]);const $=d.useCallback(()=>{l(b==="dark"?"light":"dark")},[b,l]);d.useEffect(()=>{if(r)return w(l)},[r,w,l]);const T=d.useMemo(()=>({colorMode:o??b,toggleColorMode:o?C:$,setColorMode:o?C:l,forced:o!==void 0}),[b,$,l,o]);return i.jsx(q.Provider,{value:T,children:n})}P.displayName="ColorModeProvider";var Z=e=>{const{children:o,colorModeManager:n,portalZIndex:r,resetScope:t,resetCSS:a=!0,theme:s={},environment:m,cssVarsRoot:h,disableEnvironment:f,disableGlobalStyle:v}=e,c=i.jsx(I,{environment:m,disabled:f,children:o});return i.jsx(_,{theme:s,cssVarsRoot:h,children:i.jsxs(P,{colorModeManager:n,options:s.config,children:[a?i.jsx(F,{scope:t}):i.jsx(D,{}),!v&&i.jsx(K,{}),r?i.jsx(L,{zIndex:r,children:c}):c]})})},H=e=>function({children:n,theme:r=e,toastOptions:t,...a}){return i.jsxs(Z,{theme:r,...a,children:[i.jsx(V,{value:t==null?void 0:t.defaultOptions,children:n}),i.jsx(A,{...t})]})},J=H(N);const S=({theme:e=R,children:o,...n})=>i.jsx(J,{...n,theme:e,children:o});try{S.displayName="KvibProvider",S.__docgenInfo={description:`KVIBProvider er komponenten som gir de andre komponentene riktig tema og stil
Den må settes inn i prosjektet KVIB skal brukes, så nærme rotkomponenten som mulig.`,displayName:"KvibProvider",props:{}}}catch{}export{S as K};
