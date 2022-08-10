---
id: structureID
title: Teknisk struktur
description: Prosjektstrukturen til KVIB
slug: /omKvib/struktur
displayed_sidebar: OmKvibSidebar
---

## Teknisk struktur

Her kommer det en beskrivelse av den tekniske strukturen til KVIB. KVIB er bygget med dokumentasjonsverktøyet Docusaurus. [Her finner du dokumentasjonen til Docusaurus. <span class="material-symbols-outlined">open_in_new</span>](https://docusaurus.io/docs)

### Prosjektstrukturen til KVIB

Slik ser filtreet til KVIB ut på et overordnet nivå:

```markdown 
kvib
├─ .docusaurus
├─ .github
│  ├─ workflows
├─ blog
│  ├─ 2022-07-08-version-[0.0.5].md
├─ docs
│  ├─ designsystems
│  │  ├─ designTokens
│  │  ├─ Komponenter
│  ├─ omKvib
├─ node_modules
├─ src
│  ├─css
│  ├─ docusaurus_custom_css
│  ├─ html
├─ static
│  ├─ gif
│  ├─ img
│  ├─ .nojekyll
├─ .gitignore
├─ babel.config.js
├─ docusaurus.config.js
├─ package.json
├─ package-lock.json
├─ README.md
├─ sidebars.js
├─ tsconfig.json
```

### CSS

#### CSS-styling av komponenter og design tokens

CSS-filer til komponenter og design tokens ligger under _static/css_. Dersom du skal lage en ny _.css_ fil, må du lenke filen i _main.css_ som vist under:

```markdown title='static/css/main.css'
/* HovedCSS */
@import 'farger.css';
@import 'buttons.css';
```

#### CSS-styling av dokumentasjonssider

CSS-filene for styling av selve dokumentasjonssiden ligger under _src/docusaurus_custom_css_. Husk å lenke filene i _custom.css_:
```markdown title='src/docusaurus_custom_css/custom.css'
@import './filnavn.css';
```

I _docusaurus.config.js_ er _custom.css_ lenket under <code>theme</code> i <code>presets</code> for at eget design i dokumentasjonen skal tas i bruk.

### Dokumentasjon

Dokumentasjon ligger under docs-mappen som _.md_ filer. Herunder ligger dokumentasjon av komponenter og design tokens under _docs/designsystems_, og dokumentasjon om KVIB under _docs/omKvib_. Per 28.07.22 støtter ikke _.md_ <code><script\></code>-elementet. Av den grunn finnes det en mappe for HTML-filer under _src/html_, for å vise oppførselen til komponentene.

Se [Innhold og struktur i dokumentasjon](../omKvib/content.md) for hvordan nye komponenter og design tokens skal dokumenteres.

### docusaurus.config.js

Denne seksjonen omhandler innholdet i _docusaurus.config.js_. I denne filen er det mulig å endre utseende til KVIB og distribusjon av nettsiden, samt eksternt innhold som bilder hentes inn.


#### Navigasjonsmeny og footer

Navigasjonsmenyen øverst og footer nederst på siden kan endre utseende ved å redigere innholdet i <code>themeConfig</code> i _docusaurus.config.js_. Merk at visse elementer i kildekoden nedenfor er fjernet for å gi mer oversikt.

```markdown title='docusaurus.config.js'
themeConfig:
/** @type {import('@docusaurus/preset-classic').ThemeConfig} */
      ({
        /* utseende for navigasjonsmeny og footer*/
        colorMode: {
          defaultMode: 'light',
          disableSwitch: true,              /* gjemmer knappen for dark/lightmode */
          respectPrefersColorScheme: false, /* endre til true for å sette egne brukerpreferanser */
        },
        /* EKSEMPEL - Legge inn element i navigasjonsmenyen */
        navbar: {
          items: [
            {
              type: 'doc',
              docId: 'folder/dokumentID',
              position: 'LEFT, RIGHT, CENTER',
              label: 'NAVN PÅ SIDEN',
            },
            {
              type: 'doc',
              docId: 'designsystems/sizesID',
              position: 'left',
              label: 'Designsystem',
            },
            /* Alternativt kan denne syntaksen brukes hvis det kun skal navigeres til én side */
            {to: 'SIDE SOM SKAL NAVIGERES TIL', label: 'NAVN PÅ NAVIGASJONSELEMENT', position: 'LEFT, RIGHT, CENTER'},
            {to: 'blog', label: 'Versjoner', position: 'left'},
          ],
        },
        footer: {
          style: 'dark',
          links: [
            {
              title: 'Docs',
              items: [
                {
                  label: 'KVIB Figma',
                  to: '/',
                },
              ],
            },
            {
              title: 'More', /* navn på navigasjonselement */
              /* Her legges elementer under 'More' */
              items: [
                {
                  label: 'GitHub',
                  href: '#',
                },
              ],
            },
          ],
        },
        prism: {
          theme: CodeTheme,  /* her settes fargene på kodeblokkene, se variabel CodeTheme øverst i filen for tema som hentes ut */
        },
      }),
};
```

#### Sidepaneler
KVIB har et høyre og et venstre sidepanel. Høyre sidepanel genereres når overskriftene <code><h2\></code> (##) og <code><h3\></code> (###) legges inn i _.md_ filen.
Venstre sidepanel settes inn under <code>preset</code> og <code>sidebarPath</code> i _docusaurus.config.js_. Dette sidepanelet endres i filen _sidebars.js_. Docusaurus kan autogenerere et sidepanel fra filstrukturen eller det kan konstrueres manuelt.
Ved autogenerert sidepanel vil filer og mapper hentes fra filtreet, og de gjeldene navnene vil benyttes som titler i sidepanelet. Navn på mapper kan ikke inneholde mellomrom. Dette er for å eventuelt kunne benytte lenker til andre sider i dokumentasjon.
Ved manuell konstruksjon er det mer frihet ved navngivning, og sidepanelet kan lettere tilpasses.

Under følger et eksempel på et autogenerert venstre sidepanel:
```markdown title='sidebars.js'
const sidebars = {
  /* NavnPåSidepanel: [{type: 'autogenerated', dirName:'FOLDER INNHOLDET LIGGER UNDER'}] */

  /*--EKSEMPEL--*/
  OmKvibSidebar: [{type: 'autogenerated', dirName:'omKvib'}]
}
```

Under følger et eksempel på et manuelt kontruert venstre sidepanel:
```markdown title='sidebars.js'
/*---EKSEMPEL--- 
  Ett nivå i sidepanelet.
*/

const sidebars = {
    designsystemSidebar: [
    {
      type: 'doc',
      id:'designsystems/sizesID',
      label: 'Elementstørrelser', // Label til sidebar
    }
}

/*---EKSEMPEL---
  Flere nivåer i sidepanelet.
*/

const sidebars = {
 designsystemSidebar: [
    /* NIVÅ 1 */
    {
      type: 'category',
      label: 'Komponenter', // Label til sidebar
      link: {
        type: 'generated-index',
        title: 'Komponenter',
        description: 'Her er en oversikt over utvalget av komponenter i KVIB.' +
            ' Disse er bygget er blant annet bygget opp ved bruk av desing tokens fra KVIB, eksempelvis farger og typografi. I dokumentasjonen følger beskrivelse av komponenten og bruksområde, sammen med kodeeksempler. ',
        slug: '/designsystem/Komponenter',
      },
      items: [
        /* Dokument som skal være under 'Design tokens'. For å hente .md-fil; skriv path inkludert IDen.
        'folder/folder/dokumentID' */
        'designsystems/Komponenter/checkboxID',
        'designsystems/Komponenter/inputfeltID',
        'designsystems/Komponenter/dropDownID',
        'designsystems/Komponenter/sliderID',
        'designsystems/Komponenter/radiobuttonID',
        'designsystems/Komponenter/sideelementerID',
        'designsystems/Komponenter/navID',
        'designsystems/Komponenter/tableID',
        ],
        /* NIVÅ 2 */
        {
          type: 'category',
          label: 'Knapper', // Label til sidebar
          items: [
            'designsystems/Komponenter/Knapper/grønnknappID',
            'designsystems/Komponenter/Knapper/blåknappID',
            'designsystems/Komponenter/Knapper/ikonknappID',
            'designsystems/Komponenter/Knapper/disabledknappID',
          ],
        },
      ],
    },
  ],

};

```

#### Ikoner og bilder

Ikonene i KVIB hentes via <code>stylesheets</code> i _docusaurus.config.js_ slik:
```markdown title='docusaurus.config.js'
stylesheets: [
    {
      href: 'https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200',
    },
  ],
```

Bilder og logoer ligger i static-mappen, blant annet Kartverkets logoer og bilder som brukes til dokumentasjon av komponenter med Javascript. Denne mappen lenkes til i _docusaurus.config.js_ slik:
```markdown title='docusaurus.config.js'
  staticDirectories: ['src/js', 'static'],
```