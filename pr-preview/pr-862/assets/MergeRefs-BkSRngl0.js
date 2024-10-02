import{j as e}from"./extends-CwFRzn3r.js";import{useMDXComponents as c}from"./index-DlpNa54Y.js";import"./chunk-NUUEMKO5-D_a9NBpR.js";import{ae as g,ai as p}from"./index-k-h-8Dss.js";import{F as j,D as k,b as M}from"./Feedback-Be-nclhu.js";import{r as _,R as u}from"./index-BwDkhjyp.js";import{D as a}from"./DocsCanvas-D3xvFuIV.js";import{u as C}from"./chunk-R5W6LHQW-ox3U3ViN.js";import{u as b}from"./chunk-7JBTTEVG-CYT7sRLE.js";import{u as y}from"./chunk-LUYFNC5G-DV8XJogC.js";import{B as E}from"./chunk-PULVB27S-BbQOsZmk.js";import"./iframe-DKUcOLmC.js";import"../sb-preview/runtime.js";import"./react-18-4JAveGcY.js";import"./index-Dn0f7ynd.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-D-8MO0q_.js";import"./isNativeReflectConstruct-lfp1ZYuW.js";import"./inheritsLoose-B6jfs0L0.js";import"./setPrototypeOf-DgZC2w_0.js";import"./index-DF3CPj03.js";import"./index-DrFu-skq.js";import"./chunk-QINAG4RG-D8ybSQBR.js";import"./chunk-ZJJGQIVY-Dk0gAx5w.js";import"./chunk-SPIKMR6I-lNfAZPIg.js";import"./index-DJS8qWMq.js";import"./chunk-NEK3OOAM-y-5BEe1S.js";import"./chunk-JARCRF6W-C8V8GAuA.js";import"./chunk-7FWEOSAE-BgGQS5yP.js";import"./chunk-UIGT7YZF-BZ8OOi_0.js";import"./chunk-G72KV6MB-CW_g5wqE.js";import"./chunk-2OOHT3W5-DQGV2H9e.js";import"./chunk-DMO4EI7P-CbM7tafX.js";import"./chunk-R3DH46PF-iWUMGBws.js";import"./chunk-7OLJDQMT-BcrawTP2.js";import"./Card-Bn7RuWsc.js";import"./chunk-MFVQSVQB-CVs57b_v.js";import"./emotion-react.browser.esm-5ppwkrPI.js";import"./chunk-KRPLQIP4-B8CwleOo.js";import"./Button-ld38lsZs.js";import"./chunk-UVUR7MCU-CDviNqUv.js";import"./index-CHDWSgKD.js";import"./chunk-5PH6ULNP-DjlYY-Z2.js";import"./index-Bdxaq0s4.js";import"./chunk-FAWTVNS3-h_p2ezMN.js";import"./chunk-3ASUQ6PA-BRAByO3y.js";import"./chunk-ZHMYA64R-DVnaPXQt.js";import"./index-2ZXUntH3.js";import"./Icon-CPAF9xaH.js";/* empty css              */import"./chunk-KA2477BY-BRr71Die.js";import"./chunk-724WJZW4-D7beLSYm.js";import"./chunk-7JSBRQFI-CSWo1_dX.js";function O(o,r){if(o!=null){if(typeof o=="function"){o(r);return}try{o.current=r}catch{throw new Error(`Cannot assign value '${r}' to ref '${o}'`)}}}function f(...o){return _.useMemo(()=>o.every(r=>r==null)?null:r=>{o.forEach(t=>{t&&O(t,r)})},o)}const n=({ref:o,...r})=>{const t=u.useRef(),s=f(t,o);return e.jsx(a,{children:e.jsx("div",{...r,ref:s,children:"A div with multiple refs."})})},i=({ref:o,...r})=>{const t=u.useRef(),{isOpen:s,onOpen:l,onClose:d}=b(),{popperRef:h,referenceRef:R}=y();C({ref:t,handler:()=>s&&d()});const x=f(t,R);return e.jsx(a,{children:e.jsxs("div",{children:[e.jsx("button",{ref:x,onClick:l,children:"Click me to see the popover"}),s&&e.jsx(E,{ref:h,bg:"green",children:"Click outside to close me"})]})})};try{n.displayName="MergeRefsExample",n.__docgenInfo={description:"",displayName:"MergeRefsExample",props:{ref:{defaultValue:null,description:"",name:"ref",required:!0,type:{name:"any"}}}}}catch{}try{i.displayName="MergeRefsOtherExample",i.__docgenInfo={description:"",displayName:"MergeRefsOtherExample",props:{ref:{defaultValue:null,description:"",name:"ref",required:!0,type:{name:"any"}}}}}catch{}const v=`function Example({ ref, ...props }) {
  const internalRef = React.useRef()
  const refs = useMergeRefs(internalRef, ref)

  return (
    <div {...props} ref={refs}>
      A div with multiple refs.
    </div>
  )
}`,D=`function Example({ ref, ...props }) {
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
}`;function m(o){const r={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",strong:"strong",...c(),...o.components};return e.jsxs(e.Fragment,{children:[e.jsx(g,{title:"Hooks/useMergeRefs"}),`
`,e.jsx(r.h1,{id:"usemergerefs",children:"useMergeRefs"}),`
`,e.jsxs(r.p,{children:[e.jsx(r.strong,{children:"useMergeRefs"})," er en tilpasset hook som brukes til å slå sammen flere React-refs til en enkelt ref."]}),`
`,e.jsx(r.pre,{children:e.jsx(r.code,{className:"language-jsx",children:`import { useMergeRefs } from "@kvib/react";
`})}),`
`,e.jsx(j,{component:"useMergeRefs"}),`
`,e.jsxs(k,{children:[e.jsxs(r.p,{children:[e.jsx(M,{light:!0,children:"Return value"}),`
useMergeRefs hooken returnerer en funksjon som mottar elementet og tildeler verdien til de gitte React-refs-ene.`]}),e.jsx(r.h2,{id:"bruk",children:"Bruk"}),e.jsx(n,{}),e.jsx(p,{code:v,dark:!0}),e.jsx(r.h2,{id:"bruk-i-kombinasjon-med-andre-hooks",children:"Bruk i kombinasjon med andre hooks"}),e.jsx(i,{}),e.jsx(p,{code:D,dark:!0})]})]})}function De(o={}){const{wrapper:r}={...c(),...o.components};return r?e.jsx(r,{...o,children:e.jsx(m,{...o})}):m(o)}export{De as default};
