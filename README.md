# AI 产品经理求职作品集

一个使用 Vue 3 + Vite + TailwindCSS + Vue Router 构建的静态作品集网站。全站数据前端 mock，不调用任何业务后端接口，构建产物可直接部署到 GitHub Pages。

站点包含 4 个 AI 产品案例：高校备课助手、AI 智能学习计划系统、面题工坊、简历智能评估助手。

## 技术栈

- Vue 3（Composition API + `<script setup>`）
- Vite 6
- TailwindCSS 3
- Vue Router 4
- TypeScript

## 本地运行

```bash
npm install
npm run dev
```

启动后按终端提示访问本地地址（默认 `http://localhost:5173`）。

## 构建与预览

```bash
npm run build
npm run preview
```

`npm run build` 会先执行 `vue-tsc` 类型检查，再输出生产产物到根目录的 `dist/`。

## 部署到 GitHub Pages

### 1. 配置 base 路径

`vite.config.ts` 中的 `base` 需要与部署路径匹配。

- 部署到 `https://<用户名>.github.io/<仓库名>/` 时，建议将 `base` 改为 `/<仓库名>/`，例如仓库名为 `ai-pm-portfolio`：

```ts
export default defineConfig({
  base: '/ai-pm-portfolio/',
  plugins: [vue()]
})
```

- 当前默认配置为 `base: './'`，使用相对路径，直接部署到任意仓库路径下也能正常加载资源。

### 2. 构建

```bash
npm run build
```

### 3. 发布 dist

在 GitHub 新建仓库后，把 `dist` 推送到 `gh-pages` 分支：

```bash
cd dist
git init
git add -A
git commit -m "deploy"
git push -f git@github.com:<用户名>/<仓库名>.git gh-pages
```

然后在仓库页面进入 **Settings → Pages**：

- Source 选择 **Deploy from a branch**
- Branch 选择 **gh-pages**，目录选择 **/ (root)**
- 保存后等待部署完成，访问 `https://<用户名>.github.io/<仓库名>/`

### 4. 路由说明

项目使用 **hash 路由**（地址形如 `/#/projects/prep-copilot`），因此刷新页面或直接访问任意详情链接都不会在 GitHub Pages 上出现 404，无需额外配置 `404.html`。

## 目录结构

```
.
├── public/
│   └── favicon.svg
├── src/
│   ├── components/
│   │   ├── ContentSection.vue      # 详情页通用区块
│   │   ├── ProjectCard.vue         # 项目卡片
│   │   ├── ShotPlaceholder.vue     # 截图占位
│   │   ├── SkillIcon.vue           # 技能图标
│   │   ├── TheFooter.vue           # 全局页脚
│   │   └── TheNavbar.vue           # 顶部导航
│   ├── data/
│   │   ├── projects.ts             # 4 个项目的 mock 数据
│   │   └── skills.ts               # 技能分组数据
│   ├── router/
│   │   └── index.ts                # 路由与页面标题
│   ├── views/
│   │   ├── AboutView.vue           # 关于我
│   │   ├── HomeView.vue            # 首页
│   │   ├── NotFoundView.vue        # 404
│   │   ├── ProjectDetailView.vue   # 项目详情
│   │   └── ProjectsView.vue        # 作品列表
│   ├── App.vue
│   ├── main.ts
│   ├── style.css
│   └── vite-env.d.ts
├── index.html
├── package.json
├── postcss.config.js
├── tailwind.config.js
├── tsconfig.json
└── vite.config.ts
```

## 内容维护

- 项目文案、标签、详情页各区块内容：`src/data/projects.ts`
- 技能与工具：`src/data/skills.ts`
- 详情页底部的「在线演示」为占位按钮，部署后将实际演示地址替换到 `src/views/ProjectDetailView.vue` 的按钮链接即可
- 页面截图占位：`src/components/ShotPlaceholder.vue`，可直接替换为 `<img>` 或真实截图组件

## 说明

- 全站无业务后端请求，项目数据均为前端 mock。
- 联系方式仅保留邮箱：`tu_zhirong@163.com`。
- 导航、页脚与所有详情页均为响应式布局，适配移动端与桌面端。
