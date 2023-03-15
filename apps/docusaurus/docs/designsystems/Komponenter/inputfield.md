---
id: inputfeltID
title: Inputfelt
description: Inputfelter som blir brukt i Kartverket sine løsninger
slug: /designsystem/komponenter/inputfelt
displayed_sidebar: designsystemSidebar
sidebar_position: 4
---

Inputfeltene i KVIB bruker CSS-klassen <code>.inputField</code>. Denne klassen har en bredde satt til 100%, slik at bredden på inputfeltet tilpasses ved å legge <code><div\></code>-klasse _inputField\_\_wrapper_ sammen med <code><input\></code>, <code><label\></code>, <code><span\></code> og <code><small\></code> i et <code><div\></code>-element med en bestemt lengde.
For å style <code><label\></code> og <code><small\></code>-elementet, skal egne [CSS-klasser fra _Typografi_ benyttes.](../designTokens/typography.mdx#label)

## Aktivt inputfelt

Under er et eksempel på et aktivt inputfelt. Brukeren skal få feilmelding dersom feil input mottas, samtidig som utseende skal endres til å være slik som nederste inputfeltet.
Dette kan løses med blant annet Javascript. Det er foreløpig ingen eksempelkode på dette i KVIB.

<div class="kv-form__input__wrapper">
    <label class="label label--sml" for="inputFieldID">Skriv heia</label>
    <input class="kv-form__input" type="text" id="inputFieldID" placeholder="Aktivt tekstfelt"/>
</div>

<br/>

<div class="kv-form__input__wrapper">
    <label class="label label--sml" for="invalidInputFieldID">Skriv heia</label>
    <input class="kv-form__input" type="text" id="invalidInputFieldID" placeholder="Feilmelding" required/>
    <span class="kv-exclamation"><i class="material-symbols-outlined">exclamation</i></span>
    <small class="kv-form__input__helper__text detail detail--sml">Feilmelding tekst</small>
</div>

<br/>

```markup
<div class="kv-form__input__wrapper">
    <label class="label label--sml" for="inputFieldID">Skriv heia</label>
    <input class="kv-form__input" type="text" id="inputFieldID" placeholder="Aktivt tekstfelt"/>
</div>

<div class="kv-form__input__wrapper">
    <label class="label label--sml" for="invalidInputFieldID">Skriv heia</label>
    <input class="kv-form__input" type="text" id="invalidInputFieldID" placeholder="Feilmelding" required/>
    <span class="kv-exclamation"><i class="material-symbols-outlined">exclamation</i></span>
    <small class="kv-form__input__helper__text detail detail--sml">Feilmelding tekst</small>
</div>
```

## Deaktivert inputfelt

Her er et eksempel på et deaktivert inputfelt, både med og uten hjelpetekst.

<div class="kv-form__input__wrapper">
     <label class="label label--sml" for="disabledInputFieldText">Skriv heia</label>
    <input class="kv-form__input" type="text" id="disabledInputFieldText" placeholder="Jeg er deaktivert" disabled/>
</div>

<br/>

<div class="kv-form__input__wrapper">
     <label class="label label--sml" for="disabledInputFieldNoText">Skriv heia</label>
    <input class="kv-form__input" type="text" id="disabledInputFieldNoText" disabled/>
</div>

<br/>

```markup
<div class="kv-form__input__wrapper">
     <label class="label label--sml" for="disabledInputFieldText">Skriv heia</label>
    <input class="kv-form__input" type="text" id="disabledInputFieldText" placeholder="Jeg er deaktivert" disabled/>
</div>

<div class="kv-form__input__wrapper">
     <label class="label label--sml" for="disabledInputFieldNoText">Skriv heia</label>
    <input class="kv-form__input" type="text" id="disabledInputFieldNoText" disabled/>
</div>
```
