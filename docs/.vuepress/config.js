module.exports = {
  title: 'Peco',
  description: 'A future-ready static site generator for Vue',
  themeConfig: {
    repo: 'uchudenpa/peco',
    docsRepo: 'uchudenpa/peco.upa.sh',
    docsDir: 'docs',
    editLinks: true,
    sidebar: [
      {
        title: 'Getting Started',
        collapsable: false,
        children: [
          '/guide/introduction',
          '/guide/configuration',
          '/guide/directory-structure'
        ]
      },
      {
        title: 'Your Content',
        collapsable: false,
        children: [
          '/guide/front-matter',
          '/guide/writing-posts',
          '/guide/creating-pages'
        ]
      },
      {
        title: 'Customization',
        collapsable: false,
        children: [
          '/guide/permalinks',
          '/guide/using-themes',
          '/guide/creating-a-theme'
        ]
      }
    ],
    nav: [
      {
        text: 'Guide',
        link: '/guide/introduction'
      },
      {
        text: 'Config',
        link: '/config'
      }
    ]
  }
}