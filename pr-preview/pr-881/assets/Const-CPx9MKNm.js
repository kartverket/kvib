import{j as e}from"./extends-CwFRzn3r.js";import{useMDXComponents as m}from"./index-DlpNa54Y.js";import"./chunk-NUUEMKO5-Bcsl-anO.js";import{ai as p,ae as c}from"./index-BylpHZZs.js";import{b as l,F as d,D as n,a as o}from"./Feedback-Dm3mjvUi.js";import{r as a}from"./index-BwDkhjyp.js";import{D as u}from"./DocsCanvas-BhnAGqOh.js";import"./iframe-BIsUCXhV.js";import"../sb-preview/runtime.js";import"./react-18-4JAveGcY.js";import"./index-Dn0f7ynd.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-D-8MO0q_.js";import"./isNativeReflectConstruct-lfp1ZYuW.js";import"./inheritsLoose-B6jfs0L0.js";import"./setPrototypeOf-DgZC2w_0.js";import"./index-DF3CPj03.js";import"./index-DrFu-skq.js";import"./box-B7h7acUJ.js";import"./factory-CdGA0D9p.js";import"./emotion-styled.browser.esm-NI0tOKWg.js";import"./image-Cz43cXZB.js";import"./forward-ref-BWI-Phbn.js";import"./use-image-rNdzB_Ea.js";import"./use-safe-layout-effect-BnICyLBj.js";import"./omit-QLD0Eizt.js";import"./simple-grid-CQLrn815.js";import"./grid-zpFC2r7C.js";import"./use-theme-CBfqdygA.js";import"./hooks-D04p5R0A.js";import"./responsive-ClFn5vzN.js";import"./heading-D_euA-I1.js";import"./use-style-config--HlEOpE-.js";import"./index-CfyPTyT-.js";import"./cx-BDMMs1jM.js";import"./text-rUwQV1v4.js";import"./Card-DoxEvc2h.js";import"./providers-tFX8H8_I.js";import"./emotion-react.browser.esm-Hqbkbmab.js";import"./context-CBKykClo.js";import"./calc-Dy10IX1y.js";import"./css-var-DE0-P1bc.js";import"./pick-DBnSFT3T.js";import"./flex-CHlq4-Ax.js";import"./Button-DeRYbOSW.js";import"./button-Db-BlFJ2.js";import"./spinner-DcEBpU52.js";import"./define-styles-BSAHv3yx.js";import"./use-merge-refs-Bdxaq0s4.js";import"./attr-sHTFgF0E.js";import"./center-D672Tu8u.js";import"./h-stack-P6-XT6iQ.js";import"./stack-Crl0JO1i.js";import"./children-2ZXUntH3.js";import"./Icon-vZnM9tBv.js";/* empty css              */function i(r){const t=a.useRef(null);return t.current===null&&(t.current=typeof r=="function"?r():r),t.current}const j=`function Example() {
  const mountTime = useConst(() => new Date().toTimeString())
  const obj = useConst({ a: Math.random() })
  return (
    <>
      <p>Mount time: {mountTime}</p>
      <p>Value from constant object: {obj.a}</p>
    </>
  )
}`,g=`function Example() {
  const [value] = useState(new Date().toTimeString())
  return (
    <p>Mount time: {value}</p>
  )
}`,h=()=>{const r=i(()=>new Date().toTimeString()),t=i({a:Math.random()});return e.jsxs(u,{children:[e.jsxs("p",{children:["Mount time: ",r]}),e.jsxs("p",{children:["Value from constant object: ",t.a]}),e.jsx(p,{code:j,dark:!0})]})},x=()=>{const[r]=a.useState(new Date().toTimeString());return e.jsxs(u,{children:[e.jsxs("p",{children:["Mount time: ",r]}),e.jsx(p,{code:g,dark:!0})]})};function s(r){const t={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",strong:"strong",...m(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(c,{title:"Hooks/useConst"}),`
`,e.jsx(t.h1,{id:"useconst",children:"useConst"}),`
`,e.jsxs(t.p,{children:[e.jsx(t.strong,{children:"useConst"}),` er en tilpasset hook brukt for å initialisere og returnere en konstant verdi.
I motsetning til useMemo, vil dette alltid returnere den samme verdien, og hvis initialisatoren er en funksjon, blir den bare kalt én gang.`]}),`
`,e.jsx(t.pre,{children:e.jsx(t.code,{className:"language-jsx",children:`import { useConst } from "@kvib/react";
`})}),`
`,e.jsx(l,{light:!0,children:"Parametere"}),`
`,e.jsxs(t.p,{children:[e.jsx(t.strong,{children:"useConst"})," hooken aksepterer enten den initielle verdien eller en funksjon for å hente den initielle verdien."]}),`
`,e.jsx(d,{component:"useConst"}),`
`,e.jsx(n,{children:e.jsx(o,{title:"Bruk",description:"",isVertical:!0,story:e.jsx(h,{})})}),`
`,e.jsxs(n,{children:[e.jsx(t.h2,{id:"hvorfor-ikke-bruke-usememo",children:"Hvorfor ikke bruke useMemo?"}),e.jsxs(t.p,{children:["React-dokumentasjonen sier at motoren kan velge å 'glemme' noen tidligere memoiserte verdier og beregne dem på nytt ved neste gjengivelse, og du bør skrive koden din slik at den fortsatt fungerer uten ",e.jsx(t.strong,{children:"useMemo"})," og deretter legge det til for å optimalisere ytelsen."]}),e.jsxs(t.p,{children:["Du bør bruke ",e.jsx(t.strong,{children:"useMemo"})," bare når du trenger å beregne verdien basert på avhengigheter."]}),e.jsx(t.h2,{id:"hvorfor-ikke-bruke-usestate",children:"Hvorfor ikke bruke useState?"}),e.jsx(o,{title:"",description:"Dette vil fungere som en konstant, men det er semantisk feil, og det er dyrt på grunn av reduksjonshåndteringen som vi ikke trenger.",isVertical:!0,story:e.jsx(x,{})})]})]})}function ve(r={}){const{wrapper:t}={...m(),...r.components};return t?e.jsx(t,{...r,children:e.jsx(s,{...r})}):s(r)}export{ve as default};
