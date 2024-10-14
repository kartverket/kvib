import{j as e}from"./extends-CwFRzn3r.js";import{useMDXComponents as c}from"./index-DlpNa54Y.js";import{ae as a,ai as r,ag as d,ah as i}from"./index-DPajZr3n.js";import{S as m,a as n,b as l,c as x,d as u,e as h,f as j}from"./Stepper.stories-BsS842LI.js";import{D as g,F as k,b as v}from"./Feedback-CDPL5_oi.js";import{C as o,a as s}from"./Card-DoxEvc2h.js";import"./index-BwDkhjyp.js";import"./_commonjsHelpers-BosuxZz1.js";import"./iframe-Dtna-OgH.js";import"../sb-preview/runtime.js";import"./index-Dn0f7ynd.js";import"./index-D-8MO0q_.js";import"./isNativeReflectConstruct-lfp1ZYuW.js";import"./inheritsLoose-B6jfs0L0.js";import"./setPrototypeOf-DgZC2w_0.js";import"./index-DF3CPj03.js";import"./index-DrFu-skq.js";import"./providers-tFX8H8_I.js";import"./emotion-react.browser.esm-Hqbkbmab.js";import"./emotion-styled.browser.esm-NI0tOKWg.js";import"./factory-CdGA0D9p.js";import"./context-CBKykClo.js";import"./calc-Dy10IX1y.js";import"./css-var-DE0-P1bc.js";import"./pick-DBnSFT3T.js";import"./use-style-config--HlEOpE-.js";import"./omit-QLD0Eizt.js";import"./index-CfyPTyT-.js";import"./hooks-D04p5R0A.js";import"./use-theme-CBfqdygA.js";import"./forward-ref-BWI-Phbn.js";import"./cx-BDMMs1jM.js";import"./attr-sHTFgF0E.js";import"./icon-DQb5sAJm.js";import"./box-B7h7acUJ.js";import"./stack-Crl0JO1i.js";import"./responsive-ClFn5vzN.js";import"./children-2ZXUntH3.js";import"./text-rUwQV1v4.js";import"./image-Cz43cXZB.js";import"./use-image-rNdzB_Ea.js";import"./use-safe-layout-effect-BnICyLBj.js";import"./simple-grid-CQLrn815.js";import"./grid-zpFC2r7C.js";import"./heading-D_euA-I1.js";import"./flex-CHlq4-Ax.js";import"./Button-C7Ypcb02.js";import"./button-Db-BlFJ2.js";import"./spinner-DcEBpU52.js";import"./define-styles-BSAHv3yx.js";import"./use-merge-refs-Bdxaq0s4.js";import"./center-D672Tu8u.js";import"./h-stack-P6-XT6iQ.js";import"./Icon-BZ-fYLhA.js";/* empty css              */const b=`const steps = [
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
};`;function S(p){const t={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...c(),...p.components};return e.jsxs(e.Fragment,{children:[e.jsx(a,{of:m}),`
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
`})}),e.jsx(k,{component:"Step"}),e.jsx(r,{code:b,dark:!0}),e.jsx(d,{of:n}),e.jsx(t.h2,{id:"vertikal-stepper",children:"Vertikal Stepper"}),e.jsx(o,{variant:"outline",borderRadius:"0",children:e.jsx(s,{children:e.jsx(i,{of:l})})}),e.jsx(r,{code:f,dark:!0}),e.jsx(t.h2,{id:"størrelse",children:"Størrelse"}),e.jsx(o,{variant:"outline",borderRadius:"0",children:e.jsx(s,{children:e.jsx(i,{of:x})})}),e.jsx(r,{code:I,dark:!0}),e.jsx(t.h2,{id:"farge",children:"Farge"}),e.jsx(o,{variant:"outline",borderRadius:"0",children:e.jsx(s,{children:e.jsx(i,{of:u})})}),e.jsx(r,{code:D,dark:!0}),e.jsx(t.h2,{id:"endre-step-med-klikk",children:"Endre step med klikk"}),e.jsx(o,{variant:"outline",borderRadius:"0",children:e.jsx(s,{children:e.jsx(i,{of:h})})}),e.jsx(r,{code:T,dark:!0}),e.jsx(t.h2,{id:"progress-bar",children:"Progress bar"}),e.jsx(o,{variant:"outline",borderRadius:"0",children:e.jsx(s,{children:e.jsx(i,{of:j})})}),e.jsx(r,{code:C,dark:!0}),e.jsx(v,{light:!0,children:"Props"}),e.jsx(o,{variant:"outline",borderRadius:"0",children:e.jsx(s,{children:e.jsx(i,{of:n})})})]})]})}function Be(p={}){const{wrapper:t}={...c(),...p.components};return t?e.jsx(t,{...p,children:e.jsx(S,{...p})}):S(p)}export{Be as default};
