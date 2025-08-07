# @kvib/storybook

## 1.1.6

### Patch Changes

- 2f252ca: Header:

  - **BREAKING**: Endret props fra `children` til `content`og `dropdownMenuChildren` til `menuContent`
  - **BREAKING**: Fjernet `showChildrenInMenu` ettersom horisontalt content sjeldent passer med vertikalt, her bør heller `menuContent` tilpasses.
  - Lagt til en `contentMaxWidth` prop med default verdi `1140px`
  - Fikset en feil der slideren alltid ble vist, nå blir den styrt av `isOpen`
  - Når man åpner menyen på stor skjerm åpnes det en Drawer på høyre side
  - Dersom det er stor skjerm står det "Meny" sammen med ikonet

## 1.1.5

### Patch Changes

- 9c93a0b: Legg til title og titleLink i Header komponenten

## 1.1.4

### Patch Changes

- a37930a: Oppdatert Storybook til v.8.6.9

## 1.1.3

### Patch Changes

- 1724daa: Oppgraderer avhengigheter

## 1.1.2

### Patch Changes

- 13dfd78: Omdøp theme og fiks bruk av theme til datepickers

## 1.1.1

### Patch Changes

- 9eaa877: Setter default datepicker colorscheme på theme-nivå

## 1.1.0

### Minor Changes

- 0142d8f35: Footer-komponent lagt til

## 1.0.1

### Patch Changes

- 2d0afc623: Samkjører standard fargetema på tvers av komponenter
