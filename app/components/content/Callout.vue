<script setup lang="ts">
interface CalloutProps {
  icon?: string
  title?: string
  variant?: string
}

defineProps<CalloutProps>()
</script>

<template>
  <Alert class="not-docs" :variant="variant">
    <span v-if="icon" class="mr-4 inline-block text-lg"><div :class="icon" /></span>
    <AlertTitle v-if="title">
      {{ title }}
    </AlertTitle>
    <AlertDescription class="[&_a]:underline">
      <slot />
    </AlertDescription>
  </Alert>
</template>
