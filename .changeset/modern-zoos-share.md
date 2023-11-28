---
"@kvib/react": major
---

Legger til støtte for å legge til tekst på søkeknappen i Search. Bruk `buttonText`.

Breaking changes:

- Fjerner `leftSearchButton` og `rightSearchButton` til fordel for å legge til ny prop.
- Legger til ny prop `searchButton?: "left" | "right" | "none";`
