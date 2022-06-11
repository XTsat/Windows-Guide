import { defineUserConfig } from 'vuepress'
import { navbar, sidebar } from './configs'

const { defaultTheme } = require('@vuepress/theme-default')

const { searchPlugin } = require('@vuepress/plugin-search')

export default defineUserConfig({
  base: '/Windows-Guide/',

  head: [
    // [
    //   'link',
    //   {
    //     rel: 'icon',
    //     type: 'image/png',
    //     sizes: '16x16',
    //     href: `/logo/favicon.ico`,
    //   },
    // ],
    [
      'link',
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '32x32',
        href: '/Windows-Guide/logo/Microsoft.ico',
      },
    ],
  ],

  // site-level locales config
  locales: {
    '/': {
      lang: '简体中文',
      title: 'Windows 指南',
      description: '我使用 Windows 的笔记和指南',
    },
    '/en/': {
      lang: 'English',
      title: 'Windows Guide',
      description: 'My notes and guides on using Windows',
    },
  },

  theme: defaultTheme({
    // 在这里进行配置
    logo: '/logo/Windows11.svg',
    
    repo: 'XTsat/Windows-Guide',

    docsBranch: 'VuePress',
    docsDir: 'docs',
    
    // theme-level locales config
    locales: {
      
      '/en/': {
        // navbar
        navbar: navbar.en,
        selectLanguageName: 'English',
        selectLanguageText: '选择语言',
        selectLanguageAriaLabel: '选择语言',
  
        // sidebar
        sidebar: sidebar.en,
  
        // page meta
        editLinkText: 'Edit this page on GitHub',
      },
      
      '/': {
        // navbar
        navbar: navbar.zh,
        selectLanguageName: '简体中文',
        selectLanguageText: 'language',
        selectLanguageAriaLabel: 'language',

        repoLabel: 'GitHub文档',

        // sidebar
        sidebar: sidebar.zh,

        // page meta
        editLinkText: '在 GitHub 上编辑此页',
        lastUpdatedText: '最后更新时间',
        contributorsText: '编辑人',

        // custom containers
        tip: '提示',
        warning: '注意',
        danger: '警告',

        // 404 page
        notFound: [
          '找不到该页面',
          '这里什么都没有',
          '我们怎么到这来了？',
          '这是一个 404 页面',
          '看起来我们进入了错误的链接',
        ],
        backToHome: '返回首页',

        // a11y
        openInNewWindow: '在新窗口打开',
        toggleDarkMode: '切换夜间模式',
        toggleSidebar: '切换侧边栏',
      },
    },

  }),

  plugins: [
    searchPlugin({
      // 配置项
      locales: {
        '/en/': {
          placeholder: 'Search',
          hotKeys: ['/']
        },
        '/': {
          placeholder: '搜索文档',
          hotKeys: ['/']
        }
      },
    }),
  ],

}
)