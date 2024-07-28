<script lang="ts" setup>
import { allColors, colors } from '@/config/colors'

const configStore = useConfigStore()
</script>

<template>
  <div>
    <TooltipProvider
      v-for="(color, index) in allColors.slice(0, 5)"
      :key="index"
    >
      <Tooltip>
        <TooltipTrigger as-child>
          <button
            :key="index"
            class="h-9 w-9 flex items-center justify-center border-2 border-border rounded-full text-xs"
            :class="
              color === configStore.theme
                ? 'border-primary'
                : 'border-transparent'
            "
            @click="configStore.setTheme(color)"
          >
            <span
              class="h-6 w-6 flex items-center justify-center rounded-full"
              :style="{ backgroundColor: colors[color][6].rgb }"
            >
              <Icon
                v-if="color === configStore.theme"
                name="radix-icons:check"
                class="h-4 w-4 text-white"
              />
            </span>
          </button>
        </TooltipTrigger>
        <TooltipContent
          align="center"
          :side-offset="1"
          class="bg-zinc-900 text-zinc-50 capitalize"
        >
          {{ allColors[index] }}
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  </div>
</template>
