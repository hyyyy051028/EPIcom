import {defineConfig} from 'vitepress'

export default defineConfig({
  lang: 'zh-Hans',
  title: 'EPI 软件实验室',
  description: '工程实践、项目创新、开放协作',
  cleanUrls: true,
  lastUpdated: true,
  themeConfig: {
    logo: '/img/logo.svg',
    nav: [
      {text: '首页', link: '/'},
      {text: '介绍', items: [
        {text: '实验室介绍', link: '/guide/intro'},
        {text: '方向介绍', link: '/guide/directions'},
        {text: '培养方案介绍', link: '/guide/scheme'},
      ]},
      {text: '加入我们', link: '/join-us'},
      {text: '学校官网', link: 'https://xupt.edu.cn/'},
    ],
    sidebar: {
      '/guide/': [
        {
          text: '实验室介绍',
          items: [
            {text: '实验室介绍', link: '/guide/intro'},
            {text: '方向介绍', link: '/guide/directions'},
            {text: '培养方案介绍', link: '/guide/scheme'},
            {text: '加入我们', link: '/join-us'},
          ],
        },
      ],
    },
    socialLinks: [
      {icon: 'github', link: 'https://github.com/hyyyy051028/EPIcom'},
    ],
    footer: {
      message: '工程实践、项目创新、开放协作',
      copyright: `Copyright © ${new Date().getFullYear()} 西安邮电大学 EPI 软件实验室`,
    },
    search: {
      provider: 'local',
    },
  },
  head: [
    ['link', {rel: 'icon', href: '/img/logo.svg'}],
    ['meta', {name: 'theme-color', content: '#2563eb'}],
    ['meta', {property: 'og:image', content: '/img/logo.svg'}],
  ],
})
