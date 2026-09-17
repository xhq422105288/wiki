# 新手常见问题

## 推送后看不到页面？

1. 确认 Actions 已跑完（仓库顶部 Actions 页绿色对勾）。
2. Settings → Pages → Build and deployment → Source 选择 `Deploy from a branch`，Branch 选择 `gh-pages / (root)`。
3. 项目站地址是 `https://<用户名>.github.io/wiki/`，注意后面有 `/wiki/`。

## 想用 `<用户名>.github.io` 当地址？

把本仓库改名/重建为 `<用户名>.github.io`，并把 `docs/.vuepress/config.js` 里的 `base` 改为 `'/'` 后重新 push。
