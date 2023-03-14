---
id: ikonknappID
sidebar_position: 4
title: Knapper med ikon
description: Knapper med ikon
---

Knapper som består av tekst og ikon skal ha ikonet plassert på venstre eller høyre side av teksten.
En knapp med størrelse extra small benytter et ikon av mindre størrelse enn de øvrige knappestørrelsene, men dette endres automatisk ettersom størrelsen settes for <code><button\></code>-elementet.

[Se dokumentasjonssiden for ikoner](../../designTokens/icons.md) for å designe <code><span\></code>-elementet.

## Ikon venstre

<div class="buttons--section"> 
<button class="kv-button kv-button--primary--green kv-button--xs kv-button__icon--left"><span class="material-symbols-outlined material-symbols-outlined--filled">favorite</span>Extra small</button>
<button class="kv-button kv-button--primary--green kv-button--sm kv-button__icon--left"><span class="material-symbols-outlined material-symbols-outlined--filled">favorite</span>Small/medium</button>
<button class="kv-button kv-button--primary--green kv-button--l kv-button__icon--left"><span class="material-symbols-outlined material-symbols-outlined--filled">favorite</span>Large</button>
</div>

```markup
<button class="kv-button kv-button--primary--green kv-button--xs kv-button__icon--left"><span class="material-symbols-outlined material-symbols-outlined--filled">favorite</span>Extra small</button>
<button class="kv-button kv-button--primary--green kv-button--sm kv-button__icon--left"><span class="material-symbols-outlined material-symbols-outlined--filled">favorite</span>Small/medium</button>
<button class="kv-button kv-button--primary--green kv-button--l kv-button__icon--left"><span class="material-symbols-outlined material-symbols-outlined--filled">favorite</span>Large</button>
```

## Ikon høyre

<div class="buttons--section"> 
<button class="kv-button kv-button--primary--green kv-button--xs kv-button__icon--right">Extra small<span class="material-symbols-outlined--filled material-symbols-outlined ">favorite</span></button>
<button class="kv-button kv-button--primary--green kv-button--sm kv-button__icon--right">Small/medium<span class="material-symbols-outlined--filled material-symbols-outlined ">favorite</span></button>
<button class="kv-button kv-button--primary--green kv-button--l kv-button__icon--right">Large<span class="material-symbols-outlined--filled material-symbols-outlined">favorite</span></button>
</div>

```markup
<button class="kv-button kv-button--primary--green kv-button--xs kv-button__icon--right">Extra small<span class="material-symbols-outlined--filled material-symbols-outlined ">favorite</span></button>
<button class="kv-button kv-button--primary--green kv-button--sm kv-button__icon--right">Small/medium<span class="material-symbols-outlined--filled material-symbols-outlined ">favorite</span></button>
<button class="kv-button kv-button--primary--green kv-button--l kv-button__icon--right">Large<span class="material-symbols-outlined--filled material-symbols-outlined">favorite</span></button>
```
