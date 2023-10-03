export const ToastExample = `
const ToastExample = () => {
const toast = useToast()
  
  return (
    <Button
      colorScheme="green"
      onClick={() =>
        toast({
            title: "Tittel",
            description: "Beskrivelse",
            status: "Success",
            duration: 9000,
            isClosable: true,
            icon: <Icon icon={args.icon}/>
        })
    }
>
 Trykk for tilbakemelding
  </Button>
)`;

export const ToastStatus = `
<ToastExample position="top-left" title="Top-left" />
`;
