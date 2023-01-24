---
id: detailsID
title: Utvidbart panel
description: Utvidbart panel som blir brukt i Kartverket sine løsninger
slug: /designsystem/komponenter/utvidbar-panel
displayed_sidebar: designsystemSidebar
---

## Utvidbart panel

Utvidbart panel er laget med ``<details>``  og ``<summary>`` elementet.
Størrelsen endres ved å sette panelet i et <code>container</code> med ønsket <code>width</code>.

* Utvidbart panel er greit å bruke for å redusere overveldene innhold og scrolling. Det kan hjelpe brukeren med å få oversikt.

* Selv om utvidbart panel kan være fint for å presentere komplekst innhold, passer det ikke til alt.
Ikke gjem kjerneinnhold som brukeren lurer på. Hvis brukerne åpner alle fanene kan det være et tydelig tegn på  å la 
innholdet være åpent. Da reduserer man klikk og det kan være enklere for brukeren å scrolle nedover siden.

* Husk, det er mange myter om at brukere “ikke scroller nedover“. Så lenge innholdet oppleves relevant er bruker villig 
til å scrolle videre - Opplever du at det er mye innhold - se om dere kan gjøre en innholdsjobb i steden for. 
Når det er sagt, test ut og bruk komponenten til det behovet du ønsker å møte.

<h1 class="heading heading__h1--s">Tittel</h1>
<details class="kv-expandable">
    <summary class="kv-expandable__title">Tekst</summary>
    <p class="detail detail--sml">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur doloremque 
        eligendi, fuga magni mollitia nemo possimus praesentium quod rerum sint. Aut corporis eum, nihil non quaerat 
        qui quis tenetur voluptatem.</p>
</details>

<br/>

```markdown
<h1 class="heading heading__h1--s">Tittel</h1>
<details class="kv-expandable">
    <summary class="kv-expandable__title">Tekst</summary>
    <p class="detail detail--sml">Beskrivelse</p>
</details>
```

## Utvidbart panel set

Vi kan opprette et panel set ved å legge til flere ``<details>`` elementer.

<h1 class="heading heading__h1--s">Tittel</h1>
<details class="kv-expandable">
    <summary class="kv-expandable__title">Tekst</summary>
    <p class="detail detail--sml">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur doloremque 
        eligendi, fuga magni mollitia nemo possimus praesentium quod rerum sint. Aut corporis eum, nihil non quaerat 
        qui quis tenetur voluptatem.</p>
</details>
<details class="kv-expandable">
    <summary class="kv-expandable__title">Tekst</summary>
    <p class="detail detail--sml">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur doloremque 
        eligendi, fuga magni mollitia nemo possimus praesentium quod rerum sint. Aut corporis eum, nihil non quaerat 
        qui quis tenetur voluptatem.</p>
</details>
<details class="kv-expandable">
    <summary class="kv-expandable__title">Tekst</summary>
    <p class="detail detail--sml">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur doloremque 
        eligendi, fuga magni mollitia nemo possimus praesentium quod rerum sint. Aut corporis eum, nihil non quaerat 
        qui quis tenetur voluptatem.</p>
</details>
<details class="kv-expandable">
    <summary class="kv-expandable__title">Tekst</summary>
    <p class="detail detail--sml">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur doloremque 
        eligendi, fuga magni mollitia nemo possimus praesentium quod rerum sint. Aut corporis eum, nihil non quaerat 
        qui quis tenetur voluptatem.</p>
</details>

<br/>

```markdown
<h1 class="heading heading__h1--s">Tittel</h1>
<details class="kv-expandable">
    <summary class="kv-expandable__title">Tekst</summary>
    <p class="detail detail--sml">Beskrivelse</p>
</details>
<details class="kv-expandable">
    <summary class="kv-expandable__title">Tekst</summary>
    <p class="detail detail--sml">Beskrivelse</p>
</details>
<details class="kv-expandable">
    <summary class="kv-expandable__title">Tekst</summary>
    <p class="detail detail--sml">Beskrivelse</p>
</details>
<details class="kv-expandable">
    <summary class="kv-expandable__title">Tekst</summary>
    <p class="detail detail--sml">Beskrivelse</p>
</details>
```