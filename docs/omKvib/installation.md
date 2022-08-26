---
id: installationID
title: Implementering av KVIB
description: Ta i bruk Kvib
slug: /omKvib/implementering
displayed_sidebar: OmKvibSidebar
---
## Installasjon av KVIB
KVIB kan tas i bruk ved å legge til link eller url import i HTML/CSS fil eller ved å laste ned npm pakken.
KVIB er delt i 2 npm pakker, <code>kvib-react-components</code> for KVIB React komponenter og <code>kvib-css</code> for KVIB CSS styling.

### HTML link
Importer KVIB HTML link:

```markdown
 <link rel="stylesheet" href='https://kartverket.github.io/kvib/css/main.css'>
```

### CSS import
Importer KVIB i index.css i prosjektet: 

```markdown
@import url("https://kartverket.github.io/kvib/css/main.css");
```

### Installasjon av KVIB NPM Package

#### (!)KVIB React components
***OBS! KVIB React Components er under konstruksjon:***

For å laste ned og ta i bruk KVIB React komponenter, skriv følgende kommando i terminalen:

```markdown
npm i @kartverket/kvib-react-components
```

#### KVIB-CSS

For å laste ned og ta i bruk KVIB-CSS, skriv følgende kommando i terminalen:

```markdown
npm i @kartverket/kvib-css
```

Importer eller legg til link til biblioteket i CSS eller HTML filen i prosjektet.

- I HTML fil:

```markdown
<link rel="stylesheet" href="PATH/node_modules/@kartverket/kvib/main.css">
```

- I CSS fil:

```markdown
@import 'PATH/node_modules/@kartverket/kvib/main.css';
```