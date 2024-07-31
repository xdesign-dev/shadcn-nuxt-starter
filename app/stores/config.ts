import { acceptHMRUpdate, defineStore } from 'pinia'
import type { Theme } from '@/config/themes'

interface Config {
  theme?: Theme['name']
  radius: number
}

export const useConfigStore = defineStore('config', () => {
  const RADII = [0, 0.25, 0.5, 0.75, 1]

  const config = reactive<Config>({
    theme: 'green',
    radius: 0.5,
  })

  const themeClass = computed(() => `theme-${config.theme}`)

  const theme = computed(() => config.theme)
  const radius = computed(() => config.radius)

  function setTheme(themeName: Theme['name']) {
    config.theme = themeName
    for (const className of document.documentElement.classList) {
      if (className.startsWith('theme-'))
        document.documentElement.classList.remove(className)
    }
    document.documentElement.classList.add(`theme-${themeName}`)
    const iframes = document.querySelectorAll('iframe')
    // set iframe theme
    iframes.forEach((iframe) => {
      try {
        const iframeDocument = iframe.contentDocument || iframe.contentWindow!.document
        for (const className of iframeDocument.documentElement.classList) {
          if (className.startsWith('theme-'))
            iframeDocument.documentElement.classList.remove(className)
        }
        if (iframeDocument)
          iframeDocument.documentElement.classList.add(`theme-${themeName}`)
      }
      catch (error) {
        console.error(`iframe error: ${error}`)
      }
    })
  }

  function setRadius(newRadius: number) {
    config.radius = newRadius
    if (import.meta.client) {
      document.documentElement.style.setProperty('--radius', `${newRadius}rem`)
      const iframes = document.querySelectorAll('iframe')
      // set iframe theme
      iframes.forEach((iframe) => {
        try {
          const iframeDocument = iframe.contentDocument || iframe.contentWindow!.document
          if (iframeDocument)
            iframeDocument.documentElement.style.setProperty('--radius', `${newRadius}rem`)
        }
        catch (error) {
          console.error(`iframe error: ${error}`)
        }
      })
    }
  }

  return {
    config,
    theme,
    setTheme,
    radius,
    setRadius,
    themeClass,
    RADII,
  }
}, {
  persist: true,
  // persist: { storage: persistedState.localStorage }
})

if (import.meta.hot)
  import.meta.hot.accept(acceptHMRUpdate(useConfigStore, import.meta.hot))
