import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import { projects } from '../data/projects'

const router = createRouter({
  // 使用 hash 路由，刷新页面或直接访问详情链接都不会在 GitHub Pages 上出现 404
  history: createWebHashHistory(),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/projects',
      name: 'projects',
      component: () => import('../views/ProjectsView.vue')
    },
    {
      path: '/projects/:slug',
      name: 'project-detail',
      component: () => import('../views/ProjectDetailView.vue')
    },
    {
      path: '/:pathMatch(.*)*',
      name: 'not-found',
      component: () => import('../views/NotFoundView.vue')
    }
  ],
  scrollBehavior(_to, _from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    }
    return { top: 0 }
  }
})

const staticTitles: Record<string, string> = {
  home: 'AI 产品经理作品集',
  about: '关于我｜AI 产品经理作品集',
  projects: '作品集｜AI 产品经理作品集',
  'not-found': '页面未找到｜AI 产品经理作品集'
}

router.afterEach((to) => {
  if (to.name === 'project-detail') {
    const project = projects.find((item) => item.slug === String(to.params.slug))
    document.title = project ? `${project.title}｜AI 产品经理作品集` : 'AI 产品经理作品集'
    return
  }
  document.title = staticTitles[String(to.name)] ?? 'AI 产品经理作品集'
})

export default router
