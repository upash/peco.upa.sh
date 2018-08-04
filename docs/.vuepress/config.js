module.exports = {
  title: 'Peco',
  description: 'A future-ready static site generator for Vue',
  themeConfig: {
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
          '/guide/themes'
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