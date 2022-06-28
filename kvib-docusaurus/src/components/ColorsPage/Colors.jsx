import * as React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import './palettes.css';
import {Typography} from "@mui/material";


function GreenRows() {
    return (
        <>
            <Grid item sx>
                <Paper class={"darkGreenPalette"}/>
                <Typography gutterBottom variant="subtitle1" component="div">
                    #156630
                </Typography>
                <Typography gutterBottom variant="body2" component="div">
                    --groenn_moerk
                </Typography>
            </Grid>
            <Grid item sx>
                <Paper class={"greenPalette"}/>
                <Typography gutterBottom variant="subtitle1" component="div">
                    #1A833B
                </Typography>
                <Typography gutterBottom variant="body2" component="div">
                    --groenn_standard
                </Typography>
            </Grid>
            <Grid item sx>
                <Paper class={"greenActivePalette"}/>
                <Typography gutterBottom variant="subtitle1" component="div">
                    #05502A
                </Typography>
                <Typography gutterBottom variant="body2" component="div">
                    --groenn_hover
                </Typography>
            </Grid>
            <Grid item sx>
                <Paper class={"lightGreenPalette"}/>
                <Typography gutterBottom variant="subtitle1" component="div">
                    #D0ECD6
                </Typography>
                <Typography gutterBottom variant="body2" component="div">
                    --groenn_lys
                </Typography>
            </Grid>
        </>
    )
}

function BlueRows() {
    return (
        <>
            <Grid item sx>
                <Paper class={"darkBluePalette"}/>
                <Typography gutterBottom variant="subtitle1" component="div">
                    #175092
                </Typography>
                <Typography gutterBottom variant="body2" component="div">
                    --blaa_moerk
                </Typography>
            </Grid>
            <Grid item sx>
                <Paper class={"bluePalette"}/>
                <Typography gutterBottom variant="subtitle1" component="div">
                    #1A589F
                </Typography>
                <Typography gutterBottom variant="body2" component="div">
                    --blaa
                </Typography>
            </Grid>
            <Grid item sx>
                <Paper class={"hoverBluePalette"}/>
                <Typography gutterBottom variant="subtitle1" component="div">
                    #439CCD
                </Typography>
                <Typography gutterBottom variant="body2" component="div">
                    --blaa_hover
                </Typography>
            </Grid>
            <Grid item sx>
                <Paper class={"lightBluePalette"}/>
                <Typography gutterBottom variant="subtitle1" component="div">
                    #E4F1F8
                </Typography>
                <Typography gutterBottom variant="body2" component="div">
                    Blaa_Lys
                </Typography>
            </Grid>
        </>
    )
}

function RedRows() {
    return (
        <>
            <Grid item sx>
                <Paper class={"redErrorPalette"}/>
                <Typography gutterBottom variant="subtitle1" component="div">
                    #A32F00
                </Typography>
                <Typography gutterBottom variant="body2" component="div">
                    Roed_Feilmelding
                </Typography>
            </Grid>
            <Grid item sx>
                <Paper class={"darkRedPalette"}/>
                <Typography gutterBottom variant="subtitle1" component="div">
                    #D04a14
                </Typography>
                <Typography gutterBottom variant="body2" component="div">
                    Roed_Moerk
                </Typography>
            </Grid>
            <Grid item sx>
                <Paper class={"pinkPalette"}/>
                <Typography gutterBottom variant="subtitle1" component="div">
                    #F7E6EB
                </Typography>
                <Typography gutterBottom variant="body2" component="div">
                    Rosa
                </Typography>
            </Grid>
        </>
    );
}

function OrangeYellowRows() {
    return (
        <>
            <Grid item sx>
                <Paper class={"orangePalette"}/>
                <Typography gutterBottom variant="subtitle1" component="div">
                    #FCF1E8
                </Typography>
                <Typography gutterBottom variant="body2" component="div">
                    Oransje
                </Typography>
            </Grid>
            <Grid item sx>
                <Paper class={"yellowPalette"}/>
                <Typography gutterBottom variant="subtitle1" component="div">
                    #FFDD9D
                </Typography>
                <Typography gutterBottom variant="body2" component="div">
                    Gul
                </Typography>
            </Grid>
            <Grid item sx>
                <Paper class={"lightYellowPalette"}/>
                <Typography gutterBottom variant="subtitle1" component="div">
                    #FCEBCD
                </Typography>
                <Typography gutterBottom variant="body2" component="div">
                    Gul_Lys
                </Typography>
            </Grid>
        </>
    )
}

function BlackWhiteRows() {
    return (
        <>
            <Grid item sx>
                <Paper class={"whitePalette"}/>
                <Typography gutterBottom variant="subtitle1" component="div">
                    #FFFFFF
                </Typography>
                <Typography gutterBottom variant="body2" component="div">
                    Hvit
                </Typography>
            </Grid>
            <Grid item sx>
                <Paper class={"blackPalette"}/>
                <Typography gutterBottom variant="subtitle1" component="div">
                    #222222
                </Typography>
                <Typography gutterBottom variant="body2" component="div">
                    Svart
                </Typography>
            </Grid>
        </>
    )

}

function GrayRows() {
    return (
        <>
            <Grid item sx>
                <Paper class={"darkGrayPalette"}/>
                <Typography gutterBottom variant="subtitle1" component="div">
                    #505050
                </Typography>
                <Typography gutterBottom variant="body2" component="div">
                    Graa_moerk
                </Typography>
            </Grid>
            <Grid item sx>
                <Paper class={"grayPalette"}/>
                <Typography gutterBottom variant="subtitle1" component="div">
                    #707070
                </Typography>
                <Typography gutterBottom variant="body2" component="div">
                    Graa
                </Typography>
            </Grid>
            <Grid item sx>
                <Paper class={"lightGrayPalette"}/>
                <Typography gutterBottom variant="subtitle1" component="div">
                    #F5F2F2
                </Typography>
                <Typography gutterBottom variant="body2" component="div">
                    Graa_lys
                </Typography>
            </Grid>
        </>
    )
}

export default function Colors() {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={3}>
                <GreenRows />
            </Grid>
            <Grid container spacing={3}>
                <BlueRows />
            </Grid>
            <Grid container spacing={3}>
                <RedRows />
            </Grid>
            <Grid container spacing={3}>
                <OrangeYellowRows />
            </Grid>
            <Grid container spacing={3}>
                <BlackWhiteRows />
            </Grid>
            <Grid container spacing={3}>
                <GrayRows />
            </Grid>
        </Box>
    );
}
