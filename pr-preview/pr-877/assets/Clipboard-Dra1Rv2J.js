import{j as e}from"./extends-CwFRzn3r.js";import{useMDXComponents as w}from"./index-DlpNa54Y.js";import"./chunk-NUUEMKO5-CNJ9UO9Y.js";import{ai as E,ae as T}from"./index-Bi6GiZ_v.js";import{F as S,D as R,b as f,a as I}from"./Feedback-PBN2hk6I.js";import{D as A}from"./DocsCanvas-BhnAGqOh.js";import{r as x}from"./index-BwDkhjyp.js";import{g as F}from"./_commonjsHelpers-BosuxZz1.js";import{F as M}from"./flex-CHlq4-Ax.js";import{I as V}from"./input-DYJm5yJ_.js";import{B as P}from"./Button-DKu1TMZE.js";import{E as N,b as U,d as B}from"./editable-preview-XIPRlIx8.js";import{T as b,a as g,b as C,c as m,d as u,e as y,f as o}from"./tr-BOIJG77-.js";import"./iframe-CzweOme9.js";import"../sb-preview/runtime.js";import"./react-18-4JAveGcY.js";import"./index-Dn0f7ynd.js";import"./index-D-8MO0q_.js";import"./isNativeReflectConstruct-lfp1ZYuW.js";import"./inheritsLoose-B6jfs0L0.js";import"./setPrototypeOf-DgZC2w_0.js";import"./index-DF3CPj03.js";import"./index-DrFu-skq.js";import"./box-B7h7acUJ.js";import"./factory-CdGA0D9p.js";import"./emotion-styled.browser.esm-NI0tOKWg.js";import"./image-Cz43cXZB.js";import"./forward-ref-BWI-Phbn.js";import"./use-image-rNdzB_Ea.js";import"./use-safe-layout-effect-BnICyLBj.js";import"./omit-QLD0Eizt.js";import"./simple-grid-CQLrn815.js";import"./grid-zpFC2r7C.js";import"./use-theme-CBfqdygA.js";import"./hooks-D04p5R0A.js";import"./responsive-ClFn5vzN.js";import"./heading-D_euA-I1.js";import"./use-style-config--HlEOpE-.js";import"./index-CfyPTyT-.js";import"./cx-BDMMs1jM.js";import"./text-rUwQV1v4.js";import"./Card-DoxEvc2h.js";import"./providers-tFX8H8_I.js";import"./emotion-react.browser.esm-Hqbkbmab.js";import"./context-CBKykClo.js";import"./calc-Dy10IX1y.js";import"./css-var-DE0-P1bc.js";import"./pick-DBnSFT3T.js";import"./stack-Crl0JO1i.js";import"./children-2ZXUntH3.js";import"./use-form-control-Dd261dKs.js";import"./form-control-COBP5YBd.js";import"./use-merge-refs-Bdxaq0s4.js";import"./attr-sHTFgF0E.js";import"./call-all-DDzecCnU.js";import"./button-Db-BlFJ2.js";import"./spinner-DcEBpU52.js";import"./define-styles-BSAHv3yx.js";import"./center-D672Tu8u.js";import"./h-stack-P6-XT6iQ.js";import"./Icon-D9XisXVE.js";/* empty css              */import"./use-callback-ref-DA6UG1mJ.js";import"./use-controllable-state-Dnial3e2.js";import"./use-focus-on-pointer-down-BI4L5zXl.js";import"./use-event-listener-DbiM-QVt.js";import"./use-update-effect-CNg9DBIF.js";var H=function(){var t=document.getSelection();if(!t.rangeCount)return function(){};for(var r=document.activeElement,n=[],s=0;s<t.rangeCount;s++)n.push(t.getRangeAt(s));switch(r.tagName.toUpperCase()){case"INPUT":case"TEXTAREA":r.blur();break;default:r=null;break}return t.removeAllRanges(),function(){t.type==="Caret"&&t.removeAllRanges(),t.rangeCount||n.forEach(function(l){t.addRange(l)}),r&&r.focus()}},X=H,v={"text/plain":"Text","text/html":"Url",default:"Text"},L="Copy to clipboard: #{key}, Enter";function _(t){var r=(/mac os x/i.test(navigator.userAgent)?"⌘":"Ctrl")+"+C";return t.replace(/#{\s*key\s*}/g,r)}function q(t,r){var n,s,l,c,d,i,h=!1;r||(r={}),n=r.debug||!1;try{l=X(),c=document.createRange(),d=document.getSelection(),i=document.createElement("span"),i.textContent=t,i.ariaHidden="true",i.style.all="unset",i.style.position="fixed",i.style.top=0,i.style.clip="rect(0, 0, 0, 0)",i.style.whiteSpace="pre",i.style.webkitUserSelect="text",i.style.MozUserSelect="text",i.style.msUserSelect="text",i.style.userSelect="text",i.addEventListener("copy",function(a){if(a.stopPropagation(),r.format)if(a.preventDefault(),typeof a.clipboardData>"u"){n&&console.warn("unable to use e.clipboardData"),n&&console.warn("trying IE specific stuff"),window.clipboardData.clearData();var j=v[r.format]||v.default;window.clipboardData.setData(j,t)}else a.clipboardData.clearData(),a.clipboardData.setData(r.format,t);r.onCopy&&(a.preventDefault(),r.onCopy(a.clipboardData))}),document.body.appendChild(i),c.selectNodeContents(i),d.addRange(c);var p=document.execCommand("copy");if(!p)throw new Error("copy command was unsuccessful");h=!0}catch(a){n&&console.error("unable to copy using execCommand: ",a),n&&console.warn("trying IE specific stuff");try{window.clipboardData.setData(r.format||"text",t),r.onCopy&&r.onCopy(window.clipboardData),h=!0}catch(j){n&&console.error("unable to copy using clipboardData: ",j),n&&console.error("falling back to prompt"),s=_("message"in r?r.message:L),window.prompt(s,t)}}finally{d&&(typeof d.removeRange=="function"?d.removeRange(c):d.removeAllRanges()),i&&document.body.removeChild(i),l()}return h}var z=q;const k=F(z);function K(t,r={}){const[n,s]=x.useState(!1),[l,c]=x.useState(t);x.useEffect(()=>c(t),[t]);const{timeout:d=1500,...i}=typeof r=="number"?{timeout:r}:r,h=x.useCallback(p=>{const a=typeof p=="string"?p:l;"clipboard"in navigator?navigator.clipboard.writeText(a).then(()=>s(!0)).catch(()=>s(k(a,i))):s(k(a,i))},[l,i]);return x.useEffect(()=>{let p=null;return n&&(p=window.setTimeout(()=>{s(!1)},d)),()=>{p&&window.clearTimeout(p)}},[d,n]),{value:l,setValue:c,onCopy:h,hasCopied:n}}const $=`
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
`,G=()=>{const t="text to be copied...",{onCopy:r,value:n,setValue:s,hasCopied:l}=K("");return e.jsxs(A,{children:[e.jsxs(M,{mb:2,children:[e.jsx(V,{placeholder:t,value:n,onChange:c=>{s(c.target.value)},mr:2}),e.jsx(P,{onClick:r,children:l?"Copied!":"Copy"})]}),e.jsxs(N,{placeholder:"Paste here",children:[e.jsx(U,{width:"100%"}),e.jsx(B,{})]}),e.jsx(E,{code:$,dark:!0})]})};function D(t){const r={code:"code",h1:"h1",p:"p",pre:"pre",strong:"strong",...w(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(T,{title:"Hooks/useClipboard"}),`
`,e.jsx(r.h1,{id:"useclipboard",children:"useClipboard"}),`
`,e.jsxs(r.p,{children:[e.jsx(r.strong,{children:"useClipboard"})," er en tilpasset hook som håndterer kopiering av innhold til utklippstavlen."]}),`
`,e.jsx(r.pre,{children:e.jsx(r.code,{className:"language-jsx",children:`import { useClipboard } from "@kvib/react";
`})}),`
`,e.jsx(S,{component:"useClipboard"}),`
`,e.jsxs(R,{children:[e.jsx(f,{light:!0,children:"Arguments"}),e.jsxs(r.p,{children:[e.jsx(r.strong,{children:"useClipboard"})," hook tar imot følgende argumenter:"]}),e.jsx(b,{children:e.jsxs(g,{children:[e.jsx(C,{children:e.jsxs(m,{children:[e.jsx(u,{children:"Name"}),e.jsx(u,{children:"Type"}),e.jsx(u,{children:"Required"}),e.jsx(u,{children:"Description"})]})}),e.jsxs(y,{children:[e.jsxs(m,{children:[e.jsx(o,{children:e.jsx("code",{children:"text"})}),e.jsx(o,{children:e.jsx("code",{children:"string"})}),e.jsx(o,{children:e.jsx("code",{children:"true"})}),e.jsx(o,{children:"Teksten eller verdien som skal kopieres."})]}),e.jsxs(m,{children:[e.jsx(o,{children:e.jsx("code",{children:"optionsOrTimeout"})}),e.jsxs(o,{children:[e.jsx("code",{children:"number"})," eller ",e.jsx("code",{children:"object"})]}),e.jsx(o,{children:e.jsx("code",{children:"false"})}),e.jsxs(o,{children:["Tidsavbruddet som et tall eller et objekt som inneholder 2 egenskaper: ",e.jsx("br",{})," ",e.jsx("code",{children:"timeout"})," og ",e.jsx("code",{children:"format"})," for MIME-typen. ",e.jsx("br",{}),"Tidsavbruddet måles i millisekunder og har en standard på 1500ms."]})]})]})]})}),e.jsx(f,{light:!0,children:"Return value"}),e.jsxs(r.p,{children:[e.jsx(r.strong,{children:"useClipboard"})," hook returnerer et objekt med følgende felt:"]}),e.jsx(b,{children:e.jsxs(g,{children:[e.jsx(C,{children:e.jsxs(m,{children:[e.jsx(u,{children:"Name"}),e.jsx(u,{children:"Type"}),e.jsx(u,{children:"Default"}),e.jsx(u,{children:"Description"})]})}),e.jsxs(y,{children:[e.jsxs(m,{children:[e.jsx(o,{children:e.jsx("code",{children:"value"})}),e.jsx(o,{children:e.jsx("code",{children:"string"})}),e.jsx(o,{children:e.jsx("code",{})}),e.jsx(o,{children:"Verdien som er kopiert."})]}),e.jsxs(m,{children:[e.jsx(o,{children:e.jsx("code",{children:"setValue"})}),e.jsx(o,{children:e.jsx("code",{children:"function"})}),e.jsx(o,{children:e.jsx("code",{})}),e.jsx(o,{children:"Angi handling for å endre den kopierte verdien."})]}),e.jsxs(m,{children:[e.jsx(o,{children:e.jsx("code",{children:"onCopy"})}),e.jsx(o,{children:e.jsx("code",{children:"function"})}),e.jsx(o,{children:e.jsx("code",{})}),e.jsx(o,{children:"Callback funksjon for å kopiere innhold"})]}),e.jsxs(m,{children:[e.jsx(o,{children:e.jsx("code",{children:"hasCopied"})}),e.jsx(o,{children:e.jsx("code",{children:"boolean"})}),e.jsx(o,{children:e.jsx("code",{children:"false"})}),e.jsxs(o,{children:["Hvis ",e.jsx("code",{children:"true"}),", har innholder blitt kopiert i løpet av de siste ",e.jsx("code",{children:"timeout"}),"-millisekundene. ",e.jsx("br",{})," Det vil si at den settes til ",e.jsx("code",{children:"true"})," rett etter at onCopy er kalt, og ",e.jsx("code",{children:"false"})," etter at ",e.jsx("code",{children:"timeout"})," har gått"]})]})]})]})}),e.jsx(I,{title:"Bruk",description:"useClipboard er en tilpasset hook som håndterer kopiering av innhold til utklippstavlen",isVertical:!0,story:e.jsx(G,{})})]})]})}function ar(t={}){const{wrapper:r}={...w(),...t.components};return r?e.jsx(r,{...t,children:e.jsx(D,{...t})}):D(t)}export{ar as default};
