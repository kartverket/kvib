import{j as e}from"./jsx-runtime-DQFEoQHt.js";import{useMDXComponents as j}from"./index-DQ9BjFnV.js";import{bq as B,aN as A,aO as h,br as f,bA as E,bB as F}from"./index-BkLpvq3U.js";import"./chunk-NUUEMKO5-CHxzeXrC.js";import{ae as D}from"./index-D37inNnn.js";import{r as u}from"./index-CbFAwPTn.js";import{F as a}from"./flex-B6LzrYc1.js";import{B as m}from"./box-enNWkFiM.js";import{H as w}from"./heading-DSKY1IBf.js";import{T as d}from"./text-sMekb8FJ.js";import{S as b}from"./stack-BAqUyaXt.js";import"./index-BVPtv_lZ.js";import"./factory-C_AV5G8T.js";import"./create-recipe-context-BJGsumvR.js";import"./empty-DSVal0bC.js";import"./grid-C9LqfPmh.js";import"./use-event-DBF3Ked7.js";import"./create-context-Cnn4BppQ.js";import"./index-Crg4-8o8.js";import"./index-CqJK9h7E.js";import"./factory-YvB-AF3-.js";import"./walk-object-2Xl5z3JH.js";import"./create-split-props-L-tVc3XO.js";import"./editable-CzOn4N4i.js";import"./create-slot-recipe-context-CBrPPoLh.js";import"./use-environment-context-ekjyci6u.js";import"./use-field-context-DguIDVI7.js";import"./fieldset-DBNWSO0W.js";import"./tabs-w1z1Boot.js";import"./link-BvpO1hOw.js";import"./aspect-ratio-Y0y4qFt-.js";import"./badge-DAWK_bfl.js";import"./bleed-BQpq41fx.js";import"./card-641aoCZa.js";import"./center-t5QQ6XAV.js";import"./code-C7Shch1Q.js";import"./container-B2trJtWH.js";import"./float-DkG2t2Rc.js";import"./highlight-B1i-K0Nr.js";import"./grid-item-Cn0KX9Xz.js";import"./simple-grid-DzGsjFz8.js";import"./image-BajOZyTZ.js";import"./kbd-ioGaoUw0.js";import"./link-box-1ZHhZhF1.js";import"./separator-CeD7UzOc.js";import"./skip-nav-link-BknBF1pi.js";import"./spinner-f8I0xFVE.js";import"./table-B_IQCDKb.js";import"./textarea-Bl3OFlZv.js";import"./visually-hidden-b-_guvqp.js";import"./portal-DyfuXM0a.js";import"./iframe-Am1movyH.js";import"../sb-preview/runtime.js";import"./react-18-DdqO7fqk.js";import"./index-NOh9rqHv.js";import"./index-ogSvIofg.js";const v=["FF","E6","B3","80","4D","1A"],c=["1","0.9","0.7","0.5","0.3","0.1"],y=({colorValue:t})=>e.jsx(m,{position:"absolute",left:"0",bottom:"0",height:"40%",backgroundColor:"rgba(255,255,255,0.7)",display:"flex",alignItems:"center",justifyContent:"center",px:2,children:e.jsx(d,{color:"black",fontWeight:"bold",fontSize:"smaller",children:t})}),H=({value:t})=>{const[r,n]=u.useState(!1),o=i=>{navigator.clipboard.writeText(i).then(function(){f.create({title:"Kopiert!",description:i,type:"success",duration:2e3})},function(s){console.error("Unable to copy text: ",s),f.create({title:"Error",description:"Failed to copy color.",type:"error",duration:2e3})})};return e.jsx(e.Fragment,{children:e.jsxs(m,{backgroundColor:"white",height:"60px",width:"100%",children:[r&&e.jsx(y,{colorValue:t}),e.jsx(m,{backgroundColor:t,height:"60px",width:"100%",_hover:{opacity:.5},onMouseEnter:()=>n(!0),onMouseLeave:()=>n(!1),onClick:()=>o(t),cursor:"pointer"})]})})},g=({value:t,format:r})=>{const[n,o]=u.useState(!1),i=r==="RGBA"?c:v,s=l=>r==="RGBA"?R(t,Number(l)):`${t}${l}`;return e.jsxs(a,{w:"240px",border:`2px ${t} solid`,gap:"2px",backgroundColor:t,position:"relative",onMouseEnter:()=>o(!0),onMouseLeave:()=>o(!1),children:[!n&&e.jsx(y,{colorValue:t}),i.map(l=>e.jsx(H,{value:s(l)},l))]})},k=({hexColors:t,RGBAColors:r})=>{const[n,o]=u.useState("HEX");let i;return n==="HEX"||!r?i=t:i=r,e.jsxs(e.Fragment,{children:[e.jsx(B,{}),e.jsxs(a,{flexDirection:"column",gap:55,marginTop:30,children:[r!==void 0&&e.jsx(G,{format:n,setFormat:o}),Object.entries(i).map(([s,l])=>e.jsxs(m,{children:[e.jsx(w,{as:"h3",size:"md",id:s,children:V(s)}),e.jsx(a,{gap:5,flexWrap:"wrap",children:Object.values(l).map((C,_)=>e.jsx("div",{children:e.jsx(g,{value:C.value,format:n})},_))})]},s))]})]})},p=({value:t,opacityFormat:r="Percentage"})=>{const n=(o,i,s)=>{switch(o){case"HEX":return i;case"Percentage":return`${parseFloat(c[s])*100}%`;default:return c[s]}};return e.jsx(a,{w:240,border:`2px ${t} solid`,gap:"2px",backgroundColor:t,position:"relative",children:v.map((o,i)=>e.jsx(m,{backgroundColor:"white",height:"60px",width:"100%",children:e.jsx(a,{backgroundColor:`${t}${o}`,height:"60px",width:"100%",_hover:{opacity:.5},alignItems:"center",justifyContent:"center",children:e.jsx(d,{fontWeight:"semibold",margin:0,children:n(r,o,i)})},o)}))})},R=(t,r)=>{const n=t.split(",");return n[3]=` ${r})`,n.join(",")},G=({format:t,setFormat:r})=>e.jsx(A,{onChange:r,value:t,children:e.jsxs(b,{direction:"row",gap:5,children:[e.jsx(h,{colorPalette:"blue",value:"HEX",children:"HEX"}),e.jsx(h,{value:"RGBA",children:"RGBA"})]})}),V=t=>t.charAt(0).toUpperCase()+t.slice(1);try{g.displayName="ColorBox",g.__docgenInfo={description:"",displayName:"ColorBox",props:{value:{defaultValue:null,description:"",name:"value",required:!0,type:{name:"string"}},format:{defaultValue:null,description:"",name:"format",required:!0,type:{name:"string"}}}}}catch{}try{k.displayName="ColorPalettes",k.__docgenInfo={description:"",displayName:"ColorPalettes",props:{hexColors:{defaultValue:null,description:"",name:"hexColors",required:!0,type:{name:"MapColorsType"}},RGBAColors:{defaultValue:null,description:"",name:"RGBAColors",required:!1,type:{name:"any"}}}}}catch{}try{p.displayName="ExampleBox",p.__docgenInfo={description:"",displayName:"ExampleBox",props:{value:{defaultValue:null,description:"",name:"value",required:!0,type:{name:"string"}},opacityFormat:{defaultValue:{value:"Percentage"},description:"",name:"opacityFormat",required:!1,type:{name:"enum",value:[{value:'"HEX"'},{value:'"RGBA"'},{value:'"Percentage"'}]}}}}}catch{}function x(t){const r={a:"a",code:"code",h1:"h1",h2:"h2",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...j(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(D,{title:"Komponenter/Tokens/Farger til kart"}),`
`,e.jsx(r.h1,{id:"fargepaletter-til-kart",children:"Fargepaletter til kart"}),`
`,e.jsxs(r.p,{children:["Vi har utviklet en rekke kartfarger for å gjøre det enklere for deg å lage konsistente og estetisk tiltalende kartløsninger. Disse fargene er nøye testet og tilpasset for å fungere godt med ulike bakgrunnskart. Fargekoder til kart er definert i variablene ",e.jsx(r.code,{children:"mapColors"})," og ",e.jsx(r.code,{children:"mapColorsRGBA"}),". Disse kan importeres direkte. Fargepalettene brukes ved å referere til fargevariablene i mapColors eller mapColorsRGBA."]}),`
`,e.jsx(r.h2,{id:"ta-i-bruk",children:"Ta i bruk"}),`
`,e.jsx(r.pre,{children:e.jsx(r.code,{className:"language-jsx",children:`import { mapColors, mapColorsRGBA } from "@kvib/react";
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
`,e.jsx(r.h2,{id:"opacity",children:"Opacity"}),`
`,e.jsx(r.p,{children:`Fargene i hver boks i palettene under har én fargekode fordelt med opacity fra 100% til 10%. Eksempelboksene viser opacity og alphaverdier for palettene.
Den første boksen viser prosent, den andre viser alphaverdi for HEX og den tredje viser alphaverdi for RGBA.`}),`
`,e.jsx(r.p,{children:e.jsx(r.strong,{children:"Om du skal markere et område burde du velge farge med opacity som ikke er 100% for da kan du se bakgrunnskartet. Skal du bare jobbe med punktobjekter i kart kan du velge opacity på 100% for da blir det mer synlig sammen med bakgrunnskartet. Sørg for at de valgte fargene fungerer godt med bakgrunnskartet du har implementert i din løsning. Dette er viktig for å opprettholde visuell konsistens og lesebarhet."})}),`
`,e.jsxs(b,{children:[e.jsxs(a,{alignItems:"center",children:[e.jsx(d,{margin:"0",fontWeight:"semibold",w:"20",children:e.jsx(r.p,{children:"Prosent"})}),e.jsx(p,{value:"#00A76C"})]}),e.jsxs(a,{alignItems:"center",children:[e.jsx(d,{margin:"0",fontWeight:"semibold",w:"20",children:e.jsx(r.p,{children:"HEX"})}),e.jsx(p,{value:"#00A76C",opacityFormat:"HEX"})]}),e.jsxs(a,{alignItems:"center",children:[e.jsx(d,{margin:"0",fontWeight:"semibold",w:"20",children:e.jsx(r.p,{children:"RGBA"})}),e.jsx(p,{value:"#00A76C",opacityFormat:"RGBA"})]})]}),`
`,e.jsx(r.h2,{id:"paletter",children:"Paletter"}),`
`,e.jsx(r.p,{children:"Kopier fargekodene fra palettene under ved å trykke på dem."}),`
`,e.jsx(k,{hexColors:E,RGBAColors:F})]})}function Xe(t={}){const{wrapper:r}={...j(),...t.components};return r?e.jsx(r,{...t,children:e.jsx(x,{...t})}):x(t)}export{Xe as default};
