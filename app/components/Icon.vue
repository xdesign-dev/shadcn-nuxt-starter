<script setup lang="ts">
import 'iconify-icon'

defineProps<{
  name: string
}>()
</script>

<template>
  <iconify-icon :icon="name" height="unset" />
</template>
