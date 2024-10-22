import{j as r}from"./extends-CwFRzn3r.js";import{useMDXComponents as d}from"./index-DlpNa54Y.js";import{ae as p,af as m,ag as c,ah as o,ai as n}from"./index-CnsjvdOC.js";import{P as x,a as s,b as f,c as u,d as h}from"./Portal.stories-OYp2wu0k.js";import{C as i,a}from"./Card-rgsWy52h.js";import"./index-BwDkhjyp.js";import"./_commonjsHelpers-BosuxZz1.js";import"./iframe-BdL4BA_O.js";import"../sb-preview/runtime.js";import"./index-Drt3gf4w.js";import"./index-D-8MO0q_.js";import"./assertThisInitialized-DSoh8oXT.js";import"./inheritsLoose-B6jfs0L0.js";import"./setPrototypeOf-DgZC2w_0.js";import"./index-DF3CPj03.js";import"./index-DrFu-skq.js";import"./portal-DTuMj-Dh.js";import"./context-CBKykClo.js";import"./use-safe-layout-effect-BnICyLBj.js";import"./box-DeqT4ixr.js";import"./factory-C6UFhaBW.js";import"./emotion-styled.browser.esm-NI0tOKWg.js";import"./forward-ref-BWI-Phbn.js";import"./cx-BDMMs1jM.js";import"./providers-BwxcBeey.js";import"./emotion-react.browser.esm-Hqbkbmab.js";import"./calc-B93s4yJe.js";import"./css-var-DE0-P1bc.js";import"./pick-DBnSFT3T.js";import"./use-style-config-YUvqttAg.js";import"./omit-QLD0Eizt.js";import"./index-CfyPTyT-.js";import"./hooks-gaHRB8Pq.js";import"./use-theme-CBfqdygA.js";const P=`const PortalCustomExample = () => {
  const ref = useRef<HTMLDivElement | null>(null);
  return (
    <Box bg="green.500" color="white">
      Dette er en box
      <Portal containerRef={ref}>
        Portal: Denne teksten er portaled til den blå boksen!
      </Portal>
      <Box ref={ref} bg="blue.400">
        <div>Container: Hei</div>
      </Box>
    </Box>
  );
};`,j=`const PortalNestedExample = () => {
  const ref = useRef(null);
  return (
    <div>
      <Portal containerRef={ref}>
        <Box bg="green.500" color="white">
          Parent: Hei, velkommen
          <Portal>Child: Jeg er festet til min parent portal</Portal>
        </Box>
      </Portal>
      <Box bg="red.500" color="white" ref={ref} />
    </div>
  );
};`,g=`function PortalNotAppendedExample() {
  const ref = useRef(null);
  return (
    <div>
      <Portal containerRef={ref}>
        <Box bg="green.500" color="white">
          Parent: Hei, velkommen
          <Portal appendToParentPortal={false}>
            Child: Jeg går til document.body
          </Portal>
        </Box>
      </Portal>
      <div style={{ background: "red" }} ref={ref} />
    </div>
  );
}`;function l(t){const e={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...d(),...t.components};return r.jsxs(r.Fragment,{children:[r.jsx(p,{of:x}),`
`,r.jsx(e.h1,{id:"portal",children:"Portal"}),`
`,r.jsx(e.p,{children:"Portal er et komponent som kan bli rendered på utsiden av det nåværende DOM hierarkiet."}),`
`,r.jsx(e.h2,{id:"ta-i-bruk",children:"Ta i bruk"}),`
`,r.jsx(e.pre,{children:r.jsx(e.code,{className:"language-jsx",children:`import { Portal } from "@kvib/react";
`})}),`
`,r.jsx(e.h2,{id:"props",children:"Props"}),`
`,r.jsx(m,{of:s}),`
`,r.jsx(c,{of:s}),`
`,r.jsx(e.h2,{id:"egendefinert-container",children:"Egendefinert container"}),`
`,r.jsx(i,{variant:"outline",borderRadius:"0",children:r.jsx(a,{children:r.jsx(o,{of:f})})}),`
`,r.jsx(n,{code:P,dark:!0}),`
`,r.jsx(e.h2,{id:"nested-portal",children:"Nested Portal"}),`
`,r.jsx(i,{variant:"outline",borderRadius:"0",children:r.jsx(a,{children:r.jsx(o,{of:u})})}),`
`,r.jsx(n,{code:j,dark:!0}),`
`,r.jsx(e.h2,{id:"separert-nested-portal",children:"Separert nested portal"}),`
`,r.jsx(i,{variant:"outline",borderRadius:"0",children:r.jsx(a,{children:r.jsx(o,{of:h})})}),`
`,r.jsx(n,{code:g,dark:!0})]})}function rr(t={}){const{wrapper:e}={...d(),...t.components};return e?r.jsx(e,{...t,children:r.jsx(l,{...t})}):l(t)}export{rr as default};
