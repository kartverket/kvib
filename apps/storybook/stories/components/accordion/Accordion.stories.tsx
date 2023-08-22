import { Meta, StoryObj } from "@storybook/react";
import { Accordion as KvibAccordion, AccordionItem as AccItem, AccordionButton, AccordionPanel } from "@kvib/react/src";

const meta: Meta<typeof KvibAccordion> = {
  title: "Komponenter/Accordion ",
  component: KvibAccordion,
  parameters: {
    docs: {
      story: { inline: true },
      canvas: { sourceState: "shown" },
    },
  },
};

export default meta;
type Story = StoryObj<typeof KvibAccordion>;

export const Accordion: Story = {
  argTypes: {
    allowMultiple: {
      description: "If true, multiple items can be expanded at once.",
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: false },
      },
      control: "boolean",
    },
    allowToggle: {
      description: "If true, expanded items may be collapsed again.",
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: false },
      },
      control: "boolean",
    },
    defaultIndex: {
      description: "Sets the initial index for the expanded accordion item.",
      table: {
        type: { summary: "string" },
      },
      control: "text",
    },
    index: {
      description: "Sets the index for the expanded accordion item.",
      table: {
        type: { summary: "string" },
      },
      control: "text",
    },
    onChange: {
      description: "Callback for when the accordion expands/collapses.",
      table: {
        type: { summary: "function" },
      },
      control: "boolean",
    },
    reduceMotion: {
      description: "If true, disables height animation and transition.",
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: false },
      },
      control: "boolean",
    },
  },
  args: { allowMultiple: true, allowToggle: false, onChange: undefined },
  render: (args) => (
    <KvibAccordion {...args}>
      <AccItem>
        <AccordionButton>Tittel 1</AccordionButton>
        <AccordionPanel>Innhold 1</AccordionPanel>
      </AccItem>
      <AccItem>
        <AccordionButton>Tittel 2</AccordionButton>
        <AccordionPanel>Innhold 2</AccordionPanel>
      </AccItem>
    </KvibAccordion>
  ),
};

export const AccordionItem: Story = {
  argTypes: {
    id: {
      description: "Unique id for the AccordionItem.",
      table: {
        type: { summary: "string" },
      },
      control: "text",
    },
    isDisabled: {
      description: "If true, the AccordionItem will be disabled.",
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: false },
      },
      control: "boolean",
    },
    isFocusable: {
      description: "If true, the AccordionItem will be focusable.",
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: false },
      },
      control: "boolean",
    },
  },
  args: { isDisabled: false, isFocusable: false },
  render: (args) => (
    <KvibAccordion>
      <AccItem {...args}>
        <AccordionButton>Klikk meg</AccordionButton>
        <AccordionPanel>Tekst skrift tekst</AccordionPanel>
      </AccItem>
    </KvibAccordion>
  ),
};

export const AccordionAllowMultiple: Story = {
  args: { allowMultiple: true },
  render: (args) => (
    <KvibAccordion {...args}>
      <AccItem>
        <AccordionButton>Hvordan søker jeg?</AccordionButton>
        <AccordionPanel>
          Du kan søke opp en eiendom ved å bruke eiendommens adresse eller matrikkelnummer. Søket starter når du har
          skrevet inn minst tre tegn. Er du usikker på skrivemåten skriver du så langt du er sikker. For å snevre inn
          antall treff, kan du fylle ut feltet for "Sted". Et matrikkelnummer består av tall i følgende rekkefølge:
          kommunenummer, gårdsnummer, bruksnummer, festenummer, seksjonsnummer.{" "}
        </AccordionPanel>
      </AccItem>
      <AccItem>
        <AccordionButton>Kan jeg se informasjon om andre eiendommer enn min egen?</AccordionButton>
        <AccordionPanel>
          Ja. Eiendomsdata fra grunnbok og matrikkel er, med få unntak, tilgjengelig for alle. Det vil si at du kan søke
          på hvilken som helst eiendom, og logge inn for å se en utskrift fra grunnboken. Informasjonen er offentlig
          tilgjengelig og grunneier eller andre parter blir ikke varslet dersom det blir gjort søk på eiendommen.
        </AccordionPanel>
      </AccItem>
    </KvibAccordion>
  ),
};

export const AccordionReduceMotion: Story = {
  args: { reduceMotion: true },
  render: (args) => (
    <KvibAccordion {...args}>
      <AccItem>
        <AccordionButton>Overskrift 1</AccordionButton>
        <AccordionPanel>Eksempel 1</AccordionPanel>
      </AccItem>
      <AccItem>
        <AccordionButton>Overskrift 2</AccordionButton>
        <AccordionPanel>Eksempel 2</AccordionPanel>
      </AccItem>
    </KvibAccordion>
  ),
};
