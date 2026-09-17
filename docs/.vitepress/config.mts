import { defineConfig } from 'vitepress'

export default defineConfig({
  lang: 'zh-CN',
  title: 'Wiki 中文文档',
  description: '对标 nifichina.github.io 的 VitePress 静态文档站',
  // 项目站 https://<用户名>.github.io/wiki/ 用 '/wiki/'；
  // 若仓库名是 <用户名>.github.io，则改为 '/'。
  base: '/wiki/',

  themeConfig: {
    nav: [
      { text: '首页', link: '/' },
      { text: '更新日志', link: '/index/updateLog' },
      { text: '新手常见问题', link: '/index/newQuestions' },
    ],
    sidebar: [
      {
        text: '1-基础文档',
        items: [
          { text: '概览', link: '/1-基础文档/1-Overview' },
          { text: '入门', link: '/1-基础文档/2-GettingStarted' },
        ],
      },
      {
        text: '2-本站说明',
        items: [
          { text: '更新日志', link: '/index/updateLog' },
          { text: '新手常见问题', link: '/index/newQuestions' },
        ],
      },
    ],
    lastUpdated: true,
  },
})
