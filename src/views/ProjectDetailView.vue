<script setup lang="ts">
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import ContentSection from '../components/ContentSection.vue'
import ShotPlaceholder from '../components/ShotPlaceholder.vue'
import { projects } from '../data/projects'

const route = useRoute()
const project = computed(() => projects.find((item) => item.slug === String(route.params.slug)))
const assetBase = import.meta.env.BASE_URL

function shotUrl(image: string) {
  return `${assetBase}${image}`
}

const toc = [
  { id: 'overview', label: '项目概述' },
  { id: 'pain', label: '痛点与机会' },
  { id: 'design', label: '产品设计' },
  { id: 'ai', label: 'AI 技术方案' },
  { id: 'delivery', label: '落地与验证' },
  { id: 'shots', label: '界面预览' },
  { id: 'highlights', label: '项目亮点' }
]

function scrollTo(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
}
</script>

<template>
  <div v-if="project">
    <section class="hero-aurora relative overflow-hidden border-b border-slate-200/70">
      <div class="hero-grid absolute inset-0"></div>
      <div class="container-page relative py-10 lg:py-14">
        <RouterLink
          to="/projects"
          class="inline-flex items-center gap-2 text-sm text-ink-500 transition hover:text-brand-700"
        >
          <svg
            class="h-4 w-4"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            aria-hidden="true"
          >
            <path d="M19 12H5M11 18l-6-6 6-6" />
          </svg>
          返回作品列表
        </RouterLink>

        <div class="mt-8 max-w-3xl">
          <div class="flex flex-wrap items-center gap-2">
            <span
              class="rounded-full border border-brand-200 bg-white/80 px-3 py-1 text-xs font-medium text-brand-700 backdrop-blur"
            >
              {{ project.status }}
            </span>
            <span class="tag bg-white/70 backdrop-blur">{{ project.role }}</span>
            <span class="tag bg-white/70 backdrop-blur">{{ project.form }}</span>
          </div>

          <h1 class="mt-5 text-3xl font-semibold tracking-tight text-ink-900 sm:text-4xl lg:text-5xl">
            {{ project.title }}
          </h1>
          <p class="mt-2 font-mono text-[11px] uppercase tracking-[0.2em] text-ink-400">
            {{ project.english }}
          </p>
          <p class="mt-5 text-base leading-8 text-ink-500 sm:text-lg">{{ project.tagline }}</p>

          <div class="mt-6 flex flex-wrap gap-2">
            <span v-for="tag in project.tags" :key="tag" class="tag bg-white/70 backdrop-blur">
              {{ tag }}
            </span>
          </div>
        </div>
      </div>
    </section>

    <div class="container-page py-10 lg:py-14">
      <div class="lg:grid lg:grid-cols-[220px_minmax(0,1fr)] lg:gap-12">
        <aside class="hidden lg:block">
          <div class="sticky top-28">
            <p class="eyebrow">Contents</p>
            <nav class="mt-4 space-y-1" aria-label="页面目录">
              <button
                v-for="(item, index) in toc"
                :key="item.id"
                type="button"
                class="flex w-full items-center gap-3 rounded-xl px-3 py-2 text-left text-sm text-ink-500 transition hover:bg-white hover:text-brand-700"
                @click="scrollTo(item.id)"
              >
                <span class="font-mono text-[10px] text-ink-300">
                  {{ String(index + 1).padStart(2, '0') }}
                </span>
                {{ item.label }}
              </button>
            </nav>

            <div class="mt-8 rounded-2xl border border-slate-200/80 bg-white p-4">
              <p class="text-[10px] uppercase tracking-[0.18em] text-ink-400">项目角色</p>
              <p class="mt-1 text-sm font-medium text-ink-700">{{ project.role }}</p>
              <p class="mt-4 text-[10px] uppercase tracking-[0.18em] text-ink-400">交付形态</p>
              <p class="mt-1 text-sm font-medium text-ink-700">{{ project.form }}</p>
              <a
                href="mailto:tu_zhirong@163.com"
                class="mt-5 inline-flex text-xs font-medium text-brand-600 transition hover:text-brand-700"
              >
                交流项目细节 →
              </a>
            </div>
          </div>
        </aside>

        <div class="min-w-0 space-y-12 lg:space-y-16">
          <ContentSection id="overview" index="01" title="项目概述">
            <div class="space-y-4">
              <p
                v-for="(paragraph, index) in project.summary"
                :key="index"
                class="text-[15px] leading-8 text-ink-600"
              >
                {{ paragraph }}
              </p>
            </div>
          </ContentSection>

          <ContentSection id="pain" index="02" title="痛点与机会">
            <div class="grid gap-4 sm:grid-cols-2">
              <div
                v-for="(item, index) in project.painPoints"
                :key="item.title"
                class="rounded-2xl border border-slate-200/80 bg-white p-5"
              >
                <div class="flex items-center gap-2">
                  <span class="font-mono text-[10px] text-ink-300">
                    {{ String(index + 1).padStart(2, '0') }}
                  </span>
                  <h3 class="text-sm font-semibold text-ink-900">{{ item.title }}</h3>
                </div>
                <p class="mt-2 text-sm leading-7 text-ink-500">{{ item.desc }}</p>
              </div>
            </div>
          </ContentSection>

          <ContentSection id="design" index="03" title="产品设计">
            <ol class="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              <li
                v-for="(block, index) in project.design"
                :key="block.title"
                class="relative"
              >
                <div
                  class="h-full rounded-2xl border border-slate-200/80 bg-white p-5 transition duration-200 hover:-translate-y-0.5 hover:border-brand-200 hover:shadow-card"
                >
                  <span
                    class="flex h-8 w-8 items-center justify-center rounded-lg bg-brand-50 font-mono text-[11px] text-brand-600"
                  >
                    {{ String(index + 1).padStart(2, '0') }}
                  </span>
                  <h3 class="mt-3 text-sm font-semibold leading-6 text-ink-900">{{ block.title }}</h3>
                  <p class="mt-1.5 text-[13px] leading-6 text-ink-500">{{ block.desc }}</p>
                </div>
                <span
                  v-if="index < project.design.length - 1"
                  class="absolute -right-4 top-[30px] hidden text-brand-300 lg:block"
                  aria-hidden="true"
                >
                  <svg
                    class="h-4 w-4"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2.2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <path d="M9 6l6 6-6 6" />
                  </svg>
                </span>
              </li>
            </ol>
          </ContentSection>

          <ContentSection id="ai" index="04" title="AI 技术方案">
            <ol class="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              <li
                v-for="(block, index) in project.ai"
                :key="block.title"
                class="relative"
              >
                <div
                  class="h-full rounded-2xl border border-brand-100 bg-gradient-to-br from-brand-50/60 to-white p-5 transition duration-200 hover:-translate-y-0.5 hover:shadow-card"
                >
                  <span
                    class="flex h-8 w-8 items-center justify-center rounded-lg border border-brand-100 bg-white font-mono text-[11px] text-brand-600"
                  >
                    {{ String(index + 1).padStart(2, '0') }}
                  </span>
                  <h3 class="mt-3 text-sm font-semibold leading-6 text-ink-900">{{ block.title }}</h3>
                  <p class="mt-1.5 text-[13px] leading-6 text-ink-500">{{ block.desc }}</p>
                </div>
                <span
                  v-if="index < project.ai.length - 1"
                  class="absolute -right-4 top-[30px] hidden text-brand-300 lg:block"
                  aria-hidden="true"
                >
                  <svg
                    class="h-4 w-4"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2.2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <path d="M9 6l6 6-6 6" />
                  </svg>
                </span>
              </li>
            </ol>
          </ContentSection>

          <ContentSection id="delivery" index="05" title="落地与验证">
            <div class="grid gap-4 sm:grid-cols-3">
              <div
                v-for="item in project.delivery"
                :key="item.title"
                class="rounded-2xl border border-slate-200/80 bg-white p-5"
              >
                <svg
                  class="h-5 w-5 text-emerald-500"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="1.8"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  aria-hidden="true"
                >
                  <circle cx="12" cy="12" r="9" />
                  <path d="m8.5 12 2.3 2.3 4.7-4.8" />
                </svg>
                <h3 class="mt-3 text-sm font-semibold text-ink-900">{{ item.title }}</h3>
                <p class="mt-2 text-sm leading-7 text-ink-500">{{ item.desc }}</p>
              </div>
            </div>
          </ContentSection>

          <ContentSection id="shots" index="06" title="界面预览">
            <div class="grid gap-4 sm:grid-cols-2">
              <ShotPlaceholder
                v-for="shot in project.shots"
                :key="shot.title"
                :title="shot.title"
                :src="shotUrl(shot.image)"
              />
            </div>
          </ContentSection>

          <ContentSection id="highlights" index="07" title="项目亮点">
            <div class="grid gap-4 sm:grid-cols-2">
              <div
                v-for="item in project.highlights"
                :key="item.title"
                class="rounded-2xl border border-slate-200/80 bg-white p-5"
              >
                <span
                  class="flex h-8 w-8 items-center justify-center rounded-full bg-emerald-50 text-emerald-600"
                >
                  <svg
                    class="h-4 w-4"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    aria-hidden="true"
                  >
                    <path d="m5 12 4.5 4.5L19 7" />
                  </svg>
                </span>
                <h3 class="mt-3 text-sm font-semibold text-ink-900">{{ item.title }}</h3>
                <p class="mt-1.5 text-sm leading-7 text-ink-500">{{ item.desc }}</p>
              </div>
            </div>
          </ContentSection>

          <div
            class="relative overflow-hidden rounded-3xl border border-slate-200/80 bg-gradient-to-br from-brand-50 via-white to-sky-50 p-6 sm:p-8"
          >
            <div
              class="pointer-events-none absolute -right-16 -top-20 h-56 w-56 rounded-full bg-brand-200/30 blur-3xl"
              aria-hidden="true"
            ></div>
            <div class="relative flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
              <div class="max-w-xl">
                <p class="eyebrow">Live Demo</p>
                <h2 class="mt-2 text-xl font-semibold tracking-tight text-ink-900">在线演示</h2>
                <p class="mt-2 text-sm leading-7 text-ink-500">
                  该项目已部署上线，点击下方按钮即可在新标签页打开完整演示。
                </p>
                <div class="mt-4 flex flex-wrap items-center gap-x-5 gap-y-2 text-[11px] text-ink-400">
                  <span class="inline-flex items-center gap-1.5">
                    <span class="h-1.5 w-1.5 rounded-full bg-emerald-500"></span>
                    可直接访问
                  </span>
                  <span class="inline-flex items-center gap-1.5">
                    <svg
                      class="h-3.5 w-3.5"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="1.8"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      aria-hidden="true"
                    >
                      <path d="M14 4h6v6M20 4 10 14M18 14v5a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h5" />
                    </svg>
                    新标签页打开
                  </span>
                </div>
              </div>
              <div class="flex shrink-0 flex-wrap items-center gap-3">
                <a
                  :href="project.demoUrl"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="btn bg-emerald-600 text-white shadow-lg shadow-emerald-600/20 hover:-translate-y-0.5 hover:bg-emerald-700"
                >
                  在线演示
                  <svg
                    class="h-4 w-4"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    aria-hidden="true"
                  >
                    <path d="M7 17 17 7M9 7h8v8" />
                  </svg>
                </a>
                <RouterLink to="/projects" class="btn btn-secondary">返回作品列表</RouterLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div v-else class="container-page flex flex-col items-center py-24 text-center sm:py-32">
    <p class="font-mono text-5xl font-light text-brand-300">404</p>
    <h1 class="mt-5 text-2xl font-semibold tracking-tight text-ink-900 sm:text-3xl">项目不存在</h1>
    <p class="mt-3 max-w-md text-sm leading-7 text-ink-500">
      该项目可能已下线或链接有误，返回作品列表查看更多内容。
    </p>
    <RouterLink to="/projects" class="btn btn-primary mt-8">返回作品列表</RouterLink>
  </div>
</template>
