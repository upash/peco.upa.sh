# Introduction

Peco is a static website generator built on the top of Vue server-side rendering and webpack.

## Why not..?

### VuePress

Peco is similar to VuePress in many ways, both generate a static website using the same technologies.

The main difference is that Peco has blogging feature baked in and it's not designed purposely for writing documentation. If you only intend to write documentation, VuePress is still a good choice.

### Hexo / Hugo / Jekyll

These tools are fine as long as you only want a traditional multi-page website, while what Peco gives you is an SEO-friendly, highly-optimized, single-page application.

Due to the fact that Peco is using Vue and Webpack under the hood, it is finally possible to write themes using JavaScript, Vue components and the whole npm ecosystem.

## Installation

### The easy way

You can use `pecoup` to quickly start a new website:

```bash
npm i -g pecoup
```

Then create a website called `my-blog`, it will generate some skeleton files and install `peco` in the project.

```bash
❯ pecoup create my-blog
Generated my-blog/.gitignore
Generated my-blog/package.json
Generated my-blog/source/_posts/hello-world.md
Done, it's generated into /path/to/my-blog!
Now you can `cd my-blog` and run `npm run dev` to start dev server.
```

Take a look at the `package.json` it generates:

```json
{
  "private": true,
  "scripts": {
    "dev": "peco dev",
    "build": "peco build"
  },
  "devDependencies": {
    "peco": "latest"
  }
}
``` 

Basically it includes `peco` as devDependency and adds two npm scripts:

```bash
npm run dev
# Running the website locally, with hot reloading as file changes

npm run build
# Build the website into static HTML files and webpack assets
# Files are written to `.peco/website` directory
```

