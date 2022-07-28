---
id: dropDownID
title: (!)Nedtrekksmeny
description: Nedtrekksmeny som blir brukt i Kartverket sine løsninger
slug: /designsystem/komponenter/nedtrekksmeny
displayed_sidebar: designsystemSidebar
---
***OBS! Under kontruksjon:***
- ***Det er enda ikke støtte for å designe selve elementene i nedtrekksmenyen slik det står dokumentert i Figma KVIB. Dette styres av operativsystemet***
- ***Fokus- og hoverfunksjoner er ikke tatt hensyn til enda***
- ***Label er riktig***
- ***Expand-ikonet ikke er fra KVIB sin ikon-samling, men fra W3Schools. Dette er gjort for å kunne sette ikon-fargen til å være lik fargen på kanten***
- ***Bredden til nedtrekksmenyen endres ikke ved å legge inn et <code><div\></code>-element med fastsatt bredde. Må tvinge størrelsen ved å sette konkret tall for <code><select\></code>-elementet***

***


Her er KVIB sin nedtrekksmeny.
For å style <code><label\></code>-elementet, skal egne [CSS-klasser fra _Typografi_ benyttes.](../designTokens/typography.md#label)


<label class="label label--sml label--dropdown" for="dropdown">Overskrift </label>
<select class="dropdown "  id="dropdown">
        <option selected>Hjelpetekst</option>
        <option value="1">Første alternativ</option>
        <option value="2">Andre alternativ</option>
        <option value="3">Tredje alternativ</option>
</select>

<br/>

```markup
<label class="label label--sml label--dropdown" for="dropdown">Overskrift </label>
<select class="dropdown "  id="dropdown">
        <option selected>Hjelpetekst</option>
        <option value="1">Første alternativ</option>
        <option value="2">Andre alternativ</option>
        <option value="3">Tredje alternativ</option>
</select>
```






