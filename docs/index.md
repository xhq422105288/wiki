---
layout: home
title: 首页
hero:
  name: Wiki 中文文档
  text: 对标 nifichina.github.io
  tagline: VitePress 构建，push 到 main 后自动发布到 GitHub Pages
  actions:
    - theme: brand
      text: 快速开始 →
      link: /1-基础文档/2-GettingStarted
    - theme: alt
      text: 404 排查
      link: /2-部署与排障/2-常见404排查
features:
  - title: 📚 基础文档
    details: 概览、入门、写作规范，侧边栏结构与 nifichina.github.io 对齐，开箱即用。
  - title: 🚀 自动部署
    details: push 到 main 即触发 Actions 构建，全程约 1-2 分钟，无需手动传 HTML。
  - title: 🧭 部署排障指南
    details: 内置 Pages 配置与常见 404 排查步骤，照着点一遍就能上线。
  - title: 🔍 本地搜索
    details: 内置离线搜索，文档越写越多也不怕找不到。
  - title: 📱 移动端适配
    details: 默认主题自带响应式布局，手机看文档同样清晰。
  - title: 🧩 纯静态托管
    details: 构建产物为纯 HTML/CSS/JS，可托管在任何静态服务器上。
---

## 本站说明

文档中如有错误欢迎提 Issue / PR。如有转载请标明出处。

- 参考站：https://nifichina.github.io
- 本仓库：https://github.com/xhq422105288/wiki
- 线上地址：https://xhq422105288.github.io/wiki/
- 本地构建：`npm run docs:build`，预览：`npm run docs:preview`

### 快速导航

- [概览](/1-基础文档/1-Overview) · [入门](/1-基础文档/2-GettingStarted) · [写作与路由规范](/1-基础文档/3-UserGuide)
- [GitHub Pages 配置](/2-部署与排障/1-GitHub-Pages配置) · [常见 404 排查](/2-部署与排障/2-常见404排查)
- [更新日志](/index/updateLog) · [新手常见问题](/index/newQuestions)

### 看到 404？

先看 [常见 404 排查](/2-部署与排障/2-常见404排查)：90% 是 Pages 的 Source 没选 `GitHub Actions`，或访问地址少了尾部的 `/wiki/`。
