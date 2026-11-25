<script setup lang="ts">
defineProps<{
  id: string
  index: string
  title: string
}>()
</script>

<template>
  <section :id="id" class="scroll-mt-28">
    <div class="flex items-baseline gap-3">
      <span class="font-mono text-xs tracking-widest text-brand-500">{{ index }}</span>
      <h2 class="text-xl font-semibold tracking-tight text-ink-900 sm:text-2xl">{{ title }}</h2>
    </div>
    <div class="mt-6">
      <slot />
    </div>
  </section>
</template>
