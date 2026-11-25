<script setup lang="ts">
import LottieDecor from '../components/LottieDecor.vue'
import ProjectCard from '../components/ProjectCard.vue'
import { projects } from '../data/projects'

const dataFlowUrl = `${import.meta.env.BASE_URL}lottie/ai-data-flow.json`

const tags = ['LLM', 'RAG', 'Prompt Engineering', 'Agent', 'PRD', '产品评测']

const stats = [
  { value: '4', label: 'AI 产品从 0 到 1' },
  { value: '7', label: '学习系统核心模块' },
  { value: '5', label: '面试题型覆盖' },
  { value: '6', label: '简历诊断维度' }
]

const steps = [
  { title: '需求洞察', desc: '从真实使用场景出发，界定问题与边界。' },
  { title: 'PRD 与规划', desc: '明确目标用户、核心流程、范围与优先级。' },
  { title: '原型设计', desc: '用可交互原型验证信息架构与关键路径。' },
  { title: '方案与评测', desc: '设计 Prompt、RAG 与 Agent 链路，建立评测标准。' },
  { title: '上线与迭代', desc: '静态部署与异常兜底，用反馈驱动下一轮。' }
]
</script>

<template>
  <div>
    <section class="hero-aurora relative isolate overflow-hidden border-b border-slate-200/60">
      <div class="hero-grid absolute inset-0"></div>
      <div
        class="absolute -left-24 top-24 h-64 w-64 rounded-full bg-brand-200/30 blur-3xl"
        aria-hidden="true"
      ></div>
      <div
        class="absolute -right-20 bottom-0 h-72 w-72 rounded-full bg-sky-200/30 blur-3xl"
        aria-hidden="true"
      ></div>

      <div
        class="pointer-events-none absolute -right-16 -top-16 -z-10 hidden h-[420px] w-[420px] opacity-30 md:block"
        aria-hidden="true"
      >
        <LottieDecor
          :lottie-json-url="dataFlowUrl"
          :width="420"
          :height="420"
          :speed="0.5"
        />
      </div>

      <div class="container-page relative py-16 sm:py-20 lg:py-24">
        <div class="grid items-center gap-14 lg:grid-cols-[1.08fr_0.92fr] lg:gap-16">
          <div>
            <span
              class="inline-flex items-center gap-2 rounded-full border border-brand-200/80 bg-white/80 px-3.5 py-1.5 text-[11px] font-medium uppercase tracking-[0.16em] text-brand-700 backdrop-blur"
            >
              <span class="h-1.5 w-1.5 rounded-full bg-brand-500"></span>
              AI Product Manager · Portfolio
            </span>

            <h1
              class="mt-6 text-[2.1rem] font-semibold leading-[1.18] tracking-tight text-ink-900 sm:text-5xl lg:text-[3.35rem]"
            >
              把 AI 能力，<br class="hidden sm:block" />
              做成<span
                class="bg-gradient-to-r from-brand-600 via-brand-500 to-sky-500 bg-clip-text text-transparent"
                >真正可用</span
              >的产品
            </h1>

            <p class="mt-6 max-w-xl text-base leading-8 text-ink-500 sm:text-[17px]">
              AI 产品经理求职者。独立完成 4 个 AI 产品从 0 到 1，熟悉 LLM、RAG、Prompt
              Engineering 与 Agent，能走完需求洞察、PRD、原型、评测到上线的完整链路。
            </p>

            <div class="mt-6 flex flex-wrap gap-2">
              <span v-for="tag in tags" :key="tag" class="tag bg-white/70 backdrop-blur">
                {{ tag }}
              </span>
            </div>

            <div class="mt-9 flex flex-wrap items-center gap-3">
              <RouterLink to="/projects" class="btn btn-primary">
                查看作品
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
                  <path d="M5 12h14M13 6l6 6-6 6" />
                </svg>
              </RouterLink>
              <a href="mailto:tu_zhirong@163.com" class="btn btn-secondary">
                联系我
                <svg
                  class="h-4 w-4"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="1.8"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  aria-hidden="true"
                >
                  <rect x="3" y="5" width="18" height="14" rx="3" />
                  <path d="m4 7 8 6 8-6" />
                </svg>
              </a>
            </div>

            <p class="mt-6 text-xs text-ink-400">4 个 AI 产品 · 全部完成从 0 到 1 · 在线可演示</p>
          </div>

          <div class="relative hidden lg:block" aria-hidden="true">
            <div
              class="absolute -inset-5 rounded-[2.2rem] bg-gradient-to-tr from-brand-200/50 via-white/50 to-sky-100/70 blur-2xl"
            ></div>
            <div
              class="relative rounded-3xl border border-white/80 bg-white/85 p-5 shadow-soft backdrop-blur-xl"
            >
              <div class="flex items-center justify-between">
                <span class="font-mono text-[10px] uppercase tracking-[0.16em] text-ink-400">
                  artifact-v1 / output
                </span>
                <span
                  class="inline-flex items-center gap-1.5 rounded-full bg-emerald-50 px-2.5 py-1 text-[10px] font-medium text-emerald-600"
                >
                  <span class="h-1.5 w-1.5 rounded-full bg-emerald-500"></span>
                  streaming
                </span>
              </div>

              <div class="mt-4 rounded-2xl bg-slate-900/95 p-4 font-mono text-[11px] leading-6 text-slate-300">
                <p><span class="text-sky-300">"protocol"</span>: <span class="text-emerald-300">"artifact-v1"</span>,</p>
                <p><span class="text-sky-300">"type"</span>: <span class="text-emerald-300">"lesson_plan"</span>,</p>
                <p><span class="text-sky-300">"schema"</span>: <span class="text-amber-200">"json-schema"</span>,</p>
                <p><span class="text-sky-300">"sections"</span>: [<span class="text-emerald-300">"目标"</span>, <span class="text-emerald-300">"环节"</span>, <span class="text-emerald-300">"作业"</span>]</p>
              </div>

              <div class="mt-3 grid grid-cols-2 gap-2">
                <div class="rounded-xl border border-slate-200/80 bg-white px-3 py-2.5">
                  <p class="text-[10px] text-ink-400">结构校验</p>
                  <p class="mt-0.5 text-xs font-medium text-ink-700">通过 · 无缺失字段</p>
                </div>
                <div class="rounded-xl border border-slate-200/80 bg-white px-3 py-2.5">
                  <p class="text-[10px] text-ink-400">密钥位置</p>
                  <p class="mt-0.5 text-xs font-medium text-ink-700">浏览器本地</p>
                </div>
              </div>

              <div class="mt-3 flex flex-wrap gap-1.5">
                <span class="tag">教案</span>
                <span class="tag">课件</span>
                <span class="tag">试题</span>
                <span class="tag">反馈</span>
                <span class="tag">图谱</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <div class="container-page relative z-10 -mt-8">
      <div class="card grid grid-cols-2 gap-6 px-6 py-7 sm:grid-cols-4 sm:px-8">
        <div v-for="stat in stats" :key="stat.label" class="text-center sm:text-left">
          <p class="font-mono text-3xl font-light text-brand-600">{{ stat.value }}</p>
          <p class="mt-1 text-xs text-ink-400">{{ stat.label }}</p>
        </div>
      </div>
    </div>

    <section class="container-page py-16 sm:py-20">
      <div class="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p class="eyebrow">Selected Work</p>
          <h2 class="mt-3 text-2xl font-semibold tracking-tight text-ink-900 sm:text-3xl">
            精选作品
          </h2>
          <p class="mt-2 max-w-xl text-sm leading-7 text-ink-500">
            覆盖教学备课、学习规划、面试准备与简历评估四个场景，每个项目都从真实痛点出发，并完成可演示的落地。
          </p>
        </div>
        <RouterLink
          to="/projects"
          class="inline-flex items-center gap-1.5 text-sm font-medium text-brand-600 transition hover:text-brand-700"
        >
          查看全部作品
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
            <path d="M5 12h14M13 6l6 6-6 6" />
          </svg>
        </RouterLink>
      </div>

      <div class="mt-10 grid gap-6 md:grid-cols-2">
        <ProjectCard v-for="project in projects" :key="project.slug" :project="project" />
      </div>
    </section>

    <section class="border-y border-slate-200/70 bg-white">
      <div class="container-page py-16 sm:py-20">
        <div class="max-w-2xl">
          <p class="eyebrow">How I Work</p>
          <h2 class="mt-3 text-2xl font-semibold tracking-tight text-ink-900 sm:text-3xl">
            从洞察到上线
          </h2>
          <p class="mt-2 text-sm leading-7 text-ink-500">
            不把 AI 当作演示特效，而是当作需要被定义、被评测、被兜底的产品能力。
          </p>
        </div>

        <ol class="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          <li
            v-for="(step, index) in steps"
            :key="step.title"
            class="rounded-2xl border border-slate-200/80 bg-canvas/60 p-5"
          >
            <span class="font-mono text-xs text-brand-500">{{ String(index + 1).padStart(2, '0') }}</span>
            <h3 class="mt-3 text-sm font-semibold text-ink-900">{{ step.title }}</h3>
            <p class="mt-2 text-xs leading-6 text-ink-500">{{ step.desc }}</p>
          </li>
        </ol>
      </div>
    </section>

    <section class="container-page py-16 sm:py-20">
      <div
        class="relative overflow-hidden rounded-[2rem] bg-gradient-to-br from-brand-600 via-brand-700 to-brand-900 px-6 py-12 text-white sm:px-12 sm:py-14"
      >
        <div
          class="absolute -right-16 -top-20 h-64 w-64 rounded-full border border-white/15"
          aria-hidden="true"
        ></div>
        <div
          class="absolute -bottom-24 left-1/3 h-64 w-64 rounded-full border border-white/10"
          aria-hidden="true"
        ></div>

        <div class="relative flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
          <div class="max-w-xl">
            <p class="text-[11px] font-semibold uppercase tracking-[0.22em] text-brand-200">
              Contact
            </p>
            <h2 class="mt-3 text-2xl font-semibold tracking-tight sm:text-3xl">
              想进一步了解项目细节？
            </h2>
            <p class="mt-3 text-sm leading-7 text-brand-100/90">
              欢迎通过邮件交流产品思路、AI 方案设计或岗位机会，我会尽快回复。
            </p>
          </div>
          <a
            href="mailto:tu_zhirong@163.com"
            class="inline-flex w-fit items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-medium text-brand-700 transition hover:-translate-y-0.5 hover:bg-brand-50"
          >
            tu_zhirong@163.com
            <svg
              class="h-4 w-4"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="1.8"
              stroke-linecap="round"
              stroke-linejoin="round"
              aria-hidden="true"
            >
              <rect x="3" y="5" width="18" height="14" rx="3" />
              <path d="m4 7 8 6 8-6" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  </div>
</template>
