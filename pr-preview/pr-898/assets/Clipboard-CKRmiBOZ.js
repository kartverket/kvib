import{j as e}from"./extends-CwFRzn3r.js";import{useMDXComponents as w}from"./index-DlpNa54Y.js";import"./chunk-NUUEMKO5-dylMCawA.js";import{ai as E,ae as T}from"./index-Ciibta9S.js";import{F as S,D as R,b as f,a as I}from"./Feedback-C8oPMuBk.js";import{D as A}from"./DocsCanvas-DLlOGo4n.js";import{r as x}from"./index-BwDkhjyp.js";import{g as F}from"./_commonjsHelpers-BosuxZz1.js";import{F as M}from"./flex-DUW0W68E.js";import{I as V}from"./input-BT3C-fnf.js";import{B as P}from"./Button-Bg6QVfgh.js";import{E as N,b as U,d as B}from"./editable-preview-DfL9-772.js";import{T as b,a as g,b as C,c as m,d as u,e as y,f as o}from"./tr-Ck5ZJHg6.js";import"./iframe-BtkaFP-3.js";import"../sb-preview/runtime.js";import"./react-18-CyFAdspd.js";import"./index-CS4BWtGh.js";import"./index-D-8MO0q_.js";import"./assertThisInitialized-DSoh8oXT.js";import"./inheritsLoose-B6jfs0L0.js";import"./setPrototypeOf-DgZC2w_0.js";import"./index-DF3CPj03.js";import"./index-DrFu-skq.js";import"./box-Cs-tJ6EH.js";import"./factory-lWLPzty5.js";import"./emotion-styled.browser.esm-NI0tOKWg.js";import"./image-CU6Rr-ts.js";import"./forward-ref-BWI-Phbn.js";import"./use-image-rNdzB_Ea.js";import"./use-safe-layout-effect-BnICyLBj.js";import"./omit-QLD0Eizt.js";import"./simple-grid-Dx05c2KX.js";import"./grid-DbabZME7.js";import"./use-theme-CBfqdygA.js";import"./hooks-CUXMK5kD.js";import"./responsive-BbUtuhhZ.js";import"./heading-CZK5ruZ7.js";import"./use-style-config-C4sZEIFb.js";import"./index-CfyPTyT-.js";import"./cx-BDMMs1jM.js";import"./text-CypcOzo0.js";import"./Card-CjsZQyOM.js";import"./providers-BQbExJqd.js";import"./emotion-react.browser.esm-Hqbkbmab.js";import"./context-CBKykClo.js";import"./calc-tjRj3nBR.js";import"./css-var-DE0-P1bc.js";import"./pick-DBnSFT3T.js";import"./Link-B6mGcy8v.js";import"./stack-C3a7yBZW.js";import"./children-2ZXUntH3.js";import"./use-form-control-C6Tdrol4.js";import"./form-control-f1aYjuHp.js";import"./use-merge-refs-Bdxaq0s4.js";import"./attr-sHTFgF0E.js";import"./call-all-DDzecCnU.js";import"./button-lwGmIUkK.js";import"./spinner-CCN1jjNR.js";import"./define-styles-BSAHv3yx.js";import"./center-Bg6uA6YZ.js";import"./h-stack-ecaAvnDk.js";import"./Icon-C0_wlgZX.js";/* empty css              */import"./use-callback-ref-DA6UG1mJ.js";import"./use-controllable-state-Dnial3e2.js";import"./use-focus-on-pointer-down-BI4L5zXl.js";import"./use-event-listener-DbiM-QVt.js";import"./use-update-effect-CNg9DBIF.js";var H=function(){var t=document.getSelection();if(!t.rangeCount)return function(){};for(var r=document.activeElement,n=[],s=0;s<t.rangeCount;s++)n.push(t.getRangeAt(s));switch(r.tagName.toUpperCase()){case"INPUT":case"TEXTAREA":r.blur();break;default:r=null;break}return t.removeAllRanges(),function(){t.type==="Caret"&&t.removeAllRanges(),t.rangeCount||n.forEach(function(l){t.addRange(l)}),r&&r.focus()}},X=H,v={"text/plain":"Text","text/html":"Url",default:"Text"},K="Copy to clipboard: #{key}, Enter";function L(t){var r=(/mac os x/i.test(navigator.userAgent)?"⌘":"Ctrl")+"+C";return t.replace(/#{\s*key\s*}/g,r)}function _(t,r){var n,s,l,c,d,i,h=!1;r||(r={}),n=r.debug||!1;try{l=X(),c=document.createRange(),d=document.getSelection(),i=document.createElement("span"),i.textContent=t,i.ariaHidden="true",i.style.all="unset",i.style.position="fixed",i.style.top=0,i.style.clip="rect(0, 0, 0, 0)",i.style.whiteSpace="pre",i.style.webkitUserSelect="text",i.style.MozUserSelect="text",i.style.msUserSelect="text",i.style.userSelect="text",i.addEventListener("copy",function(a){if(a.stopPropagation(),r.format)if(a.preventDefault(),typeof a.clipboardData>"u"){n&&console.warn("unable to use e.clipboardData"),n&&console.warn("trying IE specific stuff"),window.clipboardData.clearData();var j=v[r.format]||v.default;window.clipboardData.setData(j,t)}else a.clipboardData.clearData(),a.clipboardData.setData(r.format,t);r.onCopy&&(a.preventDefault(),r.onCopy(a.clipboardData))}),document.body.appendChild(i),c.selectNodeContents(i),d.addRange(c);var p=document.execCommand("copy");if(!p)throw new Error("copy command was unsuccessful");h=!0}catch(a){n&&console.error("unable to copy using execCommand: ",a),n&&console.warn("trying IE specific stuff");try{window.clipboardData.setData(r.format||"text",t),r.onCopy&&r.onCopy(window.clipboardData),h=!0}catch(j){n&&console.error("unable to copy using clipboardData: ",j),n&&console.error("falling back to prompt"),s=L("message"in r?r.message:K),window.prompt(s,t)}}finally{d&&(typeof d.removeRange=="function"?d.removeRange(c):d.removeAllRanges()),i&&document.body.removeChild(i),l()}return h}var q=_;const k=F(q);function z(t,r={}){const[n,s]=x.useState(!1),[l,c]=x.useState(t);x.useEffect(()=>c(t),[t]);const{timeout:d=1500,...i}=typeof r=="number"?{timeout:r}:r,h=x.useCallback(p=>{const a=typeof p=="string"?p:l;"clipboard"in navigator?navigator.clipboard.writeText(a).then(()=>s(!0)).catch(()=>s(k(a,i))):s(k(a,i))},[l,i]);return x.useEffect(()=>{let p=null;return n&&(p=window.setTimeout(()=>{s(!1)},d)),()=>{p&&window.clearTimeout(p)}},[d,n]),{value:l,setValue:c,onCopy:h,hasCopied:n}}const $=`
function Example() {
    const placeholder = "text to be copied...";
    const { onCopy, value, setValue, hasCopied } = useClipboard("");

    return (
        <>
            <Flex mb={2}>
        <Input
            placeholder={placeholder}
    value={value}
    onChange={(e) => {
        setValue(e.target.value);
    }}
    mr={2}
    />
    <Button onClick={onCopy}>{hasCopied ? "Copied!" : "Copy"}</Button>
        </Flex>
        <Editable placeholder="Paste here">
    <EditablePreview width="100%" />
        <EditableInput />
        </Editable>
        </>
)
}
`,G=()=>{const t="text to be copied...",{onCopy:r,value:n,setValue:s,hasCopied:l}=z("");return e.jsxs(A,{children:[e.jsxs(M,{mb:2,children:[e.jsx(V,{placeholder:t,value:n,onChange:c=>{s(c.target.value)},mr:2}),e.jsx(P,{onClick:r,children:l?"Copied!":"Copy"})]}),e.jsxs(N,{placeholder:"Paste here",children:[e.jsx(U,{width:"100%"}),e.jsx(B,{})]}),e.jsx(E,{code:$,dark:!0})]})};function D(t){const r={code:"code",h1:"h1",p:"p",pre:"pre",strong:"strong",...w(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(T,{title:"Komponenter/Hooks/useClipboard"}),`
`,e.jsx(r.h1,{id:"useclipboard",children:"useClipboard"}),`
`,e.jsxs(r.p,{children:[e.jsx(r.strong,{children:"useClipboard"})," er en tilpasset hook som håndterer kopiering av innhold til utklippstavlen."]}),`
`,e.jsx(r.pre,{children:e.jsx(r.code,{className:"language-jsx",children:`import { useClipboard } from "@kvib/react";
`})}),`
`,e.jsx(S,{component:"useClipboard"}),`
`,e.jsxs(R,{children:[e.jsx(f,{light:!0,children:"Arguments"}),e.jsxs(r.p,{children:[e.jsx(r.strong,{children:"useClipboard"})," hook tar imot følgende argumenter:"]}),e.jsx(b,{children:e.jsxs(g,{children:[e.jsx(C,{children:e.jsxs(m,{children:[e.jsx(u,{children:"Name"}),e.jsx(u,{children:"Type"}),e.jsx(u,{children:"Required"}),e.jsx(u,{children:"Description"})]})}),e.jsxs(y,{children:[e.jsxs(m,{children:[e.jsx(o,{children:e.jsx("code",{children:"text"})}),e.jsx(o,{children:e.jsx("code",{children:"string"})}),e.jsx(o,{children:e.jsx("code",{children:"true"})}),e.jsx(o,{children:"Teksten eller verdien som skal kopieres."})]}),e.jsxs(m,{children:[e.jsx(o,{children:e.jsx("code",{children:"optionsOrTimeout"})}),e.jsxs(o,{children:[e.jsx("code",{children:"number"})," eller ",e.jsx("code",{children:"object"})]}),e.jsx(o,{children:e.jsx("code",{children:"false"})}),e.jsxs(o,{children:["Tidsavbruddet som et tall eller et objekt som inneholder 2 egenskaper: ",e.jsx("br",{})," ",e.jsx("code",{children:"timeout"})," og ",e.jsx("code",{children:"format"})," for MIME-typen. ",e.jsx("br",{}),"Tidsavbruddet måles i millisekunder og har en standard på 1500ms."]})]})]})]})}),e.jsx(f,{light:!0,children:"Return value"}),e.jsxs(r.p,{children:[e.jsx(r.strong,{children:"useClipboard"})," hook returnerer et objekt med følgende felt:"]}),e.jsx(b,{children:e.jsxs(g,{children:[e.jsx(C,{children:e.jsxs(m,{children:[e.jsx(u,{children:"Name"}),e.jsx(u,{children:"Type"}),e.jsx(u,{children:"Default"}),e.jsx(u,{children:"Description"})]})}),e.jsxs(y,{children:[e.jsxs(m,{children:[e.jsx(o,{children:e.jsx("code",{children:"value"})}),e.jsx(o,{children:e.jsx("code",{children:"string"})}),e.jsx(o,{children:e.jsx("code",{})}),e.jsx(o,{children:"Verdien som er kopiert."})]}),e.jsxs(m,{children:[e.jsx(o,{children:e.jsx("code",{children:"setValue"})}),e.jsx(o,{children:e.jsx("code",{children:"function"})}),e.jsx(o,{children:e.jsx("code",{})}),e.jsx(o,{children:"Angi handling for å endre den kopierte verdien."})]}),e.jsxs(m,{children:[e.jsx(o,{children:e.jsx("code",{children:"onCopy"})}),e.jsx(o,{children:e.jsx("code",{children:"function"})}),e.jsx(o,{children:e.jsx("code",{})}),e.jsx(o,{children:"Callback funksjon for å kopiere innhold"})]}),e.jsxs(m,{children:[e.jsx(o,{children:e.jsx("code",{children:"hasCopied"})}),e.jsx(o,{children:e.jsx("code",{children:"boolean"})}),e.jsx(o,{children:e.jsx("code",{children:"false"})}),e.jsxs(o,{children:["Hvis ",e.jsx("code",{children:"true"}),", har innholder blitt kopiert i løpet av de siste ",e.jsx("code",{children:"timeout"}),"-millisekundene. ",e.jsx("br",{})," Det vil si at den settes til ",e.jsx("code",{children:"true"})," rett etter at onCopy er kalt, og ",e.jsx("code",{children:"false"})," etter at ",e.jsx("code",{children:"timeout"})," har gått"]})]})]})]})}),e.jsx(I,{title:"Bruk",description:"useClipboard er en tilpasset hook som håndterer kopiering av innhold til utklippstavlen",isVertical:!0,story:e.jsx(G,{})})]})]})}function lr(t={}){const{wrapper:r}={...w(),...t.components};return r?e.jsx(r,{...t,children:e.jsx(D,{...t})}):D(t)}export{lr as default};
