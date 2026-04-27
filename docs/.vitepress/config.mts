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
      {text: '实验室介绍', items: [
        {text: '实验室介绍', link: '/guide/intro'},
        {text: '培养方向', link: '/guide/directions'},
      ]},
      {text: '实验室动态', link: '/blog/'},
      {text: '加入我们', link: '/join-us'},
      {text: '学校官网', link: 'https://xupt.edu.cn/'},
    ],
    sidebar: {
      '/guide/': [
        {
          text: '实验室介绍',
          items: [
            {text: '实验室介绍', link: '/guide/intro'},
            {text: '培养方向', link: '/guide/directions'},
            {text: '加入我们', link: '/join-us'},
          ],
        },
        
      ],
      '/blog/': [
        {
          text: '实验室动态',
          items: [
            {text: '动态总览', link: '/blog/'},
            {text: '欢迎来到 EPI 软件实验室', link: '/blog/2026-04-27-welcome-to-epi'},
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
    ['link', {rel: 'icon', href: '/img/favicon.ico'}],
    ['meta', {name: 'theme-color', content: '#2563eb'}],
    ['meta', {property: 'og:image', content: '/img/docusaurus-social-card.jpg'}],
  ],
})
