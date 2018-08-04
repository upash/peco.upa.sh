# Front Matter

Front matter is used to describe the metadata of your content, it must be the first thing in the file and must take the form of valid YAML set between triple-dashed lines. Here is a basic example:

```markdown
---
title: Hello World
date: 2018-02-21
---

Just a blog post.
```

## Basic Properties

|Name|Description|
|---|---|
|title|Page title.|
|date|Posts date, normal pages usually don't need it.|

## Advanced Properties

|Name|Description|
|---|---|
|type|Page type, by default it would be `post` for posts, `page` for normal pages, `index` for homepage. `category` for categories pages.|
|layout|Page layout, it decides which layout component in your theme to use.|

These properties are automatically inferred, however you can override it when necessary.