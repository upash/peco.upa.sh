# Permalinks

Permalinks refer to the URLs (excluding the domain name) for your pages, posts. Peco supports a flexible way to build permalinks, allowing you to leverage various template variables.

The default permalink for pages is `/:slug`, and for posts it's `/:year/:month/:day/:slug`.

## Configure Permalinks

You can configure it in config file, it will apply globally for every page:

```js
// .peco/config.js
module.exports = {
  permalink: {
    post: '/:year/:month/:day/:slug',
    page: '/:slug'
  }
}
```

Alternatively, it can also be set in front-matter and override the global one:

📝 __source/hello.md__:

```markdown
---
title: Hello World
permalink: /hello-world
---

Hello!
```

## Template Variables

|name|description|
|---|---|
|:year|Published year of posts (4-digit)|
|:month|Published month of posts (2-digit)|
|:i_month|Published month of posts (Without leading zeros)|
|:day|Published day of posts (2-digit)|
|:i_day|Published day of posts (Without leading zeros)|
|:slug|Slugified file path (Without extension)|