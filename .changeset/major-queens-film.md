---
"@kvib/react": major
"@kvib/storybook": patch
---

Header:

- **BREAKING**: Endret props fra `children` til `content`og `dropdownMenuChildren` til `menuContent`
- **BREAKING**: Fjernet `showChildrenInMenu` ettersom horisontalt content sjeldent passer med vertikalt, her bør heller `menuContent` tilpasses.
- Lagt til en `contentMaxWidth` prop med default verdi `1140px`
- Fikset en feil der slideren alltid ble vist, nå blir den styrt av `isOpen`
- Når man åpner menyen på stor skjerm åpnes det en Drawer på høyre side
- Dersom det er stor skjerm står det "Meny" sammen med ikonet
