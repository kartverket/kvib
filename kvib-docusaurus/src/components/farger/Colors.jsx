import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import '../../css/main.css'

function FormRow() {
    return (
        <>
            <Grid xs={2}>
                <Paper
                    sx={{
                        height: 100,
                        width: 100,
                        marginTop: 5,
                        backgroundColor: 'green'
                    }}
                />
            </Grid>
            <Grid xs={2}>
                <Paper
                    sx={{
                        height: 100,
                        width: 100,
                        marginTop: 5,
                    }}
                />
            </Grid>
            <Grid xs={2}>
                <Paper
                    sx={{
                        height: 100,
                        width: 100,
                        marginTop: 5,
                        backgroundColor: 'lightyellow'
                    }}
                />
            </Grid>
        </>
    );
}

export default function Colors() {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={1}>
                <Grid container item spacing={4}>
                    <FormRow />
                </Grid>
                <Grid container item spacing={4}>
                    <FormRow />
                </Grid>
                <Grid container item spacing={4}>
                    <FormRow />
                </Grid>
            </Grid>
        </Box>
    );
}
