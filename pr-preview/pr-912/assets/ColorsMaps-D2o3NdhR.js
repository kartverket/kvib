import{j as e}from"./jsx-runtime-CQsLhzk5.js";import{useMDXComponents as b}from"./index-C2WH5l5l.js";import"./slider-Bgj0f888.js";import"./chunk-NUUEMKO5-Bg7KBKqm.js";import{ae as F}from"./index-CjGmZIAS.js";import{r as k}from"./index-Wp2u197Z.js";import{F as s}from"./flex-B5WCXjfY.js";import{T as B,t as h}from"./toaster-92DfVJ3J.js";import{B as p}from"./box-CwJKB2Ex.js";import{H as D}from"./heading-X1Pa8Qgc.js";import{T as d}from"./text-CqjT0fSu.js";import{a as A,R as f}from"./radio-CVyIC8Eh.js";import{n as x}from"./h-stack-Bcgbt9nc.js";import"./iframe-C1BK6NVO.js";import"../sb-preview/runtime.js";import"./react-18-B9NBEw6j.js";import"./index-C2tM1_0x.js";import"./index-yiGAEVS0.js";import"./index-DrFu-skq.js";import"./create-slot-recipe-context-BTQZ2sOO.js";import"./toast-DXPX2jTE.js";import"./icons-DREn2yCE.js";import"./index-DYQJp4Ah.js";import"./index-P9vquDP9.js";import"./portal-DF-1KiYL.js";import"./spinner-FEa69BVe.js";import"./create-recipe-context-DEM4M4qP.js";import"./use-recipe-BTz8rvp_.js";import"./radio-group-DTL6C9tx.js";import"./attr-C3Jtgmrz.js";import"./index-BUfP1Ak0.js";import"./index-CbGW83KV.js";import"./index-BR8t6gqn.js";const _={blue:{1:{value:"#476ED4"},2:{value:"#537EFF"},3:{value:"#3E8DF6"},4:{value:"#2BBCE0"},5:{value:"#00E3FF"},6:{value:"#00BEFF"}},purple:{1:{value:"#5952D2"},2:{value:"#AE7FE9"},3:{value:"#C0AFFB"},4:{value:"#D163E6"},5:{value:"#D163E6"}},pink:{1:{value:"#8A034F"},2:{value:"#B92659"}},red:{1:{value:"#E54848"},2:{value:"#F15D4E"},3:{value:"#FF9287"},4:{value:"#DF6E79"}},brown:{1:{value:"#90120A"},2:{value:"#9A5252"},3:{value:"#E1562C"},4:{value:"#E56D31"},5:{value:"#FFAE49"}},yellow:{1:{value:"#EBAB3B"},2:{value:"#EBAC23"},3:{value:"#D3C439"},4:{value:"#EFE645"},5:{value:"#FDDB56"}},green:{1:{value:"#005900"},2:{value:"#01A47D"},3:{value:"#00A76C"},4:{value:"#00CB85"}},black:{1:{value:"#000000"},2:{value:"#6C7980"},3:{value:"#C7D3D9"}}},w={blue:{1:{value:"rgba(71, 110, 212, 1)"},2:{value:"rgba(83, 126, 255, 1)"},3:{value:"rgba(62, 141, 246, 1)"},4:{value:"rgba(43, 188, 224, 1)"},5:{value:"rgba(0, 227, 255, 1)"},6:{value:"rgba(0, 190, 255, 1)"}},purple:{1:{value:"rgba(89, 82, 210, 1)"},2:{value:"rgba(174, 127, 233, 1)"},3:{value:"rgba(192, 175, 251, 1)"},4:{value:"rgba(209, 99, 230, 1)"},5:{value:"rgba(209, 99, 230, 1)"}},pink:{1:{value:"rgba(138, 3, 79, 1)"},2:{value:"rgba(185, 38, 89, 1)"}},red:{1:{value:"rgba(229, 72, 72, 1)"},2:{value:"rgba(241, 93, 78, 1)"},3:{value:"rgba(255, 146, 135, 1)"},4:{value:"rgba(223, 110, 121, 1)"}},brown:{1:{value:"rgba(144, 18, 10, 1)"},2:{value:"rgba(154, 82, 82, 1)"},3:{value:"rgba(225, 86, 44, 1)"},4:{value:"rgba(229, 109, 49, 1)"},5:{value:"rgba(255, 174, 73, 1)"}},yellow:{1:{value:"rgba(235, 171, 59, 1)"},2:{value:"rgba(235, 172, 35, 1)"},3:{value:"rgba(211, 196, 57, 1)"},4:{value:"rgba(239, 230, 69, 1)"},5:{value:"rgba(253, 219, 86, 1)"}},green:{1:{value:"rgba(0, 89, 0, 1)"},2:{value:"rgba(1, 164, 125, 1)"},3:{value:"rgba(0, 167, 108, 1)"},4:{value:"rgba(0, 203, 133, 1)"}},black:{1:{value:"rgba(0, 0, 0, 1)"},2:{value:"rgba(108, 121, 128, 1)"},3:{value:"rgba(199, 211, 217, 1)"}}},j=["FF","E6","B3","80","4D","1A"],g=["1","0.9","0.7","0.5","0.3","0.1"],C=({colorValue:t})=>e.jsx(p,{position:"absolute",left:"0",bottom:"0",height:"40%",backgroundColor:"rgba(255,255,255,0.7)",display:"flex",alignItems:"center",justifyContent:"center",px:2,children:e.jsx(d,{color:"black",fontWeight:"bold",fontSize:"smaller",children:t})}),R=({value:t})=>{const[r,n]=k.useState(!1),a=l=>{navigator.clipboard.writeText(l).then(function(){h.create({title:"Kopiert!",description:l,status:"success",duration:2e3,isClosable:!0,colorScheme:"blue"})},function(o){console.error("Unable to copy text: ",o),h.create({title:"Error",description:"Failed to copy color.",status:"error",duration:2e3,isClosable:!0})})};return e.jsx(e.Fragment,{children:e.jsxs(p,{backgroundColor:"white",height:"60px",width:"100%",children:[r&&e.jsx(C,{colorValue:t}),e.jsx(p,{backgroundColor:t,height:"60px",width:"100%",_hover:{opacity:.5},onMouseEnter:()=>n(!0),onMouseLeave:()=>n(!1),onClick:()=>a(t),cursor:"pointer"})]})})},c=({value:t,format:r})=>{const[n,a]=k.useState(!1),l=r==="RGBA"?g:j,o=i=>r==="RGBA"?H(t,Number(i)):`${t}${i}`;return e.jsxs(s,{w:"240px",border:`2px ${t} solid`,gap:"2px",backgroundColor:t,position:"relative",onMouseEnter:()=>a(!0),onMouseLeave:()=>a(!1),children:[!n&&e.jsx(C,{colorValue:t}),l.map(i=>e.jsx(R,{value:o(i)},i))]})},m=({hexColors:t,RGBAColors:r})=>{const[n,a]=k.useState("HEX");let l;return n==="HEX"||!r?l=t:l=r,e.jsxs(e.Fragment,{children:[e.jsx(B,{}),e.jsxs(s,{flexDirection:"column",gap:55,marginTop:30,children:[r!==void 0&&e.jsx(G,{format:n,setFormat:a}),Object.entries(l).map(([o,i])=>e.jsxs(p,{children:[e.jsx(D,{as:"h3",size:"md",id:o,children:V(o)}),e.jsx(s,{gap:5,flexWrap:"wrap",children:Object.values(i).map((y,E)=>e.jsx("div",{children:e.jsx(c,{value:y.value,format:n})},E))})]},o))]})]})},u=({value:t,opacityFormat:r="Percentage"})=>{const n=(a,l,o)=>{switch(a){case"HEX":return l;case"Percentage":return`${parseFloat(g[o])*100}%`;default:return g[o]}};return e.jsx(s,{w:240,border:`2px ${t} solid`,gap:"2px",backgroundColor:t,position:"relative",children:j.map((a,l)=>e.jsx(p,{backgroundColor:"white",height:"60px",width:"100%",children:e.jsx(s,{backgroundColor:`${t}${a}`,height:"60px",width:"100%",_hover:{opacity:.5},alignItems:"center",justifyContent:"center",children:e.jsx(d,{fontWeight:"semibold",margin:0,children:n(r,a,l)})},a)}))})},H=(t,r)=>{const n=t.split(",");return n[3]=` ${r})`,n.join(",")},G=({format:t,setFormat:r})=>e.jsx(A,{onChange:r,value:t,children:e.jsxs(x,{direction:"row",gap:5,children:[e.jsx(f,{colorScheme:"blue",value:"HEX",children:"HEX"}),e.jsx(f,{value:"RGBA",children:"RGBA"})]})}),V=t=>t.charAt(0).toUpperCase()+t.slice(1);try{c.displayName="ColorBox",c.__docgenInfo={description:"",displayName:"ColorBox",props:{value:{defaultValue:null,description:"",name:"value",required:!0,type:{name:"string"}},format:{defaultValue:null,description:"",name:"format",required:!0,type:{name:"string"}}}}}catch{}try{m.displayName="ColorPalettes",m.__docgenInfo={description:"",displayName:"ColorPalettes",props:{hexColors:{defaultValue:null,description:"",name:"hexColors",required:!0,type:{name:"MapColorsType"}},RGBAColors:{defaultValue:null,description:"",name:"RGBAColors",required:!1,type:{name:"MapColorsType"}}}}}catch{}try{u.displayName="ExampleBox",u.__docgenInfo={description:"",displayName:"ExampleBox",props:{value:{defaultValue:null,description:"",name:"value",required:!0,type:{name:"string"}},opacityFormat:{defaultValue:{value:"Percentage"},description:"",name:"opacityFormat",required:!1,type:{name:"enum",value:[{value:'"HEX"'},{value:'"RGBA"'},{value:'"Percentage"'}]}}}}}catch{}function v(t){const r={a:"a",code:"code",h1:"h1",h2:"h2",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...b(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(F,{title:"Komponenter/Tokens/Farger til kart"}),`
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
`,e.jsx(r.h2,{id:"opacity",children:"Opacity"}),`
`,e.jsx(r.p,{children:`Fargene i hver boks i palettene under har én fargekode fordelt med opacity fra 100% til 10%. Eksempelboksene viser opacity og alphaverdier for palettene.
Den første boksen viser prosent, den andre viser alphaverdi for HEX og den tredje viser alphaverdi for RGBA.`}),`
`,e.jsx(r.p,{children:e.jsx(r.strong,{children:"Om du skal markere et område burde du velge farge med opacity som ikke er 100% for da kan du se bakgrunnskartet. Skal du bare jobbe med punktobjekter i kart kan du velge opacity på 100% for da blir det mer synlig sammen med bakgrunnskartet. Sørg for at de valgte fargene fungerer godt med bakgrunnskartet du har implementert i din løsning. Dette er viktig for å opprettholde visuell konsistens og lesebarhet."})}),`
`,e.jsxs(x,{children:[e.jsxs(s,{alignItems:"center",children:[e.jsx(d,{margin:"0",fontWeight:"semibold",w:"20",children:e.jsx(r.p,{children:"Prosent"})}),e.jsx(u,{value:"#00A76C"})]}),e.jsxs(s,{alignItems:"center",children:[e.jsx(d,{margin:"0",fontWeight:"semibold",w:"20",children:e.jsx(r.p,{children:"HEX"})}),e.jsx(u,{value:"#00A76C",opacityFormat:"HEX"})]}),e.jsxs(s,{alignItems:"center",children:[e.jsx(d,{margin:"0",fontWeight:"semibold",w:"20",children:e.jsx(r.p,{children:"RGBA"})}),e.jsx(u,{value:"#00A76C",opacityFormat:"RGBA"})]})]}),`
`,e.jsx(r.h2,{id:"paletter",children:"Paletter"}),`
`,e.jsx(r.p,{children:"Kopier fargekodene fra palettene under ved å trykke på dem."}),`
`,e.jsx(m,{hexColors:_,RGBAColors:w})]})}function me(t={}){const{wrapper:r}={...b(),...t.components};return r?e.jsx(r,{...t,children:e.jsx(v,{...t})}):v(t)}export{me as default};
