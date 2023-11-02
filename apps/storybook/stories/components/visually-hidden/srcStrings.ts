export const VisuallyHiddenString = `const VisuallyHiddenExample = ({ ...args }) => {
    return(
        <>
            <Button>
                <KvibVisuallyHidden {...args}>Checkmark</KvibVisuallyHidden>
                <Icon icon="check" />
            </Button>
        </>
    )
};
`;

export const VisuallyHiddenTxtString = `const VisuallyHiddenTextExample = ({ ...args}) => {
    return(
        <Box>
            <Heading>Tittel og beskrivelse</Heading>
            <KvibVisuallyHidden {...args}>Dette  vil bli skjult</KvibVisuallyHidden>
        </Box>
    )
};`;

export const VisuallyHiddenInputString = `const VisuallyHiddenInputExample = ({ ...args}) => {
    return(
        <>
            <VisuallyHiddenInput {...args}
                defaultChecked
                onChange={(event) => {
                    console.log(event.target.checked)
                }}
            />
        </>
    )
}`;
