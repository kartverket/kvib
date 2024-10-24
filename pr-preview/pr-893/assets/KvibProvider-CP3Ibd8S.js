import{j as a}from"./extends-CwFRzn3r.js";/* empty css              */import{t as K,d as q}from"./index-BwS2J6zc.js";import{r as l}from"./index-BwDkhjyp.js";import{C as I}from"./factory-lWLPzty5.js";import{w as N}from"./emotion-styled.browser.esm-NI0tOKWg.js";import{d as G}from"./is-element-C52yPwBl.js";import{G as z}from"./emotion-react.browser.esm-Hqbkbmab.js";import{T as R,G as V}from"./providers-BQbExJqd.js";import{a as A}from"./portal-BlJtTGys.js";import{E as B}from"./env-B2QgRHdN.js";import{T as D,a as F}from"./toast.provider-CnlpUlhF.js";const v={light:"chakra-ui-light",dark:"chakra-ui-dark"};function U(e={}){const{preventTransition:n=!0,nonce:o}=e,i={setDataset:t=>{const r=n?i.preventTransition():void 0;document.documentElement.dataset.theme=t,document.documentElement.style.colorScheme=t,r==null||r()},setClassName(t){document.body.classList.add(t?v.dark:v.light),document.body.classList.remove(t?v.light:v.dark)},query(){return window.matchMedia("(prefers-color-scheme: dark)")},getSystemTheme(t){return i.query().matches??t==="dark"?"dark":"light"},addListener(t){const r=i.query(),s=u=>{t(u.matches?"dark":"light")};return typeof r.addListener=="function"?r.addListener(s):r.addEventListener("change",s),()=>{typeof r.removeListener=="function"?r.removeListener(s):r.removeEventListener("change",s)}},preventTransition(){const t=document.createElement("style");return t.appendChild(document.createTextNode("*{-webkit-transition:none!important;-moz-transition:none!important;-o-transition:none!important;-ms-transition:none!important;transition:none!important}")),o!==void 0&&(t.nonce=o),document.head.appendChild(t),()=>{window.getComputedStyle(document.body),requestAnimationFrame(()=>{requestAnimationFrame(()=>{document.head.removeChild(t)})})}}};return i}const Y="chakra-ui-color-mode";function Z(e){return{ssr:!1,type:"localStorage",get(n){if(!(globalThis!=null&&globalThis.document))return n;let o;try{o=localStorage.getItem(e)||n}catch{}return o||n},set(n){try{localStorage.setItem(e,n)}catch{}}}}const H=Z(Y),C=()=>{},J=G()?l.useLayoutEffect:l.useEffect;function M(e,n){return e.type==="cookie"&&e.ssr?e.get(n):n}const E=N(function(n,o){const{value:i,children:t,options:{useSystemColorMode:r,initialColorMode:s,disableTransitionOnChange:u}={},colorModeManager:m=H}=n,h=s==="dark"?"dark":"light",[b,f]=l.useState(()=>M(m,h)),[T,L]=l.useState(()=>M(m)),{getSystemTheme:y,setClassName:k,setDataset:w,addListener:x}=l.useMemo(()=>U({preventTransition:u,nonce:o==null?void 0:o.nonce}),[u,o==null?void 0:o.nonce]),p=s==="system"&&!b?T:b,d=l.useCallback(c=>{const g=c==="system"?y():c;f(g),k(g==="dark"),w(g),m.set(g)},[m,y,k,w]);J(()=>{s==="system"&&L(y())},[]),l.useEffect(()=>{const c=m.get();if(c){d(c);return}if(s==="system"){d("system");return}d(h)},[m,h,s,d]);const $=l.useCallback(()=>{d(p==="dark"?"light":"dark")},[p,d]);l.useEffect(()=>{if(r)return x(d)},[r,x,d]);const _=l.useMemo(()=>({colorMode:i??p,toggleColorMode:i?C:$,setColorMode:i?C:d,forced:i!==void 0}),[p,$,d,i]);return a.jsx(I.Provider,{value:_,children:t})});E.displayName="ColorModeProvider";const j=String.raw,P=j`
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
`,Q=()=>a.jsx(z,{styles:P}),W=({scope:e=""})=>a.jsx(z,{styles:j`
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

      ${P}
    `}),X=e=>{const{children:n,colorModeManager:o,portalZIndex:i,resetScope:t,resetCSS:r=!0,theme:s={},environment:u,cssVarsRoot:m,disableEnvironment:h,disableGlobalStyle:b}=e,f=a.jsx(B,{environment:u,disabled:h,children:n});return a.jsx(R,{theme:s,cssVarsRoot:m,children:a.jsxs(E,{colorModeManager:o,options:s.config,children:[r?a.jsx(W,{scope:t}):a.jsx(Q,{}),!b&&a.jsx(V,{}),i?a.jsx(A,{zIndex:i,children:f}):f]})})},O=e=>function({children:o,theme:i=e,toastOptions:t,...r}){return a.jsxs(X,{theme:i,...r,children:[a.jsx(D,{value:t==null?void 0:t.defaultOptions,children:o}),a.jsx(F,{...t})]})},ee=O(K),S=({theme:e=q,children:n,...o})=>a.jsx(ee,{...o,theme:e,children:n});try{S.displayName="KvibProvider",S.__docgenInfo={description:`KVIBProvider er komponenten som gir de andre komponentene riktig tema og stil
Den må settes inn i prosjektet KVIB skal brukes, så nærme rotkomponenten som mulig.`,displayName:"KvibProvider",props:{}}}catch{}export{S as K};
