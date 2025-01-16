import { Box, Button, Stack, Toaster, toaster, useSlotRecipe } from "@kvib/react";
import { Meta, StoryObj } from "@storybook/react";

const meta: Meta<Props> = {
  title: "Komponenter/Toast",
  component: Toaster,
  parameters: {
    docs: {
      story: { inline: true },
    },
    a11y: {
      disable: true,
    },
  },
  argTypes: {
    type: {
      description: "The status (color) of the toast",
      table: {
        type: { summary: "info | warning | success | error | loading" },
      },
      defaultValue: { summary: "info" },
      control: "radio",
      options: ["info", "warning", "success", "error"],
    },
    title: {
      description: "The title of the toast",
      table: {
        type: { summary: "string" },
      },
      control: "text",
    },
    description: {
      description: "The description of the toast",
      table: {
        type: { summary: "string" },
      },
      control: "text",
    },
    duration: {
      description: "The duration of the toast in milliseconds",
      table: {
        type: { summary: "number" },
      },
      control: "number",
    },
  },
  args: {
    type: "info",
    title: "Title",
    description: "Description",
    duration: 3000,
  },
};

export default meta;

interface Props {
  type: "info" | "warning" | "success" | "error";
  title: string;
  description: string;
  duration: number;
  colorPalette: "green" | "blue"; // Kun for framvisning i komponentoversikt
}

type Story = StoryObj<Props>;

/** Manuell navngivning av komponenter for å unngå at kompilert kode vises ved "Show Code" i Storybook */
(Toaster as any).displayName = "Toaster";
Button.displayName = "Button";

export const Preview: Story = {
  render: args => (
    <>
      <Toaster />
      <Button
        colorPalette={args.colorPalette}
        w={"fit-content"}
        onClick={() =>
          toaster.create({
            title: args.title,
            description: args.description,
            type: args.type,
            duration: args.duration,
          })
        }
      >
        Show Toast
      </Button>
    </>
  ),
  parameters: {
    docs: {
      source: {
        code: `
<Button
  onClick={() =>
    toaster.create({
      title: args.title,
      description: args.description,
      type: args.type,
      duration: args.duration,
    })
  }
>
  Show Toast
</Button>
        `,
      },
    },
  },
};
export const InformativeToast: Story = {
  render: _ => {
    const recipe = useSlotRecipe({
      key: "toast",
    });
    const styles = recipe({});

    return (
      <Box css={styles.root} data-type="info">
        {/* Foreløpig har den ingen ikon, men den skal ha det ifølge skissene våre
        <InfoIcon css={styles.indicator} height="20px" /> */}
        <Stack gap="1" flex="1" maxWidth="100%">
          <Box css={styles.title}>Saken går til automatisk behandling</Box>
        </Stack>
      </Box>
    );
  },
  parameters: {
    docs: {
      source: {
        code: `
toaster.create({
  title: "Saken går til automatisk behandling",
  type: "info",
})
        `,
      },
    },
  },
};

// Hentet fra Chakra sin egen kodebase for å hacke til fremvisning av Toast i Storybook
const CheckCircleIcon = (props: any) => (
  <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" {...props}>
    <path d="M12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22ZM12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20ZM11.0026 16L6.75999 11.7574L8.17421 10.3431L11.0026 13.1716L16.6595 7.51472L18.0737 8.92893L11.0026 16Z" />
  </svg>
);
export const SuccessToast: Story = {
  render: _ => {
    const recipe = useSlotRecipe({
      key: "toast",
    });
    const styles = recipe({});

    return (
      <Box css={styles.root} data-type="success">
        <CheckCircleIcon css={styles.indicator} height="20px" />
        <Stack gap="1" flex="1" maxWidth="100%">
          <Box css={styles.title}>Takk! Din sak er opprettet.</Box>
        </Stack>
      </Box>
    );
  },
  parameters: {
    docs: {
      source: {
        code: `
toaster.create({
  title: "Takk! Din sak er opprettet.",
  type: "success",
})
        `,
      },
    },
  },
};

// Hentet fra Chakra sin egen kodebase for å hacke til fremvisning av Toast i Storybook
const WarningIcon = (props: any) => (
  <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" {...props}>
    <path d="M12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22ZM12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20ZM11 15H13V17H11V15ZM11 7H13V13H11V7Z" />
  </svg>
);

export const WarningToast: Story = {
  render: _ => {
    const recipe = useSlotRecipe({
      key: "toast",
    });
    const styles = recipe({});

    return (
      <Box css={styles.root} data-type="warning">
        <WarningIcon css={styles.indicator} height="20px" />
        <Stack gap="1" flex="1" maxWidth="100%">
          <Box css={styles.title}>Mistet internettforbindelsen</Box>
          <Box css={styles.description}>
            Du kan fortsette å fylle ut skjemaet, men får ikke lagret før forbindelsen er tilbake.
          </Box>
        </Stack>
      </Box>
    );
  },
  parameters: {
    docs: {
      source: {
        code: `
toaster.create({
  title: "Mistet internettforbindelsen",
  description: "Du kan fortsette å fylle ut skjemaet, men får ikke lagret før forbindelsen er tilbake.",
  type: "warning",
})
        `,
      },
    },
  },
};

export const ErrorToast: Story = {
  render: _ => {
    const recipe = useSlotRecipe({
      key: "toast",
    });
    const styles = recipe({});

    return (
      <Box css={styles.root} data-type="error">
        <WarningIcon css={styles.indicator} height="20px" />
        <Stack gap="1" flex="1" maxWidth="100%">
          <Box css={styles.title}>Ingen internettforbindelse</Box>
          <Box css={styles.description}>Du kan ikke lagre før forbindelsen er tilbake.</Box>
        </Stack>
      </Box>
    );
  },
  parameters: {
    docs: {
      source: {
        code: `
toaster.create({
  title: "Ingen internettforbindelse",
  description: "Du kan ikke lagre før forbindelsen er tilbake.",
  type: "error",
})
        `,
      },
    },
  },
};
