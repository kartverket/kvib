import * as React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import './palettes.css';
import {Typography} from "@mui/material";

// Hent farge values fra farger.css for å sette inn i tekst.
const docStyle = getComputedStyle(document.documentElement);

// Groenn farger
const groenn_moerk = docStyle.getPropertyValue('--groenn_moerk')
const groenn_standard = docStyle.getPropertyValue('--groenn_standard')
const groenn_hover = docStyle.getPropertyValue('--groenn_hover')
const groenn_lys = docStyle.getPropertyValue('--groenn_lys')

// Blaa farger
const blaa_moerk = docStyle.getPropertyValue('--blaa_moerk')
const blaa = docStyle.getPropertyValue('--blaa')
const blaa_hover = docStyle.getPropertyValue('--blaa_hover')
const blaa_moerk_knapp = docStyle.getPropertyValue('--blaa_moerk_knapp')
const blaa_lys = docStyle.getPropertyValue('--blaa_lys')

// Roed farger
const roed_feilmelding = docStyle.getPropertyValue('--roed_feilmelding')
const roed_moerk = docStyle.getPropertyValue('--roed_moerk')
const rosa = docStyle.getPropertyValue('--rosa')

// Gul farger
const oransje = docStyle.getPropertyValue('--oransje')
const gul = docStyle.getPropertyValue('--gul')
const gul_lys = docStyle.getPropertyValue('--gul_lys')

//  Svart/hvit farger
const svart = docStyle.getPropertyValue('--svart')
const hvit = docStyle.getPropertyValue('--hvit')

// Graa farger
const graa_moerk = docStyle.getPropertyValue('--graa_moerk')
const graa = docStyle.getPropertyValue('--graa')
const graa_lys = docStyle.getPropertyValue('--graa_lys')

function GreenRows() {
    return (
        <>
            <Grid item sx>
                <Paper class={"darkGreenPalette"}/>
                <Typography gutterBottom variant="subtitle1" component="div">
                    {groenn_moerk}
                </Typography>
                <Typography gutterBottom variant="body2" component="div">
                    --groenn_moerk
                </Typography>
            </Grid>
            <Grid item sx>
                <Paper class={"greenPalette"}/>
                <Typography gutterBottom variant="subtitle1" component="div">
                    {groenn_standard}
                </Typography>
                <Typography gutterBottom variant="body2" component="div">
                    --groenn_standard
                </Typography>
            </Grid>
            <Grid item sx>
                <Paper class={"greenActivePalette"}/>
                <Typography gutterBottom variant="subtitle1" component="div">
                    {groenn_hover}
                </Typography>
                <Typography gutterBottom variant="body2" component="div">
                    --groenn_hover
                </Typography>
            </Grid>
            <Grid item sx>
                <Paper class={"lightGreenPalette"}/>
                <Typography gutterBottom variant="subtitle1" component="div">
                    {groenn_lys}
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
                <Paper class={"darkBlueButtonPalette"}/>
                <Typography gutterBottom variant="subtitle1" component="div">
                    {blaa_moerk}
                </Typography>
                <Typography gutterBottom variant="body2" component="div">
                    --blaa_moerk
                </Typography>
            </Grid>
            <Grid item sx>
                <Paper class={"bluePalette"}/>
                <Typography gutterBottom variant="subtitle1" component="div">
                    {blaa}
                </Typography>
                <Typography gutterBottom variant="body2" component="div">
                    --blaa
                </Typography>
            </Grid>
            <Grid item sx>
                <Paper class={"hoverBluePalette"}/>
                <Typography gutterBottom variant="subtitle1" component="div">
                    {blaa_hover}
                </Typography>
                <Typography gutterBottom variant="body2" component="div">
                    --blaa_hover
                </Typography>
            </Grid>
            <Grid item sx>
                <Paper class={"darkBluePalette"}/>
                <Typography gutterBottom variant="subtitle1" component="div">
                    {blaa_moerk_knapp}
                </Typography>
                <Typography gutterBottom variant="body2" component="div">
                    --blaa_moerk_knapp
                </Typography>
            </Grid>
            <Grid item sx>
                <Paper class={"lightBluePalette"}/>
                <Typography gutterBottom variant="subtitle1" component="div">
                    {blaa_lys}
                </Typography>
                <Typography gutterBottom variant="body2" component="div">
                    --blaa_lys
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
                    {roed_feilmelding}
                </Typography>
                <Typography gutterBottom variant="body2" component="div">
                    --roed_feilmelding
                </Typography>
            </Grid>
            <Grid item sx>
                <Paper class={"darkRedPalette"}/>
                <Typography gutterBottom variant="subtitle1" component="div">
                    {roed_moerk}
                </Typography>
                <Typography gutterBottom variant="body2" component="div">
                    --roed_moerk
                </Typography>
            </Grid>
            <Grid item sx>
                <Paper class={"pinkPalette"}/>
                <Typography gutterBottom variant="subtitle1" component="div">
                    {rosa}
                </Typography>
                <Typography gutterBottom variant="body2" component="div">
                    --rosa
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
                    {oransje}
                </Typography>
                <Typography gutterBottom variant="body2" component="div">
                    --oransje
                </Typography>
            </Grid>
            <Grid item sx>
                <Paper class={"yellowPalette"}/>
                <Typography gutterBottom variant="subtitle1" component="div">
                    {gul}
                </Typography>
                <Typography gutterBottom variant="body2" component="div">
                    --gul
                </Typography>
            </Grid>
            <Grid item sx>
                <Paper class={"lightYellowPalette"}/>
                <Typography gutterBottom variant="subtitle1" component="div">
                    {gul_lys}
                </Typography>
                <Typography gutterBottom variant="body2" component="div">
                    --gul_lys
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
                    {hvit}
                </Typography>
                <Typography gutterBottom variant="body2" component="div">
                    --hvit
                </Typography>
            </Grid>
            <Grid item sx>
                <Paper class={"blackPalette"}/>
                <Typography gutterBottom variant="subtitle1" component="div">
                    {svart}
                </Typography>
                <Typography gutterBottom variant="body2" component="div">
                    --svart
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
                    {graa_moerk}
                </Typography>
                <Typography gutterBottom variant="body2" component="div">
                    --graa_moerk
                </Typography>
            </Grid>
            <Grid item sx>
                <Paper class={"grayPalette"}/>
                <Typography gutterBottom variant="subtitle1" component="div">
                    {graa}
                </Typography>
                <Typography gutterBottom variant="body2" component="div">
                    --graa
                </Typography>
            </Grid>
            <Grid item sx>
                <Paper class={"lightGrayPalette"}/>
                <Typography gutterBottom variant="subtitle1" component="div">
                    {graa_lys}
                </Typography>
                <Typography gutterBottom variant="body2" component="div">
                    --graa_lys
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
