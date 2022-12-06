---
id: sideelementerID
title: Sideelementer
description: Sideelementer som blir brukt i Kartverket sine løsninger
slug: /designsystem/komponenter/sideelementer
displayed_sidebar: designsystemSidebar
---

## Opplastningsmoduler og elementer

### Sirkulært opplastningselement

Det sirkulære opplastningselementet skal brukes på små flater og som ikon.
I elementet under er <code>loader--size</code> 5.625rem / 90px. Størrelsen endres av designer for hvert prosjekt.

<div class="devsizes-grid">
    <div class="kv-loader kv-loader--blue loader--size"></div>
    <div class="kv-loader kv-loader--green loader--size"></div>
    <div class="loader__background__box">
         <div class="kv-loader kv-loader--white loader--size loader--pos--white"></div>
    </div>
</div>
<br/>

```markdown
<div class="kv-loader kv-loader--blue loader--size"></div>
<div class="kv-loader kv-loader--green loader--size"></div>
<div class="kv-loader kv-loader--white loader--size"></div>
```

## Lineært opplastningselement

Lineært opplastningselement eksemplet under bruker <code>class="progressbar__container"</code> for å sette størrelsen på
elementet.
I dette tilfellet, er container satt på <code>width: 50%;</code>

### Lineært opplastningselement uten verdi

Lineært opplastningselementet bruker klassen <code>progressbar</code>.

<div class="progressbar__container">
    <div class="kv-progressbar__wrapper">
        <div class="kv-progressbar progressbar--demo"></div>
    </div>
</div>
<br/>

```markdown
<div class="progressbar__container">
    <div class="kv-progressbar__wrapper">
        <div class="kv-progressbar progressbar--demo"></div>
    </div>
</div>
```

### Lineært opplastningselement med verdi

Lineært opplastningselementet bruker <code>::after</code> selector for å sette inn verdi og farge på fyll.
Eksempel: <code>.progressbar--demo::after {width: 50%; background: var(--blaa_moerk);}</code>

I eksemplet under er <code>progressbar--demo</code> animert til å bytte <code>width</code> fra 0% til 100%. Det gjelder
også <code>progressbar--label</code> med hensyn til endring av verdi.

<div class="progressbar__container">
    <div class="kv-progressbar__wrapper">
        <div id="demo" class="kv-progressbar progressbar--demo"></div>
        <label for="demo" class="detail detail--xs progressbar__label"></label>
    </div>
</div>
<br/>

```markdown
<div class="progressbar__container">
    <div class="kv-progressbar__wrapper">
        <div id="demo" class="kv-progressbar progressbar--demo"></div>
        <label for="demo" class="detail detail--xs progressbar__label"></label>
    </div>
</div>
```

## (!)Filopplastningselementer 
***OBS! Under konstruksjon.***

***




