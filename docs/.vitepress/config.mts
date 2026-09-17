import { defineConfig } from 'vitepress'

export default defineConfig({
  lang: 'zh-CN',
  title: 'Wiki 中文文档',
  description: '对标 nifichina.github.io 的 VitePress 静态文档站',
  // 项目站 https://xhq422105288.github.io/wiki/ 用 '/wiki/'；
  // 若仓库改名为 <用户名>.github.io，则改为 '/'。
  base: '/wiki/',

  lastUpdated: true,

  themeConfig: {
    nav: [
      { text: '首页', link: '/' },
      { text: '基础文档', link: '/1-基础文档/1-Overview' },
      { text: '部署与排障', link: '/2-部署与排障/1-GitHub-Pages配置' },
      { text: '新手常见问题', link: '/index/newQuestions' },
    ],
    sidebar: [
      {
        text: '1-基础文档',
        items: [
          { text: '概览', link: '/1-基础文档/1-Overview' },
          { text: '入门', link: '/1-基础文档/2-GettingStarted' },
          { text: '写作与路由规范', link: '/1-基础文档/3-UserGuide' },
        ],
      },
      {
        text: '2-部署与排障',
        items: [
          { text: 'GitHub Pages 配置', link: '/2-部署与排障/1-GitHub-Pages配置' },
          { text: '常见 404 排查', link: '/2-部署与排障/2-常见404排查' },
        ],
      },
      {
        text: '3-本站说明',
        items: [
          { text: '更新日志', link: '/index/updateLog' },
          { text: '新手常见问题', link: '/index/newQuestions' },
        ],
      },
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/xhq422105288/wiki' },
    ],

    outline: { level: [2, 3], label: '本页目录' },
    lastUpdated: { text: '最后更新' },
    docFooter: { prev: '上一页', next: '下一页' },
    search: { provider: 'local' },

    footer: {
      message: '参考站：nifichina.github.io · 本站由 VitePress 构建',
      copyright: 'Copyright © 2026 wiki contributors',
    },
  },
})
