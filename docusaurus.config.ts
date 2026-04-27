import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: '西安邮电大学 EPI 软件实验室',
  tagline: '工程实践、项目创新、开放协作',
  favicon: 'img/favicon.ico',

  future: {
    v4: true,
  },

  url: 'https://hyyyy051028.github.io',
  baseUrl: '/EPIcom/',

  organizationName: 'hyyyy051028',
  projectName: 'EPIcom',

  onBrokenLinks: 'throw',

  i18n: {
    defaultLocale: 'zh-Hans',
    locales: ['zh-Hans'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'warn',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    image: 'img/docusaurus-social-card.jpg',
    colorMode: {
      defaultMode: 'light',
      disableSwitch: false,
      respectPrefersColorScheme: false,
    },
    navbar: {
      title: 'EPI 软件实验室',
      logo: {
        alt: 'EPI Lab Logo',
        src: 'img/logo.svg',
      },
      items: [
        {
          to: '/',
          label: '首页',
          position: 'left',
        },
        {
          type: 'docSidebar',
          sidebarId: 'tutorialSidebar',
          position: 'left',
          label: '实验室介绍',
        },
        {to: '/blog', label: '实验室动态', position: 'left'},
        {
          href: 'https://www.xiyoulinux.com/',
          label: '参考站点',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: '实验室',
          items: [
            {
              label: '实验室介绍',
              to: '/docs/intro',
            },
            {
              label: '培养方向',
              to: '/docs/tutorial-basics/create-a-document',
            },
          ],
        },
        {
          title: '内容',
          items: [
            {
              label: '实验室动态',
              to: '/blog',
            },
            {
              label: '加入我们',
              to: '/docs/tutorial-basics/deploy-your-site',
            },
          ],
        },
        {
          title: '学校信息',
          items: [
            {
              label: '西安邮电大学',
              href: 'https://www.xupt.edu.cn/',
            },
            {
              label: '参考站点',
              href: 'https://www.xiyoulinux.com/',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} 西安邮电大学 EPI 软件实验室. Built with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
