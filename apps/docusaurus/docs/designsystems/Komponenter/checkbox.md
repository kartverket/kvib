---
id: checkboxID
title: Avmerkingsbokser
description: Avmerkingsbokser som blir brukt i Kartverket sine løsninger
slug: /designsystem/komponenter/checkbox
displayed_sidebar: designsystemSidebar
sidebar_position: 2
---

***OBS! NVDA har en bug som gjør at skjermleseren ikke klarer å lese av riktig state på avmerkingsboksen. Den er derfor
testet med Chromevox der riktig state blir lest***

***

En avmerkingsboks gir brukeren muligheten til flervalg. Avmerkingsbokser skal følges av en primærknapp. Feilmelding
avmerkingsboks skal brukes for å visualisere feil i avmerkingen, dersom dette har skjedd (f.eks. ikke krysset av for et
alternativ).

For å style <code><label\></code>-elementet, skal egne
[CSS-klasser fra _Typografi_ benyttes.](../designTokens/typography.mdx#label)

## Normal avmerkingsboks

Avmerkingsboksen får fokus når den velges med tastaturet.

<div class="component__display">
    <div class="kv-checkbox">
        <input type="checkbox" id="checkbox_1"/>
        <label class="detail detail--sml" for="checkbox_1">Input tekst</label>
    </div>
</div>

```markdown 
<div class="kv-checkbox">
    <input type="checkbox" id="checkbox_1"/>
    <label class="detail detail--sml" for="checkbox_1">Input tekst</label>
</div>
```

## Eksempel for flervalg

<div class="component__display__column">
    <div class="kv-checkbox">
        <input type="checkbox" id="checkbox_3"/>
        <label class="detail detail--sml" for="checkbox_3">Send meg eposter om... (Valgfritt)</label>
    </div>
    <div class="kv-checkbox">
        <input type="checkbox" id="checkbox_4"/>
        <label class="detail detail--sml" for="checkbox_4">Jeg aksepterer vilkårene for...</label>
    </div>
    <div class="kv-checkbox">
        <input type="checkbox" id="checkbox_5"/>
        <label class="detail detail--sml" for="checkbox_5">Huk av alle</label>
    </div>
</div>

```markdown
    <div class="kv-checkbox">
        <input type="checkbox" id="checkbox_3"/>
        <label class="detail detail--sml" for="checkbox_3">Send meg epost om... (Valgfritt)</label>
    </div>
    <div class="kv-checkbox">
        <input type="checkbox" id="checkbox_4"/>
        <label class="detail detail--sml" for="checkbox_4">Jeg aksepterer vilkårene for...</label>
    </div>
    <div class="kv-checkbox">
        <input type="checkbox" id="checkbox_5"/>
        <label class="detail detail--sml" for="checkbox_5">Huk av alle</label>
    </div>
```

## Feilmelding avmerkingsboks

Følgende avmerkingsboks får feilmeldingsfarge og en feilmelding hvis ett av alternativene må være valgt før bruker kan
gå videre.

<div class="component__display__column">
    <div class="kv-checkbox">
        <input type="checkbox" id="checkbox_6" required/>
        <label class="detail detail--sml" for="checkbox_6">Jeg aksepterer vilkårene for...</label>
        <div class="error__box">
            <i class="material-symbols-outlined">exclamation</i>
            <small>Du må huke av dette feltet</small>
        </div>
    </div>
</div>
<br/>
<br/>

```markdown
<div class="kv-checkbox">
    <input type="checkbox" id="checkbox_6" required/>
    <label class="detail detail--sml" for="checkbox_6">Jeg aksepterer vilkårene for...</label>
    <div class="error__box">
        <i class="material-symbols-outlined">exclamation</i>
        <small>Du må huke av dette feltet</small>
    </div>
</div>
```
