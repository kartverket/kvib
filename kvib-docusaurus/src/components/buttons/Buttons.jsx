import * as React from 'react';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import '../../../../css/main.css'
import FavoriteIcon from '@mui/icons-material/Favorite';

// Grønn knapp uten ikon

const NormalGreenButton = styled(Button)(({ theme }) => ({
    color: "var(--hvit)",
    backgroundColor: "var(--groenn_moerk)",
    fontSize: '0.5rem',
    '&:hover': {
        backgroundColor: "var(--groenn)",
    },
    '&:focus': {
        boxShadow: "0 0 0 0.2rem var(--blaa_moerk)",
    },
    '&:active': {
        boxShadow: 'none',
        backgroundColor: "var(--groenn_aktiv)",
        borderColor: '#005cbf',
    },
}));

const HoverGreenButton = styled(Button)(({ theme }) => ({
    color: "var(--hvit)",
    backgroundColor: "var(--groenn)",
    fontSize: '0.5rem',
    '&:hover': {
        backgroundColor: "var(--groenn)",
    },
    '&:focus': {
        boxShadow: "0 0 0 0.2rem var(--blaa_moerk)",
    },
    '&:active': {
        boxShadow: 'none',
        backgroundColor: "var(--groenn_aktiv)",
        borderColor: '#005cbf',
    },
}));

const AktivGreenButton = styled(Button)(({ theme }) => ({
    color: "var(--hvit)",
    backgroundColor: "var(--groenn_aktiv)",
    fontSize: '0.5rem',
    '&:hover': {
        backgroundColor: "var(--groenn)",
    },
    '&:focus': {
        boxShadow: "0 0 0 0.2rem var(--blaa_moerk)",
    },
    '&:active': {
        boxShadow: 'none',
        backgroundColor: "var(--groenn_aktiv)",
        borderColor: '#005cbf',
    },
}));

const FocusGreenButton = styled(Button)(({ theme }) => ({
    color: "var(--hvit)",
    backgroundColor: "var(--groenn_moerk)",
    fontSize: '0.5rem',
    boxShadow: "0 0 0 0.2rem var(--blaa_moerk)",
    '&:hover': {
        backgroundColor: "var(--groenn)",
    },
    '&:focus': {
        boxShadow: "0 0 0 0.2rem var(--blaa_moerk)",
    },
    '&:active': {
        boxShadow: 'none',
        backgroundColor: "var(--groenn_aktiv)",
        borderColor: '#005cbf',
    },
}));

const DeaktiveGreenButton = styled(Button)(({ theme }) => ({
    color: "var(--hvit)",
    backgroundColor: "var(--graa_lys)",
    fontSize: '0.5rem',
    '&:hover': {
        backgroundColor: "var(--groenn)",
    },
    '&:focus': {
        boxShadow: "0 0 0 0.2rem var(--blaa_moerk)",
    },
    '&:active': {
        boxShadow: 'none',
        backgroundColor: "var(--groenn_aktiv)",
        borderColor: '#005cbf',
    },
}));

// Sekundær grønn knapp uten ikon

const SecondaryNormalGreenButton = styled(Button)(({ theme }) => ({
    color: "var(--groenn)",
    backgroundColor: "var(--hvit)",
    fontSize: '0.5rem',
    variant: "outlined",
    borderColor: "var(--groenn)",
    '&:hover': {
        backgroundColor: "var(--groenn)",
        color: "var(--hvit)",
    },
    '&:focus': {
        boxShadow: "0 0 0 0.2rem var(--blaa_moerk)",
    },
    '&:active': {
        boxShadow: 'none',
        backgroundColor: "var(--groenn_aktiv)",
        borderColor: '#005cbf',
    },
}));

