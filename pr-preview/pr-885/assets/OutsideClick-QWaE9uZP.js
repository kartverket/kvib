import{j as e}from"./extends-CwFRzn3r.js";import{useMDXComponents as n}from"./index-DlpNa54Y.js";import"./chunk-NUUEMKO5-dHZVRZUT.js";import{ae as m,ai as p}from"./index-iZOg1Zp6.js";import{F as l,D as c}from"./Feedback-dLCSv3MR.js";import{R as i}from"./index-BwDkhjyp.js";import{D as d}from"./DocsCanvas-CipsSa09.js";import{u as a}from"./use-outside-click-DJDnsvpj.js";import{A as u}from"./Alert-PLl3e2Qe.js";import{A as k}from"./alert-icon-B8tlVjfA.js";import{B as f}from"./box-DeqT4ixr.js";import{A as h}from"./alert-description-BS4zLy6K.js";import"./iframe-Vu_ogSy_.js";import"../sb-preview/runtime.js";import"./react-18-CXIcm_DL.js";import"./index-Drt3gf4w.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-D-8MO0q_.js";import"./assertThisInitialized-DSoh8oXT.js";import"./inheritsLoose-B6jfs0L0.js";import"./setPrototypeOf-DgZC2w_0.js";import"./index-DF3CPj03.js";import"./index-DrFu-skq.js";import"./image-BzV54DYr.js";import"./forward-ref-BWI-Phbn.js";import"./use-image-rNdzB_Ea.js";import"./use-safe-layout-effect-BnICyLBj.js";import"./factory-C6UFhaBW.js";import"./emotion-styled.browser.esm-NI0tOKWg.js";import"./omit-QLD0Eizt.js";import"./simple-grid-inAnnyJ8.js";import"./grid-B2CMUJGq.js";import"./use-theme-CBfqdygA.js";import"./hooks-gaHRB8Pq.js";import"./responsive-BNzRyFLh.js";import"./heading--NES2npU.js";import"./use-style-config-YUvqttAg.js";import"./index-CfyPTyT-.js";import"./cx-BDMMs1jM.js";import"./text-ByHKaHOl.js";import"./Card-rgsWy52h.js";import"./providers-BwxcBeey.js";import"./emotion-react.browser.esm-Hqbkbmab.js";import"./context-CBKykClo.js";import"./calc-B93s4yJe.js";import"./css-var-DE0-P1bc.js";import"./pick-DBnSFT3T.js";import"./flex-C1gIBb6o.js";import"./Button-CXAI4A3K.js";import"./button-DEHO-vdc.js";import"./spinner-DfEqsPDM.js";import"./define-styles-BSAHv3yx.js";import"./use-merge-refs-Bdxaq0s4.js";import"./attr-sHTFgF0E.js";import"./center-Da94FwVR.js";import"./h-stack-BA5VzuBF.js";import"./stack-REYSnkee.js";import"./children-2ZXUntH3.js";import"./Icon-LAcu_LZm.js";/* empty css              */import"./use-callback-ref-DA6UG1mJ.js";import"./icon-Bx5s8P2X.js";const x=()=>{const r=i.useRef(),[t,o]=i.useState(!1);return a({ref:r,handler:()=>o(!1)}),e.jsx(d,{children:e.jsx("div",{children:t?e.jsx("div",{ref:r,children:"👋 Hey, I'm a modal. Click anywhere outside of me to close."}):e.jsx("button",{onClick:()=>o(!0),children:"Open Modal"})})})},j=`function Example() {
  const ref = React.useRef()
  const [isModalOpen, setIsModalOpen] = React.useState(false)
  useOutsideClick({
    ref: ref,
    handler: () => setIsModalOpen(false),
  })

  return (
    <>
      {isModalOpen ? (
        <div ref={ref}>
          👋 Hey, I'm a modal. Click anywhere outside of me to close.
        </div>
      ) : (
        <button onClick={() => setIsModalOpen(true)}>Open Modal</button>
      )}
    </>
  )
}`;function s(r){const t={code:"code",h1:"h1",p:"p",pre:"pre",strong:"strong",...n(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(m,{title:"Hooks/useOutsideClick"}),`
`,e.jsx(t.h1,{id:"useoutsideclick",children:"useOutsideClick"}),`
`,e.jsxs(t.p,{children:[e.jsx(t.strong,{children:"useOutsideClick"})," er en tilpasset hook som håndterer klikkhendelser utenfor et bestemt DOM-element, som for eksempel en ",e.jsx(t.strong,{children:"div"}),". En håndterer kalles når en klikk- eller trykkehendelse skjer utenfor det refererte elementet."]}),`
`,e.jsxs(u,{status:"warning",children:[e.jsx(k,{}),e.jsx(f,{children:e.jsx(h,{children:e.jsx(t.p,{children:"Denne hooken er kompatibel med mus- og trykkehendelser."})})})]}),`
`,e.jsx(t.pre,{children:e.jsx(t.code,{className:"language-jsx",children:`import { useOutsideClick } from "@kvib/react";
`})}),`
`,e.jsx(l,{component:"useOutsideClick"}),`
`,e.jsxs(c,{children:[e.jsx(t.h1,{id:"bruk",children:"Bruk"}),e.jsx(x,{}),e.jsx(p,{code:j,dark:!0})]})]})}function Ie(r={}){const{wrapper:t}={...n(),...r.components};return t?e.jsx(t,{...r,children:e.jsx(s,{...r})}):s(r)}export{Ie as default};
