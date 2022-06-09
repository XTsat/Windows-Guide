import type { NavbarConfig } from '@vuepress/theme-default'

export const zh: NavbarConfig = [
  {
    text: '主页',
    link: '/'
  },
  {
    text: '安卓子系统',
    link: '/WSA/Install WSA.md',
  },
  {
    text: '关于我',
    children: [
      {
        text: '指南',
        children: [
          {
            text: 'Steam',
            link: 'https://xtsat.github.io/SteamGuide/'
          },
          {
            text: '瓦特工具箱',
            link: 'https://xtsat.github.io/SteamTools-Guide/'
          },
          {
            text: '浏览器',
            link: 'https://xtsat.github.io/Browser-Guide/'
          },
          {
            text: 'Windows',
            link: 'https://xtsat.github.io/Windows-Guide/'
          },
        ]
      },
      {
        text: '脚本',
        children: [
          {
            text: '秒传链接提取',
            link: 'https://xtsat.github.io/rapid-upload-userscript-doc/'
          },
        ]
      },
      {
        text: '其他平台',
        children: [
          {
            text: 'BiliBili 📺',
            link: 'https://space.bilibili.com/53283118'
          },
          {
            text: 'Steam 🎮',
            link: 'https://steamcommunity.com/id/XTxiaotong'
          },
          {
            text: 'Playlist 🎵',
            link: 'https://music.163.com/#/user/home?id=283588276'
          },
          {
            text: 'GitHub',
            link: 'https://github.com/XTsat'
          },
        ]
      },
    ]
  },
]