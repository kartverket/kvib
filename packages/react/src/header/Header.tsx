import { Button, IconButton } from "@/button";
import { CollapsibleRoot, CollapsibleContent } from "@/collapsible";
import { DrawerRoot, DrawerContent, DrawerBody, DrawerBackdrop, DrawerCloseTrigger } from "@/drawer";
import { useKvibContext, useMediaQuery, useToggle } from "@/hooks";
import { Box, Flex, VStack, HStack } from "@/layout";
import { Logo } from "@/logo";
import { Link, LinkProps, Text } from "@/typography";
import { Separator } from "@/separator";

type HeaderProps = {
  /** Determines where the content in the header is displayed. */
  justifyContent?: "space-between" | "center" | "start";
  /**If set, the link around the logo will not be rendered and clickable.  */
  logoLinkDisabled?: boolean;
  /** Href for logo link */
  logoLink?: string;
  /** As for logo link */
  logoLinkProps?: Omit<LinkProps, "href">;
  /** Alt Text for logo */
  logoAltText?: string;
  /** Title to display beside the logo (hidden on mobile/small screens) */
  title?: string;
  /** Link URL for the title */
  titleLink?: string;
  /** Content to be displayed in the header. */
  content?: React.ReactNode;
  /** If true, a menu button will be displayed. */
  showMenuButton?: boolean;
  /** Custom content to be displayed in the opened menu. Also to modify menu layout. */
  menuContent?: React.ReactNode;
  /** Screen breakpoint for when the header should collapse and display menu button instead. */
  collapseBreakpoint?: "sm" | "md" | "lg";
  /** If provided: a custom function to be called when the menu button is clicked. */
  onMenuButtonClick?: React.MouseEventHandler<HTMLButtonElement>;
  /** Gap between header elements. */
  gap?: number;
  logoVariant?: "horizontal" | "vertical";
  /** Maximum width of the header content. */
  contentMaxWidth?: string | number;
};

export const Header = (props: HeaderProps) => {
  const {
    justifyContent = "space-between",
    logoLinkDisabled = false,
    logoLink = "/",
    logoLinkProps,
    logoAltText,
    title,
    titleLink,
    content,
    showMenuButton = false,
    menuContent,
    collapseBreakpoint = "sm",
    onMenuButtonClick,
    gap = 90,
    logoVariant = "horizontal",
    contentMaxWidth = "1140px",
  } = props;

  const system = useKvibContext();
  const isCollapse = useMediaQuery(`(max-width: ${system.token("breakpoints." + collapseBreakpoint)})`);
  const isSm = useMediaQuery(`(max-width: ${system.token("breakpoints.sm")})`);
  const logoHorizontalSize = isSm ? 110 : 150;
  const logoVerticalSize = isSm ? 70 : 100;
  const headerSize = isSm ? 70 : 90;
  const justify = justifyContent && isCollapse ? "space-between" : justifyContent;
  const [isOpen, onToggle] = useToggle();
  const showMenuButtonElement = (content && (isCollapse || isOpen)) || showMenuButton;
  const handleClick = onMenuButtonClick || onToggle;

  const HeaderLogo = () => {
    return (
      <Logo
        label={logoAltText}
        variant={logoVariant}
        size={logoVariant == "horizontal" ? logoHorizontalSize : logoVerticalSize}
      />
    );
  };

  return (
    <Box>
      <Box bg="white" borderBottomWidth="2px" borderBottomColor="gray.200">
        <Flex
          maxWidth={contentMaxWidth}
          margin="0 auto"
          padding={30}
          height={headerSize}
          alignItems="center"
          justifyContent={justify}
          gap={gap}
        >
          <Flex alignItems="flex-end" gap={5}>
            {logoLinkDisabled ? (
              <HeaderLogo />
            ) : (
              <Link href={logoLink} external={false} {...logoLinkProps}>
                <HeaderLogo />
              </Link>
            )}
            {title && !isSm && (
              <HStack marginBottom="3px" gap={5}>
                <Separator orientation="vertical" height="28px" />
                {titleLink ? (
                  <Link href={titleLink} variant="plain">
                    <Text fontSize="lg" fontWeight="semibold" color="gray.800">
                      {title}
                    </Text>
                  </Link>
                ) : (
                  <Text fontSize="lg" fontWeight="semibold" color="gray.800">
                    {title}
                  </Text>
                )}
              </HStack>
            )}
          </Flex>

          <Box>
            {content}

            {showMenuButtonElement &&
              (isCollapse ? (
                <IconButton
                  aria-label={isOpen ? "Lukk meny" : "Åpne meny"}
                  aria-expanded={isOpen}
                  icon={isOpen ? "close" : "menu"}
                  onClick={handleClick}
                  variant="plain"
                />
              ) : (
                <Button
                  variant="plain"
                  rightIcon={isOpen ? "close" : "menu"}
                  onClick={handleClick}
                  aria-expanded={isOpen}
                  aria-controls="navigation-menu"
                >
                  Meny
                </Button>
              ))}
          </Box>
        </Flex>
      </Box>

      {/* Conditional rendering based on screen size */}
      {isCollapse ? (
        /* Small screens: Use collapsible dropdown */
        <CollapsibleRoot open={isOpen}>
          <CollapsibleContent>
            <VStack
              id="navigation-menu"
              bg="white"
              borderBottomWidth="2px"
              borderBottomColor="gray.200"
              padding={30}
              gap={10}
              role="navigation"
              aria-label="Hovedmeny"
              alignItems="start"
            >
              {menuContent}
            </VStack>
          </CollapsibleContent>
        </CollapsibleRoot>
      ) : (
        /* Large screens: Use side drawer */
        <DrawerRoot open={isOpen} onOpenChange={onToggle} placement="end">
          <DrawerBackdrop />
          <DrawerContent>
            <DrawerCloseTrigger />
            <DrawerBody>
              <VStack
                id="navigation-menu"
                padding={30}
                gap={10}
                align="stretch"
                role="navigation"
                aria-label="Hovedmeny"
              >
                {menuContent}
              </VStack>
            </DrawerBody>
          </DrawerContent>
        </DrawerRoot>
      )}
    </Box>
  );
};
