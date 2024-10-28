import{j as e}from"./extends-CwFRzn3r.js";import{useMDXComponents as n}from"./index-DlpNa54Y.js";import"./chunk-NUUEMKO5-CZ6KeePZ.js";import{ae as m,ai as p}from"./index-DQ594QPQ.js";import{F as l,D as c}from"./Feedback-C8oPMuBk.js";import{R as i}from"./index-BwDkhjyp.js";import{D as d}from"./DocsCanvas-DLlOGo4n.js";import{u as a}from"./use-outside-click-DJDnsvpj.js";import{A as u}from"./Alert-DuDev5PS.js";import{A as k}from"./alert-icon-DsIyQRNV.js";import{B as f}from"./box-Cs-tJ6EH.js";import{A as h}from"./alert-description-Ny8tVv6G.js";import"./iframe-4rcjUdhJ.js";import"../sb-preview/runtime.js";import"./react-18-CyFAdspd.js";import"./index-CS4BWtGh.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-D-8MO0q_.js";import"./assertThisInitialized-DSoh8oXT.js";import"./inheritsLoose-B6jfs0L0.js";import"./setPrototypeOf-DgZC2w_0.js";import"./index-DF3CPj03.js";import"./index-DrFu-skq.js";import"./image-CU6Rr-ts.js";import"./forward-ref-BWI-Phbn.js";import"./use-image-rNdzB_Ea.js";import"./use-safe-layout-effect-BnICyLBj.js";import"./factory-lWLPzty5.js";import"./emotion-styled.browser.esm-NI0tOKWg.js";import"./omit-QLD0Eizt.js";import"./simple-grid-Dx05c2KX.js";import"./grid-DbabZME7.js";import"./use-theme-CBfqdygA.js";import"./hooks-CUXMK5kD.js";import"./responsive-BbUtuhhZ.js";import"./heading-CZK5ruZ7.js";import"./use-style-config-C4sZEIFb.js";import"./index-CfyPTyT-.js";import"./cx-BDMMs1jM.js";import"./text-CypcOzo0.js";import"./Card-CjsZQyOM.js";import"./providers-BQbExJqd.js";import"./emotion-react.browser.esm-Hqbkbmab.js";import"./context-CBKykClo.js";import"./calc-tjRj3nBR.js";import"./css-var-DE0-P1bc.js";import"./pick-DBnSFT3T.js";import"./flex-DUW0W68E.js";import"./Link-B6mGcy8v.js";import"./stack-C3a7yBZW.js";import"./children-2ZXUntH3.js";import"./use-callback-ref-DA6UG1mJ.js";import"./define-styles-BSAHv3yx.js";import"./icon-BO-EX8Jp.js";import"./spinner-CCN1jjNR.js";const x=()=>{const r=i.useRef(),[t,o]=i.useState(!1);return a({ref:r,handler:()=>o(!1)}),e.jsx(d,{children:e.jsx("div",{children:t?e.jsx("div",{ref:r,children:"👋 Hey, I'm a modal. Click anywhere outside of me to close."}):e.jsx("button",{onClick:()=>o(!0),children:"Open Modal"})})})},j=`function Example() {
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
}`;function s(r){const t={code:"code",h1:"h1",p:"p",pre:"pre",strong:"strong",...n(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(m,{title:"Komponenter/Hooks/useOutsideClick"}),`
`,e.jsx(t.h1,{id:"useoutsideclick",children:"useOutsideClick"}),`
`,e.jsxs(t.p,{children:[e.jsx(t.strong,{children:"useOutsideClick"})," er en tilpasset hook som håndterer klikkhendelser utenfor et bestemt DOM-element, som for eksempel en ",e.jsx(t.strong,{children:"div"}),". En håndterer kalles når en klikk- eller trykkehendelse skjer utenfor det refererte elementet."]}),`
`,e.jsxs(u,{status:"warning",children:[e.jsx(k,{}),e.jsx(f,{children:e.jsx(h,{children:e.jsx(t.p,{children:"Denne hooken er kompatibel med mus- og trykkehendelser."})})})]}),`
`,e.jsx(t.pre,{children:e.jsx(t.code,{className:"language-jsx",children:`import { useOutsideClick } from "@kvib/react";
`})}),`
`,e.jsx(l,{component:"useOutsideClick"}),`
`,e.jsxs(c,{children:[e.jsx(t.h1,{id:"bruk",children:"Bruk"}),e.jsx(x,{}),e.jsx(p,{code:j,dark:!0})]})]})}function Ce(r={}){const{wrapper:t}={...n(),...r.components};return t?e.jsx(t,{...r,children:e.jsx(s,{...r})}):s(r)}export{Ce as default};
