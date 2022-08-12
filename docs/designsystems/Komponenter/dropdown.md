---
id: dropDownID
title: (!)Nedtrekksmeny
description: Nedtrekksmeny som blir brukt i Kartverket sine løsninger
slug: /designsystem/komponenter/nedtrekksmeny
displayed_sidebar: designsystemSidebar
---
***OBS! Under kontruksjon:***
- ***Det er enda ikke støtte for å designe selve elementene i nedtrekksmenyen slik det står dokumentert i Figma KVIB. Dette styres av operativsystemet***
***

Her er KVIB sin nedtrekksmeny.
For å style <code><label\></code>-elementet, skal egne [CSS-klasser fra _Typografi_ benyttes.](../designTokens/typography.mdx#label)

<label class="label label--sml label--dropdown" for="dropdown">Overskrift</label>
<div class="custom-select">
<select id="dropdown">
        <option selected>Hjelpetekst</option>
        <option value="1">Første alternativ</option>
        <option value="2">Andre alternativ</option>
        <option value="3">Tredje alternativ</option>
</select>
</div>
<br/>

```markup
<label class="label label--sml label--dropdown" for="dropdown">Overskrift </label>
<select class="custom-select" id="dropdown">
        <option selected>Hjelpetekst</option>
        <option value="1">Første alternativ</option>
        <option value="2">Andre alternativ</option>
        <option value="3">Tredje alternativ</option>
</select>
```

<script src="./static/js/dropdown.js"></script>




