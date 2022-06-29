import * as React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import '../../../../css/main.css'

export default function ButtonTest(){
  return (
      <>
          <Stack spacing={2} direction="row">
              <Button className={"kv-button--xs"} size={"medium"} variant="text">Text</Button>
              <Button className={"kv-button--xs"} variant="contained">Contained</Button>
              <Button className={"kv-button--xs"} variant="outlined">Outlined</Button>
          </Stack>
      </>
  );
}
