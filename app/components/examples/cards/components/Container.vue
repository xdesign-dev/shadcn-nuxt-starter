<script setup lang="ts">
</script>

<template>
  <div :class="cn('flex items-center justify-center [&>div]:w-full', $attrs.class ?? '')">
    <slot />
  </div>
</template>
