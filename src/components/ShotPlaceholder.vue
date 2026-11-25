<script setup lang="ts">
import { onBeforeUnmount, ref, watch } from 'vue'

defineProps<{
  title: string
  src: string
}>()

const failed = ref(false)
const open = ref(false)
const zoom = ref(1)

const zoomBtnClass =
  'flex h-8 min-w-8 items-center justify-center rounded-lg border border-white/20 bg-white/10 px-2 text-sm text-white/80 transition hover:bg-white/20 hover:text-white'

function openPreview() {
  if (failed.value) return
  zoom.value = 1
  open.value = true
}

function closePreview() {
  open.value = false
}

function zoomIn() {
  zoom.value = Math.min(3, Math.round((zoom.value + 0.25) * 100) / 100)
}

function zoomOut() {
  zoom.value = Math.max(0.5, Math.round((zoom.value - 0.25) * 100) / 100)
}

function resetZoom() {
  zoom.value = 1
}

function onKeydown(event: KeyboardEvent) {
  if (event.key === 'Escape') closePreview()
  if (event.key === '+' || event.key === '=') zoomIn()
  if (event.key === '-') zoomOut()
}

watch(open, (value) => {
  document.body.style.overflow = value ? 'hidden' : ''
  if (value) window.addEventListener('keydown', onKeydown)
  else window.removeEventListener('keydown', onKeydown)
})

onBeforeUnmount(() => {
  document.body.style.overflow = ''
  window.removeEventListener('keydown', onKeydown)
})
</script>

<template>
  <figure class="overflow-hidden rounded-2xl border border-brand-100 bg-brand-50/40">
    <div class="flex items-center gap-1.5 border-b border-brand-100/80 bg-white/70 px-4 py-2.5">
      <span class="h-2 w-2 rounded-full bg-slate-300"></span>
      <span class="h-2 w-2 rounded-full bg-slate-200"></span>
      <span class="h-2 w-2 rounded-full bg-slate-200"></span>
      <span class="ml-2 text-[11px] text-ink-400">界面预览</span>
    </div>
    <button
      type="button"
      class="group relative block w-full cursor-zoom-in disabled:cursor-default"
      :aria-label="`放大预览：${title}`"
      :disabled="failed"
      @click="openPreview"
    >
      <div class="flex aspect-[16/9] items-center justify-center bg-white/50 p-2">
        <img
          v-if="!failed"
          :src="src"
          :alt="`${title} 界面预览`"
          class="h-full w-full rounded-xl object-cover"
          loading="lazy"
          decoding="async"
          @error="failed = true"
        />
        <div v-else class="shot-grid flex h-full w-full flex-col items-center justify-center gap-2">
          <svg
            class="h-7 w-7 text-brand-300"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
            aria-hidden="true"
          >
            <rect x="3" y="4" width="18" height="16" rx="2.5" />
            <circle cx="8.5" cy="9.5" r="1.5" />
            <path d="m5 18 5-5 3 3 2-2 4 4" />
          </svg>
          <p class="text-xs text-ink-400">图片加载失败</p>
        </div>
      </div>
      <span
        v-if="!failed"
        class="pointer-events-none absolute inset-0 flex items-center justify-center bg-slate-900/0 opacity-0 transition duration-200 group-hover:bg-slate-900/20 group-hover:opacity-100"
      >
        <span
          class="flex items-center gap-1.5 rounded-full bg-white/90 px-3 py-1.5 text-xs font-medium text-ink-700 shadow-sm"
        >
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
            <circle cx="11" cy="11" r="7" />
            <path d="m20 20-3.5-3.5M11 8v6M8 11h6" />
          </svg>
          点击放大
        </span>
      </span>
    </button>
  </figure>

  <Teleport to="body">
    <div
      v-if="open"
      class="fixed inset-0 z-[100] flex flex-col bg-slate-950/85 p-4 backdrop-blur-sm sm:p-6"
      role="dialog"
      aria-modal="true"
      :aria-label="`${title} 界面预览`"
    >
      <div class="flex items-center justify-end gap-4 text-white">
        <div class="flex shrink-0 items-center gap-1.5">
          <button type="button" :class="zoomBtnClass" aria-label="缩小" @click="zoomOut">−</button>
          <span class="w-12 text-center font-mono text-xs text-white/70">
            {{ Math.round(zoom * 100) }}%
          </span>
          <button type="button" :class="zoomBtnClass" aria-label="放大" @click="zoomIn">+</button>
          <button type="button" :class="zoomBtnClass" @click="resetZoom">1:1</button>
          <button
            type="button"
            :class="zoomBtnClass"
            class="ml-2"
            aria-label="关闭预览"
            @click="closePreview"
          >
            ×
          </button>
        </div>
      </div>
      <div class="mt-4 flex min-h-0 flex-1 items-center justify-center" @click.self="closePreview">
        <img
          :src="src"
          :alt="`${title} 界面预览`"
          class="max-h-full max-w-full rounded-xl object-contain shadow-2xl transition-transform duration-200"
          :style="{ transform: `scale(${zoom})` }"
        />
      </div>
    </div>
  </Teleport>
</template>
