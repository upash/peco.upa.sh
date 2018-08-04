# Directory Structure

What Peco does is basically transforming Markdown files into Vue components and rendering it as a static website, so you need a place to store those files.

A basic Peco website usually looks like:

```bash
.
├── package.json
├── peco.config.js
├── .gitignore
└── source
    ├── _posts
    │   └── hello-world.md
    └── about.md
```

An overview of what each of these does:

|File / Directory|Description|
|---|---|
|package.json|Define npm scripts and dependencies|
|peco.config.js|Customize the website|
|source|Where to store markdown files|
|source/_posts|For special markdown files, i.e. posts|

Note that any file/directory starting with an underscore `_` except for `_posts` in `source` directory will be ignored when rendering.