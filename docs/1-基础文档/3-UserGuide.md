# 写作与路由规范

> 约定大于配置：按这套规范写，侧边栏、搜索、构建检查都不容易出错。

## 文件命名

- 中文分组目录可以直接用中文，例如 `1-基础文档/`、`2-部署与排障/`。
- 文件名建议 `序号-英文或拼音.md`，例如 `3-UserGuide.md`，避免空格和特殊符号。
- 每新增一个分组，就在 `config.mts` 的 `sidebar` 里加一组。

## 链接写法

| 场景 | 写法 | 示例 |
| --- | --- | --- |
| 站内页面 | 以 `/` 开头的绝对路径，不带 `.md` | `/1-基础文档/1-Overview` |
| 站内锚点 | 页面路径 + `#` + 标题 | `/index/newQuestions#推送后看不到页面` |
| 外部链接 | 完整 URL | `https://nifichina.github.io` |
| 代码里的 URL | 用反引号包起来，防止被当成死链检查 | `` `http://localhost:5173/wiki/` `` |

::: warning 不要这样写
裸写的 `http://localhost:5173/wiki/`（尤其后面紧跟中文标点）会被链接检查误伤，导致构建失败。
:::

## 图片写法

1. 图片放 `docs/public/images/`，例如 `docs/public/images/arch.png`。
2. 引用写 `/wiki/images/arch.png`（注意带 `base` 前缀），或用相对路径。
3. 首选小尺寸 PNG/JPG，单张控制在 500KB 以内，仓库更轻、Pages 构建更快。

## Markdown 增强

VitePress 支持容器写法：

```md
::: tip 提示
绿色提示块，适合放“推荐做法”。
:::

::: warning 注意
黄色警告块，适合放“容易踩坑”。
:::

::: danger 危险
红色块，适合放“删库级操作”。
:::
```

效果见本页各处的提示块。
