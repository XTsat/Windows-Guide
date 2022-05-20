import type { SidebarConfig } from '@vuepress/theme-default'

export const zh: SidebarConfig = {
  '/': [
    {
      text: '开始使用',
      collapsible: false,
      children: [
      ]
    },
    {
      text: '常见问题',
      collapsible: true,
      children: [
        '/document/FAQ/FAQ.md',
      ]
    },
  ],

  '/WSA/': [
    {
      text: '安装子系统',
      collapsible: false,
      children: [
        '/WSA/Install WSA.md',
      ]
    },
    {
      text: '安装安卓应用',
      collapsible: false,
      children: [
        '/WSA/APP/APK Installer.md',
        '/WSA/APP/WSA Toolbox.md',
      ]
    },
    {
      text: '常见问题',
      collapsible: false,
      children: [
        '/WSA/FAQ/Start WSA.md',
        '/WSA/FAQ/connect to wsa.md',
      ]
    },

  ],

};