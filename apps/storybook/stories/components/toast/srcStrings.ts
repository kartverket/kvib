export const ToastExample = `
const ToastExample = (props) => {
const toast = useToast()
  
  return (
    <Button
      colorScheme="green"
      onClick={() => toast({...props})
      }
    >
    Trykk for tilbakemelding
    </Button>
)
<ToastExample
    title="Skjema innsendt"
    description="Takk for opplysningene"
    status="success"
    duration=9000
    icon="check">
</ToastExample>
`;

export const ToastStatus = `
<ToastExample
    duration={4000}
    title="Error"
    description="Noe gikk galt"
    status="error"
    >Trykk for toast
</ToastExample>
`;

export const ToastPosition = `
<ToastExample
    position="top-left"
    title="Top-left"
    duration="5000"
    >Top-left
</ToastExample>
`;
