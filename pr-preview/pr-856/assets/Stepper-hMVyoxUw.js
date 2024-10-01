import{j as e}from"./extends-CwFRzn3r.js";import{useMDXComponents as c}from"./index-DlpNa54Y.js";import{ae as a,ai as r,ag as d,ah as i}from"./index-8pPbBcft.js";import{S as l,a as n,b as m,c as x,d as u,e as h,f as j}from"./Stepper.stories-CxyIE7EB.js";import{D as g,F as k,b as v}from"./Feedback-Co_HvGF3.js";import{C as o,a as s}from"./Card-BeZB5sUt.js";import"./index-BwDkhjyp.js";import"./_commonjsHelpers-BosuxZz1.js";import"./iframe-o0eDd82t.js";import"../sb-preview/runtime.js";import"./index-Dn0f7ynd.js";import"./index-D-8MO0q_.js";import"./isNativeReflectConstruct-lfp1ZYuW.js";import"./inheritsLoose-B6jfs0L0.js";import"./setPrototypeOf-DgZC2w_0.js";import"./index-DF3CPj03.js";import"./index-DrFu-skq.js";import"./index-CHDWSgKD.js";import"./chunk-MFVQSVQB-CA8z8kWU.js";import"./chunk-ZJJGQIVY-CoI1iMVy.js";import"./emotion-react.browser.esm-DOaDIBza.js";import"./chunk-DMO4EI7P-D6u3hnqn.js";import"./chunk-7FWEOSAE-DBqCpNZ5.js";import"./chunk-UIGT7YZF-XoNRsZNz.js";import"./chunk-2GBDXOMA-K_WHOyag.js";import"./chunk-PULVB27S-CgiffgmI.js";import"./chunk-ZHMYA64R-V_96TD_T.js";import"./chunk-G72KV6MB-s0NcBBxe.js";import"./index-2ZXUntH3.js";import"./chunk-2OOHT3W5-CV6N7GVi.js";import"./chunk-R3DH46PF-iWUMGBws.js";import"./chunk-QINAG4RG-EokTgSxx.js";import"./chunk-SPIKMR6I-lNfAZPIg.js";import"./index-DJS8qWMq.js";import"./chunk-NEK3OOAM-DbYvnad0.js";import"./chunk-JARCRF6W-DgXWZoO5.js";import"./chunk-7OLJDQMT-lazN81OQ.js";import"./chunk-KRPLQIP4-ICIqHMLQ.js";import"./Button-DzfkXRWF.js";import"./chunk-UVUR7MCU-TM6grcjD.js";import"./chunk-5PH6ULNP-B_hWxh7m.js";import"./index-Bdxaq0s4.js";import"./chunk-FAWTVNS3-tKAZUTn2.js";import"./chunk-3ASUQ6PA-DZH9lOZq.js";import"./Icon-tbSQqMaw.js";/* empty css              */const b=`const steps = [
  { title: "First", description: "Contact Info" },
  { title: "Second", description: "Date & Time" },
  { title: "Third", description: "Select Rooms" },
];

const StepperExample = () => {
  const { activeStep } = useSteps({
    index: 1,
    count: steps.length,
  });

  return (
    <Stepper index={activeStep}>
      {steps.map((step, index) => (
        <Step key={index}>
          <StepIndicator>
            <StepStatus complete={<StepIcon />} incomplete={<StepNumber />} active={<StepNumber />} />
          </StepIndicator>

          <Box flexShrink="0">
            <StepTitle>{step.title}</StepTitle>
            <StepDescription>{step.description}</StepDescription>
          </Box>
          <StepSeparator />
        </Step>
      ))}
    </Stepper>
  );
};`,f=`const StepperOrientationExample = () => {
  const { activeStep } = useSteps({
    index: 1,
    count: steps.length,
  });

  return (
    <Stepper index={activeStep} orientation="vertical" height="400px" gap="0">
      {steps.map((step, index) => (
        <Step key={index}>
          <StepIndicator>
            <StepStatus complete={<StepIcon />} incomplete={<StepNumber />} active={<StepNumber />} />
          </StepIndicator>
          <Box flexShrink="0">
            <StepTitle>{step.title}</StepTitle>
            <StepDescription>{step.description}</StepDescription>
          </Box>

          <StepSeparator />
        </Step>
      ))}
    </Stepper>
  );
};`,I=`const StepperSizeExample = () => {
  const { activeStep } = useSteps({
    index: 1,
    count: steps.length,
  });

  return (
    <Stepper size="lg" index={activeStep}>
      {steps.map((step, index) => (
        <Step key={index}>
          <StepIndicator>
            <StepStatus complete={<StepIcon />} incomplete={<StepNumber />} active={<StepNumber />} />
          </StepIndicator>
          <Box flexShrink="0">
            <StepTitle>{step.title}</StepTitle>
            <StepDescription>{step.description}</StepDescription>
          </Box>
          <StepSeparator />
        </Step>
      ))}
    </Stepper>
  );
};`,D=`const StepperColorExample = () => {
  const { activeStep } = useSteps({
    index: 1,
    count: steps.length,
  });

  return (
    <Stepper size="lg" colorScheme="red" index={activeStep}>
      {steps.map((step, index) => (
        <Step key={index}>
          <StepIndicator>
            <StepStatus complete={<StepIcon />} incomplete={<StepNumber />} active={<StepNumber />} />
          </StepIndicator>
          <Box flexShrink="0">
            <StepTitle>{step.title}</StepTitle>
            <StepDescription>{step.description}</StepDescription>
          </Box>
          <StepSeparator />
        </Step>
      ))}
    </Stepper>
  );
};
`,T=`const StepperClickExample = () => {
  const { activeStep, setActiveStep } = useSteps({
    index: 1,
    count: steps.length,
  });

  return (
    <Stepper size="lg" index={activeStep}>
      {steps.map((step, index) => (
        <Step key={index} onClick={() => setActiveStep(index)}>
          <StepIndicator>
            <StepStatus complete={<StepIcon />} incomplete={<StepNumber />} active={<StepNumber />} />
          </StepIndicator>
          <Box flexShrink="0">
            <StepTitle>{step.title}</StepTitle>
            <StepDescription>{step.description}</StepDescription>
          </Box>
          <StepSeparator />
        </Step>
      ))}
    </Stepper>
  );
};`,C=`const StepperProgressbarExample = () => {
  const { activeStep } = useSteps({
    index: 1,
    count: steps.length,
  });

  const activeStepText = steps[activeStep].description;

  return (
    <Stack>
      <Stepper size="sm" index={activeStep} gap="0">
        {steps.map((_step, index) => (
          <Step key={index}>
            <StepIndicator>
              <StepStatus complete={<StepIcon />} />
            </StepIndicator>
            <StepSeparator />
          </Step>
        ))}
      </Stepper>
      <Text>
        Step {activeStep + 1}: <b>{activeStepText}</b>
      </Text>
    </Stack>
  );
};`;function S(p){const t={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...c(),...p.components};return e.jsxs(e.Fragment,{children:[e.jsx(a,{of:l}),`
`,e.jsxs(g,{children:[e.jsx(t.h1,{id:"stepper",children:"Stepper"}),e.jsx(t.p,{children:"En Stepper brukes til å vise fremgang i en prosess med flere steg."}),e.jsx(t.pre,{children:e.jsx(t.code,{className:"language-jsx",children:`import {
  Step,
  StepDescription,
  StepIcon,
  StepIndicator,
  StepNumber,
  StepSeparator,
  StepStatus,
  StepTitle,
  Stepper,
  useSteps,
} from "@kvib/react";
`})}),e.jsx(k,{component:"Step"}),e.jsx(r,{code:b,dark:!0}),e.jsx(d,{of:n}),e.jsx(t.h2,{id:"vertikal-stepper",children:"Vertikal Stepper"}),e.jsx(o,{variant:"outline",borderRadius:"0",children:e.jsx(s,{children:e.jsx(i,{of:m})})}),e.jsx(r,{code:f,dark:!0}),e.jsx(t.h2,{id:"størrelse",children:"Størrelse"}),e.jsx(o,{variant:"outline",borderRadius:"0",children:e.jsx(s,{children:e.jsx(i,{of:x})})}),e.jsx(r,{code:I,dark:!0}),e.jsx(t.h2,{id:"farge",children:"Farge"}),e.jsx(o,{variant:"outline",borderRadius:"0",children:e.jsx(s,{children:e.jsx(i,{of:u})})}),e.jsx(r,{code:D,dark:!0}),e.jsx(t.h2,{id:"endre-step-med-klikk",children:"Endre step med klikk"}),e.jsx(o,{variant:"outline",borderRadius:"0",children:e.jsx(s,{children:e.jsx(i,{of:h})})}),e.jsx(r,{code:T,dark:!0}),e.jsx(t.h2,{id:"progress-bar",children:"Progress bar"}),e.jsx(o,{variant:"outline",borderRadius:"0",children:e.jsx(s,{children:e.jsx(i,{of:j})})}),e.jsx(r,{code:C,dark:!0}),e.jsx(v,{light:!0,children:"Props"}),e.jsx(o,{variant:"outline",borderRadius:"0",children:e.jsx(s,{children:e.jsx(i,{of:n})})})]})]})}function ke(p={}){const{wrapper:t}={...c(),...p.components};return t?e.jsx(t,{...p,children:e.jsx(S,{...p})}):S(p)}export{ke as default};
