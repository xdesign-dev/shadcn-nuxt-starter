<script lang="ts" setup>
import type { Color } from '@/config/colors'
import { colors } from '@/config/colors'

defineProps<{
  allColors: Color[]
}>()

const colorMode = useColorMode()
const configStore = useConfigStore()
</script>

<template>
  <div class="p-4">
    <div class="grid space-y-1">
      <h1 class="text-md text-foreground font-semibold">
        Customize
      </h1>
      <p class="text-xs text-muted-foreground">
        Pick a style and color for your components.
      </p>
    </div>
    <div class="pt-6 space-y-1.5">
      <Label for="color" class="text-xs"> Color </Label>
      <div class="grid grid-cols-3 gap-2 py-1.5">
        <Button
          v-for="(color, index) in allColors"
          :key="index"
          variant="outline"
          class="h-8 justify-start px-3"
          :class="
            color === configStore.theme
              ? 'border-foreground border-2'
              : ''
          "
          @click="configStore.setTheme(color)"
        >
          <span
            class="h-5 w-5 flex items-center justify-center rounded-full"
            :style="{ backgroundColor: colors[color][7].rgb }"
          >
            <Icon
              v-if="color === configStore.theme"
              name="radix-icons:check"
              class="h-3 w-3 text-white"
            />
          </span>
          <span class="ml-2 text-xs capitalize">
            {{ color }}
          </span>
        </Button>
      </div>
    </div>
    <div class="pt-6 space-y-1.5">
      <Label for="radius" class="text-xs"> Radius </Label>
      <div class="grid grid-cols-5 gap-2 py-1.5">
        <Button
          v-for="(r, index) in configStore.RADII"
          :key="index"
          variant="outline"
          class="h-8 justify-center px-3"
          :class="
            r === configStore.radius
              ? 'border-foreground border-2'
              : ''
          "
          @click="configStore.setRadius(r)"
        >
          <span class="text-xs">
            {{ r }}
          </span>
        </Button>
      </div>
    </div>
    <div class="pt-6 space-y-1.5">
      <Label for="theme" class="text-xs"> Theme </Label>

      <div class="flex py-1.5 space-x-2">
        <Button
          class="h-8"
          variant="outline"
          :class="{ 'border-2 border-foreground': colorMode.value !== 'dark' }"
          @click="colorMode.preference = 'light'"
        >
          <Icon name="radix-icons:sun" class="mr-2 h-4 w-4" />
          <span class="text-xs">Light</span>
        </Button>
        <Button
          class="h-8"
          variant="outline"
          :class="{ 'border-2 border-foreground': colorMode.value !== 'light' }"
          @click="colorMode.preference = 'dark'"
        >
          <Icon name="radix-icons:moon" class="mr-2 h-4 w-4" />
          <span class="text-xs">Dark</span>
        </Button>
      </div>
    </div>
  </div>
</template>
