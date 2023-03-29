---
id: standardKnappID
title: Standard knapper
description: Standard knapper
---

Vi har to sett med farger. Vi har et primærsett (grønn) og et sekundærsett (blått). Vår palett er inspirert av jordtoner. Vi har valgt sekundærsettet som er blått på karttjenester og forvaltningstjenester for å ha kontrast mot kartet.

Løsninger som skal se ut som en del av [kartverket.no](http://kartverket.no) skal bruke grønn.

## Farger

Det finnes to ulike farger: grønn og blå.

<div class="buttons--section">
<button class="kvib-button kvib-button--primary kvib-button--md kvib-button--green">Grønn</button>
<button class="kvib-button kvib-button--primary kvib-button--md kvib-button--blue">Blå</button>
</div>

```markup
<button class="kvib-button kvib-button--primary kvib-button--md kvib-button--green">Grønn</button>
<button class="kvib-button kvib-button--primary kvib-button--md kvib-button--blue">Blå</button>
```

## Størrelser

Det finnes to ulike størrelser: small og medium.

<div class="buttons--section">
<button class="kvib-button kvib-button--primary kvib-button--green kvib-button--sm">Small</button>
<button class="kvib-button kvib-button--primary kvib-button--green kvib-button--md">Medium</button>
</div>

```markup
<button class="kvib-button kvib-button--primary kvib-button--green kvib-button--sm">Small</button>
<button class="kvib-button kvib-button--primary kvib-button--green kvib-button--md">Medium</button>
```

## Varianter

Det finnes tre ulike varianter: primær, sekundær og tertiær.

<div class="buttons--section">
<button class="kvib-button kvib-button--green kvib-button--md kvib-button--primary">Primær</button>
<button class="kvib-button kvib-button--green kvib-button--md kvib-button--secondary">Sekundær</button>
<button class="kvib-button kvib-button--green kvib-button--md kvib-button--tertiary">Tertiær</button>
</div>

```markup
<button class="kvib-button kvib-button--green kvib-button--md kvib-button--primary">Primær</button>
<button class="kvib-button kvib-button--green kvib-button--md kvib-button--secondary">Sekundær</button>
<button class="kvib-button kvib-button--green kvib-button--md kvib-button--tertiary">Tertiær</button>
```

## Disabled

<div class="buttons--section">
<button class="kvib-button kvib-button--primary kvib-button--md kvib-button--blue is-disabled" disabled>Disabled</button>
</div>

```markup
<button class="kvib-button kvib-button--primary kvib-button--md kvib-button--blue is-disabled" disabled>Disabled</button>
```

## Lasting

<div class="buttons--section">
<button class="kvib-button kvib-button--primary kvib-button--md kvib-button--green is-loading" disabled><span className="kvib-button__spinner"></span></button>
<button class="kvib-button kvib-button--primary kvib-button--md kvib-button--green is-loading" disabled><span className="kvib-button__spinner"></span><span className="kvib-button__loading-text">Laster</span></button>
</div>

```markup
<button class="kvib-button kvib-button--primary kvib-button--md kvib-button--green is-loading" disabled><span className="kvib-button__spinner"></span></button>
<button class="kvib-button kvib-button--primary kvib-button--md kvib-button--green is-loading" disabled><span className="kvib-button__spinner"></span><span className="kvib-button__loading-text">Laster</span></button>
```

## Med ikoner

Det er mulighet for å ha ikon på begger sider av knappe-teksten.

[Se dokumentasjonssiden for ikoner](../../designTokens/icons.md) for å designe <code><span\></code>-elementet.

<div class="buttons--section">
<button class="kvib-button kvib-button--primary kvib-button--green kvib-button--md"><span class="material-symbols-outlined material-symbols-outlined--filled">add</span><span class="kvib-button__text">Ikon på venstre side</span></button>
<button class="kvib-button kvib-button--primary kvib-button--green kvib-button--md"><span class="kvib-button__text">Ikon på høyre side</span><span class="material-symbols-outlined material-symbols-outlined--filled">add</span></button>
</div>

```markup
<button class="kvib-button kvib-button--primary kvib-button--green kvib-button--md"><span class="material-symbols-outlined material-symbols-outlined--filled">add</span><span class="kvib-button__text">Ikon på venstre side</span></button>
<button class="kvib-button kvib-button--primary kvib-button--green kvib-button--md"><span class="kvib-button__text">Ikon på høyre side</span><span class="material-symbols-outlined material-symbols-outlined--filled">add</span></button>
```
