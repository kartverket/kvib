import { Box, Button, KvibToastIndicator, Stack, Toaster, toaster, useSlotRecipe } from "@kvib/react";
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
        <KvibToastIndicator type="info" />
        <Stack gap="1" flex="1" maxWidth="100%" pb="1px">
          <Box css={styles.description}>Saken går til automatisk behandling</Box>
        </Stack>
      </Box>
    );
  },
  parameters: {
    docs: {
      source: {
        code: `
toaster.create({
  description: "Saken går til automatisk behandling",
  type: "info",
})
        `,
      },
    },
  },
};

export const SuccessToast: Story = {
  render: _ => {
    const recipe = useSlotRecipe({
      key: "toast",
    });
    const styles = recipe({});

    return (
      <Box css={styles.root} data-type="success">
        <KvibToastIndicator type="success" />
        <Stack gap="1" flex="1" maxWidth="100%" pb="1px">
          <Box css={styles.description}>Takk! Din sak er opprettet.</Box>
        </Stack>
      </Box>
    );
  },
  parameters: {
    docs: {
      source: {
        code: `
toaster.create({
  description: "Takk! Din sak er opprettet.",
  type: "success",
})
        `,
      },
    },
  },
};

export const WarningToast: Story = {
  render: _ => {
    const recipe = useSlotRecipe({
      key: "toast",
    });
    const styles = recipe({});

    return (
      <Box css={styles.root} data-type="warning">
        <KvibToastIndicator type="warning" />
        <Stack gap="1" flex="1" maxWidth="100%" pb="1px">
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
        <KvibToastIndicator type="error" />
        <Stack gap="1" flex="1" maxWidth="100%" pb="1px">
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
