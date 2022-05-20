import type { SidebarConfig } from '@vuepress/theme-default'

export const en: SidebarConfig = {
  '/': [
    {
      text: 'Start',
      collapsible: false,
      children: [
      ]
    },
    {
      text: 'FAQ',
      collapsible: true,
      children: [
        '/document/FAQ/FAQ.md',
      ]
    },
  ],

  '/WSA/': [
    {
      text: 'Install WSA',
      collapsible: false,
      children: [
        '/WSA/Install WSA.md',
      ]
    },
    {
      text: 'Install APK',
      collapsible: false,
      children: [
        '/WSA/APP/APK Installer.md',
        '/WSA/APP/WSA Toolbox.md',
      ]
    },
    {
      text: 'FAQ',
      collapsible: false,
      children: [
        '/WSA/FAQ/Start WSA.md',
        '/WSA/FAQ/connect to wsa.md',
      ]
    },
  ],

};