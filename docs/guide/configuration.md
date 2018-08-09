# Configuration

## Config File

Config file is used to customize your website, Peco will automatically use one of following files from `.peco` folder inside your project:

- __config.js__: JavaScript
- __config.yml__: YAML
- __config.toml__: TOML

It's all up to you to choose the syntax to write the config file.

In this documentation we will use JavaScript to write the config file, the essential configuration is as follows:

```js
module.exports = {
  title: 'My Website',
  deescription: 'Describe your website'
}
```

For the full list of configuration options, please check out the [Config Reference](/config.md).