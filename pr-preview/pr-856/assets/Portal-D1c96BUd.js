import{j as e}from"./extends-CwFRzn3r.js";import{useMDXComponents as d}from"./index-DlpNa54Y.js";import{ae as p,af as c,ag as m,ah as o,ai as n}from"./index-8pPbBcft.js";import{P as x,a as s,b as f,c as u,d as h}from"./Portal.stories-C3SBfXPx.js";import{C as a,a as i}from"./Card-BeZB5sUt.js";import"./index-BwDkhjyp.js";import"./_commonjsHelpers-BosuxZz1.js";import"./iframe-o0eDd82t.js";import"../sb-preview/runtime.js";import"./index-Dn0f7ynd.js";import"./index-D-8MO0q_.js";import"./isNativeReflectConstruct-lfp1ZYuW.js";import"./inheritsLoose-B6jfs0L0.js";import"./setPrototypeOf-DgZC2w_0.js";import"./index-DF3CPj03.js";import"./index-DrFu-skq.js";import"./chunk-34PD6CUK-B1dqEPkL.js";import"./index-CHDWSgKD.js";import"./index-DJS8qWMq.js";import"./chunk-PULVB27S-CgiffgmI.js";import"./chunk-ZJJGQIVY-CoI1iMVy.js";import"./chunk-MFVQSVQB-CA8z8kWU.js";import"./emotion-react.browser.esm-DOaDIBza.js";import"./chunk-DMO4EI7P-D6u3hnqn.js";import"./chunk-7FWEOSAE-DBqCpNZ5.js";import"./chunk-UIGT7YZF-XoNRsZNz.js";const P=`const PortalCustomExample = () => {
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
}`;function l(t){const r={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...d(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(p,{of:x}),`
`,e.jsx(r.h1,{id:"portal",children:"Portal"}),`
`,e.jsx(r.p,{children:"Portal er et komponent som kan bli rendered på utsiden av det nåværende DOM hierarkiet."}),`
`,e.jsx(r.h2,{id:"ta-i-bruk",children:"Ta i bruk"}),`
`,e.jsx(r.pre,{children:e.jsx(r.code,{className:"language-jsx",children:`import { Portal } from "@kvib/react";
`})}),`
`,e.jsx(r.h2,{id:"props",children:"Props"}),`
`,e.jsx(c,{of:s}),`
`,e.jsx(m,{of:s}),`
`,e.jsx(r.h2,{id:"egendefinert-container",children:"Egendefinert container"}),`
`,e.jsx(a,{variant:"outline",borderRadius:"0",children:e.jsx(i,{children:e.jsx(o,{of:f})})}),`
`,e.jsx(n,{code:P,dark:!0}),`
`,e.jsx(r.h2,{id:"nested-portal",children:"Nested Portal"}),`
`,e.jsx(a,{variant:"outline",borderRadius:"0",children:e.jsx(i,{children:e.jsx(o,{of:u})})}),`
`,e.jsx(n,{code:j,dark:!0}),`
`,e.jsx(r.h2,{id:"separert-nested-portal",children:"Separert nested portal"}),`
`,e.jsx(a,{variant:"outline",borderRadius:"0",children:e.jsx(i,{children:e.jsx(o,{of:h})})}),`
`,e.jsx(n,{code:g,dark:!0})]})}function K(t={}){const{wrapper:r}={...d(),...t.components};return r?e.jsx(r,{...t,children:e.jsx(l,{...t})}):l(t)}export{K as default};
