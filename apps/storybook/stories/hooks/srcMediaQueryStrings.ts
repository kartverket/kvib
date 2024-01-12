export const MediaQueryAPIRefStrings = `// single media query with no options
const [isLargerThan800] = useMediaQuery('(min-width: 800px)')

// ssr-friendly media query with fallback
const [isLargerThan800] = useMediaQuery('(min-width: 800px)', {
ssr: true,
fallback: false, // return false on the server, and re-evaluate on the client side
})`;

export const MediaQueryStrings = `function Example() {
  const [isLargerThan1280] = useMediaQuery('(min-width: 1280px)')

  return (
    <Text>
      {isLargerThan1280 ? 'larger than 1280px' : 'smaller than 1280px'}
    </Text>
  )
}`;

export const MediaQueryBrowserStrings = `function Example() {
  const [isLargerThanHD, isDisplayingInBrowser] = useMediaQuery([
    '(min-width: 1920px)',
    '(display-mode: browser)',
  ])
  function determineText() {
    if (isLargerThanHD) {
      return 'high resolution you got there ${"isDisplayingInBrowser" ? "in your browser" : "on your screen"}'
    }
    return isDisplayingInBrowser
      ? 'rendering in a browser'
      : 'rendering on something else, e.g. PWA'
  }'
  return <Text>{determineText()}</Text>
}`;
