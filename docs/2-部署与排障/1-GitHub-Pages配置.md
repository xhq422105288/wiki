# GitHub Pages 配置

> 本站使用 **官方 Pages Actions** 部署（`upload-pages-artifact` + `deploy-pages`），只需要配一次。

## 一次性配置（必做）

1. 打开 `https://github.com/xhq422105288/wiki` → **Settings** → **Pages**。
2. **Build and deployment** → **Source** 选择 **`GitHub Actions`**（不是 `Deploy from a branch`）。
3. 切到仓库顶部 **Actions**，确认有 `Deploy VitePress to GitHub Pages` 且最近一次是绿色 ✅。

::: warning 最常见的 404 原因
Source 选成了 `Deploy from a branch`，但仓库里根本没有 `gh-pages` 分支（新工作流不再创建该分支），于是全站 404。改成 `GitHub Actions` 即可。
:::

## 部署流程

```text
git push origin main
  → Actions: build（npm ci → vitepress build → 上传 artifact）
  → Actions: deploy（发布到 github-pages 环境）
  → 约 1-2 分钟后 https://xhq422105288.github.io/wiki/ 可访问
```

## 自查清单

- [ ] Pages Source = `GitHub Actions`
- [ ] Actions 最近一次运行是绿色
- [ ] 访问地址带了 `/wiki/` 后缀：`https://xhq422105288.github.io/wiki/`
- [ ] `docs/.vitepress/config.mts` 里 `base: '/wiki/'`（仓库名叫啥，base 就是 `/啥/`）
- [ ] 强刷一次（`Ctrl+Shift+R`），排除浏览器缓存

## 仓库改名的情况

| 仓库名 | `base` 该填 | 访问地址 |
| --- | --- | --- |
| `wiki`（现在） | `'/wiki/'` | `https://xhq422105288.github.io/wiki/` |
| `xhq422105288.github.io` | `'/'` | `https://xhq422105288.github.io/` |
