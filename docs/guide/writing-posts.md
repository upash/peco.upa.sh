# Writing Posts

The main difference between Peco and other Vue-powered static website generator is, the blogging feature is baked into Peco.

## Posts Directory

As explained on the [directory structure](directory-structure.md) page, the `source/_posts` folder is where your blog posts will live. These files are generally Markdown. All posts must have YAML [Front Matter](front-matter.md), and they will be converted into an HTML page that is part of your static site.

## A Typical Post

```markdown
---
title: Hello World
date: 2018-02-12
categories:
  - life
---

Markdown goes here..
```