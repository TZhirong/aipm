<script setup lang="ts">
import { useRoute } from 'vue-router'
import TheNavbar from './components/TheNavbar.vue'
import TheFooter from './components/TheFooter.vue'

const route = useRoute()
</script>

<template>
  <div class="flex min-h-screen flex-col bg-canvas">
    <TheNavbar />
    <main class="flex-1">
      <RouterView v-slot="{ Component }">
        <Transition name="page" mode="out-in">
          <component :is="Component" :key="route.fullPath" />
        </Transition>
      </RouterView>
    </main>
    <TheFooter />
  </div>
</template>
