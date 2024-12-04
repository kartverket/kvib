import { IconButton } from "@/button";
import { useKvibContext, useMediaQuery, useToggle } from "@/hooks";
import { Box, Flex, VStack } from "@/layout";
import { Logo } from "@/logo";
import { Link, LinkProps } from "@/typography";

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
  /** Children to be displayed in the header. */
  children?: React.ReactNode;
  /** If true, a menu button will be displayed. */
  showMenuButton?: boolean;
  /** If true, the header children will be displayed in the dropdown menu. */
  showChildrenInMenu?: boolean;
  /** Custom children to be displayed in the dropdown menu. Also to modify dropdown layout. */
  dropdownMenuChildren?: React.ReactNode;
  /** Screen breakpoint for when the header should collapse and display menu button instead. */
  collapseBreakpoint?: "sm" | "md" | "lg";
  /** If provided: a custom function to be called when the menu button is clicked. */
  onMenuButtonClick?: React.MouseEventHandler<HTMLButtonElement>;
  /** Gap between header elements. */
  gap?: number;
  logoVariant?: "horizontal" | "vertical";
};

export const Header = (props: HeaderProps) => {
  const {
    justifyContent = "space-between",
    logoLinkDisabled = false,
    logoLink = "/",
    logoLinkProps,
    logoAltText,
    children,
    showMenuButton = false,
    dropdownMenuChildren,
    showChildrenInMenu = true,
    collapseBreakpoint = "sm",
    onMenuButtonClick,
    gap = 90,
    logoVariant = "horizontal",
  } = props;

  const system = useKvibContext();
  const isCollapse = useMediaQuery(`(max-width: ${system.token("breakpoints." + collapseBreakpoint)})`);
  const isSm = useMediaQuery(`(max-width: ${system.token("breakpoints.sm")})`);
  const logoHorizontalSize = isSm ? 110 : 150;
  const logoVerticalSize = isSm ? 70 : 100;
  const headerSize = isSm ? 70 : 90;
  const justify = justifyContent && isCollapse ? "space-between" : justifyContent;
  const showChildren = !isCollapse;
  const [isOpen, onToggle] = useToggle();
  const showMenuButtonElement = (children && (isCollapse || isOpen)) || showMenuButton;
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
      <Flex
        bg="white"
        borderBottomWidth="2px"
        borderBottomColor="gray.200"
        padding={30}
        height={headerSize}
        alignItems="center"
        justifyContent={justify}
        gap={gap}
      >
        {logoLinkDisabled ? (
          <HeaderLogo />
        ) : (
          <Link href={logoLink} external={false} {...logoLinkProps}>
            <HeaderLogo />
          </Link>
        )}

        {showChildren && children}

        {showMenuButtonElement && (
          <IconButton aria-label={"open menu"} icon={isOpen ? "close" : "menu"} onClick={handleClick} />
        )}
      </Flex>
      {/* Slide content */}
      <VStack bg="gray.50" borderBottomWidth="2px" borderBottomColor="gray.200" padding={30} gap={10}>
        {showChildrenInMenu && children}
        {dropdownMenuChildren}
      </VStack>
    </Box>
  );
};
