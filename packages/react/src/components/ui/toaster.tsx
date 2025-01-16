"use client";

import { Icon } from "@/icon";
import { Toaster as ChakraToaster, Portal, Spinner, Stack, Toast, createToaster } from "@chakra-ui/react";

export const toaster = createToaster({
  placement: "bottom",
  pauseOnPageIdle: true,
});

export const KvibToastIndicator = ({ type }: { type?: "info" | "warning" | "success" | "error" }) => {
  if (!type) return null;

  const icon = {
    info: "info",
    warning: "info",
    success: "check_circle",
    error: "info",
  }[type] as "info" | "check";

  const color = {
    info: "blue.500",
    warning: "orange.500",
    success: "green.500",
    error: "red.500",
  }[type];

  return <Icon color={color} icon={icon} size={24} filled />;
};

export const Toaster = () => {
  return (
    <Portal>
      <ChakraToaster toaster={toaster} insetInline={{ mdDown: "4" }}>
        {toast => (
          <Toast.Root width={{ md: "sm" }}>
            <Stack alignItems="center" flex="0" height="100%" justifyContent="center" width="20">
              {toast.type === "loading" ? (
                <Spinner size="sm" color="blue.solid" />
              ) : (
                <KvibToastIndicator type={toast.type as any} />
              )}
            </Stack>
            <Stack gap="1" flex="1" maxWidth="100%" pb="1px">
              {toast.title && <Toast.Title>{toast.title}</Toast.Title>}
              {toast.description && <Toast.Description>{toast.description}</Toast.Description>}
            </Stack>
            {toast.action && <Toast.ActionTrigger>{toast.action.label}</Toast.ActionTrigger>}
            {toast.meta?.closable && <Toast.CloseTrigger />}
          </Toast.Root>
        )}
      </ChakraToaster>
    </Portal>
  );
};