const SecondaryHoverGreenButton = styled(Button)(({ theme }) => ({
    color: "var(--hvit)",
    backgroundColor: "var(--groenn)",
    fontSize: '0.5rem',
    '&:hover': {
        backgroundColor: "var(--groenn)",
    },
    '&:focus': {
        boxShadow: "0 0 0 0.2rem var(--blaa_moerk)",
    },
    '&:active': {
        boxShadow: 'none',
        backgroundColor: "var(--groenn_aktiv)",
        borderColor: '#005cbf',
    },
}));

const SecondaryAktivGreenButton = styled(Button)(({ theme }) => ({
    color: "var(--hvit)",
    backgroundColor: "var(--groenn_aktiv)",
    fontSize: '0.5rem',
    '&:hover': {
        backgroundColor: "var(--groenn)",
    },
    '&:focus': {
        boxShadow: "0 0 0 0.2rem var(--blaa_moerk)",
    },
    '&:active': {
        boxShadow: 'none',
        backgroundColor: "var(--groenn_aktiv)",
        borderColor: '#005cbf',
    },
}));

const SecondaryFocusGreenButton = styled(Button)(({ theme }) => ({
    color: "var(--groenn)",
    backgroundColor: "var(--hvit)",
    fontSize: '0.5rem',
    variant: "outlined",
    borderColor: "var(--groenn)",
    boxShadow: "0 0 0 0.2rem var(--blaa_moerk)",
    '&:hover': {
        backgroundColor: "var(--groenn)",
        color: "var(--hvit)",
    },
    '&:focus': {
        boxShadow: "0 0 0 0.2rem var(--blaa_moerk)",
    },
    '&:active': {
        boxShadow: 'none',
        backgroundColor: "var(--groenn_aktiv)",
        borderColor: '#005cbf',
    },
}));

const SecondaryDeaktiveGreenButton = styled(Button)(({ theme }) => ({
    color: "var(--svart)",
    backgroundColor: "var(--graa_lys)",
    fontSize: '0.5rem',
    '&:hover': {
        backgroundColor: "var(--groenn)",
    },
    '&:focus': {
        boxShadow: "0 0 0 0.2rem var(--blaa_moerk)",
    },
    '&:active': {
        boxShadow: 'none',
        backgroundColor: "var(--groenn_aktiv)",
        borderColor: '#005cbf',
    },
}));

// Grønn knapp rad

function NormalGreenButtonRow() {
    return (
        <>
            <Stack spacing={1} direction="row">
            <NormalGreenButton variant="contained">Normal</NormalGreenButton>
            <HoverGreenButton variant="contained">Hover</HoverGreenButton>
            <AktivGreenButton variant="contained">Aktiv</AktivGreenButton>
            <FocusGreenButton variant="contained">I fokus (UU)</FocusGreenButton>
            <DeaktiveGreenButton variant="contained" disabled>Deaktivert</DeaktiveGreenButton>
            </Stack>
        </>
    )
}

function IconLeftGreenButtonRow() {
    return (
        <>
            <Stack spacing={1} direction="row">
            <NormalGreenButton variant="contained" startIcon={<FavoriteIcon />}>Normal</NormalGreenButton>
            <HoverGreenButton variant="contained" startIcon={<FavoriteIcon />}>Hover</HoverGreenButton>
            <AktivGreenButton variant="contained" startIcon={<FavoriteIcon />}>Aktiv</AktivGreenButton>
            <FocusGreenButton variant="contained" startIcon={<FavoriteIcon />}>I fokus (UU)</FocusGreenButton>
            <DeaktiveGreenButton variant="contained" disabled startIcon={<FavoriteIcon />}>Deaktivert</DeaktiveGreenButton>
            </Stack>
        </>
    )
}

function IconRightGreenButtonRow() {
    return (
        <>
            <Stack spacing={1} direction="row">
            <NormalGreenButton variant="contained" endIcon={<FavoriteIcon />}>Normal</NormalGreenButton>
            <HoverGreenButton variant="contained" endIcon={<FavoriteIcon />}>Hover</HoverGreenButton>
            <AktivGreenButton variant="contained" endIcon={<FavoriteIcon />}>Aktiv</AktivGreenButton>
            <FocusGreenButton variant="contained" endIcon={<FavoriteIcon />}>I fokus (UU)</FocusGreenButton>
            <DeaktiveGreenButton variant="contained" disabled endIcon={<FavoriteIcon />}>Deaktivert</DeaktiveGreenButton>
            </Stack>
        </>
    )
}

