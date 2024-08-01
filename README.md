# 🌍 siaofei.github.io

Astro 4.11+ 🤝 Apline.js 🤝 Tailwind CSS

## 🛠️ 开发

需要安装 [Nodejs >= 22.5](https://nodejs.org)（推荐使用 [nvm](https://github.com/nvm-sh/nvm)）和 [pnpm](https://pnpm.io)。

### 🚀 更新

使用 `pnpm` 包管理器更新 Astro 和官方插件到最新版本。

```sh
pnpm dlx @astrojs/upgrade
```

> [!NOTE]
> Astro Icon 是第三方插件，暂时不支持 Astro 官方更新命令。
>
> ```sh
> pnpm add astro-icon@latest
> ```

### 👉 常用命令

| Command                    | Action                                           |
| :------------------------- | :----------------------------------------------- |
| `pnpm install`             | Installs dependencies                            |
| `pnpm run dev`             | Starts local dev server at `localhost:4321`      |
| `pnpm run build`           | Build your production site to `./dist/`          |
| `pnpm run preview`         | Preview your build locally, before deploying     |
| `pnpm run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `pnpm run astro -- --help` | Get help using the Astro CLI                     |
| `pnpm store prune`         | Removes unreferenced packages from the store     |

### 🌷 Prettier & ESLint

> [!IMPORTANT]
> 如果使用编辑器例如 VS Code，则不需要手动进行格式化。

终端运行 `prettier . --write` 格式化工作目录所有文件。

```sh
pnpm exec prettier . --write
```

终端运行使用 `eslint` 命令。

```sh
# pnpm exec eslint [options] [file|dir|glob]*
pnpm exec eslint . # format all files in worksapce
```

## 🧐 使用方法

### 🔖 书签

在 `src/content/bookmarks` 下创建新书签。

```yaml
# src/content/bookmarks/example.yaml
url: https://example.com # 必填项：标签的网址
date: 2024-08-01 # 必填项：创建日期（建议不要修改）
title: 书签标题 # 可选项
description: 标签描述 # 可选项
tags: ['标签1', '标签1', '标签1'] # 可选项：默认为 ['others']
favorite: true # 可选项：默认为 false
pinned: true # 可选项：默认为 false
keySearch: 关键字1 关键字2 关键字3 # 可选项
```

> [!TIP] 添加标签图标 （⚠️仅支持 SVG 格式）
>
> 1. 下载标签图标（SVG 格式）
> 2. 图标放在 `src/icons/tags/`目录
> 3. [`iconTagsList`] 添加对应的标签和图标的映射。
> 4. 重新构建网站
>
> [`iconTagsList`]: src/components/bookmarks/BookmarksPage.astro#iconTagsList
