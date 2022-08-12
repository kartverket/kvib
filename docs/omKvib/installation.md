---
id: installationID
title: Implementering av KVIB
description: Ta i bruk Kvib
slug: /omKvib/implementering
displayed_sidebar: OmKvibSidebar
---
## Installasjon av KVIB-CSS
KVIB kan implementeres på tre måter:

### 1. HTML link
Importer KVIB HTML link:

```markdown
 <link rel="stylesheet" href="https://kartverket.github.io/kvib/css/main.css">
```

### 2. CSS import
Importer KVIB i index.css i prosjektet: 

```markdown
@import url("https://kartverket.github.io/kvib/css/main.css");
```

### 3. Installasjon av KVIB GitHub Package
#### GitHub
1. Opprett et Personal Access Token (PAT).
[Se Github dokumentasjon for å opprette PAT <span class="material-symbols-outlined">open_in_new</span>](https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/creating-a-personal-access-token)
2. Autoriser PAT for bruk med organisasjonen. [Se Github dokumentasjon for PAT autentisering <span class="material-symbols-outlined">open_in_new</span>](https://docs.github.com/en/enterprise-cloud@latest/authentication/authenticating-with-saml-single-sign-on/authorizing-a-personal-access-token-for-use-with-saml-single-sign-on)

#### npm
1. Opprett en _.npmrc_ fil i prosjektmappen og legg til følgende:

```markdown
@kartverket:registry=https://npm.pkg.github.com
```

2. I prosjektmappen som inneholder _.npmrc_ filen, logg på npm med GitHub brukernavn og PAT ved å bruke følgende kommando:

```markdown
npm login --scope=@kartverket --registry=https://npm.pkg.github.com
```

3. Kjør npm install @kartverket/kvib og biblioteket skal nå være klar til bruk.

```markdown
npm install @kartverket/kvib
```

4. Importer eller legg til link til biblioteket i CSS eller HTML filen i prosjektet.

- I HTML fil:

```markdown
<link rel="stylesheet" href="PATH/node_modules/@kartverket/kvib/main.css">
```

- I CSS fil:

```markdown
@import 'PATH/node_modules/@kartverket/kvib/main.css';
```