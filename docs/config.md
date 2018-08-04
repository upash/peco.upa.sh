---
sidebar: auto
---

# Config Reference

## Base Config

### title

- __Type__: `string`

The title for your website, generally used by themes.

### description

- __Type__: `string`

The description for your website, generally used by themes.



### root

- __Type__: `string`
- __Default__: `/`

The root pathname of your website.

For example, you have to set it to `/blog/` if your website is located at: `https://website.com/blog`.

### sourceDir

- __Type__: `string`
- __Default__: `source`

The directory to your source files, relative to base directory.

### permalink

#### permalink.page

- __Type__: `string`
- __Default__: `:slug`

The permanent link format of pages.

#### permalink.post

- __Type__: `string`
- __Default__: `:year/:month/:day/:slug`

The permanent link format of posts.


### pwa

- __Type__: `boolean` `object`
- __Default__: `false`

PWA (Progressive Web App) support.

You can set enable it by setting this option to `true` or using an object for advanced usage:

```js
// Default values when `true`
{
  // Show notifier when updatesare  available
  notifyUpdates: true,
  // Always skip waiting for service worker to be activated
  // You usually don't need this
  skipWaiting: false,
  updaterMessage: 'New contents are available...',
  updaterButtonText: 'Refresh'
}
```

### googleAnalytics

- __Type__: `string` `object`
- __Default__: `undefined`

Track ID for Google Analytics.

### pagination

- pagination
  - perPage: 
    - __Default__: `30`

Set `pagination` to `false` to disable it.

### categories

- __Type__: `boolean`
- __Default__: `true`

Whether to generate caregory archives.

### tags

- __Type__: `boolean`
- __Default__: `true`

Whether to generate tag archives.

### categoryMap

- __Type__: `object`

Category name to URL path name mapping. e.g.:

```js
{
  'Apple Pencil': 'apple-pencil'
}
```

In a markdown file:

```markdown
---
title: My drawing
date: 2018-02-31
categories:
  - Apple Pencil
---

Draw something with the pencil...
```

Then you can access this category page via `/categories/apple-pencil`.

### tagMap

Same as `categoryMap` for but tags.

### feed

- __Type__: `boolean` `object`
- __Default__: `undefined`

Generate feed, disabled by default. When it's `true`, default options will be used:

```js
{
  type: 'atom', // Only option for now
  path: 'atom.xml',
  limit: 20
}
```

## Theme

### theme

- __Type__: `string`

It could be a theme name like `theme: 'simple'` for `peco-theme-simple`, or a local path.

### themeConfig

- __Type__: `object`

Theme-specific configurations.

## markdown

### markdown.slugify

Use a custom npm package for slugify headers, e.g. use [limax](https://github.com/lovell/limax) for CJK support:

📝 __peco.config.yml__:

```yaml
markdown:
  slugify: limax
```

You can also directory require a package when using JS config file:

📝 __peco.config.js__:

```js
module.exports = {
  markdown: {
    slugify: require('limax')
  }
}
```

### markdown.plugins

- __Type__: An array of `{name: string, options: any}`

```yaml
markdown:
  plugins:
    - name: markdown-it-footnote
      options: # optional options
```

## Build Pipeline

### chainWebpack

- __Type__: `(config: WebpackChain, context: Context) => void`
  - `Context`: `{ type: 'client' | 'server' }`

Extend webpack config with `webpack-chain`.