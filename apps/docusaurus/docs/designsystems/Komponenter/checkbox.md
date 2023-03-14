---
id: checkboxID
title: Avmerkingsbokser
description: Avmerkingsbokser som blir brukt i Kartverket sine løsninger
slug: /designsystem/komponenter/checkbox
displayed_sidebar: designsystemSidebar
sidebar_position: 2
---

**_OBS! NVDA har en bug som gjør at skjermleseren ikke klarer å lese av riktig state på avmerkingsboksen. Den er derfor
testet med Chromevox der riktig state blir lest_**

---

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

## Feilmelding avmerkingsboks

Følgende avmerkingsboks får feilmeldingsfarge og en feilmelding hvis ett av alternativene må være valgt før bruker kan
gå videre.

<div class="component__display__column">
    <div class="kv-checkbox">
        <input type="checkbox" id="checkbox_2" required/>
        <label class="detail detail--sml" for="checkbox_2">Jeg aksepterer vilkårene for...</label>
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

## Eksempler

### Eksempel for feilmelding

Marker hvilket felt som MÅ avhukes

<div class="component__display__column">
    <div class="kv-checkbox">
        <input type="checkbox" id="checkbox_3"/>
        <label class="detail detail--sml" for="checkbox_3">Jeg ønsker å få tilsendt nyhetsbrevet</label>
    </div>
    <div class="kv-checkbox">
        <input type="checkbox" id="checkbox_4" required/>
        <label class="detail detail--sml" for="checkbox_4">Jeg aksepterer vilkårene</label>
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
    <input type="checkbox" id="checkbox_3"/>
    <label class="detail detail--sml" for="checkbox_3">Jeg ønsker å få tilsendt nyhetsbrevet</label>
</div>
<div class="kv-checkbox">
    <input type="checkbox" id="checkbox_4"/>
    <label class="detail detail--sml" for="checkbox_4">Jeg aksepterer vilkårene</label>
    <div class="error__box">
        <i class="material-symbols-outlined">exclamation</i>
        <small>Du må huke av dette feltet</small>
    </div>
</div>
```

### Eksempel for "velg minst én"

"Velg minst Én" er forskjellig fra radioknapper, som lar deg bare velge en.

Hvordan kommer du deg til jobb?

<div class="component__display__column">
    <div class="kv-checkbox">
        <input type="checkbox" id="checkbox_5" required/>
        <label class="detail detail--sml" for="checkbox_5">Til fots</label> 
    </div> 
    <div class="kv-checkbox">
        <input type="checkbox" id="checkbox_6" required/>
        <label class="detail detail--sml" for="checkbox_6">Sykkel</label> 
    </div> 
    <div class="kv-checkbox">
        <input type="checkbox" id="checkbox_7" required/>
        <label class="detail detail--sml" for="checkbox_7">Kollektivt</label> 
    </div> 
    <div class="kv-checkbox">
        <input type="checkbox" id="checkbox_8" required/>
        <label class="detail detail--sml" for="checkbox_8">Bil</label> 
        <div class="error__box">
            <i class="material-symbols-outlined">exclamation</i>
            <small>Du må velge minst en</small>
        </div>
    </div> 
</div>

<br/>

```markdown
<div class="kv-checkbox">
    <input type="checkbox" id="checkbox_5" required/>
    <label class="detail detail--sml" for="checkbox_5">Til fots</label> 
</div> 
<div class="kv-checkbox">
    <input type="checkbox" id="checkbox_6" required/>
    <label class="detail detail--sml" for="checkbox_6">Sykkel</label> 
</div> 
<div class="kv-checkbox">
    <input type="checkbox" id="checkbox_7" required/>
    <label class="detail detail--sml" for="checkbox_7">Kollektivt</label> 
</div> 
<div class="kv-checkbox">
   <input type="checkbox" id="checkbox_8" required/>
   <label class="detail detail--sml" for="checkbox_8">Bil</label> 
   <div class="error__box">
        <i class="material-symbols-outlined">exclamation</i>
        <small>Du må velge minst en</small>
    </div>
</div>
```
