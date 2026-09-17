# 新手常见问题

## 推送后看不到页面？

按顺序检查，详见 [常见 404 排查](/2-部署与排障/2-常见404排查)：

1. Actions 是否变绿（仓库顶部 Actions 页）。
2. Settings → Pages → Source 是否选了 **`GitHub Actions`**。
3. 访问地址是否带 `/wiki/`：`https://xhq422105288.github.io/wiki/`。
4. 强刷一次排除缓存（`Ctrl+Shift+R`）。

## 想用 `https://xhq422105288.github.io`（无后缀）访问？

新建/改名为 `xhq422105288.github.io` 的仓库，把 `docs/.vitepress/config.mts` 里的 `base: '/wiki/'` 改为 `base: '/'` 后重新 push。

## 本地构建报错 dead link？

说明有链接指向了不存在的页面。看报错里提到的文件，把链接改成 [写作规范](/1-基础文档/3-UserGuide) 里约定的 `/分组/文件名` 形式（不带 `.md`），裸 URL 用反引号包起来。

## 图片放哪里？

放 `docs/public/images/`，引用写 `/wiki/images/xxx.png`。`public` 下的文件会原样复制到发布根目录。
