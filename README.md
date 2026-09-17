# wiki

VitePress 静态文档站，对标 https://nifichina.github.io。

push 到 GitHub 后通过 GitHub Pages 显示静态页面。

## 本地开发

```bash
npm install
npm run docs:dev
```

## 推送到 GitHub（本机没装 `gh`，用 git 命令）

1. 在 GitHub 网页上新建空仓库 `wiki`（先不要勾选 README）。
2. 在本目录执行：

```bash
cd C:\data\git\github\wiki
git init -b main
git add .
git commit -m "init: VitePress wiki"
git remote add origin https://github.com/<你的用户名>/wiki.git
git push -u origin main
```

3. 打开仓库 Settings → Pages：
   - Build and deployment → Source：`Deploy from a branch`
   - Branch：`gh-pages` / `(root)`，Save。
   - 等 1-2 分钟访问 `https://<你的用户名>.github.io/wiki/`。

> 想用 `https://<你的用户名>.github.io`（无后缀）访问：
> 新建/改名为 `<你的用户名>.github.io` 的仓库，把 `docs/.vitepress/config.mts` 里 `base: '/wiki/'` 改为 `base: '/'` 后再 push。
