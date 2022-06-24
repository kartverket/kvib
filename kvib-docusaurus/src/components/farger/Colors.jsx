import * as React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import '../../css/palettes.css'
import {Typography} from "@mui/material";


function GreenRows() {
    return (
        <>
            <Grid item sx>
                <Paper class={"darkGreenPalette"}/>
                <Typography gutterBottom variant="subtitle1" component="div">
                    #156630
                </Typography>
                <Typography gutterBottom variant="subtitle1" component="div">
                    Mørk Grønn
                </Typography>
            </Grid>
            <Grid item sx>
                <Paper class={"greenPalette"}/>
                <Typography gutterBottom variant="subtitle1" component="div">
                    #1A833B
                </Typography>
                <Typography gutterBottom variant="subtitle1" component="div">
                    Grønn
                </Typography>
            </Grid>
            <Grid item sx>
                <Paper class={"greenActivePalette"}/>
                <Typography gutterBottom variant="subtitle1" component="div">
                    #05502A
                </Typography>
                <Typography gutterBottom variant="subtitle1" component="div">
                    Aktiv grønn
                </Typography>
            </Grid>
            <Grid item sx>
                <Paper class={"lightGreenPalette"}/>
                <Typography gutterBottom variant="subtitle1" component="div">
                    #D0ECD6
                </Typography>
                <Typography gutterBottom variant="subtitle1" component="div">
                    Lys grønn
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
                <Typography gutterBottom variant="subtitle1" component="div">
                    Mørk blå
                </Typography>
            </Grid>
            <Grid item sx>
                <Paper class={"bluePalette"}/>
                <Typography gutterBottom variant="subtitle1" component="div">
                    #1A589F
                </Typography>
                <Typography gutterBottom variant="subtitle1" component="div">
                    Blå
                </Typography>
            </Grid>
            <Grid item sx>
                <Paper class={"lightBluePalette"}/>
                <Typography gutterBottom variant="subtitle1" component="div">
                    #E4F1F8
                </Typography>
                <Typography gutterBottom variant="subtitle1" component="div">
                    Lys blå
                </Typography>
            </Grid>
            <Grid item sx>
                <Paper class={"hoverBluePalette"}/>
                <Typography gutterBottom variant="subtitle1" component="div">
                    #1A589F
                </Typography>
                <Typography gutterBottom variant="subtitle1" component="div">
                    Hover blå
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
                <Typography gutterBottom variant="subtitle1" component="div">
                    Rød feilmelding
                </Typography>
            </Grid>
            <Grid item sx>
                <Paper class={"darkRedPalette"}/>
                <Typography gutterBottom variant="subtitle1" component="div">
                    #D04a14
                </Typography>
                <Typography gutterBottom variant="subtitle1" component="div">
                    Mørk rød
                </Typography>
            </Grid>
            <Grid item sx>
                <Paper class={"pinkPalette"}/>
                <Typography gutterBottom variant="subtitle1" component="div">
                    #F7E6EB
                </Typography>
                <Typography gutterBottom variant="subtitle1" component="div">
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
                <Typography gutterBottom variant="subtitle1" component="div">
                    Oransje
                </Typography>
            </Grid>
            <Grid item sx>
                <Paper class={"yellowPalette"}/>
                <Typography gutterBottom variant="subtitle1" component="div">
                    #FFDD9D
                </Typography>
                <Typography gutterBottom variant="subtitle1" component="div">
                    Gult
                </Typography>
            </Grid>
            <Grid item sx>
                <Paper class={"lightYellowPalette"}/>
                <Typography gutterBottom variant="subtitle1" component="div">
                    #FCEBCD
                </Typography>
                <Typography gutterBottom variant="subtitle1" component="div">
                    Lys gul
                </Typography>
            </Grid>
        </>
    )
}

function BlackWhiteRows() {
    return (
        <>
            <Grid item sx>
                <Paper class={"blackPalette"}/>
                <Typography gutterBottom variant="subtitle1" component="div">
                    #222222
                </Typography>
                <Typography gutterBottom variant="subtitle1" component="div">
                    Svart
                </Typography>
            </Grid>
            <Grid item sx>
                <Paper class={"whitePalette"}/>
                <Typography gutterBottom variant="subtitle1" component="div">
                    #FFFFFF
                </Typography>
                <Typography gutterBottom variant="subtitle1" component="div">
                    Hvit
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
                <Typography gutterBottom variant="subtitle1" component="div">
                    Mørk grå
                </Typography>
            </Grid>
            <Grid item sx>
                <Paper class={"grayPalette"}/>
                <Typography gutterBottom variant="subtitle1" component="div">
                    #707070
                </Typography>
                <Typography gutterBottom variant="subtitle1" component="div">
                    Grå
                </Typography>
            </Grid>
            <Grid item sx>
                <Paper class={"lightGrayPalette"}/>
                <Typography gutterBottom variant="subtitle1" component="div">
                    #F5F2F2
                </Typography>
                <Typography gutterBottom variant="subtitle1" component="div">
                    Lys grå
                </Typography>
            </Grid>
        </>
    )
}

export default function Colors() {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={1}>
                <GreenRows />
            </Grid>
            <Grid container spacing={1}>
                <BlueRows />
            </Grid>
            <Grid container spacing={1}>
                <RedRows />
            </Grid>
            <Grid container spacing={1}>
                <OrangeYellowRows />
            </Grid>
            <Grid container spacing={1}>
                <BlackWhiteRows />
            </Grid>
            <Grid container spacing={1}>
                <GrayRows />
            </Grid>
        </Box>
    );
}
