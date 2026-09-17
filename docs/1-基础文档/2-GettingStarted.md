# 入门

> 5 分钟把本站跑起来，并学会加一篇新文档。

## 1. 本地预览

```bash
npm install
npm run docs:dev
```

浏览器打开输出的地址，一般是 `http://localhost:5173/wiki/`。

## 2. 新增一篇文档

1. 在 `docs/` 下选分组建文件，例如 `docs/1-基础文档/4-我的新文档.md`。
2. 文件开头写一级标题，例如 `# 我的新文档`。
3. 到 `docs/.vitepress/config.mts` 的 `sidebar` 里加一行：

```ts
{ text: '我的新文档', link: '/1-基础文档/4-我的新文档' }
```

4. 本地刷新确认左侧出现新条目、无死链报错。

::: tip 注意
链接里不要带 `.md` 后缀，VitePress 会自动处理。站内互相引用时用 `/分组/文件名` 这种绝对路径最稳。
:::

## 3. 构建验证

```bash
npm run docs:build
npm run docs:preview
```

- 构建产物在 `docs/.vitepress/dist`（已被 `.gitignore` 忽略，不用提交）。
- 构建自带死链检查：引用了不存在的页面会直接报错，中断构建，先修好再 push。

## 4. 发布上线

```bash
git add .
git commit -m "docs: 新增xxx"
git push origin main
```

然后去仓库 **Actions** 看 `Deploy VitePress to GitHub Pages` 是否变绿，绿了再访问 `https://xhq422105288.github.io/wiki/`。
