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
  /** Custom content to be displayed in the opened menu. Also to modify menu layout. Shows as a side drawer on large screens (unless tabBarContent is provided) and as a collapsible dropdown on small screens. When both menuContent and tabBarContent are defined, menuContent takes priority on small screens. */
  menuContent?: React.ReactNode;
  /** Content to be displayed as a tab bar attached to the bottom of the header. Shows on all screen sizes when menuContent is not defined. When both are defined, tabBarContent shows on large screens and menuContent shows on small screens. Choose between menuContent (side drawer/dropdown) or tabBarContent (tab bar) for navigation. */
  tabBarContent?: React.ReactNode;
  /** Screen breakpoint for when the header should collapse and display menu button instead. */
  collapseBreakpoint?: "sm" | "md" | "lg";
  /** If provided: a custom function to be called when the menu button is clicked. */
  onMenuButtonClick?: React.MouseEventHandler<HTMLButtonElement>;
  /** If set, overrides the automatic logic for showing the menu button. When undefined, the menu button visibility is determined automatically based on menuContent, tabBarContent, and screen size. */
  showMenuButton?: boolean;
  /** Gap between header elements. */
  gap?: number;
  logoVariant?: "horizontal" | "vertical" | "symbol";
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
    menuContent,
    tabBarContent,
    collapseBreakpoint = "sm",
    onMenuButtonClick,
    showMenuButton,
    gap = 90,
    logoVariant = "horizontal",
    contentMaxWidth = "1140px",
  } = props;

  const system = useKvibContext();
  const isCollapse = useMediaQuery(`(max-width: ${system.token("breakpoints." + collapseBreakpoint)})`);
  const isSm = useMediaQuery(`(max-width: ${system.token("breakpoints.sm")})`);
  const logoHorizontalSize = isSm ? 110 : 150;
  const logoVerticalSize = isSm ? 70 : 100;
  const logoSymbolSize = isSm ? 33 : 37;
  const headerSize = isSm ? 70 : 90;
  const headerPadding = 30;
  const justify = justifyContent && isCollapse ? "space-between" : justifyContent;
  const [isOpen, onToggle] = useToggle();
  const automaticShowMenuButton =
    (menuContent && (!tabBarContent || isCollapse)) || (content && (isCollapse || isOpen));
  const showMenuButtonElement = showMenuButton !== undefined ? showMenuButton : automaticShowMenuButton;
  const handleClick = onMenuButtonClick || onToggle;

  // Ensure contentMaxWidth is treated as a string with units for calc()
  // Check if the value is purely numeric (no units) and add 'px' suffix
  const maxWidthValue = !isNaN(Number(contentMaxWidth)) ? `${contentMaxWidth}px` : contentMaxWidth;
  const containerMaxWidth = `calc(${maxWidthValue} + ${headerPadding * 2}px)`;

  const HeaderLogo = () => {
    return (
      <Logo
        label={logoAltText}
        variant={logoVariant}
        size={
          logoVariant == "horizontal"
            ? logoHorizontalSize
            : logoVariant == "vertical"
              ? logoVerticalSize
              : logoSymbolSize
        }
      />
    );
  };

  return (
    <Box>
      <Box
        bg="white"
        borderBottomWidth={tabBarContent && (!menuContent || !isCollapse) ? 0 : "1px"}
        borderBottomColor="gray.200"
      >
        <Flex
          maxWidth={containerMaxWidth}
          margin="0 auto"
          padding={headerPadding}
          height={headerSize}
          alignItems="center"
          justifyContent={justify}
          gap={gap}
        >
          <Flex alignItems={logoVariant === "horizontal" ? "flex-end" : "center"} gap={5}>
            {logoLinkDisabled ? (
              <HeaderLogo />
            ) : (
              <Link href={logoLink} external={false} {...logoLinkProps} aria-label={logoAltText || "Gå til forsiden"}>
                <HeaderLogo />
              </Link>
            )}
            {title && (
              <HStack marginBottom={logoVariant === "horizontal" ? "3px" : "0"} gap={5}>
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

          <HStack>
            {content}

            {showMenuButtonElement &&
              (isCollapse ? (
                <IconButton
                  aria-label={isOpen ? "Lukk meny" : "Åpne meny"}
                  aria-expanded={isOpen}
                  aria-controls="navigation-menu"
                  icon={isOpen ? "close" : "menu"}
                  onClick={handleClick}
                  variant="plain"
                />
              ) : (
                !tabBarContent && (
                  <Button
                    variant="plain"
                    rightIcon={isOpen ? "close" : "menu"}
                    onClick={handleClick}
                    aria-expanded={isOpen}
                    aria-controls="navigation-menu"
                  >
                    Meny
                  </Button>
                )
              ))}
          </HStack>
        </Flex>
      </Box>

      {/* Conditional rendering based on content type and screen size */}
      {tabBarContent && (!menuContent || !isCollapse) ? (
        /* tabBarContent: Display as tab bar on all screen sizes if no menuContent, or only on large screens if menuContent exists */
        <Box bg="white" borderBottomWidth="1px" borderBottomColor="gray.200">
          <Flex
            maxWidth={containerMaxWidth}
            margin="0 auto"
            paddingX={headerPadding}
            width="full"
            role="navigation"
            aria-label="Hovedmeny"
          >
            {tabBarContent}
          </Flex>
        </Box>
      ) : menuContent ? (
        /* menuContent: Show as collapsible dropdown on small screens, side drawer on large screens (when no tabBarContent) */
        isCollapse ? (
          <CollapsibleRoot open={isOpen}>
            <CollapsibleContent>
              <VStack
                id="navigation-menu"
                bg="white"
                borderBottomWidth="2px"
                borderBottomColor="gray.200"
                padding={headerPadding}
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
          <DrawerRoot open={isOpen} onOpenChange={onToggle} placement="end">
            <DrawerBackdrop />
            <DrawerContent>
              <DrawerCloseTrigger />
              <DrawerBody>
                <VStack
                  id="navigation-menu"
                  padding={headerPadding}
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
        )
      ) : null}
    </Box>
  );
};
