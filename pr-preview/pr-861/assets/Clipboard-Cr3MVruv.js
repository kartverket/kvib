import{j as e}from"./extends-CwFRzn3r.js";import{useMDXComponents as D}from"./index-DlpNa54Y.js";import"./chunk-NUUEMKO5-uhoRSd7C.js";import{ai as w,ae as E}from"./index-3SIPLL-f.js";import{F as T,D as S,b as f,a as R}from"./Feedback-bGPRL5wk.js";import{D as I}from"./DocsCanvas-C63K8Gif.js";import{r as x}from"./index-BwDkhjyp.js";import{g as A}from"./_commonjsHelpers-BosuxZz1.js";import{F}from"./chunk-KRPLQIP4-ICIqHMLQ.js";import{I as M}from"./chunk-6CVSDS6C-DIHhJ7ei.js";import{B as V}from"./Button-D7kqOxxv.js";import{E as P,b as N,d as U}from"./chunk-ROCN3PRT-6Z70SkT_.js";import{T as b,a as g,b as C,c as p,d as m,e as y,f as o}from"./chunk-MGVPL3OH-LuU5Ppik.js";import"./iframe-Ds95ZNTs.js";import"../sb-preview/runtime.js";import"./react-18-4JAveGcY.js";import"./index-Dn0f7ynd.js";import"./index-D-8MO0q_.js";import"./isNativeReflectConstruct-lfp1ZYuW.js";import"./inheritsLoose-B6jfs0L0.js";import"./setPrototypeOf-DgZC2w_0.js";import"./index-DF3CPj03.js";import"./index-DrFu-skq.js";import"./chunk-PULVB27S-CgiffgmI.js";import"./chunk-ZJJGQIVY-CoI1iMVy.js";import"./chunk-QINAG4RG-EokTgSxx.js";import"./chunk-SPIKMR6I-lNfAZPIg.js";import"./index-DJS8qWMq.js";import"./chunk-NEK3OOAM-DbYvnad0.js";import"./chunk-JARCRF6W-DgXWZoO5.js";import"./chunk-7FWEOSAE-DBqCpNZ5.js";import"./chunk-UIGT7YZF-XoNRsZNz.js";import"./chunk-G72KV6MB-s0NcBBxe.js";import"./chunk-2OOHT3W5-CV6N7GVi.js";import"./chunk-DMO4EI7P-D6u3hnqn.js";import"./chunk-R3DH46PF-iWUMGBws.js";import"./chunk-7OLJDQMT-lazN81OQ.js";import"./Card-DhObpdti.js";import"./chunk-MFVQSVQB-CA8z8kWU.js";import"./emotion-react.browser.esm-DOaDIBza.js";import"./chunk-ZHMYA64R-V_96TD_T.js";import"./index-2ZXUntH3.js";import"./chunk-56K2BSAJ-DEJm4C0m.js";import"./chunk-DFWC5MHP-TuRmrrLs.js";import"./index-CHDWSgKD.js";import"./index-Bdxaq0s4.js";import"./chunk-UVUR7MCU-TM6grcjD.js";import"./chunk-5PH6ULNP-B_hWxh7m.js";import"./chunk-FAWTVNS3-tKAZUTn2.js";import"./chunk-3ASUQ6PA-DZH9lOZq.js";import"./Icon-UN_j2Ura.js";/* empty css              */import"./index-CFS2lEUc.js";import"./index-Bvkiv1cC.js";import"./index-DdaX-njP.js";import"./index-DEiKcbOK.js";import"./index-DjrpCY14.js";var B=function(){var t=document.getSelection();if(!t.rangeCount)return function(){};for(var r=document.activeElement,s=[],i=0;i<t.rangeCount;i++)s.push(t.getRangeAt(i));switch(r.tagName.toUpperCase()){case"INPUT":case"TEXTAREA":r.blur();break;default:r=null;break}return t.removeAllRanges(),function(){t.type==="Caret"&&t.removeAllRanges(),t.rangeCount||s.forEach(function(l){t.addRange(l)}),r&&r.focus()}},H=B,v={"text/plain":"Text","text/html":"Url",default:"Text"},X="Copy to clipboard: #{key}, Enter";function L(t){var r=(/mac os x/i.test(navigator.userAgent)?"⌘":"Ctrl")+"+C";return t.replace(/#{\s*key\s*}/g,r)}function _(t,r){var s,i,l,a,c,n,h=!1;r||(r={}),s=r.debug||!1;try{l=H(),a=document.createRange(),c=document.getSelection(),n=document.createElement("span"),n.textContent=t,n.ariaHidden="true",n.style.all="unset",n.style.position="fixed",n.style.top=0,n.style.clip="rect(0, 0, 0, 0)",n.style.whiteSpace="pre",n.style.webkitUserSelect="text",n.style.MozUserSelect="text",n.style.msUserSelect="text",n.style.userSelect="text",n.addEventListener("copy",function(d){if(d.stopPropagation(),r.format)if(d.preventDefault(),typeof d.clipboardData>"u"){s&&console.warn("unable to use e.clipboardData"),s&&console.warn("trying IE specific stuff"),window.clipboardData.clearData();var j=v[r.format]||v.default;window.clipboardData.setData(j,t)}else d.clipboardData.clearData(),d.clipboardData.setData(r.format,t);r.onCopy&&(d.preventDefault(),r.onCopy(d.clipboardData))}),document.body.appendChild(n),a.selectNodeContents(n),c.addRange(a);var u=document.execCommand("copy");if(!u)throw new Error("copy command was unsuccessful");h=!0}catch(d){s&&console.error("unable to copy using execCommand: ",d),s&&console.warn("trying IE specific stuff");try{window.clipboardData.setData(r.format||"text",t),r.onCopy&&r.onCopy(window.clipboardData),h=!0}catch(j){s&&console.error("unable to copy using clipboardData: ",j),s&&console.error("falling back to prompt"),i=L("message"in r?r.message:X),window.prompt(i,t)}}finally{c&&(typeof c.removeRange=="function"?c.removeRange(a):c.removeAllRanges()),n&&document.body.removeChild(n),l()}return h}var q=_;const z=A(q);function K(t,r={}){const[s,i]=x.useState(!1),[l,a]=x.useState(t);x.useEffect(()=>a(t),[t]);const{timeout:c=1500,...n}=typeof r=="number"?{timeout:r}:r,h=x.useCallback(()=>{const u=z(l,n);i(u)},[l,n]);return x.useEffect(()=>{let u=null;return s&&(u=window.setTimeout(()=>{i(!1)},c)),()=>{u&&window.clearTimeout(u)}},[c,s]),{value:l,setValue:a,onCopy:h,hasCopied:s}}const $=`
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
`,G=()=>{const t="text to be copied...",{onCopy:r,value:s,setValue:i,hasCopied:l}=K("");return e.jsxs(I,{children:[e.jsxs(F,{mb:2,children:[e.jsx(M,{placeholder:t,value:s,onChange:a=>{i(a.target.value)},mr:2}),e.jsx(V,{onClick:r,children:l?"Copied!":"Copy"})]}),e.jsxs(P,{placeholder:"Paste here",children:[e.jsx(N,{width:"100%"}),e.jsx(U,{})]}),e.jsx(w,{code:$,dark:!0})]})};function k(t){const r={code:"code",h1:"h1",p:"p",pre:"pre",strong:"strong",...D(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(E,{title:"Hooks/useClipboard"}),`
`,e.jsx(r.h1,{id:"useclipboard",children:"useClipboard"}),`
`,e.jsxs(r.p,{children:[e.jsx(r.strong,{children:"useClipboard"})," er en tilpasset hook som håndterer kopiering av innhold til utklippstavlen."]}),`
`,e.jsx(r.pre,{children:e.jsx(r.code,{className:"language-jsx",children:`import { useClipboard } from "@kvib/react";
`})}),`
`,e.jsx(T,{component:"useClipboard"}),`
`,e.jsxs(S,{children:[e.jsx(f,{light:!0,children:"Arguments"}),e.jsxs(r.p,{children:[e.jsx(r.strong,{children:"useClipboard"})," hook tar imot følgende argumenter:"]}),e.jsx(b,{children:e.jsxs(g,{children:[e.jsx(C,{children:e.jsxs(p,{children:[e.jsx(m,{children:"Name"}),e.jsx(m,{children:"Type"}),e.jsx(m,{children:"Required"}),e.jsx(m,{children:"Description"})]})}),e.jsxs(y,{children:[e.jsxs(p,{children:[e.jsx(o,{children:e.jsx("code",{children:"text"})}),e.jsx(o,{children:e.jsx("code",{children:"string"})}),e.jsx(o,{children:e.jsx("code",{children:"true"})}),e.jsx(o,{children:"Teksten eller verdien som skal kopieres."})]}),e.jsxs(p,{children:[e.jsx(o,{children:e.jsx("code",{children:"optionsOrTimeout"})}),e.jsxs(o,{children:[e.jsx("code",{children:"number"})," eller ",e.jsx("code",{children:"object"})]}),e.jsx(o,{children:e.jsx("code",{children:"false"})}),e.jsxs(o,{children:["Tidsavbruddet som et tall eller et objekt som inneholder 2 egenskaper: ",e.jsx("br",{})," ",e.jsx("code",{children:"timeout"})," og ",e.jsx("code",{children:"format"})," for MIME-typen. ",e.jsx("br",{}),"Tidsavbruddet måles i millisekunder og har en standard på 1500ms."]})]})]})]})}),e.jsx(f,{light:!0,children:"Return value"}),e.jsxs(r.p,{children:[e.jsx(r.strong,{children:"useClipboard"})," hook returnerer et objekt med følgende felt:"]}),e.jsx(b,{children:e.jsxs(g,{children:[e.jsx(C,{children:e.jsxs(p,{children:[e.jsx(m,{children:"Name"}),e.jsx(m,{children:"Type"}),e.jsx(m,{children:"Default"}),e.jsx(m,{children:"Description"})]})}),e.jsxs(y,{children:[e.jsxs(p,{children:[e.jsx(o,{children:e.jsx("code",{children:"value"})}),e.jsx(o,{children:e.jsx("code",{children:"string"})}),e.jsx(o,{children:e.jsx("code",{})}),e.jsx(o,{children:"Verdien som er kopiert."})]}),e.jsxs(p,{children:[e.jsx(o,{children:e.jsx("code",{children:"setValue"})}),e.jsx(o,{children:e.jsx("code",{children:"function"})}),e.jsx(o,{children:e.jsx("code",{})}),e.jsx(o,{children:"Angi handling for å endre den kopierte verdien."})]}),e.jsxs(p,{children:[e.jsx(o,{children:e.jsx("code",{children:"onCopy"})}),e.jsx(o,{children:e.jsx("code",{children:"function"})}),e.jsx(o,{children:e.jsx("code",{})}),e.jsx(o,{children:"Callback funksjon for å kopiere innhold"})]}),e.jsxs(p,{children:[e.jsx(o,{children:e.jsx("code",{children:"hasCopied"})}),e.jsx(o,{children:e.jsx("code",{children:"boolean"})}),e.jsx(o,{children:e.jsx("code",{children:"false"})}),e.jsxs(o,{children:["Hvis ",e.jsx("code",{children:"true"}),", har innholder blitt kopiert i løpet av de siste ",e.jsx("code",{children:"timeout"}),"-millisekundene. ",e.jsx("br",{})," Det vil si at den settes til ",e.jsx("code",{children:"true"})," rett etter at onCopy er kalt, og ",e.jsx("code",{children:"false"})," etter at ",e.jsx("code",{children:"timeout"})," har gått"]})]})]})]})}),e.jsx(R,{title:"Bruk",description:"useClipboard er en tilpasset hook som håndterer kopiering av innhold til utklippstavlen",isVertical:!0,story:e.jsx(G,{})})]})]})}function We(t={}){const{wrapper:r}={...D(),...t.components};return r?e.jsx(r,{...t,children:e.jsx(k,{...t})}):k(t)}export{We as default};