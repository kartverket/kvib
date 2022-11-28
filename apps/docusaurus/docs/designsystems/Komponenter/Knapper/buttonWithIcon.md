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


<button class="button button__green--primary button--xs button--icon-left"><span class="material-symbols-outlined material-symbols-outlined--filled">favorite</span>Extra small</button>
<button class="button button__green--primary button--sm button--icon-left"><span class="material-symbols-outlined--filled material-symbols-outlined">favorite</span>Small/medium</button>
<button class="button button__green--primary button--l button--icon-left"><span class="material-symbols-outlined--filled material-symbols-outlined">favorite</span>Large</button>


```markup 
<button class="button button__green--primary button--xs button--icon-left">
    <span class="material-symbols-outlined material-symbols-outlined--filled">favorite</span>Extra small
</button>

<button class="button button__green--primary button--sm button--icon-left">
    <span class="material-symbols-outlined material-symbols-outlined--filled">favorite</span>Small/medium
</button>

<button class="button button__green--primary button--l button--icon-left">
    <span class="material-symbols-outlined material-symbols-outlined--filled">favorite</span>Large
</button>
```


## Ikon høyre


<button class="button button__green--primary button--xs button--icon-right">Extra small<span class="material-symbols-outlined--filled material-symbols-outlined ">favorite</span></button>
<button class="button button__green--primary button--sm button--icon-right">Small/medium<span class="material-symbols-outlined--filled material-symbols-outlined ">favorite</span></button>
<button class="button button__green--primary button--l button--icon-right">Large<span class="material-symbols-outlined--filled material-symbols-outlined">favorite</span></button>


```markup 
<button class="button button__green--primary button--xs button--icon-right">Extra small
    <span class="material-symbols-outlined material-symbols-outlined--filled">favorite</span>
</button>

<button class="button button__green--primary button--sm button--icon-right">Small/medium
    <span class="material-symbols-outlined material-symbols-outlined--filled">favorite</span>
</button>

<button class="button button__green--primary button--l button--icon-right">Large
    <span class="material-symbols-outlined material-symbols-outlined--filled">favorite</span>
</button>
```

