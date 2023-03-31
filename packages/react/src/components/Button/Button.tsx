import {
  Box,
  Button as ChakraButton,
  ButtonProps as ChakraButtonProps,
  Center,
  forwardRef,
  Spinner,
} from "@chakra-ui/react";

export type ButtonProps = Exclude<ChakraButtonProps, "colorScheme" | "size" | "variant" | "leftIcon" | "rightIcon"> & {
  size?: "sm" | "md" | "lg";
  variant?: "primary" | "secondary" | "tertiary";
  colorScheme?: "green" | "blue";
  leftIcon?: "string";
  rightIcon?: "string";
};

/**
 * Her er en oversikt over utvalget av Knapper i KVIB. Disse er blant annet bygget opp ved bruk av desing tokens fra KVIB, eksempelvis farger og typografi. I dokumentasjonen følger beskrivelse av komponenten og bruksområde, sammen med kodeeksempler.
 *
 * Vi har to sett med farger. Vi har et primærsett (grønn) og et sekundærsett (blått). Vår palett er inspirert av jordtoner. Vi har valgt sekundærsettet som er blått på karttjenester og forvaltningstjenester for å ha kontrast mot kartet.
 *
 * Løsninger som skal se ut som en del av [kartverket.no](http://kartverket.no) skal bruke grønn.
 */
export const Button = forwardRef<ButtonProps, "button">(
  (
    {
      children,
      size = "md",
      variant = "primary",
      colorScheme = "green",
      isDisabled,
      isLoading,
      leftIcon,
      rightIcon,
      ...props
    },
    ref
  ) => {
    return (
      <ChakraButton
        {...props}
        ref={ref}
        size={size}
        variant={variant}
        colorScheme={colorScheme}
        isDisabled={isDisabled || isLoading}
        aria-busy={isLoading}
        position="relative"
      >
        {isLoading && leftIcon ? (
          <Box visibility={isLoading ? "hidden" : "visible"} aria-hidden="true">
            <span className="material-symbols-outlined">{leftIcon}</span>
          </Box>
        ) : (
          <Center paddingRight={1}>
            <span className="material-symbols-outlined">{leftIcon}</span>
          </Center>
        )}
        {isLoading && (
          <Center position="absolute" right="0" left="0">
            <Spinner size="sm" />
          </Center>
        )}
        <Box visibility={isLoading ? "hidden" : "visible"}>{children}</Box>
        {isLoading && rightIcon ? (
          <Box visibility={isLoading ? "hidden" : "visible"} aria-hidden="true">
            <span className="material-symbols-outlined">{rightIcon}</span>
          </Box>
        ) : (
          <Center paddingLeft={1}>
            <span className="material-symbols-outlined">{rightIcon}</span>
          </Center>
        )}
      </ChakraButton>
    );
  }
);
