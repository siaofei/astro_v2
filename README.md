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
