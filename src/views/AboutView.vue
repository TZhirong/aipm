<script setup lang="ts">
import SkillIcon from '../components/SkillIcon.vue'
import { skillGroups, type SkillIcon as SkillIconName } from '../data/skills'

const accent: Record<SkillIconName, { tile: string }> = {
  ai: { tile: 'bg-brand-50 text-brand-600' },
  product: { tile: 'bg-sky-50 text-sky-600' },
  data: { tile: 'bg-teal-50 text-teal-600' }
}
</script>

<template>
  <div class="container-page py-14 sm:py-20">
    <div class="max-w-2xl">
      <p class="eyebrow">About</p>
      <h1 class="mt-3 text-3xl font-semibold tracking-tight text-ink-900 sm:text-4xl">关于我</h1>
    </div>

    <div class="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
      <article
        v-for="group in skillGroups"
        :key="group.id"
        class="card flex h-full flex-col p-6 transition duration-300 hover:-translate-y-1 hover:shadow-lift"
      >
        <div class="flex items-center gap-3">
          <span
            class="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl"
            :class="accent[group.icon].tile"
          >
            <SkillIcon :name="group.icon" />
          </span>
          <div>
            <h2 class="text-base font-semibold text-ink-900">{{ group.title }}</h2>
            <p class="mt-0.5 text-xs leading-5 text-ink-400">{{ group.subtitle }}</p>
          </div>
        </div>

        <ul class="mt-6 flex flex-1 flex-wrap content-start gap-2">
          <li
            v-for="skill in group.skills"
            :key="skill"
            class="rounded-lg bg-slate-50 px-2.5 py-1.5 text-xs text-ink-600"
          >
            {{ skill }}
          </li>
        </ul>

        <div class="mt-6 border-t border-slate-100 pt-4">
          <p class="text-[10px] font-semibold uppercase tracking-[0.18em] text-ink-400">常用工具</p>
          <div class="mt-2.5 flex flex-wrap gap-2">
            <span
              v-for="tool in group.tools"
              :key="tool"
              class="rounded-md border border-slate-200 bg-white px-2 py-1 text-[11px] text-ink-500"
            >
              {{ tool }}
            </span>
          </div>
        </div>
      </article>
    </div>
  </div>
</template>
