---
id: inputfeltID
title: Inputfelt
description: Inputfelter som blir brukt i Kartverket sine løsninger
slug: /designsystem/komponenter/inputfelt
displayed_sidebar: designsystemSidebar
sidebar_position: 4
---

Inputfeltene i KVIB bruker CSS-klassen <code>.inputField</code>. Denne klassen har en bredde satt til 100%, slik at bredden på inputfeltet tilpasses ved å legge <code><div\></code>-klasse _inputField__wrapper_ sammen med <code><input\></code>, <code><label\></code>, <code><span\></code> og <code><small\></code> i et <code><div\></code>-element med en bestemt lengde.
For å style <code><label\></code> og <code><small\></code>-elementet, skal egne [CSS-klasser fra _Typografi_ benyttes.](../designTokens/typography.mdx#label)

## Aktivt inputfelt

Under er et eksempel på et aktivt inputfelt. Brukeren skal få feilmelding dersom feil input mottas, samtidig som utseende skal endres til å være slik som nederste inputfeltet.
Dette kan løses med blant annet Javascript. Det er foreløpig ingen eksempelkode på dette i KVIB.

<div class="inputField__wrapper">
    <input class="inputField" type="text" id="inputFieldID" placeholder="Aktivt tekstfelt"/>
    <label class="label label--sml" for="inputFieldID">Skriv heia</label>
</div>

<div class="inputField__wrapper">
    <input class="inputField" type="text" id="invalidInputFieldID" placeholder="Feilmelding" required/>
    <label class="label label--sml" for="invalidInputFieldID">Skriv heia</label>
    <span class="exclamation"><i class="material-symbols-outlined">exclamation</i></span>
    <small class="inputField__helper__text detail detail--sml">Feilmelding tekst</small>
</div>

<br/>

```markup
<div class="inputField__wrapper">
    <input class="inputField" type="text" id="inputFieldID" placeholder="Aktivt tekstfelt"/>
    <label class="label label--sml" for="inputFieldID">Skriv heia</label>
</div>

<div class="inputField__wrapper">
    <input class="inputField" type="text" id="invalidInputFieldID" placeholder="Feilmelding" required/>
    <label class="label label--sml" for="invalidInputFieldID">Skriv heia</label>
    <span class="exclamation"><i class="material-symbols-outlined">exclamation</i></span>
    <small class="inputField__helper__text detail detail--sml">Feilmelding tekst</small>
</div>
```

## Deaktivert inputfelt

Her er et eksempel på et deaktivert inputfelt, både med og uten hjelpetekst.


<div class="inputField__wrapper">
    <input class="inputField input__disabled" type="text" id="disabledInputFieldPh" placeholder="Jeg er deaktivert" disabled/>
    <label class="label label--sml" for="disabledInputFieldPh">Skriv heia</label>
</div>

<div class="inputField__wrapper">
    <input class="inputField input__disabled" type="text" id="disabledInputField" disabled/>
    <label class="label label--sml" for="disabledInputField">Skriv heia</label>
</div>

```markup
<div class="inputField__wrapper">
    <input class="inputField input__disabled" type="text" id="disabledInputFieldPh" placeholder="Jeg er deaktivert" disabled/>
    <label class="label label--sml" for="disabledInputFieldPh">Skriv heia</label>
</div>

<div class="inputField__wrapper">
    <input class="inputField input__disabled" type="text" id="disabledInputField" disabled/>
    <label class="label label--sml" for="disabledInputField">Skriv heia</label>
</div>
```




