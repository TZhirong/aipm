<script setup lang="ts">
import { ref, watch } from 'vue'
import { useRoute } from 'vue-router'
import LottieDecor from './LottieDecor.vue'

const route = useRoute()
const menuOpen = ref(false)
const brainUrl = `${import.meta.env.BASE_URL}lottie/ai-brain.json`

const navItems = [
  { label: '首页', to: '/' },
  { label: '关于', to: '/about' },
  { label: '作品', to: '/projects' }
]

function isActive(path: string) {
  if (path === '/') {
    return route.path === '/'
  }
  return route.path === path || route.path.startsWith(`${path}/`)
}

watch(
  () => route.fullPath,
  () => {
    menuOpen.value = false
  }
)
</script>

<template>
  <header class="sticky top-0 z-50 border-b border-slate-200/70 bg-white/80 backdrop-blur-xl">
    <div class="container-page flex h-16 items-center justify-between gap-4">
      <RouterLink to="/" class="flex items-center gap-3" aria-label="返回首页">
        <span
          class="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-brand-600 to-brand-400 font-mono text-sm font-bold text-white shadow-md shadow-brand-600/20"
        >
          AI
        </span>
        <span class="hidden flex-col leading-tight sm:flex">
          <span class="text-sm font-semibold tracking-tight text-ink-900">AI 产品经理</span>
          <span class="text-[10px] uppercase tracking-[0.18em] text-ink-400">Portfolio</span>
        </span>
      </RouterLink>

      <nav class="hidden items-center gap-1 md:flex" aria-label="主导航">
        <RouterLink
          v-for="item in navItems"
          :key="item.to"
          :to="item.to"
          class="rounded-full px-4 py-2 text-sm transition"
          :class="
            isActive(item.to)
              ? 'bg-brand-50 font-medium text-brand-700'
              : 'text-ink-500 hover:bg-slate-50 hover:text-ink-900'
          "
        >
          {{ item.label }}
        </RouterLink>
      </nav>

      <div class="hidden items-center gap-3 md:flex">
        <LottieDecor
          :lottie-json-url="brainUrl"
          :width="24"
          :height="24"
          :speed="0.6"
        />
        <a
          href="mailto:tu_zhirong@163.com"
          class="rounded-full border border-slate-200 bg-white px-4 py-2 text-xs font-medium text-ink-700 transition hover:border-brand-300 hover:text-brand-700"
        >
          联系我
        </a>
      </div>

      <button
        type="button"
        class="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-slate-200 bg-white text-ink-600 transition hover:text-brand-700 md:hidden"
        :aria-expanded="menuOpen"
        aria-label="切换导航菜单"
        @click="menuOpen = !menuOpen"
      >
        <svg
          v-if="!menuOpen"
          class="h-5 w-5"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="1.8"
          stroke-linecap="round"
          aria-hidden="true"
        >
          <path d="M4 7h16M4 12h16M4 17h16" />
        </svg>
        <svg
          v-else
          class="h-5 w-5"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="1.8"
          stroke-linecap="round"
          aria-hidden="true"
        >
          <path d="M6 6l12 12M18 6L6 18" />
        </svg>
      </button>
    </div>

    <Transition name="menu">
      <div v-if="menuOpen" class="border-t border-slate-100 bg-white md:hidden">
        <nav class="container-page flex flex-col gap-1 py-4" aria-label="移动端导航">
          <RouterLink
            v-for="item in navItems"
            :key="item.to"
            :to="item.to"
            class="rounded-xl px-4 py-3 text-sm transition"
            :class="
              isActive(item.to)
                ? 'bg-brand-50 font-medium text-brand-700'
                : 'text-ink-600 hover:bg-slate-50'
            "
          >
            {{ item.label }}
          </RouterLink>
          <a
            href="mailto:tu_zhirong@163.com"
            class="mt-2 rounded-xl bg-brand-50 px-4 py-3 text-sm font-medium text-brand-700"
          >
            联系我 · tu_zhirong@163.com
          </a>
        </nav>
      </div>
    </Transition>
  </header>
</template>

<style scoped>
.menu-enter-active,
.menu-leave-active {
  transition: opacity 0.18s ease, transform 0.18s ease;
}

.menu-enter-from,
.menu-leave-to {
  opacity: 0;
  transform: translateY(-6px);
}
</style>
