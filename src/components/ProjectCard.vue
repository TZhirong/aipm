<script setup lang="ts">
import LottieDecor from './LottieDecor.vue'
import type { Accent, Project } from '../data/projects'

defineProps<{ project: Project }>()

const particleUrl = `${import.meta.env.BASE_URL}lottie/ai-particles.json`

const visual: Record<Accent, string> = {
  sky: 'from-sky-100 via-blue-50 to-white',
  indigo: 'from-indigo-100 via-slate-50 to-white',
  teal: 'from-teal-100 via-emerald-50 to-white',
  violet: 'from-violet-100 via-slate-50 to-white'
}
</script>

<template>
  <RouterLink
    :to="`/projects/${project.slug}`"
    class="group flex h-full flex-col overflow-hidden rounded-3xl border border-slate-200/80 bg-white shadow-card transition duration-300 hover:-translate-y-1.5 hover:border-brand-200 hover:shadow-lift"
  >
    <div
      class="relative overflow-hidden border-b border-slate-100 bg-gradient-to-br p-5"
      :class="visual[project.accent]"
    >
      <div class="absolute -right-10 -top-12 h-32 w-32 rounded-full border border-white/70"></div>
      <div class="absolute -bottom-14 -left-8 h-32 w-32 rounded-full border border-white/60"></div>
      <div class="absolute right-10 top-10 h-2 w-2 rounded-full bg-white/80"></div>

      <LottieDecor
        :lottie-json-url="particleUrl"
        :width="80"
        :height="80"
        :auto-play="false"
        hover-play
        class="absolute left-0 top-0 opacity-50"
      />

      <div class="relative flex items-start justify-between gap-2">
        <span class="font-mono text-2xl font-light text-ink-400/80">{{ project.index }}</span>
        <span
          class="rounded-full border border-white/80 bg-white/80 px-2.5 py-1 text-[10px] font-medium text-ink-600 backdrop-blur"
        >
          {{ project.status }}
        </span>
      </div>

      <div class="relative mt-8">
        <p class="text-[10px] font-medium uppercase tracking-[0.18em] text-ink-400">
          {{ project.english }}
        </p>
        <div class="mt-2.5 flex items-center gap-2">
          <span class="h-1.5 w-10 rounded-full bg-ink-300/50"></span>
          <span class="h-1.5 w-5 rounded-full bg-ink-300/30"></span>
          <span class="h-1.5 w-2.5 rounded-full bg-ink-300/20"></span>
        </div>
      </div>
    </div>

    <div class="flex flex-1 flex-col p-6">
      <h3 class="text-lg font-semibold text-ink-900 transition group-hover:text-brand-700">
        {{ project.title }}
      </h3>
      <p class="mt-2 flex-1 text-sm leading-6 text-ink-500">{{ project.tagline }}</p>

      <div class="mt-4 flex flex-wrap gap-1.5">
        <span
          v-for="tag in project.tags.slice(0, 3)"
          :key="tag"
          class="rounded-md bg-slate-50 px-2 py-1 text-[11px] text-ink-500"
        >
          {{ tag }}
        </span>
      </div>

      <div class="mt-5 flex items-center justify-between border-t border-slate-100 pt-4">
        <span class="text-xs text-ink-400">{{ project.role }}</span>
        <span class="inline-flex items-center gap-1 text-xs font-medium text-brand-600">
          查看详情
          <svg
            class="h-3.5 w-3.5 transition group-hover:translate-x-0.5"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            aria-hidden="true"
          >
            <path d="M5 12h14M13 6l6 6-6 6" />
          </svg>
        </span>
      </div>
    </div>
  </RouterLink>
</template>
