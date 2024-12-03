import{j as e}from"./jsx-runtime-CQsLhzk5.js";import{useMDXComponents as j}from"./index-C2WH5l5l.js";import{F as a,bv as B,B as c,j as E,T as d,aS as F,d as b,aT as h,bm as f,bw as A,bx as w}from"./index-Ckh_gHQY.js";import"./chunk-NUUEMKO5-CI1FTm1n.js";import{ae as D}from"./index-Cq1f4riH.js";import{r as m}from"./index-Wp2u197Z.js";import"./index-C2tM1_0x.js";import"./iframe-DhKz9-LK.js";import"../sb-preview/runtime.js";import"./react-18-B9NBEw6j.js";import"./index-yiGAEVS0.js";import"./index-DrFu-skq.js";const v=["FF","E6","B3","80","4D","1A"],g=["1","0.9","0.7","0.5","0.3","0.1"],y=({colorValue:t})=>e.jsx(c,{position:"absolute",left:"0",bottom:"0",height:"40%",backgroundColor:"rgba(255,255,255,0.7)",display:"flex",alignItems:"center",justifyContent:"center",px:2,children:e.jsx(d,{color:"black",fontWeight:"bold",fontSize:"smaller",children:t})}),R=({value:t})=>{const[r,n]=m.useState(!1),s=o=>{navigator.clipboard.writeText(o).then(function(){f.create({title:"Kopiert!",description:o,type:"success",duration:2e3})},function(i){console.error("Unable to copy text: ",i),f.create({title:"Error",description:"Failed to copy color.",type:"error",duration:2e3})})};return e.jsx(e.Fragment,{children:e.jsxs(c,{backgroundColor:"white",height:"60px",width:"100%",children:[r&&e.jsx(y,{colorValue:t}),e.jsx(c,{backgroundColor:t,height:"60px",width:"100%",_hover:{opacity:.5},onMouseEnter:()=>n(!0),onMouseLeave:()=>n(!1),onClick:()=>s(t),cursor:"pointer"})]})})},k=({value:t,format:r})=>{const[n,s]=m.useState(!1),o=r==="RGBA"?g:v,i=l=>r==="RGBA"?H(t,Number(l)):`${t}${l}`;return e.jsxs(a,{w:"240px",border:`2px ${t} solid`,gap:"2px",backgroundColor:t,position:"relative",onMouseEnter:()=>s(!0),onMouseLeave:()=>s(!1),children:[!n&&e.jsx(y,{colorValue:t}),o.map(l=>e.jsx(R,{value:i(l)},l))]})},u=({hexColors:t,RGBAColors:r})=>{const[n,s]=m.useState("HEX");let o;return n==="HEX"||!r?o=t:o=r,e.jsxs(e.Fragment,{children:[e.jsx(B,{}),e.jsxs(a,{flexDirection:"column",gap:55,marginTop:30,children:[r!==void 0&&e.jsx(G,{format:n,setFormat:s}),Object.entries(o).map(([i,l])=>e.jsxs(c,{children:[e.jsx(E,{as:"h3",size:"md",id:i,children:V(i)}),e.jsx(a,{gap:5,flexWrap:"wrap",children:Object.values(l).map((C,_)=>e.jsx("div",{children:e.jsx(k,{value:C.value,format:n})},_))})]},i))]})]})},p=({value:t,opacityFormat:r="Percentage"})=>{const n=(s,o,i)=>{switch(s){case"HEX":return o;case"Percentage":return`${parseFloat(g[i])*100}%`;default:return g[i]}};return e.jsx(a,{w:240,border:`2px ${t} solid`,gap:"2px",backgroundColor:t,position:"relative",children:v.map((s,o)=>e.jsx(c,{backgroundColor:"white",height:"60px",width:"100%",children:e.jsx(a,{backgroundColor:`${t}${s}`,height:"60px",width:"100%",_hover:{opacity:.5},alignItems:"center",justifyContent:"center",children:e.jsx(d,{fontWeight:"semibold",margin:0,children:n(r,s,o)})},s)}))})},H=(t,r)=>{const n=t.split(",");return n[3]=` ${r})`,n.join(",")},G=({format:t,setFormat:r})=>e.jsx(F,{onChange:r,value:t,children:e.jsxs(b,{direction:"row",gap:5,children:[e.jsx(h,{colorPalette:"blue",value:"HEX",children:"HEX"}),e.jsx(h,{value:"RGBA",children:"RGBA"})]})}),V=t=>t.charAt(0).toUpperCase()+t.slice(1);try{k.displayName="ColorBox",k.__docgenInfo={description:"",displayName:"ColorBox",props:{value:{defaultValue:null,description:"",name:"value",required:!0,type:{name:"string"}},format:{defaultValue:null,description:"",name:"format",required:!0,type:{name:"string"}}}}}catch{}try{u.displayName="ColorPalettes",u.__docgenInfo={description:"",displayName:"ColorPalettes",props:{hexColors:{defaultValue:null,description:"",name:"hexColors",required:!0,type:{name:"MapColorsType"}},RGBAColors:{defaultValue:null,description:"",name:"RGBAColors",required:!1,type:{name:"any"}}}}}catch{}try{p.displayName="ExampleBox",p.__docgenInfo={description:"",displayName:"ExampleBox",props:{value:{defaultValue:null,description:"",name:"value",required:!0,type:{name:"string"}},opacityFormat:{defaultValue:{value:"Percentage"},description:"",name:"opacityFormat",required:!1,type:{name:"enum",value:[{value:'"HEX"'},{value:'"RGBA"'},{value:'"Percentage"'}]}}}}}catch{}function x(t){const r={a:"a",code:"code",h1:"h1",h2:"h2",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...j(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(D,{title:"Komponenter/Tokens/Farger til kart"}),`
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
`,e.jsx(u,{hexColors:A,RGBAColors:w})]})}function z(t={}){const{wrapper:r}={...j(),...t.components};return r?e.jsx(r,{...t,children:e.jsx(x,{...t})}):x(t)}export{z as default};
