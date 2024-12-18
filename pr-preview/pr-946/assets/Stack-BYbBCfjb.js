import{j as e}from"./index-D6_wGsWO.js";import{useMDXComponents as c}from"./index-BGZZYR5m.js";import{ae as d,af as r,ah as i,ag as m}from"./index-BgeB4h-e.js";import{D as o,F as p,a as s}from"./Feedback-BLqK7Q7q.js";import{S as j,R as x,a as k,V as h,H as g,P as l}from"./Stack.stories-DLO8GoqV.js";import"./index-C7I6S4tq.js";import"./index-EN4ZLXvn.js";import"./iframe-96PCSocl.js";import"../sb-preview/runtime.js";import"./index-CHGET4sZ.js";import"./index-DrFu-skq.js";import"./index-C4Tll0EB.js";function a(n){const t={br:"br",code:"code",h1:"h1",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...c(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(d,{of:j}),`
`,e.jsx(t.h1,{id:"stack",children:"Stack"}),`
`,e.jsx(t.p,{children:"Stack er en layout komponent brukt til å gruppere sammen elementer og legge til spacing mellom dem."}),`
`,e.jsxs(t.p,{children:[e.jsx(t.strong,{children:"VStack:"})," brukes til å stacke elementer i vertikal retning",e.jsx(t.br,{}),`
`,e.jsx(t.strong,{children:"HStack:"})," brukes til å stacke elementer i horisontal retning",e.jsx(t.br,{}),`
`,e.jsx(t.strong,{children:"Stack:"})," brukes til å stacke elementer i vertikal eller horisontal retning"]}),`
`,e.jsx(t.pre,{children:e.jsx(t.code,{className:"language-jsx",children:`import { Stack, HStack, VStack } from "@kvib/react";
`})}),`
`,e.jsxs(o,{children:[e.jsx(t.p,{children:e.jsx(t.strong,{children:"Egnet til"})}),e.jsxs(t.ul,{children:[`
`,e.jsx(t.li,{children:"Sette opp innholdet i skjemaer"}),`
`,e.jsx(t.li,{children:"Gruppere Card"}),`
`]}),e.jsx(t.p,{children:e.jsx(t.strong,{children:"Uegnet til"})}),e.jsxs(t.ul,{children:[`
`,e.jsx(t.li,{children:"Lage tabeller. Bruk heller Table komponenten."}),`
`]}),e.jsx(t.p,{children:"Stack og Flex er veldig like, med at begge distanserer Children like langt fra hverandre. Den største forskjellen er at Stack ikke fyller bredden til hele containeren, mens Flex fyller hele bredden til containeren."})]}),`
`,e.jsx(p,{component:"Stack"}),`
`,e.jsxs(o,{children:[e.jsx(s,{title:"Retning",description:`Row passer for lister, mens column passer til Cards. Responsiv retning tilpasser seg størrelsen på synsfeltet. Å sette direction={['column', 'row']},
vil sette retning til column, helt til synsfeltet blir for lite, og skifter til row.`,story:e.jsx(r,{of:x})}),e.jsx(s,{title:"Utseende",description:"Du kan sette Dividers og Spacing for å endre hvordan innholdet i Stack ser ut",story:e.jsx(r,{children:e.jsx(i,{of:k})})}),e.jsx(s,{title:"Andre komponenter",description:"Det finnes andre komponenter som også kan gjøre jobben. HStack og Vstack er Stack, bare at de er begrenset til hver sin retning.",story:e.jsxs(r,{children:[e.jsx(i,{of:h}),e.jsx(i,{of:g})]})}),e.jsx(s,{isVertical:!0,title:"Props",description:"",story:e.jsxs(e.Fragment,{children:[e.jsx(r,{of:l}),e.jsx(m,{of:l})]})})]})]})}function H(n={}){const{wrapper:t}={...c(),...n.components};return t?e.jsx(t,{...n,children:e.jsx(a,{...n})}):a(n)}export{H as default};
