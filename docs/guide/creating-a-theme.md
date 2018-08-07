# Creating A Theme

## Using Default Layout Manager

A basic but complete theme looks like:

```bash
./theme
├── layouts
│   ├── 404.vue      # optional
│   ├── index.vue
│   ├── category.vue # optional
│   ├── tag.vue      # optional
│   ├── post.vue     # optional
│   └── page.vue
└── package.json     # optional
```

Different kinds of pages will use different layout component, here's the complete list:

|Files|Default Layout|Fallback Layout|
|---|---|---|
|homepage|index||
|source/_posts/*.md|post|page|
|source/*.md|page||
|(categories page)|category|index|
|(tags page)|tag|index|

### Layout Component Props

Layout components all have a `page` prop:

```typescript
interface Page {
  // parsed front-matter 
  attributes: {
    [k: string]: any
  },
  // Rendered HTML for your markdown
  body?: string
  // first paragraph of body
  excerpt?: string
  // Permanent link
  permalink: string
  // Slugified file path
  slug: string
}
```

`page.body` is the raw HTML of compiled Markdown. To render the markdown content as Vue component in your website, you should use the default slot `<slot name="default"></slot>` instead.

For `index` `category` `tag` layouts, the `page` prop has extra keys:

```typescript
interface IndexPage extends Page {
  posts: Page[]
  pagination: {
    hasNext: boolean
    hasPrev: boolean
    prevLink: string
    nextLink: string
    total: number
    current: number
  }
}
```

## Using Custom Layout Manager

Instead of following the folder structure of Peco's default layout manager, you can use your own one by populating a `layout.js` or `layout.vue` at the root path of your theme.

It's just a Vue component which also has a `page` prop, so it's all up to you to decide how to manage the layout depending on what `page.attributes.layout` is.

## Preprocessors

You can use `ES2015` `Sass` `Stylus` etc to write your theme.

Note that you need to install relevant dependencies in your theme, like `node-sass` and `sass-loader` when you're using Sass.

## Access Site Data In Component

- `this.$siteData`
  - `title`: The `title` from config file
  - `description`: The `description` from config file
- `this.$themeConfig`: `themeConfig` from config file

## App-level Enhancements

Peco will read `./path/to/theme/index.js` to apply app-level enhancements:

```js
import Vue from 'vue'

// Add a global mixin
Vue.mixin({})

// Optional default export
export default ({
  // Vue router instance
  router,
  // Options for root Vue instance
  rootOptions
}) => {
  // Do something...
}
```
