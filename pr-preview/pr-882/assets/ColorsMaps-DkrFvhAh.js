import{j as e}from"./extends-CwFRzn3r.js";import{useMDXComponents as x}from"./index-DlpNa54Y.js";import"./chunk-NUUEMKO5-Dc-La3jU.js";import{ae as _}from"./index-DR90DzL6.js";import{r as k}from"./index-BwDkhjyp.js";import{F as l}from"./flex-CHlq4-Ax.js";import{B as m}from"./box-B7h7acUJ.js";import{H as B}from"./heading-D_euA-I1.js";import{T as d}from"./text-rUwQV1v4.js";import{R as E,a as h}from"./radio-F6daxEW4.js";import{S as j}from"./stack-Crl0JO1i.js";import{u as A}from"./use-toast-BKFB3eH5.js";import{m as D,a as F}from"./index-DRQpjxe9.js";import{K as w}from"./KvibProvider-B9BEigLV.js";import"./iframe-DNTp-SgB.js";import"../sb-preview/runtime.js";import"./react-18-4JAveGcY.js";import"./index-Dn0f7ynd.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-D-8MO0q_.js";import"./isNativeReflectConstruct-lfp1ZYuW.js";import"./inheritsLoose-B6jfs0L0.js";import"./setPrototypeOf-DgZC2w_0.js";import"./index-DF3CPj03.js";import"./index-DrFu-skq.js";import"./forward-ref-BWI-Phbn.js";import"./factory-CdGA0D9p.js";import"./emotion-styled.browser.esm-NI0tOKWg.js";import"./use-style-config--HlEOpE-.js";import"./omit-QLD0Eizt.js";import"./index-CfyPTyT-.js";import"./hooks-D04p5R0A.js";import"./use-theme-CBfqdygA.js";import"./cx-BDMMs1jM.js";import"./use-merge-refs-Bdxaq0s4.js";import"./context-CBKykClo.js";import"./index-BbAC0Ngi.js";import"./form-control-COBP5YBd.js";import"./attr-sHTFgF0E.js";import"./visually-hidden.style-BUiBK_kv.js";import"./call-all-DDzecCnU.js";import"./split-CzYrjwZo.js";import"./responsive-ClFn5vzN.js";import"./children-2ZXUntH3.js";import"./toast.provider-BOjhFOA8.js";import"./proxy-CQsau1XN.js";import"./use-update-effect-CNg9DBIF.js";import"./use-callback-ref-DA6UG1mJ.js";import"./alert-icon-C25tEepw.js";import"./define-styles-BSAHv3yx.js";import"./icon-DQb5sAJm.js";import"./spinner-DcEBpU52.js";import"./emotion-react.browser.esm-Hqbkbmab.js";import"./alert-title-DqLLjerX.js";import"./alert-description-BYBQ5f79.js";import"./close-button-uAmhqF5q.js";import"./portal-BqZkrvYK.js";import"./use-safe-layout-effect-BnICyLBj.js";import"./index-DVNvNJVv.js";import"./colors-BRrPfCdD.js";import"./borders-ChvaHRB1.js";import"./shadows-BswyqW6w.js";import"./radius-CY-lFcmF.js";import"./breakpoints-C6iAAgq8.js";import"./blur-CDuQaoya.js";import"./spacing-CccXtI2E.js";import"./typography-Ce5Admmz.js";import"./css-var-DE0-P1bc.js";import"./calc-Dy10IX1y.js";/* empty css              */import"./is-element-C52yPwBl.js";import"./providers-tFX8H8_I.js";import"./pick-DBnSFT3T.js";import"./env-B2QgRHdN.js";const b=["FF","E6","B3","80","4D","1A"],c=["1","0.9","0.7","0.5","0.3","0.1"],v=({colorValue:t})=>e.jsx(m,{position:"absolute",left:"0",bottom:"0",height:"40%",backgroundColor:"rgba(255,255,255,0.7)",display:"flex",alignItems:"center",justifyContent:"center",px:2,children:e.jsx(d,{color:"black",fontWeight:"bold",fontSize:"smaller",children:t})}),R=({value:t})=>{const[r,o]=k.useState(!1),n=A(),i=s=>{navigator.clipboard.writeText(s).then(function(){n({title:"Kopiert!",description:s,status:"success",duration:2e3,isClosable:!0,colorScheme:"blue"})},function(a){console.error("Unable to copy text: ",a),n({title:"Error",description:"Failed to copy color.",status:"error",duration:2e3,isClosable:!0})})};return e.jsxs(m,{backgroundColor:"white",height:"60px",width:"100%",children:[r&&e.jsx(v,{colorValue:t}),e.jsx(m,{backgroundColor:t,height:"60px",width:"100%",_hover:{opacity:.5},onMouseEnter:()=>o(!0),onMouseLeave:()=>o(!1),onClick:()=>i(t),cursor:"pointer"})]})},g=({value:t,format:r})=>{const[o,n]=k.useState(!1),i=r==="RGBA"?c:b,s=a=>r==="RGBA"?H(t,Number(a)):`${t}${a}`;return e.jsxs(l,{w:240,border:`2px ${t} solid`,gap:"2px",backgroundColor:t,position:"relative",onMouseEnter:()=>n(!0),onMouseLeave:()=>n(!1),children:[!o&&e.jsx(v,{colorValue:t}),i.map(a=>e.jsx(R,{value:s(a)},a))]})},u=({hexColors:t,RGBAColors:r})=>{const[o,n]=k.useState("HEX");let i;return o==="HEX"||!r?i=t:i=r,e.jsxs(l,{flexDirection:"column",gap:55,marginTop:30,children:[r!==void 0&&e.jsx(G,{format:o,setFormat:n}),Object.entries(i).map(([s,a])=>e.jsxs(m,{children:[e.jsx(B,{as:"h3",size:"md",id:s,children:S(s)}),e.jsx(l,{gap:5,flexWrap:"wrap",children:Object.values(a).map((y,C)=>e.jsx("div",{children:e.jsx(g,{value:y,format:o})},C))})]},s))]})},p=({value:t,opacityFormat:r="Percentage"})=>{const o=(n,i,s)=>{switch(n){case"HEX":return i;case"Percentage":return`${parseFloat(c[s])*100}%`;default:return c[s]}};return e.jsx(l,{w:240,border:`2px ${t} solid`,gap:"2px",backgroundColor:t,position:"relative",children:b.map((n,i)=>e.jsx(m,{backgroundColor:"white",height:"60px",width:"100%",children:e.jsx(l,{backgroundColor:`${t}${n}`,height:"60px",width:"100%",_hover:{opacity:.5},alignItems:"center",justifyContent:"center",children:e.jsx(d,{fontWeight:"semibold",margin:0,children:o(r,n,i)})},n)}))})},H=(t,r)=>{const o=t.split(",");return o[3]=` ${r})`,o.join(",")},G=({format:t,setFormat:r})=>e.jsx(E,{onChange:r,value:t,children:e.jsxs(j,{direction:"row",gap:5,children:[e.jsx(h,{colorScheme:"blue",value:"HEX",children:"HEX"}),e.jsx(h,{value:"RGBA",children:"RGBA"})]})}),S=t=>t.charAt(0).toUpperCase()+t.slice(1);try{g.displayName="ColorBox",g.__docgenInfo={description:"",displayName:"ColorBox",props:{value:{defaultValue:null,description:"",name:"value",required:!0,type:{name:"string"}},format:{defaultValue:null,description:"",name:"format",required:!0,type:{name:"string"}}}}}catch{}try{u.displayName="ColorPalettes",u.__docgenInfo={description:"",displayName:"ColorPalettes",props:{hexColors:{defaultValue:null,description:"",name:"hexColors",required:!0,type:{name:"MapColorsType"}},RGBAColors:{defaultValue:null,description:"",name:"RGBAColors",required:!1,type:{name:"MapColorsType | undefined"}}}}}catch{}try{p.displayName="ExampleBox",p.__docgenInfo={description:"",displayName:"ExampleBox",props:{value:{defaultValue:null,description:"",name:"value",required:!0,type:{name:"string"}},opacityFormat:{defaultValue:{value:"Percentage"},description:"",name:"opacityFormat",required:!1,type:{name:"enum",value:[{value:"undefined"},{value:'"HEX"'},{value:'"RGBA"'},{value:'"Percentage"'}]}}}}}catch{}function f(t){const r={a:"a",code:"code",h1:"h1",h2:"h2",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...x(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(_,{title:"Designfundament/Farger til kart"}),`
`,e.jsx(r.h1,{id:"fargepaletter-til-kart",children:"Fargepaletter til kart"}),`
`,e.jsxs(r.p,{children:["Vi har utviklet en rekke kartfarger for å gjøre det enklere for deg å lage konsistente og estetisk tiltalende kartløsninger. Disse fargene er nøye testet og tilpasset for å fungere godt med ulike bakgrunnskart. Fargekoder til kart er definert i variablene ",e.jsx(r.code,{children:"mapColors"})," og ",e.jsx(r.code,{children:"mapColorsRGBA"}),". Disse kan importeres direkte. Fargepalettene brukes ved å referere til fargevariablene i mapColors eller mapColorsRGBA."]}),`
`,e.jsx(r.h2,{id:"ta-i-bruk",children:"Ta i bruk"}),`
`,e.jsx(r.pre,{children:e.jsx(r.code,{className:"language-jsx",children:`import { mapColors, mapColorsRGBA } from "@kvib/react/src/theme/tokens";
`})}),`
`,e.jsxs(r.p,{children:["Eksempel: ",e.jsx(r.code,{children:"mapColors.blue[1]"})," vil gi fargen #476ED4 (Den første fargen i visningen under). Opacity setter du for øyeblikket selv."]}),`
`,e.jsx(r.p,{children:e.jsx(r.strong,{children:"Vær oppmerksom på at disse fargene ikke er spesifikt gruppert i forhold til bakgrunnskart, og derfor er det viktig å dobbeltsjekke kompatibiliteten med det aktuelle bakgrunnskartet i din implementering."})}),`
`,e.jsx(r.h2,{id:"brukstips",children:"Brukstips"}),`
`,e.jsxs(r.ol,{children:[`
`,e.jsxs(r.li,{children:[`
`,e.jsxs(r.p,{children:[e.jsx(r.strong,{children:"Hovedkartfarge:"}),`
Dette bør være deres primære kartfarge, og den bør brukes som hovedfarge i kartløsninger. Den gir sterke kontraster og er ideell for markering av viktige elementer og områder på kartet.`]}),`
`]}),`
`,e.jsxs(r.li,{children:[`
`,e.jsxs(r.p,{children:[e.jsx(r.strong,{children:"Sekundærkartfarge:"}),`
Denne fargen fungerer godt som en sekundær markør på kartet. Bruk den til å fremheve mindre fremtredende elementer eller til å skille mellom ulike kategorier på kartet.`]}),`
`]}),`
`,e.jsxs(r.li,{children:[`
`,e.jsxs(r.p,{children:[e.jsx(r.strong,{children:"Tertiærkartfarge:"}),`
Denne fargen er flott for å legge til detaljer og subtilt skille ulike områder på kartet. Den gir en balansert visuell opplevelse og er egnet for mindre fremtredende informasjon.`]}),`
`]}),`
`,e.jsxs(r.li,{children:[`
`,e.jsxs(r.p,{children:[e.jsx(r.strong,{children:"Aksentkartfarge:"}),`
Aksentfargen skal brukes for å legge til ekstra fokus på spesifikke områder eller funksjoner på kartet. Den kan også brukes for å indikere interaktive elementer eller handlinger.`]}),`
`]}),`
`]}),`
`,e.jsx(r.p,{children:e.jsx(r.strong,{children:"Husk:"})}),`
`,e.jsxs(r.ul,{children:[`
`,e.jsx(r.li,{children:"Vurder å kombinere hovedkartfargen med sekundær- eller tertiærkartfargen for å oppnå visuell hierarki på kartet."}),`
`,e.jsx(r.li,{children:"Aksentkartfargen kan brukes til å markere spesielle hendelser, destinasjoner eller funksjoner."}),`
`,e.jsx(r.li,{children:"Husk å tilpasse tekstfargen i forhold til bakgrunnskartet for best mulig lesbarhet."}),`
`]}),`
`,e.jsx(r.h2,{id:"eksempel-på-feil-bruk",children:"Eksempel på feil bruk"}),`
`,e.jsxs(r.p,{children:[e.jsx(r.strong,{children:"Primærfarge (Hovedkartfarge)"}),`: #F15D4E (Red)
`,e.jsx(r.strong,{children:"Sekundærfarge (Sekundærkartfarge)"}),": #E56D31 (Brown)"]}),`
`,e.jsx(r.p,{children:"I dette eksempelet er det en utfordring med tilgjengelighet fordi både den primære og sekundære fargen har lignende metningsnivåer, og de er begge lyse og sterke. Dette kan føre til at informasjon på kartet, som markeringer eller tekst, blir vanskelig å skille fra bakgrunnen, spesielt for personer med nedsatt fargesyn. For eksempel kan personer som lider av rød-grønn fargesvakhet, ha problemer med å skille mellom disse fargene."}),`
`,e.jsxs(r.p,{children:["For å forbedre tilgjengeligheten, bør du vurdere å bruke farger som har mer kontrast mellom seg, for eksempel en kombinasjon av en lys og en mørk farge, eller to farger som har ulike metningsnivåer. Det kan være mye når du må forholde deg til bakgrunnkart også, men test uansett fargekontraster her før du bruker det: ",e.jsx(r.a,{href:"https://webaim.org/resources/contrastchecker/",rel:"nofollow",children:"https://webaim.org/resources/contrastchecker/"}),"."]}),`
`,e.jsx(r.p,{children:"Ved å følge disse retningslinjene for bruk av kartfargene, kan du enkelt opprette kartløsninger som er både visuelt tiltalende og funksjonelle. Vi oppfordrer deg til å bruke disse fargene i designsystemet, slik at du slipper å lage egne fargeløsninger for kartprosjekter."}),`
`,e.jsxs(w,{children:[e.jsx(r.h2,{id:"opacity",children:"Opacity"}),e.jsx(r.p,{children:`Fargene i hver boks i palettene under har én fargekode fordelt med opacity fra 100% til 10%. Eksempelboksene viser opacity og alphaverdier for palettene.
Den første boksen viser prosent, den andre viser alphaverdi for HEX og den tredje viser alphaverdi for RGBA.`}),e.jsx(r.p,{children:e.jsx(r.strong,{children:"Om du skal markere et område burde du velge farge med opacity som ikke er 100% for da kan du se bakgrunnskartet. Skal du bare jobbe med punktobjekter i kart kan du velge opacity på 100% for da blir det mer synlig sammen med bakgrunnskartet. Sørg for at de valgte fargene fungerer godt med bakgrunnskartet du har implementert i din løsning. Dette er viktig for å opprettholde visuell konsistens og lesebarhet."})}),e.jsxs(j,{children:[e.jsxs(l,{alignItems:"center",children:[e.jsx(d,{margin:"0",fontWeight:"semibold",w:"20",children:e.jsx(r.p,{children:"Prosent"})}),e.jsx(p,{value:"#00A76C"})]}),e.jsxs(l,{alignItems:"center",children:[e.jsx(d,{margin:"0",fontWeight:"semibold",w:"20",children:e.jsx(r.p,{children:"HEX"})}),e.jsx(p,{value:"#00A76C",opacityFormat:"HEX"})]}),e.jsxs(l,{alignItems:"center",children:[e.jsx(d,{margin:"0",fontWeight:"semibold",w:"20",children:e.jsx(r.p,{children:"RGBA"})}),e.jsx(p,{value:"#00A76C",opacityFormat:"RGBA"})]})]}),e.jsx(r.h2,{id:"paletter",children:"Paletter"}),e.jsx(r.p,{children:"Kopier fargekodene fra palettene under ved å trykke på dem."}),e.jsx(u,{hexColors:D,RGBAColors:F})]})]})}function rr(t={}){const{wrapper:r}={...x(),...t.components};return r?e.jsx(r,{...t,children:e.jsx(f,{...t})}):f(t)}export{rr as default};
