import * as React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import '../../../../css/buttons.css';

export default function BasicButtons() {
  return (
    <Stack spacing={2} direction="row">
      <Button claas={"kv-button-blue-primary"} variant="text">Text</Button>
      <Button claas={"kv-button--xs"} variant="contained">Contained</Button>
      <Button claas={"kv-button--xs"} variant="outlined">Outlined</Button>
    </Stack>
  );
}
