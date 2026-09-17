---
layout: home
title: 首页
hero:
  name: Wiki 中文文档
  text: 对标 nifichina.github.io
  tagline: VitePress 构建，push 后自动发布到 GitHub Pages
  actions:
    - theme: brand
      text: 快速开始 →
      link: /1-基础文档/2-GettingStarted
features:
  - title: 基础文档
    details: 概览、入门，侧边栏结构与 nifichina.github.io 对齐。
  - title: 自动部署
    details: push 到 main 后 GitHub Actions 自动构建并发布到 gh-pages。
  - title: 纯静态
    details: 构建产物为纯 HTML，可直接被 GitHub Pages 托管。
---

## 本站说明

文档中如有错误欢迎提 Issue / PR。如有转载请标明出处。

- 参考站：https://nifichina.github.io
- 本仓库构建命令：`npm run docs:build`
- 发布方式：GitHub Actions → `gh-pages` 分支 → Settings / Pages 选择 Deploy from branch

### 快速导航

- [概览](/1-基础文档/1-Overview)
- [入门](/1-基础文档/2-GettingStarted)
- [更新日志](/index/updateLog)
- [新手常见问题](/index/newQuestions)
