<script setup lang="ts">
import { allColors } from '@/config/colors'
</script>

<template>
  <Popover>
    <PopoverTrigger as-child>
      <Button
        class="h-9 w-9"
        variant="ghost"
        size="icon"
      >
        <Icon name="lucide:paintbrush" class="h-5 w-5" />
      </Button>
    </PopoverTrigger>
    <PopoverContent :side-offset="8" align="end" class="w-96">
      <ThemeCustomizer :all-colors="allColors" />
    </PopoverContent>
  </Popover>
</template>
