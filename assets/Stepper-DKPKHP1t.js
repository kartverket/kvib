import{j as e}from"./extends-CwFRzn3r.js";import{useMDXComponents as c}from"./index-DlpNa54Y.js";import{ae as a,ai as r,ag as d,ah as i}from"./index-CfPSepdb.js";import{D as m,F as l,b as x}from"./Feedback-C8oPMuBk.js";import{S as u,P as n,a as h,b as j,c as g,d as k,e as v}from"./Stepper.stories-BO3f8glR.js";import{C as o,a as s}from"./Card-CjsZQyOM.js";import"./index-BwDkhjyp.js";import"./_commonjsHelpers-BosuxZz1.js";import"./iframe-DPjcFLBO.js";import"../sb-preview/runtime.js";import"./index-CS4BWtGh.js";import"./index-D-8MO0q_.js";import"./assertThisInitialized-DSoh8oXT.js";import"./inheritsLoose-B6jfs0L0.js";import"./setPrototypeOf-DgZC2w_0.js";import"./index-DF3CPj03.js";import"./index-DrFu-skq.js";import"./box-Cs-tJ6EH.js";import"./factory-lWLPzty5.js";import"./emotion-styled.browser.esm-NI0tOKWg.js";import"./image-CU6Rr-ts.js";import"./forward-ref-BWI-Phbn.js";import"./use-image-rNdzB_Ea.js";import"./use-safe-layout-effect-BnICyLBj.js";import"./omit-QLD0Eizt.js";import"./simple-grid-Dx05c2KX.js";import"./grid-DbabZME7.js";import"./use-theme-CBfqdygA.js";import"./hooks-CUXMK5kD.js";import"./responsive-BbUtuhhZ.js";import"./heading-CZK5ruZ7.js";import"./use-style-config-C4sZEIFb.js";import"./index-CfyPTyT-.js";import"./cx-BDMMs1jM.js";import"./text-CypcOzo0.js";import"./flex-DUW0W68E.js";import"./Link-B6mGcy8v.js";import"./providers-BQbExJqd.js";import"./emotion-react.browser.esm-Hqbkbmab.js";import"./context-CBKykClo.js";import"./calc-tjRj3nBR.js";import"./css-var-DE0-P1bc.js";import"./pick-DBnSFT3T.js";import"./attr-sHTFgF0E.js";import"./icon-BO-EX8Jp.js";import"./stack-C3a7yBZW.js";import"./children-2ZXUntH3.js";const b=`const steps = [
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
};`;function S(p){const t={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...c(),...p.components};return e.jsxs(e.Fragment,{children:[e.jsx(a,{of:u}),`
`,e.jsxs(m,{children:[e.jsx(t.h1,{id:"stepper",children:"Stepper"}),e.jsx(t.p,{children:"En Stepper brukes til å vise fremgang i en prosess med flere steg."}),e.jsx(t.pre,{children:e.jsx(t.code,{className:"language-jsx",children:`import {
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
`})}),e.jsx(l,{component:"Step"}),e.jsx(r,{code:b,dark:!0}),e.jsx(d,{of:n}),e.jsx(t.h2,{id:"vertikal-stepper",children:"Vertikal Stepper"}),e.jsx(o,{variant:"outline",borderRadius:"0",children:e.jsx(s,{children:e.jsx(i,{of:h})})}),e.jsx(r,{code:f,dark:!0}),e.jsx(t.h2,{id:"størrelse",children:"Størrelse"}),e.jsx(o,{variant:"outline",borderRadius:"0",children:e.jsx(s,{children:e.jsx(i,{of:j})})}),e.jsx(r,{code:I,dark:!0}),e.jsx(t.h2,{id:"farge",children:"Farge"}),e.jsx(o,{variant:"outline",borderRadius:"0",children:e.jsx(s,{children:e.jsx(i,{of:g})})}),e.jsx(r,{code:D,dark:!0}),e.jsx(t.h2,{id:"endre-step-med-klikk",children:"Endre step med klikk"}),e.jsx(o,{variant:"outline",borderRadius:"0",children:e.jsx(s,{children:e.jsx(i,{of:k})})}),e.jsx(r,{code:T,dark:!0}),e.jsx(t.h2,{id:"progress-bar",children:"Progress bar"}),e.jsx(o,{variant:"outline",borderRadius:"0",children:e.jsx(s,{children:e.jsx(i,{of:v})})}),e.jsx(r,{code:C,dark:!0}),e.jsx(x,{light:!0,children:"Props"}),e.jsx(o,{variant:"outline",borderRadius:"0",children:e.jsx(s,{children:e.jsx(i,{of:n})})})]})]})}function ve(p={}){const{wrapper:t}={...c(),...p.components};return t?e.jsx(t,{...p,children:e.jsx(S,{...p})}):S(p)}export{ve as default};
