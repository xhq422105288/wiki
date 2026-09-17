# 概览

> 对标 `nifichina.github.io` 的“1-基础文档 / 概览”页。本页介绍本站是什么、怎么用。

## 本站是什么

本站是一个 **VitePress 静态文档站**：所有内容都是 Markdown，构建后变成纯 HTML，由 GitHub Pages 免费托管。

- 内容源：`docs/` 目录下的 `.md` 文件
- 导航/侧边栏：`docs/.vitepress/config.mts`
- 线上地址：`https://xhq422105288.github.io/wiki/`

## 目录结构

```text
wiki/
├── docs/
│   ├── .vitepress/config.mts   # 站点配置（标题、导航、侧边栏、base）
│   ├── public/.nojekyll        # 告诉 Pages 不要走 Jekyll，直接托管
│   ├── README.md               # 首页
│   ├── 404.md                  # 自定义 404 页
│   ├── 1-基础文档/             # 本分组
│   ├── 2-部署与排障/           # 上线与排障
│   └── index/                  # 更新日志、FAQ 等
├── .github/workflows/deploy.yml  # 自动部署
└── package.json
```

## 阅读顺序建议

1. [入门](/1-基础文档/2-GettingStarted)：本地运行、新增文档、构建预览
2. [写作与路由规范](/1-基础文档/3-UserGuide)：文件名、链接、图片写法
3. [GitHub Pages 配置](/2-部署与排障/1-GitHub-Pages配置)：第一次上线必看
4. [常见 404 排查](/2-部署与排障/2-常见404排查)：打不开时看这篇

## 和参考站的对应关系

| 参考站 nifichina.github.io | 本站 |
| --- | --- |
| 首页 + 顶部导航 | `docs/index.md` + `nav` |
| 左侧分组侧边栏 | `sidebar` 三个分组 |
| 基础/开发/组件文档分组 | `1-基础文档/`（可继续加 `3-xxx/` 分组） |
| push 后自动更新 | `deploy.yml` 自动构建部署 |
