import { Code } from "@kvib/react";
import { Tekstblokk } from "../../utils/Tekstblokk";
import { Kodeeksempel } from "../Kodeeksempel";

export const MigreringSteps = () => (
  <Tekstblokk tittel="Steps">
    <Code>Stepper</Code> har byttet navn til <Code>Steps</Code> og byr på flere endringer i strukturen for hvordan man
    bruker denne. Her er det såpass store endringer at vi ikke tilbyr et alias for den gamle skrivemåten siden man
    uansett må gjøre en del endringer i egen kode for å bruke denne.
    <Kodeeksempel
      beskrivelse={
        <>
          Tidligere har man brukt <Code>Stepper</Code> slik:
        </>
      }
      kildekode={`
<Stepper index={activeStep}>
  {steps.map((step, index) => (
    <Step key={index}>
      <StepIndicator>
        <StepStatus
          complete={<StepIcon />}
          incomplete={<StepNumber />}
          active={<StepNumber />}
        />
      </StepIndicator>

      <Box flexShrink='0'>
        <StepTitle>{step.title}</StepTitle>
        <StepDescription>{step.description}</StepDescription>
      </Box>

      <StepSeparator />
    </Step>
  ))}
</Stepper>
    `}
    />
    <Kodeeksempel
      beskrivelse={
        <>
          Nå er stepperne og innholdet i de forskjellige splittet opp, slik at man først lister opp alle stegene i en{" "}
          <Code>StepsList</Code>, etterfulgt av <Code>StepsContent</Code> som står for innholdet for hvert steg. Det
          gjøre på følgende måte:
        </>
      }
      kildekode={`
<Steps defaultValue={1} count={3}>
  <StepsList>
  <StepsItem index={0} title="Steg 1" />
  <StepsItem index={1} title="Steg 2" />
  <StepsItem index={2} title="Steg 3" />
  </StepsList>

  <StepsContent index={0}>Steg 1</StepsContent>
  <StepsContent index={1}>Steg 2</StepsContent>
  <StepsContent index={2}>Steg 3</StepsContent>
  <StepsCompletedContent>Alle steg er ferdige!</StepsCompletedContent>

  <Group>
  <StepsPrevTrigger asChild>
    <Button variant="outline" size="sm">
      Forrige
    </Button>
  </StepsPrevTrigger>
  <StepsNextTrigger asChild>
    <Button variant="outline" size="sm">
      Neste
    </Button>
  </StepsNextTrigger>
  </Group>
</Steps>
    `}
    />
  </Tekstblokk>
);
