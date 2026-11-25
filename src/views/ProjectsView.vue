<script setup lang="ts">
import ProjectCard from '../components/ProjectCard.vue'
import { projects } from '../data/projects'
</script>

<template>
  <div class="container-page py-14 sm:py-20">
    <div class="max-w-2xl">
      <p class="eyebrow">Portfolio</p>
      <h1 class="mt-3 text-3xl font-semibold tracking-tight text-ink-900 sm:text-4xl">作品集</h1>
      <p class="mt-3 text-sm leading-7 text-ink-500 sm:text-base">
        四个 AI 产品，覆盖教学、学习、求职与简历评估场景。每个项目都从真实痛点出发，完成从产品定义到可演示落地的完整链路。
      </p>
    </div>

    <div class="mt-6 flex flex-wrap items-center gap-2">
      <span class="tag">{{ projects.length }} 个项目</span>
      <span class="tag">全部完成 0 → 1</span>
      <span class="tag">前端 mock 数据</span>
    </div>

    <div class="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      <ProjectCard v-for="project in projects" :key="project.slug" :project="project" />
    </div>
  </div>
</template>
