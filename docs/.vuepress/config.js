module.exports = {
  base: '/lei-gulu/',
  title: 'LEI-GULU UI',
  description: '一个简单好用的UI框架',
  themeConfig: {
    nav: [
      {text: '主页', link: '/'},
      {text: '文档', link: '/guide/'},
      {text: '交流', link: 'https://google.com'},
    ],
    sidebar: [
      {
        title: '入门',
        children: [
          '/install/',
          '/get_started/',
        ]
      },
      {
        title: '组件',
        children: [
          '/components/button',
          '/components/input',
          '/components/grid',
          '/components/layout',
          '/components/collapse',
          '/components/popover',
          '/components/tabs',
          '/components/address',
          '/components/paginator',
        ]
      },

    ]
  }
}