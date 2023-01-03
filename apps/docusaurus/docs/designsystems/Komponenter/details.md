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

<h1 class="heading heading__h1--s">Tittel</h1>
<details class="kv-expandable">
    <summary class="kv-expandable__title">Tekst</summary>
    <p class="detail detail--sml">Beskrivelse</p>
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
    <p>Beskrivelse</p>
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

<br/>

```markdown
<h1 class="heading heading__h1--s">Tittel</h1>
<details class="kv-expandable">
    <summary class="kv-expandable__title">Tekst</summary>
    <p>Beskrivelse</p>
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