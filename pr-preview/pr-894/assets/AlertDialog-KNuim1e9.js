import{j as e}from"./extends-CwFRzn3r.js";import{useMDXComponents as l}from"./index-DlpNa54Y.js";import{ae as m,af as t,ag as s}from"./index-DyZ0R7GJ.js";import{D as p,F as a}from"./Feedback-C8oPMuBk.js";import{A as d,P as i,a as c,b as g}from"./AlertDialog.stories-CcudkzPf.js";import"./index-BwDkhjyp.js";import"./_commonjsHelpers-BosuxZz1.js";import"./iframe-Dqo0dlGV.js";import"../sb-preview/runtime.js";import"./index-CS4BWtGh.js";import"./index-D-8MO0q_.js";import"./assertThisInitialized-DSoh8oXT.js";import"./inheritsLoose-B6jfs0L0.js";import"./setPrototypeOf-DgZC2w_0.js";import"./index-DF3CPj03.js";import"./index-DrFu-skq.js";import"./box-Cs-tJ6EH.js";import"./factory-lWLPzty5.js";import"./emotion-styled.browser.esm-NI0tOKWg.js";import"./image-CU6Rr-ts.js";import"./forward-ref-BWI-Phbn.js";import"./use-image-rNdzB_Ea.js";import"./use-safe-layout-effect-BnICyLBj.js";import"./omit-QLD0Eizt.js";import"./simple-grid-Dx05c2KX.js";import"./grid-DbabZME7.js";import"./use-theme-CBfqdygA.js";import"./hooks-CUXMK5kD.js";import"./responsive-BbUtuhhZ.js";import"./heading-CZK5ruZ7.js";import"./use-style-config-C4sZEIFb.js";import"./index-CfyPTyT-.js";import"./cx-BDMMs1jM.js";import"./text-CypcOzo0.js";import"./Card-CjsZQyOM.js";import"./providers-BQbExJqd.js";import"./emotion-react.browser.esm-Hqbkbmab.js";import"./context-CBKykClo.js";import"./calc-tjRj3nBR.js";import"./css-var-DE0-P1bc.js";import"./pick-DBnSFT3T.js";import"./flex-DUW0W68E.js";import"./Link-B6mGcy8v.js";import"./modal-overlay-y0vbcUgo.js";import"./Combination-DhNDPOzd.js";import"./defineProperty-BylEvKcw.js";import"./focusable-crJ8ziAt.js";import"./is-element-C52yPwBl.js";import"./proxy-NyFW0ziH.js";import"./define-styles-BSAHv3yx.js";import"./use-merge-refs-Bdxaq0s4.js";import"./call-all-DDzecCnU.js";import"./portal-BlJtTGys.js";import"./index-BMuBlvl2.js";import"./fade-Bhr0Adt1.js";import"./transition-utils-CnxNY5SP.js";import"./modal-content-idGtK2UU.js";import"./slide-fade-DTA8_nFh.js";import"./scale-fade-DpWzeR9a.js";import"./modal-footer-BWohZAuX.js";import"./close-button-CK4MGrTr.js";import"./icon-BO-EX8Jp.js";import"./use-disclosure-CdGn7wGE.js";import"./use-callback-ref-DA6UG1mJ.js";import"./Button-Bg6QVfgh.js";import"./button-lwGmIUkK.js";import"./spinner-CCN1jjNR.js";import"./attr-sHTFgF0E.js";import"./center-Bg6uA6YZ.js";import"./h-stack-ecaAvnDk.js";import"./stack-C3a7yBZW.js";import"./children-2ZXUntH3.js";import"./Icon-C0_wlgZX.js";/* empty css              */function n(o){const r={code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",pre:"pre",...l(),...o.components};return e.jsxs(e.Fragment,{children:[e.jsx(m,{of:d}),`
`,e.jsxs(p,{children:[e.jsx(r.h1,{id:"alert-dialog",children:"Alert Dialog"}),e.jsx(r.p,{children:"AlertDialog er et komponent som brukes til å avbryte brukeren med en bekreftelesesdialog."}),e.jsx(t,{of:i}),e.jsx(a,{component:"AlertDialog"}),e.jsxs(r.h2,{id:"slik-bruker-du-alertdialog",children:["Slik bruker du ",e.jsx(r.code,{children:"AlertDialog"})]}),e.jsxs(r.p,{children:["Alert Dialog består av flere komponenter som kan brukes sammen for å lage en dialog. Disse komponentene er ",e.jsx(r.code,{children:"AlertDialog"}),", ",e.jsx(r.code,{children:"AlertDialogOverlay"}),", ",e.jsx(r.code,{children:"AlertDialogContent"}),", ",e.jsx(r.code,{children:"AlertDialogHeader"}),", ",e.jsx(r.code,{children:"AlertDialogFooter"}),", ",e.jsx(r.code,{children:"AlertDialogBody"})," og ",e.jsx(r.code,{children:"AlertDialogCloseButton"})," og importeres på følgende måte:"]}),e.jsx(r.pre,{children:e.jsx(r.code,{className:"language-tsx",children:`import {
  AlertDialog,
  AlertDialogBody,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogContent,
  AlertDialogOverlay,
  AlertDialogCloseButton,
} from "@kvib/react";
`})}),e.jsx("br",{}),e.jsx("br",{}),e.jsx(r.h3,{id:"bruk-av-alert-dialog-med-sentrert-posisjon",children:"Bruk av Alert Dialog med sentrert posisjon"}),e.jsxs(r.p,{children:["Alert Dialog kan plasseres vertikalt og horisontalt sentrert i forhold til skjermen. Dette gjør man med å sende inn ",e.jsx(r.code,{children:"isCentered"}),"-propen til ",e.jsx(r.code,{children:"AlertDialog"}),"-komponenten."]}),e.jsx(t,{of:c}),e.jsx(r.h3,{id:"bruk-av-alert-dialog-med-animert-overgang",children:"Bruk av Alert Dialog med animert overgang"}),e.jsxs(r.p,{children:["Modaler støtter overganger som animerer åpningen og lukkingen av modalen. Disse overgangene kan endres ved å sende inn ",e.jsx(r.code,{children:"motionPreset"}),"-propen til ",e.jsx(r.code,{children:"Modal"}),"-komponenten, og støtter verdiene ",e.jsx(r.code,{children:"slideInBottom"}),", ",e.jsx(r.code,{children:"slideInRight"}),", ",e.jsx(r.code,{children:"scale"})," og ",e.jsx(r.code,{children:"none"}),"."]}),e.jsx(t,{of:g}),e.jsx(r.h2,{id:"props",children:"Props"}),e.jsx(s,{of:i})]})]})}function Oe(o={}){const{wrapper:r}={...l(),...o.components};return r?e.jsx(r,{...o,children:e.jsx(n,{...o})}):n(o)}export{Oe as default};
