# wiki

VitePress 静态文档站，对标 https://nifichina.github.io。

push 到 GitHub 后通过 GitHub Pages 显示静态页面。

## 本地开发

```bash
npm install
npm run docs:dev
```

## 推送到 GitHub

```bash
Set-Location -LiteralPath "C:\data\git\github\wiki"
git add .
git commit -m "docs: 补充内容并修复 Pages 部署"
git push origin main
```

3. 打开仓库 Settings → Pages：
   - Build and deployment → Source：**`GitHub Actions`**（注意：不要选 `Deploy from a branch`，新工作流不再用 `gh-pages` 分支）。
   - 切到 Actions 确认 `Deploy VitePress to GitHub Pages` 变绿。
   - 等 1-2 分钟访问 `https://xhq422105288.github.io/wiki/`。

> 想用 `https://<你的用户名>.github.io`（无后缀）访问：
> 新建/改名为 `<你的用户名>.github.io` 的仓库，把 `docs/.vitepress/config.mts` 里 `base: '/wiki/'` 改为 `base: '/'` 后再 push。
