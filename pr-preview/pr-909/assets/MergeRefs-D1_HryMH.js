import{j as e}from"./extends-CwFRzn3r.js";import{useMDXComponents as c}from"./index-DlpNa54Y.js";import"./chunk-NUUEMKO5-B2Jlsrmg.js";import{ae as g,ai as p}from"./index-CPil6yH-.js";import{F as j,D as k,b as M}from"./Feedback-oujG440w.js";import{R as f}from"./index-BwDkhjyp.js";import{D as a}from"./DocsCanvas-Bqew-jOy.js";import{u as l}from"./use-merge-refs-Bdxaq0s4.js";import{u as _}from"./use-popper-DwNTykfS.js";import{u as b}from"./use-outside-click-DJDnsvpj.js";import{u as C}from"./use-disclosure-CdGn7wGE.js";import{B as y}from"./box-CwIaBbUI.js";import"./iframe-KXb3vtam.js";import"../sb-preview/runtime.js";import"./react-18-CyFAdspd.js";import"./index-CS4BWtGh.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-D-8MO0q_.js";import"./assertThisInitialized-DSoh8oXT.js";import"./inheritsLoose-B6jfs0L0.js";import"./setPrototypeOf-DgZC2w_0.js";import"./index-DF3CPj03.js";import"./index-DrFu-skq.js";import"./image-GsZWH-VT.js";import"./forward-ref-BWI-Phbn.js";import"./use-image-rNdzB_Ea.js";import"./use-safe-layout-effect-BnICyLBj.js";import"./factory-DBKMNJMh.js";import"./emotion-styled.browser.esm-KUABWefE.js";import"./emotion-element-5486c51c.browser.esm-xLAo67gU.js";import"./omit-QLD0Eizt.js";import"./simple-grid-ZnRIKZLi.js";import"./grid-BNFEBO0r.js";import"./use-theme-CeOC8r1f.js";import"./hooks-Dk7VeZ_r.js";import"./responsive-CwLgsqRj.js";import"./heading-05dRngNe.js";import"./use-style-config-B2siLCbt.js";import"./index-CfyPTyT-.js";import"./cx-BDMMs1jM.js";import"./text-D14Jyc6W.js";import"./Card-jUBPBQ-A.js";import"./providers-BmY41TRh.js";import"./emotion-react.browser.esm-0Zac8NuU.js";import"./context-CBKykClo.js";import"./calc-C4XOv3Qc.js";import"./css-var-DE0-P1bc.js";import"./pick-DBnSFT3T.js";import"./flex-v5DFvFs4.js";import"./Link-D6DR4S49.js";import"./stack-BdCvkUuU.js";import"./children-2ZXUntH3.js";import"./use-callback-ref-DA6UG1mJ.js";const n=({ref:o,...r})=>{const t=f.useRef(),s=l(t,o);return e.jsx(a,{children:e.jsx("div",{...r,ref:s,children:"A div with multiple refs."})})},i=({ref:o,...r})=>{const t=f.useRef(),{isOpen:s,onOpen:u,onClose:d}=C(),{popperRef:h,referenceRef:R}=_();b({ref:t,handler:()=>s&&d()});const x=l(t,R);return e.jsx(a,{children:e.jsxs("div",{children:[e.jsx("button",{ref:x,onClick:u,children:"Click me to see the popover"}),s&&e.jsx(y,{ref:h,bg:"green",children:"Click outside to close me"})]})})};try{n.displayName="MergeRefsExample",n.__docgenInfo={description:"",displayName:"MergeRefsExample",props:{ref:{defaultValue:null,description:"",name:"ref",required:!0,type:{name:"any"}}}}}catch{}try{i.displayName="MergeRefsOtherExample",i.__docgenInfo={description:"",displayName:"MergeRefsOtherExample",props:{ref:{defaultValue:null,description:"",name:"ref",required:!0,type:{name:"any"}}}}}catch{}const O=`function Example({ ref, ...props }) {
  const internalRef = React.useRef()
  const refs = useMergeRefs(internalRef, ref)

  return (
    <div {...props} ref={refs}>
      A div with multiple refs.
    </div>
  )
}`,v=`function Example({ ref, ...props }) {
  const outsideRef = React.useRef()
  const { isOpen, onOpen, onClose } = useDisclosure()
  const { popperRef, referenceRef } = usePopper()

  useOutsideClick({
    ref: outsideRef,
    handler: () => isOpen && onClose(),
  })

  const buttonEl = useMergeRefs(outsideRef, referenceRef)

  return (
    <>
      <button ref={buttonEl} onClick={onOpen}>
        Click me to see the popover
      </button>
      {isOpen && (
        <Box ref={popperRef} bg='green'>
          Click outside to close me
        </Box>
      )}
    </>
  )
}`;function m(o){const r={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",strong:"strong",...c(),...o.components};return e.jsxs(e.Fragment,{children:[e.jsx(g,{title:"Komponenter/Hooks/useMergeRefs"}),`
`,e.jsx(r.h1,{id:"usemergerefs",children:"useMergeRefs"}),`
`,e.jsxs(r.p,{children:[e.jsx(r.strong,{children:"useMergeRefs"})," er en tilpasset hook som brukes til å slå sammen flere React-refs til en enkelt ref."]}),`
`,e.jsx(r.pre,{children:e.jsx(r.code,{className:"language-jsx",children:`import { useMergeRefs } from "@kvib/react";
`})}),`
`,e.jsx(j,{component:"useMergeRefs"}),`
`,e.jsxs(k,{children:[e.jsxs(r.p,{children:[e.jsx(M,{light:!0,children:"Return value"}),`
useMergeRefs hooken returnerer en funksjon som mottar elementet og tildeler verdien til de gitte React-refs-ene.`]}),e.jsx(r.h2,{id:"bruk",children:"Bruk"}),e.jsx(n,{}),e.jsx(p,{code:O,dark:!0}),e.jsx(r.h2,{id:"bruk-i-kombinasjon-med-andre-hooks",children:"Bruk i kombinasjon med andre hooks"}),e.jsx(i,{}),e.jsx(p,{code:v,dark:!0})]})]})}function ve(o={}){const{wrapper:r}={...c(),...o.components};return r?e.jsx(r,{...o,children:e.jsx(m,{...o})}):m(o)}export{ve as default};
