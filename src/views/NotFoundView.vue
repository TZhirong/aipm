<template>
  <div class="container-page flex flex-col items-center py-24 text-center sm:py-32">
    <p class="font-mono text-5xl font-light text-brand-300">404</p>
    <h1 class="mt-5 text-2xl font-semibold tracking-tight text-ink-900 sm:text-3xl">
      页面未找到
    </h1>
    <p class="mt-3 max-w-md text-sm leading-7 text-ink-500">
      你访问的页面可能已被移动或不存在，可以返回首页或直接查看作品集。
    </p>
    <div class="mt-8 flex flex-wrap justify-center gap-3">
      <RouterLink to="/" class="btn btn-primary">返回首页</RouterLink>
      <RouterLink to="/projects" class="btn btn-secondary">查看作品</RouterLink>
    </div>
  </div>
</template>
