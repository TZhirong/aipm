<script setup lang="ts">
import type { SkillIcon } from '../data/skills'

defineProps<{ name: SkillIcon }>()
</script>

<template>
  <svg
    v-if="name === 'ai'"
    class="h-5 w-5"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    stroke-width="1.7"
    stroke-linecap="round"
    stroke-linejoin="round"
    aria-hidden="true"
  >
    <path d="M12 3v3M12 18v3M4.5 12h-1.5M21 12h-1.5M6.7 6.7 5.6 5.6M18.4 18.4l-1.1-1.1M6.7 17.3l-1.1 1.1M18.4 5.6l-1.1 1.1" />
    <rect x="8" y="8" width="8" height="8" rx="2" />
    <circle cx="12" cy="12" r="1.4" />
  </svg>
  <svg
    v-else-if="name === 'product'"
    class="h-5 w-5"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    stroke-width="1.7"
    stroke-linecap="round"
    stroke-linejoin="round"
    aria-hidden="true"
  >
    <path d="m12 3 8 4.5-8 4.5-8-4.5L12 3Z" />
    <path d="m4 12 8 4.5 8-4.5" />
    <path d="m4 16.5 8 4.5 8-4.5" />
  </svg>
  <svg
    v-else
    class="h-5 w-5"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    stroke-width="1.7"
    stroke-linecap="round"
    stroke-linejoin="round"
    aria-hidden="true"
  >
    <path d="M4 20V10M10 20V4M16 20v-7M22 20H2" />
    <circle cx="10" cy="4" r="0.8" fill="currentColor" />
  </svg>
</template>
