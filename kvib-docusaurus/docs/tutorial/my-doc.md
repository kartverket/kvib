---
id: my-doc-id
title: Document test
description: My document description
slug: /my-custom-url
sidebar_position: 4
---

## Markdown heading

Markdown text with [links](docs/tutorial/hello.md)

Lets see this

![Docusaurus logo](/img/docusaurus.png)


# Typography

```jsx title="src/components/HelloDocusaurus.jsx"
function HelloDocusaurus() {
    return (
        <h1>Hello, Docusaurus!</h1>
    )
}
```
# Hello, Docusaurus

:::tip My tip

Use this awesome feature option

:::

:::danger Take care

This action is dangerous

:::

export const Highlight = ({children, color}) => (
<span
style={{
backgroundColor: color,
borderRadius: '20px',
color: '#fff',
padding: '10px',
cursor: 'pointer',
}}
onClick={() => {
alert(`You clicked the color ${color} with label ${children}`)
}}>
{children}
</span>
);

This is <Highlight color="#25c2a0">Docusaurus green</Highlight> !

This is <Highlight color="#1877F2">Facebook blue</Highlight> !