// Sekundær Grønn Knapp

function SecondaryGreenButtonRow() {
    return (
        <>
            <Stack spacing={1} direction="row">
            <SecondaryNormalGreenButton variant="outlined">Normal</SecondaryNormalGreenButton>
            <SecondaryHoverGreenButton variant="outlined">Hover</SecondaryHoverGreenButton>
            <SecondaryAktivGreenButton variant="outlined">Aktiv</SecondaryAktivGreenButton>
            <SecondaryFocusGreenButton variant="outlined">I fokus (UU)</SecondaryFocusGreenButton>
            <SecondaryDeaktiveGreenButton variant="outlined" disabled>Deaktivert</SecondaryDeaktiveGreenButton>
            </Stack>
        </>
    )
}

function IconLeftSecondaryGreenButtonRow() {
    return (
        <>
            <Stack spacing={1} direction="row">
            <SecondaryNormalGreenButton variant="outlined" startIcon={<FavoriteIcon />}>Normal</SecondaryNormalGreenButton>
            <SecondaryHoverGreenButton variant="outlined" startIcon={<FavoriteIcon />}>Hover</SecondaryHoverGreenButton>
            <SecondaryAktivGreenButton variant="outlined" startIcon={<FavoriteIcon />}>Aktiv</SecondaryAktivGreenButton>
            <SecondaryFocusGreenButton variant="outlined" startIcon={<FavoriteIcon />}>I fokus (UU)</SecondaryFocusGreenButton>
            <SecondaryDeaktiveGreenButton variant="outlined" disabled startIcon={<FavoriteIcon />}>Deaktivert</SecondaryDeaktiveGreenButton>
            </Stack>
        </>
    )
}

function IconRightSecondaryGreenButtonRow() {
    return (
        <>
            <Stack spacing={1} direction="row">
            <SecondaryNormalGreenButton variant="outlined" endIcon={<FavoriteIcon />}>Normal</SecondaryNormalGreenButton>
            <SecondaryHoverGreenButton variant="outlined" endIcon={<FavoriteIcon />}>Hover</SecondaryHoverGreenButton>
            <SecondaryAktivGreenButton variant="outlined" endIcon={<FavoriteIcon />}>Aktiv</SecondaryAktivGreenButton>
            <SecondaryFocusGreenButton variant="outlined" endIcon={<FavoriteIcon />}>I fokus (UU)</SecondaryFocusGreenButton>
            <SecondaryDeaktiveGreenButton variant="outlined" disabled endIcon={<FavoriteIcon />}>Deaktivert</SecondaryDeaktiveGreenButton>
            </Stack>
            </>
    )
}

function Buttons() {
    return (
        <>
            <Stack spacing={1} direction="row">
                <NormalGreenButtonRow/>
            </Stack>
            <br/>
            <Stack spacing={1} direction="row">
                <IconLeftGreenButtonRow/>
            </Stack>
            <br/>
            <Stack spacing={3} direction="row">
                <IconRightGreenButtonRow/>
            </Stack>
            <br/>
            <Stack spacing={3} direction="row">
                <SecondaryGreenButtonRow/>
            </Stack>
            <br/>
            <Stack spacing={3} direction="row">
                <IconLeftSecondaryGreenButtonRow/>
            </Stack>
            <br/>
            <Stack spacing={3} direction="row">
                <IconRightSecondaryGreenButtonRow/>
            </Stack>
        </>
    );
}

export {NormalGreenButtonRow, IconLeftGreenButtonRow, IconRightGreenButtonRow, SecondaryGreenButtonRow, IconLeftSecondaryGreenButtonRow, IconRightSecondaryGreenButtonRow};


