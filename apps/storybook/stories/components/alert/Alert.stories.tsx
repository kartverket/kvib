import { Alert as KvibAlert } from "@kvib/react";
import { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof KvibAlert> = {
  title: "Komponenter/Alert",
  component: KvibAlert,
  parameters: {
    docs: {
      story: { inline: true },
    },
  },
  argTypes: {
    title: {
      description: "The title of the alert.",
      table: { type: { summary: "string" } },
      defaultValue: { summary: "" },
      control: { type: "text" },
    },
    status: {
      description: "The status of the alert. This changes the color of the alert.",
      table: { type: { summary: "error | success | warning | info | neutral" } },
      options: ["error", "success", "warning", "info", "neutral"],
      defaultValue: { summary: "info" },
      control: { type: "radio" },
    },
    variant: {
      description: "The variant of the alert.",
      table: { type: { summary: "subtle | surface | outline | solid" } },
      options: ["subtle", "solid", "outline", "surface"],
      defaultValue: { summary: "subtle" },
      control: { type: "radio" },
    },
    size: {
      description: "The size of the alert.",
      table: { type: { summary: "sm | md | lg" } },
      options: ["sm", "md", "lg"],
      control: { type: "radio" },
    },
  },
};

export default meta;
type Story = StoryObj<typeof KvibAlert>;

/** Manuell navngivning av komponenter for å unngå at kompilert kode vises ved "Show Code" i Storybook */
KvibAlert.displayName = "Alert";

export const Preview: Story = {
  args: {
    title: "Alert title",
    status: "info",
    variant: "subtle",
    size: "md",
  },
  render: args => <KvibAlert {...args}>Informative description.</KvibAlert>,
};

export const InformativeAlert: Story = {
  name: "Informative",
  render: _ => (
    <KvibAlert title="Oppdaterte kart er tilgjengelig" status="info">
      Sjekk de nyeste kartdataene før du starter planleggingen.
    </KvibAlert>
  ),
};

export const SuccessAlert: Story = {
  name: "Success",
  render: _ => (
    <KvibAlert title="Gratulerer! Eiendomsregistreringen er fullført" status="success">
      Din eiendom er nå registrert, og du kan gå videre med planleggingen av dine prosjekter.
    </KvibAlert>
  ),
};

export const WarningAlert: Story = {
  name: "Warning",
  render: _ => (
    <KvibAlert title="Vi har tekniske problemer" status="warning">
      Det kan føre til at du blir avbrutt mens du fyller ut skjemaet. Vi jobber med å rette problemene.
    </KvibAlert>
  ),
};

export const ErrorAlert: Story = {
  name: "Error",
  render: _ => (
    <KvibAlert title="Vi klarer ikke å lagre skjemaet" status="error">
      Vi har mistet forbindelsen med serveren og får ikke lagret skjemaet. Vent litt og prøv en gang til.
    </KvibAlert>
  ),
};
