<script setup lang="ts">
import { computed, onBeforeUnmount, onMounted, ref } from 'vue'

type LottieInstance = {
  play: () => void
  pause: () => void
  stop: () => void
  destroy: () => void
  setSpeed: (speed: number) => void
  goToAndStop: (value: number, isFrame?: boolean) => void
  addEventListener: (name: string, callback: () => void) => void
}

type LottieGlobal = {
  loadAnimation: (options: {
    container: HTMLElement
    renderer: 'svg'
    loop: boolean
    autoplay: boolean
    path: string
  }) => LottieInstance
}

const props = withDefaults(
  defineProps<{
    lottieJsonUrl: string
    width?: number | string
    height?: number | string
    hoverPlay?: boolean
    autoPlay?: boolean
    speed?: number
  }>(),
  {
    width: 80,
    height: 80,
    hoverPlay: false,
    autoPlay: true,
    speed: 1
  }
)

const MAX_ATTEMPTS = 40
const WAIT_INTERVAL = 150

const host = ref<HTMLElement | null>(null)
const visible = ref(true)

const sizeStyle = computed(() => ({
  width: typeof props.width === 'number' ? `${props.width}px` : props.width,
  height: typeof props.height === 'number' ? `${props.height}px` : props.height
}))

let instance: LottieInstance | null = null
let observer: IntersectionObserver | null = null
let mobileQuery: MediaQueryList | null = null
let hoverTarget: HTMLElement | null = null
let waitTimer: number | null = null
let attempts = 0
let mounted = false
let inView = false
let failed = false
let hovered = false

function readLottie(): LottieGlobal | null {
  return (window as unknown as { lottie?: LottieGlobal }).lottie ?? null
}

function reducedMotion() {
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches
}

function pageVisible() {
  return document.visibilityState !== 'hidden'
}

function shouldPlayNow() {
  if (!pageVisible()) return false
  if (props.hoverPlay) return hovered
  return props.autoPlay && inView
}

function onHoverEnter() {
  hovered = true
  if (instance) instance.play()
}

function onHoverLeave() {
  hovered = false
  if (instance) instance.stop()
}

function unbindHover() {
  if (!hoverTarget) return
  hoverTarget.removeEventListener('mouseenter', onHoverEnter)
  hoverTarget.removeEventListener('mouseleave', onHoverLeave)
  hoverTarget = null
  hovered = false
}

function bindHover() {
  if (!props.hoverPlay || !host.value) return
  hoverTarget = (host.value.closest('.group') as HTMLElement | null) ?? host.value
  hoverTarget.addEventListener('mouseenter', onHoverEnter)
  hoverTarget.addEventListener('mouseleave', onHoverLeave)
}

function dispose() {
  unbindHover()
  const current = instance
  instance = null
  if (!current) return
  try {
    current.destroy()
  } catch {
    return
  }
}

function onFail() {
  failed = true
  dispose()
}

function createAnimation(lottie: LottieGlobal) {
  if (!host.value || instance || failed) return
  try {
    const current = lottie.loadAnimation({
      container: host.value,
      renderer: 'svg',
      loop: true,
      autoplay: false,
      path: props.lottieJsonUrl
    })
    instance = current
    if (props.speed !== 1) current.setSpeed(props.speed)
    current.addEventListener('data_failed', onFail)
    current.addEventListener('error', onFail)
    current.addEventListener('DOMLoaded', () => {
      if (!instance) return
      current.goToAndStop(0, true)
      if (shouldPlayNow()) current.play()
    })
    bindHover()
  } catch {
    failed = true
    dispose()
  }
}

function waitForLottie() {
  if (!mounted || failed || instance) return
  const lottie = readLottie()
  if (lottie) {
    createAnimation(lottie)
    return
  }
  if (attempts >= MAX_ATTEMPTS) {
    failed = true
    return
  }
  attempts += 1
  waitTimer = window.setTimeout(waitForLottie, WAIT_INTERVAL)
}

function onIntersect(entries: IntersectionObserverEntry[]) {
  entries.forEach((entry) => {
    inView = entry.isIntersecting
    if (entry.isIntersecting) {
      if (instance) {
        if (shouldPlayNow()) instance.play()
      } else {
        waitForLottie()
      }
    } else if (instance) {
      instance.pause()
    }
  })
}

function setupObserver() {
  if (observer || !host.value) return
  observer = new IntersectionObserver(onIntersect, { rootMargin: '200px' })
  observer.observe(host.value)
}

function onVisibilityChange() {
  if (!instance) return
  if (document.visibilityState === 'hidden') {
    instance.pause()
  } else if (shouldPlayNow()) {
    instance.play()
  }
}

function onMobileChange() {
  if (!mobileQuery) return
  if (mobileQuery.matches) {
    visible.value = false
    inView = false
    dispose()
    return
  }
  visible.value = true
  if (!reducedMotion()) setupObserver()
}

onMounted(() => {
  mounted = true
  document.addEventListener('visibilitychange', onVisibilityChange)
  mobileQuery = window.matchMedia('(max-width: 767px)')
  mobileQuery.addEventListener('change', onMobileChange)
  if (mobileQuery.matches) {
    visible.value = false
    return
  }
  if (reducedMotion()) return
  setupObserver()
})

onBeforeUnmount(() => {
  mounted = false
  document.removeEventListener('visibilitychange', onVisibilityChange)
  if (mobileQuery) {
    mobileQuery.removeEventListener('change', onMobileChange)
    mobileQuery = null
  }
  if (observer) {
    observer.disconnect()
    observer = null
  }
  if (waitTimer !== null) {
    window.clearTimeout(waitTimer)
    waitTimer = null
  }
  dispose()
})
</script>

<template>
  <span
    ref="host"
    v-show="visible"
    class="lottie-decor pointer-events-none block overflow-hidden"
    :style="sizeStyle"
    aria-hidden="true"
  ></span>
</template>
