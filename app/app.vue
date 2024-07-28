<script setup lang="ts">
import '@/assets/styles/tailwind-compat.css'
import '@/assets/styles/style.css'
import '@/assets/styles/themes.css'
import '@/assets/styles/doc.css'
import '@/assets/styles/shiki.css'

import { ConfigProvider } from 'radix-vue'
import { appName } from '@/config/site'
import Toaster from '@/components/ui/toast/Toaster.vue'

// https://github.com/radix-vue/radix-vue/issues/577
// fix: nuxt hydration node mismatch no longer breaks UI (#296) - waitting Vue 3.5...
const useIdFunction = () => useId()

const configStore = useConfigStore()
onMounted(() => {
  document.documentElement.style.setProperty('--radius', `${configStore.radius}rem`)
  document.documentElement.classList.add(`theme-${configStore.theme}`)
})

useHead({
  title: appName,
})
</script>

<template>
  <ConfigProvider :use-id="useIdFunction">
    <TooltipProvider :delay-duration="0">
      <VitePwaManifest />
      <NuxtLoadingIndicator style="opacity: 1;" :height="2" />
      <Toaster />
      <NuxtLayout>
        <NuxtPage />
      </NuxtLayout>
    </TooltipProvider>
  </ConfigProvider>
</template>

<style>
</style>
